const jsonServer = require("json-server");

const server = jsonServer.create();
const middleWares = jsonServer.defaults();
const route = jsonServer.router("db.json");

server.use(middleWares);
server.use(route);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log("server is running at ", PORT);
});
