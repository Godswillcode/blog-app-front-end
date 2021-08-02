const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");



app.use("/", (req, res) => {
    console.log("hey this is main url");
})

app.listen("5000", () => {
    console.log("Back is running");
})