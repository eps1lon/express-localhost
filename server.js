const net = require("net");

let connectionCount = 0;
const server = new net.Server({}, (socket) => {
  console.log(`connection #${++connectionCount}`);
  socket.write("Not found");
  socket.end();
});

const hostname = "0.0.0.0";
const port = 3000;

server.listen(port, hostname, () => {
  console.log(`listening on ${hostname}:${port}`);
});
