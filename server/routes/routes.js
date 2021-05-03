const express = require('express')
const router = express.Router();
const ProjectController = require('../controllers/ProjectController')
const SkillController = require('../controllers/SkillController')
const CertificationController = require('../controllers/CertificationController')

router.get('/', (req, res, next) => {
    res.send("Working")
})

router.get('/projects', ProjectController.findAll)
router.post('/projects/add', ProjectController.create)

router.get('/skills', SkillController.findAll)
router.post('/skills/add', SkillController.create)

router.get('/certifications', CertificationController.findAll)
router.post('/certifications/add', CertificationController.create)
module.exports = router;