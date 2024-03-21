const router = require("express").Router();
const { createUser, getAllUsers, getUser, updateUSer, deleteUser } = require("../controllers/userController");

router.route("/user")
    .post(createUser)
    .get(getAllUsers);
router.route("/user/:id")
    .get(getUser)
    .put(updateUSer)
    .delete(deleteUser);

module.exports = router;
