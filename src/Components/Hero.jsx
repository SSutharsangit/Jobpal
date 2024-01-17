import React from 'react';
import hero from "../Assests/hero.jpg";
import Button from './Button';


function Hero() {
  return (
    <div className="container position-relative">
      <div className="row">
        <div className="col-md-12">
          <img src={hero} alt="hero" className='img-fluid rounded object-fit-cover w-100' style={{height:'80vh'}} />
        </div>
        <div className="position-absolute top-50 start-50 translate-middle text-center">
          <h2 className='fw-bold'>Find The Most Exciting Startup Jobs</h2>
          <div className='input-group '>
            <input type="text" className="form-control col-6" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="Search Jobs" />
           <Button lable={"Find Job"}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
