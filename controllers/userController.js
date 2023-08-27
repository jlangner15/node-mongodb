const UserService = require("../services/userService");

const getAllUsers = async (req, res) => {
    const allUsers = await UserService.getAllUsers();
    res.send(allUsers);
};

const getOneUser = (req, res) => {
    const User = UserService.getOneUser();
    res.send("Get an existing user");
};

const createNewUser = (req, res) => {
    const createdUser = UserService.createNewUser();
    res.send("Create a new User");
};

const updateOneUser = (req, res) => {
    const updatedUser = UserService.updateOneUser();
    res.send("Update an existing User");
};

const deleteOneUser = (req, res) => {
    UserService.deleteOneUser();
    res.send("Delete an existing User");
};

module.exports = {
    getAllUsers,
    getOneUser,
    createNewUser,
    updateOneUser,
    deleteOneUser,
};