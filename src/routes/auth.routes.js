const express = require("express");
const authRoutes = require("../controllers/auth.controller");

const routes = express.Router();

routes.post("/register", authRoutes.registerUser);
routes.post("/login", authRoutes.loginUser);

module.exports = routes;
