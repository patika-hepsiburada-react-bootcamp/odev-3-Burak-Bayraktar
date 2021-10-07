const mongoose = require("mongoose");
const { Server } = require('socket.io');
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = new Server(server);
const routes = require('./routes/routes')
const bodyParser = require('body-parser');
require('dotenv/config')
app.use(require('./routes/routes'))


// kill port when CTRL+C, otherwise it throws an error.
process.on('SIGINT', function() {
    console.log( "\nGracefully shutting down from SIGINT (Ctrl-C)" );
    process.exit(0);
});

// listen port
const PORT = process.env.PORT || 3002;
const s = app.listen(PORT, () => {
    console.log("listening on *:3002")
    app.get('/votes');
    app.post('/votes');
})


io.on('connection', (socket) => {
    console.log('a user connected')

    socket.on('new-vote', (vote) => {
        console.log("vote: ", vote);
        socket.emit('new-vote', vote);
    })

    socket.on('disconnect', () => console.log('a user disconnected'));
})

mongoose
.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
.then((mongoDb) => {
    console.log("connected");
}).catch((err) => console.log(err))
