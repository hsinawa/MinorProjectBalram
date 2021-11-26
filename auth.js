const mongoose = require('mongoose')

var mongodburl = 'mongodb+srv://admin:awanishmishra3@cluster0.mx57i.mongodb.net/minorproject'

mongoose.connect(mongodburl , { useUnifiedTopology:true , useNewUrlParser:true })

var dbconnect = mongoose.connection

dbconnect.on( 'error' ,()=>{
    console.log('Mogo DB connection failed')
} )

dbconnect.on('connected' , ()=>{
    console.log('connection passed Balram'  )
} )

mongoose.exports = mongoose

