const express = require('express');
const router = express.Router();
const professorController = require('../controllers/professorController');

router.get('/', professorController.getAllProfessores); 
router.get('/professor/:id', professorController.getProfessor); 

module.exports = router;
