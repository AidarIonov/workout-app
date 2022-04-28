import asyncHandler from 'express-async-handler';
import User from '../../models/userModel.js';
//@desc GET user profile
//@route GET api/user/profile
//@access Private
export const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id).select('-password');
  res.json(user)
});