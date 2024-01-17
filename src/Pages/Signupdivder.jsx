import React from 'react'
import Navabar from '../Components/Navabarnew'
import Button from '../Components/Button'
import { Link } from 'react-router-dom'

function Signupdivder() {
  return (
    <div>
        <Navabar/>
        <form  className="container  my-5 p-5 d-flex flex-column justify-content-center align-content-center" style={{ maxWidth: '400px',  border:"1px solid rgb(28, 199, 208)"}}>
<div>
<p className=" fw-semibold fs-3 text-blue ">Choices of Signup</p> 
</div>
      <div>
        <Link to="/usersignup"><Button lable={"For Applying Jobs"}/></Link>
      <Link  to="/companysignup"><Button lable={"For Posting Jobs"}/></Link>
     
      </div>
     
    </form>
    </div>
  )
}

export default Signupdivder