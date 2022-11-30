
const Skill = require('../models/skill');


module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    // edit: editSkill,
    // update: updateSkill,
}

// function updateSkill(req, res){
//     Skill.updateOne(req.body)

//     const todoEdit = Skill.getOne(req.params.id)
//     res.redirect(`/skills/${req.params.id}`)

// }

// function editSkill(req, res){
//     res.render('skills/edit')
// }

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
  }

function create(req, res) {
    console.log('Create function working!!!!!!');
    console.log(req.body);
    Skill.create(req.body);
    res.redirect('/skills')
}

function newSkill(req, res) {
    res.render('skills/new')
}

function show(req, res) {
    const skillFromDB = Skill.getOne(req.params.id);

    res.render('skills/show', {skill: skillFromDB});
}

function index(req, res) {
    const allSkills = Skill.getAll();

    res.render('skills/index', {skills: allSkills});
}