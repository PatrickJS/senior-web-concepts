const ipToInt = (address) => {
  const parts = address.split('.').map(Number);
  if (parts.length !== 4 || parts.some((part) => !Number.isInteger(part) || part < 0 || part > 255)) {
    throw new Error(`Invalid IPv4 address: ${address}`);
  }

  return parts.reduce((value, part) => ((value << 8) | part) >>> 0, 0);
};

const intToIp = (value) => [
  (value >>> 24) & 255,
  (value >>> 16) & 255,
  (value >>> 8) & 255,
  value & 255
].join('.');

const sizeForPrefix = (prefix) => 2 ** (32 - prefix);
const usableHosts = (prefix) => Math.max(0, sizeForPrefix(prefix) - 2);
const maskForPrefix = (prefix) => (0xffffffff << (32 - prefix)) >>> 0;

const parseCidr = (cidr) => {
  const [address, prefixText] = cidr.split('/');
  const prefix = Number(prefixText);
  if (!Number.isInteger(prefix) || prefix < 0 || prefix > 32) {
    throw new Error(`Invalid CIDR prefix: ${cidr}`);
  }

  const network = ipToInt(address) & maskForPrefix(prefix);
  return { network, prefix, size: sizeForPrefix(prefix) };
};

const nextPrefixForHosts = (hostsNeeded) => {
  const addressesNeeded = hostsNeeded + 2;
  return 32 - Math.ceil(Math.log2(addressesNeeded));
};

const planSubnets = (baseCidr, requirements) => {
  const base = parseCidr(baseCidr);
  let cursor = base.network;
  const limit = base.network + base.size;

  return requirements
    .toSorted((a, b) => b.hosts - a.hosts)
    .map((requirement) => {
      const prefix = nextPrefixForHosts(requirement.hosts);
      const size = sizeForPrefix(prefix);
      const aligned = Math.ceil(cursor / size) * size;

      if (aligned + size > limit) {
        throw new Error(`Not enough address space for ${requirement.name}`);
      }

      cursor = aligned + size;
      return {
        name: requirement.name,
        cidr: `${intToIp(aligned)}/${prefix}`,
        usableHosts: usableHosts(prefix)
      };
    });
};

console.table(planSubnets('10.20.0.0/20', [
  { name: 'app-private', hosts: 700 },
  { name: 'worker-private', hosts: 400 },
  { name: 'database-private', hosts: 120 },
  { name: 'edge-public', hosts: 48 }
]));
