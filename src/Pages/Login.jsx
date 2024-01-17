import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../Components/Button';
import Navabar from '../Components/Navabarnew';

function Login() {
  const [formdata, setFormdata] = useState({
    email: '',
    password: '',
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
    // Add logic for handling login, such as making an API call.
  };

  return (
    <div>
      <Navabar />
      <form onSubmit={handleSubmit} className="container my-5 p-5" style={{ maxWidth: '400px', border: '1px solid rgb(28, 199, 208)' }}>
        <p className="text-center fw-semibold fs-3 text-blue">Jobpal Login</p>
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

        <div className="row my-6">
          <Button lable={"Login"}/>
        </div>
        <p>
          Don't have an account?{' '}
          <Link to="/signup" className="text-primary">
            Sign up
          </Link>
        </p>
        {data && <p className="fs-2 text-success">{data.success}</p>}
        {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
      </form>
    </div>
  );
}

export default Login;
