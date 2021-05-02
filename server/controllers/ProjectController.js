const Project = require('../models/project')

exports.findAll = (req, res) => {
    Project.find((err, items) => {
        if (err) {
            console.log(err)
        } else {
            res.json(items)
        }
    })
}

exports.create = (req, res) => {
    var project = new Project(req.body)
    project.save()
    .then(item => {
        res.status(200).json({"message": "Project saved"})
    })
    .catch(err => {
        res.status(400).send("Unable to save project")
    })
}