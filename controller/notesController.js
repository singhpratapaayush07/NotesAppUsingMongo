const { getAllNotes, createNote, updateNoteById, deleteNoteById, getNoteById, searchNotesByKeyword } = require("../services/CRUDServices");

const getNotes = async (req, res) => {
    try {
        const notes = await getAllNotes();
        res.json(notes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getSingleNote = async (req, res) => {
    const { id } = req.params;
    const noteId = parseInt(id, 10);

    const data = await getNoteById(id);
    return res.status(200).json({ data });
}

const createNewNote = async (req, res) =>{
    try {
        const { title, content, user_id } = req.body;
        const data = await createNote(title, content, user_id);
        console.log("Note success");
        return res.status(200).json({ data });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateNote = async (req, res) =>{
    try {
        const { id } = req.params;
        const noteId = parseInt(id, 10);

        const updateObj = {};

        const { title, content, user_id } = req.body;

        if (title) {
            updateObj.title = title;
        }

        if (content) {
            updateObj.content = content;
        }

        if (user_id) {
            updateObj.user_id = user_id;
        }

        const data = await updateNoteById(noteId, updateObj);

        console.log('data: ', data);

        return res.status(200).json({ data });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteNote = async (req, res) =>{
    try {
        // Implement logic to delete a note by ID for the authenticated user
        const { id } = req.params;
        const noteId = parseInt(id, 10);
        const deletedData = await deleteNoteById(noteId);
        return res.status(200).json({ deletedData });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = {
    getNotes,
    createNewNote,
    updateNote,
    deleteNote,
    getSingleNote,
}
