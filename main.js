const { Server } = require("socket.io");

const io = new Server();

io.on("connection", (socket) => {
  console.log("New device has been connected with socket.id " + socket.id);
  socket.on("send_message", (message, username) => {
    console.log("New message has been sent. Message says: " + message + " and sent from " + username)
    socket.broadcast.emit("new_message", message + "%&##%%@" + username)
  })
});

io.listen(3000);
console.log("socket.io server listening at *:3000")