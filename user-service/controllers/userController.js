const { db, Table } = require("../config/db-config");
const User = require("../models/userModel");
const {
  createOrUpdate,
  deleteUserById,
  getUserById,
  readAllUsers,
} = require("../config/db");

// Create User
const createUser = async (req, res) => {
  const {id, userType, name} = req.body; 
  const createdDate = new Date().toISOString();
  const user = new User({id, userType, name, createdDate});  
  const { success, data } = await createOrUpdate(user);
  if (success) {
    return res.json({ success, data });
  }
  return res.status(500).json({ success: false, message: "Error" });
};

// Get All Users
const getAllUsers = async (req, res) => {
  const { success, data } = await readAllUsers();

  if (success) {
    return res.json({ success, data });
  }
  return res.status(500).json({ success: false, messsage: "Error" });
};

//Get one user
const getUser = async (req, res) => {
  const { id } = req.params;
  const { success, data } = await getUserById(id);
  console.log(data);
  if (success) {
    return res.json({ success, data });
  }

  return res.status(500).json({ success: false, message: "Error" });
};

//Update user
const updateUSer = async (req, res) => {
  const userData = req.body;
  const user = new User(userData);
  const { id } = req.params;
  user.id = id;

  const { success, data } = await createOrUpdate(user);

  if (success) {
    return res.json({ success, data });
  }

  return res.status(500).json({ success: false, message: "Error" });
};

// Delete User
const deleteUser = async (req, res) => {
  const { id } = req.params;
  const { success, data } = await deleteUserById(id);
  if (success) {
    return res.json({ success, data });
  }
  return res.status(500).json({ success: false, message: "Error" });
};

module.exports = {
  createUser,
  getAllUsers,
  getUser,
  updateUSer,
  deleteUser
};
