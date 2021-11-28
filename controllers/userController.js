const User = require("../models/user")
const post = require('../models/post');
const mongoose = require('mongoose');

const getUsers = (req, res) => {
    User.find().populate('posts').exec((err,user) => {
        res.status(200).send({
            users : user
        })
    });
    
    // then(
    //     (response) => {

    //         res.status(200).send({
    //             users : response
    //         })
    //     } )
    //     .catch((err) => {
    //         console.log(err)
    //         res.status(200).send("No user found")
    //     } )
    
}

const getUser = (req, res) => {
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


const createUser  = (req, res) => {
    var user = {...req.body}

    User.create({
        _id: new mongoose.Types.ObjectId(),
        ...user
    }).then((response) => {
       res.status(200).send({
           message : "User has been created",
           user : response
       })
    }).catch(err => {
        res.status(200).send({
            message : "Something went wrong",
            err 
        })
    })

}


const updateUser  = (req, res) => {
    const {
        id,
        user
    } = req.body
    User.updateOne({
        _id : id
    }, {...user}).then((response) => {
       res.status(200).send({
           message : "User has been updated"
       })
    }).catch(err => {
        res.status(200).send({
            message : "something went wrong",
            err
        })
    })

}

const deleteUser = (req, res) => {
    const id  = req.params.id;
    User.deleteOne({
        _id : id
    }).then((response) => {
        res.status(200).send({
            message : "User has been deleted"
        })
     }).catch(err => {
         res.status(200).send({
             message : "something went wrong",
             err
         })
     })

}

module.exports  = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser

}