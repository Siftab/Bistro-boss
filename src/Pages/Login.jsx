import banner from "../assets/others/authentication2.png"
import bgIMG from "../assets/others/authentication.png"
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";



const Login = () => {
  const capRef=useRef(null);
  const [disable,setDisabled]=useState(true);
  const {login,loadng} =useContext(AuthContext);
  const location =useLocation();
  const navigate= useNavigate();
  console.log(location)
    useEffect(()=>{
        loadCaptchaEnginge(5); 
    },[])
    const handleSubmit=e=>{
        e.preventDefault();

            const form = e.target;
            const email = form.email.value;
            const password = form.password.value;
            console.log(email,password)
            login(email,password)
            .then(res=>{console.log(res.user)
              Swal.fire({
                title: "Login Succesfull",
                icon: "success"
              });
            navigate(location.state? location.state : "/")
            })
            .catch(err=>console.log(err))

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
        <p className="text-center">dont have account <Link to="/register" ><span className="text-[#D1A054B3] font-semibold">Rgister Now</span></Link></p>
      </form>
    </div>
  </div>
  <Helmet>
        <title>Bistro boss|| Login</title>
     </Helmet>
</div>

    );
};

export default Login;