import React, { useState } from 'react'
import styel from './filter.css'
import {FilterProducts} from '../actions/productAction'
import {useDispatch , useSelector  } from 'react-redux'


const  FilterComp = () => {

    const [searchkey , setsearchkey] = useState('')

    const [sortkey , setsort] = useState('popular')

    const [category , setcategory ] = useState('all')
    const dispatch = useDispatch()

    return (
        <div>
           <br></br>

            <table  className='table' >
  <tr>
    <th>
        <input type='text' placeholder='Search Product'  style={{width:'90%'}} 
        

        value={searchkey} 
        onChange={ (e)=>{ setsearchkey(e.target.value) } }
        
        
        ></input>
       
    </th>
    <th>

<select  value={sortkey} 
        onChange={ (e)=>{ setsort(e.target.value) } } >
    <option value="popular" > By Price </option>
    <option value="htl" > High to Low </option>
    <option value="lth" > Low to High </option>
</select>

    </th>
    <th>

    <select  value={category} 
        onChange={ (e)=>{ setcategory(e.target.value) } } >
    <option value="all" >All </option>
    <option value="vegetable" >Vegetable</option>
    <option value="fodder" > Fodder</option>
    <option value="fruits" > Fruits</option>
    <option value="rabi" > Rabi</option>
    <option value="kharif" > Kharif</option>
    
</select>


    </th>
    <th>
    <button onClick={ ()=>{ dispatch(FilterProducts(searchkey,sortkey,category)) } } > SEARCH </button>
    </th>
  </tr>

</table>
        </div>
    )
}


export default  FilterComp;