import React from 'react'
import Button from './Button'
import { Link, useNavigate } from 'react-router-dom';

function Jobs() {
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate('/Jobdetail'); 
  };
  return (
    <div className=' container'>
        <div className="top">
         <div className=' text-center text-blue  my-5 fs-1 fw-bold'>Active Jobs</div>
        </div>
        <div className="bottom">
        <table class="table table-striped table-hoverr">
        <thead>
    <tr>
      <th scope="col">Jobs</th>
      <th scope="col">Postion</th>
      <th scope="col">Company Name</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Sofware engineer</th>
      <td>Intern</td>
      <td>Yarl It</td>
      <button className='btn bg-blue text-light fw-light my-2 fw-bold' onClick={handleDetailsClick}>Details</button>
    </tr>
    <tr>
      <th scope="row">Sofware engineer</th>
      <td>Intern</td>
      <td>Yarl It</td>
      <button className='btn bg-blue text-light fw-light my-2 fw-bold' onClick={handleDetailsClick}>Details</button>
    </tr>
    <tr>
      <th scope="row">Sofware engineer</th>
      <td>Intern</td>
      <td>Yarl It</td>
      <button className='btn bg-blue text-light fw-light my-2 fw-bold' onClick={handleDetailsClick}>Details</button>
    </tr>
    <tr>
      <th scope="row">Sofware engineer</th>
      <td>Intern</td>
      <td>Yarl It</td>
      <button className='btn bg-blue text-light fw-light my-2 fw-bold' onClick={handleDetailsClick}>Details</button>
    </tr>
    <tr>
      <th scope="row">Sofware engineer</th>
      <td>Intern</td>
      <td>Yarl It</td>
      <button className='btn bg-blue text-light fw-light my-2 fw-bold' onClick={handleDetailsClick}>Details</button>
    </tr>
  </tbody>
</table>
        </div>
    </div>
  )
}

export default Jobs