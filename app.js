const fs = require("fs");
const express = require("express");
const app = express();
const path = require("path");
const path_public = path.resolve(__dirname, "./public");

app.listen(3000, () => console.log("Port: 3000"));

app.use(express.static(path_public));

app.get("/", (req, res) => {
    let path_home = path.resolve(__dirname, "./views/home.html");

    res.sendFile(path_home);
});

app.get("/register", (req, res) => {
    let path_register = path.resolve(__dirname, "./views/register.html");

    res.sendFile(path_register);
});

app.get('/login', (req, res) => {
    let path_login = path.resolve(__dirname, './views/login.html');

    res.sendFile(path_login);
});
