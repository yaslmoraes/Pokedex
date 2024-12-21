const professores = [
    { id: 1, nome: 'Professor Carvalho'},
    { id: 2, nome: 'Professor Elm' },
    { id: 3, nome: 'Professor Rowan' },
    { id: 4, nome: 'Professora Juniper' }
];

const getProfessores = () => professores;
const getProfessorById = (id) => professores.find(t => t.id === parseInt(id));

module.exports = {
    getProfessores,
    getProfessorById,
};