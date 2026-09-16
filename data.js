// Auto-generated from Part_9_.pdf, Part_12.pdf, Part 10.pdf, and Part 11.pdf. Do not hand-edit.
// BATCH_A / BATCH_B built by build_data.py. BATCH_C (leftover + drag-and-drop questions from Part_9_/Part_12) built by build_batch_c.py.
// BATCH_D / BATCH_E / BATCH_F built by build_batch_def.py from Part 10.pdf / Part 11.pdf.
var BATCH_A = [
  {
    "id": "p9_q001",
    "question": "Refer to the exhibit.\n\n```\nSwitch#show etherchannel summary\n[output omitted]\n\nGroup  Port-channel  Protocol  Ports\n-------+--------------+----------+----------------------\n10     Po10(SU)      LACP      Gi0/0(P) Gi0/1(P)\n20     Po20(SU)      LACP      Gi0/2(P) Gi0/3(P)\n```\n\nWhich two commands when used together create port channel 10? (Choose two)",
    "image": null,
    "options": [
      "int range g0/0-1\nchannel-group 10 mode active",
      "int range g0/0-1\nchannel-group 10 mode desirable",
      "int range g0/0-1\nchannel-group 10 mode passive",
      "int range g0/0-1\nchannel-group 10 mode auto",
      "int range g0/0-1\nchannel-group 10 mode on"
    ],
    "correctIndexes": [
      0,
      2
    ],
    "explanation": "LACP is the protocol shown in the output, so the interfaces must be configured with an LACP-compatible mode. \"active\" unconditionally starts LACP negotiation, and \"passive\" will negotiate only if it receives LACP packets from an active side, so active+passive (or active+active) forms the channel. \"desirable\", \"auto\", and \"on\" are PAgP/static modes, not LACP modes."
  },
  {
    "id": "p9_q002",
    "question": "Which type of IPv6 address is similar to a unicast address but is assigned to multiple devices on the same network at the same time?",
    "image": null,
    "options": [
      "global unicast address",
      "anycast address",
      "multicast address",
      "link-local address"
    ],
    "correctIndexes": [
      1
    ],
    "explanation": "The anycast address is very similar to the multicast address, but packets will be delivered to only one random host, instead of the entire group. Anycast addresses don't have a specific range, as they are exactly the same as regular unicast addresses. This means that a host has no way to distinguish a unicast from an anycast address when it sends a packet."
  },
  {
    "id": "p9_q003",
    "question": "Which field within the access-request packet is encrypted by RADIUS?",
    "image": null,
    "options": [
      "authorized services",
      "authenticator",
      "username",
      "password"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "RADIUS encrypts only the password in the access-request packet, from the client to the server. The remainder of the packet is unencrypted. Other information, such as username, authorized services, and accounting, can be captured by a third party. Reference: https://www.cisco.com/c/en/us/support/docs/security-vpn/remote-authentication-dial-user-service-radius/13838-10.html"
  },
  {
    "id": "p9_q004",
    "question": "Refer to the exhibit.\n\n```\nR1#show ip ospf neighbor\nNeighbor ID     Pri  State      Dead Time  Address        Interface\n192.168.100.2   1    FULL/BDR   00:00:35   192.168.100.2  FastEthernet0/0\n192.168.100.3   1    FULL/DR    00:00:34   192.168.100.3  FastEthernet0/0\n```\n\nWhich two configurations must the engineer apply on this network so that R1 becomes the DR? (Choose two)",
    "image": "p9_q004.png",
    "options": [
      "R1(config)#interface fastethernet0/0\nR1(config-if)#ip ospf priority 200",
      "R1(config)#router ospf 1\nR1(config-router)#router-id 192.168.100.1",
      "R3(config)#interface fastethernet0/0\nR3(config-if)#ip ospf priority 0",
      "R1(config)#interface fastethernet0/0\nR1(config-if)#ip ospf priority 0",
      "R3(config)#interface fastethernet0/0\nR3(config-if)#ip ospf priority 200"
    ],
    "correctIndexes": [
      0,
      2
    ],
    "explanation": "R1 is currently neither DR nor BDR (R2 is BDR, R3 is DR). To make R1 the DR, R1's OSPF priority must be raised above that of R2 and R3 (option A, priority 200), and the current DR (R3) must be prevented from staying DR by setting its priority to 0, which also forces a new DR election (option C). Simply raising R1's priority alone would not trigger re-election while R3 remains DR."
  },
  {
    "id": "p9_q005",
    "question": "Refer to the exhibit.\n\nThe router has been configured with a supernet to accommodate the requirement for 380 users on a subnet. The requirement already considers 30% future growth. Which configuration verifies the IP subnet on router R4?",
    "image": "p9_q005.png",
    "options": [
      "Subnet: 10.7.54.0\nSubnet mask: 255.255.254.0\nBroadcast address: 10.7.54.255\nUsable IP address range: 10.7.54.1 – 10.7.55.254",
      "Subnet: 10.7.54.0\nSubnet mask: 255.255.254.0\nBroadcast address: 10.7.55.255\nUsable IP address range: 10.7.54.1 – 10.7.55.254",
      "Subnet: 10.7.54.0\nSubnet mask: 255.255.128.0\nBroadcast address: 10.7.55.255\nUsable IP address range: 10.7.54.1 – 10.7.55.254",
      "Subnet: 10.7.54.0\nSubnet mask: 255.255.255.0\nBroadcast address: 10.7.54.255\nUsable IP address range: 10.7.54.1 – 10.7.55.254"
    ],
    "correctIndexes": [
      1
    ],
    "explanation": "380 users in a subnet < 512 = 2^9. Therefore we need 9 host bits in the subnet mask -> 255.255.254.0. The increment is 2 (in the third octet) so the broadcast address is 10.7.55.255."
  },
  {
    "id": "p9_q006",
    "question": "What is a function of a Next-Generation IPS?",
    "image": null,
    "options": [
      "makes forwarding decisions based on learned MAC addresses",
      "serves as a controller within a controller-based network",
      "integrates with a RADIUS server to enforce Layer 2 device authentication rules",
      "correlates user activity with network events"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "A Next-Generation IPS (NGIPS) provides context-aware correlation, combining network events with user and application activity to give deeper visibility into threats, beyond simple signature matching."
  },
  {
    "id": "p9_q007",
    "question": "What is the difference between IPv6 unicast and anycast addressing?",
    "image": null,
    "options": [
      "An individual IPv6 unicast address is supported on a single interface on one node but an IPv6 anycast address is assigned to a group of interfaces on multiple nodes.",
      "IPv6 unicast nodes must be explicitly configured to recognize the unicast address, but IPv6 anycast nodes require no special configuration",
      "IPv6 anycast nodes must be explicitly configured to recognize the anycast address, but IPv6 unicast nodes require no special configuration",
      "Unlike an IPv6 anycast address, an IPv6 unicast address is assigned to a group of interfaces on multiple nodes"
    ],
    "correctIndexes": [
      0
    ],
    "explanation": "A unicast address identifies a single interface on a single node, while an anycast address is assigned to a group of interfaces (typically on different nodes), and a packet sent to it is delivered to the nearest one."
  },
  {
    "id": "p9_q008",
    "question": "Refer to the exhibit.\n\n```\nip domain-name CNAC.com\n!\ninterface GigabitEthernet0/0/0\n  ip address 192.168.1.10 255.255.255.0\n  duplex auto\n  speed auto\n!\nline vty 0 15\n  login local\n\nR1#show crypto key mypubkey rsa\n\nR1#show ssh\n\n%No SSHv2 server connections running.\n%No SSHv1 server connections running.\n```\n\nWhich two commands must be added to update the configuration of router R1 so that it accepts only encrypted connections? (Choose two)",
    "image": null,
    "options": [
      "username CNAC secret R!41!4319115@",
      "crypto key generate rsa 1024",
      "ip ssh version 2",
      "line vty 0 4",
      "transport input ssh"
    ],
    "correctIndexes": [
      1,
      4
    ],
    "explanation": "\"Encrypted connections\" here imply SSH, not Telnet, so this question wants to ask to only accept SSH connections. From the output of \"show crypto key mypubkey rsa\" command, we learn that currently there is no RSA key generated so answer B is necessary to generate the RSA key (although it is missing the \"modulus\" keyword, the full command should be \"crypto key generate rsa modulus 1024\", but maybe it is just a typo). \"transport input ssh\" under the vty lines restricts connections to SSH only. Although answer A is also necessary, we are not sure if any username has been configured or not so it is not totally correct."
  },
  {
    "id": "p9_q009",
    "question": "Which action is taken by the data plane within a network device?",
    "image": null,
    "options": [
      "looks up an egress interface in the forwarding information base",
      "constructs a routing table based on a routing protocol",
      "provides CLI access to the network device",
      "forwards traffic to the next hop"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "The data plane forwards traffic to the next hop using information programmed by the control plane; constructing routing tables and providing CLI access are control-plane/management-plane functions, while looking up the FIB is part of the process but the resulting action taken is forwarding the traffic."
  },
  {
    "id": "p9_q010",
    "question": "R1 as an NTP server must have:\n* NTP authentication enabled\n* NTP packets sourced from Interface loopback 0\n* NTP stratum 2\n* NTP packets only permitted to client IP 209.165.200.225\n\nHow should R1 be configured?",
    "image": null,
    "options": [
      "Option A:\n```\nntp authenticate\nntp authentication-key 2 sha1 CISCO123\nntp source Loopback0\nntp access-group server-only 10\nntp master 2\n!\naccess-list 10 permit udp host 209.165.200.225 any eq 123\n```",
      "Option B:\n```\nntp authenticate\nntp authentication-key 2 md5 CISCO123\nntp source Loopback0\nntp access-group server-only 10\nntp stratum 2\n!\naccess-list 10 permit udp host 209.165.200.225 any eq 123\n```",
      "Option C:\n```\nntp authenticate\nntp authentication-key 2 md5 CISCO123\nntp interface Loopback0\nntp access-group server-only 10\nntp stratum 2\n!\naccess-list 10 permit 209.165.200.225\n```",
      "Option D:\n```\nntp authenticate\nntp authentication-key 2 md5 CISCO123\nntp source Loopback0\nntp access-group server-only 10\nntp master 2\n!\naccess-list 10 permit 209.165.200.225\n```"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "To configure a Cisco device as an Authoritative NTP Server, use the \"ntp master [stratum]\" command -> Only Option A and Option D are correct. ACL 10 is a standard ACL so we cannot configure a protocol (UDP in this case) for the ACL; we can only configure the source IP address -> Option D is correct."
  },
  {
    "id": "p9_q011",
    "question": "Refer to the exhibit.\n\n```\nDuring outage\n\nR1#show ip route 10.1.1.10\n% Network not in table\n\nNormal operation\n\nR1#show ip route 10.1.1.10\nRouting entry for 10.1.1.0/24\nKnown via \"ospf 1\", distance 110, metric 2, type intra area\n  Last update from 172.16.2.2 on GigabitEthernet0/0, 00:00:18 ago\n  Routing Descriptor Blocks:\n  * 172.16.2.2, from 10.1.1.10, 00:00:18 ago, via GigabitEthernet0/0\n    Route metric is 2, traffic share count is 1\n```\n\nWhich route must be configured on R1 so that OSPF routing is used when OSPF is up, but the server is still reachable when OSPF goes down?",
    "image": "p9_q011.png",
    "options": [
      "ip route 10.1.1.10 255.255.255.255 172.16.2.2 100",
      "ip route 10.1.1.0 255.255.255.0 gi0/1 125",
      "ip route 10.1.1.0 255.255.255.0 172.16.2.2 100",
      "ip route 10.1.1.10 255.255.255.255 gi0/0 125"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "The floating static route must have an administrative distance (125) higher than OSPF's (110) so OSPF is preferred when up, and must point out the correct outgoing interface (Gi0/0, toward the OSPF cloud/server) with a host route matching the server address, so it only takes over when OSPF's route disappears."
  },
  {
    "id": "p9_q012",
    "question": "How does Rapid PVST+ create a fast loop-free network topology?",
    "image": null,
    "options": [
      "It requires multiple links between core switches",
      "It maps multiple VLANs into the same spanning-tree instance",
      "It generates one spanning-tree instance for each VLAN",
      "It uses multiple active paths between end stations"
    ],
    "correctIndexes": [
      2
    ],
    "explanation": "Rapid PVST+ runs a separate instance of Rapid Spanning Tree (802.1w) for each VLAN, allowing fast convergence per VLAN while still maintaining a loop-free topology."
  },
  {
    "id": "p9_q013",
    "question": "Which WLC management connection type is vulnerable to man-in-the-middle attacks?",
    "image": null,
    "options": [
      "SSH",
      "HTTPS",
      "Telnet",
      "console"
    ],
    "correctIndexes": [
      2
    ],
    "explanation": "As you know, telnet is insecure. By default, telnet is disabled on Cisco WLCs. So, if you want to use telnet, you must enable it."
  },
  {
    "id": "p9_q014",
    "question": "Refer to the exhibit.\n\nWhich command configures OSPF on the point-to-point link between routers R1 and R2?",
    "image": "p9_q014.png",
    "options": [
      "network 10.0.0.0 0.0.0.255 area 0",
      "neighbor 10.1.2.0 cost 180",
      "ip ospf priority 100",
      "router-id 10.0.0.15"
    ],
    "correctIndexes": [
      0
    ],
    "explanation": "The \"network\" command under OSPF process configuration enables OSPF on interfaces whose IP address falls within the specified network/wildcard range and area; here 10.0.0.0 0.0.0.255 area 0 matches the 10.0.0.0/30 link between R1 and R2 (Se0/1 interfaces)."
  },
  {
    "id": "p9_q015",
    "question": "Which characteristic differentiates the concept of authentication from authorization and accounting?",
    "image": null,
    "options": [
      "user-activity logging",
      "service limitations",
      "consumption-based billing",
      "identity verification"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "Authentication verifies identity (who you are), authorization determines what services/resources you may access, and accounting logs usage/activity for billing or auditing purposes."
  },
  {
    "id": "p9_q017",
    "question": "Refer to the exhibit.\n\n```\nTenGigabitEthernet0/0/0 is up, line protocol is up\n Hardware is BUILT-IN-2T+6X1GE, address is 74a0.2f7a.0123 (bia 74a0.2f7a.0123)\n Description: Uplink\n Internet address is 10.1.1.1/24\n MTU 1500 bytes, BW 10000000 Kbit/sec, DLY 10 usec,\n   reliability 255/255, txload 1/255, rxload 1/255\n Encapsulation ARPA, loopback not set\n Keepalive not supported\n Full Duplex, 10000Mbps, link type is force-up, media type is unknown media type\n output flow control is on, input flow-control is on\n ARP type: ARPA, ARP Timeout 04:00:00\n Last input 00:00:00, output 00:05:40, output hang never\n Last clearing of \"show interface\" counters never\n Input queue: 0/375/0/0 (size/max/drops/flushes); Total output drops: 0\n Queueing strategy: fifo\n Output queue: 0/40 (size/max)\n 5 minute input rate 6160000 bits/sec, 1113 packets/sec\n 5 minute output rate 11213000 bits/sec, 1553 packets/sec\n   12662416065 packets input, 12607032232894 bytes, 0 no buffer\n   Received 14117163 broadcasts (0 IP multicasts)\n   0 runts, 0 giants, 0 throttles\n   0 input errors, 0 CRC, 0 frame, 0 overrun, 0 ignored\n   0 watchdog, 26271385 multicast, 0 pause input\n   7907770090 packets output, 5072790424092 bytes, 0 underruns\n   0 output errors, 8662414049 collisions, 1 interface resets\n   0 unknown protocol drops\n   0 babbles, 0 late collision, 0 deferred\n   0 lost carrier, 0 no carrier, 0 pause output\n   0 output buffer failures, 0 output buffers swapped out\n   1 carrier transitions\n```\n\nTraffic that is flowing over interface TenGigabitEthernet0/0 experiences slow transfer speeds. What is the reason for the issue?",
    "image": null,
    "options": [
      "heavy traffic congestion",
      "queuing drops",
      "a speed conflict",
      "a duplex incompatibility"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "We see the collisions are very high compared to the packets output. This is usually the result of a duplex mismatch (one end is half-duplex, the other end is full-duplex, for example)."
  },
  {
    "id": "p9_q018",
    "question": "Which type of network attack overwhelms the target server by sending multiple packets to a port until the half-open TCP resources of the target are exhausted?",
    "image": null,
    "options": [
      "SYN flood",
      "reflection",
      "teardrop",
      "amplification"
    ],
    "correctIndexes": [
      0
    ],
    "explanation": "A SYN flood (half-open attack) is a type of denial-of-service (DDoS) attack which aims to make a server unavailable to legitimate traffic by consuming all available server resources. By repeatedly sending initial connection request (SYN) packets, the attacker is able to overwhelm all available ports on a targeted server machine, causing the targeted device to respond to legitimate traffic sluggishly or not at all."
  },
  {
    "id": "p9_q019",
    "question": "Which interface mode must be configured to connect the lightweight APs in a centralized architecture?",
    "image": null,
    "options": [
      "WLAN dynamic",
      "management",
      "trunk",
      "access"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "Lightweight APs in a centralized (local mode) architecture are typically connected to an access switchport, since the AP itself tags traffic to different WLANs/SSIDs and tunnels it to the WLC via CAPWAP."
  },
  {
    "id": "p9_q020",
    "question": "Which two network actions occur within the data plane? (Choose two)",
    "image": null,
    "options": [
      "Add or remove an 802.1Q trunking header.",
      "Make a configuration change from an incoming NETCONF RPC.",
      "Run routing protocols.",
      "Reply to an incoming ICMP echo request.",
      "Match the destination MAC address to the MAC address table."
    ],
    "correctIndexes": [
      0,
      4
    ],
    "explanation": "Data plane actions include de-encapsulating/re-encapsulating frames, adding or removing an 802.1Q trunking header (routers and switches), and matching a frame's destination MAC address to the MAC address table (Layer 2 switches). Running routing protocols, replying to management-plane ICMP requests destined to the device itself, and processing NETCONF configuration changes are control-plane or management-plane functions. Reference: https://www.ciscopress.com/articles/article.asp?p=2995354&seqNum=2"
  },
  {
    "id": "p9_q021",
    "question": "Refer to the exhibit.\n\n```\nA#show ip ospf neighbor\nNeighbor ID  Pri  State        Dead Time  Address       Interface\n172.1.1.1    1    EXCHANGE/-   00:00:36   172.16.32.1   Serial0.1\n```\n\nAn engineer assumes a configuration task from a peer. Router A must establish an OSPF neighbor relationship with neighbor 172.1.1.1. The output displays the status of the adjacency after 2 hours. What is the next step in the configuration process for the routers to establish an adjacency?",
    "image": null,
    "options": [
      "Set the router B OSPF ID to the same value as its IP address",
      "Set the router B OSPF ID to a nonhost address",
      "Configure a point-to-point link between router A and router B",
      "Configure router A to use the same MTU size as router B"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "The problem occurs most frequently when attempting to run OSPF between a Cisco router and another vendor's router. The problem occurs when the maximum transmission unit (MTU) settings for neighboring router interfaces don't match, causing the adjacency to stall in the EXCHANGE state. Reference: https://www.cisco.com/c/en/us/support/docs/ip/open-shortest-path-first-ospf/13684-12.html"
  },
  {
    "id": "p9_q022",
    "question": "Refer to the exhibit.\n\n```\nCPE#show ip route\n     192.168.1.0/24 is variably subnetted, 3 subnets, 3 masks\nB     192.168.1.0/24 [20/1] via 192.168.12.2, 00:00:06\nR     192.168.1.128/25 [120/5] via 192.168.13.3, 00:02:22, Ethernet0/1\nO     192.168.1.192/26 [110/11] via 192.168.14.4, 00:02:22, Ethernet0/2\nD     192.168.1.224/27 [90/1024640] via 192.168.15.5, 00:01:33, Ethernet0/3\n```\n\nAll traffic enters the CPE router from interface Serial0/3 with an IP address of 192.168.50.1. Web traffic from the WAN is destined for a LAN network where servers are load-balanced. An IP packet with a destination address of the HTTP virtual IP of 192.168.1.250 must be forwarded. Which routing table entry does the router use?",
    "image": null,
    "options": [
      "192.168.1.0/24 via 192.168.12.2",
      "192.168.1.128/25 via 192.168.13.3",
      "192.168.1.192/26 via 192.168.14.4",
      "192.168.1.224/27 via 192.168.15.5"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "Routers use the longest-match (most specific) prefix to forward traffic. 192.168.1.250 falls within 192.168.1.224/27 (192.168.1.224-255), which is the longest matching prefix among the four routes, so it is used via 192.168.15.5."
  },
  {
    "id": "p9_q023",
    "question": "Refer to the exhibit.\n\n```\nSwitch#show interface status\nPort   Name  Status     Vlan  Duplex  Speed  Type\nFa0/1        connected  1     auto    auto   10/100BaseTX\n```\n\nThe link between PC1 and the switch is up, but it is performing poorly. Which interface condition is causing the performance problem?",
    "image": "p9_q023.png",
    "options": [
      "There is a duplex mismatch on the interface",
      "There is an issue with the fiber on the switch interface",
      "There is a speed mismatch on the interface",
      "There is an interface type mismatch"
    ],
    "correctIndexes": [
      0
    ],
    "explanation": "PC1 is manually configured for 100 Mbps full duplex, but the switch port Fa0/1 is set to auto/auto. When one side is manually set and the other is auto-negotiating, the auto side defaults to half duplex, creating a duplex mismatch that causes poor performance (though the link stays up)."
  },
  {
    "id": "p9_q024",
    "question": "What provides centralized control of authentication and roaming in an enterprise network?",
    "image": null,
    "options": [
      "a lightweight access point",
      "a firewall",
      "a wireless LAN controller",
      "a LAN switch"
    ],
    "correctIndexes": [
      2
    ],
    "explanation": "A wireless LAN controller (WLC) centrally manages lightweight APs, handling client authentication, roaming, and RF/policy configuration across the wireless network."
  },
  {
    "id": "p9_q025",
    "question": "Refer to the exhibit.\n\nAn engineer is configuring the HO router. Which IPv6 address configuration must be applied to the router fa0/1 interface for the router to assign a unique 64-bit IPv6 address to itself?",
    "image": "p9_q025.png",
    "options": [
      "ipv6 address 2001:DB8:0:1:C601:42FF:FE0F:7/64",
      "ipv6 address 2001:DB8:0:1:C601:42FE:800F:7/64",
      "ipv6 address 2001:DB8:0:1:FFFF:C601:420F:7/64",
      "ipv6 address 2001:DB8:0:1:FE80:C601:420F:7/64"
    ],
    "correctIndexes": [
      0
    ],
    "explanation": "We must use IPv6 EUI-64 so that the router can assign a unique 64-bit IPv6 address to itself. Using the MAC address C601.420F.0007: split it into two halves (C601:42 and 0F:0007), insert FFFE in between to make C601:42FF:FE0F:0007, and invert the 7th bit if needed (already 1 here since C6 = 11000110). This gives interface ID C601:42FF:FE0F:7, prepended with the /64 prefix: 2001:DB8:0:1:C601:42FF:FE0F:7."
  },
  {
    "id": "p9_q026",
    "question": "Refer to the exhibit.\n\n```\nRouter#show run\nBuilding configuration...\n!\ninterface GigabitEthernet0/0\n  ip address 10.10.10.1 255.255.255.0\n  duplex auto\n  speed auto\n!\ninterface GigabitEthernet0/1\n  ip address 172.16.2.1 255.255.255.0\n  duplex auto\n  speed auto\n!\n```\n\nAn engineer is configuring a new router on the network and applied this configuration. Which additional configuration allows the PC to obtain its IP address from a DHCP server?",
    "image": "p9_q026.png",
    "options": [
      "Configure the ip dhcp relay information command under interface Gi0/1",
      "Configure the ip dhcp smart-relay command globally on the router",
      "Configure the ip helper-address 172.16.2.2 command under interface Gi0/0",
      "Configure the ip address dhcp command under interface Gi0/0"
    ],
    "correctIndexes": [
      2
    ],
    "explanation": "The DHCP client is on the GigabitEthernet0/0 side while the DHCP server (172.16.2.2) is reachable via GigabitEthernet0/1. The \"ip helper-address\" command must be configured on the interface receiving the DHCP client broadcasts (Gi0/0), pointing to the DHCP server address, so the router relays the DHCP requests."
  },
  {
    "id": "p9_q027",
    "question": "Refer to the exhibit.\n\nA static route must be configured on R14 to forward traffic for the 172.21.34.0/25 network that resides on R86. Which command must be used to fulfill the request?",
    "image": "p9_q027.png",
    "options": [
      "ip route 172.21.34.0 255.255.255.192 10.73.65.65",
      "ip route 172.21.34.0 255.255.255.0 10.73.65.65",
      "ip route 172.21.34.0 255.255.128.0 10.73.65.64",
      "ip route 172.21.34.0 255.255.255.128 10.73.65.66"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "The 172.21.34.0/25 network requires a subnet mask of 255.255.255.128. Since R86 is the next-hop router (on the far side of the 10.73.65.64/30 link, at 10.73.65.66), the correct static route on R14 uses that mask and next-hop address."
  },
  {
    "id": "p9_q028",
    "question": "What is a function of Opportunistic Wireless Encryption in an environment?",
    "image": null,
    "options": [
      "offer compression",
      "increase security by using a WEP connection",
      "provide authentication",
      "protect traffic on open networks"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "Opportunistic Wireless Encryption (OWE) is an extension to IEEE 802.11 that provides encryption of the wireless medium. The purpose of OWE-based authentication is to avoid open unsecured wireless connectivity between APs and clients. OWE uses Diffie-Hellman algorithm-based cryptography to set up the wireless encryption. Reference: https://www.cisco.com/c/en/us/td/docs/wireless/controller/9800/16-12/config-guide/b_wl_16_12_cg/wpa3.html"
  },
  {
    "id": "p9_q029",
    "question": "Refer to the exhibit.\n\nA company is configuring a failover plan and must implement the default routes in such a way that a floating static route will assume traffic forwarding when the primary link goes down. Which primary route configuration must be used?",
    "image": "p9_q029.png",
    "options": [
      "ip route 0.0.0.0 0.0.0.0 192.168.0.2 GigabitEthernet1/0",
      "ip route 0.0.0.0 0.0.0.0 192.168.0.2 tracked",
      "ip route 0.0.0.0 0.0.0.0 192.168.0.2 floating",
      "ip route 0.0.0.0 0.0.0.0 192.168.0.2"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "The primary route must be a plain static default route with only a next-hop IP address (no exit interface or extra keywords). This is the route that a floating static route (configured with a higher administrative distance) can then back up if the primary link fails."
  },
  {
    "id": "p9_q030",
    "question": "Which action implements physical access control as part of the security program of an organization?",
    "image": "p9_q030.png",
    "options": [
      "setting up IP cameras to monitor key infrastructure",
      "backing up syslogs at a remote location",
      "configuring enable passwords on network devices",
      "configuring a password for the console port"
    ],
    "correctIndexes": [
      0
    ],
    "explanation": "Physical access control can take a number of forms, but the basic idea is to create barriers to prevent unauthorized people from entering a physical space. IP cameras are listed as a physical access control component (along with access control systems) in Cisco's physical security solutions."
  },
  {
    "id": "p9_q031",
    "question": "Refer to the exhibit.\n\nAn engineer is asked to insert the new VLAN into the existing trunk without modifying anything previously configured. Which command accomplishes this task?",
    "image": "p9_q031.png",
    "options": [
      "switchport trunk allowed vlan 100-104",
      "switchport trunk allowed vlan all",
      "switchport trunk allowed vlan add 104",
      "switchport trunk allowed vlan 104"
    ],
    "correctIndexes": [
      2
    ],
    "explanation": "The \"add\" keyword appends a VLAN to the existing allowed-VLAN list on a trunk without replacing it. Any of the other commands (without \"add\") would overwrite the current list of allowed VLANs, removing VLANs 1, 100, 101, 102, and 103."
  },
  {
    "id": "p9_q032",
    "question": "Refer to the exhibit.\n\n```\nHardware is ISR4331-3x1GE, address is 5486.bc25.1f70 (bia 5486.bc25.1f70)\nDescription: << WAN Link >>\nInternet address is 192.0.2.2/30\nMTU 1500 bytes, BW 1000000 Kbit/sec, DLY 10 usec,\n   reliability 255/255, txload 1/255, rxload 1/255\nEncapsulation ARPA, loopback not set\nKeepalive not supported\nFull Duplex, 1000Mbps, link type is auto, media type is RJ45\noutput flow control is off, input flow-control is off\nART type: ARPA, ARP Timeout 04:00:00\nLast input 00:00:00, output 00:00:11, output hang never\nLast clearing of \"show interface\" counters never\nInput queue: 0/375/0/0 (size/max/drops/flushes); Total output drops: 0\nQueueing strategy: fifo\nOutput queue: 0/40 (size/max)\n5 minute input rate 7000 bits/sec, 4 packets/sec\n5 minute output rate 4000 bits/sec, 4 packets/sec\n   22579370 packets input, 8825545968 bytes, 0 no buffer\n   Received 67 broadcasts (0 IP multicasts)\n   0 runts, 0 giants, 0 throttles\n   3612699 input errors, 3612699 CRC, 0 frame, 0 overrun, 0 ignored\n   0 watchdog, 10747057 multicast, 0 pause input\n   12072167 packets output, 1697953637 bytes, 0 underruns\n   0 output errors, 0 collisions, 1 interface resets\n   6 unknown protocol drops\n   0 babbles, 0 late collision, 0 deferred\n   5 lost carrier, 0 no carrier, 0 pause output\n   0 output buffer failures, 0 output buffers swapped out\n```\n\nWhat is a reason for poor performance on the network interface?",
    "image": null,
    "options": [
      "The interface is receiving excessive broadcast traffic.",
      "The cable connection between the two devices is faulty.",
      "The interface is operating at a different speed than the connected device.",
      "The bandwidth setting of the interface is misconfigured"
    ],
    "correctIndexes": [
      1
    ],
    "explanation": "A working interface (in an up/up state) can still suffer from issues related to the physical cabling. The cabling problems might not be bad enough to cause a complete failure, but the transmission failures result in some frames failing to pass successfully over the cable. In particular, if the CRC errors grow but the collisions counters do not, the problem might simply be interference on the cable. In this question, only the input errors and CRC errors grow, so \"the cable connected between two devices is faulty\" is the best choice. Note that there are no late collision errors, so duplex mismatch is not the issue here."
  },
  {
    "id": "p9_q033",
    "question": "Refer to the exhibit.\n\nRouters R1 and R3 have the default configuration. The router R2 priority is set to 99. Which commands on R3 configure it as the DR in the 10.0.4.0/24 network?",
    "image": "p9_q033.png",
    "options": [
      "R3(config)#interface Gig0/1\nR3(config-if)#ip ospf priority 100",
      "R3(config)#interface Gig0/0\nR3(config-if)#ip ospf priority 100",
      "R3(config)#interface Gig0/0\nR3(config-if)#ip ospf priority 1",
      "R3(config)#interface Gig0/1\nR3(config-if)#ip ospf priority 0"
    ],
    "correctIndexes": [
      0
    ],
    "explanation": "The 10.0.4.0/24 segment is reached through R3's Gig0/1 interface. Setting an OSPF priority of 100 on that interface (higher than R2's priority of 99 and the default of 1 on R1) makes R3 the DR for that network."
  },
  {
    "id": "p9_q034",
    "question": "Which QoS per-hop behavior changes the value of the ToS field in the IPv4 packet header?",
    "image": null,
    "options": [
      "shaping",
      "marking",
      "policing",
      "classification"
    ],
    "correctIndexes": [
      1
    ],
    "explanation": "Marking is the QoS mechanism that changes a field in the packet header (such as the ToS/DSCP field in IPv4 or the CoS field in an 802.1Q frame) so that other devices along the path can classify and treat the traffic appropriately."
  },
  {
    "id": "p9_q035",
    "question": "Refer to the exhibit.\n\n```\nRouter1#show ip route\nGateway of last resort is 10.10.11.2 to network 0.0.0.0\n    209.165.200.0/27 is subnetted, 1 subnets\nB     209.165.200.224 [20/0] via 10.10.12.2,03:32:14\n    209.165.201.0/27 is subnetted, 1 subnets\nB     209.165.201.0 [20/0] via 10.10.12.2,02:26:53\n    209.165.202.0/27 is subnetted, 1 subnets\nB     209.165.202.128 [20/0] via 10.10.12.2,02:46:03\n    10.0.0.0/8 is variably subnetted, 10 subnets, 4 masks\nO     10.10.13.0/25 [110/2] via 10.10.10.1,00:00:04, GigabitEthernet0/0\nO     10.10.13.128/28 [110/2] via 10.10.10.5,00:00:12, GigabitEthernet0/1\nO     10.10.13.144/28 [110/2] via 10.10.10.9,00:01:57, GigabitEthernet0/2\nO     10.10.13.160/29 [110/2] via 10.10.10.5,00:00:12, GigabitEthernet0/1\nO     10.10.13.208/29 [110/2] via 10.10.10.13,00:01:57, GigabitEthernet0/3\nS*    0.0.0.0/0 [1/0] via 10.10.11.2\n```\n\nWhich next-hop IP address does Router1 use for packets destined to host 10.10.13.158?",
    "image": "p9_q035.png",
    "options": [
      "10.10.10.5",
      "10.10.11.2",
      "10.10.12.2",
      "10.10.10.9"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "10.10.13.158 belongs to prefix 10.10.13.144/28, so the next-hop 10.10.10.9 will be chosen to forward the packet for this destination."
  },
  {
    "id": "p9_q036",
    "question": "What is one reason to implement LAG on a Cisco WLC?",
    "image": null,
    "options": [
      "to increase security and encrypt management frames",
      "to provide link redundancy and load balancing",
      "to allow for stateful and link-state failover",
      "to enable connected switch ports to failover and use different VLANs"
    ],
    "correctIndexes": [
      1
    ],
    "explanation": "Link Aggregation (LAG) bundles multiple physical ports on a WLC into a single logical link, providing link redundancy (if one port fails, traffic continues over the remaining ports) and load balancing of traffic across the bundled ports."
  },
  {
    "id": "p9_q037",
    "question": "Refer to the exhibit.\n\n```\nR1# show ip route\n    Codes:\n    C - connected, S - static, I - IGRP, R - RIP, M - mobile, B — BGP, D -\n    EIGRP, EX - EIGRP external, O - OSPF, IA - OSPF inter area N1 - OSPF NSSA\n    external type 1, N2 - OSPF NSSA external type 2, E1 — OSPF external type 1,\n    E2 - OSPF external type 2, E - EGP\n    i - IS-IS, LI - IS-IS level-1, L2 - IS-IS level-2, * - candidate default,\n    U - per-user static route, o- ODR\nGateway of last resort not set\nC    10.0.0.0/8 is directly connected, Loopback0\n    10.0.0.0/8 is variably subnetted, 4 subnets, 2 masks\nO    10.0.1.3/32 [110/100] via 10.0.1.100, 00:39:08, Serial0\nC    10.0.1.0/24 is directly connected, Serial0\nO    10.0.1.5/32 [110/5] via 10.0.1.50, 00:39:08, Serial0\nO    10.0.10.0/24 [110/10] via 10.0.1.4, 00:39:08, Gigabit Ethernet 0/0\nD    10.0.10.0/24 [90/10] via 10.0.1.5, 00:39:08, Gigabit Ethernet 0/1\n```\n\nWeb traffic is coming in from the WAN interface. Which route takes precedence when the router is processing traffic destined for the LAN network at 10.0.10.0/24?",
    "image": null,
    "options": [
      "via next-hop 10.0.1.5",
      "via next-hop 10.0.1.4",
      "via next-hop 10.0.1.50",
      "via next-hop 10.0.1.100"
    ],
    "correctIndexes": [
      0
    ],
    "explanation": "Both OSPF (AD 110) and EIGRP (D, AD 90) have a route to 10.0.10.0/24. Since EIGRP has a lower administrative distance than OSPF, the EIGRP route via next-hop 10.0.1.5 is installed in the routing table and takes precedence."
  },
  {
    "id": "p9_q038",
    "question": "Which PoE mode enables powered-device detection and guarantees power when the device is detected?",
    "image": null,
    "options": [
      "dynamic",
      "static",
      "active",
      "auto"
    ],
    "correctIndexes": [
      1
    ],
    "explanation": "Static PoE mode enables powered-device detection and pre-allocates (reserves) power for a port before the switch discovers the powered device. The switch reserves power for this port even when no device is connected and guarantees that power will be provided upon device detection. \"Auto\" only allocates power if enough power is available, so it does not guarantee power."
  },
  {
    "id": "p9_q039",
    "question": "A Cisco engineer must configure a single switch interface to meet these requirements:\n* accept untagged frames and place them in VLAN 20\n* accept tagged frames in VLAN 30 when CDP detects a Cisco IP phone\n\nWhich command set must the engineer apply?",
    "image": null,
    "options": [
      "switchport mode access\nswitchport access vlan 20\nswitchport voice vlan 30",
      "switchport mode trunk\nswitchport access vlan 20\nswitchport voice vlan 30",
      "switchport mode dynamic auto\nswitchport trunk native vlan 20\nswitchport trunk allowed vlan 30\nswitchport voice vlan 30",
      "switchport mode dynamic desirable\nswitchport access vlan 20\nswitchport trunk allowed vlan 30\nswitchport voice vlan 30"
    ],
    "correctIndexes": [
      0
    ],
    "explanation": "This configuration is typically used when connecting a Cisco IP phone and a PC to the same switch port. The PC sends untagged traffic, which is assigned to VLAN 20 (the access VLAN), while the IP phone sends 802.1Q-tagged voice traffic, which is placed in VLAN 30 (the voice VLAN). CDP helps the switch identify the IP phone and treat its traffic appropriately. Trunk mode is not used for connecting end devices like phones and PCs."
  },
  {
    "id": "p9_q040",
    "question": "Refer to the exhibit.\n\n```\nRouter#show run\nBuilding configuration...\nCurrent configuration : 1530 bytes\n!\nLast configuration change at 11:32:53 UTC Thu Feb 10 2020\nupgrade fpd auto\nversion 15.2\nservice timestamps debug datetime msec\nservice timestamps log datetime msec\nno service password-encryption\n!\nhostname Router\n!\nboot-start-marker\nboot-end-marker\n!\n!\n!\nno aaa new-model\nno ip icmp rate-limit unreachable\n!\n!\n--More--\n```\n\nWhich minimum configuration items are needed to enable Secure Shell version 2 access to R15?",
    "image": null,
    "options": [
      "Router(config)#hostname R15\nR15(config)#crypto key generate rsa general-keys modulus 1024\nR15(config-line)#line vty 0 15\nR15(config-line)# transport input ssh\nR15(config)#ip ssh source-interface Fa0/0\nR15(config)#ip ssh stricthostkeycheck",
      "Router(config)#ip domain-name cisco.com\nRouter(config)#crypto key generate rsa general-keys modulus 1024\nRouter(config)#ip ssh version 2\nRouter(config-line)#line vty 0 15\nRouter(config-line)# transport input all\nRouter(config)#ip ssh logging events",
      "Router(config)#hostname R15\nR15(config)#ip domain-name cisco.com\nR15(config)#crypto key generate rsa general-keys modulus 1024\nR15(config)#ip ssh version 2\nR15(config-line)#line vty 0 15\nR15(config-line)# transport input ssh",
      "Router(config)#crypto key generate rsa general-keys modulus 1024\nRouter(config)#ip ssh version 2\nRouter(config-line)#line vty 0 15\nRouter(config-line)# transport input ssh\nRouter(config)#ip ssh logging events\nR15(config)#ip ssh stricthostkeycheck"
    ],
    "correctIndexes": [
      2
    ],
    "explanation": "Steps to configure SSH: 1) Configure the router hostname using \"hostname\". 2) Configure the domain name using \"ip domain-name\". 3) Generate public/private keys using \"crypto key generate rsa\". 4) Create a user in the local database using \"username ... secret\". 5) Allow only SSH access on the VTY lines using \"transport input ssh\"."
  },
  {
    "id": "p9_q041",
    "question": "Refer to the exhibit.\n\nUsers need to connect to the wireless network with IEEE 802.11r-compatible devices. The connection must be maintained as users travel between floors or to other areas in the building. What must be the configuration of the connection?",
    "image": "p9_q041.png",
    "options": [
      "Select the WPA Policy option with the CCKM option",
      "Disable AES encryption",
      "Enable Fast Transition and select the FT 802.1x option",
      "Enable Fast Transition and select the FT PSK option"
    ],
    "correctIndexes": [
      2
    ],
    "explanation": "802.11r is the IEEE standard for fast roaming, which introduces Fast Transition (FT). The initial handshake with the new AP is done before the client roams, allowing the client and APs to complete the Pairwise Transient Key (PTK) calculation in advance. FT works with both PSK and 802.1X authentication methods; since the WLC screen shows PSK is enabled (not a key value entry mentioned), enabling Fast Transition with the FT 802.1X option is the best match here."
  },
  {
    "id": "p9_q042",
    "question": "Refer to the exhibit.\n\n```\nSwitch 1                            Switch 2\ninterface Po1                       interface Po1\n switchport                          switchport\n switchport mode access              switchport mode access\n switchport access vlan 2            switchport access vlan 2\n\ninterface E1/1 - 2                  interface E1/1 - 2\n switchport                          switchport\n switchport mode access              switchport mode access\n switchport access vlan 2            switchport access vlan 2\n```\n\nAn engineer is configuring an EtherChannel using LACP between Switches 1 and 2. Which configuration must be applied so that only Switch 1 sends LACP initiation packets?",
    "image": "p9_q042.png",
    "options": [
      "Switch1(config-if)#channel-group 1 mode on\nSwitch2(config-if)#channel-group 1 mode passive",
      "Switch1(config-if)#channel-group 1 mode passive\nSwitch2(config-if)#channel-group 1 mode active",
      "Switch1(config-if)#channel-group 1 mode active\nSwitch2(config-if)#channel-group 1 mode passive",
      "Switch1(config-if)#channel-group 1 mode on\nSwitch2(config-if)#channel-group 1 mode active"
    ],
    "correctIndexes": [
      2
    ],
    "explanation": "With LACP, \"active\" mode initiates negotiation by sending LACP packets, while \"passive\" mode only responds to LACP packets but never initiates. Setting Switch1 to active and Switch2 to passive ensures only Switch1 sends the initial LACP packets while Switch2 waits and responds."
  },
  {
    "id": "p9_q043",
    "question": "Refer to the exhibit.\n\n```\nSW1 = 24596 0018.184e.3c00\nSW2 = 28692 004a.14e5.4077\nSW3 = 32788 0022.55cf.dd00\nSW4 = 64000 0041.454d.407f\n```\n\nWhich switch becomes the root of a spanning tree for VLAN 20 if all links are of equal speed?",
    "image": "p9_q043.png",
    "options": [
      "SW1",
      "SW2",
      "SW3",
      "SW4"
    ],
    "correctIndexes": [
      0
    ],
    "explanation": "The root bridge is the switch with the lowest bridge ID (priority + MAC address). SW1 has the lowest priority value (24596), so it becomes the root bridge for VLAN 20."
  },
  {
    "id": "p9_q044",
    "question": "Refer to the exhibit.\n\n```\nRouter1(config)#interface GigabitEthernet0/0\nRouter1(config-if)#ip address 209.165.200.225 255.255.255.224\nRouter1(config-if)#ip nat outside\nRouter1(config)#interface GigabitEthernet0/1\nRouter1(config-if)#ip nat inside\nRouter1(config)#interface GigabitEthernet0/1.100\nRouter1(config-if)#encapsulation dot1Q 100\nRouter1(config-if)#ip address 10.10.10.1 255.255.255.0\nRouter1(config)#interface GigabitEthernet0/1.200\nRouter1(config-if)#encapsulation dot1Q 200\nRouter1(config-if)#ip address 10.10.20.1 255.255.255.0\nRouter1(config)#ip access-list standard NAT_INSIDE_RANGES\nRouter1(config-std-nacl)#permit 10.10.10.0 0.0.0.255\nRouter1(config)#ip nat inside source list NAT_INSIDE_RANGES interface GigabitEthernet0/0 overload\n```\n\nUsers on existing VLAN 100 can reach sites on the Internet. Which action must the administrator take to establish connectivity to the Internet for users in VLAN 200?",
    "image": "p9_q044.png",
    "options": [
      "Define a NAT pool on the router.",
      "Update the NAT_INSIDE_RANGES ACL",
      "Configure the ip nat outside command on another interface for VLAN 200",
      "Configure static NAT translations for VLAN 200"
    ],
    "correctIndexes": [
      1
    ],
    "explanation": "We need to add the \"permit 10.10.20.0 0.0.0.255\" command to the NAT_INSIDE_RANGES ACL, since VLAN 200's subnet (10.10.20.0/24) is not currently included in the ACL used for the NAT inside source list."
  },
  {
    "id": "p9_q045",
    "question": "Which protocol uses the SSL?",
    "image": null,
    "options": [
      "HTTP",
      "HTTPS",
      "SSH",
      "Telnet"
    ],
    "correctIndexes": [
      1
    ],
    "explanation": "HTTPS is HTTP layered over SSL/TLS, which encrypts the communication between a web browser and a web server. HTTP, SSH, and Telnet do not use SSL (SSH has its own encryption mechanism, and Telnet is unencrypted)."
  },
  {
    "id": "p9_q047",
    "question": "Which value is the unique identifier that an access point uses to establish and maintain wireless connectivity to wireless network devices?",
    "image": null,
    "options": [
      "VLAN ID",
      "SSID",
      "RFID",
      "WLAN ID"
    ],
    "correctIndexes": [
      1
    ],
    "explanation": "The SSID (Service Set Identifier) is a unique identifier that wireless networking devices use to establish and maintain wireless connectivity. SSIDs are case sensitive and can contain up to 32 alphanumeric characters."
  },
  {
    "id": "p9_q048",
    "question": "A network engineer is configuring a switch so that it is remotely reachable via SSH. The engineer has already configured the host name on the router. Which additional command must the engineer configure before entering the command to generate the RSA key?",
    "image": null,
    "options": [
      "password password",
      "crypto key generate rsa modulus 1024",
      "ip domain-name domain",
      "ip ssh authentication-retries 2"
    ],
    "correctIndexes": [
      2
    ],
    "explanation": "The RSA key generation process requires both a configured hostname and a configured domain name (the domain name and hostname are combined to form the key label). Since the hostname is already set, the \"ip domain-name\" command must be configured next, before generating the RSA key."
  },
  {
    "id": "p9_q049",
    "question": "Refer to the exhibit.\n\nSwitch A is newly configured. All VLANs are present in the VLAN database. The IP phone and PC A on Gi0/1 must be configured for the appropriate VLANs to establish connectivity between the PCs. Which command set fulfills the requirement?",
    "image": "p9_q049.png",
    "options": [
      "SwitchA(config-if)#switchport mode access\nSwitchA(config-if)#switchport access vlan 50\nSwitchA(config-if)#switchport voice vlan 51",
      "SwitchA(config-if)#switchport mode access\nSwitchA(config-if)#switchport access vlan 50\nSwitchA(config-if)#switchport voice vlan untagged",
      "SwitchA(config-if)#switchport mode trunk\nSwitchA(config-if)#switchport trunk allowed vlan add 50, 51\nSwitchA(config-if)#switchport voice vlan dot1p",
      "SwitchA(config-if)#switchport mode trunk\nSwitchA(config-if)#switchport trunk allowed vlan 50, 51\nSwitchA(config-if)#switchport qos trust cos"
    ],
    "correctIndexes": [
      0
    ],
    "explanation": "Since Gi0/1 connects an IP phone with a PC attached behind it, the port should be an access port with the data VLAN (50) as the access VLAN and the voice VLAN (51) set via the \"switchport voice vlan\" command, so untagged PC traffic goes to VLAN 50 and tagged phone traffic goes to VLAN 51."
  },
  {
    "id": "p9_q050",
    "question": "Which QoS traffic handling technique retains excess packets in a queue and reschedules these packets for later transmission when the configured maximum bandwidth has been surpassed?",
    "image": null,
    "options": [
      "traffic shaping",
      "traffic policing",
      "weighted random early detection",
      "traffic prioritization"
    ],
    "correctIndexes": [
      0
    ],
    "explanation": "Traffic shaping retains excess packets in a queue and then schedules the excess for later transmission over increments of time, instead of dropping them. It is applied only on outbound interfaces, since buffering and queuing happen there, and is configured in bits per second."
  },
  {
    "id": "p9_q051",
    "question": "Refer to the exhibit. R1 learns all routes via OSPF. Which command configures a backup static route on R1 to reach the 192.168.20.0/24 network via R3?",
    "image": "p9_q051.png",
    "options": [
      "R1(config)#ip route 192.168.20.0 255.255.255.0 192.168.30.2 111",
      "R1(config)#ip route 192.168.20.0 255.255.255.0 192.168.30.2 90",
      "R1(config)#ip route 192.168.20.0 255.255.0.0 192.168.30.2",
      "R1(config)#ip route 192.168.20.0 255.255.255.0 192.168.30.2"
    ],
    "correctIndexes": [
      0
    ],
    "explanation": "A backup (floating) static route must have an administrative distance higher than OSPF's default AD of 110 so it is only used if the OSPF route is lost. Option A uses AD 111, which is higher than 110, making it a valid floating static route to reach 192.168.20.0/24 via R3 (192.168.30.2)."
  },
  {
    "id": "p9_q052",
    "question": "Which Layer 2 switch function encapsulates packets for different VLANs so that the packets traverse the same port and maintain traffic separation between the VLANs?",
    "image": null,
    "options": [
      "VLAN numbering",
      "VLAN DSCP",
      "VLAN tagging",
      "VLAN marking"
    ],
    "correctIndexes": [
      2
    ],
    "explanation": "VLAN tagging is a method through which more than one VLAN is handled on a port. VLAN tagging is used to tell which packet belongs to which VLAN on the other side; a packet is tagged with a VLAN tag in the Ethernet frame."
  },
  {
    "id": "p12_q002",
    "question": "Refer to the exhibit. An engineer must configure a floating static route on an external EIGRP network. The destination subnet is the /29 on the LAN interface of R86. Which command must be executed on R14?",
    "image": "p12_q002.png",
    "options": [
      "ip route 10.80.65.0 255.255.248.0 10.73.65.66 1",
      "ip route 10.80.65.0 255.255.255.240 fa0/1 89",
      "ip route 10.80.65.0 255.255.255.248 10.73.65.66 171",
      "ip route 10.73.65.66 0.0.0.224 10.80.65.0 255"
    ],
    "correctIndexes": [
      2
    ],
    "explanation": "A floating static route must use an administrative distance higher than that of the protocol it backs up. External EIGRP routes have an AD of 170, so the floating static route needs an AD greater than that (171). It must also match the /29 destination network with mask 255.255.255.248 and point to R86's Fa0/0 address, 10.73.65.66."
  },
  {
    "id": "p12_q004",
    "question": "A network engineer is implementing a corporate SSID for WPA3-Personal security with a PSK. Which encryption cipher must be configured?",
    "image": null,
    "options": [
      "GCMP128",
      "GCMP256",
      "CCMP256",
      "CCMP128"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "WPA3 mandates the adoption of Protected Management Frames and standardizes on a 128-bit cryptographic suite while disallowing obsolete security protocols. WPA3-Personal uses CCMP-128 and AES-128; on a Cisco WLC, when the Personal security type is chosen, the Encryption Cipher is limited to CCMP128(AES), with CCMP256, GCMP128, and GCMP256 unavailable for Personal security."
  },
  {
    "id": "p12_q005",
    "question": "What is the functionality of the Cisco DNA Center?",
    "image": null,
    "options": [
      "data center network policy controller",
      "software-defined controller for automation of devices and services",
      "console server that permits secure access to all network devices",
      "IP address pool distribution scheduler"
    ],
    "correctIndexes": [
      1
    ],
    "explanation": "Cisco DNA Center is a software-defined controller used to automate the deployment, management, and monitoring of network devices and services across the enterprise network, using policy-based automation to simplify network operations."
  },
  {
    "id": "p12_q006",
    "question": "Which IP header field is changed by a Cisco device when QoS marking is enabled?",
    "image": null,
    "options": [
      "Header Checksum",
      "Type of Service",
      "DSCP",
      "ECN"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "Per the answer key for this question, QoS marking updates the ECN (Explicit Congestion Notification) field. Note that ECN and DSCP together make up the 8-bit Differentiated Services (DS) field, which was formerly known as the Type of Service (ToS) byte in the IPv4 header; QoS marking most commonly sets the DSCP bits within that same byte."
  },
  {
    "id": "p12_q007",
    "question": "Refer to the exhibit. An IPv6 address must be obtained automatically on the LAN interface on R1. Which command must be implemented to accomplish the task?",
    "image": "p12_q007.png",
    "options": [
      "ipv6 address 2001:db8:d8d2:1008:4358:23:1390::/64",
      "ipv6 address fe80::/10",
      "ipv6 address dhcp",
      "ipv6 address autoconfig"
    ],
    "correctIndexes": [
      2
    ],
    "explanation": "In fact there are two correct answers for this question, which are \"ipv6 address autoconfig\" and \"ipv6 address dhcp\". The first command can work with or without a DHCPv6 server. The second command \"ipv6 address dhcp\" is correct too as there is a DHCPv6 server on the same LAN, so this command works well in this scenario -- since the topology includes a DHCPv6 server, \"ipv6 address dhcp\" is the better choice. Note: The \"ipv6 address autoconfig\" command causes the device to perform IPv6 stateless address auto-configuration (SLAAC) to discover prefixes on the link and then add EUI-64 based addresses to the interface."
  },
  {
    "id": "p12_q008",
    "question": "Refer to the exhibit.\n\n```\nRouter-Y#show ip route\n\nCodes: L - local, C - connected, S - static, R - RIP, M - mobile, B - BGP\n       D - EIGRP, EX - EIGRP external, O - OSPF, IA - OSPF inter area\n       N1 - OSPF NSSA external type 1, N2 - OSPF NSSA external type 2\n       E1 - OSPF external type 1, E2 - OSPF external type 2\n       i - IS-IS, su - IS-IS summary, L1 - IS-IS level-1, L2 - IS-IS level-2\n       ia - IS-IS inter area, * - candidate default, U - per-user static route\n       o - ODR, P - periodic downloaded static route, H - NHRP, l - LISP\n       + - replicated route, % - next hop override, p - overrides from PfR\n\nGateway of last resort is not set\n\n10.0.0.0/8 is variably subnetted\nB        10.0.0.0/8 [1/0] via 10.224.1.2\nB        10.27.150.224/27 [20/0] via 10.224.1.3, 1w6d\nS        10.128.0.0/9 [1/0] via 10.224.1.3\nB        10.224.0.0/11 [20/0] via 10.224.1.5, 5d18h\nB        10.224.0.0/15 [20/0] via 10.224.1.4, 5d18h\nC        10.223.0.0/24 is directly connected, GigabitEthernet0/1\nC        10.224.0.0/24 is directly connected, GigabitEthernet0/0\nB        10.226.34.0/24 [20/0] via 10.224.1.5, 5d18h\n```\n\nPC A is communicating with another device at IP address 10.227.225.255. Through which router does router Y route the traffic?",
    "image": "p12_q008.png",
    "options": [
      "router A",
      "router B",
      "router C",
      "router D"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "The destination IP address 10.227.225.255 belongs to the 10.224.0.0/11 subnet, which is the longest (most specific) matching prefix in the routing table, so router Y sends the traffic to 10.224.1.5, which is router D."
  },
  {
    "id": "p12_q009",
    "question": "What are two protocols within the IPsec suite? (Choose two)",
    "image": null,
    "options": [
      "3DES",
      "AH",
      "ESP",
      "TLS",
      "AES"
    ],
    "correctIndexes": [
      1,
      2
    ],
    "explanation": "IPsec is a suite of protocols widely used to secure connections over the internet. The main protocols comprising IPsec are Authentication Header (AH), Encapsulating Security Payload (ESP), and Internet Key Exchange (IKE)."
  },
  {
    "id": "p12_q011",
    "question": "What are two benefits of private IPv4 addressing? (Choose two)",
    "image": null,
    "options": [
      "reuses addresses at multiple sites",
      "provides external internet network connectivity",
      "conserves globally unique address space",
      "propagates routing information to WAN links",
      "provides unlimited address ranges"
    ],
    "correctIndexes": [
      0,
      2
    ],
    "explanation": "Private IPv4 addressing (RFC 1918) allows the same address ranges to be reused independently at multiple sites and conserves the globally unique public IPv4 address space, since private addresses are not routed on the public internet."
  },
  {
    "id": "p12_q012",
    "question": "Refer to the exhibit. Router R14 is in the process of being configured. Which configuration must be used to establish a host route to PC 10?",
    "image": "p12_q012.png",
    "options": [
      "ip route 10.80.65.10 255.255.255.254 10.80.65.1",
      "ip route 10.73.65.66 0.0.0.255 10.80.65.10",
      "ip route 10.80.65.10 255.255.255.255 10.73.65.66",
      "ip route 10.73.65.65 255.0.0.0 10.80.65.10"
    ],
    "correctIndexes": [
      2
    ],
    "explanation": "A host route is an IPv4 address with a 32-bit mask (255.255.255.255). To reach PC 10 (10.80.65.10) as a host route from R14, the route must use that mask with the next hop being R86's interface address, 10.73.65.66."
  },
  {
    "id": "p12_q013",
    "question": "Refer to the exhibit. A static route must be configured on R86 to forward traffic for the 172.16.34.0/29 network, which resides on R14. Which command must be used to fulfill the request?",
    "image": "p12_q013.png",
    "options": [
      "ip route 172.16.34.0 255.255.255.248 10.73.65.65",
      "ip route 172.16.34.0 255.255.255.224 10.73.65.66",
      "ip route 10.73.65.65 255.255.255.248 172.16.34.0",
      "ip route 172.16.34.0 0.0.0.7 10.73.65.64"
    ],
    "correctIndexes": [
      0
    ],
    "explanation": "The 172.16.34.0/29 network requires the mask 255.255.255.248. Since this network resides on R14, the static route configured on R86 must point to R14's Fa0/0 address, 10.73.65.65, as the next hop."
  },
  {
    "id": "p12_q014",
    "question": "Refer to the exhibit. The network engineer is configuring a new WLAN and is told to use a setup password for authentication instead of the RADIUS servers. Which additional set of tasks must the engineer perform to complete the configuration?",
    "image": "p12_q014.png",
    "options": [
      "Disable PMF\nEnable PSK\nEnable 802.1x",
      "Select WPA Policy\nSelect WPA2 Policy\nEnable FT PSK",
      "Select WPA2 Policy\nDisable PMF\nEnable PSK",
      "Select WPA Policy\nEnable CCKM\nEnable PSK"
    ],
    "correctIndexes": [
      2
    ],
    "explanation": "Answer A is not correct as PSK and 802.1x cannot be enabled at the same time. Answer B is not correct as only one of \"WPA Policy\" or \"WPA2 Policy\" can be selected. Answer D is not correct as CCKM and PSK cannot be enabled at the same time. Testing confirms that selecting WPA2 Policy, disabling PMF, and enabling PSK successfully configures a pre-shared key password for authentication in place of RADIUS."
  },
  {
    "id": "p12_q015",
    "question": "Refer to the exhibit.\n\n```\nSW1#show run\nBuilding configuration...\n!\nhostname SW1\n!\nip domain-name test\n!\nusername CCNA privilege 1 password 0 cisco123\n!\ninterface FastEthernet0/1\n switchport access vlan 10\n!\ninterface Vlan10\n ip address 192.168.1.2 255.255.255.0\n!\nline vty 0 4\n login local\n transport input telnet\nline vty 5 15\n login local\n transport input telnet\n\nSW1#show crypto key mypubkey rsa\n% Key pair was generated at: 0:1:23 UTC Mar 1 2021\nKey name: SW1.test\n```\n\nAn engineer is updating the management access configuration of switch SW1 to allow secured, encrypted remote configuration. Which two commands or command sequences must the engineer apply to the switch? (Choose two)",
    "image": null,
    "options": [
      "SW1(config)#line vty 0 15\nSW1(config-line)#transport input ssh",
      "SW1(config)# crypto key generate rsa",
      "SW1(config)# interface f0/1\nSW1(config-if)# switch port mode trunk",
      "SW1(config)#enable secret ccnaTest123",
      "SW1(config)# username NEW secret R3mote123"
    ],
    "correctIndexes": [
      0,
      3
    ],
    "explanation": "\"Encrypted remote configuration\" means SSH must be configured on the VTY lines. The VTY lines already use \"login local\", which means authentication uses locally configured credentials via the existing \"username ... password ...\" command, so re-configuring a username (option E) is unnecessary. The \"show crypto key mypubkey rsa\" output shows an RSA key pair was already generated, so \"crypto key generate rsa\" (option B) is not needed. However, testing shows that SSH login fails without an enable secret configured, even with a valid username/password: after connecting via SSH and entering privileged mode, the device returns \"% No password set\":\n```\nR2#ssh -l CCNA 192.168.12.1\nPassword:\n\nR1>en\n% No password set\nR1>\n```\nThe same failure occurs with the newly created \"NEW\" username. Therefore the engineer must enable SSH on the VTY lines (option A) and configure an enable secret (option D)."
  },
  {
    "id": "p12_q016",
    "question": "Refer to the exhibit.\n\n```\nR1#show ip route\n    1.0.0.0/8 is variably subnetted, 2 subnets, 2 masks\nO IA  1.1.1.0/24 [110/3] via 12.1.1.2, 00:00:25, FastEthernet0/0\nC    24.1.1.0/30 is directly connected, FastEthernet2/0\nC    34.1.1.0/30 is directly connected, FastEthernet3/0\nS    1.1.1.3/32 [1/0] via 14.1.1.2\n```\n\nWhich two values does router R1 use to identify valid routes for the R3 loopback address 1.1.1.3/32? (Choose two)",
    "image": "p12_q016.png",
    "options": [
      "lowest cost to reach the next hop",
      "lowest administrative distance",
      "lowest metric",
      "highest metric",
      "highest administrative distance"
    ],
    "correctIndexes": [
      1,
      2
    ],
    "explanation": "R1 has two routes to reach 1.1.1.3/32: an OSPF inter-area route (AD 110) via the summarized 1.1.1.0/24 network, and a static route (AD 1) directly to 1.1.1.3/32. A router first prefers the route with the lowest administrative distance, and among routes learned from the same source it uses the lowest metric as the tiebreaker. Note: some versions of this question list \"longest prefix match\" instead of \"lowest metric\" as the second correct answer -- if that option is present, choose it instead."
  },
  {
    "id": "p12_q017",
    "question": "Refer to the exhibit.\n\n```\n[\n  {\"switch\": \"3750\", \"port\": e2},\n  {\"router\": \"2951\", \"port\": e20},\n  {\"switch\": \"3750\", \"port\": e23}\n]\n```\n\nWhat is represented by the word \"switch\" in line 2 of the JSON schema?",
    "image": null,
    "options": [
      "object",
      "key",
      "value",
      "array"
    ],
    "correctIndexes": [
      1
    ],
    "explanation": "JSON data is represented as key-value pairs enclosed in curly braces (objects), with lists enclosed in square brackets (arrays). In line 2, \"switch\" is the key and \"3750\" is its corresponding value."
  },
  {
    "id": "p12_q018",
    "question": "Refer to the exhibit.\n\n```\nRouter2#show ip route\nGateway of last resort is not set\n\n    10.0.0.0/8 is variably subnetted, 4 subnets, 2 masks\nC    10.10.10.0/30 is directly connected, FastEthernet0/3\nC    10.10.10.8/30 is directly connected, FastEthernet0/2\nC    10.10.10.12/30 is directly connected, FastEthernet0/1\nS    172.16.0.0/12 [1/0] via 10.10.10.1\nO    10.10.13.0/25 [110/11] via 10.10.10.9, 00:00:03, FastEthernet0/2\n              [110/11] via 10.10.10.13, 00:00:03, FastEthernet0/1\n```\n\nUser traffic originating within site B is failing to reach an application hosted on IP address 192.168.0.10, which is located within site A. What is determined by the routing table?",
    "image": "p12_q018.png",
    "options": [
      "The traffic to 192.168.0.10 requires a static route to be configured in router1",
      "The lack of a default route prevents delivery of the traffic",
      "The default gateway for site B is configured incorrectly.",
      "The traffic is blocked by an implicit deny in an ACL on router2."
    ],
    "correctIndexes": [
      1
    ],
    "explanation": "Router2's routing table has no default route (no candidate default or 0.0.0.0/0 entry) and no specific route matching 192.168.0.10, so it has no way to forward traffic destined for that address toward Site A. Configuring a default route (or a specific route) on Router2 pointing toward Router1 would resolve the issue."
  },
  {
    "id": "p12_q019",
    "question": "Which cable type must be used to interconnect one switch using 1000 BASE-SX GBIC modules and another switch using 1000 BASE-SX SFP modules?",
    "image": null,
    "options": [
      "LC to LC",
      "LC to SC",
      "SC to SC",
      "SC to ST"
    ],
    "correctIndexes": [
      1
    ],
    "explanation": "GBIC modules use SC connectors while SFP modules use LC connectors. To interconnect a GBIC-based switch with an SFP-based switch, a hybrid LC-to-SC cable is required."
  },
  {
    "id": "p12_q021",
    "question": "Which channel-group mode must be configured when multiple distribution switch interfaces connected to a WLC are bundled?",
    "image": null,
    "options": [
      "channel-group mode active",
      "channel-group mode on",
      "channel-group mode desirable",
      "channel-group mode passive"
    ],
    "correctIndexes": [
      1
    ],
    "explanation": "Link Aggregation (LAG) bundles all of the WLC's distribution system ports into a single 802.3ad port channel. LAG requires the EtherChannel to be configured for 'mode on' on both the controller and the Catalyst switch (not PAgP or LACP negotiation modes)."
  },
  {
    "id": "p12_q022",
    "question": "Refer to the exhibit.\n\nAn engineer must translate the PC1 IP address to 10.199.77.100 and permit PC1 to ping the loopback 0 interface on router R2. What command set must be used?\n\nOption A:\n```\nR1#\n!\ninterface Loopback0\nip address 10.1.1.1 255.255.255.255\n!\ninterface FastEthernet0/0\nip address 10.139.91.1 255.255.255.252\nip nat outside\nip virtual-reassembly in\n!\ninterface FastEthernet1/0\nip address 172.16.29.1 255.255.255.0\nip nat inside\nip virtual-reassembly in\n!\nrouter eigrp 100\nnetwork 10.1.1.1 0.0.0.0\nnetwork 10.139.91.0 0.0.0.3\n!\nip nat inside source static 172.16.29.78 10.199.77.100\n\nR2#\nip route 10.199.77.100 255.255.255.255 10.139.91.1\n```\n\nOption B:\n```\nR1#\n!\ninterface Loopback0\nip address 10.1.1.1 255.255.255.255\n!\ninterface FastEthernet0/0\nip address 10.139.91.1 255.255.255.252\nip nat inside\nip virtual-reassembly in\n!\ninterface FastEthernet1/0\nip address 172.16.29.1 255.255.255.0\nip nat outside\nip virtual-reassembly in\n!\nrouter eigrp 100\nnetwork 10.1.1.1 0.0.0.0\nnetwork 10.139.91.0 0.0.0.3\n!\nip nat inside source static 10.199.77.100 172.16.29.78\n\nR2#\nip route 10.199.77.100 255.255.255.255 10.139.91.1\n```\n\nOption C:\n```\nR1#\n!\ninterface Loopback0\nip address 10.1.1.1 255.255.255.255\n!\ninterface FastEthernet0/0\nip address 10.139.91.1 255.255.255.252\nip nat outside\nip virtual-reassembly in\n!\ninterface FastEthernet1/0\nip address 172.16.29.1 255.255.255.0\nip nat inside\nip virtual-reassembly in\n!\nrouter eigrp 100\nnetwork 10.1.1.1 0.0.0.0\nnetwork 10.139.91.0 0.0.0.3\n!\nip nat inside source static 172.16.29.78 10.199.77.100\n\nR2#\nip route 172.16.29.78 255.255.255.255 10.139.91.1\n```\n\nOption D:\n```\nR1#\n!\ninterface Loopback0\nip address 10.1.1.1 255.255.255.255\n!\ninterface FastEthernet0/0\nip address 10.139.91.1 255.255.255.252\nip nat outside\nip virtual-reassembly in\n!\ninterface FastEthernet1/0\nip address 172.16.29.1 255.255.255.0\nip nat inside\nip virtual-reassembly in\n!\nrouter eigrp 100\nnetwork 10.1.1.1 0.0.0.0\nnetwork 10.139.91.0 0.0.0.3\n!\nip nat inside source static 172.16.29.78 10.199.77.100\n\nR2#\nip route 172.16.29.78 255.255.255.255 10.139.91.1\n```",
    "image": "p12_q022.png",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctIndexes": [
      0
    ],
    "explanation": "PC1 must be able to ping the loopback 0 interface on R2, so R2 must have a static route to the translated address: ip route 10.199.77.100 255.255.255.255 10.139.91.1 (rules out Option C and D). On R1, interface FastEthernet1/0 (facing PC1) must be 'ip nat inside' and FastEthernet0/0 (facing R2) must be 'ip nat outside', with the static NAT translating the real inside address to the outside address: ip nat inside source static 172.16.29.78 10.199.77.100. Only Option A satisfies all of these requirements."
  },
  {
    "id": "p12_q024",
    "question": "A network engineer must configure an interface with IP address 10.10.10.145 and a subnet mask equivalent to 11111111.11111111.11111111.11111000. Which subnet mask must the engineer use?",
    "image": null,
    "options": [
      "/27",
      "/28",
      "/29",
      "/30"
    ],
    "correctIndexes": [
      2
    ],
    "explanation": "The binary mask 11111111.11111111.11111111.11111000 has 29 consecutive one-bits (11111111.11111111.11111111.11111000 = 255.255.255.248), which corresponds to a /29 prefix length."
  },
  {
    "id": "p12_q025",
    "question": "Which two server types support domain name to IP address resolution? (Choose two)",
    "image": null,
    "options": [
      "ESX host",
      "web",
      "resolver",
      "authoritative",
      "file transfer"
    ],
    "correctIndexes": [
      2,
      3
    ],
    "explanation": "All DNS servers fall into one of four categories: recursive resolvers, root nameservers, TLD nameservers, and authoritative nameservers. Resolver and authoritative DNS servers are the ones that support domain name to IP address resolution."
  },
  {
    "id": "p12_q026",
    "question": "Refer to the exhibit.\n\nThe router R1 is in the process of being configured. Routers R2 and R3 are configured correctly for the new environment. Which two commands must be configured on R1 for PC1 to communicate to all PCs on the 10.10.10.0/24 network? (Choose two)",
    "image": "p12_q026.png",
    "options": [
      "ip route 10.10.10.8 255.255.255.248 g0/1",
      "ip route 10.10.10.10 255.255.255.255 g0/1",
      "ip route 10.10.10.0 255.255.255.248 192.168.2.2",
      "ip route 10.10.10.0 255.255.255.0 192.168.2.3",
      "ip route 10.10.10.10 255.255.255.255 192.168.2.2"
    ],
    "correctIndexes": [
      3,
      4
    ],
    "explanation": "R1 needs a route to the 10.10.10.0/24 network reachable via R2 (192.168.2.3) and the more specific host route (255.255.255.255) 10.10.10.10 via 192.168.2.2 so that PC1 can reach all PCs on the 10.10.10.0/24 network, matching the correct next-hop addresses shown in the topology."
  },
  {
    "id": "p12_q027",
    "question": "Which switching feature removes unused MAC addresses from the MAC address table, which allows new MAC addresses to be added?",
    "image": null,
    "options": [
      "MAC move",
      "MAC address aging",
      "dynamic MAC address learning",
      "MAC address auto purge"
    ],
    "correctIndexes": [
      1
    ],
    "explanation": "MAC address aging removes MAC address entries that have not been used (no traffic seen) for a configured aging time, freeing space in the MAC address table for new entries."
  },
  {
    "id": "p12_q028",
    "question": "Which two northbound APIs are found in a software-defined network? (Choose two)",
    "image": null,
    "options": [
      "SOAP",
      "OpFlex",
      "REST",
      "NETCONF",
      "OpenFlow"
    ],
    "correctIndexes": [
      0,
      2
    ],
    "explanation": "SDN northbound APIs are usually RESTful APIs used to communicate between the SDN controller and the services/applications running over the network. SOAP is another northbound API used for this same purpose."
  },
  {
    "id": "p12_q029",
    "question": "What uses HTTP messages to transfer data to applications residing on different hosts?",
    "image": null,
    "options": [
      "REST",
      "OpenStack",
      "OpFlex",
      "OpenFlow"
    ],
    "correctIndexes": [
      0
    ],
    "explanation": "REST (Representational State Transfer) describes a type of API that allows applications on different hosts to communicate, using HTTP messages to transfer data over the API."
  },
  {
    "id": "p12_q030",
    "question": "Refer to the exhibit.\n\n```\nR2# show ip route\n10.0.0.0/30 is subnetted, 2 subnets\nC 10.10.10.0 is directly connected, Serial0/0/0\nC 10.10.10.4 is directly connected, FastEthernet0/1\nD 192.168.10.0/24 [90/2172416] via 10.10.10.1, 01:05:11, Serial0/0/0\nC 192.168.20.0/24 is directly connected, FastEthernet0/0\nD 192.168.30.0/24 [90/30720] via 10.10.10.6, 01:12:53, FastEthernet0/1\n```\n\nWhat is the next-hop IP address for R2 so that PC2 reaches the application server via EIGRP?",
    "image": "p12_q030.png",
    "options": [
      "10.10.10.5",
      "192.168.20.1",
      "10.10.10.6",
      "192.168.30.1"
    ],
    "correctIndexes": [
      2
    ],
    "explanation": "The route to 192.168.30.0/24 (where the application server resides) shows it is learned via EIGRP (D) with next-hop 10.10.10.6, reachable out FastEthernet0/1 toward R3."
  },
  {
    "id": "p12_q032",
    "question": "A switch is forwarding a frame out of all interfaces except the interface that received the frame. What is the technical term for this process?",
    "image": null,
    "options": [
      "CDP",
      "multicast",
      "flooding",
      "ARP"
    ],
    "correctIndexes": [
      2
    ],
    "explanation": "Flooding is the process by which a switch forwards a frame out of every interface except the one it was received on, typically used when the destination MAC address is unknown or for broadcast frames."
  },
  {
    "id": "p12_q033",
    "question": "What is a characteristic of RSA?",
    "image": null,
    "options": [
      "It uses preshared keys for encryption",
      "It is an asymmetric encryption algorithm",
      "It requires both sides to have identical keys for encryption",
      "It is a symmetric decryption algorithm."
    ],
    "correctIndexes": [
      1
    ],
    "explanation": "RSA is a public-key (asymmetric) encryption algorithm that uses a mathematically linked key pair, a public key and a private key, where either key can encrypt data while the other decrypts it."
  },
  {
    "id": "p12_q034",
    "question": "Refer to the exhibit.\n\nAll interfaces are in the same VLAN. All switches are configured with the default STP priorities. During the STP elections, which switch becomes the root bridge?",
    "image": "p12_q034.png",
    "options": [
      "MDF-DC-3: 08:0E:18:1A:3C:9D",
      "MDF-DC-4: 08:E0:19:A1:B3:19",
      "MDF-DC-2: 08:0E:18:22:05:97",
      "MDF-DC-1: 08:E0:43:78:24:50"
    ],
    "correctIndexes": [
      0
    ],
    "explanation": "With all switches using the default (equal) STP priority, the switch with the lowest MAC address becomes the root bridge. Comparing the MAC addresses, MDF-DC-3 (08:0E:18:1A:3C:9D) is the lowest, so it wins the root bridge election."
  },
  {
    "id": "p12_q035",
    "question": "Which advantage does the network assurance capability of Cisco DNA Center provide over traditional campus management?",
    "image": null,
    "options": [
      "Cisco DNA Center leverages YANG and NETCONF to assess the status of fabric and nonfabric devices, and traditional campus management uses CLI exclusively",
      "Cisco DNA Center correlates information from different management protocols to obtain insights, and traditional campus management requires manual analysis",
      "Cisco DNA Center automatically compares security postures among network devices, and traditional campus management needs manual comparisons",
      "Cisco DNA Center handles management tasks at the controller to reduce the load on infrastructure devices, and traditional campus management uses the data backbone."
    ],
    "correctIndexes": [
      1
    ],
    "explanation": "Cisco DNA Center uses many management protocols to provide a single pane of glass for all devices, correlating information from multiple sources to obtain insights automatically, versus manual analysis in traditional campus management."
  },
  {
    "id": "p12_q036",
    "question": "Which signal frequency appears 60 times per minute?",
    "image": null,
    "options": [
      "1 Hz signal",
      "1 GHz signal",
      "60 Hz signal",
      "60 GHz signal"
    ],
    "correctIndexes": [
      0
    ],
    "explanation": "\"60 times per minute\" means \"60 times per 60 seconds\". A frequency of 1 Hz implies 1 complete vibration per second, which equals 60 complete vibrations in 60 seconds (1 minute)."
  },
  {
    "id": "p12_q037",
    "question": "Which port type does a lightweight AP use to connect to the wired network when it is configured in local mode?",
    "image": null,
    "options": [
      "access",
      "trunk",
      "EtherChannel",
      "LAG"
    ],
    "correctIndexes": [
      0
    ],
    "explanation": "In local mode, a lightweight AP typically connects to the wired network via an access port. Trunk mode is only required when using FlexConnect mode or an autonomous AP with multiple SSIDs assigned to multiple VLANs."
  },
  {
    "id": "p12_q038",
    "question": "Refer to the exhibit.\n\n```\nCat9300-1# show interface g1/0/1 switchport\nName: Gi1/0/1\nSwitchport: Enabled\nAdministrative Mode: trunk\nOperational Mode: trunk\nAdministrative Trunking Encapsulation: dot1q\nOperational Trunking Encapsulation: dot1q\nNegotiation of Trunking: On\nAccess Mode VLAN: 1 (default)\nTrunking Native Mode VLAN: 321 (VLAN0321)\nAdministrative Native VLAN tagging: enabled\nTrunking VLANs Enabled: 100,200,300\nPruning VLANs Enabled: 2-1001\n```\n\nA network administrator configures an interface on a new switch so that it connects to interface Gi1/0/1 on switch Cat9300-1. Which configuration must be applied to the new interface?",
    "image": null,
    "options": [
      "switchport trunk encapsulation dot1q\nswitchport trunk native vlan 321\nswitchport trunk allowed vlan 100-300",
      "switchport mode dynamic desirable\nswitchport trunk native vlan 321\nswitchport trunk allowed vlan 100,200,300",
      "switchport nonegotiate\nswitchport access vlan 321\nswitchport trunk allowed vlan except 2-1001",
      "switchport mode trunk\nswitchport trunk native vlan 321\nswitchport trunk allowed vlan 100,200,300"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "The Administrative Mode is 'trunk', meaning it was configured with 'switchport mode trunk'. Since 'Trunking VLANs Enabled: 100,200,300' shows only three VLANs are allowed, the new interface must use 'switchport trunk allowed vlan 100,200,300' along with the matching native VLAN 321."
  },
  {
    "id": "p12_q039",
    "question": "What is the function of a controller in a software-defined network?",
    "image": null,
    "options": [
      "multicast replication at the hardware level",
      "setting packet-handling policies",
      "forwarding packets",
      "fragmenting and reassembling packets"
    ],
    "correctIndexes": [
      1
    ],
    "explanation": "An SDN controller centralizes control-plane logic, setting packet-handling policies that are pushed down to the data-plane devices, which then handle the actual forwarding."
  },
  {
    "id": "p12_q040",
    "question": "A client experiences slow throughput from a server that is directly connected to the core switch in a data center. A network engineer finds minimal latency on connections to the server, but data transfers are unreliable, and the output of the show interfaces counters errors command shows a high FCS-Err count on the interface that is connected to the server. What is the cause of the throughput issue?",
    "image": null,
    "options": [
      "high bandwidth usage",
      "a physical cable fault",
      "a speed mismatch",
      "a cable that is too long"
    ],
    "correctIndexes": [
      1
    ],
    "explanation": "Frame Check Sequence (FCS) errors indicate frames are being corrupted during transmission, which is highly likely to be a physical layer issue such as a faulty cable, rather than a speed mismatch or long cable (which would cause latency rather than corruption)."
  },
  {
    "id": "p12_q041",
    "question": "Which component controls and distributes physical resources for each virtual machine?",
    "image": null,
    "options": [
      "physical enclosure",
      "OS",
      "hypervisor",
      "CPU"
    ],
    "correctIndexes": [
      2
    ],
    "explanation": "The hypervisor abstracts and isolates virtual machines and their programs from the underlying server hardware, controlling and distributing physical resources for each VM."
  },
  {
    "id": "p12_q042",
    "question": "Which command enables HTTP access to the Cisco WLC?",
    "image": null,
    "options": [
      "config network secureweb enable",
      "config certificate generate webadmin",
      "config network webmode enable",
      "config network telnet enable"
    ],
    "correctIndexes": [
      2
    ],
    "explanation": "The command 'config network webmode {enable | disable}' allows users to access the controller GUI using an insecure http:// connection. The default value is disabled. Note that 'config network secureweb enable' enables HTTPS access instead."
  },
  {
    "id": "p12_q043",
    "question": "A network engineer must migrate a router loopback interface to the IPv6 address space. If the current IPv4 address of the interface is 10.54.73.1/32, and the engineer configures IPv6 address 0:0:0:0:0:ffff:a36:4901, which prefix length must be used?",
    "image": null,
    "options": [
      "/64",
      "/96",
      "/124",
      "/128"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "The generic IPv4-mapped address format uses a /96 prefix, but since the original IPv4 address is a /32 host route, the migrated IPv6 address should also be a full 128-bit host route, i.e., /128."
  },
  {
    "id": "p12_q044",
    "question": "What is the primary purpose of a console port on a Cisco WLC?",
    "image": null,
    "options": [
      "out-of-band management via an IP transport",
      "out-of-band management via an asynchronous transport",
      "in-band management via an asynchronous transport",
      "in-band management via an IP transport"
    ],
    "correctIndexes": [
      1
    ],
    "explanation": "The console port is used for out-of-band management, system recovery, and early boot operations. It does not use IP; it is an asynchronous serial transport."
  },
  {
    "id": "p12_q046",
    "question": "What does the implementation of a first-hop redundancy protocol protect against on a network?",
    "image": null,
    "options": [
      "BGP neighbor flapping",
      "default gateway failure",
      "root-bridge loss",
      "spanning-tree loops"
    ],
    "correctIndexes": [
      1
    ],
    "explanation": "A first-hop redundancy protocol (such as HSRP, VRRP, or GLBP) provides transparent failover of the default gateway so hosts continue to reach the network if their configured default gateway router fails."
  },
  {
    "id": "p12_q047",
    "question": "Refer to the exhibit.\n\n```\nCodes: L - local, C - connected, S - static, R - RIP, M - mobile, B - BGP\n       D - EIGRP, EX - EIGRP external, O - OSPF, IA - OSPF inter area\n       N1 - OSPF NSSA external type 1, N2 - OSPF NSSA external type 2\n       E1 - OSPF external type 1, E2 - OSPF external type 2\n       i - IS-IS, su - IS-IS summary, L1 - IS-IS level-1, L2 - IS-IS level-2\n       ia - IS-IS inter area, * - candidate default, U - per-user static route\n       o - ODR, P - periodic downloaded static route, H - NHRP, l - LISP\n       + - replicated route, % - next hop override, p - overrides from PfR\nGateway of last resort is 0.0.0.0 to network 0.0.0.0\nS*     0.0.0.0/0 is directly connected, Null0\n       10.0.0.0/8 is variably subnetted, 6 subnets, 2 masks\nC      10.0.12.0/24 is directly connected, GigabitEthernet0/1\nL      10.0.12.1/32 is directly connected, GigabitEthernet0/1\nC      10.0.13.0/24 is directly connected, GigabitEthernet0/2\nL      10.0.13.1/32 is directly connected, GigabitEthernet0/2\nC      10.0.14.0/24 is directly connected, GigabitEthernet0/3\nL      10.0.14.1/32 is directly connected, GigabitEthernet0/3\nD      192.168.0.0/16 [90/130816] via 10.0.13.3, 00:10:09, GigabitEthernet0/2\nO      192.168.0.0/23 [110/2] via 10.0.14.4, 00:00:46, GigabitEthernet0/3\nS      192.168.0.0/24 [100/0] via 10.0.12.2\n```\n\nWhich interface is chosen to forward traffic to the host at 192.168.0.55?",
    "image": null,
    "options": [
      "GigabitEthernet0/1",
      "Null0",
      "GigabitEthernet0/3",
      "GigabitEthernet0/2"
    ],
    "correctIndexes": [
      0
    ],
    "explanation": "The most specific match for 192.168.0.55 is the static route \"S 192.168.0.0/24 [100/0] via 10.0.12.2\", but its exit interface is not shown. The next hop 10.0.12.2 belongs to the 10.0.12.0/24 subnet, which is reached via GigabitEthernet0/1, so that is the forwarding interface."
  },
  {
    "id": "p12_q048",
    "question": "Refer to the exhibit.\n\n```\nName: Et0/0\nSwitchport: Enabled\nAdministrative Mode: static access\nOperational Mode: static access\nAdministrative Trunking Encapsulation: isl\nOperational Trunking Encapsulation: native\nNegotiation of Trunking: Off\nAccess Mode VLAN: 7 (VLAN0007)\nTrunking Native Mode VLAN: 1 (default)\nAdministrative Native VLAN tagging: enabled\nVoice VLAN: none\n...\nTrunking VLANs Enabled: 5,6\nPruning VLANs Enabled: 2-1001\nCapture Mode: Disabled\nCapture VLANs Allowed: ALL\n```\n\nSW_1 and SW_12 represent two companies that are merging. They use separate network vendors. The VLANs on both sides have been migrated to share IP subnets. Which command sequence must be issued on both sides to join the two companies and pass all VLANs between the companies?",
    "image": "p12_q048.png",
    "options": [
      "switchport mode trunk\nswitchport trunk encapsulation dot1q",
      "switchport mode trunk\nswitchport trunk allowed vlan all\nswitchport dot1q ethertype 0800",
      "switchport mode dynamic desirable\nswitchport trunk allowed vlan all\nswitchport trunk native vlan 7",
      "switchport dynamic auto\nswitchport nonegotiate"
    ],
    "correctIndexes": [
      0
    ],
    "explanation": "The output shows one switch is using ISL trunking encapsulation, which is Cisco-proprietary, so the mismatched switch must be changed to 802.1Q via \"switchport trunk encapsulation dot1q\" so both sides use a common trunking protocol."
  },
  {
    "id": "p12_q049",
    "question": "A Cisco engineer notices that two OSPF neighbors are connected using a crossover Ethernet cable. The neighbors are taking too long to become fully adjacent. Which command must be issued under the interface configuration on each router to reduce the time required for the adjacency to reach the FULL state?",
    "image": null,
    "options": [
      "ip ospf priority 0",
      "ip ospf network broadcast",
      "ip ospf dead-interval 40",
      "ip ospf network point-to-point"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "Setting the OSPF network type to point-to-point removes the DR/BDR election process, so the two routers transition directly to the FULL state as soon as adjacency is established, reducing the time needed."
  },
  {
    "id": "p12_q050",
    "question": "Refer to the exhibit.\n\n```\n{\n    \"Test_Questions\" : [\n                \"Automation\",\n                \"Configuration\",\n    ],\n    \"Test__Exam_Level\" : [\n                \"CCNA\",\n                \"CCNP\",\n    ],\n    \"Test_Response\" : [\n                \"Correct\",\n                \"Incorrect\",\n        ],\n}\n```\n\nHow many objects, keys, and JSON list values are present?",
    "image": null,
    "options": [
      "three objects, three keys, and two JSON list values",
      "one object, three keys, and two JSON list values",
      "three objects, two keys, and three JSON list values",
      "one object, three keys, and three JSON list values"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "JSON uses curly braces {} to hold objects and square brackets [] to hold arrays (lists); here there is only one object (the outer {}), with three keys (Test_Questions, Test__Exam_Level, Test_Response), each holding a list (array) of values, giving three JSON list values."
  },
  {
    "id": "p12_q051",
    "question": "What is a benefit of a point-to-point leased line?",
    "image": null,
    "options": [
      "full-mesh capability",
      "flexibility of design",
      "low cost",
      "simplicity of configuration"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "Point-to-point leased lines require minimal expertise to install and maintain, making simplicity of configuration their key benefit compared to more complex WAN topologies."
  },
  {
    "id": "p12_q052",
    "question": "What are two differences between WPA2 and WPA3 wireless security? (Choose two)",
    "image": null,
    "options": [
      "WPA3 uses SAE for stronger protection than WPA2, which uses AES",
      "WPA2 uses 128-bit key encryption, and WPA3 supports 128-bit and 192-bit key encryption",
      "WPA3 uses AES for stronger protection than WPA2, which uses SAE",
      "WPA3 uses AES for stronger protection than WPA2, which uses TKIP",
      "WPA2 uses 192-bit key encryption, and WPA3 requires 256-bit key encryption"
    ],
    "correctIndexes": [
      0,
      1
    ],
    "explanation": "WPA3 replaces the Pre-Shared Key (PSK) authentication used in WPA2 with Simultaneous Authentication of Equals (SAE), and while WPA2 typically uses 128-bit AES encryption, WPA3 (Enterprise) also supports 192-bit key encryption."
  },
  {
    "id": "p12_q053",
    "question": "Refer to the exhibit.\n\nEach router must be configured with the last usable IP address in the subnet. Which configuration fulfills this requirement?\n\n```\nOption A\nR7#\ninterface FastEthernet1/0\nip address 10.88.31.126 255.255.255.192\nR8#\ninterface FastEthernet0/0\nip address 10.19.63.95 255.255.255.192\nR9#\ninterface FastEthernet1/1\nip address 10.23.98.159 255.255.255.248\n\nOption B\nR7#\ninterface FastEthernet1/0\nip address 10.88.31.126 255.255.255.240\nR8#\ninterface FastEthernet0/0\nip address 10.19.63.94 255.255.255.192\nR9#\ninterface FastEthernet1/1\nip address 10.23.98.158 255.255.255.248\n\nOption C\nR7#\ninterface FastEthernet1/0\nip address 10.88.31.127 255.255.255.240\nR8#\ninterface FastEthernet0/0\nip address 10.19.63.95 255.255.255.192\nR9#\ninterface FastEthernet1/1\nip address 10.23.98.159 255.255.255.248\n\nOption D\nR7#\ninterface FastEthernet1/0\nip address 10.88.31.127 255.255.255.192\nR8#\ninterface FastEthernet0/0\nip address 10.19.63.95 255.255.255.240\nR9#\ninterface FastEthernet1/1\nip address 10.23.98.159 255.255.255.224\n```",
    "image": "p12_q053.png",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctIndexes": [
      1
    ],
    "explanation": "On R7 (10.88.31.64/26) the last usable IP is 10.88.31.126; on R8 (10.19.63.80/28) it is 10.19.63.94; on R9 (10.23.98.128/27) it is 10.23.98.158. Only Option B has all three correct last-usable IP addresses, even though its subnet masks are technically mismatched (likely typos), making it the best available choice."
  },
  {
    "id": "p12_q054",
    "question": "Refer to the exhibit.\n\nA network engineer is updating the configuration on router R1 to connect a new branch office to the company network. R2 has been configured correctly. Which command must the engineer configure so that devices at the new site communicate with the main office?",
    "image": "p12_q054.png",
    "options": [
      "ip route 172.25.25.1 255.255.255.255 g0/2",
      "ip route 172.25.25.0 255.255.255.0 192.168.2.1",
      "ip route 172.25.25.1 255.255.255.255 g0/1",
      "ip route 172.25.25.0 255.255.255.0 192.168.2.2"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "R1 needs a static route to the New Office subnet 172.25.25.0/24 pointing to R2's directly connected interface address (192.168.2.2) as the next hop."
  },
  {
    "id": "p12_q055",
    "question": "Which two transport layer protocols carry syslog messages? (Choose two)",
    "image": null,
    "options": [
      "TCP",
      "UDP",
      "ARP",
      "RTP",
      "IP"
    ],
    "correctIndexes": [
      0,
      1
    ],
    "explanation": "Syslog messages are traditionally transported over UDP (unreliable, default), but can also be transported over TCP when a reliable transport channel is required."
  },
  {
    "id": "p12_q056",
    "question": "Refer to the exhibit.\n\n```\nGateway of last resort is 172.16.2.2 to network 0.0.0.0\n\n    10.0.0.0/8 is variably subnetted, 3 subnets, 3 masks\n       10.10.100.0/26 is directly connected, GigabitEthernet0/0/6\nC      10.10.10.0/24 is directly connected, GigabitEthernet0/0/0\nL      10.10.10.3/32 is directly connected, GigabitEthernet0/0/0\n    172.16.0.0/16 is variably subnetted, 3 subnets, 2 masks\nS      172.16.1.33/32 is directly connected, GigabitEthernet0/0/1\nC      172.16.2.0/23 is directly connected, GigabitEthernet0/0/1\nL      172.16.2.1/32 is directly connected, GigabitEthernet0/0/1\nS*  0.0.0.0/0 [1/0] via 172.16.2.2\n```\n\nA packet sourced from 10.10.10.32 is destined for the Internet. What is the administrative distance for the destination route?",
    "image": null,
    "options": [
      "0",
      "1",
      "2",
      "32"
    ],
    "correctIndexes": [
      1
    ],
    "explanation": "The packet's source address is irrelevant to routing; since the destination is the Internet (unknown network), it matches the default static route \"S* 0.0.0.0/0 [1/0] via 172.16.2.2\", which has an administrative distance of 1."
  },
  {
    "id": "p12_q057",
    "question": "When is the PUT method used within HTTP?",
    "image": null,
    "options": [
      "to update a DNS server",
      "when a read-only operation is required",
      "to display a web site",
      "when a nonidempotent operation is needed"
    ],
    "correctIndexes": [
      0
    ],
    "explanation": "Note: The source explanation for this question is inconsistent with its listed answer/options; PUT is actually used to create or fully replace a resource at a defined URL, and it is an idempotent operation. Answer kept as given in source (A)."
  }
];

var BATCH_B = [
  {
    "id": "p9_q053",
    "question": "What is an expected outcome when network management automation is deployed?",
    "image": null,
    "options": [
      "A distributed management plane must be used.",
      "Software upgrades are performed from a central controller",
      "Complexity increases when new device configurations are added",
      "Custom applications are needed to configure network devices"
    ],
    "correctIndexes": [
      1
    ],
    "explanation": "Network automation centralizes management tasks such as software upgrades, allowing them to be pushed from a central controller instead of being performed device by device."
  },
  {
    "id": "p9_q054",
    "question": "Refer to the exhibit. The primary route across Gi0/0 is configured on both routers. A secondary route must be configured to establish connectivity between the workstation networks. Which command set must be configured to complete this task?",
    "image": "p9_q054.png",
    "options": [
      "R1\nip route 172.16.2.0 255.255.255.240 172.16.0.2 113\n\nR2\nip route 172.16.1.0 255.255.255.0 172.16.0.1 114",
      "R1\nip route 172.16.2.0 255.255.255.240 172.16.0.5 89\n\nR2\nip route 172.16.1.0 255.255.255.0 172.16.0.6 89",
      "R1\nip route 172.16.2.0 255.255.255.248 172.16.0.5 110\n\nR2\nip route 172.16.1.0 255.255.255.0 172.16.0.6 110",
      "R1\nip route 172.16.2.0 255.255.255.224 172.16.0.6 111\n\nR2\nip route 172.16.1.0 255.255.255.0 172.16.0.5 112"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "The secondary route must point out the Gi0/1 interfaces (172.16.0.4/30 network, addresses .5 and .6) since Gi0/0 already carries the primary route, and must use an administrative distance higher than OSPF's 110 so it only becomes active as a backup. 172.16.2.0/27 requires the mask 255.255.255.224, matching option D."
  },
  {
    "id": "p9_q055",
    "question": "Refer to the exhibit.\n\n```\nCat9300#show cdp\nGlobal CDP information:\n  Sending CDP packets every 60 seconds\n  Sending a holdtime value of 180 seconds\n  Sending CDPv2 advertisements is enabled\n```\n\nWhich action must be taken so that neighboring devices rapidly discover switch Cat9300?",
    "image": null,
    "options": [
      "Enable portfast on the ports that connect to neighboring devices",
      "Configure the cdp holdtime 10 command on switch Cat9300",
      "Configure the cdp timer 10 command on the neighbors of switch Cat9300",
      "Configure the cdp timer 10 command on switch Cat9300"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "The \"cdp timer seconds\" command sets the transmission frequency of CDP updates in seconds, so it should be reduced so that CDP updates are sent more often, allowing neighbors to discover the switch more rapidly."
  },
  {
    "id": "p9_q056",
    "question": "Refer to the exhibit.\n\n```\nSwitch2(config)#interface fa0/1\nSwitch2(config-if)#switchport mode dynamic auto\nSwitch2(config-if)#switchport trunk allowed vlan 5,10\n```\n\nSW2 is replaced due to a hardware failure. A network engineer starts to configure SW2 by copying the Fa0/1 interface configuration from SW1. Which command must be configured on the Fa0/1 interface of SW2 to enable PC1 to connect to PC2?",
    "image": "p9_q056.png",
    "options": [
      "switchport mode trunk",
      "switchport trunk native vlan 10",
      "switchport trunk allowed remove 10",
      "switchport mode access"
    ],
    "correctIndexes": [
      0
    ],
    "explanation": "Both ends of a trunk link must actively negotiate or be statically configured as trunks. Since the config being copied sets \"switchport mode dynamic auto\" (which will not initiate trunk negotiation on its own), the Fa0/1 interface must be explicitly configured with \"switchport mode trunk\" to bring the link up as a trunk carrying VLAN 5 so PC1 and PC2 can communicate."
  },
  {
    "id": "p9_q057",
    "question": "How do UTP and STP cables compare?",
    "image": null,
    "options": [
      "STP cables are cheaper to produce and easier to install and UTP cables are more expensive and harder to install.",
      "UTP cables are less prone to crosstalk and interference and STP cables are more prone to crosstalk and interference.",
      "UTP cables provide faster and more reliable data transfer rates and STP cables are slower and less reliable.",
      "STP cables are shielded and protect against electromagnetic interference and UTP lacks the same protection against electromagnetic interference."
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "STP (Shielded Twisted Pair) cable is wrapped in foil or mesh shielding that guards against electromagnetic interference, while UTP (Unshielded Twisted Pair) has no such shielding."
  },
  {
    "id": "p9_q059",
    "question": "Which port type does a lightweight AP use to connect to the wired network when configured in FlexConnect mode with local switching and VLAN tagging?",
    "image": null,
    "options": [
      "EtherChannel",
      "access",
      "LAG",
      "trunk"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "Locally-switched WLANs in FlexConnect mode map wireless user traffic to a VLAN via 802.1Q trunking to a local switch adjacent to the access point, so the AP's wired port must be configured as a trunk."
  },
  {
    "id": "p9_q060",
    "question": "An engineer is installing a new wireless printer with a static IP address on the Wi-Fi network. Which feature must be enabled and configured to prevent connection issues with the printer?",
    "image": null,
    "options": [
      "passive client",
      "static IP tunneling",
      "DHCP address assignment",
      "client exclusion"
    ],
    "correctIndexes": [
      0
    ],
    "explanation": "Passive clients are wireless devices, such as scales and printers, that are configured with a static IP address and do not transmit IP information when associating with an AP. The passive client feature enables ARP requests and responses to be exchanged between wired and wireless clients so such devices can be reached."
  },
  {
    "id": "p9_q061",
    "question": "An engineer is configuring router R1 with an IPv6 static route for prefix 2019:C15C:0CAF:E001::/64. The next hop must be 2019:C15C:0CAF:E002::1 The route must be reachable via the R1 Gigabit 0/0 interface. Which command configures the designated route?",
    "image": null,
    "options": [
      "R1(config)#ipv6 route 2019:C15C:0CAF:E001::/64 2019:C15C:0CAF:E002::1",
      "R1(config-if)#ipv6 route 2019:C15C:0CAF:E001::/64 2019:C15C:0CAF:E002::1",
      "R1(config-if)#ip route 2019:C15C:0CAF:E001::/64 GigabitEthernet0/0",
      "R1(config)#ip route 2019:C15C:0CAF:E001::/64 GigabitEthernet0/0"
    ],
    "correctIndexes": [
      0
    ],
    "explanation": "IPv6 static routes are configured with the \"ipv6 route\" command from global configuration mode, specifying the destination prefix and the next-hop address, as shown in option A."
  },
  {
    "id": "p9_q062",
    "question": "Refer to the exhibit. What must be configured to enable 802.11w on the WLAN?",
    "image": "p9_q062.png",
    "options": [
      "Set PMF to Required",
      "Enable MAC Filtering",
      "Enable WPA Policy",
      "Set Fast Transition to Enabled"
    ],
    "correctIndexes": [
      0
    ],
    "explanation": "The 802.11w IGTK key is derived using the 4-way handshake and requires WPA2 security at Layer 2 (already configured here). To actually enable 802.11w Protected Management Frames, the PMF option must be set to Required (or Optional), ensuring clients that do not support 802.11w cannot associate. Fast Transition relates to 802.11r, not 802.11w."
  },
  {
    "id": "p9_q065",
    "question": "Refer to the exhibit. Which configuration establishes a Layer 2 LACP EtherChannel when applied to both switches?",
    "image": "p9_q065.png",
    "options": [
      "interface range G1/1 -1/3\nswitchport mode access\nchannel-group 1 mode passive\nno shutdown",
      "interface range G1/1 -1/3\nswitchport mode trunk\nchannel-group 1 mode desirable\nno shutdown",
      "interface range G1/1 -1/3\nswitchport mode trunk\nchannel-group 1 mode active\nno shutdown",
      "interface range G1/1 -1/3\nswitchport mode access\nchannel-group 1 mode on\nno shutdown"
    ],
    "correctIndexes": [
      2
    ],
    "explanation": "LACP is an IEEE standard EtherChannel negotiation protocol. To use LACP, at least one side must be set to \"active\" mode (both sides can be active, or one active and one passive). \"Desirable\" and \"on\" belong to Cisco's proprietary PAgP and static EtherChannel respectively, not LACP."
  },
  {
    "id": "p9_q066",
    "question": "Refer to the exhibit. A network engineer configures the Cisco WLC to authenticate local wireless clients against a RADIUS server. Which task must be performed to complete the process?",
    "image": "p9_q066.png",
    "options": [
      "Disable the Server Status option",
      "Enable the Management option",
      "Enable the Network User option",
      "Enable the Support for CoA option"
    ],
    "correctIndexes": [
      2
    ],
    "explanation": "The Network User checkbox enables network user authentication, meaning wireless client authentication requests are sent to this RADIUS server. The Management checkbox instead enables authentication of users who log in to manage the WLC itself."
  },
  {
    "id": "p9_q067",
    "question": "Which QoS queuing method discards or marks packets that exceed the desired bit rate of traffic flow?",
    "image": null,
    "options": [
      "shaping",
      "policing",
      "CBWFQ",
      "LLQ"
    ],
    "correctIndexes": [
      1
    ],
    "explanation": "Policing is used to control the rate of traffic flowing across an interface. When a bandwidth exceed (crossing the maximum configured rate) occurs, the excess traffic is generally dropped or remarked."
  },
  {
    "id": "p9_q068",
    "question": "What is the role of disaggregation in controller-based networking?",
    "image": null,
    "options": [
      "It divides the control-plane and data-plane functions.",
      "It summarizes the routes between the core and distribution layers of the network topology.",
      "It enables a network topology to quickly adjust from a ring network to a star network",
      "It streamlines traffic handling by assigning individual devices to perform either Layer 2 or Layer 3 functions."
    ],
    "correctIndexes": [
      0
    ],
    "explanation": "Network disaggregation means separating the network into its component parts, specifically splitting the control-plane and data-plane functions so they can run independently, such as on a separate controller and switches."
  },
  {
    "id": "p9_q069",
    "question": "Which REST method updates an object in the Cisco DNA Center Intent API?",
    "image": null,
    "options": [
      "CHANGE",
      "UPDATE",
      "POST",
      "PUT"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "The RESTful Cisco DNA Center Intent API uses HTTPS verbs (GET, POST, PUT, and DELETE) with JSON structures to discover and control the network; PUT is used to update an existing object."
  },
  {
    "id": "p9_q071",
    "question": "What is the function of Cisco Advanced Malware protection for next-generation IPS?",
    "image": null,
    "options": [
      "authorizing potentially compromised wireless traffic",
      "URL filtering",
      "authenticating end users",
      "inspecting specific files and files types for malware"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "Cisco Advanced Malware Protection (AMP) for next-generation IPS inspects specific files and file types traversing the network to detect and block malware."
  },
  {
    "id": "p9_q072",
    "question": "An administrator must use the password complexity not manufacturer-name command to prevent users from adding \"cisco\" as a password. Which command must be issued before this command?",
    "image": null,
    "options": [
      "Password complexity enable",
      "confreg 0x2142",
      "login authentication my-auth-list",
      "service password-encryption"
    ],
    "correctIndexes": [
      0
    ],
    "explanation": "Password complexity sub-rules such as \"password complexity not manufacturer-name\" only take effect after password complexity checking has first been globally enabled with the \"password complexity enable\" (or \"passwords complexity enable\") command."
  },
  {
    "id": "p9_q073",
    "question": "What is the function of \"off-the-shelf\" switches in a controller-based network?",
    "image": null,
    "options": [
      "Forwarding packets",
      "Making routing decision",
      "Providing a central view of the deployed network",
      "Setting packet-handling policies"
    ],
    "correctIndexes": [
      0
    ],
    "explanation": "In SDN's purest form, the controller holds all the intelligence while switches are dumb, commercial off-the-shelf (COTS) devices managed by the controller and used only to forward packets."
  },
  {
    "id": "p9_q074",
    "question": "Which two practices are recommended for an acceptable security posture in a network? (Choose two)",
    "image": null,
    "options": [
      "Maintain network equipment in a secure location",
      "Backup device configurations to encrypted USB drives for secure retrieval",
      "Use a cryptographic keychain to authenticate to network devices",
      "Place internal email and file servers in a designated DMZ",
      "Disable unused or unnecessary ports, interfaces and services"
    ],
    "correctIndexes": [
      0,
      4
    ],
    "explanation": "A solid security posture combines physical and logical controls: keep network equipment physically secured so it cannot be tampered with, and disable any unused ports, interfaces, and services so they cannot be exploited as attack surface."
  },
  {
    "id": "p9_q075",
    "question": "Refer to the exhibit. What are the two steps an engineer must take to provide the highest encryption and authentication using domain credentials from LDAP? (Choose two)",
    "image": "p9_q075.png",
    "options": [
      "Select WPA policy with TKIP Encryption",
      "Select WPA + WPA2 on layer 2 security",
      "Select PSK under authentication key management",
      "Select Static-WEP + 802.1x on Layer 2 security",
      "Select 802.1x from under authentication key management"
    ],
    "correctIndexes": [
      1,
      4
    ],
    "explanation": "WPA2 provides the highest encryption available on this screen, and 802.1x authentication key management uses an external authentication server (such as LDAP/RADIUS) with domain credentials, unlike PSK which uses a shared passphrase."
  },
  {
    "id": "p9_q076",
    "question": "Refer to the exhibit.\n\n```\nCat9K-1#show lldp entry Cat9K-2\n\nLocal Intf: Gi1/0/21\nChassis ID: 308b.b2b3.2880\nPort id: Gi1/0/21\nPort Description: GigabitEthernet1/0/21\nSystem Name: Cat9K-2\n\nManagement Addresses:\n  IP: 10.6.110.2\n```\n\nThe network administrator must prevent the switch Cat9K-2 IP address from being visible in LLDP without disabling the protocol. Which action must be taken to complete the task?",
    "image": null,
    "options": [
      "Configure the no lldp tlv-select-management-address command globally on Cat9K-2",
      "Configure the no lldp transmit command on interface G1/0/21 in Cat9K-1",
      "Configure the no lldp receive command on interface G1/0/21 on Cat9K-1",
      "Configure the no lldp mac-phy-cfg command globally on Cat9K-2"
    ],
    "correctIndexes": [
      0
    ],
    "explanation": "LLDP sends TLV attributes such as port description, system name, and management address to neighbors. The command no lldp tlv-select-management-address disables just the management-address TLV from being sent, without disabling LLDP itself."
  },
  {
    "id": "p9_q077",
    "question": "Which WAN topology has the highest degree of reliability?",
    "image": null,
    "options": [
      "router-on-a-stick",
      "Point-to-point",
      "hub-and-spoke",
      "full mesh"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "Full-mesh is a network topology in which there is a direct link between all pairs of nodes, giving it the highest degree of redundancy and reliability since the failure of any single link does not isolate any node."
  },
  {
    "id": "p9_q078",
    "question": "What is a feature of WPA?",
    "image": null,
    "options": [
      "802.1x authentication",
      "preshared key",
      "TKIP/MIC encryption",
      "small Wi-Fi application"
    ],
    "correctIndexes": [
      2
    ],
    "explanation": "WPA uses Michael, a special Message Integrity Check (MIC) designed to work with TKIP without requiring excessive computation. WPA supports Personal mode (pre-shared key) and Enterprise mode (802.1X), but the encryption feature itself is TKIP/MIC."
  },
  {
    "id": "p9_q079",
    "question": "Refer to the exhibit.\n\n```\nR1#show ip ospf neighbor\nNeighbor ID     Pri  State           Dead Time  Address          Interface\n192.168.100.2   1    FULL/BDR        00:00:35   192.168.100.2    FastEthernet0/0\n192.168.100.3   1    FULL/DR         00:00:34   192.168.100.3    FastEthernet0/0\n```\n\nR1 has taken the DROTHER role in the OSPF DR/BDR election process. Which configuration must an engineer implement so that R1 is elected as the DR?",
    "image": "p9_q079.png",
    "options": [
      "R1(config)#interface FastEthernet0/0\nR1(config-if)#ip ospf priority 1\nR1#clear ip ospf process",
      "R1(config)#interface FastEthernet0/0\nR1(config-if)#ip ospf priority 200\nR1#clear ip ospf process",
      "R3(config)#interface FastEthernet0/1\nR3(config-if)#ip ospf priority 200\nR3#clear ip ospf process",
      "R2(config)#interface FastEthernet0/2\nR2(config-if)#ip ospf priority 1\nR2#clear ip ospf process"
    ],
    "correctIndexes": [
      1
    ],
    "explanation": "Both R2 and R3 currently have an OSPF priority of 1 on this segment. Setting a higher priority on R1's interface (Fa0/0) and resetting the OSPF process forces R1 to win the DR election."
  },
  {
    "id": "p9_q081",
    "question": "Refer to the exhibit.\n\n```\ncisco_ospf_vrf {\"R1 default\":\n      ensure => 'present',\n      auto_cost => '100',\n}\n```\n\nWhich type of configuration is represented in the output?",
    "image": null,
    "options": [
      "Chef",
      "JSON",
      "Ansible",
      "Puppet"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "Puppet resource declarations use the syntax <TYPE> {'<TITLE>': <ATTRIBUTE> => <VALUE>, ... }, which matches the format shown in the exhibit."
  },
  {
    "id": "p9_q082",
    "question": "How does TFTP operate in a network?",
    "image": null,
    "options": [
      "relies on the well-known TCP port 20 to transmit data",
      "requires two separate connections for control and data traffic",
      "uses block numbers to identify and mitigate data-transfer errors",
      "provides secure data transfer"
    ],
    "correctIndexes": [
      2
    ],
    "explanation": "TFTP is a simple protocol for transferring files, implemented on top of UDP using well-known port 69. Each file block has an identification number so that ACK messages can correctly confirm receipt of each block."
  },
  {
    "id": "p9_q084",
    "question": "Refer to the exhibit.\n\n```\n{\n    \"Routers\": [\"R1\",\"R2\",\"R3\"],\n    \"Switches\": [\"SW1\",\"SW2\",\"SW3\"]\n}\n```\n\nWhat is represented by \"R1\" and \"SW1\" within the JSON output?",
    "image": null,
    "options": [
      "array",
      "object",
      "value",
      "key"
    ],
    "correctIndexes": [
      2
    ],
    "explanation": "In this JSON output, \"Routers\" and \"Switches\" are keys while \"R1\", \"R2\", \"R3\", \"SW1\", \"SW2\", \"SW3\" are values."
  },
  {
    "id": "p9_q085",
    "question": "Refer to the exhibit. The following must be considered:\n\n+ SW1 is fully configured for all traffic\n+ The SW4 and SW9 links to SW1 have been configured\n+ The SW4 interface Gi0/1 and Gi0/0 on SW9 have been configured\n+ The remaining switches have had all VLANs added to their VLAN database\n\nWhich configuration establishes a successful ping from PC2 to PC7 without interruption to traffic flow between other PCs?",
    "image": "p9_q085.png",
    "options": [
      "SW4#\ninterface Gi0/2\nswitchport mode trunk\nswitchport trunk allowed vlan 14,108\n\nSW11#\ninterface Gi0/2\nswitchport mode trunk\nswitchport trunk allowed vlan 14,108\n!\ninterface Gi0/1\nswitchport mode trunk\nswitchport trunk allowed vlan 14,108\n\nSW9#\ninterface Gi0/2\nswitchport mode trunk\nswitchport trunk allowed vlan 14",
      "SW4\ninterface Gi0/7\nswitchport mode trunk\nswitchport trunk allowed vlan 108\n!\ninterface Gi0/2\nswitchport mode access\nswitchport access vlan 14\n\nSW11#\ninterface Gi0/2\nswitchport mode trunk\nswitchport trunk allowed vlan 14,108\n!\ninterface Gi0/1\nswitchport mode trunk\nswitchport trunk allowed vlan 14,108\n\nSW9#\ninterface Gi0/2\nswitchport mode access\nswitchport access vlan 14",
      "SW4\ninterface Gi0/2\nswitchport mode trunk\nswitchport trunk allowed vlan 14\n\nSW11#\ninterface Gi0/1\nswitchport mode trunk\nswitchport trunk allowed vlan 14\n\nSW9#\ninterface Gi0/2\nswitchport mode trunk\nswitchport trunk allowed vlan 108",
      "SW4\ninterface Gi0/2\nswitchport mode access\nswitchport access vlan 14\n\nSW11#\ninterface Gi0/2\nswitchport mode access\nswitchport access vlan 14\n!\ninterface Gi0/0\nswitchport mode access\nswitchport access vlan 14\n!\ninterface Gi0/1\nswitchport mode trunk\n\nSW9#\ninterface Gi0/2\nswitchport mode access\nswitchport access vlan 14"
    ],
    "correctIndexes": [
      0
    ],
    "explanation": "PC2 (VLAN 14) must reach PC7 (VLAN 14) through SW4 -> SW11 -> SW9, which requires VLAN 14 to be allowed as a trunk on the SW4-SW11 and SW11-SW9 links. VLAN 108 must also remain allowed on links carrying PC3/PC9 traffic so that traffic between the other PCs is not interrupted; only Option A satisfies both requirements."
  },
  {
    "id": "p9_q086",
    "question": "An engineer is configuring switch SW1 to act as an NTP server when all upstream NTP server connectivity fails. Which configuration must be used?",
    "image": null,
    "options": [
      "SW1# config t\nSW1(config)#ntp server 192.168.1.1\nSW1(config)#ntp access-group server accesslist1",
      "SW1# config t\nSW1(config)#ntp peer 192.168.1.1\nSW1(config)#ntp access-group peer accesslist1",
      "SW1# config t\nSW1(config)#ntp backup\nSW1(config)#ntp server 192.168.1.1",
      "SW1# config t\nSW1(config)#ntp master\nSW1(config)#ntp server 192.168.1.1"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "The ntp master command configures the local device to act as an authoritative NTP time source (server) for other devices when it cannot reach any upstream NTP server."
  },
  {
    "id": "p9_q087",
    "question": "Refer to the exhibit. An OSPF neighbor relationship must be configured using these guidelines:\n- R1 is only permitted to establish a neighbor with R2.\n- R1 will never participate in DR elections.\n- R1 will use a router-id of 10.1.1.1.\n\nWhich configuration must be used?",
    "image": "p9_q087.png",
    "options": [
      "interface Loopback0\n  ip address 10.1.1.1 255.255.255.255\ninterface FastEthernet0/0\n  ip address 10.100.1.1 255.255.255.252\n  ip ospf priority 100\n  ip access-group 102 in\n\nrouter ospf 10\n  log-adjacency-changes\n  network 10.1.1.1 0.0.0.0 area 0\n  network 10.100.1.0 0.0.0.3 area 0\n  ospf router-id 10.1.1.1\n\naccess-list 102 permit 88 host 10.100.1.2 host 224.0.0.5\naccess-list 102 deny 88 any any\naccess-list 102 permit ip any any",
      "interface FastEthernet0/0\n  ip address 10.100.1.1 255.255.255.252\n  ip ospf priority 0\n  ip access-group 102 in\n\nrouter ospf 10\n  log-adjacency-changes\n  network 10.1.1.1 0.0.0.0 area 0\n  network 10.100.1.0 0.0.0.3 area 0\n  router-id 10.1.1.1\n\naccess-list 102 permit 89 host 10.100.1.2 host 224.0.0.5\naccess-list 102 deny 89 any any\naccess-list 102 permit ip any any",
      "interface Loopback0\n  ip address 10.1.1.1 255.255.255.255\n\ninterface FastEthernet0/0\n  ip address 10.100.1.1 255.255.255.252\n  ip ospf priority 0\n  ip access-group 102 in\n\nrouter ospf 10\n  log-adjacency-changes\n  network 10.1.1.1 0.0.0.0 area 0\n  network 10.100.1.0 0.0.0.3 area 0\n  router-id 10.1.1.1\n\naccess-list 102 permit 88 host 10.100.1.2 host 224.0.0.5\naccess-list 102 deny 88 any any\naccess-list 102 permit ip any any",
      "interface FastEthernet0/0\n  ip address 10.100.1.1 255.255.255.252\n  ip ospf priority 100\n  ip access-group 102 in\n\nrouter ospf 10\n  log-adjacency-changes\n  network 10.1.1.1 0.0.0.0 area 0\n  network 10.100.1.0 0.0.0.3 area 0\n  ospf router-id 10.1.1.1\n\naccess-list 102 permit 89 host 10.100.1.2 host 224.0.0.5\naccess-list 102 deny 89 any any"
    ],
    "correctIndexes": [
      1
    ],
    "explanation": "Setting ip ospf priority 0 prevents R1 from participating in DR elections. OSPF uses IP protocol number 89, so the access list must permit protocol 89 from 10.100.1.2 (R2) and deny it from others to restrict neighbor formation to R2 only; only Option B satisfies both conditions."
  },
  {
    "id": "p9_q088",
    "question": "How does authentication differ from authorization?",
    "image": null,
    "options": [
      "Authentication verifies the identity of a person accessing a network, and authorization determines what resource a user can access.",
      "Authentication is used to determine what resources a user is allowed to access, and authorization is used to track what equipment is allowed access to the network",
      "Authentication is used to verify a person's identity, and authorization is used to create syslog messages for logins",
      "Authentication is used to record what resource a user accesses, and authorization is used to determine what resources a user can access"
    ],
    "correctIndexes": [
      0
    ],
    "explanation": "Authentication confirms who a user is (identity verification), while authorization determines what resources or actions that authenticated user is permitted to access."
  },
  {
    "id": "p9_q089",
    "question": "A user configured OSPF and advertised the Gigabit Ethernet interface in OSPF. By default, to which type of OSPF network does this interface belong?",
    "image": null,
    "options": [
      "point-to-multipoint",
      "point-to-point",
      "nonbroadcast",
      "broadcast"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "Ethernet interfaces (including Gigabit Ethernet) default to the OSPF broadcast network type, which elects a DR/BDR."
  },
  {
    "id": "p9_q090",
    "question": "Refer to the exhibit.\n\n```\nip arp inspection vlan 5-10\ninterface fastethernet0/1\n switchport mode access\n switchport access vlan 5\n```\n\nWhat is the effect of this configuration?",
    "image": null,
    "options": [
      "Egress traffic is passed only if the destination is a DHCP server.",
      "All ingress and egress traffic is dropped because the interface is untrusted.",
      "All ARP packets are dropped by the switch.",
      "The switch discards all ingress ARP traffic with invalid MAC-to-IP address bindings."
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "Dynamic ARP Inspection (DAI) is an ingress-only security feature; it does not perform any egress checking. It discards incoming ARP packets that have invalid MAC-to-IP address bindings."
  },
  {
    "id": "p9_q091",
    "question": "Refer to the exhibit.\n\n```\nR1# show ip route | begin gateway\nGateway of last resort is not set\n    172.16.0.0/16 is variably subnetted, 3 subnets, 2 masks\nC    172.16.1.0/24 is directly connected, FastEthernet0/0\nL    172.16.1.1/32 is directly connected, FastEthernet0/0\nEX   172.16.2.0/24 [170/2] via 207.165.200.250, 00:00:23, Serial0/0/0\nO    192.168.1.0/24 [110/84437] via 207.165.200.254, 00:00:17, Serial0/0/1\nD    192.168.2.0/24 [90/184437] via 207.165.200.254, 00:00:13, Serial0/0/1\nE1   192.168.3.0/24 [110/1831437] via 207.165.200.254, 00:00:19, Serial0/0/1\n    207.165.200.0/24 is variably subnetted, 4 subnets, 2 masks\nC    207.165.200.248/30 is directly connected, Serial0/0/0\nL    207.165.200.249/32 is directly connected, Serial0/0/0\nC    207.165.200.252/30 is directly connected, Serial0/0/1\nL    207.165.200.253/32 is directly connected, Serial0/0/1\n```\n\nWhich prefix did router R1 learn from internal EIGRP?",
    "image": null,
    "options": [
      "192.168.2.0/24",
      "192.168.1.0/24",
      "192.168.3.0/24",
      "172.16.1.0/24"
    ],
    "correctIndexes": [
      0
    ],
    "explanation": "Internal EIGRP routes are symbolized by the letter \"D\" in the routing table. \"EX\" denotes external EIGRP routes, and \"O\"/\"E1\" denote OSPF routes."
  },
  {
    "id": "p9_q092",
    "question": "Refer to the exhibit. Router R1 must be configured to reach the 10.0.3.0 network from the 10.0.1.0/24 segment. Which command must be used to configure the route?",
    "image": "p9_q092.png",
    "options": [
      "route add 10.0.3.0 0.255.255.255 10.0.4.2",
      "route add 10.0.3.0 mask 255.255.255.0 10.0.4.3",
      "ip route 10.0.3.0 0.255.255.255 10.0.4.2",
      "ip route 10.0.3.0 255.255.255.0 10.0.4.3"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "A Cisco static route is configured with the syntax ip route <destination-network> <subnet-mask> <next-hop>. The next hop toward 10.0.3.0/24 via the 10.0.4.0/24 link is R3's address, 10.0.4.3."
  },
  {
    "id": "p9_q093",
    "question": "What is a benefit for external users who consume public cloud resources?",
    "image": null,
    "options": [
      "implemented over a dedicated WAN",
      "located in the same data center as the users",
      "all hosted on physical servers",
      "accessed over the Internet"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "Public cloud resources are hosted by a third-party provider and are accessed by external users over the Internet, rather than requiring a dedicated private WAN link."
  },
  {
    "id": "p9_q094",
    "question": "In an SDN architecture, which function of a network node is centralized on a controller?",
    "image": null,
    "options": [
      "provides protocol access for remote access devices",
      "discards a message due filtering",
      "creates the IP routing table",
      "makes a routing decision"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "SDN separates a router's control plane from its data (forwarding) plane. The control plane, which makes routing decisions, is centralized on the SDN controller, while the data plane on each device simply forwards packets based on the controller's instructions."
  },
  {
    "id": "p9_q095",
    "question": "An engineer must configure neighbor discovery between the company router and an ISP.\n\n```\ninterface gigabitethernet0/0\ndescription Circuit-ATT4202-89930\nduplex full\nspeed 1000\nmedia-type gbic\nnegotiation auto\nlldp transmit\nlldp receive\n```\n\nWhat is the next step to complete the configuration if the ISP uses a third-party router?",
    "image": null,
    "options": [
      "Disable CDP on gi0/0.",
      "Disable auto-negotiation.",
      "Enable LLDP TLVs on the ISP router.",
      "Enable LLDP globally."
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "LLDP transmit/receive are already set on the interface, but LLDP must also be enabled globally with the 'lldp run' command before it will operate. CDP is Cisco-proprietary and would not be recognized by a third-party ISP router, so LLDP (an open standard) is used instead."
  },
  {
    "id": "p9_q096",
    "question": "Which SDN plane forwards user-generated traffic?",
    "image": null,
    "options": [
      "policy plane",
      "management plane",
      "data plane",
      "control plane"
    ],
    "correctIndexes": [
      2
    ],
    "explanation": "The data plane (forwarding plane) is responsible for forwarding user-generated traffic through the network device, while the control plane makes the decisions about how that traffic should be forwarded."
  },
  {
    "id": "p9_q097",
    "question": "When should an engineer implement a collapsed-core architecture?",
    "image": null,
    "options": [
      "for large networks that are connected to multiple remote sites",
      "the access and distribution layers must be on the same device",
      "only when using VSS technology",
      "for small networks with minimal need for growth"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "The three-tier hierarchical design maximizes performance, network availability, and the ability to scale the network design. Most small enterprise campuses do not grow significantly larger over time, and are small enough to be well served by a two-tier hierarchical design, where the core and distribution layers are collapsed into one layer. The primary motivation for the collapsed core design is reducing network cost while maintaining most of the benefits of the three-tier hierarchical model."
  },
  {
    "id": "p9_q098",
    "question": "Refer to the exhibit.\n\n```\nR1#show ip route\nGateway of last resort is 10.10.10.2 to network 0.0.0.0\nS*    0.0.0.0/0 [1/0] via 10.10.10.2\n\nR2#show ip route\nGateway of last resort is 10.10.10.1 to network 0.0.0.0\nS*    0.0.0.0/0 [1/0] via 10.10.10.1\n```\n\nRouters R1 and R2 have been configured with their respective LAN interfaces. The two circuits are operational and reachable across WAN. Which command set establishes failover redundancy if the primary circuit goes down?",
    "image": "p9_q098.png",
    "options": [
      "R1(config)#ip route 0.0.0.0 0.0.0.0 10.10.10.6 2\nR2(config)#ip route 0.0.0.0 0.0.0.0 10.10.10.5 2",
      "R1(config)#ip route 10.10.13.10 255.255.255.255 10.10.10.6\nR2(config)#ip route 192.166.0.100 255.255.255.255 10.10.10.5",
      "R1(config)#ip route 10.10.13.10 255.255.255.255 10.10.10.2\nR2(config)#ip route 192.168.0.100 255.255.255.255 10.10.10.1",
      "R1(config)#ip route 0.0.0.0 0.0.0.0 10.10.10.6\nR2(config)#ip route 0.0.0.0 0.0.0.0 10.10.10.5"
    ],
    "correctIndexes": [
      0
    ],
    "explanation": "Configuring a floating static default route through the secondary circuit's next-hop addresses (10.10.10.6 on R1, 10.10.10.5 on R2) with a higher administrative distance (2) than the existing default routes creates a backup path that is only installed into the routing table if the primary circuit's route disappears."
  },
  {
    "id": "p9_q100",
    "question": "What is a function performed by a web server?",
    "image": null,
    "options": [
      "provide an application that is transmitted over HTTP",
      "send and retrieve email from client devices",
      "securely store files for FTP access",
      "authenticate and authorize a user's identity"
    ],
    "correctIndexes": [
      0
    ],
    "explanation": "A web server's core function is to host and deliver web applications and content to clients over HTTP/HTTPS."
  },
  {
    "id": "p9_q102",
    "question": "Which two wireless security standards use Counter Mode Cipher Block Chaining Message Authentication Code Protocol for encryption and data integrity? (Choose two)",
    "image": null,
    "options": [
      "WPA2",
      "WPA3",
      "WEP",
      "WPA",
      "Wi-Fi 6"
    ],
    "correctIndexes": [
      0,
      1
    ],
    "explanation": "WPA2 mandates the use of Counter Mode with Cipher Block Chaining Message Authentication Protocol (CCMP), which uses the AES block cipher, replacing the RC4 cipher used in WEP and TKIP. CCMP-128 (AES-128 in CCM mode) is also used as the minimum encryption algorithm in WPA3-Personal mode."
  },
  {
    "id": "p9_q103",
    "question": "What is a practice that protects a network from VLAN hopping attacks?",
    "image": "p9_q103.png",
    "options": [
      "Implement port security on internet-facing VLANs.",
      "Configure an ACL to prevent traffic from changing VLANs.",
      "Assign all access ports to VLANs other than the native VLAN.",
      "Enable dynamic ARP inspection."
    ],
    "correctIndexes": [
      2
    ],
    "explanation": "VLAN hopping can be achieved through a double-tagging attack, where an attacker's frame carries two 802.1Q tags: the outer tag matching the trunk's native VLAN is stripped by the first switch, exposing the inner tag which lets the frame reach a different VLAN. This attack only succeeds if the attacker belongs to the native VLAN of the trunk, so keeping user access ports off the native VLAN prevents it."
  },
  {
    "id": "p9_q104",
    "question": "Refer to the exhibit.\n\n```\nR1#show ip route\nCodes: C - connected, S - static, R - RIP, M - mobile, B - BGP\n       D - EIGRP, EX - EIGRP external, O - OSPF, IA - OSPF inter area\n       N1 - OSPF NSSA external type 1, N2 - OSPF NSSA external type 2\n       E1 - OSPF external type 1, E2 - OSPF external type 2\n       i - IS-IS, su - IS-IS summary, L1 - IS-IS level-1, L2 - IS-IS level-2\n       ia - IS-IS inter area, * - candidate default, U - per-user static route\n       o - ODR, P - periodic downloaded static route, H - NHRP, l - LISP\n       + - replicated route, % - next hop override\n\nGateway of last resort is 10.56.0.1 to network 0.0.0.0\n\nS*    0.0.0.0/0 [1/0] via 10.56.0.1\n      10.0.0.0/8 is variably subnetted, 2 subnets, 2 masks\nC        10.56.0.0/17 is directly connected, Vlan56\nL        10.56.0.19/32 is directly connected, Vlan56\nC        10.56.128.0/18 is directly connected, Vlan57\nL        10.56.128.19/32 is directly connected, Vlan57\n```\n\nWhen router R1 is sending traffic to IP address 10.56.192.1, which interface or next hop address does it use to route the packet?",
    "image": null,
    "options": [
      "0.0.0.0/0",
      "Vlan57",
      "10.56.0.1",
      "10.56.128.19"
    ],
    "correctIndexes": [
      2
    ],
    "explanation": "10.56.192.1 does not fall within the connected subnets 10.56.0.0/17 (10.56.0.0-10.56.127.255) or 10.56.128.0/18 (10.56.128.0-10.56.191.255), so R1 falls back to its default route and forwards the packet to the next-hop address 10.56.0.1."
  },
  {
    "id": "p9_q105",
    "question": "What is a function of MAC learning on a switch?",
    "image": null,
    "options": [
      "A static MAC address is manually added to the MAC table.",
      "MAC address learning is disabled by default on all VLANs.",
      "Frames received for a destination MAC address not listed in the address table are dropped.",
      "The MAC address table is used to populate the ARP table."
    ],
    "correctIndexes": [
      0
    ],
    "explanation": "MAC address learning is enabled by default on all VLANs, so a switch does not drop frames for unknown destination MAC addresses but instead floods them out all ports except the one they were received on. The ARP table is built from ARP request/reply exchanges, not from the MAC address table. A static entry, such as one created with 'mac address-table static 001d.a18b.36d0 vlan 5 interface fastEthernet 0/2', can be manually added to the MAC table."
  },
  {
    "id": "p9_q106",
    "question": "What is the difference between 1000BASE-LX/LH and 1000BASE-ZX interfaces?",
    "image": null,
    "options": [
      "1000BASE-LX/LH interoperates with multimode and single-mode fiber, and 1000BASE-ZX needs a conditioning patch cable with a multimode.",
      "1000BASE-ZX is supported on links up to 1000km, and 1000BASE-LX/LH operates over links up to 70 km.",
      "1000BASE-ZX interoperates with dual-rate 100M/1G 10Km SFP over multimode fiber, and 1000BASE-LX/LH supports only single-rate.",
      "1000BASE-LX/LH is supported on links up to 10km, and 1000BASE-ZX operates over links up to 70 km."
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "1000BASE-LX/LH uses a long-wavelength laser over single-mode fiber (up to about 10 km) or multimode fiber (up to about 3 km), while 1000BASE-ZX uses an extended-wavelength laser over single-mode fiber and, although officially rated up to 100 km, is typically usable up to roughly 70-80 km depending on link loss."
  },
  {
    "id": "p9_q107",
    "question": "What is the effect when loopback interfaces and the configured router ID are absent during the OSPF Process configuration?",
    "image": null,
    "options": [
      "The router ID 0.0.0.0 is selected and placed in the OSPF process.",
      "No router ID is set, and the OSPF protocol does not run.",
      "The highest up/up physical interface IP address is selected as the router ID.",
      "The lowest IP address is incremented by 1 and selected as the router ID."
    ],
    "correctIndexes": [
      2
    ],
    "explanation": "OSPF selects its router ID using the following order of preference: a manually configured router ID, then the highest IP address on an active loopback interface, then the highest IP address on an active (up/up) physical interface if no loopback interface exists."
  },
  {
    "id": "p9_q108",
    "question": "Refer to the exhibit.\n\nWhat is expected when PC_A sends data to PC_B after their initial communication?",
    "image": "p9_q108.png",
    "options": [
      "The source and destination MAC addresses remain the same",
      "The switch rewrites the source and destination MAC addresses with its own",
      "The source MAC address is changed",
      "The destination MAC address is replaced with ffff.ffff.ffff"
    ],
    "correctIndexes": [
      0
    ],
    "explanation": "PC_A and PC_B are both in VLAN 200 and connected through a switch, a Layer 2 device that forwards frames based on MAC address without rewriting them, so the source and destination MAC addresses remain unchanged between the two hosts."
  },
  {
    "id": "p12_q058",
    "question": "What describes a northbound REST API for SDN?",
    "image": null,
    "options": [
      "network-element-facing interface for the control and data planes",
      "application-facing interface for GET, POST, PUT, and DELETE methods",
      "network-element-facing interface for GET, POST, PUT, and DELETE methods",
      "application-facing interface for SNMP GET requests"
    ],
    "correctIndexes": [
      1
    ],
    "explanation": "Northbound APIs face applications above the SDN controller, allowing them to interact with the controller using standard REST methods such as GET, POST, PUT, and DELETE."
  },
  {
    "id": "p12_q059",
    "question": "Refer to the exhibit.\n\nSW1 supports connectivity for a lobby conference room and must be secured. The engineer must limit the connectivity from PC1 to the SW1 and SW2 network. The MAC addresses allowed must be limited to two. Which configuration secures the conference room connectivity?",
    "image": "p12_q059.png",
    "options": [
      "interface gi1/0/15\nswitchport port-security\nswitchport port-security mac-address 0000.abcd.0004 vlan 100",
      "interface gi1/0/15\nswitchport port-security mac-address 0000.abcd.0004 vlan 100",
      "interface gi1/0/15\nswitchport port-security mac-address 0000.abcd.0004 vlan 100\ninterface switchport secure-mac limit 2",
      "interface gi1/0/15\nswitchport port-security\nswitchport port-security maximum 2"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "Port security must first be enabled on the interface, then the maximum number of allowed secure MAC addresses set to 2 with \"switchport port-security maximum 2\", allowing dynamically learned MACs up to that limit rather than hardcoding just one."
  },
  {
    "id": "p12_q060",
    "question": "Refer to the exhibit.\n\n```\nR1# show ip route\nCodes: C - connected, S - static, I - IGRP, R - RIP, M - mobile, B - BGP\n       D - EIGRP, EX - EIGRP external, O - OSPF, IA - OSPF inter area\n       N1 - OSPF NSSA external type 1, N2 - OSPF NSSA external type 2\n       E1 - OSPF external type 1, E2 - OSPF external type 2, E - EGP\n       i - IS-IS, L1 - IS-IS level-1, L2 - IS-IS level-2\n       U - per-user static route, o - ODR\nGateway of last resort is not set\nC   172.16.0.0/16 is directly connected, Loopback0\n    172.16.0/16 is variably subnetted, 4 subnets, 2 masks\nO       172.16.1.3/3 [110/100] via 192.168.7.40, 00:39:08, Serial0\nC       172.16.1.0/24 is directly connected, Serial0\nO       172.16.1.184/29 [110/5] via 192.168.7.35, 00:39:08, Serial0\nO       172.16.3.0/24 [110/10] via 192.168.7.4, 00:39:08, GigabitEthernet 0/0\nD       172.16.1.0/28 [90/10] via 192.168.7.7, 00:39:08, GigabitEthernet 0/0\n```\n\nLoad-balanced traffic is coming in from the WAN destined to a host at 172.16.1.190. Which next-hop is used by the router to forward the request?",
    "image": null,
    "options": [
      "192.168.7.4",
      "192.168.7.7",
      "192.168.7.35",
      "192.168.7.40"
    ],
    "correctIndexes": [
      2
    ],
    "explanation": "The address 172.16.1.190 falls within the most specific matching route 172.16.1.184/29 (covering .184-.191), which points to next-hop 192.168.7.35."
  },
  {
    "id": "p12_q061",
    "question": "Refer to the exhibit.\n\n```\nR1#show ip ospf interface g0/0/0\nGigabitEthernet0/0/0 is up, line protocol is up\n  Internet address is 192.168.1.2/24, Area 0\n  Process ID 1, Router ID 192.168.1.2, Network Type POINT-TO-POINT, Cost: 1\n  Transmit Delay is 1 sec, State POINT-TO-POINT,\n  Timer intervals configured, Hello 15, Dead 40, Wait 40, Retransmit 5\n    Hello due in 00:00:08\n  Index 1/1, flood queue length 0\n  Next 0x0(0) /0x0(0)\n  Last flood scan length is 1, maximum is 1\n  Last flood scan time is 0 msec, maximum is 0 msec\n  Suppress hello for 0 neighbor(s)\n\nR2#show ip ospf interface g0/0/0\nGigabitEthernet0/0/0 is up, line protocol is up\n  Internet address is 192.168.1.1/24, Area 0\n  Process ID 1, Router ID 10.1.1.1, Network Type POINT-TO-POINT, Cost: 1\n  Transmit Delay is 1 sec, State POINT-TO-POINT,\n  Timer intervals configured, Hello 15, Dead 45, Wait 15, Retransmit 5\n    Hello due in 00:00:11\n  Index 1/1, flood queue length 0\n  Next 0x0(0)/0x0(0)\n  Last flood scan length is 1, maximum is 1\n  Last flood scan time is 0 msec, maximum is 0 msec\n  Suppress hello for 0 neighbor(s)\n```\n\nThe network engineer is configuring router R2 as a replacement router on the network. After the initial configuration is applied it is determined that R2 failed to show R1 as a neighbor. Which configuration must be applied to R2 to complete the OSPF configuration and enable it to establish the neighbor relationship with R1?\n\n```\nOption A\nR2(config)#interface g0/0/0\nR2(config-if)#ip ospf hello-interval 10\n\nOption B\nR2(config)#router ospf 1\nR2(config-router)#router-id 192.168.1.2\n\nOption C\nR2(config)#router ospf 1\nR2(config-router)#network 192.168.1.0 255.255.255.0 area 2\n\nOption D\nR2(config)#interface g0/0/0\nR2(config-if)#ip ospf dead-interval 40\n```",
    "image": null,
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "To become OSPF neighbors, the Hello and Dead intervals (along with Area ID, authentication, stub flag, and MTU) must match on both routers. Here the Dead intervals are mismatched (40 vs 45), so Option D corrects R2's dead-interval to 40 to match R1."
  },
  {
    "id": "p12_q062",
    "question": "Refer to the exhibit.\n\nThe DHCP server is configured with a DHCP pool for each of the subnets represented. Which command must be configured on switch SW1 to allow DHCP clients on VLAN 10 to receive dynamic IP addresses from the DHCP server?\n\n```\nDHCP Server configuration:\nDHCPServer(dhcp-config)#ip dhcp pool Net10\nDHCPServer(dhcp-config)#default-router 192.168.10.2\nDHCPServer(dhcp-config)#domain-name cisco.local\nDHCPServer(dhcp-config)#dns-server 192.168.10.5\nDHCPServer(dhcp-config)#exit\nDHCPServer(config)#\nDHCPServer(config)#ip dhcp pool Net20\nDHCPServer(dhcp-config)#default-router 192.168.20.2\nDHCPServer(dhcp-config)#domain-name cisco.local\nDHCPServer(dhcp-config)#dns-server 192.168.20.5\nDHCPServer(dhcp-config)#exit\nDHCPServer(config)#\nDHCPServer(config)#ip dhcp excluded-address 192.168.10.1 192.168.10.10\nDHCPServer(config)#ip dhcp excluded-address 192.168.20.1 192.168.20.10\nDHCPServer(config)#\nDHCPServer(config)#int g0/0\nDHCPServer(config-if)#no shut\nDHCPServer(config-if)#ip address 192.168.20.2 255.255.255.0\nDHCPServer(config-if)#exit\nDHCPServer(config)#exit\nDHCPServer#\n\nSW1 configuration:\nSW1(config)#vlan 10\nSW1(config-vlan)#name vlan10\nSW1(config-vlan)#exit\nSW1(config)#vlan 20\nSW1(config-vlan)#name vlan20\nSW1(config-vlan)#exit\nSW1(config)#interface vlan 10\nSW1(config-if)#ip address 192.168.10.1 255.255.255.0\nSW1(config-if)#exit\nSW1(config)#interface vlan 20\nSW1(config-if)#ip address 192.168.20.1 255.255.255.0\nSW1(config-if)#exit\nSW1(config)#interface fa0/1\nSW1(config-if)#switchport mode access\nSW1(config-if)#switchport access vlan 10\nSW1(config-if)#exit\nSW1(config)#interface fa0/2\nSW1(config-if)#switchport mode access\nSW1(config-if)#switchport access vlan 20\nSW1(config-if)#exit\nSW1(config)#exit\nSW1#\n```",
    "image": "p12_q062.png",
    "options": [
      "SW1(config-if)#ip helper-address 192.168.10.2",
      "SW1(config-if)#ip helper-address 192.168.20.1",
      "SW1(config-if)#ip helper-address 192.168.20.2",
      "SW1(config-if)#ip helper-address 192.168.10.1"
    ],
    "correctIndexes": [
      2
    ],
    "explanation": "The ip helper-address command is applied on the VLAN 10 SVI and must point to the actual DHCP server's IP address, which is 192.168.20.2 (configured on the DHCP server's g0/0 interface), so DHCP broadcasts are relayed there."
  },
  {
    "id": "p12_q065",
    "question": "Refer to the exhibit.\n\n```\nhostname CPE\nservice password-encryption\nip domain name ccna.cisco.com\nip name-server 198.51.100.210\n\ncrypto key generate rsa modulus 1024\n\nusername admin privilege 15 secret S0m3s3cr3t\n\nline vty 0 4\n transport input ssh\n login local\n```\n\nAn engineer executed the script and added commands that were not necessary for SSH and now must remove the commands. Which two commands must be executed to correct the configuration? (Choose two)",
    "image": null,
    "options": [
      "no ip domain name ccna.cisco.com",
      "no login local",
      "no ip name-server 198.51.100.210",
      "no service password-encryption",
      "no hostname CPE"
    ],
    "correctIndexes": [
      2,
      3
    ],
    "explanation": "SSH requires an ip domain name (to generate the RSA key), the crypto key itself, a local username/secret, and \"transport input ssh\" with \"login local\" on the vty lines. The ip name-server and service password-encryption lines are not required for SSH to function, so they should be removed."
  },
  {
    "id": "p12_q067",
    "question": "What is a reason to implement LAG on a Cisco WLC?",
    "image": null,
    "options": [
      "Enable the connected switch ports to use different Layer 2 configurations.",
      "Increase the available throughput on the link.",
      "Allow for stateful failover between WLCs.",
      "Increase security by encrypting management frames."
    ],
    "correctIndexes": [
      1
    ],
    "explanation": "Link Aggregation (LAG) bundles multiple physical ports on a WLC into a single logical interface, which increases the available throughput/bandwidth between the WLC and the switch and provides link redundancy."
  },
  {
    "id": "p12_q068",
    "question": "What are two port types used by a Cisco WLC for out-of-band management? (Choose two)",
    "image": null,
    "options": [
      "redundant",
      "distribution system",
      "service",
      "management",
      "console"
    ],
    "correctIndexes": [
      2,
      4
    ],
    "explanation": "The service port is used for out-of-band management of the controller and system recovery and maintenance in the event of a network failure. The console port is used for out-of-band management, system recovery, and early boot operations."
  },
  {
    "id": "p12_q070",
    "question": "Refer to the exhibit. Routers R1 and R2 are configured with RIP as the dynamic routing protocol. A network engineer must configure R1 with floating static route to serve as a backup route to network 192.168.23.0. Which command must the engineer configure on R1?",
    "image": "p12_q070.png",
    "options": [
      "ip route 192.168.23.0 255.255.255.255 192.168.13.3 121",
      "ip route 192.168.23.0 255.255.255.0 192.168.13.3 100",
      "ip route 192.168.23.0 255.255.255.0 192.168.13.3",
      "ip route 192.168.23.0 255.255.255.0 192.168.13.3 121"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "The Administrative Distance (AD) of RIP is 120 so we have to configure a higher AD value (121, for example) for the floating static route to serve as the backup route. Also the subnet mask to this network must be /24 (255.255.255.0)."
  },
  {
    "id": "p12_q071",
    "question": "What are two facts that differentiate optical-fiber cabling from copper cabling? (Choose two)",
    "image": null,
    "options": [
      "It carries signals for longer distances.",
      "It provides greater throughput options.",
      "It carries electrical current further distances for PoE devices.",
      "It is less expensive when purchasing patch cables.",
      "It has a greater sensitivity to changes in temperature and moisture"
    ],
    "correctIndexes": [
      0,
      1
    ],
    "explanation": "Fiber-optic cable carries light signals rather than electrical signals, allowing it to support much longer transmission distances and higher bandwidth/throughput options than copper cabling, while also being immune to electromagnetic interference."
  },
  {
    "id": "p12_q072",
    "question": "Why would VRRP be implemented when configuring a new subnet in a multivendor environment?",
    "image": null,
    "options": [
      "to ensure that the spanning-tree forwarding path to the gateway is loop-free",
      "when a gateway protocol is required that supports more than two Cisco devices for redundancy",
      "to interoperate normally with all vendors and provide additional security features for Cisco devices",
      "to enable normal operations to continue after a member failure without requiring a change in a host ARP cache"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "VRRP is an open standard protocol so it is a must when using along with another vendor. All VRRP routers share the MAC address of the virtual IP address (in the form 0000.5E00.01xx, where xx is the VRRP group number) so even when a member fails, the hosts do not need to change its ARP cache by sending an ARP request again."
  },
  {
    "id": "p12_q073",
    "question": "What must a network administrator consider when deciding whether to configure a new wireless network with APs in autonomous mode or APs running in cloud-based mode?",
    "image": null,
    "options": [
      "Autonomous mode APs are less dependent on an underlay but more complex to maintain than APs in cloud-based mode",
      "Autonomous mode APs are easy to deploy and automate than APs in cloud-based mode",
      "Cloud-based mode APs are easy to deploy but harder to automate than APs in autonomous mode",
      "Cloud-based mode APs rely on underlays and are more complex to maintain than APs in autonomous mode"
    ],
    "correctIndexes": [
      0
    ],
    "explanation": "An autonomous AP can work on its own. Cloud-based AP management is an alternative to purchasing a management platform, pushing the AP management function into the Internet cloud, which makes cloud-based APs easier to manage than traditional autonomous mode APs (which must be configured one by one) but more dependent on a working underlay/Internet connection."
  },
  {
    "id": "p12_q074",
    "question": "Under the CRUD model, which two HTTP methods support the UPDATE operation? (Choose two)",
    "image": null,
    "options": [
      "PUT",
      "PATCH",
      "DELETE",
      "POST",
      "GET"
    ],
    "correctIndexes": [
      0,
      1
    ],
    "explanation": "CRUD is short for CREATE, READ, UPDATE and DELETE operations. Only the UPDATE operation modifies an existing record, which is equivalent to PUT and PATCH in HTTP methods. PUT fully updates (replaces) an existing record, while PATCH updates only part of an existing record without modifying the other fields."
  },
  {
    "id": "p12_q075",
    "question": "What are two advantages of implementing a controller-based architecture instead of a traditional network architecture? (Choose two)",
    "image": null,
    "options": [
      "It supports complex and high-scale IP addressing schemes.",
      "It provides increased scalability and management options.",
      "It allows for seamless connectivity to virtual machines.",
      "It enables configuration task automation.",
      "It increases security against denial-of-service attacks."
    ],
    "correctIndexes": [
      1,
      3
    ],
    "explanation": "A controller-based (SDN) architecture centralizes management and policy control through a controller, which increases scalability and management options and enables automation of configuration tasks across many devices."
  },
  {
    "id": "p12_q076",
    "question": "Refer to the exhibit. The switches are connected via a Cat5 Ethernet cable that was successfully tested. The interfaces are configured as access ports and are both in a \"down\" status. What is the cause of this issue?",
    "image": "p12_q076.png",
    "options": [
      "The switches are configured with incompatible duplex settings.",
      "The speed settings on the switches are mismatched.",
      "The distance between the two switches is not supported by Cat5.",
      "The portfast command is missing from the configuration."
    ],
    "correctIndexes": [
      1
    ],
    "explanation": "Switch A's port is set to speed 100 while Switch B's port is set to speed 10 - a hard-coded speed mismatch between the two ports prevents the link from coming up, so both interfaces stay down."
  },
  {
    "id": "p12_q077",
    "question": "A technician receives a report of network slowness and the issue has been isolated to the interface FastEthernet0/13. What is the root cause of the issue?\n\n```\nFastEthernet0/13 is up, line protocol is up\nHardware is Fast Ethernet, address is 0001.4d27.66cd (bia 0001.4d27.66cd)\nMTU 1500 bytes, BW 100000 Kbit, DLY 100 usec,\nreliability 250/255, txload 1/255, ndoad 1/255\nEncapsulation ARPA, loopback not set\nKeepalive not set\nAuto-duplex (Full), Auto Speed (100), 100BaseTX/FX\nARP type: ARPA, ARP Timeout 04:00:00\nLast input 18:52:43, output 00:00:01, output hang never\nLast clearing of \"show interface\" counters never\nQueueing strategy: fifo\nOutput queue 0/40,0 drops; input queue 0/75, 0 drops\n5 minute input rate 12000 bits/sec, 6 packets/sec\n5 minute output rate 24000 bits/sec, 6 packets/sec\n14488019 packets input, 2441805322 bytes\nReceived 345346 broadcasts, 0 runts, 0 giants, 0 throttles\n261028 input errors, 259429 CRC, 1599 frame, 0 overrun, 0 ignored\n0 watchdog, 84207 multicast 0 input packets with dribble condition detected\n19658279 packets output, 3529106068 bytes, 0 underruns\n0 output errors, 0 collisions, 1 interface resets\n0 babbles, 0 late collision, 0 deferred\n0 lost carrier, 0 no carrier\n0 output buffer failures, 0 output buffers swapped out\n```",
    "image": null,
    "options": [
      "physical errors",
      "local buffer overload",
      "duplicate IP addressing",
      "err-disabled port on the far end"
    ],
    "correctIndexes": [
      0
    ],
    "explanation": "In this output, the input errors and CRC errors are both very high, so the most likely cause of this problem is a faulty cable connected between the two devices (physical errors)."
  },
  {
    "id": "p12_q078",
    "question": "A router received three destination prefixes: 10.0.0.0/8, 10.0.0.0/16, and 10.0.0.0/24. When the show ip route command is executed, which output does it return?",
    "image": null,
    "options": [
      "Gateway of last resort is 172.16.1.1 to network 0.0.0.0\nO E2 10.0.0.0/24[110/5] via 192.168.3.1, 0:01:00, Ethernet2",
      "Gateway of last resort is 172.16.1.1 to network 0.0.0.0\nO E2 10.0.0.0/16[110/5] via 192.168.2.1, 0:01:00, Ethernet1\nO E2 10.0.0.0/24[110/5] via 192.168.3.1, 0:01:00, Ethernet2",
      "Gateway of last resort is 172.16.1.1 to network 0.0.0.0\nO E2 10.0.0.0/8 [110/5] via 192.168.1.1, 0:01:00, Ethernet0",
      "Gateway of last resort is 172.16.1.1 to network 0.0.0.0\nO E2 10.0.0.0/8 [110/5] via 192.168.1.1, 0:01:00, Ethernet0\nO E2 10.0.0.0/16[110/5] via 192.168.2.1, 0:01:00, Ethernet1\nO E2 10.0.0.0/24[110/5] via 192.168.3.1, 0:01:00, Ethernet2"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "For the purpose of installing routes in the routing table, the router considers different prefix lengths as different destinations, so all three routes (of different mask lengths) are installed simultaneously. The longest-match rule is only used later, when forwarding an actual packet, to select the most specific route already in the table."
  },
  {
    "id": "p12_q079",
    "question": "Refer to the exhibit. A network engineer configures the CCNA WLAN so that clients must reauthenticate hourly and to limit the number of simultaneous connections to the WLAN to 10. Which two actions complete this configuration? (Choose two)",
    "image": "p12_q079.png",
    "options": [
      "Set the Maximum Allowed Clients value to 10.",
      "Enable the Client Exclusion option and set the value to 3600.",
      "Set the Maximum Allowed Clients Per AP Radio value to 10.",
      "Enable the Wi-Fi Direct Clients Policy option.",
      "Enable the Enable Session Timeout option and set the value to 3600."
    ],
    "correctIndexes": [
      0,
      4
    ],
    "explanation": "The Maximum Allowed Clients field limits the total number of simultaneous client connections on the WLAN. By default, client sessions with the WLAN are limited to 1800 seconds (30 minutes); enabling Session Timeout and setting it to 3600 seconds (1 hour) forces clients to re-authenticate hourly."
  },
  {
    "id": "p12_q080",
    "question": "Which state is bypassed in Rapid PVST+ when PortFast is enabled on a port?",
    "image": null,
    "options": [
      "discarding",
      "learning",
      "blocking",
      "forwarding"
    ],
    "correctIndexes": [
      1
    ],
    "explanation": "PortFast causes a switch or trunk port to enter the spanning-tree forwarding state immediately, bypassing the listening and learning states."
  },
  {
    "id": "p12_q081",
    "question": "When a switch receives a frame from an unknown source MAC address, which action does the switch take with the frame?",
    "image": null,
    "options": [
      "It floods the frame out all interfaces, including the interface it was received on.",
      "It attempts to send the frame back to the source to ensure that the source MAC address is still available for transmissions.",
      "It sends the frame to ports within the CAM table identified with an unknown source MAC address.",
      "It associate the source MAC address with the LAN port on which it was received and saves it to the MAC address table."
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "When a switch receives a frame with an unknown source MAC address, it performs MAC address learning: it associates that source MAC address with the incoming port and adds the entry to its MAC address (CAM) table for future forwarding decisions."
  },
  {
    "id": "p12_q082",
    "question": "What is a function of a southbound API?",
    "image": null,
    "options": [
      "Automate configuration changes between a server and a switching fabric.",
      "Manage flow control between an SDN controller and a switching fabric.",
      "Use orchestration to provision a virtual server configuration from a web server.",
      "Facilitate the information exchange between an SDN controller and application."
    ],
    "correctIndexes": [
      1
    ],
    "explanation": "A southbound API is used by an SDN controller to communicate with and manage flow control on the switching/routing fabric below it (for example, using OpenFlow), while a northbound API exchanges information between the controller and applications above it."
  },
  {
    "id": "p12_q083",
    "question": "Which interface condition is occurring in this output?\n\n```\nR25# show interface fa0/0\nFastEthernet0/0 is up, line protocol is up\nHardware is DEC21140, address is ca02.7788.0000 (bia ca02.7788.0000)\nDescription: atlanta_subnet\nInternet address is 10.32.102.2/30\nMTU 1500 bytes, BW 100000 Kbit/sec, DLY 100 usec,\nreliability 255/255, txload 1/255, rxload 1/255\nEncapsulation ARPA, loopback not set\nKeepalive set (60 sec)\nFull-duplex, 100 Mb/s, 100BaseTX/FX\nARP type: ARPA, ARP Timeout 04:00:00\nLast input 00:00:01, output 00:00:00, output hang never\nLast clearing of \"show interface\" counters never\nInput queue: 0/300/0/0 (size/max/drops/flushes); Total output drops: 0\nQueueing strategy: fifo\nOutput queue: 0/300 (size/max)\n30 second input rate 0 bits/sec, 0 packets/sec\n30 second output rate 0 bits/sec, 0 packets/sec\n7331 packets input, 7101162 bytes\nReceived 267 broadcasts (0 IP multicasts)\n1876 runts, 0 giants, 0 throttles\n0 input errors, 0 CRC, 0 frame, 0 overrun, 0 ignored\n0 watchdog\n0 input packets with dribble condition detected\n3927 packets output, 1440403 bytes, 0 underruns\n0 output errors, 0 collisions, 0 interface resets\n0 unknown protocol drops\n0 babbles, 0 late collision, 0 deferred\n0 lost carrier, 0 no carrier\n0 output buffer failures, 0 output buffers swapped out\n```",
    "image": null,
    "options": [
      "bad NIC",
      "duplex mismatch",
      "collisions",
      "high throughput"
    ],
    "correctIndexes": [
      0
    ],
    "explanation": "In the output we see a high number of runts (\"1876 runts\"), which are frames that do not meet the minimum frame size of 64 bytes. Runts are usually created by collisions, but that is not the reason here since collisions are 0. Another usual cause of excessive runt frames is a malfunctioning (bad) NIC."
  },
  {
    "id": "p12_q084",
    "question": "Which interface condition is occurring in this output?\n\n```\nR25# show interface fa0/0\nFastEthernet0/0 is up, line protocol is up\nHardware is DEC21140, address is ca02.7788.0000 (bia ca02.7788.0000)\nDescription: singapore_subnet\nInternet address is 10.32.102.2/30\nMTU 1500 bytes, BW 100000 Kbit/sec, DLY 100 usec,\nreliability 255/255, txload 255/255, rxload 255/255\nEncapsulation ARPA, loopback not set\nKeepalive set (60 sec)\nFull-duplex, 100 Mb/s, 100BaseTX/FX\nARP type: ARPA, ARP Timeout 04:00:00\nLast input 00:00:01, output 00:00:00, output hang never\nLast clearing of \"show interface\" counters never\nInput queue: 0/300/0/0 (size/max/drops/flushes); Total output drops: 0\nQueueing strategy: fifo\nOutput queue: 0/300 (size/max)\n30 second input rate 225953751 bits/sec, 0 packets/sec\n30 second output rate 232423817 bits/sec, 0 packets/sec\n7331 packets input, 7101162 bytes\nReceived 267 broadcasts (0 IP multicasts)\n0 runts, 0 giants, 0 throttles\n0 input errors, 0 CRC, 0 frame, 0 overrun, 0 ignored\n0 watchdog\n0 input packets with dribble condition detected\n3927 packets output, 1440403 bytes, 0 underruns\n0 output errors, 0 collisions, 0 interface resets\n0 unknown protocol drops\n0 babbles, 0 late collision, 0 deferred\n0 lost carrier, 0 no carrier\n0 output buffer failures, 0 output buffers swapped out\n```",
    "image": null,
    "options": [
      "bad NIC",
      "duplex mismatch",
      "collisions",
      "high throughput"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "Both txload and rxload on this interface are \"255/255\" (maximum) and the 30-second input/output rates are extremely high (over 225 Mbps on a 100 Mbps-class link description), so this interface is experiencing high throughput/heavy utilization."
  },
  {
    "id": "p12_q085",
    "question": "Refer to the exhibit. The clients and DHCP server reside on different subnets. Which command must be used to forward requests and replies between clients on the 10.10.0.1/24 subnet and the DHCP server at 192.168.10.1?",
    "image": "p12_q085.png",
    "options": [
      "ip route 192.168.10.1",
      "ip helper-address 192.168.10.1",
      "ip dhcp address 192.168.10.1",
      "ip default-gateway 192.168.10.1"
    ],
    "correctIndexes": [
      1
    ],
    "explanation": "To make a router a DHCP Relay Agent, simply put the \"ip helper-address <IP-address-of-DHCP-Server>\" command under the interface that receives the DHCP messages from the DHCP client."
  },
  {
    "id": "p12_q086",
    "question": "What is the PUT method within HTTP?",
    "image": null,
    "options": [
      "It replaces data at the destination.",
      "It displays a web site.",
      "It is a read-only operation.",
      "It is a nonidempotent operation."
    ],
    "correctIndexes": [
      0
    ],
    "explanation": "The HTTP PUT request method creates a new resource or replaces a representation of the target resource with the request payload. The difference between PUT and POST is that PUT is idempotent (calling it once or several times successively has the same effect), whereas successive identical POST requests may have additional effects."
  },
  {
    "id": "p12_q087",
    "question": "Refer to the exhibit.\n\n```\nR1\ninterface GigabitEthernet0/1\n ip address 192.168.12.1 255.255.255.128\n no shutdown\nrouter ospf 1\n network 192.168.12.1 0.0.0.0 area 1\n\nR2\ninterface GigabitEthernet0/1\n ip address 192.168.12.2 255.255.255.128\n no shutdown\n```\n\nA network engineer started to configure two directly-connected routers as shown. Which command sequence must the engineer configure on R2 so that the two routers become OSPF neighbors?",
    "image": null,
    "options": [
      "interface GigabitEthernet0/1\nip ospf 1 area 0",
      "interface GigabitEthernet0/1\nip ospf 1 area 1",
      "router ospf 1\nnetwork 192.168.12.0 0.0.0.127 area 0",
      "router ospf 1\nnetwork 192.168.12.1 0.0.0.0 area 1"
    ],
    "correctIndexes": [
      1
    ],
    "explanation": "To establish an OSPF neighbor relationship between R1 and R2, interface Gi0/1 of R2 must belong to the same area as interface Gi0/1 of R1 (area 1), and OSPF must be enabled on this interface via the \"ip ospf 1 area 1\" command (or an equivalent \"network ... area 1\" command under router ospf)."
  },
  {
    "id": "p12_q088",
    "question": "Refer to the exhibit.\n\n```\nR1# show ip route\nCodes: C - connected, S - static, I - IGRP, R - rip, M - mobile, B - BGP\n       D - EIGRP, EX - EIGRP external, O - OSPF, IA - OSPF inter area\n       N1 - OSPF NSSA external type 1, N2 - OSPF NSSA external type 2\n       E1 - OSPF external type 1, E2 - OSPF external type 2, E - EGP\n       i - IS-IS, L1 - IS-IS level-1, L2 - IS-IS level-2, * - candidate default\n       U - per-user static route, o - ODR\n\nGateway of last resort is not set\nC    10.0.0.0/8 is directly connected, Loopback0\n     10.0.0.0/8 is variably subnetted, 4 subnets, 2 masks\nO       10.0.1.3/32 [110/100] via 10.0.1.100, 00:39:08, Serial0\nC       10.0.1.0/24 is directly connected, Serial0\nO       10.0.1.5/32 [110/5] via 10.0.1.50, 00:39:08, GigabitEthernet0/0\nD       10.0.1.4/32 [110/10] via 10.0.1.4, 00:39:08, GigabitEthernet0/0\n```\n\nWhat does route 10.0.1.3/32 represent in the routing table?",
    "image": null,
    "options": [
      "all hosts in the 10.0.1.0 subnet",
      "the source 10.0.1.100",
      "a single destination address",
      "the 10.0.0.0 network"
    ],
    "correctIndexes": [
      2
    ],
    "explanation": "A /32 mask matches only one exact host address, so 10.0.1.3/32 represents a single destination address (a host route) learned via OSPF, not an entire subnet."
  },
  {
    "id": "p12_q089",
    "question": "Refer to the exhibit.\n\nA Cisco engineer creates a new WLAN called lantest. Which two actions must be performed so that only high-speed 2.4-Ghz clients connect? (Choose two)",
    "image": "p12_q089.png",
    "options": [
      "Enable the Status option.",
      "Set the Interface/Interface Group(G) to an interface other than guest.",
      "Set the Radio Policy option to 802.11g only.",
      "Set the Radio Policy option to 802.11a only.",
      "Enable the Broadcast SSID option."
    ],
    "correctIndexes": [
      0,
      2
    ],
    "explanation": "The WLAN must first be enabled (Status) or it won't broadcast at all. 802.11a operates only in the 5 GHz band, so it would not serve 2.4 GHz clients. 802.11g operates only in the 2.4 GHz band with data rates up to 54 Mbps, so restricting the Radio Policy to 802.11g only admits high-speed 2.4 GHz clients."
  },
  {
    "id": "p12_q090",
    "question": "Refer to the exhibit.\n\n```\nR1#show ip route\n    1.0.0.0/8 is variably subnetted, 2 subnets, 2 masks\nO IA  1.1.1.0/24 [110/3] via 12.1.1.2, 00:00:25, FastEthernet0/0\nC   24.1.1.0/30 is directly connected, FastEthernet2/0\nC   34.1.1.0/30 is directly connected, FastEthernet3/0\nS   1.1.1.3/32 [1/0] via 14.1.1.2\n```\n\nWhich two values does router R1 use to determine the best path to reach destinations in network 1.0.0.0/8? (Choose two)",
    "image": "p12_q090.png",
    "options": [
      "longest prefix match",
      "lowest cost to reach the next hop",
      "highest administrative distance",
      "highest metric",
      "lowest metric"
    ],
    "correctIndexes": [
      0,
      4
    ],
    "explanation": "A router first uses the longest prefix match (the most specific route) to select among candidate routes, and among routes with the same prefix length it prefers the one with the lowest metric (cost)."
  },
  {
    "id": "p12_q091",
    "question": "An engineer is configuring SSH version 2 exclusively on the R1 router. What is the minimum configuration required to permit remote management using the cryptographic protocol?\n\nOption A\n```\nhostname R1\nip domain name cisco\ncrypto key generate rsa general-keys modulus 1024\nusername cisco privilege 15 password 0 cisco123\nip ssh version 2\nline vty 0 15\n transport input all\n login local\n```\n\nOption B\n```\nhostname R1\ncrypto key generate rsa general-keys modulus 1024\nusername cisco privilege 15 password 0 cisco123\nip ssh version 2\nline vty 0 15\n transport input all\n login local\n```\n\nOption C\n```\nhostname R1\nservice password-encryption\ncrypto key generate rsa general-keys modulus 1024\nusername cisco privilege 15 password 0 cisco123\nip ssh version 2\nline vty 0 15\n transport input ssh\n login local\n```\n\nOption D\n```\nhostname R1\nip domain name cisco\ncrypto key generate rsa general-keys modulus 1024\nusername cisco privilege 15 password 0 cisco123\nip ssh version 2\nline vty 0 15\n transport input ssh\n login local\n```",
    "image": null,
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "Since SSH version 2 must be used exclusively, \"transport input ssh\" (not \"transport input all\", which permits Telnet too) is required, eliminating Options A and B. SSH also requires a domain name to be configured before the RSA key can be generated, which Option C omits -- only Option D configures both the domain name and \"transport input ssh\"."
  },
  {
    "id": "p12_q092",
    "question": "Refer to the exhibit.\n\nConfigured routers IPv6 addresses:\n\nAtlanta: S0/0/0: 2012::1/126, S0/0/1: 2013::1/126, Loopback1: 2000::1/128\nNew York: S0/0/0: 2012::2/126, S0/0/1: 2023::2/126, Loopback2: 2000::2/128\nWashington: S0/0/0: 2023::3/126, S0/0/1: 2013::3/126, Loopback3: 2000::3/128\n\nThe New York router must be configured so that traffic to 2000::1 is sent primarily via the Atlanta site, with a secondary path via Washington that has an administrative distance of 2. Which two commands must be configured on the New York router? (Choose two)",
    "image": "p12_q092.png",
    "options": [
      "ipv6 route 2000::1/128 2012::1 5",
      "ipv6 route 2000::1/128 2023::2 5",
      "ipv6 route 2000::1/128 2012::1",
      "ipv6 route 2000::1/128 2023::3 2",
      "ipv6 route 2000::1/128 2012::2"
    ],
    "correctIndexes": [
      2,
      3
    ],
    "explanation": "The primary route to 2000::1 via Atlanta (next hop 2012::1) should use the default administrative distance of 1, so no distance value is specified. The secondary/backup route via Washington (next hop 2023::3) needs an administrative distance of 2 explicitly configured so it is only used if the primary route fails."
  },
  {
    "id": "p12_q093",
    "question": "Which interface condition is occurring in this output?\n\n```\nR19# show interface fa0/0\nFastEthernet0/0 is up, line protocol is up\nHardware is DEC21140, address is ca02.7788.0000 (bia ca02.7788.0000)\nDescription: portland_subnet\nInternet address is 10.32.102.2/30\nMTU 1500 bytes, BW 100000 Kbit/sec, DLY 100 usec,\nreliability 255/255, txload 1/255, rxload 1/255\nEncapsulation ARPA, loopback not set\nKeepalive set (60 sec)\nFull-duplex, 100 Mb/s, 100BaseTX/FX\nARP type: ARPA, ARP Timeout 04:00:00\nLast input 00:00:01, output 00:00:00, output hang never\nLast clearing of \"show interface\" counters never\nInput queue: 0/300/0/0 (size/max/drops/flushes); Total output drops: 0\nQueueing strategy: fifo\nOutput queue: 0/300 (size/max)\n30 second input rate 0 bits/sec, 0 packets/sec\n30 second output rate 0 bits/sec, 0 packets/sec\n7331 packets input, 7101162 bytes\nReceived 267 broadcasts (0 IP multicasts)\n0 runts, 0 giants, 0 throttles\n0 input errors, 0 CRC, 0 frame, 0 overrun, 0 ignored\n0 watchdog\n0 input packets with dribble condition detected\n3927 packets output, 1440403 bytes, 0 underruns\n0 output errors, 139 collisions, 0 interface resets\n0 unknown protocol drops\n0 babbles, 0 late collision, 0 deferred\n0 lost carrier, 0 no carrier\n0 output buffer failures, 0 output buffers swapped out\n```",
    "image": null,
    "options": [
      "queueing",
      "duplex mismatch",
      "collisions",
      "high throughput"
    ],
    "correctIndexes": [
      1
    ],
    "explanation": "This interface shows a high collision count (139 collisions), which typically indicates one end of the link is set to half-duplex while the other is full-duplex -- a duplex mismatch."
  },
  {
    "id": "p12_q094",
    "question": "A router has two static routes to the same destination network under the same OSPF process. How does the router forward packets to the destination if the next-hop devices are different?",
    "image": null,
    "options": [
      "The router chooses the next hop with the lowest IP address.",
      "The router load-balances traffic over all routes to the destination.",
      "The router chooses the next hop with the lowest MAC address.",
      "The router chooses the route with the oldest age."
    ],
    "correctIndexes": [
      1
    ],
    "explanation": "When multiple static routes to the same destination have the same administrative distance and metric but different next-hop addresses, the router load-balances traffic across all of them."
  },
  {
    "id": "p12_q095",
    "question": "Which interface condition is occurring in this output?\n\n```\nR17# show interface fa0/0\nFastEthernet0/0 is up, line protocol is up\nHardware is DEC21140, address is ca02.7788.0000 (bia ca02.7788.0000)\nDescription: chicago_subnet\nInternet address is 10.32.102.2/30\nMTU 1500 bytes, BW 100000 Kbit/sec, DLY 100 usec,\nreliability 255/255, txload 255/255, rxload 255/255\nEncapsulation ARPA, loopback not set\nKeepalive set (60 sec)\nFull-duplex, 100 Mb/s, 100BaseTX/FX\nARP type: ARPA, ARP Timeout 04:00:00\nLast input 00:00:01, output 00:00:00, output hang never\nLast clearing of \"show interface\" counters never\nInput queue: 0/300/0/0 (size/max/drops/flushes); Total output drops: 0\nQueueing strategy: fifo\nOutput queue: 0/300 (size/max)\n30 second input rate 201240151 bits/sec, 0 packets/sec\n30 second output rate 228594263 bits/sec, 0 packets/sec\n7331 packets input, 7101162 bytes\nReceived 267 broadcasts (0 IP multicasts)\n1876 runts, 0 giants, 0 throttles\n0 input errors, 0 CRC, 0 frame, 0 overrun, 0 ignored\n0 watchdog\n0 input packets with dribble condition detected\n3927 packets output, 1440403 bytes, 0 underruns\n0 output errors, 0 collisions, 0 interface resets\n0 unknown protocol drops\n0 babbles, 0 late collision, 0 deferred\n0 lost carrier, 0 no carrier\n0 output buffer failures, 0 output buffers swapped out\n```",
    "image": null,
    "options": [
      "high throughput",
      "queueing",
      "bad NIC",
      "broadcast storm"
    ],
    "correctIndexes": [
      0
    ],
    "explanation": "The txload and rxload are both 255/255 (maximum) with very high input/output bit rates but no errors, CRC issues, and only a modest broadcast count, indicating the interface is simply handling high throughput rather than a fault condition."
  },
  {
    "id": "p12_q096",
    "question": "Which property is shared by 10GBase-SR and 10GBase-LR interfaces?",
    "image": null,
    "options": [
      "Both use the multimode fiber type.",
      "Both require UTP cable media for transmission.",
      "Both use the single-mode fiber type.",
      "Both require fiber cable media for transmission."
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "10GBase-SR uses multimode fiber while 10GBase-LR uses single-mode fiber, so the property they share is that both require fiber cable media for transmission."
  },
  {
    "id": "p12_q097",
    "question": "A network engineer is upgrading a small data center to host several new applications, including server backups that are expected to account for up to 90% of the bandwidth during peak times. The data center connects to the MPLS network provider via a primary circuit and a secondary circuit. How does the engineer inexpensively update the data center to avoid saturation of the primary circuit by traffic associated with the backups?",
    "image": null,
    "options": [
      "Place the backup servers in a dedicated VLAN.",
      "Configure a dedicated circuit for the backup traffic.",
      "Assign traffic from the backup servers to a dedicated switch.",
      "Advertise a more specific route for the backup traffic via the secondary circuit."
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "Advertising a more specific route for the backup traffic over the secondary circuit routes that traffic away from the primary circuit without the expense of new dedicated circuits or switches."
  },
  {
    "id": "p12_q098",
    "question": "Refer to the exhibit.\n\n```\nR1#show ip ospf interface g0/0/0\nGigabitEthernet0/0/0 is up, line protocol is up\n  Internet address is 192.168.1.2/24, Area 0\n  Process ID 1, Router ID 192.168.1.2, Network Type POINT-TO-POINT, Cost: 1\n  Transmit Delay is 1 sec, State POINT-TO-POINT,\n  Timer intervals configured, Hello 10, Dead 40, Wait 40, Retransmit 5\n    Hello due in 00:00:08\n  Index 1/1, flood queue length 0\n  Next 0x0(0) /0x0(0)\n  Last flood scan length is 1, maximum is 1\n  Last flood scan time is 0 msec, maximum is 0 msec\n  Suppress hello for 0 neighbor(s)\n\nR2#show ip ospf interface g0/0/0\nGigabitEthernet0/0/0 is up, line protocol is up\n  Internet address is 192.168.1.1/24, Area 0\n  Process ID 1, Router ID 10.1.1.1, Network Type POINT-TO-POINT, Cost: 1\n  Transmit Delay is 1 sec, State POINT-TO-POINT,\n  Timer intervals configured, Hello 15, Dead 40, Wait 40, Retransmit 5\n    Hello due in 00:00:11\n  Index 1/1, flood queue length 0\n  Next 0x0(0)/0x0(0)\n  Last flood scan length is 1, maximum is 1\n  Last flood scan time is 0 msec, maximum is 0 msec\n  Suppress hello for 0 neighbor(s)\n```\n\nThe network engineer is configuring router R2 as a replacement router on the network. After the initial configuration is applied it is determined that R2 failed to show R1 as a neighbor. Which configuration must be applied to R2 to complete the OSPF configuration and enable it to establish the neighbor relationship with R1?\n\nOption A\n```\nR2(config)#interface g0/0/0\nR2(config-if)#ip ospf hello-interval 10\n```\n\nOption B\n```\nR2(config)#router ospf 1\nR2(config-router)#router-id 192.168.1.1\n```\n\nOption C\n```\nR2(config)#router ospf 1\nR2(config-router)#network 192.168.1.0 255.255.255.0 area 2\n```\n\nOption D\n```\nR2(config)#interface g0/0/0\nR2(config-if)#ip ospf dead-interval 45\n```",
    "image": null,
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctIndexes": [
      0
    ],
    "explanation": "For two OSPF routers to become neighbors, their Hello and Dead intervals must match. Here R1 uses a Hello interval of 10 and R2 uses 15, so R2's interface must be corrected with \"ip ospf hello-interval 10\" to match R1."
  },
  {
    "id": "p12_q099",
    "question": "What are two characteristics of a small office / home office connection environment? (Choose two)",
    "image": null,
    "options": [
      "It supports between 1 and 50 users.",
      "It requires a core, distribution, and access layer architecture.",
      "It supports between 50 and 100 users.",
      "A router port connects to a broadband connection.",
      "It requires 10Gb ports on all uplinks."
    ],
    "correctIndexes": [
      0,
      3
    ],
    "explanation": "A SOHO (Small Office/Home Office) network typically supports a small number of users (roughly 1-50) and uses a router that connects a port to a broadband (e.g., cable/DSL) connection to share Internet access -- it does not need a core/distribution/access architecture or 10Gb uplinks."
  },
  {
    "id": "p12_q100",
    "question": "Which syslog severity level is considered the most severe and results in the system being considered unusable?",
    "image": null,
    "options": [
      "Critical",
      "Emergency",
      "Alert",
      "Error"
    ],
    "correctIndexes": [
      1
    ],
    "explanation": "Syslog severity level 0, \"Emergency,\" is the most severe level and indicates the system is unusable."
  },
  {
    "id": "p12_q102",
    "question": "Which benefit does Cisco DNA Center provide over traditional campus management?",
    "image": null,
    "options": [
      "Cisco DNA Center leverages SNMPv3 for encrypted management, and traditional campus management uses SNMPv2.",
      "Cisco DNA Center leverages APIs, and traditional campus management requires manual data gathering.",
      "Cisco DNA Center automates SSH access for encrypted entry, and SSH is absent from traditional campus management.",
      "Cisco DNA Center automates HTTPS for secure web access, and traditional campus management uses HTTP."
    ],
    "correctIndexes": [
      1
    ],
    "explanation": "Cisco DNA Center exposes APIs for automation and programmability, letting data be gathered and configurations applied automatically, whereas traditional campus management typically relies on manual, device-by-device data gathering."
  },
  {
    "id": "p12_q103",
    "question": "Which interface condition is occurring in this output?\n\n```\nR25# show interface fa0/0\nFastEthernet0/0 is up, line protocol is up\nHardware is DEC21140, address is ca02.7788.0000 (bia ca02.7788.0000)\nDescription: tokyo_subnet\nInternet address is 10.32.102.2/30\nMTU 1500 bytes, BW 100000 Kbit/sec, DLY 100 usec,\nreliability 255/255, txload 1/255, rxload 1/255\nEncapsulation ARPA, loopback not set\nKeepalive set (60 sec)\nFull-duplex, 100 Mb/s, 100BaseTX/FX\nARP type: ARPA, ARP Timeout 04:00:00\nLast input 00:00:01, output 00:00:00, output hang never\nLast clearing of \"show interface\" counters never\nInput queue: 0/300/0/0 (size/max/drops/flushes); Total output drops: 0\nQueueing strategy: fifo\nOutput queue: 185/300 (size/max)\n30 second input rate 0 bits/sec, 0 packets/sec\n30 second output rate 0 bits/sec, 0 packets/sec\n7331 packets input, 7101162 bytes\nReceived 267 broadcasts (0 IP multicasts)\n1876 runts, 0 giants, 0 throttles\n0 input errors, 0 CRC, 0 frame, 0 overrun, 0 ignored\n0 watchdog\n0 input packets with dribble condition detected\n3927 packets output, 1440403 bytes, 0 underruns\n0 output errors, 0 collisions, 0 interface resets\n0 unknown protocol drops\n0 babbles, 0 late collision, 0 deferred\n0 lost carrier, 0 no carrier\n0 output buffer failures, 0 output buffers swapped out\n```",
    "image": null,
    "options": [
      "bad NIC",
      "broadcast storm",
      "queueing",
      "duplex mismatch"
    ],
    "correctIndexes": [
      2
    ],
    "explanation": "The \"Output queue: 185/300\" line shows a large number of packets held in the output queue, indicating a queueing condition."
  },
  {
    "id": "p12_q105",
    "question": "What is the role of community strings in SNMP operations?",
    "image": null,
    "options": [
      "It serves as a sequence tag on SNMP traffic messages.",
      "It serves as a password to protect access to MIB objects.",
      "It passes the Active Directory username and password that are required for device access.",
      "It translates alphanumeric MIB output values to numeric values."
    ],
    "correctIndexes": [
      1
    ],
    "explanation": "SNMP community strings function like passwords, authenticating access to MIB objects on managed devices."
  },
  {
    "id": "p12_q109",
    "question": "How will Link Aggregation be implemented on a Cisco Wireless LAN Controller?",
    "image": null,
    "options": [
      "To pass client traffic, two or more ports must be configured",
      "The EtherChannel must be configured in \"mode active\"",
      "When enabled, the WLC bandwidth drops to 500 Mbps",
      "One functional physical port is needed to pass client traffic"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "Link aggregation (LAG) is a partial implementation of the 802.3ad port aggregation standard. It bundles all of the controller's distribution system ports into a single 802.3ad port channel. LAG requires the EtherChannel to be configured for 'mode on' (not 'mode active') on both the controller and the Catalyst switch. If the recommended load-balancing method cannot be configured on the Catalyst switch, then configure the LAG connection as a single member link or disable LAG on the controller."
  },
  {
    "id": "p12_q110",
    "question": "Refer to the exhibit.\n\n```\nSwitch(config)#hostname R1\nR1(config)#interface FastEthernet0/1\nR1(config-if)#no switchport\nR1(config-if)#ip address 10.100.20.42 255.255.255.0\nR1(config-if)#line vty 0 4\nR1(config-line)#login\n```\n\nAn engineer booted a new switch and applied this configuration via the console port. Which additional configuration must be applied to allow administrators to authenticate directly to global configuration mode via Telnet using a local username and password?",
    "image": null,
    "options": [
      "R1(config)#username admin\nR1(config-if)#line vty 0 4\nR1(config-line)#password p@ss1234",
      "R1(config)#username admin\nR1(config-if)#line vty 0 4\nR1(config-line)#password p@ss1234\nR1(config-line)#transport input telnet",
      "R1(config)#username admin secret p@ss1234\nR1(config-if)#line vty 0 4\nR1(config-line)#login local\nR1(config)#enable secret p@ss1234",
      "R1(config)#username admin privilege 15 secret p@ss1234\nR1(config-if)#line vty 0 4\nR1(config-line)#login local"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "To let administrators authenticate directly into privileged (global configuration) EXEC mode via Telnet using a local username, the username must be created with privilege level 15 and a secret password, and the vty lines must use \"login local\" to reference the local username database."
  },
  {
    "id": "p12_q111",
    "question": "What is the definition of backdoor malware?",
    "image": null,
    "options": [
      "malicious program that is used to launch other malicious programs",
      "malicious code that infects a user machine and then uses that machine to send spam",
      "malicious code with the main purpose of downloading other malicious code",
      "malicious code that is installed onto a computer to allow access by an unauthorized user"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "A backdoor is a malware type that negates normal authentication procedures to access a system, allowing an unauthorized user remote access to the compromised device."
  },
  {
    "id": "p12_q112",
    "question": "Refer to the exhibit.\n\nHost A switch interface is configured in VLAN 2. Host D sends a unicast packet destined for the IP address of host A.\n\n```\nSw1#show mac-address table\n   Mac Address Table\n-------------------------------\nVlan   Mac Address    Type     Ports\n----   -----------    -------  ----\n2      000c.859c.bb7b  DYNAMIC e0/1\n3      000c.85dc.bb7b  DYNAMIC e0/1\n2      0010.11dc.3e91  DYNAMIC e0/2\n3      0010.11dC.3e91  DYNAMIC e0/2\n2      0044.42d9.c693  DYNAMIC e0/3\nSw1#\n```\n\nWhat does the switch do when it receives the frame from host D?",
    "image": "p12_q112.png",
    "options": [
      "It floods the frame out of every port except the source port.",
      "It shuts down the source port and places It in err-disable mode.",
      "It drops the frame from the MAC table of the switch.",
      "It creates a broadcast storm."
    ],
    "correctIndexes": [
      0
    ],
    "explanation": "Host A's MAC address and port have not been learned in the switch MAC address table, so the switch will flood the frame out of all ports except the source port where it received the frame."
  },
  {
    "id": "p12_q113",
    "question": "Which functionality is provided by the console connection on a Cisco WLC?",
    "image": null,
    "options": [
      "secure In-band connectivity for device administration",
      "out-of-band management",
      "HTTP-based GUI connectivity",
      "unencrypted in-band connectivity for file transfers"
    ],
    "correctIndexes": [
      1
    ],
    "explanation": "The console port is used for out-of-band management, system recovery, and early boot operations."
  },
  {
    "id": "p12_q114",
    "question": "Refer to the exhibit.\n\n```\nR1# show ip route\nC    1.0.0.0/8 is directly connected, Loopback0\n     10.0.0.0/8 is variably subnetted, 4 subnets, 2 masks\nO       10.10.10.3/32 [110/100] via 10.10.10.3, 00:39:08, Gigabitethernet0/3\nC       10.10.10.0/24 is directly connected, Gigabitethernet0/0\nO       10.10.10.2/32 [110/5] via 10.10.10.2, 00:39:08, Gigabitethernet0/2\nR       10.10.10.4/32 [120/10] via 10.10.10.4, 00:39:08, Gigabitethernet0/4\n```\n\nWhich next-hop IP address has the least desirable metric when sourced from R1?",
    "image": "p12_q114.png",
    "options": [
      "10.10.10.4",
      "10.10.10.2",
      "10.10.10.5",
      "10.10.10.3"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "This question asks about \"metric\", not Administrative Distance, so we have to compare the second parameter in the square brackets. In this case \"100\" is the least desirable (highest) metric and it belongs to the route via 10.10.10.3 (R3)."
  }
];

var BATCH_C = [
  {
    "id": "p9_q046",
    "type": "dragdrop",
    "question": "Drag and drop the facts about wireless architectures from the left onto the types of access point on the right. Not all options are used.",
    "image": null,
    "items": [
      {
        "id": "i1",
        "text": "configured and managed by a WLC"
      },
      {
        "id": "i2",
        "text": "requires a management IP address"
      },
      {
        "id": "i3",
        "text": "managed from a web-based dashboard"
      },
      {
        "id": "i4",
        "text": "supports automatic deployment"
      },
      {
        "id": "i5",
        "text": "accessible for management via Telnet, SSH, or a web GUI"
      }
    ],
    "targets": [
      {
        "id": "t1",
        "text": "Autonomous Access Point"
      },
      {
        "id": "t2",
        "text": "Cloud-Based Access Point"
      }
    ],
    "correctMapping": {
      "i2": "t1",
      "i5": "t1",
      "i3": "t2",
      "i4": "t2"
    },
    "explanation": "An autonomous AP is a self-contained device with both wired and wireless hardware so that it can bridge to the wired VLAN infrastructure wireless clients that belong to SSIDs. Each autonomous AP must be configured with a management IP address so that it can be remotely accessed using Telnet, SSH, or a web interface. Each AP must be individually managed and maintained unless you use a management platform such as Cisco DNA Center.\n\nCloud-based AP management is an alternative to purchasing a management platform. The AP management function is pushed into the Internet cloud. For example, Cisco Meraki is a cloud-based AP management service that allows you to automatically deploy Cisco Meraki APs. These APs can then be managed from the Meraki cloud web interface (dashboard).\n\nFrom the above paragraph, we can see autonomous AP is not managed by a WLC."
  },
  {
    "id": "p9_q058",
    "type": "dragdrop",
    "question": "Drag and drop the statements about device management from the left onto the corresponding device-management types on the right.",
    "image": null,
    "items": [
      {
        "id": "i1",
        "text": "It uses multiple tools and applications to analyze and troubleshoot different types of data"
      },
      {
        "id": "i2",
        "text": "It manages device configurations on a per-device basis"
      },
      {
        "id": "i3",
        "text": "It provides a single interface for network security and analytics."
      },
      {
        "id": "i4",
        "text": "It supports CLI templates to apply a consistent configuration to multiple devices"
      },
      {
        "id": "i5",
        "text": "Security is managed near the perimeter of the network with firewalls, VPNs, and IPS"
      },
      {
        "id": "i6",
        "text": "It uses NetFlow to analyze potential security threats and take appropriate action on that traffic"
      }
    ],
    "targets": [
      {
        "id": "t1",
        "text": "Cisco DNA Center Device Management"
      },
      {
        "id": "t2",
        "text": "Traditional Device Management"
      }
    ],
    "correctMapping": {
      "i3": "t1",
      "i4": "t1",
      "i6": "t1",
      "i1": "t2",
      "i2": "t2",
      "i5": "t2"
    },
    "explanation": ""
  },
  {
    "id": "p9_q063",
    "type": "dragdrop",
    "question": "Drag and drop the IPv6 address details from the left onto the corresponding types on the right.",
    "image": null,
    "items": [
      {
        "id": "i1",
        "text": "used exclusively by a non-host device"
      },
      {
        "id": "i2",
        "text": "includes link-local and loopback addresses"
      },
      {
        "id": "i3",
        "text": "identifies an interface on an IPv6 device"
      },
      {
        "id": "i4",
        "text": "assigned to more than one interface"
      },
      {
        "id": "i5",
        "text": "derived from the FF00::/8 address range"
      },
      {
        "id": "i6",
        "text": "provides one-to-many communications"
      }
    ],
    "targets": [
      {
        "id": "t1",
        "text": "Anycast"
      },
      {
        "id": "t2",
        "text": "Multicast"
      },
      {
        "id": "t3",
        "text": "Unicast"
      }
    ],
    "correctMapping": {
      "i1": "t1",
      "i4": "t1",
      "i5": "t2",
      "i6": "t2",
      "i2": "t3",
      "i3": "t3"
    },
    "explanation": "An anycast address must be assigned to a router not a host and cannot be used as a source address."
  },
  {
    "id": "p9_q064",
    "type": "dragdrop",
    "question": "Drag and drop the elements of a security program from the left onto the corresponding descriptions on the right.",
    "image": null,
    "items": [
      {
        "id": "i1",
        "text": "awareness"
      },
      {
        "id": "i2",
        "text": "education"
      },
      {
        "id": "i3",
        "text": "security policy"
      },
      {
        "id": "i4",
        "text": "security standard"
      },
      {
        "id": "i5",
        "text": "training"
      }
    ],
    "targets": [
      {
        "id": "t1",
        "text": "tactical document that sets out specific tasks and methods to maintain security"
      },
      {
        "id": "t2",
        "text": "user-awareness learning level that focuses on security practice that all employees must understand and enforce"
      },
      {
        "id": "t3",
        "text": "user-awareness learning level that focuses on teaching employees how to perform tasks specifically required by their jobs"
      },
      {
        "id": "t4",
        "text": "document that outlines an organization's security goals and practices and the roles and responsibilities of the organization's personnel"
      },
      {
        "id": "t5",
        "text": "user-awareness learning level that focuses on learning about topics and practices beyond what is typically required by the user's job"
      }
    ],
    "correctMapping": {
      "i1": "t2",
      "i2": "t5",
      "i3": "t4",
      "i4": "t1",
      "i5": "t3"
    },
    "explanation": "As per Cisco, an effective security program has three basic elements. First, user awareness. Second, user training. And last, physical access control.\n\nUser awareness: All users should be made aware of the need for data confidentiality to protect corporate information, as well as their own credentials and personal information.\nUser training: All users should be required to participate in periodic formal training so that they become familiar with all corporate security policies."
  },
  {
    "id": "p9_q070",
    "type": "dragdrop",
    "question": "Drag and drop the QoS terms from the left onto the descriptions on the right.",
    "image": null,
    "items": [
      {
        "id": "i1",
        "text": "Categorizes packets based on the value of traffic descriptor"
      },
      {
        "id": "i2",
        "text": "Outcome of overutilization"
      },
      {
        "id": "i3",
        "text": "Guarantees minimum bandwidth to specific traffic classes when an interface is congested"
      },
      {
        "id": "i4",
        "text": "Uses defined criteria to limit the transmission of one or more classes of traffic"
      },
      {
        "id": "i5",
        "text": "Prevents congestion by reducing the flow of the outbound traffic"
      }
    ],
    "targets": [
      {
        "id": "t1",
        "text": "Class-based weighted fair queuing"
      },
      {
        "id": "t2",
        "text": "Classification"
      },
      {
        "id": "t3",
        "text": "Congestion"
      },
      {
        "id": "t4",
        "text": "Policing"
      },
      {
        "id": "t5",
        "text": "Shaping"
      }
    ],
    "correctMapping": {
      "i3": "t1",
      "i1": "t2",
      "i2": "t3",
      "i4": "t4",
      "i5": "t5"
    },
    "explanation": ""
  },
  {
    "id": "p9_q080",
    "type": "dragdrop",
    "question": "Refer to the exhibit. The IP address configurations must be completed on the DC-1 and HQ-1 routers based on these requirements.\n\nDC-1 Gi1/0 must be the last usable address on a /30\nDC-1 Gi1/1 must be the first usable address on a /29\nDC-1 Gi1/2 must be the last usable address on a /28\nHQ-1 Gi1/3 must be the last usable address on a /29\n\nDrag and drop the commands from the left onto the destination interfaces on the right. Not all commands are used.",
    "image": "p9_q080.png",
    "items": [
      {
        "id": "i1",
        "text": "ip address 192.168.4.13 255.255.255.240"
      },
      {
        "id": "i2",
        "text": "ip address 209.165.202.129 255.255.255.252"
      },
      {
        "id": "i3",
        "text": "ip address 209.165.202.130 255.255.255.252"
      },
      {
        "id": "i4",
        "text": "ip address 209.165.202.131 255.255.255.252"
      },
      {
        "id": "i5",
        "text": "ip address 192.168.3.14 255.255.255.240"
      },
      {
        "id": "i6",
        "text": "ip address 192.168.4.9 255.255.255.248"
      },
      {
        "id": "i7",
        "text": "ip address 192.168.3.14 255.255.255.248"
      }
    ],
    "targets": [
      {
        "id": "t1",
        "text": "DC-1 Gi1/0"
      },
      {
        "id": "t2",
        "text": "DC-1 Gi1/1"
      },
      {
        "id": "t3",
        "text": "DC-1 Gi1/2"
      },
      {
        "id": "t4",
        "text": "HQ-1 Gi1/3"
      }
    ],
    "correctMapping": {
      "i3": "t1",
      "i6": "t2",
      "i5": "t3",
      "i7": "t4"
    },
    "explanation": ""
  },
  {
    "id": "p9_q083",
    "type": "dragdrop",
    "question": "Drag and drop the statements about networking from the left onto the corresponding networking types on the right.",
    "image": null,
    "items": [
      {
        "id": "i1",
        "text": "This type implements changes individually at each device"
      },
      {
        "id": "i2",
        "text": "This type provides a centralized view of the network"
      },
      {
        "id": "i3",
        "text": "This type leverages controllers to handle network management"
      },
      {
        "id": "i4",
        "text": "Maintenance costs are higher than with other networking options"
      }
    ],
    "targets": [
      {
        "id": "t1",
        "text": "Traditional Networking"
      },
      {
        "id": "t2",
        "text": "Controller-Based Networking"
      }
    ],
    "correctMapping": {
      "i1": "t1",
      "i4": "t1",
      "i2": "t2",
      "i3": "t2"
    },
    "explanation": ""
  },
  {
    "id": "p9_q099",
    "type": "dragdrop",
    "question": "Drag and drop the traffic types from the left onto the QoS delivery mechanisms on the right.",
    "image": null,
    "items": [
      {
        "id": "i1",
        "text": "database synchronization traffic"
      },
      {
        "id": "i2",
        "text": "VoIP traffic"
      },
      {
        "id": "i3",
        "text": "standard Web browsing traffic"
      },
      {
        "id": "i4",
        "text": "video traffic"
      }
    ],
    "targets": [
      {
        "id": "t1",
        "text": "best effort"
      },
      {
        "id": "t2",
        "text": "priority queue"
      },
      {
        "id": "t3",
        "text": "policing"
      },
      {
        "id": "t4",
        "text": "shaping"
      }
    ],
    "correctMapping": {
      "i3": "t1",
      "i2": "t2",
      "i4": "t3",
      "i1": "t4"
    },
    "explanation": "best effort: standard Web browsing traffic (Regular Web traffic is considered a low priority, TCP or UDP)\npriority queue: VoIP traffic (VoIP is time sensitive and it uses UDP to speed up the delivery of packets. But it should have priority to guarantee quality)\npolicing: video traffic (Video stream is time sensitive and it uses UDP to speed up the delivery of packets. But the bandwidth for video is much higher than voice so we can drop some packets if there is not enough bandwidth. The quality is still acceptable for most viewers)\nshaping: database synchronization traffic (DB communications use TCP to warranties the delivery of the packets, queuing the packets don't affect the transmission)"
  },
  {
    "id": "p9_q101",
    "type": "dragdrop",
    "question": "Drag and drop the functions of AAA supporting protocols from the left onto the protocols on the right.",
    "image": null,
    "items": [
      {
        "id": "i1",
        "text": "separates all three AAA operations"
      },
      {
        "id": "i2",
        "text": "encrypts the entire body of the access-request packet"
      },
      {
        "id": "i3",
        "text": "encrypts only the password when it sends an access request"
      },
      {
        "id": "i4",
        "text": "Combines authentication and authorization"
      },
      {
        "id": "i5",
        "text": "uses UDP"
      },
      {
        "id": "i6",
        "text": "uses TCP"
      }
    ],
    "targets": [
      {
        "id": "t1",
        "text": "RADIUS"
      },
      {
        "id": "t2",
        "text": "TACACS+"
      }
    ],
    "correctMapping": {
      "i3": "t1",
      "i4": "t1",
      "i5": "t1",
      "i1": "t2",
      "i2": "t2",
      "i6": "t2"
    },
    "explanation": ""
  },
  {
    "id": "p12_q001",
    "type": "dragdrop",
    "question": "Drag and drop the SNMP components from the left onto descriptions on the right.",
    "image": null,
    "items": [
      {
        "id": "i1",
        "text": "agent"
      },
      {
        "id": "i2",
        "text": "managed device"
      },
      {
        "id": "i3",
        "text": "MIB"
      },
      {
        "id": "i4",
        "text": "NMS"
      }
    ],
    "targets": [
      {
        "id": "t1",
        "text": "network node controlled by SNMP"
      },
      {
        "id": "t2",
        "text": "collection of uniquely identifiable objects whose state can be interrogated over SNMP"
      },
      {
        "id": "t3",
        "text": "system that runs monitoring applications and controls network nodes"
      },
      {
        "id": "t4",
        "text": "SNMP component that captures and translates device and network data"
      }
    ],
    "correctMapping": {
      "i2": "t1",
      "i3": "t2",
      "i4": "t3",
      "i1": "t4"
    },
    "explanation": "The SNMP agent is the software component within the managed device that maintains the data for the device and reports these data, as needed, to managing systems. The agent and MIB reside on the routing device (router, access server, or switch). To enable the SNMP agent on a Cisco routing device, you must define the relationship between the manager and the agent."
  },
  {
    "id": "p12_q003",
    "type": "dragdrop",
    "question": "Drag and drop the statements about device management from the left onto the corresponding types on the right.",
    "image": null,
    "items": [
      {
        "id": "i1",
        "text": "requires manual configuration of complex protocols"
      },
      {
        "id": "i2",
        "text": "leverages Cisco Prime Infrastructure"
      },
      {
        "id": "i3",
        "text": "reduces the workload for enterprise customers"
      },
      {
        "id": "i4",
        "text": "lacks support for SDA"
      },
      {
        "id": "i5",
        "text": "uses algorithms to detect security threats"
      },
      {
        "id": "i6",
        "text": "uses northbound APIs"
      }
    ],
    "targets": [
      {
        "id": "t1",
        "text": "Traditional Campus Device Management"
      },
      {
        "id": "t2",
        "text": "Cisco DNA Center"
      }
    ],
    "correctMapping": {
      "i1": "t1",
      "i2": "t1",
      "i4": "t1",
      "i3": "t2",
      "i5": "t2",
      "i6": "t2"
    },
    "explanation": "One example of traditional network management, Cisco Prime Infrastructure (PI) Management, has been used to manage enterprise networks. Cisco DNA Center reduces the workload for enterprise customers, uses algorithms to detect security threats, and uses northbound APIs, while traditional campus device management requires manual configuration of complex protocols, leverages Cisco Prime Infrastructure, and lacks support for SDA."
  },
  {
    "id": "p12_q010",
    "type": "dragdrop",
    "question": "Drag and drop the IPv6 address type characteristics from the left to the right.",
    "image": null,
    "items": [
      {
        "id": "i1",
        "text": "addresses with prefix FC00::/7"
      },
      {
        "id": "i2",
        "text": "routable and reachable via the Internet"
      },
      {
        "id": "i3",
        "text": "addressing for exclusive use internally without Internet routing"
      },
      {
        "id": "i4",
        "text": "equivalent to public IPv4 addresses"
      }
    ],
    "targets": [
      {
        "id": "t1",
        "text": "Global Unicast Address"
      },
      {
        "id": "t2",
        "text": "Unique Local Address"
      }
    ],
    "correctMapping": {
      "i2": "t1",
      "i4": "t1",
      "i1": "t2",
      "i3": "t2"
    },
    "explanation": "An IPv6 Unique Local Address is an IPv6 address in the block FC00::/7. It is the approximate IPv6 counterpart of the IPv4 private address. It is not routable on the global Internet. Note: In the past, Site-local addresses (FEC0::/10) are equivalent to private IP addresses in IPv4 but now they are deprecated."
  },
  {
    "id": "p12_q020",
    "type": "dragdrop",
    "question": "Drag and drop the virtualization concepts from the left onto the matching statements on the right.",
    "image": null,
    "items": [
      {
        "id": "i1",
        "text": "hypervisor"
      },
      {
        "id": "i2",
        "text": "guest operating system"
      },
      {
        "id": "i3",
        "text": "multithreading"
      },
      {
        "id": "i4",
        "text": "virtual machine"
      },
      {
        "id": "i5",
        "text": "host operating system"
      }
    ],
    "targets": [
      {
        "id": "t1",
        "text": "An operating system instance that is decoupled from the server hardware"
      },
      {
        "id": "t2",
        "text": "Each core can run more than one process simultaneously"
      },
      {
        "id": "t3",
        "text": "Runs on a physical server, manages, and allocates the physical resources"
      },
      {
        "id": "t4",
        "text": "The software that manages the basic functions of the physical hardware"
      },
      {
        "id": "t5",
        "text": "The software that manages the basic functions of the virtual machine"
      }
    ],
    "correctMapping": {
      "i4": "t1",
      "i3": "t2",
      "i1": "t3",
      "i5": "t4",
      "i2": "t5"
    },
    "explanation": "A virtual machine (VM) is an operating system (OS) or application environment installed on software that imitates dedicated hardware. The host operating system executes directly on the hardware while a guest operating system executes on a virtual machine. Therefore the best matches are: virtual machine = an operating system instance decoupled from the server hardware; host operating system = manages the basic functions of the physical hardware; guest operating system = manages the basic functions of the virtual machine."
  },
  {
    "id": "p12_q023",
    "type": "dragdrop",
    "question": "Drag and drop the TCP or UDP details from the left onto their corresponding protocols on the right.",
    "image": null,
    "items": [
      {
        "id": "i1",
        "text": "provides best-effort service"
      },
      {
        "id": "i2",
        "text": "used to reliably share files between devices"
      },
      {
        "id": "i3",
        "text": "appropriate for streaming operations with minimal latency"
      },
      {
        "id": "i4",
        "text": "supports reliable data transmission"
      }
    ],
    "targets": [
      {
        "id": "t1",
        "text": "TCP"
      },
      {
        "id": "t2",
        "text": "UDP"
      }
    ],
    "correctMapping": {
      "i2": "t1",
      "i4": "t1",
      "i1": "t2",
      "i3": "t2"
    },
    "explanation": ""
  },
  {
    "id": "p12_q031",
    "type": "dragdrop",
    "question": "Drag and drop the configuration management terms from the left onto the descriptions on the right. Not all terms are used.",
    "image": null,
    "items": [
      {
        "id": "i1",
        "text": "agentless"
      },
      {
        "id": "i2",
        "text": "agent"
      },
      {
        "id": "i3",
        "text": "provision"
      },
      {
        "id": "i4",
        "text": "pull"
      },
      {
        "id": "i5",
        "text": "push"
      },
      {
        "id": "i6",
        "text": "post"
      }
    ],
    "targets": [
      {
        "id": "t1",
        "text": "easy-to-manage deployment option that may lack scalability"
      },
      {
        "id": "t2",
        "text": "device hardware that runs without embedded management features"
      },
      {
        "id": "t3",
        "text": "to automatically install or deploy a configuration or update"
      },
      {
        "id": "t4",
        "text": "daemon that determines when the central authority has updates available"
      },
      {
        "id": "t5",
        "text": "model in which the central server sends updates to nodes on an as-needed basis"
      }
    ],
    "correctMapping": {
      "i2": "t1",
      "i1": "t2",
      "i4": "t3",
      "i3": "t4",
      "i5": "t5"
    },
    "explanation": ""
  },
  {
    "id": "p12_q045",
    "type": "dragdrop",
    "question": "Drag and drop the AAA features from the left onto the corresponding AAA security services on the right. Not all options are used.",
    "image": null,
    "items": [
      {
        "id": "i1",
        "text": "It leverages a RADIUS server to grant user access to a reverse Telnet session"
      },
      {
        "id": "i2",
        "text": "It enables the device to allow user- or group-based access"
      },
      {
        "id": "i3",
        "text": "It restricts the CLI commands that a user is able to perform"
      },
      {
        "id": "i4",
        "text": "It records the amount of time for which a user accesses the network on a remote server"
      },
      {
        "id": "i5",
        "text": "It uses TACACS+ to log the configuration commands entered by a network administrator"
      },
      {
        "id": "i6",
        "text": "It verifies the user before granting access to the device"
      }
    ],
    "targets": [
      {
        "id": "t1",
        "text": "Authentication"
      },
      {
        "id": "t2",
        "text": "Authorization"
      }
    ],
    "correctMapping": {
      "i1": "t1",
      "i6": "t1",
      "i2": "t2",
      "i3": "t2"
    },
    "explanation": "The two unused options 'It records the amount of time for which a user accesses the network on a remote server' and 'It uses TACACS+ to log the configuration commands entered by a network administrator' are Accounting features. To use a RADIUS server to allow a reverse Telnet session we have to use the command 'aaa authentication login reverse-access group radius'. Therefore the option 'It leverages a RADIUS server to grant user access to a reverse Telnet session' belongs to Authentication, not Authorization. Note: Reverse telnet allows you to telnet to a device then from that device connect to the console of another device."
  },
  {
    "id": "p12_q063",
    "type": "dragdrop",
    "question": "Drag and drop the DNS lookup commands from the left onto the functions on the right.",
    "image": null,
    "items": [
      {
        "id": "i1",
        "text": "ip dns server"
      },
      {
        "id": "i2",
        "text": "ip domain list"
      },
      {
        "id": "i3",
        "text": "ip domain lookup source-interface"
      },
      {
        "id": "i4",
        "text": "ip domain name"
      },
      {
        "id": "i5",
        "text": "ip host"
      },
      {
        "id": "i6",
        "text": "ip name-server"
      }
    ],
    "targets": [
      {
        "id": "t1",
        "text": "enables DNS lookup on an individual interface"
      },
      {
        "id": "t2",
        "text": "enables the DNS server on the device"
      },
      {
        "id": "t3",
        "text": "identifies a DNS server to provide lookup services"
      },
      {
        "id": "t4",
        "text": "specifies a sequence of domain names"
      },
      {
        "id": "t5",
        "text": "specifies the default domain to append to unqualified host names"
      },
      {
        "id": "t6",
        "text": "statically maps an IP address to a hostname"
      }
    ],
    "correctMapping": {
      "i3": "t1",
      "i1": "t2",
      "i6": "t3",
      "i2": "t4",
      "i4": "t5",
      "i5": "t6"
    },
    "explanation": "The command 'ip domain-lookup' enables DNS-based host name-to-address translation. This command is enabled by default. The ip domain name command defines a list of default domain names to complete unqualified hostnames. The ip domain list command is similar to the ip domain name command, except that with the ip domain list command you can define a list of domains, each to be tried in turn until the system finds a match. The ip host command defines a static hostname-to-address mapping in the hostname cache. For example: Device(config)# ip host cisco-rtp 192.168.0.148"
  },
  {
    "id": "p12_q064",
    "type": "dragdrop",
    "question": "Drag and drop the TCP or UDP details from the left onto their corresponding protocols on the right.",
    "image": null,
    "items": [
      {
        "id": "i1",
        "text": "provides best-effort service"
      },
      {
        "id": "i2",
        "text": "requires the client and the server to establish a connection before sending the packet"
      },
      {
        "id": "i3",
        "text": "transmitted based on data contained in the packet without the need for a data channel"
      },
      {
        "id": "i4",
        "text": "supports reliable data transmission"
      }
    ],
    "targets": [
      {
        "id": "t1",
        "text": "TCP"
      },
      {
        "id": "t2",
        "text": "UDP"
      }
    ],
    "correctMapping": {
      "i2": "t1",
      "i4": "t1",
      "i1": "t2",
      "i3": "t2"
    },
    "explanation": ""
  },
  {
    "id": "p12_q066",
    "type": "dragdrop",
    "question": "Refer to the exhibit. OSPF is running between site A and site B. Drag and drop the destination IPs from the left onto the network segments used to reach the destination on the right.",
    "image": "p12_q066.png",
    "items": [
      {
        "id": "i1",
        "text": "10.10.10.16"
      },
      {
        "id": "i2",
        "text": "10.10.13.1"
      },
      {
        "id": "i3",
        "text": "10.10.13.129"
      },
      {
        "id": "i4",
        "text": "10.10.13.150"
      },
      {
        "id": "i5",
        "text": "10.10.100.128"
      }
    ],
    "targets": [
      {
        "id": "t1",
        "text": "Internet"
      },
      {
        "id": "t2",
        "text": "Router1"
      }
    ],
    "correctMapping": {
      "i1": "t1",
      "i3": "t1",
      "i5": "t1",
      "i2": "t2",
      "i4": "t2"
    },
    "explanation": ""
  },
  {
    "id": "p12_q069",
    "type": "dragdrop",
    "question": "Drag and drop the statement about AAA services from the left to the corresponding AAA services on the right.",
    "image": null,
    "items": [
      {
        "id": "i1",
        "text": "It grants access to network assets, such as FTP servers."
      },
      {
        "id": "i2",
        "text": "It limits the services available to a user."
      },
      {
        "id": "i3",
        "text": "It performs user validation via TACACS+."
      },
      {
        "id": "i4",
        "text": "It records the duration of each connection."
      },
      {
        "id": "i5",
        "text": "It supports User Access Reporting."
      },
      {
        "id": "i6",
        "text": "It verifies \"who you are\"."
      }
    ],
    "targets": [
      {
        "id": "t1",
        "text": "Accounting"
      },
      {
        "id": "t2",
        "text": "Authentication"
      }
    ],
    "correctMapping": {
      "i4": "t1",
      "i5": "t1",
      "i3": "t2",
      "i6": "t2"
    },
    "explanation": ""
  },
  {
    "id": "p12_q101",
    "type": "dragdrop",
    "question": "Drag and drop the statements about AAA from the left onto the corresponding AAA services on the right. Not all options are used.",
    "image": null,
    "items": [
      {
        "id": "i1",
        "text": "It records the amount of network resources consumed by the user"
      },
      {
        "id": "i2",
        "text": "It tracks the services that a user is using"
      },
      {
        "id": "i3",
        "text": "It assigns per-user attributes"
      },
      {
        "id": "i4",
        "text": "It permits and denies login attempts"
      },
      {
        "id": "i5",
        "text": "It supports local, PPP, RADIUS, and TACACS+ options"
      }
    ],
    "targets": [
      {
        "id": "t1",
        "text": "Accounting"
      },
      {
        "id": "t2",
        "text": "Authentication"
      }
    ],
    "correctMapping": {
      "i1": "t1",
      "i2": "t1",
      "i4": "t2",
      "i5": "t2"
    },
    "explanation": "Accounting tracks the services that a user is using. For example, it can log what commands were issued by a user. Authentication also supports PPP via the 'aaa authentication ppp ...' command. Authorization assigns per-user attributes."
  },
  {
    "id": "p12_q104",
    "type": "dragdrop",
    "question": "Drag and drop the characteristics of northbound APIs from the left onto any position on the right. Not all characteristics are used.",
    "image": null,
    "items": [
      {
        "id": "i1",
        "text": "supports automation"
      },
      {
        "id": "i2",
        "text": "communicates between the SDN controller and the application plane"
      },
      {
        "id": "i3",
        "text": "communicates between the SDN controller and the data plane"
      },
      {
        "id": "i4",
        "text": "supports data sharing between systems"
      },
      {
        "id": "i5",
        "text": "supports network virtualization protocols"
      },
      {
        "id": "i6",
        "text": "supports REST-based requirements"
      },
      {
        "id": "i7",
        "text": "uses OpenFlow to interface between the data and control planes"
      }
    ],
    "targets": [
      {
        "id": "t1",
        "text": "Position 1"
      },
      {
        "id": "t2",
        "text": "Position 2"
      },
      {
        "id": "t3",
        "text": "Position 3"
      },
      {
        "id": "t4",
        "text": "Position 4"
      }
    ],
    "correctMapping": {
      "i1": "t1",
      "i2": "t2",
      "i5": "t3",
      "i6": "t4"
    },
    "explanation": "SDN northbound APIs are usually RESTful APIs used to communicate between the SDN Controller and the services and applications running over the network. The networking administrators and SDN applications want to control the controller, so the controller needs a northbound interface (NBI) to communicate with them. The NBI applications include various network services, including network virtualization, dynamic virtual network provisioning, firewall monitoring, user identity management and access policy control. (Communicating with the data plane and using OpenFlow are southbound API characteristics, not northbound.)"
  },
  {
    "id": "p12_q106",
    "type": "dragdrop",
    "question": "Drag and drop the statements about access-point modes from the left onto the corresponding modes on the right.",
    "image": null,
    "items": [
      {
        "id": "i1",
        "text": "It captures and forwards packets on a specific wireless channel"
      },
      {
        "id": "i2",
        "text": "It enables enhanced RFID-tag location tracking"
      },
      {
        "id": "i3",
        "text": "It provides air-quality data and interference detection across all enabled channels"
      },
      {
        "id": "i4",
        "text": "It supports analytics for wireless performance testing"
      },
      {
        "id": "i5",
        "text": "It supports real-time Wi-Fi client troubleshooting when network engineers are offsite"
      },
      {
        "id": "i6",
        "text": "It supports software that analyzes wireless frames on a remote device"
      }
    ],
    "targets": [
      {
        "id": "t1",
        "text": "Monitor"
      },
      {
        "id": "t2",
        "text": "Sensor"
      },
      {
        "id": "t3",
        "text": "Sniffer"
      }
    ],
    "correctMapping": {
      "i2": "t1",
      "i3": "t1",
      "i5": "t2",
      "i4": "t2",
      "i1": "t3",
      "i6": "t3"
    },
    "explanation": "Monitor mode: does not transmit at all. It acts like a dedicated sensor for location-based services (LBS), rogue AP detection, and Checks Intrusion Detection System (IDS). In this mode, the AP will not broadcast an SSID so clients are unable to connect to it. Sniffer mode: runs as a sniffer and captures and forwards all the packets on a particular channel to a remote machine where you can use a protocol analysis tool (Wireshark, Airopeek, etc) to review the packets and diagnose issues. Strictly used for troubleshooting purposes. Sensor mode: this is a special mode which is not listed in the books but you need to know. In this mode, the device can actually function much like a WLAN client would, associating and identifying client connectivity issues within the network in real time without requiring an IT technician to be on site."
  },
  {
    "id": "p12_q107",
    "type": "dragdrop",
    "question": "Refer to the exhibit. Drag and drop the destination IPs from the left onto the paths to reach those destinations on the right.",
    "image": "p12_q107.png",
    "items": [
      {
        "id": "i1",
        "text": "1.1.1.1"
      },
      {
        "id": "i2",
        "text": "10.10.13.126"
      },
      {
        "id": "i3",
        "text": "10.10.13.129"
      },
      {
        "id": "i4",
        "text": "10.10.13.150"
      },
      {
        "id": "i5",
        "text": "10.10.13.209"
      },
      {
        "id": "i6",
        "text": "209.165.200.30"
      }
    ],
    "targets": [
      {
        "id": "t1",
        "text": "Router2"
      },
      {
        "id": "t2",
        "text": "Router3"
      },
      {
        "id": "t3",
        "text": "Router4"
      },
      {
        "id": "t4",
        "text": "Router5"
      },
      {
        "id": "t5",
        "text": "Internet cloud"
      },
      {
        "id": "t6",
        "text": "MPLS cloud"
      }
    ],
    "correctMapping": {
      "i2": "t1",
      "i3": "t2",
      "i4": "t3",
      "i5": "t4",
      "i1": "t5",
      "i6": "t6"
    },
    "explanation": ""
  },
  {
    "id": "p12_q108",
    "type": "dragdrop",
    "question": "Drag and drop the IPv6 address descriptions from the left onto the IPv6 address types on the right. Not all options are used.",
    "image": null,
    "items": [
      {
        "id": "i1",
        "text": "IPv6 addresses in the format FF02::5"
      },
      {
        "id": "i2",
        "text": "IPv6 addresses that begin with FD"
      },
      {
        "id": "i3",
        "text": "may be used by multiple organizations at the same time"
      },
      {
        "id": "i4",
        "text": "private IPv6 addresses"
      },
      {
        "id": "i5",
        "text": "serve as next-hop addresses"
      },
      {
        "id": "i6",
        "text": "unable to serve as destination addresses"
      }
    ],
    "targets": [
      {
        "id": "t1",
        "text": "Unique Local Addresses"
      },
      {
        "id": "t2",
        "text": "Link-Local Addresses"
      }
    ],
    "correctMapping": {
      "i2": "t1",
      "i3": "t1",
      "i4": "t1",
      "i5": "t2",
      "i6": "t2"
    },
    "explanation": "Unique local addresses (or site-local addresses) are analogous to IPv4's private address classes. They start with FC00::/7 (for use in private networks) - the first octet can be FC or FD. However, when you implement this you have to set the L-bit (the right-most bit of the first octet) to 1, which means the first two digits will be FD. FF02::5 is a multicast address (not a link-local address). It only has a link-local scope (an IPv6 router never forwards this type of traffic beyond the local link) so this IPv6 address does not belong to 'link-local addresses'. You can use either a Global Unicast IPv6 address or a Link-Local IPv6 address as the next hop address. However, if you provide the Link-Local IPv6 address as the next hop address, you need to provide the interface number also."
  }
];

var BATCH_D = [
  {
    "id": "p10_q001",
    "type": "mcq",
    "question": "Refer to the exhibit. An engineer is asked to configure router R1 so that it forms an OSPF single-area neighbor relationship with R2. Which command sequence must be implemented to configure the router?",
    "image": "p10_q001.png",
    "options": [
      "router ospf 10\nnetwork 10.0.0.0 0.0.0.3 area 0\nnetwork 10.0.2.0 0.0.0.255 area 0",
      "router ospf 10\nnetwork 10.0.0.0 0.0.0.3 area 0\nnetwork 10.0.1.0 0.0.0.255 area 0",
      "router ospf 10\nnetwork 10.0.0.0 0.0.0.3 area 0\nnetwork 10.0.2.0 255.255.255.0 area 0",
      "router ospf 10\nnetwork 10.0.0.0 0.0.0.252 area 0\nnetwork 10.0.1.0 0.0.0.255 area 0"
    ],
    "correctIndexes": [
      1
    ],
    "explanation": ""
  },
  {
    "id": "p10_q002",
    "type": "dragdrop",
    "question": "Drag and drop the HTTP methods used with REST-Based APIs from the left onto the descriptions on the right.",
    "image": null,
    "items": [
      {
        "id": "i1",
        "text": "GET"
      },
      {
        "id": "i2",
        "text": "DELETE"
      },
      {
        "id": "i3",
        "text": "PATCH"
      },
      {
        "id": "i4",
        "text": "PUT"
      },
      {
        "id": "i5",
        "text": "POST"
      }
    ],
    "targets": [
      {
        "id": "t1",
        "text": "creates a resource and returns to URI in the response header"
      },
      {
        "id": "t2",
        "text": "creates or replaces a previously modified resource using information in the request body"
      },
      {
        "id": "t3",
        "text": "removes a resource"
      },
      {
        "id": "t4",
        "text": "retrieves a list of a resource's URIs"
      },
      {
        "id": "t5",
        "text": "updates a resource using instructions included in the request body"
      }
    ],
    "correctMapping": {
      "i5": "t1",
      "i4": "t2",
      "i2": "t3",
      "i1": "t4",
      "i3": "t5"
    },
    "explanation": "GET: retrieve data. POST: create data. PUT: fully update (i.e. replace) an existing record. PATCH: update part of an existing record. DELETE: delete records. PUT is similar to POST in that it can create resources, but it does so when there is a defined URL wherein PUT replaces the entire resource if it exists or creates new if it does not exist. Unlike PUT Request, PATCH does partial update. Fields that need to be updated by the client, only that field is updated without modifying the other field."
  },
  {
    "id": "p10_q003",
    "type": "mcq",
    "question": "What is the collapsed layer in collapsed core architectures?",
    "image": null,
    "options": [
      "core and WAN",
      "access and WAN",
      "distribution and access",
      "core and distribution"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "Collapsed core networks can save the company money by reducing the amount of hardware needed to build and run the network. By combining the core and distribution layers, this model eliminates the need for separate devices. This offers companies the chance to utilize most of the benefits offered by the three-tiered model in a budget-friendly option."
  },
  {
    "id": "p10_q004",
    "type": "mcq",
    "question": "What is the MAC address used with VRRP as a virtual address?",
    "image": null,
    "options": [
      "00-00-0C-07-AD-89",
      "00-00-5E-00-01-0a",
      "00-07-C0-70-AB-01",
      "00-C6-41-93-90-91"
    ],
    "correctIndexes": [
      1
    ],
    "explanation": "With VRRP, the virtual router's MAC address is 0000.5E00.01xx, in which xx is the VRRP group. Note: We are not sure why there is a VRRP question here as it is not in the syllabus of the exam."
  },
  {
    "id": "p10_q005",
    "type": "dragdrop",
    "question": "Drag and drop the IPv6 addresses from the left onto the corresponding address types on the right.",
    "image": null,
    "items": [
      {
        "id": "i1",
        "text": "fcba:926a:e8e:7a25:b1:c6d2:1a76:8fdc"
      },
      {
        "id": "i2",
        "text": "2001:db8:600d:cafe::123"
      },
      {
        "id": "i3",
        "text": "fe80:a00:27ff:feeb:8eaa"
      },
      {
        "id": "i4",
        "text": "ff05::1:3"
      }
    ],
    "targets": [
      {
        "id": "t1",
        "text": "Global Unicast"
      },
      {
        "id": "t2",
        "text": "Link-Local Unicast"
      },
      {
        "id": "t3",
        "text": "Multicast"
      },
      {
        "id": "t4",
        "text": "Unique Local"
      }
    ],
    "correctMapping": {
      "i2": "t1",
      "i3": "t2",
      "i4": "t3",
      "i1": "t4"
    },
    "explanation": "Link-local addresses are allocated with the FE80::/64 prefix -> can be easily recognized by the prefix FE80. All IPv6 multicast addresses share the prefix of FF00::/8 -> The first octet is FF (1111 1111). This way you can tell at a glance if an IPv6 address is intended for multicast or not. Unique local IPv6 addresses have the similar function as IPv4 private addresses. They are not allocated by an address registry and are not meant to be routed outside their domain. Unique local IPv6 addresses start with FC00::/7 -> The first octet can be FC or FD. However when you implement this you have to set the L-bit (the right-most bit of the first octet) to 1 which means that the first two digits will be FD."
  },
  {
    "id": "p10_q006",
    "type": "mcq",
    "question": "Refer to the exhibit. All routers in the network are configured. R2 must be the DR. After the engineer connected the devices, R1 was elected as the DR. Which command sequence must be configure on R2 to be elected as the DR in the network?",
    "image": "p10_q006.png",
    "options": [
      "R2(config)#interface gi0/0\nR2(config-if)#ip ospf priority 1",
      "R2(config)#interface gi0/0\nR2(config-if)#ip ospf priority 100",
      "R2(config)#router ospf 1\nR2(config-router)#router-id 10.100.100.100",
      "R2(config)#router ospf 1\nR2(config-router)#router-id 192.168.2.7"
    ],
    "correctIndexes": [
      1
    ],
    "explanation": ""
  },
  {
    "id": "p10_q007",
    "type": "mcq",
    "question": "Which set of 2.4 GHz nonoverlapping wireless channels is standard in the United States?",
    "image": null,
    "options": [
      "channels 2, 7, 9, and 11",
      "channels 1, 6, 11, and 14",
      "channels 2, 7, and 11",
      "channels 1, 6, and 11"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "The 2.4 GHz band is subdivided into multiple channels each allotted 22 MHz bandwidth and separated from the next channel by 5 MHz. -> A best practice for 802.11b/g/n WLANs requiring multiple APs is to use non-overlapping channels such as 1, 6, and 11."
  },
  {
    "id": "p10_q008",
    "type": "mcq",
    "question": "Which command entered on a switch configured with Rapid-PVST+ listens and learns for a specific time period?",
    "image": null,
    "options": [
      "switch(config)#spanning-tree vlan 1 max-age 6",
      "switch(config)#spanning-tree vlan 1 hello-time 10",
      "switch(config)#spanning-tree vlan 1 priority 4096",
      "switch(config)#spanning-tree vlan 1 forward-time 20"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "The command spanning-tree vlan 1 forward-time ...\" controls how fast a port changes its spanning tree state from blocking to forwarding."
  },
  {
    "id": "p10_q009",
    "type": "dragdrop",
    "question": "Drag and drop the Wi-Fi terms from the left onto the descriptions on the right.",
    "image": null,
    "items": [
      {
        "id": "i1",
        "text": "extended service set"
      },
      {
        "id": "i2",
        "text": "distribution system"
      },
      {
        "id": "i3",
        "text": "infrastructure mode"
      },
      {
        "id": "i4",
        "text": "SSID"
      },
      {
        "id": "i5",
        "text": "independent basic service set"
      }
    ],
    "targets": [
      {
        "id": "t1",
        "text": "Wi-Fi option based around one or more access points"
      },
      {
        "id": "t2",
        "text": "Wi-Fi option in which cells from different access points are linked together"
      },
      {
        "id": "t3",
        "text": "alphanumeric text string that identifies a wireless network"
      },
      {
        "id": "t4",
        "text": "Wi-Fi option that enables two or more clients to communicate directly without a central access point"
      },
      {
        "id": "t5",
        "text": "entire wireless cell of an access point and the linkage to the wired network"
      }
    ],
    "correctMapping": {
      "i2": "t1",
      "i1": "t2",
      "i4": "t3",
      "i5": "t4",
      "i3": "t5"
    },
    "explanation": "A Wireless Distribution System (WDS) lets you connect multiple access points together. WDS allows the connected access points to communicate with each other via wireless connection. Access Points are limited devices; combining more Access Points in a switched network is called Extended Service Set (ESS). Independent Basic Service Set (IBSS) is a service set that allows wireless devices to communicate with each other without any central device (ad hoc/peer to peer). Infrastructure mode is an 802.11 networking framework in which devices communicate with each other by first going through an Access Point (AP)."
  },
  {
    "id": "p10_q010",
    "type": "mcq",
    "question": "Refer to the exhibit.\n\ninterface g2/0/0\n channel-group 1 mode active\ninterface g4/0/0\n channel-group 1 mode active\ninterface Port-channel1\n ip address 203.0.113.65 255.255.255.252\n\n%LINEPROTO-5-UPDOWN: Line protocol on Interface Port-channel1, changed state to down\n\nAn engineer is configuring a Layer 3 port-channel interface with LACP. The configuration on the first device is complete, and it is verified that both interfaces have registered the neighbor device in the CDP table. Which task on the neighbor device enables the new port channel to come up without negotiating the channel?",
    "image": null,
    "options": [
      "Bring up the neighboring interfaces using the no shutdown command.",
      "Change the EtherChannel mode on the neighboring interfaces to auto",
      "Modify the static EtherChannel configuration of the device to passive mode",
      "Configure the IP address of the neighboring device"
    ],
    "correctIndexes": [
      2
    ],
    "explanation": "Our switch can see neighbor switch in the CDP table which means the interfaces of both ends have been turned on (with no shutdown command) -> Answer A is not correct. Our switch is using LACP (active/passive mode) so we cannot use PAgP (auto/desirable mode) on the neighboring interface -> Answer B is not correct. The error is at Layer 2 (\"changed state to down\") so it is not about \"configuring the IP address\" of the neighboring device which is at Layer 3 -> Answer D is not correct. Therefore only answer C is left. We have to change the Etherchannel mode of neighboring device from static to passive for LACP."
  },
  {
    "id": "p10_q011",
    "type": "mcq",
    "question": "Refer to the exhibit.\n\nR1#show ip route\nCodes: C - connected, S - static, R - RIP, M - mobile, B - BGP\n       D - EIGRP, EX - EIGRP external, O - OSPF, IA - OSPF inter area\n       N1 - OSPF NSSA external type 1, N2 - OSPF NSSA external type 2\n       E1 - OSPF external type 1, E2 - OSPF external type 2\n       i - IS-IS, su - IS-IS summary, L1 - IS-IS level-1, L2 - IS-IS level-2\n       ia - IS-IS inter area, * - candidate default, U - per-user static route\n       o - ODR, P - periodic downloaded static route\n\nGateway of last resort is not set\n\n      10.0.0.0/24 is subnetted, 5 subnets\nD     10.1.2.0/24 [90/2170112] via 10.145.20.226, 00:01:33, Serial0/0\nD     10.1.3.0/24 [90/2170112] via 10.145.20.226, 00:01:33, Serial0/0\nD     10.1.2.0/25 [90/2170112] via 10.145.20.126, 00:01:33, Serial0/0\nD     10.1.3.0/25 [90/2170112] via 10.145.20.146, 00:01:33, Serial0/0\nD     10.1.4.0/25 [90/2170112] via 10.145.20.156, 00:01:33, Serial0/0\n      192.168.1.0/24 is variably subnetted, 2 subnets, 2 masks\nC     192.168.10.0/24 is directly connected, GigabitEthernet0/0\n      192.168.21.0/24 is variably subnetted, 2 subnets, 2 masks\nC     192.168.11.0/24 is directly connected, GigabitEthernet0/1\n      10.165.20.0/24 is variably subnetted, 2 subnets, 2 masks\nC     192.168.20.224/24 is directly connected, Serial0/0\nS     10.1.2.112/28 [1/0] via 10.165.20.166\n\nWhat is the next hop for traffic entering R1 with a destination of 10.1.2.126?",
    "image": null,
    "options": [
      "10.165.20.126",
      "10.165.20.146",
      "10.165.20.166",
      "10.165.20.226"
    ],
    "correctIndexes": [
      2
    ],
    "explanation": "The static route destined to subnet 10.1.2.112/28 which ranges from 10.1.2.112 to 10.1.2.127 (increment: 16) so it also covers the destination of 10.1.2.126. The static route also has the lowest AD (of 1) so the router will choose this path."
  },
  {
    "id": "p10_q012",
    "type": "mcq",
    "question": "Refer to the exhibit. A network engineer must configure R1 so that it sends all packets destined to the 10.0.0.0/24 network to R3, and all packets destined to PC1 to R2. Which configuration must the engineer implement?",
    "image": "p10_q012.png",
    "options": [
      "R1(config)#ip route 10.0.0.0 255.255.0.0 172.16.0.2\nR1(config)#ip route 10.0.0.5 255.255.255.255 192.168.0.2",
      "R1(config)#ip route 10.0.0.0 255.255.255.0 172.16.0.2\nR1(config)#ip route 10.0.0.5 255.255.255.255 192.168.0.2",
      "R1(config)#ip route 10.0.0.0 255.255.0.0 192.168.0.2\nR1(config)#ip route 10.0.0.0 255.255.255.0 172.16.0.2",
      "R1(config)#ip route 10.0.0.0 255.255.255.0 192.168.0.2\nR1(config)#ip route 10.0.0.5 255.255.255.255 172.16.0.2"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": ""
  },
  {
    "id": "p10_q013",
    "type": "dragdrop",
    "question": "Drag and drop the facts about wireless architectures from the left onto the types of access point on the right. Not all options are used.",
    "image": null,
    "items": [
      {
        "id": "i1",
        "text": "configured and managed by a WLC"
      },
      {
        "id": "i2",
        "text": "accessible for management via Tenet SSH, or a Web GUI"
      },
      {
        "id": "i3",
        "text": "supports different operational modes"
      },
      {
        "id": "i4",
        "text": "requires a management IP address"
      },
      {
        "id": "i5",
        "text": "supports automatic deployment"
      }
    ],
    "targets": [
      {
        "id": "t1",
        "text": "Autonomous Access Point"
      },
      {
        "id": "t2",
        "text": "Lightweight Access Point"
      }
    ],
    "correctMapping": {
      "i2": "t1",
      "i4": "t1",
      "i1": "t2",
      "i3": "t2"
    },
    "explanation": "An autonomous AP is a self-contained device with both wired and wireless hardware so that it can bridge to the wired VLAN infrastructure wireless clients that belong to SSIDs. Each autonomous AP must be configured with a management IP address so that it can be remotely accessed using Telnet, SSH, or a web interface. Each AP must be individually managed and maintained unless you use a management platform such as Cisco DNA Center."
  },
  {
    "id": "p10_q014",
    "type": "dragdrop",
    "question": "Drag and drop the functions of SNMP fault-management from the left onto the definitions on the right.",
    "image": null,
    "items": [
      {
        "id": "i1",
        "text": "fault detection"
      },
      {
        "id": "i2",
        "text": "event correlation and aggregation"
      },
      {
        "id": "i3",
        "text": "problem resolution"
      },
      {
        "id": "i4",
        "text": "restoration of service"
      },
      {
        "id": "i5",
        "text": "fault diagnosis and isolation"
      }
    ],
    "targets": [
      {
        "id": "t1",
        "text": "The network management system launches a preconfigured script to restore functionality"
      },
      {
        "id": "t2",
        "text": "The administrator can manually intervene at the source of the fault"
      },
      {
        "id": "t3",
        "text": "The system identifies performance degradation or service interruption"
      },
      {
        "id": "t4",
        "text": "The system groups alarms from related issues"
      },
      {
        "id": "t5",
        "text": "The system reports on the source of the issue"
      }
    ],
    "correctMapping": {
      "i4": "t1",
      "i3": "t2",
      "i1": "t3",
      "i2": "t4",
      "i5": "t5"
    },
    "explanation": "Fault management is the component of network management concerned with detecting, isolating and resolving problems. Fault detection: The system discovers that service delivery has been interrupted or its performance has degraded. Fault diagnosis and isolation: The source of the fault and its location in the network topology are identified. Event correlation and aggregation: fault management systems often group related events for administrators and provide a root cause analysis. Restoration of service: The network management system automatically executes any preconfigured scripts or programs to get services up and running as soon as possible. Problem resolution: The source of the fault is corrected, repaired or replaced. Depending on the cause, manual intervention may be required."
  },
  {
    "id": "p10_q015",
    "type": "mcq",
    "question": "What is the purpose of the Cisco DNA Center controller?",
    "image": null,
    "options": [
      "to securely manage and deploy network devices",
      "to scan a network and generate a layer 2 network diagram",
      "to provide Layer 3 services to autonomous access points",
      "to secure physical access to a data center"
    ],
    "correctIndexes": [
      0
    ],
    "explanation": ""
  },
  {
    "id": "p10_q016",
    "type": "mcq",
    "question": "Refer to the exhibit.\n\nRouter R1 Configuration\nInterface GigabitEthernet0/0\nip ospf priority 99\n!\nrouter ospf 100\n network 10.0.0.0 0.0.0.31 area 0\n network 10.0.1.0 0.0.0.255 area 0\n\nAn engineer must configure router R2 so it is elected as the DR on the WAN subnet. Which command sequence must be configured?",
    "image": "p10_q016.png",
    "options": [
      "interface gigabitethernet0/0\nip address 10.0.1.1 255.255.255.224\nip ospf priority 98",
      "interface gigabitethernet0/0\nip address 10.0.1.1 255.255.255.0\nip ospf priority 255",
      "interface gigabitethernet0/0\nip address 10.0.0.34 255.255.255.248\nip ospf priority 0",
      "interface gigabitethernet0/0\nip address 10.0.0.34 255.255.255.224\nip ospf priority 100"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "The OSPF priority of R1 is 99 so we have to set the OSPF priority to a higher value. Also the IP address must be 10.0.0.34/27."
  },
  {
    "id": "p10_q017",
    "type": "mcq",
    "question": "Refer to the exhibit.\n\nR1(config)#ip route 0.0.0.0 0.0.0.0 10.10.10.2\nR1(config)#ip route 10.10.13.0 255.255.255.128 10.10.10.2 111\nR1(config)#ip route 10.10.13.0 255.255.255.128 10.10.10.6 112\nR1(config)#ip route 10.10.13.0 255.255.255.128 10.10.10.10 108\nR1(config-router)#router ospf 1\nR1(config-router)#router-id 1.1.1.1\nR1(config-router)#network 10.10.10.5 0.0.0.0 area 0\nR1(config-router)#network 10.10.10.1 0.0.0.0 area 0\nR1(config-router)#network 10.10.14.1 0.0.0.0 area 0\n\nR1 has just received a packet from host A that is destined to host B. Which route in the routing table is used by R1 to reach host B?",
    "image": "p10_q017.png",
    "options": [
      "10.10.13.0/25[1/0] via 10.10.10.2",
      "10.10.13.0/25[110/2] via 10.10.10.6",
      "10.10.13.0/25[110/2] via 10.10.10.2",
      "10.10.13.0/25[108/0] via 10.10.10.10"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "The \"10.10.13.0/25[1/0] via 10.10.10.2\" entry is from default route (ip route 0.0.0.0 0.0.0.0 10.10.10.2) so it is only used when no other routes to 10.10.13.0/25 is found. In three static routes, the best match for host B should be \"ip route 10.10.13.0 255.255.255.128 10.10.10.10 108\" with lowest AD of 108 so R1 would choose this path. This AD is also lower than the AD of OSPF so it is preferred over OSPF learned routes."
  },
  {
    "id": "p10_q018",
    "type": "mcq",
    "question": "Refer to the exhibit.\n\nC:\\Users\\ciscoadmin>ipconfig/all\nWindows IP Configuration\n   Host Name . . . . . . . . . . . . : DESKTOP-480JBBT\n   Primary Dns Suffix . . . . . . . :\n   Node Type . . . . . . . . . . . . : Hybrid\n   IP Routing Enabled. . . . . . . . : No\n   WINS Proxy Enabled. . . . . . . . : No\n   DNS Suffix Search List. . . . . . : arcap.se\n\nEthernet adapter Ethernet:\n   Media State . . . . . . . . . . . : Media disconnected\n   Connection-specific DNS Suffix . :\n   Description . . . . . . . . . . . : Realtek PCIe GBE Family Controller\n   Physical Address. . . . . . . . . : 3C-52-82-33-F3-8F\n   DHCP Enabled . . . . . . . . . . : Yes\n   Autoconfiguration Enabled . . . . : Yes\n\nWireless LAN adapter Wi-Fi:\n   Connection-specific DNS Suffix . : arcap.se\n   Description . . . . . . . . . . . : Intel(R) Dual Band Wireless-AC 7265\n   Physical Address. . . . . . . . . : C821-5B-84-F3-EF\n   DHCP Enabled. . . . . . . . . . . : Yes\n   Autoconfiguration Enabled . . . . : Yes\n   Link-local IPv6 Address . . . . . : fe80::45a1:b3fa:2f37:bf37%2(Preferred)\n   IPv4 Address. . . . . . . . . . . : 192.168.1.226(Preferred)\n   Subnet Mask . . . . . . . . . . . : 255.255.255.0\n   Lease Obtained. . . . . . . . . . : October 3, 2019 12:28:08 PM\n   Lease Expired . . . . . . . . . . : October 3, 2019 7:18:38 PM\n   Default Gateway . . . . . . . . . : 192.168.1.100\n   DHCP Server . . . . . . . . . . . : 192.168.1.254\n   DHCPv6 IAID . . . . . . . . . . . : 4667016B\n   DHCPv6 Client DUID. . . . . . . . : 00-01-00-01-20-FF-05-55-3C-F3-34-29-20-DF\n   DNS Servers . . . . . . . . . . . : 192.168.1.253\n   NetBIOS over Tcpip. . . . . . . . : Enabled\n   Connection-specific DNS Suffix Search List:\n                                       arcap.se\n\nThe given Windows PC is requesting the IP address of the host at www.cisco.com. To which IP address is the request sent?",
    "image": null,
    "options": [
      "192.168.1.226",
      "192.168.1.253",
      "192.168.1.100",
      "192.168.1.254"
    ],
    "correctIndexes": [
      1
    ],
    "explanation": "In this question, the Windows PC is trying to resolve the domain name www.cisco.com to an IP address so it will need a DNS server. From the output we see the line \"DNS Servers ...: 192.168.1.253\" so this is the IP address the request is sent. Notice that the \"Default Gateway\" IP address is in the same subnet of DNS Server so the PC can directly send request to the DNS Server."
  },
  {
    "id": "p10_q019",
    "type": "mcq",
    "question": "What is a feature of TFTP?",
    "image": null,
    "options": [
      "provides secure data transfer",
      "relies on the well-known TCP port 20 to transmit data",
      "uses two separate connections for control and data traffic",
      "offers anonymous user login ability"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "TFTP is a simple protocol for transferring files, implemented on top of the UDP/IP protocols using well-known port number 69 -> Answer A and answer B are not correct. TFTP has no session control -> Answer C is not correct."
  },
  {
    "id": "p10_q020",
    "type": "mcq",
    "question": "Which access point mode relies on a centralized controller for management, roaming, and SSID configuration?",
    "image": null,
    "options": [
      "repeater mode",
      "bridge mode",
      "lightweight mode",
      "autonomous mode"
    ],
    "correctIndexes": [
      2
    ],
    "explanation": "Lightweight: The term 'lightweight' refers to the fact that these devices cannot work independently. A Cisco lightweight AP (LAP) has to join a Wireless LAN Controller (WLC) to function."
  },
  {
    "id": "p10_q021",
    "type": "mcq",
    "question": "Which command creates a static NAT binding for a PC address of 10.1.1.1 to the public routable address 209.165.200.225 assigned to the PC?",
    "image": null,
    "options": [
      "R1(config)#ip nat outside source static 209.165.200.225 10.1.1.1",
      "R1(config)#ip nat inside source static 209.165.200.225 10.1.1.1",
      "R1(config)#ip nat outside source static 10.1.1.1 209.165.200.225",
      "R1(config)#ip nat inside source static 10.1.1.1 209.165.200.225"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": ""
  },
  {
    "id": "p10_q022",
    "type": "mcq",
    "question": "Refer to the exhibit.\n\nRIP   10.1.1.16/28[120/5] via F0/0\nOSPF  10.1.1.0/24[110/30] via F0/1\nOSPF  10.1.1.0/24[110/40] via F0/2\nEIGRP 10.1.0.0/26[90/20]  via F0/3\nEIGRP 10.0.0.0/8[90/133]  via F0/4\n\nPackets received by the router from BGP enter via a serial interface at 209.165.201.1. Each route is present within the routing table. Which interface is used to forward traffic with a destination IP of 10.1.1.19?",
    "image": null,
    "options": [
      "F0/0",
      "F0/1",
      "F0/3",
      "F0/4"
    ],
    "correctIndexes": [
      0
    ],
    "explanation": ""
  },
  {
    "id": "p10_q023",
    "type": "mcq",
    "question": "Which two REST API status-code classes represent errors? (Choose two)",
    "image": null,
    "options": [
      "1XX",
      "2XX",
      "3XX",
      "4XX",
      "5XX"
    ],
    "correctIndexes": [
      3,
      4
    ],
    "explanation": "HTTP defines these standard status codes that can be used to convey the results of a client's request. The status codes are divided into five categories. 1xx: Informational. 2xx: Success. 3xx: Redirection. 4xx: Client Error - This category of error status codes points the finger at clients. 5xx: Server Error - The server takes responsibility for these error status codes."
  },
  {
    "id": "p10_q024",
    "type": "mcq",
    "question": "An engineer has configured the domain name, user name, and password on the local router. What is the next step to complete the configuration for a Secure Shell access RSA key?",
    "image": null,
    "options": [
      "crypto key generate rsa",
      "crypto key pubkey-chain rsa",
      "crypto key import rsa pem",
      "crypto key zeroize rsa"
    ],
    "correctIndexes": [
      0
    ],
    "explanation": "Steps to configure SSH: 1. Configure the router hostname using command \"hostname\". 2. Configure the domain name using command \"ip domain-name\". 3. Generate public and private keys using command \"crypto key generate rsa\". 4. Create a user in the local database using command \"username...secret\". 5. Allow only SSH access on VTY lines using command \"transport input ssh\"."
  },
  {
    "id": "p10_q025",
    "type": "mcq",
    "question": "Which encryption method is used by WPA3?",
    "image": null,
    "options": [
      "TKIP",
      "SAE",
      "PSK",
      "AES"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "SAE is only the authentication method. WPA3 uses AES for encryption method both for WPA3-Personal and WPA3-Enterprise."
  },
  {
    "id": "p10_q026",
    "type": "mcq",
    "question": "An engineer is configuring remote access to a router from IP subnet 10.139.58.0/28. The domain name, crypto keys, and SSH have been configured. Which configuration enables the traffic on the destination router?",
    "image": null,
    "options": [
      "interface FastEthernet0/0\nip address 10.122.49.1 255.255.255.248\nip access-group 10 in\n\nip access-list standard 10\npermit udp 10.139.58.0 0.0.0.7 host 10.122.49.1 eq 22",
      "interface FastEthernet0/0\nip address 10.122.49.1 255.255.255.252\nip access-group 105 in\n\nip access-list standard 105\npermit tcp 10.139.58.0 0.0.0.7 eq 22 host 10.122.49.1",
      "interface FastEthernet0/0\nip address 10.122.49.1 255.255.255.252\nip access-group 110 in\n\nip access-list extended 110\npermit tcp 10.139.58.0 0.0.0.15 host 10.122.49.1 eq 22",
      "interface FastEthernet0/0\nip address 10.122.49.1 255.255.255.240\naccess-group 120 in\n\nip access-list extended 120\npermit tcp 10.139.58.0 255.255.255.248 any eq 22"
    ],
    "correctIndexes": [
      2
    ],
    "explanation": ""
  },
  {
    "id": "p10_q027",
    "type": "mcq",
    "question": "What is a function of spine-and-leaf architecture?",
    "image": null,
    "options": [
      "mitigates oversubscription by adding a layer of leaf switches",
      "limits payload size of traffic within the leaf layer",
      "offers predictable latency of the traffic path between end devices",
      "exclusively sends multicast traffic between servers that are directly connected to the spine"
    ],
    "correctIndexes": [
      2
    ],
    "explanation": "A spine-leaf architecture aids this by ensuring traffic is always the same number of hops from its next destination, so latency is lower and predictable."
  },
  {
    "id": "p10_q028",
    "type": "mcq",
    "question": "What differentiates device management enabled by Cisco DNA Center from traditional campus device management?",
    "image": null,
    "options": [
      "CLI-oriented device",
      "centralized",
      "per-device",
      "device-by-device hands-on"
    ],
    "correctIndexes": [
      1
    ],
    "explanation": ""
  },
  {
    "id": "p10_q029",
    "type": "mcq",
    "question": "Refer to the exhibit. Router R1 is added to the network and configured with the 10.0.0.64/26 and 10.0.20.0/24 subnets. However, traffic destined for the LAN on R3 is not accessible. Which command when executed on R1 defines a static route to reach the R3 LAN?",
    "image": "p10_q029.png",
    "options": [
      "ip route 10.0.15.0 255.255.255.0 10.0.20.1",
      "ip route 10.0.15.0 255.255.255.192 10.0.20.1",
      "ip route 10.0.0.64 255.255.255.192 10.0.20.3",
      "ip route 10.0.15.0 255.255.255.0 10.0.20.3"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": ""
  },
  {
    "id": "p10_q030",
    "type": "dragdrop",
    "question": "Refer to the exhibit.\n\nRouter1#show ip route\nGateway of last resort is 10.10.11.2 to network 0.0.0.0\n\n    209.165.200.0/27 is subnetted, 1 subnets\nB      209.165.200.224 [20/0] via 10.10.12.2, 03:03:03\n    209.165.201.0/27 is subnetted, 1 subnets\nB      209.165.201.0 [20/0] via 10.10.12.2, 03:03:03\n    209.165.202.0/27 is subnetted, 1 subnets\nB      209.165.202.128 [20/0] via 10.10.12.2, 03:03:03\n    10.0.0.0/8 is variably subnetted, 8 subnets, 4 masks\nC      10.10.10.0/28 is directly connected, GigabitEthernet0/0\nC      10.10.11.0/30 is directly connected, FastEthernet2/0\nC      10.10.12.0/30 is directly connected, GigabitEthernet0/1\nO      10.10.13.0/25 [110/2] via 10.10.10.1, 00:00:03, GigabitEthernet0/0\nO      10.10.13.128/28 [110/2] via 10.10.10.1, 00:00:03, GigabitEthernet0/0\nO      10.10.13.144/28 [110/2] via 10.10.10.1, 00:00:03, GigabitEthernet0/0\nO      10.10.13.160/29 [110/2] via 10.10.10.1, 00:00:03, GigabitEthernet0/0\nO      10.10.13.208/29 [110/2] via 10.10.10.1, 00:00:03, GigabitEthernet0/0\nS*  0.0.0.0/0 [1/0] via 10.10.11.2\n\nDrag and drop the prefix lengths from the left onto the corresponding prefixes on the right. Not all prefixes are used.",
    "image": "p10_q030.png",
    "items": [
      {
        "id": "i1",
        "text": "255.255.255.128"
      },
      {
        "id": "i2",
        "text": "255.255.255.224"
      },
      {
        "id": "i3",
        "text": "255.255.255.240"
      },
      {
        "id": "i4",
        "text": "255.255.255.248"
      },
      {
        "id": "i5",
        "text": "255.255.255.252"
      }
    ],
    "targets": [
      {
        "id": "t1",
        "text": "10.10.13.0"
      },
      {
        "id": "t2",
        "text": "10.10.13.144"
      },
      {
        "id": "t3",
        "text": "10.10.13.160"
      },
      {
        "id": "t4",
        "text": "209.165.202.128"
      }
    ],
    "correctMapping": {
      "i1": "t1",
      "i3": "t2",
      "i4": "t3",
      "i2": "t4"
    },
    "explanation": "10.10.13.0 - 255.255.255.128; 10.10.13.144 - 255.255.255.240; 10.10.13.160 - 255.255.255.248; 209.165.202.128 - 255.255.255.224."
  },
  {
    "id": "p10_q031",
    "type": "mcq",
    "question": "What is a zero-day exploit?",
    "image": null,
    "options": [
      "It is when an attacker inserts malicious code into a SQL server.",
      "It is when a new network vulnerability is discovered before a fix is available.",
      "It is when the perpetrator inserts itself in a conversation between two parties and captures or alters data.",
      "It is when the network is saturated with malicious traffic that overloads resources and bandwidth."
    ],
    "correctIndexes": [
      1
    ],
    "explanation": ""
  },
  {
    "id": "p10_q032",
    "type": "mcq",
    "question": "After a recent security breach and a RADIUS failure, an engineer must secure the console port of each enterprise router with a local username and password. Which configuration must the engineer apply to accomplish this task?",
    "image": null,
    "options": [
      "Option A:\naaa new-model\naaa authorization exec default local\naaa authentication login default radius\nusername localuser privilege 15 secret plaintextpassword",
      "Option B:\nusername localuser secret plaintextpassword\nline con 0\nlogin authentication default\nprivilege level 15",
      "Option C:\nusername localuser secret plaintextpassword\nline con 0\nno login local\nprivilege level 15",
      "Option D:\naaa new-model\nline con 0\npassword plaintextpassword\nprivilege level 15"
    ],
    "correctIndexes": [
      1
    ],
    "explanation": "Option A is not correct as in fact the command \"aaa authentication login default\" should be \"aaa authentication login default group radius\" which will authenticate only via RADIUS server. Option C is not correct as the command \"no login local\" removes the requirement for local authentication on the console line. Option D is not correct as with the command \"password plaintextpassword\", the device only asks for the password, not username. Option B is not correct as the command \"login authentication default\" specifies the default login authentication method but we need to define that \"default\" method is to use local username and password with two additional commands \"aaa new-model\" and \"aaa authentication login default local\". -> This is the best choice although it is not totally correct."
  },
  {
    "id": "p11_q001",
    "type": "mcq",
    "question": "What is the function of northbound API?",
    "image": null,
    "options": [
      "It upgrades software and restores files.",
      "It relies on global provisioning and configuration.",
      "It supports distributed processing for configuration.",
      "It provides a path between an SDN controller and network applications."
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "Now, in turn, the networking administrators and SDN applications want to control the controller! So the controller need a northbound interface (NBI) to communicate with us. The NBI applications included various network services, including network virtualization, dynamic virtual network provisioning, firewall monitoring, user identity management and access policy control."
  },
  {
    "id": "p11_q002",
    "type": "dragdrop",
    "question": "Drag and drop the wireless architecture benefits from the left onto the architecture types on the right.",
    "image": null,
    "items": [
      {
        "id": "i1",
        "text": "Appropriate for a small-business environment"
      },
      {
        "id": "i2",
        "text": "Work is divided between the access point and the controller"
      },
      {
        "id": "i3",
        "text": "The access points transmit beacon frames"
      },
      {
        "id": "i4",
        "text": "Supports per device configuration and management"
      },
      {
        "id": "i5",
        "text": "Uses the CAPWAP tunneling protocol"
      }
    ],
    "targets": [
      {
        "id": "t1",
        "text": "Split-MAC"
      },
      {
        "id": "t2",
        "text": "Autonomous"
      }
    ],
    "correctMapping": {
      "i2": "t1",
      "i3": "t1",
      "i5": "t1",
      "i1": "t2",
      "i4": "t2"
    },
    "explanation": "An autonomous AP is a self-contained device with both wired and wireless hardware so that it can bridge to the wired VLAN infrastructure wireless clients that belong to SSIDs. Each autonomous AP must be configured with a management IP address so that it can be remotely accessed using Telnet, SSH, or a web interface. Each AP must be individually managed and maintained unless you use a management platform such as Cisco DNA Center.\n\nThe division of labor between the WLC and LAPs is known as split-MAC architecture. The LAP must interact with wireless clients on some low level, known as the Media Access Control (MAC) layer. These functions must stay with the LAP hardware, closest to the clients. The management functions are not integral to handling frames but are things that should be centrally administered. Therefore, those functions can be moved to a centrally located platform away from the AP."
  },
  {
    "id": "p11_q003",
    "type": "dragdrop",
    "question": "Drag and drop the Ansible terms from the left onto the right.",
    "image": null,
    "items": [
      {
        "id": "i1",
        "text": "control node"
      },
      {
        "id": "i2",
        "text": "inventory"
      },
      {
        "id": "i3",
        "text": "managed node"
      },
      {
        "id": "i4",
        "text": "module"
      },
      {
        "id": "i5",
        "text": "playbook"
      },
      {
        "id": "i6",
        "text": "task"
      }
    ],
    "targets": [
      {
        "id": "t1",
        "text": "collection of actions to perform on target devices, expressed in YAML format"
      },
      {
        "id": "t2",
        "text": "device with Ansible installed that manages target devices"
      },
      {
        "id": "t3",
        "text": "network device, without Ansible installed, upon which commands can be executed"
      },
      {
        "id": "t4",
        "text": "specific action to be performed on one or more target devices"
      },
      {
        "id": "t5",
        "text": "unit of Python code to be executed"
      },
      {
        "id": "t6",
        "text": "Ansible file that defines the target devices upon which commands and tasks can be executed"
      }
    ],
    "correctMapping": {
      "i5": "t1",
      "i1": "t2",
      "i3": "t3",
      "i6": "t4",
      "i4": "t5",
      "i2": "t6"
    },
    "explanation": "Once Ansible is installed, it creates several text files:\n\nPlaybooks: These files provide actions and logic about what Ansible should do. Ansible playbooks are files that contain tasks to configure hosts. Ansible playbooks are written in YAML format. Inside Playbooks, we have:\nModules (also referred to as \"task plugins\" or \"library plugins\") are discrete units of code that can be used from the command line or in a playbook task. Ansible executes each module, usually on the remote managed node, and collects return values.\nTasks: Tasks are Ansible's smallest unit of work. They are a series of actions on the target hosts, using modules to provide functionalities.\n\nA task defines an action that needs to be performed, while a module executes the action on a managed host.\n\nInventory: a file contains a list of the hosts (usually their IP addresses, ports) which you want to configure or manage. Hosts in an inventory can be divided into smaller groups for easier management and configuration. Each group can run different tasks. An example of a task is to ping all hosts in group [routers].\n\nThe control node is a computer that runs Ansible. A managed node is any device being managed by the control node."
  },
  {
    "id": "p11_q004",
    "type": "mcq",
    "question": "What is a purpose of traffic shaping?",
    "image": null,
    "options": [
      "It enables dynamic flow identification.",
      "It enables policy-based routing.",
      "It provides best-effort service.",
      "It limits bandwidth usage."
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "Shaping: retains excess packets in a queue and then schedules the excess for later transmission over increments of time. When traffic reaches the maximum configured rate, additional packets are queued instead of being dropped to proceed later. Traffic shaping is applicable only on outbound interfaces as buffering and queuing happens only on outbound interfaces. Shaping is configured in bits per second.\n\nBest Effort Service means a service on a shared network in which the network does not provide any guarantee that data is delivered or that delivery meets any quality of service, meaning that the services obtain unspecified variable bit rate, latency and packet loss, depending on the current traffic load -> Traffic shaping does not drop packets so it does not offer best effort service -> Answer C is not correct.\n\nThe primary reasons you would use traffic shaping are to control access to available bandwidth, to ensure that traffic conforms to the policies established for it, and to regulate the flow of traffic in order to avoid congestion that can occur when the sent traffic exceeds the access speed of its remote, target interface -> Answer D is correct."
  },
  {
    "id": "p11_q005",
    "type": "dragdrop",
    "question": "Drag and drop the characteristics of device-management technologies from the left onto the corresponding deployment types on the right.",
    "image": null,
    "items": [
      {
        "id": "i1",
        "text": "orchestrates background device configuration"
      },
      {
        "id": "i2",
        "text": "relies on per-device management"
      },
      {
        "id": "i3",
        "text": "supports centralized software management"
      },
      {
        "id": "i4",
        "text": "provides greater flexibility for custom and non-standard configurations"
      },
      {
        "id": "i5",
        "text": "supports open APIs"
      },
      {
        "id": "i6",
        "text": "uses individual software management"
      }
    ],
    "targets": [
      {
        "id": "t1",
        "text": "Cisco DNA Center"
      },
      {
        "id": "t2",
        "text": "Traditional"
      }
    ],
    "correctMapping": {
      "i1": "t1",
      "i3": "t1",
      "i5": "t1",
      "i2": "t2",
      "i4": "t2",
      "i6": "t2"
    },
    "explanation": ""
  },
  {
    "id": "p11_q006",
    "type": "mcq",
    "question": "Which type of port is used to connect to the wired network when an autonomous AP maps two VLANs to its WLANs?",
    "image": null,
    "options": [
      "LAG",
      "EtherChannel",
      "trunk",
      "access"
    ],
    "correctIndexes": [
      2
    ],
    "explanation": "In this example, we will configure the switch in our Autonomous AP deployment. First, we need to create Vlan 21, which is assigned to Corporate users, and Vlan 22, which is assigned to Guess users. Then we will configure the trunk interface between the AP and the switch to allow multiple Vlans to traverse the link."
  },
  {
    "id": "p11_q007",
    "type": "mcq",
    "question": "Refer to the exhibit.\n\n```\nR1#show ip ospf interface g0/0/0\nGigabitEthernet0/0/0 is up, line protocol is up\n  Internet address is 192.168.1.2/24, Area 0\n  Process ID 1, Router ID 192.168.1.2, Network Type POINT-TO-POINT, Cost: 1\n  Transmit Delay is 1 sec, State POINT-TO-POINT,\n  Timer intervals configured, Hello 15, Dead 20, Wait 20, Retransmit 5\n    Hello due in 00:00:08\n  Index 1/1, flood queue length 0\n  Next 0x0(0) /0x0(0)\n  Last flood scan length is 1, maximum is 1\n  Last flood scan time is 0 msec, maximum is 0 msec\n  Suppress hello for 0 neighbor(s)\n\nR2#show ip ospf interface g0/0/0\nGigabitEthernet0/0/0 is up, line protocol is up\n  Internet address is 192.168.1.1/24, Area 0\n  Process ID 1, Router ID 10.1.1.1, Network Type POINT-TO-POINT, Cost: 1\n  Transmit Delay is 1 sec, State POINT-TO-POINT,\n  Timer intervals configured, Hello 10, Dead 40, Wait 40, Retransmit 5\n    Hello due in 00:00:11\n  Index 1/1, flood queue length 0\n  Next 0x0(0)/0x0(0)\n  Last flood scan length is 1, maximum is 1\n  Last flood scan time is 0 msec, maximum is 0 msec\n  Suppress hello for 0 neighbor(s)\n```\n\nThe network engineer is configuring router R2 as a replacement router on the network. After the initial configuration is applied it is determined that R2 failed to show R1 as a neighbor. Which configuration must be applied to R2 to complete the OSPF configuration and enable it to establish the neighbor relationship with R1?",
    "image": null,
    "options": [
      "Option A:\nR2(config)#interface g0/0/0\nR2(config-if)#ip ospf hello-interval 15\nR2(config-if)#ip ospf dead-interval 20",
      "Option B:\nR2(config)#router ospf 1\nR2(config-router)#router-id 192.168.1.2",
      "Option C:\nR2(config)#router ospf 1\nR2(config-router)#network 192.168.1.0 255.255.255.0 area 2\nR2(config-router)#network 10.1.1.0 255.255.255.255 area 2",
      "Option D:\nR2(config)#interface g0/0/0\nR2(config-if)#ip ospf dead-interval 20"
    ],
    "correctIndexes": [
      0
    ],
    "explanation": "In order to become OSPF neighbor, the following values must be matched on both routers:\n\n+ Area ID\n+ Authentication\n+ Hello and Dead Intervals\n+ Stub area Flag\n+ MTU Size"
  },
  {
    "id": "p11_q008",
    "type": "mcq",
    "question": "What is a characteristics of a collapsed-core network topology?",
    "image": null,
    "options": [
      "It allows the core and distribution layers to run as a single combined layer.",
      "It enables the core and access layers to connect to one logical distribution device over an EtherChannel.",
      "It enables all workstations in a SOHO environment to connect on a single switch with internet access.",
      "It allows wireless devices to connect directly to the core layer, which enables faster data transmission."
    ],
    "correctIndexes": [
      0
    ],
    "explanation": "The three-tier hierarchical design maximizes performance, network availability, and the ability to scale the network design. Most small enterprise campus' do not grow significantly larger over time, and most small enterprise campus are small enough to be well served by a two-tier hierarchical design, where the core and distribution layers are collapsed into one layer. The primary motivation for the collapsed core design is reducing network cost, while maintaining most of the benefits of the three-tier hierarchical model."
  },
  {
    "id": "p11_q009",
    "type": "mcq",
    "question": "What is the purpose of configuring different levels of syslog for different devices on the network?",
    "image": null,
    "options": [
      "to rate-limit messages for different severity levels from each device",
      "to set the severity of syslog messages from each device",
      "to identify the source from which each syslog message originated",
      "to control the number of syslog messages from different devices that are stored locally"
    ],
    "correctIndexes": [
      1
    ],
    "explanation": "This question is a bit unclear to understand. But this question wanted to ask about the severity (levels) of syslog messages. Level = severity level.\n\nTo rate-limit messages (limit the number of syslog packets sent to the syslog server), we use the command \"logging rate-limit ...\" instead so answer A is not the best answer for this question (although it is not totally wrong)."
  },
  {
    "id": "p11_q010",
    "type": "mcq",
    "question": "Which interface enables communication between a program on the controller and a program on the networking devices?",
    "image": null,
    "options": [
      "northbound interface",
      "software virtual interface",
      "southbound interface",
      "tunnel interface"
    ],
    "correctIndexes": [
      2
    ],
    "explanation": "We use Southbound API to communicate between the Controllers and Network Elements."
  },
  {
    "id": "p11_q011",
    "type": "dragdrop",
    "question": "Drag and drop the REST API call method for HTTP from the left onto the action they perform on the right.",
    "image": null,
    "items": [
      {
        "id": "i1",
        "text": "POST"
      },
      {
        "id": "i2",
        "text": "DELETE"
      },
      {
        "id": "i3",
        "text": "GET"
      },
      {
        "id": "i4",
        "text": "PUT"
      },
      {
        "id": "i5",
        "text": "PATCH"
      }
    ],
    "targets": [
      {
        "id": "t1",
        "text": "creates a resource on the server"
      },
      {
        "id": "t2",
        "text": "reads data from the server"
      },
      {
        "id": "t3",
        "text": "removes a resource from the server"
      },
      {
        "id": "t4",
        "text": "updates an entry in the database"
      }
    ],
    "correctMapping": {
      "i1": "t1",
      "i3": "t2",
      "i2": "t3",
      "i4": "t4"
    },
    "explanation": "GET: retrieve data\nPOST: create data\nPUT: fully update (i.e. replace) an existing record\nPATCH: update part of an existing record\nDELETE: delete records\n\nPUT is similar to POST in that it can create resources, but it does so when there is a defined URL wherein PUT replaces the entire resource if it exists or creates new if it does not exist.\n\nUnlike PUT Request, PATCH does partial update. Fields that need to be updated by the client, only that field is updated without modifying the other field."
  },
  {
    "id": "p11_q012",
    "type": "mcq",
    "question": "What is the primary purpose of private address space?",
    "image": null,
    "options": [
      "conserve globally unique address space",
      "simplify the addressing in the network",
      "limit the number of nodes reachable via the Internet",
      "reduce network complexity"
    ],
    "correctIndexes": [
      0
    ],
    "explanation": ""
  },
  {
    "id": "p11_q013",
    "type": "mcq",
    "question": "What is a reason to configure a trunk port that connects to a WLC distribution port?",
    "image": null,
    "options": [
      "Eliminate redundancy with a link failure in the data path.",
      "Allow multiple VLAN to be used in the data path.",
      "Provide redundancy if there is a link failure for out-of-band management.",
      "Permit multiple VLANs to provide out-of-band management."
    ],
    "correctIndexes": [
      1
    ],
    "explanation": ""
  },
  {
    "id": "p11_q014",
    "type": "mcq",
    "question": "Refer to the exhibit.\n\n```\nR1#show ip route 10.10.2.1\nRouting entry for 10.10.2.0/24\nKnown via \"osp 1\", disatnce 110, metric 2, type intra area\n  Last update from 192.168.1.2 on GigabitEthernet0/0, 01:33:22 ago\n  Routing Descriptor Blocks:\n  * 192.168.1.2, from 192.168.1.2, 01:33:15 ago, via GigabitEthernet0/0\n    Route metric is 2, traffic share count is 1\n```\n\nTraffic from R1 to the 10.10.2.0/24 subnet uses 192.168.1.2 as its next hop. An network engineer wants to update the R1 configuration so that traffic with destination 10.10.2.1 passes through router R3, and all other traffic to the 10.10.2.0/24 subnet passes through R2. Which command must be used?",
    "image": "p11_q014.png",
    "options": [
      "ip route 10.10.2.1 255.255.255.255 192.168.1.4 115",
      "ip route 10.10.2.0 255.255.255.0 192.168.1.4 100",
      "ip route 10.10.2.0 255.255.255.0 192.168.1.4 115",
      "ip route 10.10.2.1 255.255.255.255 192.168.1.4 100"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": ""
  },
  {
    "id": "p11_q015",
    "type": "mcq",
    "question": "Which cipher is supported for wireless encryption only with the WPA2 standard?",
    "image": null,
    "options": [
      "AES256",
      "AES",
      "RC4",
      "SHA"
    ],
    "correctIndexes": [
      1
    ],
    "explanation": "Unlike WEP and WPA, WPA2 uses the AES standard instead of the Rivest Cipher 4 (RC4) stream cipher.\n\nWPA3-Enterprice mode uses AES-256 in GCM mode.\n\nSHA stands for Secure Hash Algorithm while AES stands for Advanced Encryption Standard. So SHA is a suite of hashing algorithms. It is not a cipher which is used to encrypt."
  },
  {
    "id": "p11_q016",
    "type": "mcq",
    "question": "Refer to the exhibit.\n\n```\nEntry #\n1      192.168.10.0 255.255.254.0\n2      192.168.10.0 255.255.255.192\n3      192.168.10.0 255.255.0.0\n4      192.168.10.0 255.255.224.0\n```\n\nWhich entry is the longest prefix match for host IP address 192.168.10.5?",
    "image": null,
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctIndexes": [
      1
    ],
    "explanation": ""
  },
  {
    "id": "p11_q017",
    "type": "mcq",
    "question": "Which two features introduced in SNMPv2 provides the ability to retrieve large amounts of data in one request? (Choose two)",
    "image": null,
    "options": [
      "Get",
      "GetNext",
      "Set",
      "GetBulk",
      "Inform"
    ],
    "correctIndexes": [
      3,
      4
    ],
    "explanation": "The two additional messages are added in SNMP2 (compared to SNMPv1)\n\nGetBulkRequest: The GetBulkRequest message enables an SNMP manager to access large chunks of data. GetBulkRequest allows an agent to respond with as much information as will fit in the response PDU. Agents that cannot provide values for all variables in a list will send partial information.\n\nInformRequest: The InformRequest message allows NMS stations to share trap information. (Traps are issued by SNMP agents when a device change occurs.) InformRequest messages are generally used between NMS stations, not between NMS stations and agents."
  },
  {
    "id": "p11_q018",
    "type": "mcq",
    "question": "Refer to the exhibit.\n\n```\nrouter# show ip route\n...\nD  172.18.32.0/26 [90/25789217] via 10.1.1.1\nR  172.18.32.0/24 [120/4] via 10.1.1.2\nO  172.18.32.0/19 [110/229840] via 10.1.1.3\nC  172.18.32.32/32 is directly connected, Loopback0\nC  172.18.32.36/30 directly connected, GigabitEthernet0/0\nL  172.18.32.37/32 is directly connected, GigabitEthernet0/0\n```\n\nA packet sourced from 172.18.33.2 is destined for 172.18.32.38. Where does the router forward the packet?",
    "image": null,
    "options": [
      "GigabitEthernet0/0",
      "Loopback0",
      "10.1.1.1",
      "10.1.1.3"
    ],
    "correctIndexes": [
      0
    ],
    "explanation": "The best entry for destination 172.18.32.38 is \"C 172.18.32.36/30 ..., GigabitEthernet0/0\" so the router will forward the packet to Gi0/0 interface."
  },
  {
    "id": "p11_q019",
    "type": "dragdrop",
    "question": "Refer to the exhibit. The Router1 routing table has multiple methods to reach 10.10.10.0/24 as shown. The default Administrative Distance is used. Drag and drop the network conditions from the left onto the routing methods that Router1 uses on the right.",
    "image": "p11_q019.png",
    "items": [
      {
        "id": "i1",
        "text": "All protocols are up"
      },
      {
        "id": "i2",
        "text": "OSPF and eBGP are down"
      },
      {
        "id": "i3",
        "text": "The static route and eBGP are down"
      },
      {
        "id": "i4",
        "text": "The static route and EIGRP are down"
      },
      {
        "id": "i5",
        "text": "The static route and OSPF are down"
      }
    ],
    "targets": [
      {
        "id": "t1",
        "text": "eBGP"
      },
      {
        "id": "t2",
        "text": "EIGRP"
      },
      {
        "id": "t3",
        "text": "Static"
      }
    ],
    "correctMapping": {
      "i4": "t1",
      "i5": "t1",
      "i3": "t2",
      "i1": "t3",
      "i2": "t3"
    },
    "explanation": "The Administrative Distance (AD) of popular routing protocols: Directly Connected 0, Static 1, EIGRP 90, EIGRP Summary route 5, OSPF 110, RIP 120. The AD of eBGP is 20 and iBGP is 200.\n\nThe smaller the AD is, the better it is. The router will choose the routing protocol with smallest AD.\n\nIn this case the router will choose in this order: Static (1) -> eBGP (20) -> EIGRP (90) -> OSPF (110) -> iBGP (200)."
  },
  {
    "id": "p11_q020",
    "type": "mcq",
    "question": "Refer to the exhibit.\n\n```\nC:\\>ipconfig /all\nEthernet adapter Ethernet:\n  Connection-specific DNS Suffix  . :\n  Physical Address.........: F8-75-A4-3B-AB-4F\n  Link-local IPv6 Address.....: fe80::644a:b01:3e5f:ae6%14(Preferred)\n  IPv4 Address..........: 10.2.2.2(Preferred)\n  Subnet Mask...........: 255.255.255.192\n  Default Gateway.........: 10.2.2.1\n  DHCP Server...........: 192.168.1.15\n  DNS Servers...........: 8.8.8.8\n  NetBIOS over Tcpip........: Enabled\n```\n\nA newly configured PC fails to connect to the internet using TCP port 80 to www.cisco.com. Which setting must be modified for the connection to work?",
    "image": "p11_q020.png",
    "options": [
      "Subnet Mask",
      "DNS Servers",
      "Default Gateway",
      "DHCP Server"
    ],
    "correctIndexes": [
      0
    ],
    "explanation": "We see this PC has been assigned an IP address 10.2.2.2, Default Gateway 10.2.2.1, DNS Server 8.8.8.8 but its subnet mask is 255.255.255.192 (or /26) which is different from the subnet mask of its default gateway (10.2.2.1/27) so this is the issue."
  },
  {
    "id": "p11_q021",
    "type": "mcq",
    "question": "What does a switch do when it receives a frame whose destination MAC address is missing from the MAC address table?",
    "image": null,
    "options": [
      "It floods the frame unchanged across all remaining ports in the incoming VLAN.",
      "It appends the table with a static entry for the MAC and shuts down the port.",
      "It updates the CAM table with the destination MAC address of the frame.",
      "It changes the checksum of the frame to a value that indicates an invalid frame."
    ],
    "correctIndexes": [
      0
    ],
    "explanation": ""
  },
  {
    "id": "p11_q022",
    "type": "mcq",
    "question": "Which enhancement is implemented in WPA3?",
    "image": null,
    "options": [
      "applies 802.1x authentication",
      "uses TKIP",
      "employs PKI to identify access points",
      "protects against brute force attacks"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "Another security enhancement that has been made in WP3 reduces potential for password cracking attacks such as the WPA2 KRACK Attack. WPA2 is vulnerable to brute force and dictionary-based attacks. That is because security relies on the AP provider setting a secure password and many establishments don't. With WPA3, the Pre-Shared Key (PSK) exchange protocol is replaced with Simultaneous Authentication of Equals (SAE) or the Dragonfly Key Exchange, which improves security of the initial key exchange and offers better protection against offline dictionary-based attacks."
  },
  {
    "id": "p11_q023",
    "type": "mcq",
    "question": "Which type of address is shared by routers in a HSRP implementation and used by hosts on the subnet as their default gateway address?",
    "image": null,
    "options": [
      "multicast address",
      "loopback IP address",
      "virtual IP address",
      "broadcast address"
    ],
    "correctIndexes": [
      2
    ],
    "explanation": ""
  },
  {
    "id": "p11_q024",
    "type": "mcq",
    "question": "What are two reasons a switch experiences frame flooding? (Choose two)",
    "image": null,
    "options": [
      "A defective patch cable is connected to the switch port",
      "Topology changes are occurring within spanning-tree",
      "An aged MAC table entry is causing excessive updates",
      "Port-security is configured globally",
      "The forwarding table has overflowed"
    ],
    "correctIndexes": [
      1,
      4
    ],
    "explanation": "However, other events in the network might cause the switch MAC address table to be flushed more frequently than the configured aging time. One such event is due to spanning-tree topology changes in the network.\n\nTopology changes reduce the MAC address table aging time from the default time of 300 seconds to 15 seconds in the case of 802.1D Spanning Tree Protocol (STP) to freshen stale MAC address table entries -> Answer B is correct.\n\nIf the Layer 2 forwarding table or the MAC address table is full and it can not save any more MAC address, its enters into a fail-open mode and start behaving like a network Hub. Frames are flooded to all ports, similar to broadcast type of communication. The MAC flooding attack uses this feature of the switch to steal information -> Answer E is correct."
  },
  {
    "id": "p11_q025",
    "type": "mcq",
    "question": "Why is TCP desired over UDP for application that require extensive error checking, such as HTTPS?",
    "image": null,
    "options": [
      "UDP operates without acknowledgments, and TCP sends an acknowledgment for every packet received.",
      "UDP reliably guarantees delivery of all packets, and TCP drops packets under heavy load.",
      "UDP uses flow control mechanisms for the delivery of packets, and TCP uses congestion control for efficient packet delivery.",
      "UDP uses sequencing data for packets to arrive in order, and TCP offers the capability to receive packets in random order."
    ],
    "correctIndexes": [
      0
    ],
    "explanation": "Note: The flow control mechanism tells the sender the maximum speed at which the data can be sent to the receiver device. One of the popular flow control mechanisms in TCP is the sliding window protocol -> Answer C is not correct."
  },
  {
    "id": "p11_q026",
    "type": "mcq",
    "question": "To improve corporate security, an organization is planning to implement badge authentication to limit access to the data center. Which element of a security program is being deployed?",
    "image": null,
    "options": [
      "user training",
      "user awareness",
      "vulnerability verification",
      "physical access control"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "Physical access control: Infrastructure locations, such as network closets and data centers, should remain securely locked. Badge access to sensitive locations is a scalable solution, offering an audit trail of identities and timestamps when access is granted. Administrators can control access on a granular basis and quickly remove access when an employee is dismissed."
  },
  {
    "id": "p11_q027",
    "type": "dragdrop",
    "question": "Drag and drop the statement about AAA services from the left to the corresponding AAA services on the right.",
    "image": null,
    "items": [
      {
        "id": "i1",
        "text": "It grants access to network assets, such as FTP servers"
      },
      {
        "id": "i2",
        "text": "It restricts the CLI commands that a user is able to perform"
      },
      {
        "id": "i3",
        "text": "It performs user validation via TACACS+"
      },
      {
        "id": "i4",
        "text": "It records the duration of each connection"
      },
      {
        "id": "i5",
        "text": "It supports User Access Reporting"
      },
      {
        "id": "i6",
        "text": "It verifies \"who you are\""
      }
    ],
    "targets": [
      {
        "id": "t1",
        "text": "Accounting"
      },
      {
        "id": "t2",
        "text": "Authorization"
      }
    ],
    "correctMapping": {
      "i4": "t1",
      "i5": "t1",
      "i1": "t2",
      "i2": "t2"
    },
    "explanation": ""
  },
  {
    "id": "p11_q028",
    "type": "mcq",
    "question": "The address block 192.168.32.0/24 must be subnetted into smaller networks. The engineer must meet these requirements:\n* Create 8 new subnets\n* Each subnet must accommodate 30 hosts\n* Interface VLAN 10 must use the last usable IP in the first new subnet\n* A Layer 3 interface is used\n\nWhich configuration must be applied to the interface?",
    "image": null,
    "options": [
      "no switchport mode access\nip address 192.168.32.62 255.255.255.240",
      "switchport\nip address 192.168.32.65 255.255.255.240",
      "no switchport mode trunk\nip address 192.168.32.97 255.255.255.224",
      "no switchport\nip address 192.168.32.30 255.255.255.224"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "8 new subnets -> 8 = 2^3. Therefore the subnet mask is 255.255.255.224 (224 in decimal = 1110 0000 in binary) and each new subnet consists of 2^5 - 2 = 30 hosts.\n\n\"Interface VLAN 10 must use the last usable IP in the first new subnet\" -> The first new subnet is 192.168.32.0/27 (increment: 32) so it ranges from 192.168.32.0 to 192.168.32.31) so the last usable IP is 192.168.32.30. Therefore we must assign IP address 192.168.32.30/27 to interface VLAN 10."
  }
];

var BATCH_E = [
  {
    "id": "p10_q033",
    "type": "mcq",
    "question": "Which command implies the use of SNMPv3?",
    "image": null,
    "options": [
      "snmp-server community",
      "snmp-server host",
      "snmp-server enable traps",
      "snmp-server user"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "Only SNMPv3 requires to add a SNMP user to a group to work. Note: \"community\" string is the password which is used in SNMPv1 & v2. \"snmp-server host\" command can be used by both SNMPv2 & v3."
  },
  {
    "id": "p10_q034",
    "type": "mcq",
    "question": "Refer to the exhibit. Clients on the WLAN are required to use 802.11r. What action must be taken to meet the requirement?",
    "image": "p10_q034.png",
    "options": [
      "Enable CCKM under Authentication Key Management",
      "Under Protected Management Frames, set the PMF option to Required",
      "Set the Fast Transition option to Enable and enable FT 802.1X under Authentication Key Management",
      "Set the Fast Transition option and the WPA gtk-randomize State to disable"
    ],
    "correctIndexes": [
      2
    ],
    "explanation": "Fast BSS Transition (802.11r, often abbreviated to Fast Transition or FT) describes mechanisms by which a mobile device can reestablish existing security and/or QoS parameters prior to reassociating to a new AP. Under Authentication Key Management, choose FT 802.1X or FT PSK."
  },
  {
    "id": "p10_q035",
    "type": "mcq",
    "question": "When a switch receives a frame for an unknown destination MAC address, how is the frame handled?",
    "image": null,
    "options": [
      "broadcast to all ports on the switch",
      "flooded to all ports except the origination port",
      "forwarded to the first available port",
      "inspected and dropped by the switch"
    ],
    "correctIndexes": [
      1
    ],
    "explanation": ""
  },
  {
    "id": "p10_q036",
    "type": "mcq",
    "question": "What is the default port-security behavior on a trunk link?",
    "image": null,
    "options": [
      "It causes a network loop when a violation occurs.",
      "It disables the native VLAN configuration as soon as port security is enabled.",
      "It places the port in the err-disabled state if it learns more than one MAC address.",
      "It places the port in the err-disabled state after 10 MAC addresses are statically configured."
    ],
    "correctIndexes": [
      2
    ],
    "explanation": "We tested it with IOS v15.2 and the \"Maximum MAC Addresses\" is 1 by default so this port will be put in the err-disabled state if it learns more than one MAC address."
  },
  {
    "id": "p10_q037",
    "type": "mcq",
    "question": "Refer to the exhibit.\n\n{\n  \"aaaUser\": {\n    \"attributes\": {\n      \"pwd\": \"password1\",\n      \"firstName\": \"Abraham\",\n      \"lastName\": \"Lincoln\",\n      \"phone\": \"5555551212\",\n      \"email\": \"test@cisco.com\"\n    },\n    \"children\": [{\n      \"aaaUserRole\": {\n        \"attributes\": {\n          \"name\": \"ExampleCisco\"\n        },\n        \"children\": [{\n          \"aaaUserRole\": {\n            \"attributes\": {\n              \"name\": \"admin\"\n            }\n          }\n        }]\n      }\n    }]\n  }\n}\n\nHow many objects are present in the given JSON-encoded data?",
    "image": null,
    "options": [
      "one",
      "four",
      "seven",
      "nine"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "Objects are enclosed in braces \"{}\" so we only need to count the number of \"}\" to specify how many objects in the JSON-encoded data. And there are 9 closing brackets \"}\" so there are 9 objects."
  },
  {
    "id": "p10_q038",
    "type": "mcq",
    "question": "What are two examples of multifactor authentication? (Choose two)",
    "image": null,
    "options": [
      "single sign-on",
      "unique user knowledge",
      "passwords that expire",
      "soft tokens",
      "shared password responsibility"
    ],
    "correctIndexes": [
      1,
      3
    ],
    "explanation": "A multi-factor authentication example of something the user knows could include: Passwords, PIN (or personal identification numbers), Answers to supposedly secret questions (such as \"Where were you born?\" or \"The name of your first-grade teacher.\")"
  },
  {
    "id": "p10_q039",
    "type": "mcq",
    "question": "Refer to the exhibit.\n\nRouter1#show ip route\nGateway of last resort is 10.10.11.2 to network 0.0.0.0\n\n    209.165.200.0/27 is subnetted, 1 subnets\nB      209.165.200.224 [20/0] via 10.10.12.2,03:22:14\n    209.165.201.0/27 is subnetted, 1 subnets\nB      209.165.201.0 [20/0] via 10.10.12.2, 02:26:33\n    209.165.202.0/27 is subnetted, 1 subnets\nB      209.165.202.128 [20/0] via 10.10.12.2,02:26:03\n    10.0.0.0/8 is variably subnetted, 8 subnets, 4 masks\nC      10.10.10.0/28 is directly connected, GigabitEthernet0/0\nC      10.10.11.0/30 is directly connected, FastEthernet2/0\nC      10.10.12.0/30 is directly connected, GigabitEthernet0/1\nO      10.10.13.0/25 [110/2] via 10.10.10.1, 00:00:04, GigabitEthernet0/0\nO      10.10.13.128/28 [110/2] via 10.10.10.1, 00:00:04, GigabitEthernet0/0\nO      10.10.13.144/28 [110/2] via 10.10.10.1, 00:00:04, GigabitEthernet0/0\nO      10.10.13.160/29 [110/2] via 10.10.10.1, 00:00:04, GigabitEthernet0/0\nO      10.10.13.208/29 [110/2] via 10.10.10.1, 00:00:04, GigabitEthernet0/0\nS*  0.0.0.0/0 [1/0] via 10.10.11.2\n\nWhat is the subnet mask of the route to the 10.10.13.160 prefix?",
    "image": null,
    "options": [
      "255.255.255.240",
      "255.255.255.128",
      "255.255.248.0",
      "255.255.255.248"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "The 10.10.13.160 prefix has subnet mask of /29 which is 255.255.255.248."
  },
  {
    "id": "p10_q040",
    "type": "mcq",
    "question": "Refer to the exhibit. Routers R1, R2, and R3 use a protocol to identify their neighbors' IP addresses, hardware platforms, and software versions. A network engineer must configure R2 to avoid sharing any neighbor information with R3, and maintain its relationship with R1. What action meets this requirement?",
    "image": "p10_q040.png",
    "options": [
      "Configure the no lldp run command globally",
      "Configure the no lldp receive command on g0/1",
      "Configure the no cdp run command globally",
      "Configure the no cdp enable command on g0/2"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "In order to disable CDP on an interface, we have to use the \"no cdp enable\" under interface mode. If we want to disable sending LLDP on g0/2 only then we have to use the command \"no lldp transmit\"."
  },
  {
    "id": "p10_q041",
    "type": "mcq",
    "question": "What is a function of an endpoint?",
    "image": null,
    "options": [
      "It passes unicast communication between hosts in a network",
      "It is used directly by an individual user to access network services",
      "It provides security between trusted and untrusted sections of the network",
      "It transmits broadcast traffic between devices in the same VLAN"
    ],
    "correctIndexes": [
      1
    ],
    "explanation": ""
  },
  {
    "id": "p10_q042",
    "type": "mcq",
    "question": "Refer to the exhibit.\n\nSW# conf t\nSW(config)#interface gigabitEthernet0/1\nSW(config-if)#switchport mode access\nSW(config-if)#switchport port-security\nSW(config-if)#\n\nA network engineer started to configure port security on a new switch. These requirements must be met:\n- MAC addresses must be learned dynamically.\n- Log messages must be generated without disabling the interface when unwanted traffic is seen.\n\nWhich two commands must be configured to complete this task? (Choose two)",
    "image": "p10_q042.png",
    "options": [
      "SW(config-if)#switchport port-security mac-address 0010.7B84.45E6",
      "SW(config-if)#switchport port-security maximum 2",
      "SW(config-if)#switchport port-security mac-address sticky",
      "SW(config-if)#switchport port-security violation shutdown",
      "SW(config-if)#switchport port-security violation restrict"
    ],
    "correctIndexes": [
      1,
      4
    ],
    "explanation": "The requirement said MAC addresses must be learned dynamically so we cannot assign a specific MAC address or use the \"sticky\" keyword -> Answer A and answer C are not correct. Also the requirement said \"MAC addresses\" in plural so we set the maximum to 2 -> Answer B is correct. \"Log messages must be generated without disabling the interface\" -> use \"restrict\" keyword for violation, not \"shutdown\" keyword -> Answer E is correct."
  },
  {
    "id": "p10_q043",
    "type": "mcq",
    "question": "What are two features of the DHCP relay agent? (Choose two)",
    "image": null,
    "options": [
      "minimizes the necessary number of DHCP servers",
      "assigns DNS locally and then forwards request to DHCP server",
      "is configured under the Layer 3 interface of a router on the client subnet",
      "allows only MAC-to-IP reservations to determine the local subnet of a client",
      "permits one IP helper command under an individual Layer 3 interface"
    ],
    "correctIndexes": [
      0,
      2
    ],
    "explanation": "With the DHCP relay agent, we can configure DHCP servers in different subnet of the DHCP client. Otherwise we have to place one DHCP server in the same subnet of DHCP clients -> Answer A is correct. To make a router a DHCP Relay Agent, simply put the \"ip helper-address <IP-address-of-DHCP-Server>\" command under the interface that receives the DHCP messages from the DHCP Client -> Answer C is correct. Note: We can configure more than one ip helper command under one Layer 3 interface."
  },
  {
    "id": "p10_q044",
    "type": "mcq",
    "question": "Refer to the exhibit. A network engineer must configure router R1 with a host route to the server. Which command must the engineer configure?",
    "image": "p10_q044.png",
    "options": [
      "R1(config)#ip route 10.10.10.10 255.255.255.255 192.168.0.2",
      "R1(config)#ip route 10.10.10.0 255.255.255.0 192.168.0.2",
      "R1(config)#ip route 0.0.0.0 0.0.0.0 192.168.0.2",
      "R1(config)#ip route 192.168.0.2 255.255.255.255 10.10.10.10"
    ],
    "correctIndexes": [
      0
    ],
    "explanation": "A host route is an IPv4 address with a 32-bit mask (255.255.255.255)."
  },
  {
    "id": "p10_q045",
    "type": "mcq",
    "question": "In a cloud-computing environment, what is rapid elasticity?",
    "image": null,
    "options": [
      "automatic adjustment of capacity based on need",
      "control and monitoring of resource consumption by the tenant",
      "pooling resources in a multitenant model based on need",
      "self-service of computing resources by the tenant"
    ],
    "correctIndexes": [
      0
    ],
    "explanation": "Rapid elasticity allows users to automatically request additional space in the cloud or other types of services. Because of the setup of cloud computing services, provisioning can be seamless for the client or user."
  },
  {
    "id": "p10_q046",
    "type": "dragdrop",
    "question": "Drag and drop the steps in a standard DNS lookup operation from the left into the order on the right.",
    "image": null,
    "items": [
      {
        "id": "i1",
        "text": "An endpoint submits a request for the IP address of a domain name"
      },
      {
        "id": "i2",
        "text": "The DNS submits a request to a root DNS server"
      },
      {
        "id": "i3",
        "text": "The DNS submits a request to the domain DNS server"
      },
      {
        "id": "i4",
        "text": "The DNS receives a reply from the domain DNS server"
      },
      {
        "id": "i5",
        "text": "The DNS responds to the endpoint"
      }
    ],
    "targets": [
      {
        "id": "t1",
        "text": "Step 1"
      },
      {
        "id": "t2",
        "text": "Step 2"
      },
      {
        "id": "t3",
        "text": "Step 3"
      },
      {
        "id": "t4",
        "text": "Step 4"
      },
      {
        "id": "t5",
        "text": "Step 5"
      }
    ],
    "correctMapping": {
      "i1": "t1",
      "i2": "t2",
      "i3": "t3",
      "i4": "t4",
      "i5": "t5"
    },
    "explanation": "Step 1: An endpoint submits a request for the IP address of a domain name. Step 2: The DNS submits a request to a root DNS server. Step 3: The DNS submits a request to the domain DNS server. Step 4: The DNS receives a reply from the domain DNS server. Step 5: The DNS responds to the endpoint."
  },
  {
    "id": "p10_q047",
    "type": "mcq",
    "question": "What must be considered for a locally switched FlexConnect AP if the VLANs that are used by the AP and client access are different?",
    "image": null,
    "options": [
      "The APs must be connected to the switch with multiple links in LAG mode.",
      "The native VLAN must match the management VLAN of the AP.",
      "The switch port mode must be set to trunk.",
      "IEEE 802.1Q trunking must be disabled on the switch port."
    ],
    "correctIndexes": [
      2
    ],
    "explanation": "You can configure the LAN uplink interface of a FlexConnect AP as either an access port or as a trunk. For security and reliability reasons, it is recommended to segregate the client traffic from the management VLAN, and so to configure the AP's switchport as a trunk, with separately tagged VLANs for locally switched client traffic. Answer B is not correct as it should be \"The native VLAN must match the native VLAN of the AP\" (not the management VLAN)."
  },
  {
    "id": "p10_q048",
    "type": "mcq",
    "question": "Which command configures the Cisco WLC to prevent a serial session with the WLC CLI from being automatically logged out?",
    "image": null,
    "options": [
      "config sessions maxsessions 0",
      "config serial timeout 9600",
      "config serial timeout 0",
      "config sessions timeout 0"
    ],
    "correctIndexes": [
      2
    ],
    "explanation": "The CLI automatically logs you out without saving any changes after 5 minutes of inactivity. You can set the automatic logout from 0 (never log out) to 160 minutes using the config serial timeout command. To prevent SSH or Telnet sessions from timing out, run the config sessions timeout 0 command. This question asks about the serial session so the first command is the correct answer."
  },
  {
    "id": "p10_q049",
    "type": "mcq",
    "question": "Which two IPv6 addresses are used to provide connectivity between two routers on a shared link? (Choose two)",
    "image": null,
    "options": [
      "2002::512:1204b:1111::1/64",
      "ff06:bb43:cc13:dd16:1bb:ff14:7545:234d",
      "FF02::0001:FF00:0000/104",
      "2001:701:104b:1111::1/64",
      "::ffff:10.14.101.1/96"
    ],
    "correctIndexes": [
      3,
      4
    ],
    "explanation": "To provide connectivity between two routers on a shared link, global unicast addresses or link-local addresses are typically used. Answer D is correct as this is a global unicast address, valid for router-to-router communication on a shared link. Answer A is not correct as it has two double colons \"::\". This answer also has another error in \"1204b\" which has 5 hexadecimal numbers in an octet (an IPv6 octet only has a maximum of 4 hexadecimal numbers). FF02::0001:FF00:0000 is an IPv6 multicast address that is part of the solicited-node multicast group. The address ff06:bb43:cc13:dd16:1bb:ff14:7545:234d is a site-local IPv6 multicast address. Multicast addresses are used for group communication, not direct connectivity between two routers so answer B and answer C are not correct."
  },
  {
    "id": "p10_q050",
    "type": "mcq",
    "question": "Refer to the exhibit. An architect is managing a wireless network with APs from several branch offices connecting to the WLC in the data center. There is a new requirement for a single WLAN to process the client data traffic without sending it to the WLC. Which action must be taken to complete the request?",
    "image": "p10_q050.png",
    "options": [
      "Enable local HTTP profiling",
      "Enable FlexConnect Local Switching",
      "Enable local DHCP Profiling",
      "Enable Disassociation Imminent"
    ],
    "correctIndexes": [
      1
    ],
    "explanation": "FlexConnect AP can perform standalone client authentication and switch VLAN traffic locally even when it's disconnected to the WLC (Local Switching)"
  },
  {
    "id": "p10_q051",
    "type": "mcq",
    "question": "What is a function of MAC address learning?",
    "image": null,
    "options": [
      "It is disabled by default on all interfaces connected to trunks",
      "It increases security on the management VLAN",
      "It is enabled by default on all VLANs and interfaces",
      "It increases the potential for MAC address flooding"
    ],
    "correctIndexes": [
      2
    ],
    "explanation": ""
  },
  {
    "id": "p10_q052",
    "type": "mcq",
    "question": "A Cisco engineer at a new branch office is configuring a wireless network with access points that connect to a controller that is based at corporate headquarters. Wireless client traffic must terminate at the branch office and access-point survivability is required in the event of a WAN outage. Which access point mode must be selected?",
    "image": null,
    "options": [
      "Lightweight with local switching disabled",
      "Local with AP fallback enabled",
      "OfficeExtend with high availability disabled",
      "FlexConnect with local switching enabled"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": ""
  },
  {
    "id": "p10_q053",
    "type": "mcq",
    "question": "What is an advantage of using auto mode versus static mode for power allocation when an access point is connected to a PoE switch port?",
    "image": null,
    "options": [
      "The default level is used for the access point",
      "It detects the device is a powered device",
      "All four pairs of the cable are used",
      "Power policing is enabled at the same time"
    ],
    "correctIndexes": [
      1
    ],
    "explanation": "The switch supports these PoE modes: auto - The switch automatically detects if the connected device requires power. If the switch discovers a powered device connected to the port and if the switch has enough power, it grants power, updates the power budget, turns on power to the port on a first-come, first-served basis, and updates the LEDs. static - The switch pre-allocates power to the port (even when no powered device is connected) and guarantees that power will be available for the port."
  },
  {
    "id": "p10_q054",
    "type": "dragdrop",
    "question": "Refer to the exhibit.\n\nR1# show ip route | begin gateway\nGateway of last resort is not set\n    172.16.0.0/16 is variably subnetted, 5 subnets, 5 masks\nO   172.16.2.128/25 [110/3184437] via 207.165.200.250, 00:00:24, Serial0/0/0\nO   172.16.3.64/27 [110/3184437] via 207.165.200.250, 00:00:24, Serial0/0/0\nO   172.16.3.128/28 [110/3184437] via 207.165.200.250, 00:00:24, Serial0/0/0\nO   172.16.3.192/29 [110/3184437] via 207.165.200.250, 00:00:24, Serial0/0/0\nO   172.16.4.0/23 [110/3184437] via 207.165.200.250, 00:00:24, Serial0/0/0\n    207.165.200.0/24 is variably subnetted, 4 subnets, 2 masks\nC   207.165.200.248/30 is directly connected, Serial0/0/0\nL   207.165.200.249/32 is directly connected, Serial0/0/0\nC   207.165.200.252/30 is directly connected, Serial0/0/1\nL   207.165.200.253/32 is directly connected, Serial0/0/1\n\nDrag and drop the learned prefixes from the left onto the subnet masks on the right.",
    "image": null,
    "items": [
      {
        "id": "i1",
        "text": "172.16.3.128"
      },
      {
        "id": "i2",
        "text": "172.16.3.64"
      },
      {
        "id": "i3",
        "text": "172.16.2.128"
      },
      {
        "id": "i4",
        "text": "172.16.3.192"
      },
      {
        "id": "i5",
        "text": "172.16.4.0"
      }
    ],
    "targets": [
      {
        "id": "t1",
        "text": "255.255.254.0"
      },
      {
        "id": "t2",
        "text": "255.255.255.128"
      },
      {
        "id": "t3",
        "text": "255.255.255.224"
      },
      {
        "id": "t4",
        "text": "255.255.255.240"
      },
      {
        "id": "t5",
        "text": "255.255.255.248"
      }
    ],
    "correctMapping": {
      "i5": "t1",
      "i3": "t2",
      "i2": "t3",
      "i1": "t4",
      "i4": "t5"
    },
    "explanation": "172.16.4.0 - 255.255.254.0; 172.16.2.128 - 255.255.255.128; 172.16.3.64 - 255.255.255.224; 172.16.3.128 - 255.255.255.240; 172.16.3.192 - 255.255.255.248."
  },
  {
    "id": "p10_q055",
    "type": "dragdrop",
    "question": "Drag and drop the Ansible features from the left to the right. Not all features are used.",
    "image": null,
    "items": [
      {
        "id": "i1",
        "text": "uses the YAML language"
      },
      {
        "id": "i2",
        "text": "executes modules via SSH by default"
      },
      {
        "id": "i3",
        "text": "pushes configurations to the client"
      },
      {
        "id": "i4",
        "text": "uses agents to manage hosts"
      },
      {
        "id": "i5",
        "text": "requires clients to pull configurations from the server"
      },
      {
        "id": "i6",
        "text": "operates without agents"
      }
    ],
    "targets": [
      {
        "id": "t1",
        "text": "feature"
      },
      {
        "id": "t2",
        "text": "feature"
      },
      {
        "id": "t3",
        "text": "feature"
      },
      {
        "id": "t4",
        "text": "feature"
      }
    ],
    "correctMapping": {
      "i1": "t1",
      "i2": "t2",
      "i3": "t3",
      "i6": "t4"
    },
    "explanation": "Ansible: Configuration Language YAML/Python, Architecture Agentless (Client only), Deployment Method Push Model, Transport Mechanism SSH/NETCONF, Port used TCP port 22. So Ansible uses the YAML language, executes modules via SSH by default, pushes configurations to the client, and operates without agents. It does not use agents to manage hosts, and it does not require clients to pull configurations from the server (that is Puppet/Chef, which use a Pull Model)."
  },
  {
    "id": "p10_q056",
    "type": "mcq",
    "question": "Refer to the exhibit.\n\n```\n--Some output missing--\nRouting Descriptor Blocks:\n* directly connected, via Ethernet0/1\n    Route metric is 0, traffic share count is 1\n\nCPE# ping 203.0.113.1\nType escape sequence to abort.\nSending 5, 100-byte ICMP Echos to 203.0.113.1, timeout is 2 seconds:\n!!!!!\nSuccess rate is 100 percent (5/5), round-trip min/avg/max = 1/1/1 ms\n\nCPE# show ip route\nGateway of last resort is 198.51.100.1 to network 0.0.0.0\nB*  0.0.0.0/0 [20/0] via 198.51.100.1, 00:02:07\n    198.51.100.0/24 is variably subnetted, 2 subnets, 2 masks\nC        198.51.100.0/30 is directly connected, Ethernet0/0\nL        198.51.100.2/32 is directly connected, Ethernet0/0\n    203.0.113.0/24 is variably subnetted, 2 subnets, 2 masks\nC        203.0.113.0/30 is directly connected, Ethernet0/1\nL        203.0.113.2/32 is directly connected, Etheraet0/1\n```\n\nAfter configuring a new static route on the CPE, the engineer entered this series of commands to verify that the new configuration is operating normally. When is the static default route installed into the routing table?",
    "image": null,
    "options": [
      "when the default route learned over external BGP becomes invalid",
      "when 203.0.113.1 is no longer reachable as a next hop",
      "when the default route learned over external BGP changes its next hop",
      "when a route to 203.0.113.1 is learned via BGP"
    ],
    "correctIndexes": [
      0
    ],
    "explanation": "Maybe in the missing output at the top of the exhibit is about configuring a static default route (with command \"ip route 0.0.0.0 0.0.0.0 ...\"). But in the routing table of CPE router we only see a default route learned via BGP. We did not see the static default route because it was configured with a higher AD than that of the default route learned via BGP. Therefore only when the current default route becomes invalid then the default static route would be installed into the routing table."
  },
  {
    "id": "p10_q057",
    "type": "mcq",
    "question": "Refer to the exhibit.\n\nWireless LAN access must be set up to force all clients from the NA WLAN to authenticate against the local database. The WLAN is configured for local EAP authentication. The time that users access the network must not be limited. Which action completes this configuration?",
    "image": "p10_q057.png",
    "options": [
      "Check the Guest User Role check box",
      "Clear the Lifetime (seconds) value",
      "Set the Lifetime (seconds) value to 0",
      "Uncheck the Guest User check box"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "The users created in the \"Local Net Users\" are stored in the local database. With the \"Guest User\" check box enabled, we have to set the time for that user. The \"Lifetime\" is the amount of time that the guest user account is to remain active. The valid range is 60 to 2,592,000 seconds (30 days) inclusive, and the default setting is 86,400 seconds.\n\nIf we don't want to limit the time for that user, uncheck the \"Guest User\" check box."
  },
  {
    "id": "p10_q058",
    "type": "mcq",
    "question": "Which remote access protocol provides unsecured remote CLI access?",
    "image": null,
    "options": [
      "Telnet",
      "SSH",
      "console",
      "Bash"
    ],
    "correctIndexes": [
      0
    ],
    "explanation": ""
  },
  {
    "id": "p10_q059",
    "type": "mcq",
    "question": "Refer to the exhibit.\n\nAn engineer must configure the interface that connects to PC1 and secure it in a way that only PC1 is allowed to use the port. No VLAN tagging can be used except for a voice VLAN. Which command sequence must be entered to configure the switch?",
    "image": "p10_q059.png",
    "options": [
      "SW1(config-if)#switchport mode nonegotiate\nSW1(config-if)#switchport port-security\nSW1(config-if)#switchport port-security maximum 1",
      "SW1(config-if)#switchport mode access\nSW1(config-if)#switchport port-security\nSW1(config-if)#switchport port-security mac-address 0050.7966.6800",
      "SW1(config-if)#switchport mode dynamic desirable\nSW1(config-if)#switchport port-security mac-address 0050.7966.6800\nSW1(config-if)#switchport port-security mac-address sticky",
      "SW1(config-if)#switchport mode dynamic auto\nSW1(config-if)#switchport port-security\nSW1(config-if)#switchport port-security violation restrict"
    ],
    "correctIndexes": [
      1
    ],
    "explanation": ""
  },
  {
    "id": "p10_q060",
    "type": "mcq",
    "question": "Refer to the exhibit.\n\nA public IPv6 address must be configured for internet access. Which command must be configured on the R2 WAN interface to the service provider?",
    "image": "p10_q060.png",
    "options": [
      "ipv6 address fe80::260:3EFF:FE11:6770 link-local",
      "ipv6 address fe80: :/10",
      "ipv6 address 2001:db8:433:47:4620:ffff:ffff:ffff/64 anycast",
      "ipv6 address 2001:db8:123:45::4/64"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": ""
  },
  {
    "id": "p10_q061",
    "type": "dragdrop",
    "question": "Drag and drop the device behaviors from the left onto the matching HSRP state on the right.",
    "image": null,
    "items": [
      {
        "id": "i1",
        "text": "has heard from the neighbor device and is receiving hello packets"
      },
      {
        "id": "i2",
        "text": "is forwarding packets"
      },
      {
        "id": "i3",
        "text": "is ready to forward packets if the device that is currently forwarding packets fails"
      },
      {
        "id": "i4",
        "text": "is transmitting and receiving hello packets"
      },
      {
        "id": "i5",
        "text": "is waiting to hear from the neighbor device"
      }
    ],
    "targets": [
      {
        "id": "t1",
        "text": "Learn"
      },
      {
        "id": "t2",
        "text": "Active"
      },
      {
        "id": "t3",
        "text": "Listen"
      },
      {
        "id": "t4",
        "text": "Speak"
      },
      {
        "id": "t5",
        "text": "Standby"
      }
    ],
    "correctMapping": {
      "i5": "t1",
      "i2": "t2",
      "i1": "t3",
      "i4": "t4",
      "i3": "t5"
    },
    "explanation": "When in operation, HSRP devices are configured into one of many states:\nActive - This is the state of the device that is actively forwarding traffic.\nInit or Disabled - This is the state of a device that is not yet ready or able to participate in HSRP.\nLearn - This is the state of a device that has not yet determined the virtual IP address and has not yet seen a hello message from an active device.\nListen - This is the state of a device that is receiving hello messages.\nSpeak - This is the state of a device that is sending and receiving hello messages.\nStandby - This is the state of a device that is prepared to take over the traffic forwarding duties from the active device."
  },
  {
    "id": "p10_q062",
    "type": "mcq",
    "question": "Which two functions does a WLC perform in the lightweight access-point architecture that an AP performs independently in an autonomous architecture? (Choose two)",
    "image": null,
    "options": [
      "handling the association, authentication, and roaming of wireless clients",
      "encrypting and decrypting traffic that uses the WAP protocol family",
      "preventing collisions between wireless clients on the same RF channel",
      "managing RF channels, including transmission power",
      "sending and processing beacon frames"
    ],
    "correctIndexes": [
      0,
      3
    ],
    "explanation": "This question asks what the WLC can do for the AP or which functions are moved from AP to WLC in lightweight access-point architecture.\n\nThe wireless clients encrypt and decrypt the traffic, not the AP -> Answer B is not correct.\n\nThe wireless clients also run CSMA/CA to prevent collisions between them, not the AP -> Answer C is not correct.\n\nWith wireless networking, we have real-time and management functions. The AP should handle real-time functions, but everything that is not delay-sensitive can do from a central location. We separate the following management and real-time functions of the AP:\n\n+ Management functions:\n++ Client authentication (-> Answer A is correct)\n++ Security management\n++ Association and reassociation (roaming)\n++ Quality of Service (QoS)\n\n+ Real-time functions:\n++ Transmission of 802.11 frames\n++ MAC management\n++ Encryption\n\nSince these functions are not real-time, we can move them to a central point, the WLC. We take away some of the intelligence of the AP, which is why we call them lightweight APs (LAP). We move this intelligence to the WLC.\n\nRadio Resource Management (RRM) allows the controller to dynamically control power and channel assignment of APs -> Answer D is correct."
  },
  {
    "id": "p10_q063",
    "type": "mcq",
    "question": "Refer to the exhibit.\n\nCurrent Neighbor Relationship\nNeighbor ID     Pri   State     Dead Time   Address        Interface\n192.168.1.1     1     FULL/DR   00:00:33    192.168.1.1    GigabitEthernet0/0\n\nDesired Neighbor Relationship\nNeighbor ID     Pri   State     Dead Time   Address        Interface\n192.168.1.1     0     FULL/ -   00:00:31    192.168.1.1    GigabitEthernet0/0\n\nHow must OSPF be configured on the GigabitEthernet0/0 interface of the neighbor device to achieve the desired neighbor relationship?",
    "image": null,
    "options": [
      "Router(config)#interface GigabitEthernet 0/0\nRouter(config-if)#ip ospf cost 5",
      "Router(config)#interface GigabitEthernet 0/0\nRouter(config-if)#ip ospf 1 area 2",
      "Router(config)#interface GigabitEthernet 0/0\nRouter(config-if)#ip ospf network point-to-point",
      "Router(config)#interface GigabitEthernet 0/0\nRouter(config-if)#ip ospf priority 1"
    ],
    "correctIndexes": [
      2
    ],
    "explanation": "We see the desired neighbor relationship does not have DR/BDR so we have to set the network type to \"point-to-point\"."
  },
  {
    "id": "p10_q064",
    "type": "mcq",
    "question": "What causes a port to be placed in the err-disabled state?",
    "image": null,
    "options": [
      "latency",
      "nothing plugged into the port",
      "shutdown command issued on the port",
      "link flapping"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "Link flap means that the interface continually goes up and down in a Cisco Switch. The interface is put into the errdisabled state if it flaps more than five times in 10 seconds. The common cause of link flap is a Layer 1 issue such as a bad cable, duplex mismatch, or bad Gigabit Interface Converter (GBIC) card. Look at the console messages or the messages that were sent to the syslog server that state the reason for the port shutdown.\n\n13w0d: %PM-4-ERR_DISABLE: link-flap error detected on Fa0/28, putting Fa0/28 in err-disable state"
  },
  {
    "id": "p11_q029",
    "type": "mcq",
    "question": "Refer to the exhibit.\n\n```\n{\n  \"SW1\" : [\"Ten-GigabitEthernet0/0\", \"Ten-GigabitEthernet0/1\"],\n  \"SW2\" : [\"Ten-GigabitEthernet0/0\", \"Ten-GigabitEthernet0/1\"],\n  \"SW3\" : [\"Ten-GigabitEthernet0/0\", \"Ten-GigabitEthernet0/1\"],\n  \"SW4\" : [\"Ten-GigabitEthernet0/0\", \"Ten-GigabitEthernet0/1\"]\n}\n```\n\nHow many JSON objects are presented?",
    "image": null,
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctIndexes": [
      0
    ],
    "explanation": "A JSON object contains zero, one, or more key-value pairs, also called properties. The object is surrounded by curly braces {} so there is only one object in this question."
  },
  {
    "id": "p11_q030",
    "type": "mcq",
    "question": "Refer to the exhibit. PC1 regularly sends 1800 Mbps of traffic to the server. A network engineer needs to configure the EtherChannel to disable Port Channel 1 between SW1 and SW2 when the Ge0/0 and Ge0/1 ports on SW2 go down. Which configuration must the engineer apply to the switch?",
    "image": "p11_q030.png",
    "options": [
      "SW2#configure terminal\nSW2(config)# interface port-channel 1\nSW2(config-if)#lacp port-priority 32000",
      "SW2#configure terminal\nSW2(config)#interface port-channel 1\nSW2(config-if)#lacp max-bundle 2",
      "SW2#configure terminal\nSW2(config)#lacp system-priority 32000",
      "SW2#configure terminal\nSW2(config)#interface port-channel 1\nSW2(config-if)#port-channel min-links 2"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "The port-channel min-links command specifies the minimum number of interfaces that the configuration mode LAG requires to be active. If there are fewer ports than specified by this command, the port channel interface does not become active."
  },
  {
    "id": "p11_q031",
    "type": "mcq",
    "question": "Which IPv6 address range is suitable for anycast addresses for distributed services such DHCP or DNS?",
    "image": null,
    "options": [
      "FF00:1/12",
      "2001:db8:0234:ca3e::1/128",
      "2002:db84:3f37:ca98:be05:8/64",
      "FE80::1/10"
    ],
    "correctIndexes": [
      1
    ],
    "explanation": "FF00::/8 range is used for IPv6 multicast -> The first octet is FF (1111 1111) -> Answer A is not correct.\n\nFE80::/10 is link-local address -> Answer D is not correct.\n\nThe 2002::/16 prefix is used for 6to4, which requires the next 32 bits (after the 16 bit prefix) to be a global unicast IPv4 address -> Answer C is not correct.\n\nNote: Anycast addresses are syntactically indistinguishable from unicast addresses, because anycast addresses are allocated from the unicast address space. Assigning a unicast address to more than one interface makes a unicast address an anycast address. Nodes to which the anycast address is assigned must be explicitly configured to recognize that the address is an anycast address."
  },
  {
    "id": "p11_q032",
    "type": "mcq",
    "question": "Refer the exhibit.\n\n```\nR19#show int fa0/0\nFastEthernet0/0 is up, line protocol is up\nHardware is DEC21140, address is ca02.7788.0000 (bia ca02.7788.0000)\nDescription: SALES_SUBNET\nInternet address is 10.32.102.2/30\nMTU 1500 bytes, BW 100000 Kbit/sec, DLY 100 usec,\nreliability 255/255, txload 1/255, rxload 1/255\nEncapsulation ARPA, loopback not set\nKeepalive set (60 sec)\nFull-duplex, 100Mb/s, 100BaseTX/FX\nARP type: ARPA, ARP Timeout 04:00:00\nLast input 00:00:01, output 00:00:00, output hang never\nLast clearing of \"show interface\" counters never\nInput queue: 0/300/0/0 (size/max/drops/flushes); Total output drops: 135298429\nQueueing strategy: fifo\nOutput queue: 0/300 (size/max)\n30 second input rate 0 bits/sec, 0 packets/sec\n30 second output rate 0 bits/sec, 0 packets/sec\n73310 packets input, 7101162 bytes\nReceived 73115 broadcasts (0 IP multicasts)\n0 runts, 0 giants, 0 throttles\n0 input errors, 4 CRC, 0 frame, 0 overrun, 0 ignored\n0 watchdog\n0 input packets with dribble condition detected\n3927513096455 packets output, 14404034810952 bytes, 0 underruns\n0 output errors, 11 collisions, 0 interface resets\n0 unknown protocol drops\n0 babbles, 0 late collision, 0 deferred\n0 lost carrier, 0 no carrier\n0 output buffer failures, 0 output buffers swapped out\n```\n\nWhat is the cause of poor performance on router R19?",
    "image": null,
    "options": [
      "excessive collisions",
      "speed and duplex mismatch",
      "port oversubscription",
      "excessive CRC errors"
    ],
    "correctIndexes": [
      2
    ],
    "explanation": "We see the \"Total output drops: 135298429\" is high.\n\nTypically, the output drops can occur if QoS is configured and does not provide enough bandwidth to certain class of packets. It also occurs when the hardware hits an oversubscription.\n\nNote: Total output drops: The number of packets dropped because the output queue is full. A common cause of this might be traffic from a high bandwidth link being switched to a lower bandwidth link or traffic from multiple inbound links being switched to a single outbound link."
  },
  {
    "id": "p11_q033",
    "type": "mcq",
    "question": "An engineer is configuring a switch port that is connected to a VoIP handset. Which command must the engineer configure to enable port security with a manually assigned MAC address of abcd.abcd.abcd on voice VLAN 4?",
    "image": null,
    "options": [
      "switchport port-security mac-address abcd.abcd.abcd",
      "switchport port-security mac-address abcd.abcd.abcd vlan 4",
      "switchport port-security mac-address sticky abcd.abcd.abcd vlan 4",
      "switchport port-security mac-address abcd.abcd.abcd vlan voice"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "We tested the port-security configuration under Web-IOU with IOSv15.2 but there is no \"vlan voice\" keyword. But in a Cisco reference, we can find such command:\n\nDevice(config-if)# switchport port-security mac-address 0000.0000.0004 vlan voice\n\nSo we believe answer D is the best choice."
  },
  {
    "id": "p11_q034",
    "type": "dragdrop",
    "question": "Drag and drop the DNS commands from the left onto their effects on the right.",
    "image": null,
    "items": [
      {
        "id": "i1",
        "text": "ip domain-name"
      },
      {
        "id": "i2",
        "text": "ip domain-lookup"
      },
      {
        "id": "i3",
        "text": "ip name-server"
      },
      {
        "id": "i4",
        "text": "show hosts"
      },
      {
        "id": "i5",
        "text": "ip host switch_1 192.168.0.1"
      }
    ],
    "targets": [
      {
        "id": "t1",
        "text": "enables host-to-IP-address translation"
      },
      {
        "id": "t2",
        "text": "adds an entry to the host table"
      },
      {
        "id": "t3",
        "text": "displays address-mapping information"
      },
      {
        "id": "t4",
        "text": "specifies the IP address of the DNS server"
      },
      {
        "id": "t5",
        "text": "completes the FQDN of the DNS server"
      }
    ],
    "correctMapping": {
      "i2": "t1",
      "i5": "t2",
      "i4": "t3",
      "i3": "t4",
      "i1": "t5"
    },
    "explanation": ""
  },
  {
    "id": "p11_q035",
    "type": "mcq",
    "question": "How does encryption protect the wireless network?",
    "image": null,
    "options": [
      "via integrity checks to identify wireless forgery attacks in the frame",
      "via specific ciphers to detect and prevent zero-day network attacks",
      "via an algorithm to change wireless data so that only the access point and client understand it",
      "via a policy to prevent unauthorized users from communicating on the wireless network"
    ],
    "correctIndexes": [
      2
    ],
    "explanation": ""
  },
  {
    "id": "p11_q036",
    "type": "mcq",
    "question": "Which device segregates a network into separate zones that have their own security policies?",
    "image": null,
    "options": [
      "IPS",
      "firewall",
      "access point",
      "switch"
    ],
    "correctIndexes": [
      1
    ],
    "explanation": ""
  },
  {
    "id": "p11_q037",
    "type": "mcq",
    "question": "What is a specification for SSIDS?",
    "image": null,
    "options": [
      "They are a Cisco proprietary security feature.",
      "They must include one number and one letter.",
      "They define the VLAN on a switch.",
      "They are case sensitive."
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "The SSID is limited to a maximum length of 32 bytes. When represented in ASCII form, the characters of the SSID are case-sensitive. This means that \"9tut\" is a different network than \"9TUT\"."
  },
  {
    "id": "p11_q038",
    "type": "mcq",
    "question": "Refer to the exhibit.\n\n```\nSW1#show interface\ninterface FastEthernet0/0\n  switchport access vlan 2\n  switchport mode access\n```\n\nAn engineer is configuring a new Cisco switch NewSW, to replace SW2. The details have been provided:\n* Switches SW1 and SW2 are third-party devices without support for trunk ports\n* The existing connections must be maintained between PC1 PC2 and PC3\n* Allow the switch to pass traffic from future VLAN 10. Which configuration must be applied?",
    "image": "p11_q038.png",
    "options": [
      "Option A:\nNewSW(config)#interface f0/0\nNewSW(config-if)#switchport mode trunk\nNewSW(config-if)#switchport trunk allowed vlan 2,10\nNewSW(config-if)#switchport trunk native vlan 2",
      "Option B:\nNewSW(config)#interface f0/0\nNewSW(config-if)#switchport mode trunk\nNewSW(config-if)#switchport trunk allowed vlan 10\nNewSW(config-if)#switchport trunk native vlan 10",
      "Option C:\nNewSW(config)#interface f0/0\nNewSW(config-if)#switchport mode access\nNewSW(config-if)#switchport trunk allowed vlan 2,10\nNewSW(config-if)#switchport trunk native vlan 10",
      "Option D:\nNewSW(config)#interface f0/0\nNewSW(config-if)#switchport mode access\nNewSW(config-if)#switchport trunk allowed vlan 2,10\nNewSW(config-if)#switchport trunk native vlan 2"
    ],
    "correctIndexes": [
      0
    ],
    "explanation": "We can configure trunking on the NewSW and set the native VLAN to the access VLAN 2 of SW1 so that untagged frames received from SW1 will be placed into VLAN 2."
  },
  {
    "id": "p11_q039",
    "type": "mcq",
    "question": "What is a reason to implement IPv4 private addressing?",
    "image": null,
    "options": [
      "Reduce the risk of a network security breach",
      "Comply with PCI regulations",
      "Comply with local law",
      "Reduce the size of the forwarding table on network routers"
    ],
    "correctIndexes": [
      0
    ],
    "explanation": ""
  },
  {
    "id": "p11_q040",
    "type": "mcq",
    "question": "Which is a fact related to FTP?",
    "image": null,
    "options": [
      "It uses block numbers to identify and mitigate data-transfer errors",
      "It always operates without user authentication",
      "It relies on the well-known UDP port 69.",
      "It uses two separate connections for control and data traffic"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "FTP communicates using two TCP connections. Control traffic is exchanged over TCP/21, and data transmission is performed over TCP/20."
  },
  {
    "id": "p11_q041",
    "type": "mcq",
    "question": "Which two protocols are used by an administrator for authentication and configuration on access points? (Choose two)",
    "image": null,
    "options": [
      "Kerberos",
      "802.1Q",
      "802.1x",
      "TACACS+",
      "RADIUS"
    ],
    "correctIndexes": [
      2,
      4
    ],
    "explanation": "You can configure 802.1X authentication between a lightweight access point and a Cisco switch."
  },
  {
    "id": "p11_q042",
    "type": "mcq",
    "question": "Refer to the exhibit.\n\n```\nCPE1# show protocols e0/1\nEthernet0/1 is up, line protocol is up\n  Internet address is 10.0.12.2/24\n\nCPE1#show ip access-list LAN\nStandard IF access list LAN\n 10 permit 10.0.12.0, wildcard bits 0.0.0.255\n\nCPE1# show ip nat translations\n\nCPE1# show ip net statistics\n\nTotal active translations: 0 (0 static, 0 dynamic, 0 extended)\nPeak translations: 0\nOutside interfaces:\nInside interfaces:\n Ethernet0/1\nHits: 0 Misses: 0\nCEF Translated packets: 0, CEF Funted packets: 0\nExpired translations: 0\nDynamic mappings:\n-- Inside Source\n[Id: 1] access-list LAN pool NATPOOL refcount 0\n  pool NATPOOL: netmask 255.255.255.0\n    start 198.51.100.11 end 198.51.100.20\n    type generic, total addresses 10, allocated 0 (0%), misses 0\n\nTotal doors: 0\nAppl doors: 0\nNormal doors: 0\nQueued Packets: 0\n```\n\nWhat is the next step to complete the implementation for the partial NAT configuration shown?",
    "image": null,
    "options": [
      "Reconfigure the static NAT entries that overlap the NAT pool",
      "Configure the NAT outside interface",
      "Modify the access list for the internal network on e0/1",
      "Apply the ACL to the pool configuration"
    ],
    "correctIndexes": [
      1
    ],
    "explanation": "We see the line \"Outside interfaces: \" is still empty which means we have not configured an outside interface yet."
  },
  {
    "id": "p11_q043",
    "type": "mcq",
    "question": "Which type of IPv4 address type helps to conserve the globally unique address classes?",
    "image": null,
    "options": [
      "multicast",
      "private",
      "loopback",
      "public"
    ],
    "correctIndexes": [
      1
    ],
    "explanation": ""
  },
  {
    "id": "p11_q044",
    "type": "dragdrop",
    "question": "Drag and drop the IPv6 address types from the left onto their description on the right.",
    "image": null,
    "items": [
      {
        "id": "i1",
        "text": "2001:DB8::bced:1234:456d:aacc"
      },
      {
        "id": "i2",
        "text": "FD00:0000:0000:1a2d:a153:3992:a19d:ccca"
      },
      {
        "id": "i3",
        "text": "FE80::abcf:ffff:12de:3992"
      },
      {
        "id": "i4",
        "text": "FF05::23:becf:22:1111"
      }
    ],
    "targets": [
      {
        "id": "t1",
        "text": "multicast address used only locally within the site"
      },
      {
        "id": "t2",
        "text": "address that is automatically created on a link when IPv6 is enabled on an interface"
      },
      {
        "id": "t3",
        "text": "address that is prohibited from routing to the Internet"
      },
      {
        "id": "t4",
        "text": "address that is unique and reserved for documentation purposes"
      }
    ],
    "correctMapping": {
      "i4": "t1",
      "i3": "t2",
      "i2": "t3",
      "i1": "t4"
    },
    "explanation": "FF00::/8 range is used for IPv6 multicast -> The first octet is FF which indicates a multicast address.\n\nAddress that is automatically created on a link when IPv6 is enabled on an interface -> Link-local address in the range of FE80::/10\n\nAddress that is prohibited from routing to the Internet -> Site-local address (or Unique local address). They are analogous to IPv4's private address classes. They start with FC00::/7 (for used in private networks) -> The first octet can be FC or FD. However when you implement this you have to set the L-bit (the right-most bit of the first octet) to 1 which means that the first two digits will be FD."
  },
  {
    "id": "p11_q045",
    "type": "dragdrop",
    "question": "Drag and drop the wireless standards from the left onto the number of nonoverlapping channels they support on the right.",
    "image": null,
    "items": [
      {
        "id": "i1",
        "text": "802.11a"
      },
      {
        "id": "i2",
        "text": "802.11b"
      },
      {
        "id": "i3",
        "text": "802.11g"
      },
      {
        "id": "i4",
        "text": "802.11n 2.4 GHz"
      },
      {
        "id": "i5",
        "text": "802.11n 5 GHz"
      }
    ],
    "targets": [
      {
        "id": "t1",
        "text": "3 Non-Overlapping Channels"
      },
      {
        "id": "t2",
        "text": "23 Non-Overlapping Channels"
      }
    ],
    "correctMapping": {
      "i2": "t1",
      "i3": "t1",
      "i4": "t1",
      "i1": "t2",
      "i5": "t2"
    },
    "explanation": "For 802.11n, in the 2.4 GHz band, there are three non-overlapping 20 MHz channels or one 40 MHz channel. In the 5 GHz band, twenty four non-overlapping 20 MHz or up to twelve 40 MHz channels exist.\n\nAlso in the table \"Comparison of 802.11 LAN Standards\" of the reference below, we can see the \"Maximum Non-Overlapping Channels (Americas)\" of 802.11b & 802.11g are 3."
  },
  {
    "id": "p11_q046",
    "type": "dragdrop",
    "question": "Drag and drop the statements about AAA from the left onto the corresponding AAA services on the right. Not all options are used.",
    "image": null,
    "items": [
      {
        "id": "i1",
        "text": "It permits and denies login attempts"
      },
      {
        "id": "i2",
        "text": "It records the amount of network resources consumed by the user"
      },
      {
        "id": "i3",
        "text": "It assigns per-user attributes"
      },
      {
        "id": "i4",
        "text": "It supports local, PPP, RADIUS, and TACACS+ options"
      },
      {
        "id": "i5",
        "text": "It restricts the CLI commands that a user is able to perform"
      },
      {
        "id": "i6",
        "text": "It tracks the services that a user is using"
      }
    ],
    "targets": [
      {
        "id": "t1",
        "text": "Authentication"
      },
      {
        "id": "t2",
        "text": "Authorization"
      }
    ],
    "correctMapping": {
      "i1": "t1",
      "i4": "t1",
      "i3": "t2",
      "i5": "t2"
    },
    "explanation": ""
  },
  {
    "id": "p11_q047",
    "type": "dragdrop",
    "question": "Drag and drop the cloud-computing components from the left onto the correct descriptions on the right.",
    "image": null,
    "items": [
      {
        "id": "i1",
        "text": "measured service"
      },
      {
        "id": "i2",
        "text": "broad network access"
      },
      {
        "id": "i3",
        "text": "rapid elasticity"
      },
      {
        "id": "i4",
        "text": "resource pooling"
      },
      {
        "id": "i5",
        "text": "on-demand self-service"
      }
    ],
    "targets": [
      {
        "id": "t1",
        "text": "The resource pool can expand quickly to meet demand"
      },
      {
        "id": "t2",
        "text": "The consumer can choose when to start or stop using the service"
      },
      {
        "id": "t3",
        "text": "The provider allocates CPU, memory, and disk from its shared compute resources to multiple customers"
      },
      {
        "id": "t4",
        "text": "The provider can bill the consumer in accordance with the level of usage"
      },
      {
        "id": "t5",
        "text": "The service is available from many types of devices and networks"
      }
    ],
    "correctMapping": {
      "i3": "t1",
      "i5": "t2",
      "i4": "t3",
      "i1": "t4",
      "i2": "t5"
    },
    "explanation": "On-demand self-service: A consumer can unilaterally provision computing capabilities, such as server time and network storage, as needed automatically without requiring human interaction with each service provider.\n\nBroad network access: Capabilities are available over the network and accessed through standard mechanisms that promote use by heterogeneous thin or thick client platforms (e.g., mobile phones, tablets, laptops, and workstations).\n\nResource pooling: The provider's computing resources are pooled to serve multiple consumers using a multi-tenant model, with different physical and virtual resources dynamically assigned and reassigned according to consumer demand. There is a sense of location independence in that the customer generally has no control or knowledge over the exact location of the provided resources but may be able to specify location at a higher level of abstraction (e.g., country, state, or datacenter). Examples of resources include storage, processing, memory, and network bandwidth.\n\nRapid elasticity: Capabilities can be elastically provisioned and released, in some cases automatically, to scale rapidly outward and inward commensurate with demand. To the consumer, the capabilities available for provisioning often appear to be unlimited and can be appropriated in any quantity at any time.\n\nMeasured service: Cloud systems automatically control and optimize resource use by leveraging a metering capability at some level of abstraction appropriate to the type of service (e.g., storage, processing, bandwidth, and active user accounts). Resource usage can be monitored, controlled, and reported, providing transparency for both the provider and consumer of the utilized service."
  },
  {
    "id": "p11_q048",
    "type": "mcq",
    "question": "Refer to the exhibit.\n\n```\nEIGRP: 192.168.12.0/24\nRIP: 192.168.12.0/27\nOSPF: 192.168.12.0/28\n```\n\nHow does the router manage traffic to 192.168.12.16?",
    "image": null,
    "options": [
      "It selects the RIP route because it has the longest prefix inclusive of the destination address.",
      "It load-balances traffic between all three routes.",
      "It chooses the OSPF route because it has the longest prefix inclusive of the destination address.",
      "It chooses the EIGRP route because it has the lowest administrative distance."
    ],
    "correctIndexes": [
      0
    ],
    "explanation": "The IP address 192.168.12.16 does not belong to OSPF subnet 192.168.12.0/28 (this subnet only ranges from 192.168.12.0 to 192.168.12.15) so RIP route will be selected as the longest prefix match."
  },
  {
    "id": "p11_q049",
    "type": "dragdrop",
    "question": "Drag and drop the VLAN port modes from the left onto the descriptions on the right.",
    "image": null,
    "items": [
      {
        "id": "i1",
        "text": "dynamic access"
      },
      {
        "id": "i2",
        "text": "tunnel"
      },
      {
        "id": "i3",
        "text": "static access"
      },
      {
        "id": "i4",
        "text": "private"
      },
      {
        "id": "i5",
        "text": "trunk"
      }
    ],
    "targets": [
      {
        "id": "t1",
        "text": "allows the port to belong to one VLAN when manually configured"
      },
      {
        "id": "t2",
        "text": "allows the port to be assigned automatically to one VLAN"
      },
      {
        "id": "t3",
        "text": "allows the port to belong to one or more VLANs"
      },
      {
        "id": "t4",
        "text": "allows the port to support a single VLAN across a service-provider network"
      },
      {
        "id": "t5",
        "text": "allows the port to communicate with others within the same community VLAN"
      }
    ],
    "correctMapping": {
      "i3": "t1",
      "i1": "t2",
      "i5": "t3",
      "i2": "t4",
      "i4": "t5"
    },
    "explanation": ""
  },
  {
    "id": "p11_q050",
    "type": "mcq",
    "question": "Refer to the exhibit.\n\n```\nCPE# show ipv6 route\nIPv6 Routing Table - default - 6 entries\nCodes: C - Connected, L - Local, S - Static, U - Per-user Static route\n       B - BGP, R - RIP, H - NHRP, II - ISIS L1\n       I2 - ISIS L2, IA - ISIS interarea, IS - ISIS summary, D - EIGRP\n       EX - EIGRP external, ND - ND Default, NDp - ND Prefix, DCE - Destination\n       NDr - Redirect, O - OSPF Intra, OI - OSPF Inter, OE1 - OSPF ext 1\n       OE2 - OSPF ext 2, ON1 - OSPF NSSA ext 1, ON2 - OSPF NSSA ext 2\n       la - LISP alt, lr - LISP site-registrations, ld - LISP dyn-eid\n       lA - LISP away, le - LISP extranet-policy, lp - LISP publications\nND ::/0 [2/0]\n     via FE80::A8BB:CCFF:FE00:200, Ethernet0/0\nNDp 2001:DB8:1234:1::/64 [2/0]\n     via Ethernet0/0, directly connected\nL 2001:DB8:1234:1:A8BB:CCFF:FE00:100/128 [0/0]\n     via Ethernet0/0, receive\nC 2001:DB8:1234:2::/64 [0/0]\n     via Ethernet0/1, directly connected\nL 2001:DB8:1234:2:A8BB:CCFF:FE00:110/128 [0/0]\n     via Ethernet0/1, receive\nL FF00::/8 [0/0]\nvia Null0, receive\n```\n\nThe administrator must configure a floating static default route that points to 2001:db8:1234:2::1 and replaces the current default route only if it fails. Which command must the engineer configure on the CPE?",
    "image": null,
    "options": [
      "ipv6 route ::/0 2001:db8:1234:2::1 2",
      "ipv6 route ::/0 2001:db8:1234:2::1 3",
      "ipv6 route ::/128 2001:db8:1234:2::1 3",
      "ipv6 route ::/0 2001:db8:1234:2::1 1"
    ],
    "correctIndexes": [
      1
    ],
    "explanation": "From the output line \"ND ::/0 [2/0]\" we learn that the current static default route has the AD of 2 so we have to configure the floating static default route with AD of 3 or greater so that it acts as a backup route."
  },
  {
    "id": "p11_q051",
    "type": "mcq",
    "question": "What is the benefit of using private IPv4 addressing?",
    "image": null,
    "options": [
      "to provide reliable connectivity between like devices",
      "to enable secure connectivity over the Internet",
      "to shield internal network devices from external access",
      "to be routable over an external network"
    ],
    "correctIndexes": [
      2
    ],
    "explanation": ""
  },
  {
    "id": "p11_q052",
    "type": "mcq",
    "question": "Which QoS feature drops traffic that exceeds the committed access rate?",
    "image": null,
    "options": [
      "weighted fair queuing",
      "FIFO",
      "shaping",
      "policing"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "Policing: is used to control the rate of traffic flowing across an interface. During a bandwidth exceed (crossed the maximum configured rate), the excess traffic is generally dropped or remarked."
  },
  {
    "id": "p11_q053",
    "type": "mcq",
    "question": "Two switches have been implemented and all interfaces are at the default configuration level. A trunk link must be implemented between two switches with these requirements:\n+ using an industry-standard trunking protocol\n+ permitting VLANs 1-10 and denying other VLANs\n\nHow must the interconnecting ports be configured?",
    "image": null,
    "options": [
      "switchport mode trunk\nswitchport trunk allowed vlans 1-10\nswitchport trunk native vlan 11",
      "switchport mode trunk\nswitchport trunk encapsulation dot1q\nswitchport trunk allowed vlans 1-10",
      "switchport mode dynamic desirable\nchannel-group 1 mode desirable\nswitchport trunk encapsulation isl\nswitchport trunk allowed vlan except 11-4094",
      "switchport mode dynamic\nchannel-protocol lacp\nswitchport trunk allowed vlans 1-10"
    ],
    "correctIndexes": [
      1
    ],
    "explanation": "\"Using an industry-standard trunking protocol\" so we have to use 802.1Q, not ISL."
  },
  {
    "id": "p11_q054",
    "type": "mcq",
    "question": "Refer to the exhibit.\n\nA network engineer is configuring a WLAN to connect with the 172.16.10.0/24 network on VLAN 20. The engineer wants to limit the number of devices that connect to the WLAN on the USERWL SSID to 125. Which configuration must the engineer perform on the WLC?",
    "image": "p11_q054.png",
    "options": [
      "In the WLAN configuration, set the Maximum Allowed Clients value to 125.",
      "In the Advanced configuration, set the DTIM value to 125.",
      "In the Controller IPv6 configuration, set the Throttle value to 125.",
      "In the Management Software activation configuration, set the Clients value to 125."
    ],
    "correctIndexes": [
      0
    ],
    "explanation": "In the example below, we can limit the number of clients that can access in a WLAN to 50 with the \"Maximum Allowed Clients\" field.\n\nReference: https://www.cisco.com/c/en/us/support/docs/wireless/4400-series-wireless-lan-controllers/113303-restrict-wlan-clients-00.html\n\nNote: DTIM stands for Delivery traffic indication map or message. It is basically an additional message added after the normal beacon broadcast by your router or access point."
  },
  {
    "id": "p11_q055",
    "type": "mcq",
    "question": "Why would a network administrator choose to implement automation in a network environment?",
    "image": null,
    "options": [
      "to centralize device information storage",
      "to simplify the process of maintaining a consistent configuration state across all devices",
      "to deploy the management plane separately from the rest of the network",
      "to implement centralized user account management"
    ],
    "correctIndexes": [
      1
    ],
    "explanation": ""
  },
  {
    "id": "p11_q056",
    "type": "mcq",
    "question": "When deploying a new network that includes both Cisco and third-party network devices, which redundancy protocol avoids the interruption of network traffic if the default gateway router fails?",
    "image": null,
    "options": [
      "FHRP",
      "VRRP",
      "HSRP",
      "GLBP"
    ],
    "correctIndexes": [
      1
    ],
    "explanation": "Only VRRP is an open standard protocol."
  }
];

var BATCH_F = [
  {
    "id": "p10_q065",
    "type": "mcq",
    "question": "Which function forwards frames to ports that have a matching destination MAC address?",
    "image": null,
    "options": [
      "frame pushing",
      "frame filtering",
      "frame flooding",
      "frame switching"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": ""
  },
  {
    "id": "p10_q066",
    "type": "mcq",
    "question": "Refer to the exhibit.\n\nThe SW1 and SW2 Gi0/0 ports have been preconfigured. An engineer is given these requirements:\n\n+ Allow all PCs to communicate with each other at Layer 3.\n+ Configure untagged traffic to use VLAN 5.\n+ Disable VLAN 1 from being used.\n\nWhich configuration set meets these requirements?",
    "image": "p10_q066.png",
    "options": [
      "Option A:\nSW1#\ninterface Gi0/1\nswitchport mode trunk\nswitchport trunk allowed vlan 5,7,9,108\n\ninterface Gi0/2\nswitchport mode trunk\nswitchport trunk allowed vlan 7,9,108\n\nSW2#\ninterface Gi0/1\nswitchport mode trunk\nswitchport trunk allowed vlan 7\n\ninterface Gi0/7\nswitchport mode trunk\nswitchport trunk allowed vlan 5,7,9,108",
      "Option B:\nSW1#\ninterface Gi0/1\nswitchport mode trunk\nswitchport trunk allowed vlan 5,7,9,108\nswitchport trunk native vlan 5\n\ninterface Gi0/2\nswitchport mode access\nswitchport trunk allowed vlan 7,9,108\n\nSW2#\ninterface Gi0/1\nswitchport mode access\nno switchport access vlan 1\nswitchport access vlan 7\n\ninterface Gi0/7\nswitchport mode trunk\nswitchport trunk allowed vlan 7,9,108\nswitchport trunk native vlan 5",
      "Option C:\nSW1#\ninterface Gi0/1\nswitchport mode trunk\nswitchport trunk allowed vlan 5,7,9,108\nswitchport trunk native vlan 5\n\ninterface Gi0/2\nswitchport mode trunk\nswitchport trunk allowed vlan 5,7,9,108\n\nSW2#\ninterface Gi0/1\nswitchport mode access\nswitchport access vlan 7\n\ninterface Gi0/7\nswitchport mode trunk\nswitchport trunk allowed vlan 7,9,108",
      "Option D:\nSW1#\ninterface Gi0/1\nswitchport mode trunk\nswitchport trunk allowed vlan 5,7,9,108\nswitchport trunk native vlan 5\n\ninterface Gi0/2\nswitchport mode trunk\nswitchport trunk allowed vlan 5,7,9,108\n\nSW2#\ninterface Gi0/1\nswitchport mode access\nswitchport access vlan 7\n\ninterface Gi0/7\nswitchport mode trunk\nswitchport trunk allowed vlan 5,7,9,108\nswitchport trunk native vlan 5"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "This question requires \"Configure untagged traffic to use VLAN 5\" so we must use the command \"switchport trunk native vlan 5\" on both Gi0/1 of Sw1 and Gi0/7 of Sw2 -> Only Option B and Option D are correct.\n\nIn order to allow all PCs to communicate with each other at Layer 3, interface Gi0/2 of SW1 must be configured as trunk, not access mode -> Only Option D is correct."
  },
  {
    "id": "p10_q067",
    "type": "mcq",
    "question": "Refer to the exhibit.\n\nSW1#show ip interface brief\nInterface          IP-Address    OK? Method Status Protocol\nFastEthernet0/1     unassigned    YES manual down    down\n\nSW1#show interface fa0/1 status\nPort     Name  Status       Vlan    Duplex   Speed  Type\nFa0/1          notconnect   1       a-full   a-100  10/100BaseTX\n\nWhat is the cause of the issue?",
    "image": null,
    "options": [
      "STP",
      "shutdown command",
      "port security",
      "wrong cable type"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "The \"Status\" of fa0/1 is \"notconnect\" so port security is not the issue or it would show the status of \"err-disabled\".\n\n\"Shutdown\" command is also not the issue as it would show \"Administratively down\" in the \"Status\" field of the \"show ip interface brief\" command.\n\nWith STP, even if the port is in \"Block\" (BLK) status but it is still in \"up/up\" state with the \"show ip interface brief\" command.\n\nWith wrong cable type, the port is in \"down/down\" state, same as there is no connected cable to the port."
  },
  {
    "id": "p10_q068",
    "type": "dragdrop",
    "question": "Refer to the exhibit.\n\nRouter1#show ip route\nGateway of last resort is 10.10.11.2 to network 0.0.0.0\n    209.165.200.0/27 is subnetted, 1 subnets\nB      209.165.200.224 [20/0] via 10.10.12.2,03:32:14\n    209.165.201.0/27 is subnetted, 1 subnets\nB      209.165.201.0 [20/0] via 10.10.12.2,02:26:53\n    209.165.202.0/27 is subnetted, 1 subnets\nB      209.165.202.128 [20/0] via 10.10.12.2,02:46:03\n    10.0.0.0/8 is variably subnetted, 10 subnets, 4 masks\nC      10.10.10.0/28 is directly connected, GigabitEthernet0/0\nC      10.10.11.0/30 is directly connected, FastEthernet2/0\nC      10.10.12.0/30 is directly connected, GigabitEthernet0/1\nO      10.10.13.0/25 [110/2] via 10.10.10.1, 00:00:04, GigabitEthernet0/0\nO      10.10.13.128/28 [110/2] via 10.10.10.1, 00:00:12, GigabitEthernet0/0\nO      10.10.13.144/28 [110/2] via 10.10.10.1, 00:01:57, GigabitEthernet0/0\nO      10.10.13.160/29 [110/2] via 10.10.10.1, 00:00:12, GigabitEthernet0/0\nO      10.10.13.208/29 [110/2] via 10.10.10.1, 00:01:57, GigabitEthernet0/0\nO      10.10.13.252/30 [110/2] via 10.10.10.1, 00:01:57, GigabitEthernet0/0\nS*     0.0.0.0/0 [1/0] via 10.10.11.2\n\nDrag and drop the subnet masks from the left onto the corresponding subnets on the right. Not all subnet masks are used.",
    "image": null,
    "items": [
      {
        "id": "i1",
        "text": "255.255.248.0"
      },
      {
        "id": "i2",
        "text": "255.255.255.128"
      },
      {
        "id": "i3",
        "text": "255.255.255.224"
      },
      {
        "id": "i4",
        "text": "255.255.255.240"
      },
      {
        "id": "i5",
        "text": "255.255.255.248"
      },
      {
        "id": "i6",
        "text": "255.255.255.252"
      }
    ],
    "targets": [
      {
        "id": "t1",
        "text": "10.10.13.0"
      },
      {
        "id": "t2",
        "text": "10.10.13.128"
      },
      {
        "id": "t3",
        "text": "10.10.13.160"
      },
      {
        "id": "t4",
        "text": "10.10.13.252"
      }
    ],
    "correctMapping": {
      "i2": "t1",
      "i4": "t2",
      "i5": "t3",
      "i6": "t4"
    },
    "explanation": "10.10.13.0 - 255.255.255.128\n10.10.13.128 - 255.255.255.240\n10.10.13.160 - 255.255.255.248\n10.10.13.252 - 255.255.255.252"
  },
  {
    "id": "p10_q069",
    "type": "mcq",
    "question": "Refer to the exhibit.\n\nA network engineer must configure the link with these requirements:\n• Consume as few IP addresses as possible.\n• Leave at least two additional useable IP addresses for future growth.\n\nWhich set of configurations must be applied?",
    "image": "p10_q069.png",
    "options": [
      "R1(config-if)#ip address 10.10.10.1 255.255.255.248\nR2(config-if)#ip address 10.10.10.4 255.255.255.248",
      "R1(config-if)#ip address 10.10.10.1 255.255.255.240\nR2(config-if)#ip address 10.10.10.12 255.255.255.240",
      "R1(config-if)#ip address 10.10.10.1 255.255.255.252\nR2(config-if)#ip address 10.10.10.2 255.255.255.252",
      "R1(config-if)#ip address 10.10.10.1 255.255.255.0\nR2(config-if)#ip address 10.10.10.5 255.255.255.0"
    ],
    "correctIndexes": [
      0
    ],
    "explanation": ""
  },
  {
    "id": "p10_q070",
    "type": "mcq",
    "question": "What is a function of Layer 3 switches?",
    "image": null,
    "options": [
      "They route traffic between devices in different VLANs.",
      "They transmit broadcast traffic when operating in Layer 3 mode exclusively.",
      "They forward Ethernet frames between VLANs using only MAC addresses.",
      "They move frames between endpoints limited to IP addresses."
    ],
    "correctIndexes": [
      0
    ],
    "explanation": ""
  },
  {
    "id": "p10_q071",
    "type": "mcq",
    "question": "Refer to the exhibit.\n\nIPv6 is being implemented within the enterprise. The command ipv6 unicast-routing is configured. Interface Gig0/0 on R1 must be configured to provide a dynamic assignment using the assigned IPv6 block. Which command accomplishes this task?",
    "image": "p10_q071.png",
    "options": [
      "ipv6 address 2001:DB8:FFFF:FCF3::/64 eui-64",
      "ipv6 address 2001:DB8:FFFF:FCF3::/64 link-local",
      "ipv6 address 2001:0B8:FFFF:FCF3::1/64",
      "ipv6 address autoconfig 2001:DB8:FFFF:FCF2::/64"
    ],
    "correctIndexes": [
      0
    ],
    "explanation": "Configure the IPv6 global unicast address on an interface using the ipv6 address address/prefix-length [eui-64] command."
  },
  {
    "id": "p10_q072",
    "type": "mcq",
    "question": "Refer to the exhibit.\n\nR1#show run | include ntp\nntp master 7\nntp server 209.165.200.225\n\nR2#show run | include ntp\nntp server 172.16.0.1\n\nR3#show run | include ntp\nntp master 6\nntp server 172.16.0.1\n\nR4#show run | include ntp\nntp master 7\n\nWhich router or router group are NTP clients?",
    "image": "p10_q072.png",
    "options": [
      "R1, R2, and R3",
      "R1",
      "R2 and R3",
      "R1, R3, and R4"
    ],
    "correctIndexes": [
      0
    ],
    "explanation": "To configure the NTP client on a Cisco device we use the ntp server {ip-address} command in global configuration."
  },
  {
    "id": "p10_q073",
    "type": "mcq",
    "question": "A network engineer is replacing the switches that belong to a managed-services client with new Cisco Catalyst switches. The new switches will be configured for updated security standards, including replacing Telnet services with encrypted connections and doubling the modulus size from 1024. Which two commands must the engineer configure on the new switches? (Choose two)",
    "image": null,
    "options": [
      "transport input ssh",
      "transport input all",
      "crypto key generate rsa general-keys modulus 1024",
      "crypto key generate rsa usage-keys",
      "crypto key generate rsa modulus 2048"
    ],
    "correctIndexes": [
      0,
      4
    ],
    "explanation": "The command \"crypto key generate rsa modulus 2048\" generate a 2048 bit RSA key pair (doubling the modulus size from 1024)."
  },
  {
    "id": "p10_q074",
    "type": "mcq",
    "question": "Refer to the exhibit.\n\nGateway of last resort is not set\n    10.0.0.0/8 is variably subnetted, 2 subnets, 2 masks\nC       10.1.1.0/30 is directly connected, GigabitEthernet0/0\nL       10.1.1.2/32 is directly connected, GigabitEthernet0/0\nS    192.168.0.0/20 [1/0] via 10.1.1.1\n    192.168.1.0/30 is subnetted, 1 subnets\nS       192.168.1.0/30 [1/0] via 10.1.1.1\n    192.168.2.0/24 is variably subnetted, 2 subnets, 2 masks\nS       192.168.2.0/28 [1/0] via 10.1.1.1\nS       192.168.2.0/29 [1/0] via 10.1.1.1\n\nAn engineer is checking the routing table in the main router to identify the path to a server on the network. Which route does the router use to reach the server at 192.168.2.2?",
    "image": null,
    "options": [
      "S 192.168.2.0/28 [1/0] via 10.1.1.1",
      "S 192.168.1.0/30 [1/0] via 10.1.1.1",
      "S 192.168.0.0/20 [1/0] via 10.1.1.1",
      "S 192.168.2.0/29 [1/0] via 10.1.1.1"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": ""
  },
  {
    "id": "p10_q075",
    "type": "mcq",
    "question": "Refer to the exhibit.\n\n{\n    \"myCar\": {\n        \"name\": \"thunder\",\n        \"wheels\": [\"good\", \"good\", \"pressureLow\", \"warning\"],\n        \"gasLight\": false\n    },\n    \"oldCar\": {\n        \"name\": \"sleepy\",\n        \"wheels\": [\"pressureLow\", \"pressureLow\", \"pressureLow\", \"pressureLow\"],\n        \"color\": \"rust\",\n        \"gasLight\": true\n    },\n    \"newCar\": {\n        \"name\": \"lightning\",\n        \"wheels\": [\"pressureLow\", \"good\", \"pressureLow\", \"good\"],\n        \"color\": \"blue\",\n        \"gasLight\": true\n    }\n}\n\nIn which structure does the word \"warning\" directly reside?",
    "image": null,
    "options": [
      "array",
      "object",
      "Boolean",
      "string"
    ],
    "correctIndexes": [
      0
    ],
    "explanation": ""
  },
  {
    "id": "p10_q076",
    "type": "mcq",
    "question": "Refer to the exhibit.\n\nR1(config)#ip route 0.0.0.0 0.0.0.0 172.16.20.2\nR1(config)#ip route 0.0.0.0 0.0.0.0 10.0.0.2 20\n\nAfter applying this configuration to router R1, a network engineer is verifying the implementation. If all links are operating normally, and the engineer sends a series of packets from PC1 to PC3, how are the packets routed?",
    "image": "p10_q076.png",
    "options": [
      "They are routed to 172.16.20.2.",
      "They are distributed sent round robin to interfaces S0/0/0 and S0/0/1.",
      "They are routed to 192.168.100.2.",
      "They are routed to 10.0.0.2."
    ],
    "correctIndexes": [
      0
    ],
    "explanation": ""
  },
  {
    "id": "p10_q077",
    "type": "mcq",
    "question": "A network administrator plans an update to the Wi-Fi networks in multiple branch offices. Each location is configured with an SSID called \"Office\". The administrator wants every user who connects to the SSID at any location to have the same access level. What must be set the same on each network to meet the requirement?",
    "image": null,
    "options": [
      "radio policy",
      "security policies",
      "NAS-ID configuration",
      "profile name"
    ],
    "correctIndexes": [
      1
    ],
    "explanation": "Two identically named SSIDs with the same password will allow your device to connect to either, without having to add any extra networks on your devices. But make sure to configure them with the same security policies.\n\nNote: Four WLAN security policies are available: Wired Equivalent Privacy (WEP), Wi-Fi Protected Access (WPA), WPA2, WLAN Authentication and Privacy Infrastructure (WAPI)"
  },
  {
    "id": "p10_q078",
    "type": "mcq",
    "question": "Refer to the exhibit.\n\nWhich command set configures ROUTER-1 to allow Internet access for users on the 192.168.1.0/24 subnet while using 209.165.202.129 for Port Address Translation?",
    "image": "p10_q078.png",
    "options": [
      "ip nat pool CCNA 192.168.0.0 192.168.1.255 netmask 255.255.255.0\n\naccess-list 10 permit 192.168.0.0 0.0.0.255\nip nat inside source list 10 pool CCNA overload",
      "ip nat pool CCNA 209.165.202.129 209.165.202.129 netmask 255.255.255.255\n\naccess-list 10 permit 192.168.1.0 255.255.255.0\nip nat inside source list 10 pool CCNA overload",
      "ip nat pool CCNA 192.168.0.0 192.168.1.255 netmask 255.255.255.0\n\naccess-list 10 permit 192.168.0.0 255.255.255.0\nip nat inside source list 10 pool CCNA overload",
      "ip nat pool CCNA 209.165.202.129 209.165.202.129 netmask 255.255.255.255\n\naccess-list 10 permit 192.168.1.0 0.0.0.255\nip nat inside source list 10 pool CCNA overload"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "By providing only one IP address in the pool CCNA, we are sure that IP address will be used for Internet with PAT."
  },
  {
    "id": "p10_q079",
    "type": "mcq",
    "question": "Refer to the exhibit.\n\nA multivendor network exists and the company is implementing VoIP over the network for the first time. Which configuration is needed to implement the neighbor discovery protocol on the interface and allow it to remain off for the remaining interfaces?",
    "image": "p10_q079.png",
    "options": [
      "SW1(config)#no cdp enable\nSW1(config)#interface gigabitethernet1/0/1\nSW1(config-if)#cdp run",
      "SW1(config)#lldp enable\nSW1(config)#interface gigabitethernet1/0/1\nSW1(config-if)#lldp run",
      "SW1(config)#lldp run\nSW1(config)#interface gigabitethernet1/0/1\nSW1(config-if)#lldp enable",
      "SW1(config)#no cdp run\nSW1(config)#interface gigabitethernet1/0/1\nSW1(config-if)#lldp transmit\nSW1(config-if)#lldp receive"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "There is no totally correct answer. LLDP is disabled by default so in fact we need one additional command to enable LLDP:\n\nSW1(config)# lldp run\n\nBut this answer is still the best choice as we have to disable neighbor discovery protocol for the remaining interfaces with the \"no cdp run\" command (not \"no cdp enable\")."
  },
  {
    "id": "p10_q080",
    "type": "mcq",
    "question": "A network architect is considering whether to implement Cisco DNA Center to deploy devices on a new network. The organization is focused on reducing the time it currently takes to deploy devices in a traditional campus design. For which reason would Cisco DNA Center be more appropriate than traditional management options?",
    "image": null,
    "options": [
      "Cisco DNA Center provides zero-touch provisioning to third-party devices.",
      "Cisco DNA Center supports deployment with a single pane of glass.",
      "Cisco DNA Center minimizes the level of syslog output when reporting on Cisco devices.",
      "Cisco DNA Center reduces the need for analytics on third-party access points and devices."
    ],
    "correctIndexes": [
      1
    ],
    "explanation": "DNA Center can be the \"controller\" or single pane of glass for deploying and managing on-premises Cisco networks including routing, switching, Software Defined Wireless Area Network (SD-WAN), and security devices like Cisco Identity Services Engine (ISE) and Firepower."
  },
  {
    "id": "p10_q081",
    "type": "mcq",
    "question": "How do TCP and UDP fit into a query-response model?",
    "image": null,
    "options": [
      "TCP avoids using sequencing, and UDP avoids using acknowledgments.",
      "TCP uses error detection for packets, and UDP uses error recovery.",
      "TCP establishes a connection prior to sending data, and UDP sends immediately.",
      "TCP encourages out-of-order packet delivery, and UDP prevents re-ordering."
    ],
    "correctIndexes": [
      2
    ],
    "explanation": "TCP uses sequencing -> Answer A is not correct.\n\nTCP uses error recovery while UDP uses error detection -> Answer B is not correct.\n\nTCP does not encourage out-of-order packet delivery. When TCP packets are received out of order, they are buffered for later delivery to the application program rather than being discarded -> Answer D is not correct."
  },
  {
    "id": "p10_q082",
    "type": "dragdrop",
    "question": "Drag and drop the RF terms from the left onto the corresponding statements on the right.",
    "image": null,
    "items": [
      {
        "id": "i1",
        "text": "absorption"
      },
      {
        "id": "i2",
        "text": "receiver sensitivity"
      },
      {
        "id": "i3",
        "text": "noise floor"
      },
      {
        "id": "i4",
        "text": "signal-to-noise ratio"
      },
      {
        "id": "i5",
        "text": "reflection"
      }
    ],
    "targets": [
      {
        "id": "t1",
        "text": "measure of the minimum power required to decode a radio signal without excessive errors"
      },
      {
        "id": "t2",
        "text": "deviation from the propagation path that occurs when a signal encounters an obstacle"
      },
      {
        "id": "t3",
        "text": "reduction of energy in a signal as it travels away from the access point and encounters free space or obstacles"
      },
      {
        "id": "t4",
        "text": "measure of the total unwanted signals at the receiver"
      },
      {
        "id": "t5",
        "text": "relative power of the desired radio signal to unwanted signals at the receiver"
      }
    ],
    "correctMapping": {
      "i2": "t1",
      "i5": "t2",
      "i1": "t3",
      "i3": "t4",
      "i4": "t5"
    },
    "explanation": "The noise floor defines the amplitude of the sum of all noise sources and other unwanted signals within a system.\n\nSound absorption is the measure of the amount of energy removed from the sound wave as the wave passes through a given thickness of material."
  },
  {
    "id": "p10_q083",
    "type": "mcq",
    "question": "Which interface type enables an application running on a client to send data over an IP network to a server?",
    "image": null,
    "options": [
      "southbound interface",
      "application programming interface",
      "northbound interface",
      "Representational State Transfer application programming interface"
    ],
    "correctIndexes": [
      1
    ],
    "explanation": "In this question the answer \"application programming interface\" is better than the choice \"Representational State Transfer application programming interface\" as the latter is used for web services (HTTP/HTTPS) only.\n\nNote: REpresentational State Transfer (REST) requires that a client make a request to the server in order to retrieve or modify data on the server. A request generally consists of:\n+ an HTTP verb, which defines what kind of operation to perform\n+ a header, which allows the client to pass along information about the request\n+ a path to a resource\n+ an optional message body containing data"
  },
  {
    "id": "p10_q084",
    "type": "mcq",
    "question": "Refer to the exhibit.\n\naccess-list 10 permit 10.0.0.0 0.0.0.255\ninterface Serial0\nip access-list 10 in\n\nA network administrator must permit traffic from the 10.10.0.0/24 subnet to the WAN on interface Serial0. What is the effect of the configuration as the administrator applies the command?",
    "image": null,
    "options": [
      "The sourced traffic from IP range 10.0.0.0 - 10.0.0.255 is allowed on Serial0.",
      "The permit command fails and returns an error code.",
      "The router fails to apply the access list to the interface.",
      "The router accepts all incoming traffic to Serial0 with the last octet of the source IP set to 0."
    ],
    "correctIndexes": [
      2
    ],
    "explanation": "The last command is not correct. We must use the \"ip access-group 10 in\" command to apply this ACL to the interface."
  },
  {
    "id": "p10_q085",
    "type": "mcq",
    "question": "Refer to the exhibit.\n\nGateway of last resort is 172.16.2.2 to network 0.0.0.0\n\n    10.0.0.0/8 is variably subnetted, 2 subnets, 2 masks\nC       10.10.8.0/28 is directly connected, GigabitEthernet0/0/2\nC       10.10.10.0/24 is directly connected, GigabitEthernet0/0/0\nL       10.10.10.3/32 is directly connected, GigabitEthernet0/0/0\n    172.16.0.0/16 is variably subnetted, 3 subnets, 2 masks\nS       172.16.1.33/32 is directly connected, GigabitEthernet0/0/1\nC       172.16.2.0/23 is directly connected, GigabitEthernet0/0/1\nL       172.16.2.1/32 is directly connected, GigabitEthernet0/0/1\nS*   0.0.0.0/0 [1/0] via 172.16.2.2\n\nA packet sourced from 10.10.10.1 is destined for 10.10.8.14. What is the subnet mask of the destination route?",
    "image": null,
    "options": [
      "255.255.254.0",
      "255.255.255.240",
      "255.255.255.248",
      "255.255.255.252"
    ],
    "correctIndexes": [
      1
    ],
    "explanation": ""
  },
  {
    "id": "p10_q086",
    "type": "mcq",
    "question": "What are two reasons to implement IPv4 private addressing on a network? (Choose two)",
    "image": null,
    "options": [
      "to expand the routing table on the router",
      "to facilitate renumbering when merging networks",
      "to enable internal applications to treat the private IPv4 addresses as unique",
      "to conserve global unique IPv4 addresses",
      "to provide protection from external denial-of-service attacks"
    ],
    "correctIndexes": [
      3,
      4
    ],
    "explanation": ""
  },
  {
    "id": "p10_q087",
    "type": "mcq",
    "question": "Refer to the exhibit.\n\nA guest WLAN must be created that prompts the client for a username and password on the local web page of the WLC. Which two actions must be performed on the Layer 2 tab before enabling the Authentication option on the Layer 3 tab? (Choose two)",
    "image": "p10_q087.png",
    "options": [
      "Uncheck the MAC Filtering option check box.",
      "Set the Security Type option to Personal.",
      "Change the WPA Encryption option from TKIP to CCMP128(AES).",
      "Set the Layer 2 Security option to None.",
      "Uncheck the WPA Policy option check box, and check the WPA2 Policy option check box."
    ],
    "correctIndexes": [
      0,
      3
    ],
    "explanation": "We want to use Layer 3 authentication so we should disable Layer 2 authentication (by setting it to \"None\").\n\nAlso disable \"MAC Filtering\" as it is not supported with FlexConnect Local Authentication."
  },
  {
    "id": "p10_q088",
    "type": "mcq",
    "question": "Which script paradigm does Puppet use?",
    "image": null,
    "options": [
      "manifests and modules",
      "strings and marionettes",
      "recipes and cookbooks",
      "playbooks and roles"
    ],
    "correctIndexes": [
      0
    ],
    "explanation": "Puppet Master Components\n\nManifests\nManifest is the most important component in a Puppet Master so we will mention about it first. Manifest is just the file where the all Puppet scripts for configuring Puppet clients are written (in Ruby code). Manifest filenames use \".pp\" (means Puppet policy) extension.\n\nBased on the Facts received from Factor, Master compiles manifests into catalogs, then sends them to the client.\n\nModule\nModule also plays an important part in a Puppet Master. Module is a collection of manifests and other related data files organized in a predefined way to facilitate sharing and reusing. Modules tie manifests, templates, and files into a single unit.\n\nModule = Manifests + Data (Templates, Files)\n\nModules have a specific directory path which is usually \"/etc/puppet/manifests/\". They are useful for organizing our Puppet code, because they allow to split code into multiple manifests. It is considered best practice to use modules to organize all of our Puppet manifests."
  },
  {
    "id": "p10_q089",
    "type": "mcq",
    "question": "Which IPsec transport mode encrypts the IP header and the payload?",
    "image": null,
    "options": [
      "pipe",
      "tunnel",
      "control",
      "transport"
    ],
    "correctIndexes": [
      1
    ],
    "explanation": "In tunnel mode, the entire original IP packet is encapsulated to become the payload of a new IP packet. Additionally, a new IP header is added on top of the original IP packet.\n\nThe main difference in transport mode is that it retains the original IP header. In other words, payload data transmitted within the original IP packet is protected, but not the IP header."
  },
  {
    "id": "p10_q090",
    "type": "mcq",
    "question": "What does WPA3 provide in wireless networking?",
    "image": null,
    "options": [
      "increased security and requirement of a complex configuration",
      "backward compatibility with WPA and WPA2",
      "optional Protected Management Frame negotiation",
      "safeguards against brute force attacks with SAE"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "WPA3 only backwards compatible with WPA2 but not WPA -> Answer B is not correct.\n\nWPA3 increases security but not require a complex configuration -> Answer A is not correct.\n\nSimultaneous Authentication of Equals (SAE): SAE provides a more secure, password-based authentication and key agreement mechanism even when passwords are not following complexity requirements. It protects from brute-force attacks and makes unwanted decrypting of sessions (during or after the session) a lot harder - just knowing the passphrase isn't enough to decrypt the session -> Answer D is correct."
  },
  {
    "id": "p10_q091",
    "type": "mcq",
    "question": "Refer to the exhibit. With which metric does router R1 learn the route to host 172.16.0.202?\n\nR1#show ip route | begin gateway\n\nGateway of last resort is 209.165.200.246 to network 0.0.0.0\nS*  0.0.0.0/0 [1/0] via 209.165.200.246, Serial0/1/0\n    172.16.0.0/16 is variably subnetted, 3 subnets, 3 masks\nS      172.16.0.0/24 [1/0] via 207.165.200.250, Serial0/0/0\nO      172.16.0.128/25 [110/32445] via 207.165.200.254, 00:00:33, Serial0/0/1\nD      172.16.0.192/29 [90/3184439] via 207.165.200.254, 00:00:33, Serial0/0/1\n    207.165.200.0/24 is variably subnetted, 4 subnets, 2 masks\nC      207.165.200.248/30 is directly connected, Serial0/0/0\nL      207.165.200.249/32 is directly connected, Serial0/0/0\nC      207.165.200.252/30 is directly connected, Serial0/0/1\nL      207.165.200.253/32 is directly connected, Serial0/0/1",
    "image": null,
    "options": [
      "0",
      "110",
      "32445",
      "3184439"
    ],
    "correctIndexes": [
      2
    ],
    "explanation": "Both the line \"O 172.16.0.128/25\" and \"S 172.16.0.0/24\" cover the host 172.16.0.202 but with the \"longest (prefix) match\" rule the router will choose the first route.\n\nNote: Network 172.16.0.192/29 does not cover host 172.16.0.202. For network 172.16.0.192/29:\n\nIncrement: 8\nNetwork address: 172.16.0.192\nBroadcast address: 172.16.0.199"
  },
  {
    "id": "p10_q092",
    "type": "mcq",
    "question": "Which two actions are taken as the result of traffic policing? (Choose two)",
    "image": null,
    "options": [
      "bursting",
      "fragmentation",
      "dropping",
      "remarking",
      "buffering"
    ],
    "correctIndexes": [
      2,
      3
    ],
    "explanation": "Policing: is used to control the rate of traffic flowing across an interface. During a bandwidth exceed (crossed the maximum configured rate), the excess traffic is generally dropped or remarked. The result of traffic policing is an output rate that appears as a saw-tooth with crests and troughs. Traffic policing can be applied to inbound and outbound interfaces. Unlike traffic shaping, QoS policing avoids delays due to queuing. Policing is configured in bytes.\n\nQoS Traffic Shaping do not support Marking or Remarking again. This is done only with Traffic Policing.\n\nNote: In policing, remarking the packets that exceed the CIR is an alternative to simply dropping them."
  },
  {
    "id": "p10_q093",
    "type": "mcq",
    "question": "Refer to the exhibit.\n\nGateway of last resort is 0.0.0.0 to network 0.0.0.0\n10.0.0.0/8 is variably subnetted, 6 subnets, 5 masks\nS      10.0.0.0/8 is directly connected, GigabitEthernet0/0\nC      10.1.1.0/24 is directly connected, GigabitEthernet0/0\nL      10.1.1.1/32 is directly connected, GigabitEthernet0/0\nS      10.10.0.0/22 is directly connected, GigabitEthernet0/0\nS      10.10.10.0/28 is directly connected, GigabitEthernet0/0\nS      10.10.10.1/32 is directly connected, GigabitEthernet0/0\nS*  0.0.0.0/0 is directly connected, GigabitEthernet0/0\n\nWhich IP route command created the best path for a packet destined for 10.10.10.3?",
    "image": null,
    "options": [
      "ip route 10.0.0.0 255.0.0.0 g0/0",
      "ip route 10.10.10.1 255.255.255.255 g0/0",
      "ip route 10.10.10.0 255.255.255.240 g0/0",
      "ip route 10.10.0.0 255.255.252.0 g0/0"
    ],
    "correctIndexes": [
      2
    ],
    "explanation": "The static routes here were configured as \"directly connected static routes\" (only exit interfaces were configured, not the next-hop IP address) so we see the line \"is directly connected\".\n\nAll four answers of this question were configured and generated the output as shown in the exhibit. This question asks which command created the best path for packet destined to 10.10.10.3 so the correct one is answer C."
  },
  {
    "id": "p10_q094",
    "type": "mcq",
    "question": "A WLC sends alarms about a rogue AP, and the network administrator verifies that the alarms are caused by a legitimate autonomous AP. How must the alarms be stopped for the MAC address of the AP?",
    "image": null,
    "options": [
      "Place the AP into manual containment.",
      "Remove the AP from WLC management.",
      "Manually remove the AP from Pending state.",
      "Set the AP Class Type to Friendly."
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "If a rogue AP is classified as friendly, it means that the rogue AP exists in the vicinity, is a known AP, and need not be tracked. Therefore, all the rogue clients are either deleted or not tracked if they are associated with the friendly rogue AP."
  },
  {
    "id": "p10_q095",
    "type": "mcq",
    "question": "Which security method is used to prevent man-in-the-middle attack?",
    "image": null,
    "options": [
      "authorization",
      "authentication",
      "anti-replay",
      "accounting"
    ],
    "correctIndexes": [
      2
    ],
    "explanation": "The anti-replay protocol provides Internet Protocol (IP) packet-level security by making it impossible for a hacker to intercept message packets and insert changed packets into the data stream between a source computer and a destination computer.\n\nHow does the anti-replay protocol work?\nThe answer to preventing replay attacks is encrypting messages and including a key. IPsec provides anti-replay protection against attackers who could potentially intercept, duplicate or resend encrypted packets.\nThe mechanism uses a unidirectional security association to establish a secure connection between the source and destination nodes in the network and check whether a received message is a replayed message. It works by assigning a monotonically increasing sequence number to each encrypted packet and then keeping track of the sequence numbers as packets arrive at the destination."
  },
  {
    "id": "p11_q057",
    "type": "mcq",
    "question": "Refer to the exhibit.\n\nA network administrator configures the CPE to provide internet access to the company headquarters. Traffic must be load-balanced via ISP1 and ISP2 to ensure redundancy. Which two command sets must be configured on the CPE router? (Choose two)",
    "image": "p11_q057.png",
    "options": [
      "ip route 0.0.0.0 0.0.0.0 198.51.100.1\nip route 0.0.0.0 0.0.0.0 203.0.113.1 2",
      "ip route 0.0.0.0 128.0.0.0 198.51.100.1\nip route 128.0.0.0 128.0.0.0 203.0.113.1\nip route 0.0.0.0 0.0.0.0 198.51.100.1\nip route 0.0.0.0 0.0.0.0 203.0.113.1",
      "ip route 0.0.0.0 128.0.0.0 198.51.100.1\nip route 128.0.0.0 128.0.0.0 203.0.113.1",
      "ip route 0.0.0.0 0.0.0.0 198.51.100.1 255\nip route 0.0.0.0 0.0.0.0 203.0.113.1 255\nip route 128.0.0.0 128.0.0.0 203.0.113.1",
      "ip route 0.0.0.0 0.0.0.0 198.51.100.1\nip route 0.0.0.0 0.0.0.0 203.0.113.1"
    ],
    "correctIndexes": [
      1,
      4
    ],
    "explanation": "Answer A is not correct as it uses floating static route with an AD of 2 for the second static route so traffic cannot be load-balancing.\n\nAn administrative distance of 255 is considered unreachable, and static routes with an administrative distance of 255 are never entered into the routing table -> Answer D is not correct.\n\nNow let's explain more detail about the command \"ip route 128.0.0.0 128.0.0.0 …\". It is same as \"ip route 0.0.0.0 128.0.0.0 …\" command or we can call it \"0.0.0.0/1\" route. Because of the \"longest-prefix match\" rule, it is preferred to the default static \"0.0.0.0/0\" route. So 0.0.0.0/0 route would not be used.\n\nNow we can why answer C is not correct as the route \"ip route 128.0.0.0 128.0.0.0 203.0.113.1\" is always preferred to \"ip route 0.0.0.0 128.0.0.0 198.51.100.1\".\n\nAnswer B is correct as we have two \"0.0.0.0/1\" routes (\"0.0.0.0 128.0.0.0\" and \"128.0.0.0 128.0.0.0\" are totally the same)"
  },
  {
    "id": "p11_q058",
    "type": "mcq",
    "question": "Refer to the exhibit.\n\n```\nRouter#conf t\nEnter configuration commands, one per line. End with CNTL/Z.\nRouter(config)#hostname R1\nR1(config)#ip domain-name CC-Net.com\nR1(config)#enable secret Passfornewuser\nR1(config)#line vty 0 15\nR1(config-line)#transport input ssh\nR1(config-line)#login local\n```\n\nA network administrator is configuring a router for user access via SSH. The service-password encryption command has been issued. The configuration must meet these requirements:\n\n– Create the username as CCUser.\n– Create the password as NA!2$cc.\n– Encrypt the user password.\n\nWhat must be configured to meet the requirements?",
    "image": null,
    "options": [
      "username CCUser password NA!2$cc\nenable password level 5 NA!2$cc",
      "username CCUser privilege 15 password NA!2$cc\nenable secret 0 NA!2$cc",
      "username CCUser secret NA!2$cc",
      "username CCUser privilege 10 password NA!2$cc"
    ],
    "correctIndexes": [
      2
    ],
    "explanation": "In fact all other answers look good too, but answer C is the best choice as the password of the username is encrypted with highest security level."
  },
  {
    "id": "p11_q059",
    "type": "dragdrop",
    "question": "Refer to the exhibit.\n\nAn engineer must configure a static network route between two networks so that host A communicates with host B. Drag and drop the commands from the left onto the routers where they must be configured on the right. Not all commands are used.",
    "image": "p11_q059.png",
    "items": [
      {
        "id": "i1",
        "text": "ip route 10.10.13.0 255.255.255.128 10.10.10.1"
      },
      {
        "id": "i2",
        "text": "ip route 10.10.13.0 255.255.255.128 10.10.10.5"
      },
      {
        "id": "i3",
        "text": "ip route 10.10.13.10 255.255.255.255 10.10.10.1"
      },
      {
        "id": "i4",
        "text": "ip route 10.10.14.0 255.255.255.0 10.10.10.2"
      },
      {
        "id": "i5",
        "text": "ip route 10.10.14.0 255.255.255.0 10.10.10.6"
      },
      {
        "id": "i6",
        "text": "ip route 10.10.14.10 255.255.255.255 10.10.10.6"
      }
    ],
    "targets": [
      {
        "id": "t1",
        "text": "R1"
      },
      {
        "id": "t2",
        "text": "R2"
      },
      {
        "id": "t3",
        "text": "R2"
      },
      {
        "id": "t4",
        "text": "R3"
      }
    ],
    "correctMapping": {
      "i1": "t1",
      "i2": "t2",
      "i4": "t3",
      "i5": "t4"
    },
    "explanation": "R1:\nip route 10.10.13.0 255.255.255.128 10.10.10.1\n\nR2:\nip route 10.10.13.0 255.255.255.128 10.10.10.5\nip route 10.10.14.0 255.255.255.0 10.10.10.2\n\nR3:\nip route 10.10.14.0 255.255.255.0 10.10.10.6"
  },
  {
    "id": "p11_q060",
    "type": "mcq",
    "question": "Refer to the exhibit.\n\n```\nR1# show ip route | begin Gateway\nGateway of last resort is 0.0.0.0 to network 0.0.0.0\nS* 0.0.0.0/0 is directly connected, Serial0/0/1\n     172.16.0.0/16 is variably subnetted, 4 subnets, 2 masks\nC        172.16.2.0/24 is directly connected, GigabitKthernet0/0\nL        172.16.2.2/32 is directly connected, GigabitEthernet0/0\nC        172.16.4.0/21 is directly connected, Serial0/0/1\nL        172.16.8.2/26 is directly connected, Serial0/0/1\n```\n\nWhat is the subnet mask for route 172.16.4.0?",
    "image": null,
    "options": [
      "255.255.255.192",
      "255.255.248.0",
      "255.255.254.0",
      "255.255.240.0"
    ],
    "correctIndexes": [
      1
    ],
    "explanation": ""
  },
  {
    "id": "p11_q061",
    "type": "mcq",
    "question": "Which interface or port on the WLC is the default for in-band device administration and communications between the controller and access points?",
    "image": null,
    "options": [
      "virtual interface",
      "management interface",
      "console port",
      "service port"
    ],
    "correctIndexes": [
      1
    ],
    "explanation": "The management interface is the default interface for in-band management of the controller and connectivity to enterprise services such as AAA servers. It is also used for communications between the controller and access points, for all CAPWAP or intercontroller mobility messaging and tunneling traffic.\n\nReference: https://www.cisco.com/c/en/us/td/docs/wireless/controller/7-4/configuration/guides/consolidated/b_cg74_CONSOLIDATED/b_cg74_CONSOLIDATED_chapter_010011011.html"
  },
  {
    "id": "p11_q062",
    "type": "mcq",
    "question": "Refer to the exhibit.\n\nThe IPv6 address for the LAN segment on router R2 must be configured using the EUI-64 format. Which address must be used?",
    "image": "p11_q062.png",
    "options": [
      "ipv6 address 2001:DB8:D8D2:1009:10A0:ABFF:FECC:1 eui-64",
      "ipv6 address 2001:DB8:D8D2:1009:12A0:AB34:FFCC:1 eui-64",
      "ipv6 address 2001:DB8:D8D2:1009:1230:ABFF:FECC:1 eui-64",
      "ipv6 address 2001:DB8:D8D2:1009:4345:80FF:FF16:7 eui-64"
    ],
    "correctIndexes": [
      0
    ],
    "explanation": "On R2 LAN interface we use the command \"ipv6 address 2001:db8:d8d2:1009::/64 eui-64\" to tell the router to assign an IPv6 address for this interface automatically. R2 takes the MAC address of LAN interface 12A0.ABDD.0002 and insert FFFE between these two halves to form a 64-bit address 2001:DB8:D8D2:1009:12A0.ABFF:FEdd:0002 by insert .\n\nWe have to invert the universal/local (U/L) flag (bit 7) in the OUI portion of the address so 12 (in hex) = 0001 0010 (in binary) so after flipping the 7th bit we have 0001 0000 = 10 (in hex). Therefore the EUI-64 IPv6 would be 2001:DB8:D8D2:1009:10A0:ABFF:FECC:1.\n\nNote: There are some document saying that we have to flip bit 7th while some others say we have to change the 7th bit to 1. So we tested with IOSv15.4:\n\nWe see the MAC address of E0/0 is \"aabb……\" (\"a\" in hex = \"1010″) so the 7th bit is 1. When we enable IPv6 on this interface the link-local address changed to \"FE80::A8BB……..\". So \"a\" changed to 8 (\"8\" in hex = 1000″) and we are sure bit 1 changed to 0. But this is just the link-local address so we will try to assign a global unique address:\n\nThe global unique address assigned is \"2001::A8BB……..\" so bit 1 changed to 0 too."
  },
  {
    "id": "p11_q063",
    "type": "mcq",
    "question": "A company has each office using wireless access with multiple SSIDs while limiting roaming capabilities, covering different locations on the internal office LAN, guest networks, and BYOD access for employees. Which change must be enabled to improve the customer experience during SSID changes?",
    "image": null,
    "options": [
      "Assisted Roaming Prediction Optimization",
      "Fast Transition",
      "Neighbor List Dual Band",
      "Fast SSID Change"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "\"When you enable Fast SSID Change, the controller allows clients to move between SSIDs. When the client sends a new association request for a different SSID, the client entry in the controller connection table is cleared before the client is added to the new SSID."
  },
  {
    "id": "p11_q064",
    "type": "mcq",
    "question": "Refer to the exhibit.\n\nThe EtherChannel is configured with a speed of 1000 and duplex as full on both ends of channel group 1. What is the next step to configure the channel on switch A to respond to but not initiate LACP communication?",
    "image": "p11_q064.png",
    "options": [
      "interface range gigabitethernet0/0/0 -15\nchannel-group 1 mode desirable",
      "interface range gigabitethernet0/0/0 -15\nchannel-group 1 mode on",
      "interface port-channel 1\nchannel-group 1 mode auto",
      "interface port-channel 1\nchannel-group 1 mode passive"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": ""
  },
  {
    "id": "p11_q065",
    "type": "mcq",
    "question": "Which two VPN technologies are recommended by Cisco for multiple branch offices and large-scale deployments? (Choose two)",
    "image": null,
    "options": [
      "IPsec remote access",
      "site-to-site VPN",
      "clientless VPN",
      "GETVPN",
      "DMVPN"
    ],
    "correctIndexes": [
      3,
      4
    ],
    "explanation": "Cisco DMVPN can be deployed in conjunction with Cisco IOS Firewall and Cisco IOS IPS, as well as quality of service (QoS), IP Multicast, split tunneling, and routing-based failover mechanisms. Large-scale, highly available Cisco DMVPN deployments are made possible by load balancing multiple Cisco DMVPN hubs.\n\nReference: https://www.cisco.com/c/en/us/products/collateral/security/dynamic-multipoint-vpn-dmvpn/data_sheet_c78-468520.html\n\nGet VPNs provide large scale, connectionless, tunnel free transmission protection taking advantage of existing routing infrastructure and can be used with MPLS, IP, Frame relay and ATM networks.\n\nReference: https://ipwithease.com/flexvpn-vs-getvpn/\n\nNote:\n\nSite-to-Site VPN is a simple VPN that connects a central site and a remote site, or a hub and spoke VPN that connects a central site with multiple remote sites -> It is not suitable for large-scale deployments.\n\nWith clientless VPN, a tunnel is established from a web browser on the remote user's device to the outside interface of the VPN gateway's SSL component -> It is not suitable for large-scale deployments.\n\nIPSec remote access is used to connect remote-access clients, such as a PC or small office, home office (SOHO) device."
  },
  {
    "id": "p11_q066",
    "type": "mcq",
    "question": "Refer to the exhibit.\n\n```\n{\n    \"Test_Questions\" : [\n            \"Automation\",\n            \"Configuration\",\n    ],\n    \"Test_Exam_Level\" : [\n            \"CCNA\",\n            \"CCNP\",\n    ],\n    \"Test_Response\" : [\n            \"Correct\",\n            \"Incorrect\",\n    ]\n}\n```\n\nHow many arrays are present in the JSON data?",
    "image": null,
    "options": [
      "one",
      "three",
      "six",
      "nine"
    ],
    "correctIndexes": [
      1
    ],
    "explanation": "The JSON array is surrounded by square brackets [ ]. In this question there are three square brackets in total."
  },
  {
    "id": "p11_q067",
    "type": "mcq",
    "question": "Refer to the exhibit.\n\n```\nRouter1#show interface ethernet 1\nEthernet1 is up, line protocol is up\nHardware is Lance, address is 0010.7b36.Ibe8 (bia 0010.7b36.Ibe8)\nInternet address is 10.100.48.240/24\nMTU 1500 bytes, BW 10000 Kbit, DLY 1000 usec,\nreliability 255/255, txload 1/255, rxload 1/255 Encapsulation ARPA, loopback not set\nKeepalive set (10 sec)\nARP type: ARPA, ARP Timeout 04:00:00\nLast input 00:00:00, output 00:00:06, output hang never\nLast clearing of \"show interface\" counters never\nInput queue: 1/75/1/0 (size/max/drops/flushes); Total output drops: 0\nQueueing strategy: random early detection(RED)\nOutput queue :0/40 (size/max)\n5 minute input rate 1000 bits/sec, 2 packets/sec\n5 minute output rate 0 bits/sec, 0 packets/sec\n7558065 packets input, 783768942 bytes, 1 no buffer\nReceived 8280963 broadcasts, 0 runts, 0 giants, 1 throttles\n15 input errors, 14278 GRC, 0 frame, 0 overrun, 3 ignored\n0 input packets with dribble condition detected\n798092 packets output, 50280266 bytes, 0 underruns\n0 output errors, 15000 collisions, 0 interface resets\n0 babbles, 0 late collision, 179 deferred\n0 lost carrier, 0 no carrier\n0 output buffer failures, 0 output buffers swapped out\n```\n\nAn administrator received a call from a branch office regarding poor application performance hosted at the headquarters. Ethernet 1 is connected between Router1 and the LAN switch. What identifies the issue?",
    "image": null,
    "options": [
      "There is a duplex mismatch.",
      "The MTU is not set to the default value.",
      "The link is over utilized.",
      "The QoS policy is dropping traffic."
    ],
    "correctIndexes": [
      0
    ],
    "explanation": "This interface gets high collision (15000 collisions) so one end may be set to \"Half-duplex\"."
  },
  {
    "id": "p11_q068",
    "type": "mcq",
    "question": "Refer to the exhibit.\n\n```\nSW1#show etherchannel\n            Channel-group listing:\n            ----------------------\nGroup: 2\n--------\nGroup state = L2\nPorts: 1 Maxports = 8\nPort-channels: 1 Max Portchannels = 1\nProtocol: PAGP\n```\n\nA network engineer updates the existing configuration on interface fastethernet1/1 switch SW1. It must establish an EtherChannel by using the same group designation with another vendor switch. Which configuration must be performed to complete the process?",
    "image": null,
    "options": [
      "interface port-channel 2\nchannel-group 2 mode desirable",
      "interface fastethernet 1/1\nchannel-group 2 mode on",
      "interface port-channel 2\nchannel-group 2 mode auto",
      "interface fastethernet 1/1\nchannel-group 2 mode active"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "PaGP is Cisco proprietary protocol so we must change to LACP which is an open standard."
  },
  {
    "id": "p11_q069",
    "type": "mcq",
    "question": "Refer to the exhibit.\n\nLocal access for R4 must be established and these requirements must be met:\n– Only Telnet access is allowed.\n– The enable password must be stored securely.\n– The enable password must be applied in plain text\n– Full access to R4 must be permitted upon successful login\n\nWhich configuration script meets the requirements?",
    "image": "p11_q069.png",
    "options": [
      "Option A:\n!\nconf t\n!\nusername test1 password testpass1\nenable password level 1 7 Test123\n!\nline vty 0 15\naccounting exec default\ntransport input all",
      "Option B:\nconf t\n!\nusername test1 password testpass1\nenable secret level 15 0 Test123\n!\nline vty 0 15\nlogin local\ntransport input telnet",
      "Option C:\n!\nconfig t\n!\nusername test1 password testpass1\nenable secret level 1 0 Test123\n!\nline vty 0 15\nlogin authentication\npassword Test123\ntransport input telnet",
      "Option D:\n!\nconfig t\n!\nusername test1 password testpass1\nenable password level 15 0 Test123\n!\nline vty 0 15\npassword Test123\ntransport input all"
    ],
    "correctIndexes": [
      1
    ],
    "explanation": "\"Only Telnet access is allowed\" -> Only Option B and Option C are correct.\n\nIn fact the \"login authentication\" command in Option C can only be used when AAA is enabled (with the command \"aaa new-model\"). And we cannot use the \"login authentication\" without specifying an authentication list:\n\nRouter(config-line)#login authentication ?\n  WORD    Use an authentication list with this name.\n  default   Use the default authentication list.\n\nRouter(config-line)#login authentication\n% Incomplete command.\n\nTherefore only option B is left. But in fact option B is not totally correct as \"Full access to R4 must be permitted upon successful login\" but in option B we have to type the secret password to have full access to R4 after logging in (with username \"test1\" and password \"testpass1\")."
  },
  {
    "id": "p11_q070",
    "type": "mcq",
    "question": "A packet from a company's branch office is destined to host 172.31.0.1 at headquarters. The sending router has three possible matches in its routing table for the packet: prefixes 172.31.0.0/16, 172.31.0.0/24, and 172.31.0.0/25. How does the router handle the packet?",
    "image": null,
    "options": [
      "It sends the traffic via the default gateway 0.0.0.0/0.",
      "It sends the traffic via prefix 172.31.0.0/16.",
      "It sends the traffic via prefix 172.31.0.0/25.",
      "It sends the traffic via prefix 172.31.0.0/24."
    ],
    "correctIndexes": [
      2
    ],
    "explanation": ""
  },
  {
    "id": "p11_q071",
    "type": "mcq",
    "question": "Which action must be taken when password protection is implemented?",
    "image": null,
    "options": [
      "Store passwords as contacts on a mobile device with single-factor authentication.",
      "Share passwords with senior IT management to ensure proper oversight.",
      "Include special characters and make passwords as long as allowed.",
      "Use less than eight characters in length when passwords are complex."
    ],
    "correctIndexes": [
      2
    ],
    "explanation": ""
  },
  {
    "id": "p11_q072",
    "type": "mcq",
    "question": "When an access point is seeking to join a wireless LAN controller, which message is sent to the AP-Manager interface?",
    "image": null,
    "options": [
      "DHCP request",
      "DHCP discover",
      "discovery response",
      "discovery request"
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "The LAPs always connect to the management interface address of the controller first with a discovery request. The controller then tells the LAP the Layer 3 AP-manager interface (which can also be the management by default) IP address so the LAP can send a join request to the AP-manager interface next.\n\nReference: https://www.cisco.com/c/en/us/support/docs/wireless/5500-series-wireless-controllers/119286-lap-notjoin-wlc-tshoot.html"
  },
  {
    "id": "p11_q073",
    "type": "mcq",
    "question": "What is a reason why an administrator would choose to implement an automated network management approach?",
    "image": null,
    "options": [
      "Reduce inconsistencies in the network configuration.",
      "Increase recurrent management costs.",
      "Enable \"box by box\" configuration and deployment.",
      "Decipher simple password policies."
    ],
    "correctIndexes": [
      0
    ],
    "explanation": ""
  },
  {
    "id": "p11_q074",
    "type": "mcq",
    "question": "Which device separates networks by security domains?",
    "image": null,
    "options": [
      "access point",
      "firewall",
      "intrusion protection system",
      "wireless controller"
    ],
    "correctIndexes": [
      1
    ],
    "explanation": ""
  },
  {
    "id": "p11_q075",
    "type": "mcq",
    "question": "Which two characteristics are representative of virtual machines (VMs)? (Choose two)",
    "image": null,
    "options": [
      "A VM on a hypervisor is automatically interconnected to other VMs.",
      "A VM on an individual hypervisor shares resources equally.",
      "Each VMs operating system depends on its hypervisor.",
      "Each VM runs independently of any other VM in the same hypervisor.",
      "multiple VMs operate on the same underlying hardware."
    ],
    "correctIndexes": [
      3,
      4
    ],
    "explanation": ""
  },
  {
    "id": "p11_q076",
    "type": "mcq",
    "question": "Refer to the exhibit.\n\n```\nR7#\n172.22.0.0/24 is subnetted, 1 subnets\nD 172.22.49.0 [90/284160] via 10.81.22.2, 04:55:53, FastEthernet0/0\n10.0.0.0/8 is variably subnetted, 26 subnets, 5 masks\nD EX 10.10.10.10/32 [170/35840] via 10.3.5.1, 04:55:55, FastEthernet0/1\nD 10.9.1.0/30 [90/33280] via 10.3.5.1, 04:55:56, FastEthernet0/1\nB 10.111.99.0/24 [20/0] via 10.6.25.2, 03:58:52\nD 10.14.3.0/30 [90/30720] via 10.3.5.1, 04:55:58, FastEthernet0/1\nC 10.9.4.0/30 is directly connected, FastEthernet1/0\nB 10.100.100.0/24 [20/0] via 10.6.25.2, 03:58:53\nD 10.0.1.0/30 [90/30720] via 10.3.5.1, 04:55:58, FastEthernet0/1\nD EX 10.10.10.70/32 [170/1612801 via 10.3.5.1, 04:55:57, FastEthernet0/1\nB 10.90.0.0/16 [200/0] via 0.0.0.0, 03:57:59, Null0\nD EX 10.90.1.0/24 [170/158720] via 10.3.5.1, 04:55:57, FastEthernet0/1\nD EX 10.90.2.0/24 [170/158720] via 10.3.5.1, 04:55:57, FastEthernet0/1\nD 10.90.3.0/29 [90/161280] via 10.3.5.1, 02:46:03, FastEthernet0/1\nD EX 10.90.3.0/24 [170/158720] via 10.3.5.1, 02:46:04, FastEthernet0/1\nD EX 10.90.4.0/24 [170/158720] via 10.3.5.1, 04:55:59, FastEthernet0/1\nD EX 10.90.5.0/24 [170/158720] via 10.3.5.1, 04:55:59, FastEthernet0/1\nB* 0.0.0.0/0 [20/0] via 10.6.25.2, 02:22:38\n```\n\nAccording to the output, which parameter set is validated using the routing table of R7?",
    "image": null,
    "options": [
      "R7 is missing a gateway of last resort.\nR7 is receiving routes that were redistributed from BGP\nR7 will forward traffic destined to 10.90.8.0/24.",
      "R7 is missing a gateway of last resort.\nR7 is receiving routes that were redistributed in EIGRP\nR7 will forward traffic destined to 10.90.8.0/24.",
      "R7 has a gateway of last resort available.\nR7 is receiving routes that were redistributed from BGP\nR7 will drop traffic destined to 10.90.8.0/24",
      "R7 has a gateway of last resort available.\nR7 is receiving routes that were redistributed in EIGRP\nR7 will drop traffic destined to 10.90.8.0/24."
    ],
    "correctIndexes": [
      3
    ],
    "explanation": "Traffic destined to 10.90.8.0/24 matches the output line \"10.90.0.0/16 [200/0] via 0.0.0.0, 03:57:59, Null0\" so it will be forwarded to Null0 interface, which means it will be dropped.\n\nFrom \"D EX\" letter, we learn that R7 is receiving routes that were redistributed in EIGRP (another routing protocol was redistributed into EIGRP)."
  },
  {
    "id": "p11_q077",
    "type": "mcq",
    "question": "Refer to the exhibit.\n\n```\nGateway of last resort is 172.16.2.2 to network 0.0.0.0\n\n10.0.0.0/8 is variably subnetted, 2 subnets, 2 masks\nC     10.10.10.0/24 is directly connected, GigabitEthernet0/0/0\nL     10.10.10.3/32 is directly connected, GigabitEthernet0/0/0\n172.16.0.0/16 is variably subnetted, 3 subnets, 2 masks\nS     172.16.1.33/32 is directly connected, GigabitEthernet0/0/1\nC     172.16.2.0/23 is directly connected, GigabitEthernet0/0/1\nL     172.16.2.1/32 is directly connected, GigabitEthernet0/0/1\nS* 0.0.0.0/0 [1/0] via 172.16.2.2\n```\n\nA packet sourced from 10.10.10.1 is destined for 172.16.3.254. What is the subnet mask of the destination route?",
    "image": null,
    "options": [
      "0.0.0.0",
      "255.255.254.0",
      "255.255.255.0",
      "255.255.255.255"
    ],
    "correctIndexes": [
      1
    ],
    "explanation": "The packet destined for 172.16.3.254 will be routed via the entry \"C 172.16.2.0/23 …\" as this subnet ranges from 172.16.2.0 to 172.16.3.255."
  },
  {
    "id": "p11_q078",
    "type": "mcq",
    "question": "Refer to the exhibit.\n\nWhat is the operating mode and role of a backup port on a shared LAN segment in Rapid PVST+?",
    "image": "p11_q078.png",
    "options": [
      "blocking mode and provides an alternate path toward the designated bridge",
      "listening mode and provides an alternate path toward the root bridge",
      "forwarding mode and provides the lowest-cost path to the root bridge for each VLAN",
      "learning mode and provides the shortest path toward the root bridge handling traffic away from the LAN"
    ],
    "correctIndexes": [
      0
    ],
    "explanation": "An alternate port and a backup port are in a blocking state (or discarding state) to prevent loops.\n\nReference: https://www.ciscopress.com/articles/article.asp?p=2832407&seqNum=4"
  },
  {
    "id": "p11_q079",
    "type": "mcq",
    "question": "Which DSCP per-hop forwarding behavior is divided into subclasses based on drop probability?",
    "image": null,
    "options": [
      "class-selector",
      "assured",
      "expedited",
      "default"
    ],
    "correctIndexes": [
      1
    ],
    "explanation": "The term Per-Hop Behaviour (PHB) refers to how a node will treat traffic having the same Differentiated Services Code Point (DSCP) values.\n\nAssured Forwarding has four standard classes from AF1 to AF4. It is important to note that the class number does not determine priority. Each class is treated independently and placed into different queues.\n\nEach AF class has its own IP Precedence with three drop probabilities, low, medium, and high.\n\nReference: https://www.routeprotocol.com/dscp-per-hop-behaviour-assured-forwarding/"
  },
  {
    "id": "p11_q080",
    "type": "mcq",
    "question": "What occurs when a switch receives a frame that has a destination that is an unknown MAC address?",
    "image": null,
    "options": [
      "The frame is flooded to all interfaces in the VLAN to which the frame belongs.",
      "The frame is flooded to all interfaces in the switch.",
      "The frame is discarded",
      "The MAC address table of the switch is flushed"
    ],
    "correctIndexes": [
      0
    ],
    "explanation": ""
  },
  {
    "id": "p11_q081",
    "type": "dragdrop",
    "question": "Drag and drop the facts about wireless architectures from the left onto the types of access point on the right. Not all options are used.",
    "image": null,
    "items": [
      {
        "id": "i1",
        "text": "configured and managed by a WLC"
      },
      {
        "id": "i2",
        "text": "managed from a Web-based dashboard"
      },
      {
        "id": "i3",
        "text": "accessible for management via Telnet, SSH, or a Web GUI"
      },
      {
        "id": "i4",
        "text": "supports different operational modes"
      },
      {
        "id": "i5",
        "text": "supports automatic deployment"
      }
    ],
    "targets": [
      {
        "id": "t1",
        "text": "Cloud-Based Access Point"
      },
      {
        "id": "t2",
        "text": "Cloud-Based Access Point"
      },
      {
        "id": "t3",
        "text": "Lightweight Access Point"
      },
      {
        "id": "t4",
        "text": "Lightweight Access Point"
      }
    ],
    "correctMapping": {
      "i2": "t1",
      "i5": "t2",
      "i1": "t3",
      "i4": "t4"
    },
    "explanation": "Cloud-Based Access Point:\n+ managed from a Web-based dashboard\n+ supports automatic deployment\n\nLightweight Access Point:\n+ configured and managed by a WLC\n+ supports different operational modes"
  },
  {
    "id": "p11_q082",
    "type": "mcq",
    "question": "SIP-based Call Admission Control must be configured in the Cisco WLC GUI. SIP call-snooping ports are configured. Which two actions must be completed next? (Choose two)",
    "image": null,
    "options": [
      "Set the QoS level to silver or greater for voice traffic",
      "Enable Media Session Snooping on the WLAN",
      "Configure two different QoS roles for data and voice traffic",
      "Set the QoS level to platinum for voice traffic",
      "Enable traffic shaping for the LAN interface of the WLC"
    ],
    "correctIndexes": [
      1,
      3
    ],
    "explanation": "Configuring SIP-Based CAC (CLI)\nProcedure\nStep 1 Set the voice to the platinum QoS level\nStep 2 Enable the call-snooping feature for a particular WLAN\n…\n\nReference: https://www.cisco.com/c/en/us/td/docs/wireless/controller/8-10/config-guide/b_cg810/wireless_quality_of_service.html"
  }
];
