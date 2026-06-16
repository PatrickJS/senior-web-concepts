# Network Engineering concepts

30 topics mapped into summaries and JavaScript/Node.js examples.

## Career-level progression

- [Junior](../roles/jr.md) — 5 topics
- [Mid-level](../roles/mid.md) — 12 topics
- [Senior](../roles/sr.md) — 13 topics

## IP addressing and routing fundamentals

Use this group to reason about address space, route selection, NAT, and global traffic paths before blaming application code.

- [CIDR subnet planning](topics/cidr-subnet-planning.md) — jr, network, platform
- [Private vs public addressing](topics/private-vs-public-addressing.md) — jr, network, platform
- [Route tables and next hops](topics/route-tables-and-next-hops.md) — mid, network, platform
- [NAT and egress design](topics/nat-and-egress-design.md) — mid, network, platform
- [Anycast and global routing](topics/anycast-and-global-routing.md) — sr, network, platform

## DNS, TLS, and edge delivery

Use this group to connect names, certificates, proxies, CDNs, caches, and edge routing to real production reachability.

- [DNS record types and TTLs](topics/dns-record-types-and-ttls.md) — jr, network, platform
- [Recursive vs authoritative DNS](topics/recursive-vs-authoritative-dns.md) — mid, network
- [TLS certificate chain validation](topics/tls-certificate-chain-validation.md) — mid, network, security
- [CDN caching and edge routing](topics/cdn-caching-and-edge-routing.md) — sr, network, platform
- [HTTP proxy and reverse proxy behavior](topics/http-proxy-and-reverse-proxy-behavior.md) — mid, network, backend

## Transport protocols and performance

Use this group to explain latency, connection setup, packet loss, congestion, MTU behavior, and load-balancing effects.

- [TCP handshake and connection lifecycle](topics/tcp-handshake-and-connection-lifecycle.md) — jr, network, backend
- [TCP congestion and packet loss](topics/tcp-congestion-and-packet-loss.md) — sr, network, backend
- [UDP, QUIC, and connection migration](topics/udp-quic-and-connection-migration.md) — sr, network, backend
- [MTU, fragmentation, and PMTUD](topics/mtu-fragmentation-and-pmtud.md) — sr, network, platform
- [Load balancer algorithms](topics/load-balancer-algorithms.md) — mid, network, platform

## Security and access control

Use this group to make network access explicit through firewalls, private links, zero-trust policy, and traffic protection.

- [Firewall rule ordering](topics/firewall-rule-ordering.md) — mid, network, security
- [Security groups vs network ACLs](topics/security-groups-vs-network-acls.md) — mid, network, security
- [VPN and private connectivity](topics/vpn-and-private-connectivity.md) — sr, network, platform
- [Zero trust network access](topics/zero-trust-network-access.md) — sr, network, security
- [DDoS protection and traffic scrubbing](topics/ddos-protection-and-traffic-scrubbing.md) — sr, network, security

## Service networking and cloud topology

Use this group to design how services, VPCs, gateways, regions, discovery, and address families connect.

- [VPC peering and transit gateways](topics/vpc-peering-and-transit-gateways.md) — sr, network, platform
- [Service discovery and DNS-based routing](topics/service-discovery-and-dns-based-routing.md) — mid, network, platform
- [Ingress and egress gateway design](topics/ingress-and-egress-gateway-design.md) — sr, network, platform
- [Multi-region failover routing](topics/multi-region-failover-routing.md) — sr, network, system
- [IPv4 vs IPv6 dual-stack](topics/ipv4-vs-ipv6-dual-stack.md) — mid, network, platform

## Observability and troubleshooting

Use this group to diagnose network behavior with captures, traces, probes, SLOs, and incident triage routines.

- [Packet capture fundamentals](topics/packet-capture-fundamentals.md) — mid, network
- [Traceroute and path diagnosis](topics/traceroute-and-path-diagnosis.md) — jr, network
- [Synthetic network probes](topics/synthetic-network-probes.md) — mid, network, platform
- [SLOs for network reliability](topics/slos-for-network-reliability.md) — sr, network, platform
- [Incident triage for network partitions](topics/incident-triage-for-network-partitions.md) — sr, network, platform
