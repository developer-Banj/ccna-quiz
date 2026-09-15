// Auto-generated from Part_9_.pdf and Part_12.pdf. Do not hand-edit.
// BATCH_A / BATCH_B built by build_data.py. BATCH_C (leftover + drag-and-drop questions) built by build_batch_c.py.
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
