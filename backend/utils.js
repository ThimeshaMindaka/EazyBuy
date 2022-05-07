import jwt from 'jsonwebtoken';

export const generateToken = (user) =>{
    return  jwt.sign(
        {
            _id: user._id,
             UserName: user.UserName,
             FirstName: user.FirstName,
             LastName: user.LastName,
             Email: user.Email,
             ContactNumber: user.ContactNumber,
             isAdmin: user.isAdmin,
        },
             process.env.JWT_SECRET, {
        
                expiresIn: '1d',
    })
}

export const isAuth = (req, res, next) => {
    const authorization = req.headers.authorization;
    if (authorization) {
      const token = authorization.slice(7, authorization.length); // Bearer XXXXXX
      jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
        if (err) {
          res.status(401).send({ message: 'Invalid Token' });
        } else {
          req.user = decode;
          next();
        }
      });
    } else {
      res.status(401).send({ message: 'No Token' });
    }
  };

  export const isAdmin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
      next();
    } else {
      res.status(401).send({ message: 'Invalid Admin Token' });
    }
  };