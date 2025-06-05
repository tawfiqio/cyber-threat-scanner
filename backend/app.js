const express = require('express');
const { scanIP, scanDomain, scanHash } = require('./scanner');

const app = express();
const PORT = 3000;

app.get('/scan/ip/:ip', async (req, res) => {
  try {
    const result = await scanIP(req.params.ip);
    res.json(result);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.get('/scan/domain/:domain', async (req, res) => {
  try {
    const result = await scanDomain(req.params.domain);
    res.json(result);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.get('/scan/hash/:hash', async (req, res) => {
  try {
    const result = await scanHash(req.params.hash);
    res.json(result);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.listen(PORT, () => {
  console.log(`Cyber Threat Scanner running on http://localhost:${PORT}`);
});
