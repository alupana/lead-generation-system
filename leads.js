const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/', async (req, res) => {
  const { name, email, company, message } = req.body;

  // Basic validation
  if (!name || !email || !/\S+@\S+\.\S+/.test(email)) {
    return res.status(400).json({ error: 'Name and valid email are required.' });
  }

  try {
    // Forward to n8n webhook
    await axios.post(process.env.N8N_WEBHOOK_URL, {
      name,
      email,
      company,
      message,
    });

    res.status(200).json({ message: 'Lead submitted successfully!' });
  } catch (error) {
    console.error('Error forwarding to n8n:', error.message);
    res.status(500).json({ error: 'Failed to forward lead to automation workflow.' });
  }
});

module.exports = router;
