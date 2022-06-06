const express = require("express")
const router = express.Router()
const PanierController = require("../controllers/panier-controller")

router.route("/")
    .get(PanierController.getAll)
    .post(PanierController.add)
    .put(PanierController.edit)
    .delete(PanierController.delete)

router.delete("/all", PanierController.deleteAll)

module.exports = router