import React, { useState } from 'react'
import {AddProductReviewAction} from '../actions/productAction'
import {useDispatch , useSelector  } from 'react-redux'
import './filter.css'
const  ReviewComponent = ({products}) => {







    const dispach = useDispatch()




    const [comment , setcomment] = useState('')



    const senreview=()=>{

        if(localStorage.getItem('currentUser'))
{
    const currentuser = JSON.parse(localStorage.getItem('currentUser'))

    let alreadyreviewd

    for(var i=0;i<products.reviews.length;i++)
    {
        if( products.reviews[i].userid == currentuser._id )
        {
            alreadyreviewd = true 
        }
    }

    if(alreadyreviewd)
    {
        //alert(`You've already reviewed this product`)
        document.getElementById('sub').innerHTML=`You've Already Placed Your Bid`
    }
    else{

        const review = {
            comment : comment
        }





       dispach(AddProductReviewAction(review , products._id))

    }

}

       

       
    }



    return (
        <div>
           <h2> Place Your Bid  </h2>

           <input type="text" value={comment} onChange={ (e)=>{ setcomment(e.target.value) } }  ></input>

            <button onClick={senreview} id="sub"  > Bid Now  </button>















            <h2> Latest Bids </h2>

            { 

products.reviews &&  products.reviews.map(rev=> {
                return <div>

                    <div  style={{border:'0.7px solid black' , width:'90%' }}  >
                    
                    <h3> &nbsp; &nbsp;By : {rev.name} </h3>
                    <hr/>
                    <span>Bid :  {rev.comment}   </span>
                    <p> On : {rev.updatedAt.substring(0,10)} &nbsp; &nbsp;    </p> 
                  
                        </div>

                   

                    </div>
                    
            } )

            }
          <br/>
        
        
        </div>
    )
}


export default  ReviewComponent;