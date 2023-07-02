'use strict';
const server = require('./server');
const { config } = require('dotenv');
config();

const PORT = process.env.PORT;

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
