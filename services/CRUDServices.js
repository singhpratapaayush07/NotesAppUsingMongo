const mongoose = require('mongoose');
const Note = require('../models/notesModel');
const User = require('../models/userModel');

let note_id_count = 0;

const autoIncrementNoteId = () => {
    note_id_count += 1;
    return note_id_count;
}

// Create a new note
const createNote = async (title, content, user_id) => {
    try {
        const newNote = new Note({ note_id: autoIncrementNoteId(), title, content, user_id });
        const savedNote = await newNote.save();
        console.log('Note saved:', savedNote);
        return savedNote;
    } catch (error) {
        console.error('Error saving note:', error);
        throw error;
    }
};

const getAllNotes = async () => {
    try {
        console.log('Get Notes called');
        const notes = await Note.find();
        return notes;
    } catch (error) {
        console.error('Error fetching notes:', error);
    }
};



// Read a note by note_id
const getNoteById = async (noteId) => {
    try {
        console.log('note_id', noteId);
        const note = await Note.findOne({ note_id: noteId });
        console.log('Found Note by note_id:', note);

        return note;
    } catch (error) {
        console.error('Error fetching note by note_id:', error);
    }
};

// Update a note by note_id
const updateNoteById = async (noteId, updateData) => {
    try {
        const updatedNote = await Note.findOneAndUpdate({ note_id: noteId }, updateData, { new: true });
        console.log('Updated Note:', updatedNote);

        return updatedNote;
    } catch (error) {
        console.error('Error updating note:', error);
    }
};

// Delete a note by note_id
const deleteNoteById = async (noteId) => {
    try {
        const deletedNote = await Note.findOneAndDelete({ note_id: noteId });
        console.log('Deleted Note:', deletedNote);
        return deletedNote;
    } catch (error) {
        console.error('Error deleting note:', error);
    }
};



const searchNotesByKeyword = async (keyword) => {
    try {
        const regex = new RegExp(keyword, 'i'); // Case-insensitive regex for the keyword
        const notes = await Note.find({ content: regex });

        console.log(notes);

        return notes;
    } catch (error) {
        console.error('Error searching notes:', error);
        throw error;
    }
}

module.exports = {
    createNote,
    getNoteById,
    getAllNotes,
    updateNoteById,
    deleteNoteById,
    searchNotesByKeyword,
    // getAllUsers,
};