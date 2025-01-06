const express = require('express');
const bodyParser = require('body-parser');
const grainsRoutes = require('./routes/grains');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Enable CORS

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ message: 'API is running!' });
});

// Grains routes
app.use('/grains', grainsRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
