const express = require('express');
const axios = require('axios');
const router = express.Router();

// POST API - Node.js will forward data to Python FastAPI server
router.post('/contractor-score', async (req, res) => {
  try {
    const contractorData = req.body;

    // Call the Python backend running on 8000
    const response = await axios.post('http://localhost:8000/predict-contractor-score', contractorData);

    res.json(response.data);  // Send the ML response back to React
  } catch (error) {
    console.error('Error connecting to Python ML server:', error.message);
    res.status(500).json({ message: 'Error fetching contractor score' });
  }
});

module.exports = router;
