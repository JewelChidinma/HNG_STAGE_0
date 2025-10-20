require('dotenv').config(); // Load environment variables
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/me', async (req, res) => {
  try {
   
    let catFact = 'Cats are amazing creatures!';
    
    try {
      const response = await axios.get('https://catfact.ninja/fact', {
        timeout: 5000 // 5 second timeout
      });
      catFact = response.data.fact;
    } catch (apiError) {
      console.error('Cat API error:', apiError.message);
   
    }

    const timestamp = new Date().toISOString();

    const profileData = {
      status: 'success',
      user: {
        email: process.env.EMAIL,
        name: process.env.NAME,
        stack: process.env.STACK
      },
      timestamp: timestamp,
      fact: catFact
    };

    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(profileData);

  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Internal server error'
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);

});