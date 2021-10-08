const mongoose = require("mongoose");
const { Server } = require('socket.io');
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = new Server(server);
const routes = require('./routes/routes')
require('dotenv/config')
const votesRoute = require('./routes/routes')

// kill port when CTRL+C, otherwise it throws an error.
process.on('SIGINT', function() {
    process.exit(0);
});


app.use('/', votesRoute);

io.on('connection', (socket) => {
    console.log('a user connected')

    socket.on('new-vote', (vote) => {
        console.log("vote: ", vote);
        socket.broadcast.emit('new-vote', vote);
    })

    socket.on('disconnect', () => console.log('a user disconnected'));
})


// listen port
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log("listening on *:5000")
})


mongoose
    .connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("connected");
    }).catch((err) => console.log(err))
