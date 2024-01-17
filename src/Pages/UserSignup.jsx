import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../Components/Button';
import Navabar from '../Components/Navabarnew';

function Sigin() {
  const [formdata, setFormdata] = useState({
    fullname: '',
    email: '',
    password: '',
    address: '',
    phonenumber: '',
    cv: null,
  });
  const [data, setdata] = useState();
  const [error, seterror] = useState('');
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormdata((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { id, files } = e.target;
    setFormdata((prevData) => ({
      ...prevData,
      [id]: files[0],
    }));
  };

  const handleSubmit = () => {
    console.log(formdata);
  };

  return (
    <div>
 <Navabar/>
    <form onSubmit={handleSubmit} className="container  my-5 p-5 " style={{ maxWidth: '400px',  border:"1px solid rgb(28, 199, 208)"}}>
      <p className="text-center fw-semibold fs-3 text-blue ">Jobpal Sign Up</p>
      <div className="mb-3">
        <label htmlFor="fullname" className="form-label">
          Full Name
        </label>
        <input
          type="text"
          className="form-control"
          id="fullname"
          value={formdata.fullname}
          onChange={handleInputChange}
        />
      </div>
      
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
          value={formdata.email}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={formdata.password}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="address" className="form-label">
          Address
        </label>
        <input
          type="text"
          className="form-control"
          id="address"
          value={formdata.address}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="phonenumber" className="form-label">
          Phone Number
        </label>
        <input
          type="text"
          className="form-control"
          id="phonenumber"
          value={formdata.phonenumber}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="cv" className="form-label">
          Upload CV
        </label>
        <input
          type="file"
          className="form-control"
          id="cv"
          onChange={handleFileChange}
        />
      </div>

      <div className="row my-6">
        <Button lable={"Register"} />
      </div>
      <p>
        Have an account?{' '}
        <Link to="/login" className="text-primary">
          Sign in
        </Link>
      </p>
      {data && <p className="fs-2 text-success">{data.success}</p>}
      {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
    </form>
    </div>
   
  );
}

export default Sigin;
