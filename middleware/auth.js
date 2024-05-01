const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer ')) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                console.log('Failed to authenticate token:', token);
                console.log('Error:', err);
                return res.status(401).json({ message: 'Authentication failed', error: err.message });
            } else {
                req.user = decoded;
                next();
            }
        });
    } else {
        return res.status(403).json({ message: 'No token provided' });
    }
};

module.exports = authenticate;
