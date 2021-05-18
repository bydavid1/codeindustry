const path = require('path')

exports.curriculum = (req, res) => {

    res.sendFile(path.join(__dirname, '../../public/storage/documents/CVSpanish.pdf'))
}