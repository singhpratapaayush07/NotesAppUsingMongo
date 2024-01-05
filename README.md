# NotesAppUsingMongo
* Technology Used:
* Framework: Express
* Language: Node.js
* Database: MongoDB

API End Points:
1. GET /api/notes: get a list of all notes for the authenticated user.
Curl For API:
curl --location --request GET 'http://localhost:2100/api/notes' \
--header 'Authorization: MyAuthToken'

2. GET /api/notes/:id: get a note by ID for the authenticated user.
ID is note_id in schema
Curl For API:
curl --location --request GET 'http://localhost:2100/api/notes/1' \
--header 'Authorization: MyAuthToken'


3. POST /api/notes/create: create a new note for the user.
Curl for API:
curl --location --request POST 'http://localhost:2100/api/notes/create' \
--header 'Authorization: MyAuthToken' \
--header 'Content-Type: application/json' \
--data-raw '{
    "title": "ChakDendia4",
    "content": "Motivational Movie",
    "user_id":1
}'


4. PUT /api/notes/:id: update an existing note by ID for the user.
ID us note_id in schema used.
Curl For API:
curl --location --request PUT 'http://localhost:2100/api/notes/update/1' \
--header 'Authorization: MyAuthToken' \
--header 'Content-Type: application/json' \
--data-raw '{
    "title": "ChakDendia19",
    "user_id": 14
}'
   
5. DELETE /api/notes/:id: delete a note by ID for the authenticated user.
Curl For API
curl --location --request DELETE 'http://localhost:2100/api/notes/delete/6' \
--header 'Authorization: MyAuthToken' \
--data-raw ''

