const { status } = require('express/lib/response');
const { car, sequelize } = require('../models');
const db = require('../models')

const Tran = db.trans;
const User = db.user;
const Car = db.car;
// var data = {}
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
        
        const car = await Car.findOne({where: {id: req.body.id_mobil}})
        hitung(tran.tanggal_pinjam,tran.tanggal_kembali,car.harga);
        const upcar = await Car.update({ketersedian:false},{where:{id:car.id}})
        const uptran = await Tran.update({lamapinjam:jarak,total:totalhrga},{where:{id:tran.id}});
        const data = await Tran.findOne({where: {id: tran.id},include:[{model: User, as:'users'},{model: Car, as:'cars'}]})
        res.status(200).send(data)
        console.log(tran)
    }catch (err){
        res.status(500).send({
            message: err.message || 'Error occured'
        })
    }
    console.log(totalhrga)
    console.log(jarak)
}


//get all transaction
const getAllTrans = async (req,res)=>{
    let trans = await Tran.findAll({include:[{model: User, as:'users'},{model: Car, as:'cars'}]})
     res.status(200).send(trans)
}

//get one transaction
const getOneTrans = async (req,res)=>{
    let id = req.params.id
    let tran = await Tran.findOne({where: {id: id},include:[{model: User, as:'users'},{model: Car, as:'cars'}]})
    
    res.status(200).send(tran)
    

}

//update transaction
const updateTrans = async (req,res)=>{
    let id = req.params.id
    
    const data = await Tran.findOne({where: {id: id},include:[{model: User, as:'users'},{model: Car, as:'cars'}]})
    const car = await Car.findOne({where: {id: data.cars.id}})
    hitung(data.tanggal_pinjam,data.tanggal_kembali,car.harga);
    const upcar = await Car.update({ketersedian:true},{where:{id:data.cars.id}})
    const up = await Tran.update({status_bayar:req.body.status_bayar,lamapinjam:jarak,total:totalhrga},{where:{id:id}})
    // const tran = await Tran.update(req.body, {where: {id: id}})
    if(up==1){

        const data = await Tran.findOne({where: {id: id},include:[{model: User, as:'users'},{model: Car, as:'cars'}]})
        res.status(200).send(data)
    }else{
        res.status(500).send("Data Tidak Terupdate")
    }
    
}

//delete transaction
const deleteTrans = async (req,res)=>{
    let id =req.params.id
    await Tran.destroy({where: {id:id}})
    res.status(200).send("Transaction is deleted")
}

async function hitung(tanggal_p,tanggal_k,harga){
    pinjam = new Date(tanggal_p);
    kembali = new Date(tanggal_k);
    jarak = (kembali-pinjam)/(1000*3600*24);
    totalhrga = jarak * harga;

   
    return jarak, totalhrga;
}

module.exports ={
    addTrans,
    getAllTrans,
    getOneTrans,
    updateTrans,
    deleteTrans,
}