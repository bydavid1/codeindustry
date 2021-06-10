const Skill = require('../models/skill')

exports.findAll = (req, res) => {
    Skill.find((err, items) => {
        if (err) {
            res.status(500).send("Unable to retrieve skills")
        } else {
            res.status(200).json(items)
        }
    })
}

exports.create = (req, res) => {
    let skill = new Skill(req.body);
    skill.save()
    .then(item => {
        res.status(200).json({"message": "skill stored"})
    })
    .catch(err => {
        res.status(500).send("Unable to store skill")
    })
}