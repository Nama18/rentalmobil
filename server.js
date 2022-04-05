const express = require("express");
const cors = require("cors");

const app = express()

var corOptions = {
    origin: 'https://localhost:8081',
};





app.use(cors(corOptions));

app.use(express.json());

app.use(express.urlencoded({extended: true}))


//route
const route = require('./routes/route')
app.use('/api',route)

const carroute = require('./routes/carroute')
app.use('/api',carroute)

const transroute = require('./routes/transroute')
app.use('/api',transroute)
//testing api

app.get('/',(req,res) =>{
    res.json({message:"hello"})
})

// const PORT = process.env.PORT ||8080
app.listen(3000,()=>{
    console.log(`server is running on port 3000`)
})

