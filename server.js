const express = require('express');
const server = express();
const cors = require('cors');
const bodyParser = require('body-parser');

server.use(cors());
server.use(bodyParser.json());

server.get('/', (req, res) => {
    res.send('successful');
})

server.listen(8000, () => {
    console.log('Listening - port 8000');
})