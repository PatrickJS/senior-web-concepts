# Network requirements

**Role tag:** network
**Topics:** 30

Requirements for IP addressing, routing, DNS, TLS, edge delivery, transport behavior, access control, and network troubleshooting.

A learner should be able to explain the mechanism, identify the production failure modes, and describe practical JavaScript/Node.js trade-offs for each required concept.

## Coverage by domain

- Network Engineering: 30

## Required concepts

### Network Engineering

#### IP addressing and routing fundamentals

- [CIDR subnet planning](../network-engineering/topics/cidr-subnet-planning.md) — CIDR subnet planning divides address space into ranges sized for hosts, growth, routing, and isolation. A good plan leaves room for expansion, avoids overlapping ranges, and keeps route tables understandable.
- [Private vs public addressing](../network-engineering/topics/private-vs-public-addressing.md) — Private and public addressing define whether traffic can be routed on the public internet or must stay inside a private network boundary. Engineers should recognize RFC1918 ranges, loopback, link-local addresses, and the translation or proxy paths needed for egress.
- [Route tables and next hops](../network-engineering/topics/route-tables-and-next-hops.md) — Route tables choose the next hop for packets based on destination prefixes. Longest-prefix matching, default routes, blackhole routes, and asymmetric paths are core ideas for debugging reachability.
- [NAT and egress design](../network-engineering/topics/nat-and-egress-design.md) — NAT and egress design let private workloads initiate outbound traffic through shared public addresses. Designs must account for port exhaustion, source identity, logging, allowlists, and failure domains.
- [Anycast and global routing](../network-engineering/topics/anycast-and-global-routing.md) — Anycast advertises the same address from multiple locations so routing sends users to a nearby or preferred site. It improves global latency and resilience but requires careful health signaling and traffic-drain behavior.

#### DNS, TLS, and edge delivery

- [DNS record types and TTLs](../network-engineering/topics/dns-record-types-and-ttls.md) — DNS record types and TTLs control how names resolve and how quickly changes propagate. Practical fluency includes A, AAAA, CNAME, MX, TXT, NS, CAA, apex constraints, and cache duration trade-offs.
- [Recursive vs authoritative DNS](../network-engineering/topics/recursive-vs-authoritative-dns.md) — Recursive resolvers answer client queries by consulting authoritative DNS servers and caching results. Knowing the difference helps diagnose stale answers, delegation mistakes, split-horizon DNS, and resolver-specific failures.
- [TLS certificate chain validation](../network-engineering/topics/tls-certificate-chain-validation.md) — TLS certificate chain validation proves that a presented certificate chains to a trusted root and matches the requested host. Failures can come from expired certs, missing intermediates, name mismatch, weak policy, or incorrect time.
- [CDN caching and edge routing](../network-engineering/topics/cdn-caching-and-edge-routing.md) — CDN caching and edge routing move responses closer to users while respecting cache keys, freshness, purge behavior, origin shielding, and request routing policy. The edge becomes part of the production system, not just a static asset layer.
- [HTTP proxy and reverse proxy behavior](../network-engineering/topics/http-proxy-and-reverse-proxy-behavior.md) — HTTP proxies and reverse proxies terminate, forward, rewrite, buffer, retry, and observe traffic between clients and services. Headers such as Host, X-Forwarded-For, and Forwarded become trust boundaries.

#### Transport protocols and performance

- [TCP handshake and connection lifecycle](../network-engineering/topics/tcp-handshake-and-connection-lifecycle.md) — The TCP handshake and connection lifecycle establish reliable ordered byte streams, then tear them down with FIN or RST behavior. Connection setup, reuse, idle timeouts, and keepalives affect latency and failure handling.
- [TCP congestion and packet loss](../network-engineering/topics/tcp-congestion-and-packet-loss.md) — TCP congestion control adjusts sending rate based on acknowledgements, loss, delay, and congestion window behavior. Packet loss and retransmits can turn a healthy service into a slow one before application metrics show errors.
- [UDP, QUIC, and connection migration](../network-engineering/topics/udp-quic-and-connection-migration.md) — UDP gives applications datagrams without TCP's built-in reliability, while QUIC builds encrypted streams, loss recovery, and connection migration over UDP. This changes how latency, packet loss, and client network changes are handled.
- [MTU, fragmentation, and PMTUD](../network-engineering/topics/mtu-fragmentation-and-pmtud.md) — MTU limits the largest packet a path can carry without fragmentation. Path MTU discovery failures can produce confusing partial outages where small requests work and larger responses stall.
- [Load balancer algorithms](../network-engineering/topics/load-balancer-algorithms.md) — Load balancer algorithms choose targets with policies such as round robin, least connections, weighted routing, hashing, locality, or latency. The choice affects fairness, cache locality, stickiness, failure recovery, and hot spots.

