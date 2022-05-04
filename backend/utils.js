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
        
                expiresIn: '30d',
    })
}