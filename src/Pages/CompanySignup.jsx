import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../Components/Button';
import Navabar from '../Components/Navabarnew';

function CompanySignup() {
  const [formdata, setFormdata] = useState({
    companyName: '',
    location: '',
    founderName: '',
    email: '',
    password: '',
    phonenumber: '',
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

  const handleSubmit = () => {
    console.log(formdata);
  };

  return (
    <div>
      <Navabar />
      <form onSubmit={handleSubmit} className="container  my-5 p-5 " style={{ maxWidth: '400px',  border:"1px solid rgb(28, 199, 208)"}}>
        <p className="text-center fw-semibold fs-3 text-blue ">Jobpal Sign Up</p>
        <div className="mb-3">
          <label htmlFor="companyName" className="form-label">
            Company Name
          </label>
          <input
            type="text"
            className="form-control"
            id="companyName"
            value={formdata.companyName}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="location" className="form-label">
            Location
          </label>
          <input
            type="text"
            className="form-control"
            id="location"
            value={formdata.location}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="founderName" className="form-label">
            Founder Name
          </label>
          <input
            type="text"
            className="form-control"
            id="founderName"
            value={formdata.founderName}
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

export default CompanySignup;
