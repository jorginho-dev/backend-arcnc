const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");
const path = require("path");
const socktio = require("socket.io");
const http = require('http');

const app = express();
const server = http.Server(app);
const io = socktio(server);


io.on('connection', socket => {
  console.log('usuario conectado', socket.id);
})

mongoose.connect(
  "mongodb+srv://omnistack:omnistack@omnistack9-qyvu6.mongodb.net/semana09?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use(cors());
app.use(express.json());
app.use("/files", express.static(path.resolve(__dirname, "..", "uploads")));
app.use(routes);

server.listen(3333);
