const express = require("express")
const router = express.Router()
const DemandeController = require("../controllers/demande-controller")

router.route("/")
    .get(DemandeController.getAll)
    .post(DemandeController.add)
    .put(DemandeController.edit)
    .delete(DemandeController.delete)

router.post("/check", DemandeController.check)
router.delete("/all", DemandeController.deleteAll)

module.exports = router