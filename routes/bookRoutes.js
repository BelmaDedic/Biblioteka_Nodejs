const express = require('express');
const controller = require('../controllers/controller');

const router = express.Router();

router.get('/', controller.book_index);
router.get('/:id', controller.book_details);
router.get('/add-new', controller.book_create_get);
router.post('/', controller.book_create_post);
router.delete('/:id', controller.book_delete);

module.exports = router;