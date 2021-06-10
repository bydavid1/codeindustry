const Account = require('../models/account')

exports.info = (req, res) => {
    let query = Account.findOne()
    query.exec((err, items) => {
        if (err) {
            console.log(err)
        } else {
            res.json(items)
        }
    })
}

exports.register = (req, res) => {
    let info = new Account(req.body);
    info.save()
    .then(item => {
        res.status(200).json({"message": "Registered"})
    })
    .catch(err => {
        res.status(400).send("Unable to save information")
    })
}