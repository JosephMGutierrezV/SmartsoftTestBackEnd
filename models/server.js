const express = require("express");
const cors = require("cors");
const { dbConection } = require("../database/config.db");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.columnsPath = "api/columns";
    this.connectDb();
    this.middlewares();
    this.routes();
  }

  async connectDb() {
    await dbConection();
  }
  middlewares() {
    this.app.use(cors);
  }

  routes() {
    this.app.use(this.columnsPath, require("../routes/columns.routes"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`[Servidor iniciado en el puerto: ${this.port}]`);
    });
  }
}

module.exports = Server;
