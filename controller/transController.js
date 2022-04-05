const { status } = require('express/lib/response')
const db = require('../models')

const Tran = db.trans;

//add transaction
const addTrans = async (req,res)=>{

    let info = {
        id_user: req.body.id_user,
        id_mobil: req.body.id_mobil,
        tanggal_pinjam: req.body.tanggal_pinjam,
        tanggal_kembali: req.body.tanggal_kembali,
    }

    try{
        const tran = await Tran.create(info)
        res.status(200).send(tran)
        console.log(tran)
    }catch (err){
        res.status(500).send({
            message: err.message || 'Error occured'
        })
    }
}

//get all transaction
const getAllTrans = async (req,res)=>{
    let trans = await Tran.findAll({})
     res.status(200).send(trans)
     console.log(trans)
}

//get one transaction
const getOneTrans = async (req,res)=>{
    let id = req.params.id
    let tran = await Tran.findOne({where: {id: id}})
    res.status(200).send(tran)
}

//update transaction
const updateTrans = async (req,res)=>{
    let id = req.params.id
    const tran = await Tran.update(req.body, {where: {id: id}})
    res.status(200).send(tran)
}

//delete transaction
const deleteTrans = async (req,res)=>{
    let id =req.params.id
    await Tran.destroy({where: {id:id}})
    res.status(200).send("Transaction is deleted")
}

module.exports ={
    addTrans,
    getAllTrans,
    getOneTrans,
    updateTrans,
    deleteTrans,
}