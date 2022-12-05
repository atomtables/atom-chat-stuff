const { Server } = require("socket.io");

const io = new Server();

io.on("connection", (socket) => {
  socket.emit("new_message", "i see u shawty");
});

io.listen(3000);