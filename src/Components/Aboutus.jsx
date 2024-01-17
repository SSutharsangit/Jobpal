import React from 'react';
import about from '../Assests/about.jpg';

function Aboutus() {
  return (
    <div className='row  my-5 d-flex  align-items-center'>
      <div className='col-md-6'>
        <img src={about} alt="hero" className='img-fluid rounded w-100  object-fit-cover px-2 rounded-5' style={{ height:"80vh"}} />
      </div>
      <div className='col-md-6 pt-5'>
        <div className='p-4'>
          <h2 className='mb-4 fw-bold fs-1 text-blue'>About Us</h2>
          <p>
            Embark on your career journey with Jobpal, your go-to destination for seamless online job applications.
            We simplify the hiring process, linking skilled candidates with promising opportunities. Navigate through our
            user-friendly platform, where job seekers and employers converge. Uncover a wealth of possibilities as you
            showcase your talents or discover your ideal workforce. At  Jobpal, we believe in efficiency,
            transparency, and the transformative power of connections. Your path to professional success starts right here,
            where applying for jobs online becomes a breeze. Join us at  Jobpal, where careers take flight.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
