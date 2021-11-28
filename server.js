const express = require("express");
const app = express();
const multer = require('./multerConfig');
const mongoose = require('mongoose')
const userModel = require('./models/user');
const postModel = require('./models/post');
const userController = require('./controllers/userController');
const postController = require('./controllers/postController');

app.use(express.json());

app.use("/user/uploads",express.static("uploads"))


app.post("/user/register",userController.createUser)
app.get("/user/all", userController.getUsers)
app.get("/user/getUser/:id", userController.getUser )
app.put("/user/update", userController.updateUser)
app.delete("/user/delete/:id", userController.deleteUser)

app.get("/post/getPost/:id", postController.getPost )
app.get("/post/user/:id", postController.getPostsByUser )
app.get("/post/all", postController.getPosts )
app.post("/post/create", postController.createPost )
app.put("/post/update", postController.updatePost)
app.delete("/post/delete", postController.deletePost)

const mongoDBConnectionString = "mongodb+srv://basit:123@cluster0.mdj5f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

var server = app.listen(8000, function() {

    mongoose.connect(mongoDBConnectionString).then(() => {
        console.log("Database is connected")
      }).catch((err) => console.log(error))

    var host = server.address().address;
    var port = server.address().port;
    console.log("Project app running at http://%s:%s",host,port);
});