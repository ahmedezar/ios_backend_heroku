const Cour = require("../models/Cour")

exports.getAll = async (req, res) => {
    res.send({ cours: await Cour.find().populate("categorie") })
}

exports.add = async (req, res) => {
    const { nom, categorie, pdf, description } = req.body;

    const nouveauCour = new Cour()

    nouveauCour.nom = nom;
    nouveauCour.categorie = categorie;
    nouveauCour.pdf = pdf;
    nouveauCour.description = description;

    nouveauCour.save();

    res.status(201).send({ message: "success", cour: nouveauCour })
}

exports.edit = async (req, res) => {
    const { _id, nom, categorie, pdf } = req.body

    let cour = await Cour.findOneAndUpdate(
        { _id: _id },
        {
            $set: {
                nom: nom,
                categorie: categorie,
                pdf: pdf
            }
        }
    )
    res.status(201).send({ message: "success", cour: cour })
}

exports.delete = async (req, res) => {
    const cour = await Cour.findById(req.body._id).remove()
    res.status(201).send({ message: "success", cour: cour })
}

exports.deleteAll = async (req, res) => {
    Cour.remove({}, function (err, cour) {
        if (err) { return handleError(res, err) }
        return res.status(204).send({ message: "Aucun element" })
    })
}
