const Certification = require('../models/certification')

exports.findAll = (req, res) => {
    Certification.find((err, items) => {
        if (err) {
            console.log(err)
        } else {
            res.json(items)
        }
    })
}

exports.create = (req, res) => {
    let certification = new Certification(req.body)
    certification.save()
    .then(item => {
        res.status(200).json({"message": "Certification stored"})
    })
    .catch(err => {
        res.status(400).send("Unable to save certification")
    })
}