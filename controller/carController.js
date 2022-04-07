const { status } = require('express/lib/response')
const db = require('../models')

const Car = db.car


//crate car
const addCar = async (req,res)=>{

    let info = {
        jenis: req.body.jenis,
        harga: req.body.harga,
    }

    try{
        const car = await Car.create(info)
        res.status(200).send(car)
        console.log(car)
    }catch (err){
        res.status(500).send({
            message: err.message || 'Error occured'
        })
    }
}

//get all user
const getAllCar = async (req,res)=>{
    let cars = await Car.findAll({})
     res.status(200).send(cars)
     console.log(cars)
}

//get one user
const getOneCar = async (req,res)=>{
    let id = req.params.id
    let car = await Car.findOne({where: {id: id}})
    res.status(200).send(car)
}

//update user
const updateCar = async (req,res)=>{
    let id = req.params.id
    const car = await Car.update(req.body, {where: {id: id}})
    if(car==1){
        const data = await Car.findOne({where: {id: id}})
        res.status(200).send(data)
    }else{
        res.status(500).send("Data Tidak Terupdate")
    }
}

//delete user
const deleteCar = async (req,res)=>{
    let id =req.params.id
    await Car.destroy({where: {id:id}})
    res.status(200).send("Car is deleted")
}

module.exports ={
    addCar,
    getAllCar,
    getOneCar,
    updateCar,
    deleteCar
}