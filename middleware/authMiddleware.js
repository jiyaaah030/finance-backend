
exports.checkRole = (allowedRoles) => {
  return (req, res, next) => {
    const userRole = req.headers.role; 

    if (!userRole) {
      return res.status(401).json({ message: "No role provided" });
    }

    if (!allowedRoles.includes(userRole)) {
      return res.status(403).json({ message: "Access denied" });
    }

    next();
  };
};