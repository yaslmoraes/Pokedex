const professorModel = require('../models/professorModel');

const getAllProfessores = (req, res) => {
    const professores = professorModel.getProfessores();
    res.render('professores', { professores });
};

const getProfessor = (req, res) => {
    const professor = professorModel.getProfessorById(req.params.id);
    if (professor) {
        res.render('professor', { professor });
    } else {
        res.status(404).send('Professor não encontrado');
    }
};


module.exports = {
    getAllProfessores,
    getProfessor,
};
