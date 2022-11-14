const express = require("express");
const app = express();

var bodyParser = require('body-parser')
const cors=require('cors')
app.use(cors())
const url_encoder=bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json());
app.use(url_encoder);

const router = require("./item/item.router");
app.use("/element", router);

module.exports = app;