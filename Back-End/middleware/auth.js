import jwt from 'jsonwebtoken';

const authUser = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ success: false, message: 'No token provided' });
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.userId = decoded.id;
    next();
  } catch (error) {
    console.error('Auth error:', error.message);
    res.status(401).json({ success: false, message: 'Not Authorized Login Again' });
  }
};

export default authUser;
