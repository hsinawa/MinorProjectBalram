import React , {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Rating from 'react-rating'
import style from './prod.css'
import {useDispatch ,  useSelector } from 'react-redux';


export default function ProductGrid({prod})
{

   





    return(
        <div   >





<div  className="iii"  >

<Link to={`product/${prod._id}`} style={{textDecoration:'none' , color:'black' }} >
             <div className="griditemm" >

<h3> {prod.name} </h3>

<img  src={prod.image} id="img" />

<p> Expected Price : {prod.price} /kg   </p>
<p>Quantity : {prod.countInStock} Kg  &nbsp; &nbsp; Sold By : {prod.description}   </p>

</div>

</Link>


</div>




 


        </div>
    )


}