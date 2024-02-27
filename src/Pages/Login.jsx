import banner from "../assets/others/authentication2.png"
import bgIMG from "../assets/others/authentication.png"
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";



const Login = () => {
  const capRef=useRef(null);
  const [disable,setDisabled]=useState(true);
    useEffect(()=>{
        loadCaptchaEnginge(5); 
    },[])
    const handleSubmit=e=>{
        e.preventDefault();

            const form = e.target;
            const email = form.email.value;
            const password = form.password.value;
            console.log(email,password)

    }
    const handleValidateCaptcha=()=>{
      if (validateCaptcha(capRef.current.value)==true) {
        // alert('Captcha Matched');
        setDisabled(false);
    }

    else {
      setDisabled(true);
    }
        
        

    }
    return (
        <div className="hero min-h-screen " style={{backgroundImage: `url(${bgIMG})`}}>
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left">
    <img src={banner} alt="" />    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-transparent">
        <h1 className="text-5xl text-center font-bold">login</h1>
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
        <div className="form-control">
          <label className="label">
          <LoadCanvasTemplate />
          </label>
          <input type="text" placeholder="type here " ref={capRef} name="captcha" className="input input-bordered"  />
          <button className="btn-outline btn-xs" onClick={handleValidateCaptcha} >chk</button>
          
        </div>
        <div className="form-control mt-6" >
          <button className="btn bg-[#D1A054B3] text-white " type="submit" disabled={disable}>Sign In</button>
          
        </div>
        <p className="text-center">dont have account <Link to="/register" ><span>Rgister Now</span></Link></p>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;