import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js'

// auth user/set token
// post /api/users/auth
const authUser = asyncHandler(async (req,res) => {
    res.status(200).json({message: 'auth user'})
});

// register new user
// post /api/users
const registerUser = asyncHandler(async (req,res) => {
    const {email, password} = req.body;

    const userExists = await User.findOne({email});
    if(userExists){
        res.status(400);
        throw new Error('User already exists');
    }

    const user = await User.create({email, password});

    if(user) {
        res.status(201).json({
            _id: user._id,
            email: user.email
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
});

// logout user
// post /api/users/logout
const logoutUser = asyncHandler(async (req,res) => {
    res.status(200).json({message: 'logout user'})
});

export {
    authUser,
    registerUser,
    logoutUser
};