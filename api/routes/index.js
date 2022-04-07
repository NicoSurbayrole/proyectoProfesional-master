const express = require("express");
const routes = express.Router();

const auth = require("./auth");
const users = require("./users");
const categories = require("./categories")
const products = require("./products")

routes.use("/", auth);
routes.use("/users", users);
routes.use("/categories", categories);
routes.use("/products", products);



module.exports = routes;