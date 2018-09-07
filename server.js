const express = require('express');
const server = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const projectRoutes = require('./Routes/projectRoutes');
const actionRoutes = require('./Route/actionRoutes');

server.use(cors());
server.use(bodyParser.json());
server.use('/project', projectRoutes);
server.use('/action', actionRoutes);

server.get('/', (req, res) => {
    res.send('successful');
})

server.listen(8000, () => {
    console.log('Listening - port 8000');
})