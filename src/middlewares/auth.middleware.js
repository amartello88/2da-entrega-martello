const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1]; // Bearer <token>

  if (!token) return res.status(401).json({ message: "Token requerido" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Token invalido" });
  }
};

module.exports = auth;
