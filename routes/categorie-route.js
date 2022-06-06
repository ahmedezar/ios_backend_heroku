const express = require("express")
const router = express.Router()
const CategorieController = require("../controllers/categorie-controller")
const upload = require('../middlewares/storage');

router.route("/")
    .get(CategorieController.getAll)
    .post(upload.single('image'), CategorieController.add)
    .put(CategorieController.edit)
    .delete(CategorieController.delete)

router.delete("/all", CategorieController.deleteAll)

module.exports = router