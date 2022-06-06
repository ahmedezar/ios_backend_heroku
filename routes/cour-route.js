const express = require("express")
const router = express.Router()
const CourController = require("../controllers/cour-controller")

router.route("/")
    .get(CourController.getAll)
    .post(CourController.add)
    .put(CourController.edit)
    .delete(CourController.delete)

router.delete("/all", CourController.deleteAll)

module.exports = router