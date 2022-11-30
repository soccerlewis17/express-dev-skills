
const skills = [
    {id: 1, skill: 'Javascript'},
    {id: 2, skill: 'CSS'},
    {id: 3, skill: 'Googling'},
    {id: 4, skill: 'HTML'}
];

module.exports = {
    getOne,
    getAll,
    create,
    deleteOne,
};

function deleteOne(id) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
  }

function create(skill) {
    skill.id = skills.length + 1;
    skills.push(skill);
  }

function getAll() {
    return skills;
  };

function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
};