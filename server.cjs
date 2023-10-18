/*eslint-disable no-undef*/

const express = require("express")
const path = require('path')
const cors = require ('cors')
const morgan = require('morgan')
const app = express()

const Fruit = require('./models/Fruit.cjs')
const Veggie = require('./models/veggie.cjs')


require('dotenv').config()
require('./config/db.cjs')

// ===========middlewares===========
app.use(express.json()) //alow us to recive Jason
// app.use(express.urlencoded({extended: true}))
app.use(cors({origin: "*"}))
app.use(morgan('dev'))



// getting all
app.get("/fruits", async (req, res)=> {
    let fruitFromDB = await Fruit.find()
    res.send(fruitFromDB)
})  

// create one /or .push 

app.post("/fruits", async (req, res)=> {
    // console.log(req.body);
    let fruit = req.body
    let responseFromDB = await Fruit.create(fruit)
    console.log(responseFromDB);
    res.send("Route is good")
    // fruits.push(req.body)

})

// route for veggies
app.get("/veggies", async (req, res)=> {
    let veggiesFromDB = await Veggie.find()
    res.send(veggiesFromDB)
})
app.post("/veggies", async(req, res)=> {
    let dbResponse =  await Veggie.create(req.body)
    res.send(dbResponse)
})


app.get("/", (req, res)=> {
    res.send("Just random route")
})

// delete 
// app.delete("/data/last", (req, res) => {
//         data.pop()
//         res.send("last data deleted")
// })


// app.delete("/data/first", (req, res) => {
//         data.shift()
//         res.send("first data deleted")
// })












app.listen(3000, ()=> {
    console.log("Server is up and running");
})