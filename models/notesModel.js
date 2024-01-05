const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    note_id: { type: Number, unique: true },
    title: String,
    content: String,
    user_id: Number,
});

module.exports = mongoose.model('Note', noteSchema);