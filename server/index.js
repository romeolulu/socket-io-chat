const http = require("http").createServer();  // Could use express instead

const io = require('socket.io')(http, {
    cors: {origin: "*"} //Allow any url to access this backend url
});


io.on("connection", (socket)=>{
    console.log("a user connected");

    socket.on("message", (message) => {
        console.log(message);
        io.emit('message', `${socket.id.substr(0,2)} said ${message}`);
    });
});

http.listen(8080, ()=>console.log("Listening on http://localhost:8080"));