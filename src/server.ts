import express from "express";
import oAuthRouter from "./routes/oauth";
import cookieParser from "cookie-parser";

const server = express();

// for json response
server.use(express.json());

// to access server static html request data
server.use(express.urlencoded({ extended: true }));

// to send server static file
server.use(express.static("view"));

// toaccess cookie across on every router
server.use(cookieParser());

server.use("/api/auth", oAuthRouter);

server.listen(3000, () => {
  console.log("Server is running!");
});
