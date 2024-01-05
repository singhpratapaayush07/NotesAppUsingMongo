const express = require('express');
const router = express.Router();
const notesController = require('../controller/notesController');

// Base route: /api/notes
// Routes
router.get('/', notesController.getNotes);
router.get('/:id', notesController.getSingleNote);
router.post('/create', notesController.createNewNote);
router.put('/update/:id', notesController.updateNote);
router.delete('/delete/:id', notesController.deleteNote);

module.exports = router;
