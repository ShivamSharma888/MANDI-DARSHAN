const jwt = require("jsonwebtoken");
const User = require("../models/User"); // Make sure your User model exists

// Middleware to verify JWT token and attach full user object
const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Fetch user from DB
    const user = await User.findById(decoded.id).select("-password"); // Exclude password
    if (!user) {
      return res.status(401).json({ message: "Unauthorized: User not found" });
    }

    // Attach full user object to request
    req.user = user;
    next();
  } catch (err) {
    console.error("Token verification failed:", err);
    return res.status(403).json({ message: "Forbidden: Token invalid or expired" });
  }
};

// Middleware to authorize specific roles (Admin, User, etc.)
const authorize = (...roles) => (req, res, next) => {
  if (!req.user || !roles.includes(req.user.userType)) {
    return res.status(403).json({ message: "Forbidden: Access denied" });
  }
  next();
};

module.exports = { authMiddleware, authorize };
