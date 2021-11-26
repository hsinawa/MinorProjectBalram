import React , {useState} from 'react';
import {useDispatch , useSelector} from 'react-redux'
import {RegisterNewUser} from '../actions/useraction'
import {RegisterUserReducer} from '../reducers/userreducer'
import style from './form.css'
import Loading from '../component/loader';
import Message from '../component/message'

const Register=()=>{

    const registreducer = useSelector(state=>state.RegisterUserReducer)


const {loading , error , success } = registreducer


    const [name , setname] = useState('')
    const [email , setemail] = useState('')
    const [password , setpassword] = useState('')
    const [cpassword , setcpassword ] = useState('')

    const dispatch = useDispatch()

    const register=(e)=>{

        e.preventDefault()

        const user ={
            name : name , 
            email:email ,
            password:password
        }


        if(password===cpassword)
        {
           dispatch(RegisterNewUser(user))
        }
        else{
document.getElementById('Message').innerHTML = 'Passwords Not Matched'
 alert('Passwords Not Matched')
        }
    
  
    
    }



    return(
        <div>


{ loading && (<Loading/>) }
<div  >
    





<div className="gridcontain" >


<div className='leftpart' >
<br/>
<img   src='https://t3.ftcdn.net/jpg/03/14/73/72/360_F_314737297_kEHcO3HfO8IjUvQzQOtDxMtUgZ1AnR5O.jpg'  />

</div>






<div className='rightpart' >

<h1> Register </h1>



<form onSubmit={register} >

<input type="text" value={name} required  placeholder="Enter Name" onChange={ (e)=>{ setname(e.target.value) } }   id="fashionform" ></input>
<input type="text" value={email} required placeholder="Enter Email" onChange={ (e)=>{ setemail(e.target.value) } }   id="fashionform" ></input>
<input type="password" value={password} required placeholder="Enter Password" onChange={ (e)=>{ setpassword(e.target.value) } }   id="fashionform" ></input>
<input type="password" value={cpassword} required placeholder="Enter Confrim Password" onChange={ (e)=>{ setcpassword(e.target.value) } }   id="fashionform" ></input>

<br></br>
{error && (<Message message='Email Already Registered' />) }

{success && ( <Message message='Succesfully Registered'  /> ) }
<button id="btn"  type="submit"   > Register </button>
<p id='Message' ></p>
</form>

<a href="/login" > Click here to login </a>


</div>
   







</div>




</div>




        </div>
    )



}

export default Register;