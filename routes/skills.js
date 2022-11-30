var express = require('express');
var router = express.Router();

const skillsController = require('../controllers/skills');


/* GET skills listing. */
router.get('/', skillsController.index);
router.get('/new', skillsController.new);
router.get('/:id', skillsController.show);
router.post('/', skillsController.create);
router.delete('/:id', skillsController.delete);
// router.put('/:id', skillsController.update);
// router.get('/:id/edit', skillsController.edit);

module.exports = router;
