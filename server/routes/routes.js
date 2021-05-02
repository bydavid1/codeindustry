const express = require('express')
const router = express.Router();
const ProjectController = require('../controllers/ProjectController')

router.get('/', (req, res, next) => {
    res.send("Working")
})

router.get('/projects', ProjectController.findAll)
router.post('/projects/add', ProjectController.create)
module.exports = router;