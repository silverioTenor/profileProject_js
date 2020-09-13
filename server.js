const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const videos = require("./data");

server.use(express.static('public'));

server.set("view engine", "njk");

nunjucks.configure("views", {
    express:server
})

server.get("/", (req, res) => res.render("about"));

server.get("/portfolio", (req, res) => res.render("portfolio", {items: videos}));

server.listen(3000, () => console.log("Server is running..."));