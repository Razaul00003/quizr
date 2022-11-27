const router = require("express").Router();

//import it from controller
const { userLogin, userRegister } = require("../controllers/authController");
router.post("/login", userLogin);
router.post("/register", userRegister);

module.exports = router;
