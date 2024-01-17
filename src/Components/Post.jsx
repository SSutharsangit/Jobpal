import React from 'react';
import v1 from "../Assests/v1.mp4";
import Button from './Button';

function Post() {
  return (
    <div style={{ position: 'relative' }} className=' mt-5'>
      <div className='container-fluid'>
        <video
          src={v1}
          autoPlay
          loop
          muted
          style={{ width: '90vw', position: 'relative', zIndex: 1 }}
          className='mb-5'
        ></video>
      </div>
      <div className=' w-100 text-center '>
        <div className=' text-blue fs-2  fw-bolder'>
          Employers! Make Recruiting Your Competitive Advantage
        </div>
        <div className='fs-5'>
          Talent is a top priority for all Businesses. Jobpal.lk offers a way to completely optimize your entire recruiting process. Find better candidates, receive online applications, conduct more focused interviews, and make data-driven hiring decisions.
        </div>
        <div>
        <Button lable={"POST A JOB"} />
        </div>
      </div>
    </div>
  );
}

export default Post;
