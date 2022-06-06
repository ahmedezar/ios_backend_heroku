const Categorie = require("../models/Categorie")

exports.getAll = async (req, res) => {
    res.send({ categories: await Categorie.find() })
}

exports.add = async (req, res) => {
    const { nom } = req.body;

    const nouveauCategorie = new Categorie()

    nouveauCategorie.nom = nom;
    nouveauCategorie.image = req.file.filename;

    nouveauCategorie.save();

    res.status(201).send({ message: "success", categorie: nouveauCategorie })
}

exports.edit = async (req, res) => {
    const { _id, nom } = req.body

    let categorie = await Categorie.findOneAndUpdate(
        { _id: _id },
        {
            $set: {
                nom: nom
            }
        }
    )
    res.status(201).send({ message: "success", categorie: categorie })
}

exports.delete = async (req, res) => {
    const categorie = await Categorie.findById(req.body._id).remove()
    res.status(201).send({ message: "success", categorie: categorie })
}

exports.deleteAll = async (req, res) => {
    Categorie.remove({}, function (err, categorie) {
        if (err) { return handleError(res, err) }
        return res.status(204).send({ message: "Aucun element" })
    })
}
