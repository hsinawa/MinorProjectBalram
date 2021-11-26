import React from 'react';
import style from './homescreen.css';
import axios from 'axios';
import {useEffect , useState} from 'react'
import {Link} from 'react-router-dom';
import Rating from 'react-rating'

import ProductGrid from '../Header/productgrid';
import {useDispatch ,  useSelector } from 'react-redux';
import {getallproductsreducer} from '../reducers/productReducer'
import {getallproducts } from '../actions/productAction'
import Loading from '../component/loader'
import ErrorPage from '../component/error'
import FilterComp from '../component/filter'

const HomeScreen =()=>{

const getallproductstate = useSelector(state=>state.getallproductsreducer)
const {loading , products , error} = getallproductstate

const dispatch = useDispatch()

useEffect( ()=>{


    dispatch(getallproducts())
}  ,[])


    return(
        <div>



<FilterComp/>
      
<div className="gridcontain1" >






    {loading ? <h1> <Loading/> </h1> :error ? <ErrorPage/> : 
    (
        products.map(prod=>{
            return <div className="container1" >
                <ProductGrid prod={prod} />
                </div>
        })
    ) }

 

</div>



    </div>

    );
  
}

export default HomeScreen;