import React from 'react';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
function Footer() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 mb-4">
         <div>
         <div className="text-green-900 font-serif font-extrabold display-4 text-blue ">Jobpal.lk</div>
          <div className="text-gray-400 mt-2">
          Post Jobs for Free with Jobpal.lk Candidates Submit your CV and be contacted by Employers. Search Jobs all across Sri Lanka and apply online.
          </div>
         </div>
          <div className=' mt-4'>
          <div>Follow US</div>
          <div className="mt-3 d-flex "  >
          <FacebookOutlinedIcon className='text-orange-600'/>
          <TwitterIcon className='text-orange-600'/>
          <InstagramIcon className='text-orange-600'/>
          </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col">
              <h6 className="text-green-900 font-bold mb-3">Contries</h6>
              <div>Srilanka</div>
              <div>London</div>
              <div>Canda</div>
              <div>France</div>
              <div>America</div>
            </div>
            <div className="col">
              <h6 className="text-green-900 font-bold mb-3">Companys</h6>
              <div>Apptimus</div>
              <div>YarlIt</div>
              <div>X360</div>
              <div>Bohar</div>
            </div>
            <div className="col">
              <h6 className="text-green-900 font-bold mb-3">worker</h6>
              <div>Software Enginner</div>
              <div>Civil Engineer</div>
              <div>Project Manager</div>
              <div>QA</div>
              <div>BA</div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col text-center bg-slate-200">
          <p>© 2024 All rights reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
