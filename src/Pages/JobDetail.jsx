import React from 'react'
import Navabar from '../Components/Navabar'
import { Link } from 'react-router-dom'
import Button from '../Components/Button'

function JobDetail() {
  return (
    <div>
        <Navabar/>
        <form  className="container p-2 d-flex flex-column justify-content-center align-content-center" style={{ maxWidth: '400px',  border:"1px solid rgb(28, 199, 208)"}}>
<div>
<p className=" fw-semibold fs-3 text-blue ">Detail of the job</p> 
</div>
      <div>
    <div><div className=' text-blue'>Job:</div>Software Engineer</div>
    <div><div className=' text-blue'>Position:</div>Intern</div>
    <div><div className=' text-blue'>Company</div>Coderider</div>
    <div><div className=' text-blue'>Type:</div>Remote</div>
    <div><div className=' text-blue'>Roles:</div>
    <ul>
        <li>proplem solving</li>
        <li>Team work</li>
        <li>Web Delvelopment</li>
        <li>frontend Desgin</li>
    </ul>
    </div>
    <div><div className=' text-blue'>Requirements</div>
    <ul>
        <li>Html/Css/Js</li>
        <li>React</li>
        <li>Express.js</li>
        <li>Mongodb/MySql</li>
    </ul>
    </div>
        <Link to="/usersignup"><Button lable={"Apply This Job"}/></Link>
     
      </div>
     
    </form>
    </div>
  )
}

export default JobDetail