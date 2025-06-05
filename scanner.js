const axios = require('axios');
const config = require('./config');

async function scanIP(ip) {
  const url = `https://api.abuseipdb.com/api/v2/check?ipAddress=${ip}&maxAgeInDays=90`;
  try {
    const res = await axios.get(url, {
      headers: { Key: config.ABUSEIPDB_API_KEY, Accept: 'application/json' },
    });
    return res.data;
  } catch (err) {
    throw new Error('IP scan failed: ' + err.message);
  }
}

async function scanDomain(domain) {
  const url = `https://www.virustotal.com/api/v3/domains/${domain}`;
  try {
    const res = await axios.get(url, {
      headers: { 'x-apikey': config.VIRUSTOTAL_API_KEY },
    });
    return res.data;
  } catch (err) {
    throw new Error('Domain scan failed: ' + err.message);
  }
}

async function scanHash(hash) {
  const url = `https://www.virustotal.com/api/v3/files/${hash}`;
  try {
    const res = await axios.get(url, {
      headers: { 'x-apikey': config.VIRUSTOTAL_API_KEY },
    });
    return res.data;
  } catch (err) {
    throw new Error('Hash scan failed: ' + err.message);
  }
}

module.exports = { scanIP, scanDomain, scanHash };
