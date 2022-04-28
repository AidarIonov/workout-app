//@desc GET user profile
//@route GET api/user/profile
//@access Private

export const getUserProfile = (req, res) => {
  const user = {
    name: 'Aidar',
    age: 22
  }

  res.json(user)
}