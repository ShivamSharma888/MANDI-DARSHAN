// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const parkingRoutes = require("./routes/parking");
const templeRoutes = require("./routes/temples");
const feedback=require("./routes/feedback");
const testimonialRoutes = require("./routes/testimonial");


const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use("/api/parking", parkingRoutes);
app.use("/api/temples", templeRoutes);
app.use("/api/feedback",feedback);
app.use("/api/testimonials", testimonialRoutes);
// DB connection + start server
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server running on port ${process.env.PORT || 5000}`);
    });
  })
  .catch((err) => console.error('MongoDB connection error:', err));
