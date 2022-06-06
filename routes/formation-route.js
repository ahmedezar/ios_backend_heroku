const express = require("express")
const router = express.Router()
const FormationController = require("../controllers/formation-controller")

router.route("/")
    .get(FormationController.getAll)
    .post(FormationController.add)
    .put(FormationController.edit)
    .delete(FormationController.delete)

router.delete("/all", FormationController.deleteAll)

module.exports = router