#### Security and access control

- [Firewall rule ordering](../network-engineering/topics/firewall-rule-ordering.md) — Firewall rule ordering determines which allow or deny rule applies first. Specificity, default deny, explicit egress, logging, and rule shadowing are essential for both security and debugging.
- [Security groups vs network ACLs](../network-engineering/topics/security-groups-vs-network-acls.md) — Security groups and network ACLs apply network policy at different scopes and with different state behavior. Engineers should understand instance, subnet, stateful, stateless, inbound, and outbound rule implications.
- [VPN and private connectivity](../network-engineering/topics/vpn-and-private-connectivity.md) — VPN and private connectivity link users, offices, clouds, and partners without exposing services publicly. Designs must cover routing, authentication, split tunnel behavior, overlapping CIDRs, failover, and auditability.
- [Zero trust network access](../network-engineering/topics/zero-trust-network-access.md) — Zero trust network access grants service access based on identity, device posture, context, and policy rather than broad network location. It shrinks implicit trust but requires strong identity, logging, and exception handling.
- [DDoS protection and traffic scrubbing](../network-engineering/topics/ddos-protection-and-traffic-scrubbing.md) — DDoS protection and traffic scrubbing absorb or filter malicious floods before they exhaust application, network, or origin capacity. Useful defenses combine edge capacity, rate limits, challenge flows, filtering, and runbooks.

#### Service networking and cloud topology

- [VPC peering and transit gateways](../network-engineering/topics/vpc-peering-and-transit-gateways.md) — VPC peering and transit gateways connect private networks with different scaling and routing properties. Topology choices affect blast radius, route propagation, inspection points, and ownership boundaries.
- [Service discovery and DNS-based routing](../network-engineering/topics/service-discovery-and-dns-based-routing.md) — Service discovery lets callers find healthy service instances or stable service names. DNS-based discovery is simple and portable, but TTLs, negative caching, health checks, and client caching shape failover behavior.
- [Ingress and egress gateway design](../network-engineering/topics/ingress-and-egress-gateway-design.md) — Ingress and egress gateways centralize traffic entry and exit for policy, observability, routing, and security controls. They also become critical-path infrastructure with capacity and failure-mode obligations.
- [Multi-region failover routing](../network-engineering/topics/multi-region-failover-routing.md) — Multi-region failover routing directs users away from unhealthy regions while balancing recovery time, data consistency, DNS or edge cache behavior, and traffic-drain safety. It must be tested before an incident.
- [IPv4 vs IPv6 dual-stack](../network-engineering/topics/ipv4-vs-ipv6-dual-stack.md) — IPv4 and IPv6 dual-stack systems support both address families across DNS, routing, firewalls, load balancers, clients, and observability. Partial dual-stack rollouts can produce asymmetric reachability failures.

#### Observability and troubleshooting

- [Packet capture fundamentals](../network-engineering/topics/packet-capture-fundamentals.md) — Packet capture fundamentals help engineers inspect actual traffic rather than inferred application behavior. Good captures choose the right interface, filters, time window, and privacy boundaries.
- [Traceroute and path diagnosis](../network-engineering/topics/traceroute-and-path-diagnosis.md) — Traceroute and path diagnosis reveal likely network hops, latency jumps, and routing asymmetry. Results require interpretation because rate limits, firewalls, tunnels, and ICMP policy can hide or distort hops.
- [Synthetic network probes](../network-engineering/topics/synthetic-network-probes.md) — Synthetic network probes continuously test reachability, DNS, TLS, latency, packet loss, and regional routing from controlled vantage points. They catch network-path problems before users or services report them.
- [SLOs for network reliability](../network-engineering/topics/slos-for-network-reliability.md) — Network reliability SLOs define measurable expectations for availability, latency, loss, DNS success, TLS success, and regional reachability. They connect lower-level signals to user-visible service behavior.
- [Incident triage for network partitions](../network-engineering/topics/incident-triage-for-network-partitions.md) — Network partition triage separates application failure from reachability, DNS, routing, firewall, load balancer, or provider issues. Responders need a disciplined path from symptom to packet path to ownership.
