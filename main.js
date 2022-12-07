const { Server } = require("socket.io");

const io = new Server();

io.on("connection", (socket) => {
  console.log("something");
  socket.on('hi', (arg) => {
    socket.emit("new_message", "deez nuts")
  })
});

io.listen(3000);
console.log("what")