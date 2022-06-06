const Demande = require("../models/Demande")

exports.getAll = async (req, res) => {
    res.send({ demandes: await Demande.find().populate("user") })
}

exports.check = async (req, res) => {
    console.log(req.body)

    let demande = await Demande.findOne({ user : req.body.user })

    if (demande) {
        console.log("Exist")
        res.send({ "exist" : true, demande })
    } else {
        console.log("Not Exist")
        res.send({ "exist" : false })
    }
}

exports.add = async (req, res) => {
    const { nom, cv, etat, user } = req.body;

    const nouveauDemande = new Demande()

    nouveauDemande.nom = nom;
    nouveauDemande.cv = cv;
    nouveauDemande.etat = 0;
    nouveauDemande.user = user;

    nouveauDemande.save();

    res.status(201).send({ message: "success", demande: nouveauDemande })
}

exports.edit = async (req, res) => {
    const { _id, etat } = req.body

    let demande = await Demande.findOneAndUpdate(
        { _id: _id },
        {
            $set: {
                etat: etat
            }
        }
    )
    res.status(201).send({ message: "success", demande: demande })
}

exports.delete = async (req, res) => {
    const demande = await Demande.findById(req.body._id).remove()
    res.status(201).send({ message: "success", demande: demande })
}

exports.deleteAll = async (req, res) => {
    Demande.remove({}, function (err, demande) {
        if (err) { return handleError(res, err) }
        return res.status(204).send({ message: "Aucun element" })
    })
}
