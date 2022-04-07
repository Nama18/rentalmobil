const { status } = require('express/lib/response')
const db = require('../models')

const User = db.user


//crate user
const addUser = async (req,res)=>{

    let info = {
        nama: req.body.nama,
        email: req.body.email,
    }

    try{
        const user = await User.create(info)
        res.status(200).send(user)
        console.log(user)
    }catch (err){
        res.status(500).send({
            message: err.message || 'Error occured'
        })
    }
}

//get all user
const getAllUser = async (req,res)=>{
    let users = await User.findAll({})
     res.status(200).send(users)
     console.log(users)
}

//get one user
const getOneUser = async (req,res)=>{
    let id = req.params.id
    let user = await User.findOne({where: {id: id}})
    res.status(200).send(user)
}

//update user
const updateUser = async (req,res)=>{
    let id = req.params.id
    const user = await User.update(req.body, {where: {id: id}})
    if(user==1){
        const data = await User.findOne({where: {id: id}})
        res.status(200).send(data)
    }else{
        res.status(500).send("Data Tidak Terupdate")
    }
}

//delete user
const deleteUser = async (req,res)=>{
    let id =req.params.id
    await User.destroy({where: {id:id}})
    res.status(200).send("User is deleted")
}

module.exports ={
    addUser,
    getAllUser,
    getOneUser,
    updateUser,
    deleteUser,
}