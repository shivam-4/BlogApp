// auth user and set token
// POST/ api/ users/auth
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: " User Authentication  OK" });
});

//  register a new user
// route POST/api/users/auth
// public access
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  // console.log(name, email, password);
  const userExists = await User.findOne({email});
  if(userExists){
    res.status(400);
    throw new Error('User already exists')
  }

  const user = await User.create({
    name,
    email,
    password
  })
  if(user){
    res.status(201).json({
      _id : user.id,
      name : user.name,
      email : user.email
    })
  }
  else{
    res.status(400);
    throw new Error('Invalid user data')
  }

  res.status(200).json({ message: " Register User" });
});

//  logout user
// route POST/api/users/logout
// public access
const logoutUser = asyncHandler(async (email, res) => {
  res.status(200).json({ message: " LogoutUser" });
});

//  get user profile
// route GET/api/users/profile
// private access
const getUserProfile = asyncHandler(async (email, res) => {
  res.status(200).json({ message: " Get User Profile" });
});

//  update user profile
// route GET/api/users/profile
// private access
const updateUserProfile = asyncHandler(async (email, res) => {
  res.status(200).json({ message: "Update User Profile" });
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
