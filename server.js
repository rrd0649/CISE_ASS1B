const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
//const articles = require("./dummydata/articles");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 5000;

const server = express();
server.use(cors());
server.use(express.json());

const uri = process.env.MONGO_URI; // mongoDB Connect 정보
mongoose.connect(uri, {
  useNewUrlParser: true
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection succes");
});

/*
server.get('/', (req,res) => {
    res.send("API is running")
})

server.get('/api/articles', (req,res) => {
    res.json(articles);
})

server.get('/api/articles/:id', (req,res) => {
    const article = articles.find((n) => n._id === req.params.id);
    res.send(article);
    console.log(req.params);
});
*/

server.listen(PORT, console.log(`server is working and listening on PORT ${PORT}`));