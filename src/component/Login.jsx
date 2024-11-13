import React from "react";
import { useNavigate } from 'react-router-dom';

function Login() {

  const navigate = useNavigate();
  return (
    <div className="justify-content-center text-center mt-4">
      <h2 className="text-center mb-4">Login Page</h2>
      <div className="mb-3 col-lg-offset-4">
        <label for="exampleFormControlInput1" className="form-label">
          Email Address
        </label>
        <input
          type="email"
          className="form-control"
          style={{ width: 500, marginLeft: 500 }}
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-3 col-lg-offset-4">
        <label for="exampleFormControlInput1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          style={{ width: 500, marginLeft: 500 }}
          id="exampleFormControlInput1"
          placeholder="********"
        />
      </div>
      <div className="mt-3 center">
        <button className="btn btn-outline-dark mt-2" onClick={()=>navigate("/")}>Login</button>
      </div>
    </div>
  );
}

export default Login;
