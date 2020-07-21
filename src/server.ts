import express from "express";
import config from "./utils/config";

const server = express();

server.use("/", (req, res) => {
  res.status(200).send("Hello from node");
});

server.listen(config.port, () => {
  console.log(`Server is running at ${config.port}`);
});

export default server;
