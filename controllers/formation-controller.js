const Formation = require("../models/Formation")

exports.getAll = async (req, res) => {
    res.send({ formations: await Formation.find() })
}

exports.add = async (req, res) => {
    const { nomFormateur, nomFormation, prix, description } = req.body;

    const nouveauFormation = new Formation()

    nouveauFormation.nomFormateur = nomFormateur;
    nouveauFormation.nomFormation = nomFormation;
    nouveauFormation.prix = prix;
    nouveauFormation.description = description;

    nouveauFormation.save();

    res.status(201).send({ message: "success", formation: nouveauFormation })
}

exports.edit = async (req, res) => {
    const { _id, a } = req.body

    let formation = await Formation.findOneAndUpdate(
        { _id: _id },
        {
            $set: {
                nomFormateur: nomFormateur,
                nomFormation: nomFormation,
                prix: prix,
                description: description
            }
        }
    )
    res.status(201).send({ message: "success", formation: formation })
}

exports.delete = async (req, res) => {
    const formation = await Formation.findById(req.body._id).remove()
    res.status(201).send({ message: "success", formation: formation })
}

exports.deleteAll = async (req, res) => {
    Formation.remove({}, function (err, formation) {
        if (err) { return handleError(res, err) }
        return res.status(204).send({ message: "Aucun element" })
    })
}
