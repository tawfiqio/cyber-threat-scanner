# Cyber Threat Scanner 🔍🛡️

A simple Node.js-based cyber threat scanner that queries public threat intelligence APIs  
to detect if IP addresses, domains, or file hashes are flagged as malicious.

---

## Features

- Scan IP addresses against AbuseIPDB  
- Scan domains and URLs via VirusTotal  
- Scan file hashes for known malware  
- REST API to submit scan requests and get results  
- Easily extendable to add more threat intel sources  

---

## Installation

1. Clone the repo:

```bash
git clone https://github.com/yourusername/cyber-threat-scanner.git
cd cyber-threat-scanner/backend
npm install
