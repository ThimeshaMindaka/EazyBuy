import express from 'express';
import bcrypt from 'bcrypt';
import expressAsyncHandler from 'express-async-handler';
import User from '../models/users.js';
import { generateToken } from '../utils.js';

const userRouter = express.Router();

userRouter.post(
    '/signin', expressAsyncHandler(async (req, res) =>{
        const user = await User.findOne({ Email: req.body.Email });
        if(user) {
            if(req.body.Password, user.Password) {
                res.send({
                    _id: user._id,
                    UserName: user.UserName,
                    FirstName: user.FirstName,
                    LastName: user.LastName,
                    Email: user.Email,
                    ContactNumber: user.ContactNumber,
                    isAdmin: user.isAdmin,
                    token: generateToken(user)
                });
                return;
            }
        }
        res.status(401).send({ message: 'Invalid email or password' });
    })
);

userRouter.post(
    '/signup', 
        (async (req, res) => {
        const newUser = new User({
            UserName: req.body.UserName,
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            Email: req.body.Email,
            ContactNumber: req.body.ContactNumber,
            Password: req.body.Password,
            isAdmin: req.body.isAdmin

        });
        
        const user =  newUser.save();
        console.log(user,'abghcsyjy');
        res.send({
            _id: user._id,
            UserName: user.UserName,
            FirstName: user.FirstName,
            LastName: user.LastName,
            Email: user.Email,
            ContactNumber: user.ContactNumber,
            isAdmin: user.isAdmin,
            token: generateToken(user)
        });
        return;
    })
);

export default userRouter;