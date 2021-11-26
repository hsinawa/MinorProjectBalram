import React from 'react'
import './landing.css'

const  LandingPage = () => {
    return (
        <div>

            <br/> <br/> <br/>

                <h1> Welcome to Project Balram </h1>
            <div className='gridstyle'  >

                <div className='block1' >

                    <img  src='https://www.transformingfoodsystems.com/img/Graphic6-A3.9597e9c62c4547b4f8f2a6e37e9737bf.gif' id="img1"  />


                    <a href="/farmerlogin"> 
                    <button id="refrence" > Continue as <br/> Farmer </button>
                    </a>
                    

                </div>


                <div className='block2' >

                    <img  src='https://gladiasconsulting.com/wp-content/uploads/2019/08/Web-Design.gif'  />
                    <br/><br/>
                    <a href="/login"> 
                    <button id="refrence" > Continue as <br/> Buyer </button>
                    </a>

</div>


            </div>
            
         
        </div>
    )
}


export default  LandingPage;