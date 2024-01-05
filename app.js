const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const bodyParser = require('body-parser');

require('dotenv').config();


mongoose.connect("mongodb+srv://aayush:root@cluster0.muygwid.mongodb.net/?retryWrites=true&w=majority");

const app = express();
app.use(express.json());







// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Include routes
const notesRoutes = require('./routes/notesRoutes');
app.use('/api/notes', notesRoutes);








const User = require('./models/userModel');
const Note = require('./models/notesModel');
const { getAllNotes, getNoteById, createNote, updateNoteById, deleteNoteById } = require('./services/CRUDServices');



const insertUser = async (user_name, user_email) => {
    User.create({
        name: user_name,
        email: user_email,
    });
}

const authenticate = (req, res, next) => {
    // Implement your authentication logic here
    const token = req.headers.authorization;

    if (!token ) {
        return res.status(401).json({ message: 'Unauthorized, Send token too' });
    } else if (token != process.env.authToken) {
        return res.status(401).json({ message: 'Unauthorized, Send correct token' });
    }

    next();
}



// // Authentication Endpoints
// app.post('/api/auth/signup', (req, res) => {
//     // Implement user signup logic
// });

// app.post('/api/auth/login', (req, res) => {
//     // Implement user login logic and generate JWT token
    
// });

// // Note Endpoints
// app.get('/api/notes', authenticate, async (req, res) => {
//     console.log('Get All Note API');
//     // Implement logic to get all notes for the authenticated user
//     const data = await getAllNotes();
//     return res.status(200).json({ data });
// });

// app.get('/api/notes/:id', authenticate, async(req, res) => {
//     // Implement logic to get a note by ID for the authenticated user
//     const { id } = req.params;
//     const noteId = parseInt(id, 10);

//     const data = await getNoteById(id);
//     return res.status(200).json({ data });
// });

// app.post('/api/create', authenticate, async (req, res) => {
//     console.log(req.body);
//     // Implement logic to create a new note for the authenticated user
//     const { title, content, user_id } = req.body;

//     const data = await createNote(title, content, user_id);

//     return res.status(200).json({ data });

// });

// app.put('/api/notes/update/:id', authenticate, async(req, res) => {
//     // Implement logic to update an existing note by ID for the authenticated user
//     const { id } = req.params;
//     const noteId = parseInt(id, 10);

//     const updateObj = {};

//     const { title, content, user_id } = req.body;

//     if (title) {
//         updateObj.title = title;
//     }

//     if (content) {
//         updateObj.content = content;
//     }

//     if (user_id) {
//         updateObj.user_id = user_id;
//     }

//     const data = await updateNoteById(noteId, updateObj);

//     console.log('data: ', data);

//     return res.status(200).json({ data });



// });

// app.delete('/api/notes/delete/:id', authenticate, async (req, res) => {
//     // Implement logic to delete a note by ID for the authenticated user
//     const { id } = req.params;
//     const noteId = parseInt(id, 10);

//     const deletedData = await deleteNoteById(noteId);
//     return res.status(200).json({ deletedData });

// });

// app.post('/api/notes/:id/share', authenticate, (req, res) => {
//     // Implement logic to share a note with another user for the authenticated user
// });

// app.get('/api/search', authenticate, (req, res) => {
//     const query = req.query.q;
//     // Implement logic to search for notes based on keywords for the authenticated user
// });

// // Test Endpoints
// app.get('/api/test', authenticate, (req, res) => {
//     res.json({ message: 'API is working!' });
// });







// insertUser('Swati', 'kriplani@swatiLucky');

// createNote('India', 'Match lost 23 wickets on first day', 124);

const PORT = process.env.PORT || 2100;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});