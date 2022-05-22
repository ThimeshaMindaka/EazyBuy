import express from 'express';
import bcrypt from 'bcrypt';
import expressAsyncHandler from 'express-async-handler';
import User from '../models/users.js';
import { generateToken , isAdmin , isAuth } from '../utils.js';

const userRouter = express.Router();

userRouter.post(
    '/signin', expressAsyncHandler(async (req, res) => {
        const user = await User.findOne({ Email: req.body.Email });
        if (user) {
            if (req.body.Password, user.Password) {
                res.send({
                    _id: user._id,
                    UserName: user.UserName,
                    FirstName: user.FirstName,
                    LastName: user.LastName,
                    Email: user.Email,
                    ContactNumber: user.ContactNumber,
                    isAdmin: user.isAdmin,
                    Password: user.Password,
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

        const user = newUser.save();
        console.log(user, 'abghcsyjy');
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

userRouter.put(
    '/:id',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
        const user = await User.findById(req.params.id);
        if (user) {
            user.name = req.body.name || user.name;
            user.email = req.body.email || user.email;
            user.isAdmin = Boolean(req.body.isAdmin);
            const updatedUser = await user.save();
            res.send({ message: 'User Updated', user: updatedUser });
        } else {
            res.status(404).send({ message: 'User Not Found' });
        }
    })
);

userRouter.put(
    '/update/:id',
    isAuth,
    expressAsyncHandler(async (req, res) => {
        const user = await User.findById(req.params.id);
        if (user) {
            user.UserName = req.body.UserName,
            user.FirstName = req.body.FirstName,
            user.LastName = req.body.LastName,
            user.Email = req.body.Email,
            user.ContactNumber = req.body.ContactNumber,
            user.Password = req.body.Password

            const updatedUser = await user.save();
            res.send({
                _id: updatedUser._id,
                UserName: req.body.UserName,
                FirstName: req.body.FirstName,
                LastName: req.body.LastName,
                Email: req.body.Email,
                ContactNumber: req.body.ContactNumber,
                Password: req.body.Password
            });
        } else {
            res.status(404).send({ message: 'User not found' });
        }
    })
);

userRouter.delete(
    '/delete/:id',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
      const user = await User.findById(req.params.id);
      if (user) {
        if (user.email === 'amal@gmail.com') {
          res.status(400).send({ message: 'Can Not Delete Admin User' });
          return;
        }
        await user.remove();
        res.send({ message: 'User Deleted' });
      } else {
        res.status(404).send({ message: 'User Not Found' });
      }
    })
  );

  userRouter.get(
      '/all',
      expressAsyncHandler(async (req,res) => {
          const user = await User.find({isAdmin:"false"});

          res.json(user);
      })
  )

  userRouter.get('/logout', (req, res) => {
    res.clearCookie(COOKIE_NAME)
})

export default userRouter;