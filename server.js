require('dotenv').config();  // Ensure dotenv is loaded first
console.log("MongoDB URI:", process.env.MONGO_URI);  // This will log the MongoDB URI to ensure it's being read correctly

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes/routes");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database Connection
const dbURI = process.env.MONGO_URI;
console.log('MongoDB URI:', dbURI);  // This will log the MongoDB URI to ensure it's being read correctly

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.log('Error connecting to MongoDB:', err);
  });

// API Routes
app.use("/api", routes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
