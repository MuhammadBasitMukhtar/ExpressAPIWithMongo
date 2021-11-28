const Post = require("../models/post");
const User = require("../models/user");


const getPosts  = (req, res) => {
    Post.find({}).populate('author').exec((err,post) => {
        if(!err)
        {
            res.status(200).json(post)
        }
        else
        {
            res.status(404).send(err)
        }
    })
}

const getPostsByUser  = (req, res) => {
    const id = req.params.id;
    Post.find({author : id}).populate('author').exec((err,post) => {
        if(!err)
        {
            res.status(200).json(post)
        }
        else
        {
            res.status(404).send(err)
        }
    })
}

const getPost  = (req, res) => {
    const id = req.params.id;
    User.findOne({
        _id:id
    }).then((response) => {
       res.status(200).send({user : response})
    }).catch(err => {
        
        res.status(200).send("No user found")
        console.log({err}
        
        )})
}

const createPost  = (req, res) => {

    const post = {...req.body}

    Post.create({
        ...post
    }).then((response) => {

        console.log(response.populated("author"))
        res.status(200).send({
            post : response
        })

    
    }).catch((err) => {
        res.status(200).send({
            message : "Something went wrong",
            err
        })
    })

}
const updatePost  = (req, res) => {

}
const deletePost  = (req, res) => {

}

module.exports = {
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost,
    getPostsByUser
}