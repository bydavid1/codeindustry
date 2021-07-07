const express = require('express')
const router = express.Router();

const path = require('path')

router.get('/portfolio', function(req, res){
    res.sendFile(path.join(__dirname, '../public/portfolio.html'))
})

// Dont stage 
router.get('*', function(req, res){
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = router;