const express = require('express')
const bodyparser= require('body-parser')
const app = express()
var productsroute = require('./routes/productroute')
var useroroute = require('./routes/useroute')
var orderroute = require('./routes/orderroute')
var famerroute = require('./routes/farmerrute')

app.use(bodyparser.json())
const path=require('path')
let dbconnection = require('./auth')



app.get("/" , (req,res)=>{
    res.send("Welcome to Minor Project Balram")
} )



app.use('/api/products/' , productsroute )

app.use('/api/users/' , useroroute )

app.use('/api/orders/' , orderroute )

app.use('/api/farmers/' , famerroute )




const port =  8080 ;

 app.listen( port , ()=>{
    console.log('Server started of Ecommerce')
} )