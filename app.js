const http = require('http');

const express = require('express');

const app = express();

const adminRouter = require('./routes/admin');
const clientRouter = require('./routes/client');
// const bodyParser = require('body-parser');

// app.use(bodyParser.json());

app.use(adminRouter);
app.use(clientRouter);

const server = http.createServer(app);

server.listen(3000);