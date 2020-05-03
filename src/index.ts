import express from "express";

const server = express();

server.use("/", (req, res) => {
  res.status(200).send("Hello from node");
});

server.listen(4004, () => {
  console.log("Express is running");
});
