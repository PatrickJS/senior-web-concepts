export default [
  {
    "title": "CIDR subnet planning",
    "group": "IP addressing and routing fundamentals",
    "summary": "CIDR subnet planning divides address space into ranges sized for hosts, growth, routing, and isolation. A good plan leaves room for expansion, avoids overlapping ranges, and keeps route tables understandable.",
    "example": "network-cidr-planning",
    "roleTags": ["jr", "network", "platform"]
  },
  {
    "title": "Private vs public addressing",
    "group": "IP addressing and routing fundamentals",
    "summary": "Private and public addressing define whether traffic can be routed on the public internet or must stay inside a private network boundary. Engineers should recognize RFC1918 ranges, loopback, link-local addresses, and the translation or proxy paths needed for egress.",
    "example": "network-private-public-addressing",
    "roleTags": ["jr", "network", "platform"]
  },
  {
    "title": "Route tables and next hops",
    "group": "IP addressing and routing fundamentals",
    "summary": "Route tables choose the next hop for packets based on destination prefixes. Longest-prefix matching, default routes, blackhole routes, and asymmetric paths are core ideas for debugging reachability.",
    "example": "network-route-table",
    "roleTags": ["mid", "network", "platform"]
  },
  {
    "title": "NAT and egress design",
    "group": "IP addressing and routing fundamentals",
    "summary": "NAT and egress design let private workloads initiate outbound traffic through shared public addresses. Designs must account for port exhaustion, source identity, logging, allowlists, and failure domains.",
    "example": "network-nat-egress",
    "roleTags": ["mid", "network", "platform"]
  },
  {
    "title": "Anycast and global routing",
    "group": "IP addressing and routing fundamentals",
    "summary": "Anycast advertises the same address from multiple locations so routing sends users to a nearby or preferred site. It improves global latency and resilience but requires careful health signaling and traffic-drain behavior.",
    "example": "network-anycast-routing",
    "roleTags": ["sr", "network", "platform"]
  },
  {
    "title": "DNS record types and TTLs",
    "group": "DNS, TLS, and edge delivery",
    "summary": "DNS record types and TTLs control how names resolve and how quickly changes propagate. Practical fluency includes A, AAAA, CNAME, MX, TXT, NS, CAA, apex constraints, and cache duration trade-offs.",
    "example": "network-dns-records",
    "roleTags": ["jr", "network", "platform"]
  },
  {
    "title": "Recursive vs authoritative DNS",
    "group": "DNS, TLS, and edge delivery",
    "summary": "Recursive resolvers answer client queries by consulting authoritative DNS servers and caching results. Knowing the difference helps diagnose stale answers, delegation mistakes, split-horizon DNS, and resolver-specific failures.",
    "example": "network-dns-resolution",
    "roleTags": ["mid", "network"]
  },
  {
    "title": "TLS certificate chain validation",
    "group": "DNS, TLS, and edge delivery",
    "summary": "TLS certificate chain validation proves that a presented certificate chains to a trusted root and matches the requested host. Failures can come from expired certs, missing intermediates, name mismatch, weak policy, or incorrect time.",
    "example": "network-tls-chain",
    "roleTags": ["mid", "network", "security"]
  },
  {
    "title": "CDN caching and edge routing",
    "group": "DNS, TLS, and edge delivery",
    "summary": "CDN caching and edge routing move responses closer to users while respecting cache keys, freshness, purge behavior, origin shielding, and request routing policy. The edge becomes part of the production system, not just a static asset layer.",
    "example": "network-cdn-routing",
    "roleTags": ["sr", "network", "platform"]
  },
  {
    "title": "HTTP proxy and reverse proxy behavior",
    "group": "DNS, TLS, and edge delivery",
    "summary": "HTTP proxies and reverse proxies terminate, forward, rewrite, buffer, retry, and observe traffic between clients and services. Headers such as Host, X-Forwarded-For, and Forwarded become trust boundaries.",
    "example": "network-reverse-proxy",
    "roleTags": ["mid", "network", "backend"]
  },
  {
    "title": "TCP handshake and connection lifecycle",
    "group": "Transport protocols and performance",
    "summary": "The TCP handshake and connection lifecycle establish reliable ordered byte streams, then tear them down with FIN or RST behavior. Connection setup, reuse, idle timeouts, and keepalives affect latency and failure handling.",
    "example": "network-tcp-handshake",
    "roleTags": ["jr", "network", "backend"]
  },
  {
    "title": "TCP congestion and packet loss",
    "group": "Transport protocols and performance",
    "summary": "TCP congestion control adjusts sending rate based on acknowledgements, loss, delay, and congestion window behavior. Packet loss and retransmits can turn a healthy service into a slow one before application metrics show errors.",
    "example": "network-congestion-loss",
    "roleTags": ["sr", "network", "backend"]
  },
  {
    "title": "UDP, QUIC, and connection migration",
    "group": "Transport protocols and performance",
    "summary": "UDP gives applications datagrams without TCP's built-in reliability, while QUIC builds encrypted streams, loss recovery, and connection migration over UDP. This changes how latency, packet loss, and client network changes are handled.",
    "example": "network-quic-migration",
    "roleTags": ["sr", "network", "backend"]
  },
  {
    "title": "MTU, fragmentation, and PMTUD",
    "group": "Transport protocols and performance",
    "summary": "MTU limits the largest packet a path can carry without fragmentation. Path MTU discovery failures can produce confusing partial outages where small requests work and larger responses stall.",
    "example": "network-mtu-pmtud",
    "roleTags": ["sr", "network", "platform"]
  },
  {
    "title": "Load balancer algorithms",
    "group": "Transport protocols and performance",
    "summary": "Load balancer algorithms choose targets with policies such as round robin, least connections, weighted routing, hashing, locality, or latency. The choice affects fairness, cache locality, stickiness, failure recovery, and hot spots.",
    "example": "network-load-balancer-algorithms",
    "roleTags": ["mid", "network", "platform"]
  },
  {
    "title": "Firewall rule ordering",
    "group": "Security and access control",
    "summary": "Firewall rule ordering determines which allow or deny rule applies first. Specificity, default deny, explicit egress, logging, and rule shadowing are essential for both security and debugging.",
    "example": "network-firewall-rules",
    "roleTags": ["mid", "network", "security"]
  },
  {
    "title": "Security groups vs network ACLs",
    "group": "Security and access control",
    "summary": "Security groups and network ACLs apply network policy at different scopes and with different state behavior. Engineers should understand instance, subnet, stateful, stateless, inbound, and outbound rule implications.",
    "example": "network-security-groups-acls",
    "roleTags": ["mid", "network", "security"]
  },
  {
    "title": "VPN and private connectivity",
    "group": "Security and access control",
    "summary": "VPN and private connectivity link users, offices, clouds, and partners without exposing services publicly. Designs must cover routing, authentication, split tunnel behavior, overlapping CIDRs, failover, and auditability.",
    "example": "network-vpn-connectivity",
    "roleTags": ["sr", "network", "platform"]
  },
  {
    "title": "Zero trust network access",
    "group": "Security and access control",
    "summary": "Zero trust network access grants service access based on identity, device posture, context, and policy rather than broad network location. It shrinks implicit trust but requires strong identity, logging, and exception handling.",
    "example": "network-zero-trust-access",
    "roleTags": ["sr", "network", "security"]
  },
  {
    "title": "DDoS protection and traffic scrubbing",
    "group": "Security and access control",
    "summary": "DDoS protection and traffic scrubbing absorb or filter malicious floods before they exhaust application, network, or origin capacity. Useful defenses combine edge capacity, rate limits, challenge flows, filtering, and runbooks.",
    "example": "network-ddos-scrubbing",
    "roleTags": ["sr", "network", "security"]
  },
  {
    "title": "VPC peering and transit gateways",
    "group": "Service networking and cloud topology",
    "summary": "VPC peering and transit gateways connect private networks with different scaling and routing properties. Topology choices affect blast radius, route propagation, inspection points, and ownership boundaries.",
    "example": "network-transit-topology",
    "roleTags": ["sr", "network", "platform"]
  },
  {
    "title": "Service discovery and DNS-based routing",
    "group": "Service networking and cloud topology",
    "summary": "Service discovery lets callers find healthy service instances or stable service names. DNS-based discovery is simple and portable, but TTLs, negative caching, health checks, and client caching shape failover behavior.",
    "example": "network-service-discovery",
    "roleTags": ["mid", "network", "platform"]
  },
  {
    "title": "Ingress and egress gateway design",
    "group": "Service networking and cloud topology",
    "summary": "Ingress and egress gateways centralize traffic entry and exit for policy, observability, routing, and security controls. They also become critical-path infrastructure with capacity and failure-mode obligations.",
    "example": "network-gateway-design",
    "roleTags": ["sr", "network", "platform"]
  },
  {
    "title": "Multi-region failover routing",
    "group": "Service networking and cloud topology",
    "summary": "Multi-region failover routing directs users away from unhealthy regions while balancing recovery time, data consistency, DNS or edge cache behavior, and traffic-drain safety. It must be tested before an incident.",
    "example": "network-multi-region-failover",
    "roleTags": ["sr", "network", "system"]
  },
  {
    "title": "IPv4 vs IPv6 dual-stack",
    "group": "Service networking and cloud topology",
    "summary": "IPv4 and IPv6 dual-stack systems support both address families across DNS, routing, firewalls, load balancers, clients, and observability. Partial dual-stack rollouts can produce asymmetric reachability failures.",
    "example": "network-dual-stack",
    "roleTags": ["mid", "network", "platform"]
  },
  {
    "title": "Packet capture fundamentals",
    "group": "Observability and troubleshooting",
    "summary": "Packet capture fundamentals help engineers inspect actual traffic rather than inferred application behavior. Good captures choose the right interface, filters, time window, and privacy boundaries.",
    "example": "network-packet-capture",
    "roleTags": ["mid", "network"]
  },
  {
    "title": "Traceroute and path diagnosis",
    "group": "Observability and troubleshooting",
    "summary": "Traceroute and path diagnosis reveal likely network hops, latency jumps, and routing asymmetry. Results require interpretation because rate limits, firewalls, tunnels, and ICMP policy can hide or distort hops.",
    "example": "network-traceroute-diagnosis",
    "roleTags": ["jr", "network"]
  },
  {
    "title": "Synthetic network probes",
    "group": "Observability and troubleshooting",
    "summary": "Synthetic network probes continuously test reachability, DNS, TLS, latency, packet loss, and regional routing from controlled vantage points. They catch network-path problems before users or services report them.",
    "example": "network-synthetic-probes",
    "roleTags": ["mid", "network", "platform"]
  },
  {
    "title": "SLOs for network reliability",
    "group": "Observability and troubleshooting",
    "summary": "Network reliability SLOs define measurable expectations for availability, latency, loss, DNS success, TLS success, and regional reachability. They connect lower-level signals to user-visible service behavior.",
    "example": "network-reliability-slo",
    "roleTags": ["sr", "network", "platform"]
  },
  {
    "title": "Incident triage for network partitions",
    "group": "Observability and troubleshooting",
    "summary": "Network partition triage separates application failure from reachability, DNS, routing, firewall, load balancer, or provider issues. Responders need a disciplined path from symptom to packet path to ownership.",
    "example": "network-partition-triage",
    "roleTags": ["sr", "network", "platform"]
  }
];
