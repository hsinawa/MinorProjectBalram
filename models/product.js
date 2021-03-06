const mongoose = require('mongoose')



const reviewschema = mongoose.Schema({

    userid:{
        type:mongoose.Schema.Types.ObjectId
    } ,
    name:{
        type:String ,
        require :true
    } ,
    comment:{
        type:Number
    } ,
    rating:{
        type:Number ,
        require:true
    }


} , {
    timestamps:true
} )


const ProductSchema = mongoose.Schema(
    {
        name :{
            type:String ,
            require:true
        } ,
        image:{
            type:String ,
            require:true
        },
        category:{
            type:String ,
            require:true
        }
         ,
         description:{
            type:String ,
            require:true
        } ,
        price:{
            type:Number ,
            require : true
        } ,
        countInStock:{
            type:Number ,
            require:true 
        } ,
        rating:{
            type:Number ,
            require:true ,
            default :0
        } ,
        reviews:[reviewschema]
    } 
    
    , {
        timestamps:true
    }
)


const Product = mongoose.model('product' , ProductSchema)

module.exports = Product