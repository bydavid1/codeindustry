const express = require('express')
const router = express.Router();
const ProjectController = require('../controllers/ProjectController')
const SkillController = require('../controllers/SkillController')
const CertificationController = require('../controllers/CertificationController')
const AccountController = require('../controllers/AccountController')
const DocumentController = require('../controllers/DocumentController')

const path = require('path')

router.get('/projects', ProjectController.findAll)
router.post('/projects/add', ProjectController.create)

router.get('/skills', SkillController.findAll)
router.post('/skills/add', SkillController.create)

router.get('/certifications', CertificationController.findAll)
router.post('/certifications/add', CertificationController.create)

router.post('/account/register',  AccountController.register)
router.get('/account/info',  AccountController.info)

router.get('/curriculum', DocumentController.curriculum)

// Dont stage 
router.get('*', function(req, res){
    res.sendFile(path.join(__dirname, '../../public/index.html'))
})

module.exports = router;