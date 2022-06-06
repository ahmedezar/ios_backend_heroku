const express = require("express")
const router = express.Router()
const UserController = require("../controllers/user-controller")

router.get("/all", UserController.getAll)
router.post("/login", UserController.login)
router.post("/register", UserController.register)
router.put("/updateProfil", UserController.updateProfil)
router.delete("/one", UserController.delete)
router.delete("/all", UserController.deleteAll)

module.exports = router
