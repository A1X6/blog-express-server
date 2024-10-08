const isAuthenticated = async (req, res, next) => {
  if (req.session.user) {
    return next();
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = { isAuthenticated };
