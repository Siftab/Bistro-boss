import React, { useContext, useRef, useState } from 'react';
import banner from "../assets/others/authentication2.png"
import bgIMG from "../assets/others/authentication.png"
import { AuthContext } from '../Providers/AuthProvider';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Register = () => { 
    const {createUser} =useContext(AuthContext) 
    
      const handleSubmit=e=>{
          e.preventDefault();
  
              const form = e.target;
              const email = form.email.value;
              const password = form.password.value;
              console.log(email,password)
              createUser(email,password)
              .then(res=>{console.log(res.user)
                                    alert('succesfull   ')})
              .catch(err=>console.log(err))
  
      }
      
      return (
          <div className="hero min-h-screen " style={{backgroundImage: `url(${bgIMG})`}}>
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left">
      <img src={banner} alt="" />    </div>
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-transparent">
          <h1 className="text-5xl text-center font-bold">Register</h1>
        <form className="card-body" onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" placeholder="password"  name="password" className="input input-bordered" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
        
          <div className="form-control mt-6" >
            <button className="btn bg-[#D1A054B3] text-white " type="submit" >Sign In</button>
            
          </div>
          <p className="text-center">Already  have account <Link to="/login" ><span className="text-[#D1A054B3] font-semibold">Login</span></Link></p>
        </form>
      </div>
    </div>
     <Helmet>
        <title>Bistro boss|| Register</title>
     </Helmet>
  </div>
      );
};

export default Register;