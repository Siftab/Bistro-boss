import banner from "../assets/others/authentication2.png"
import bgIMG from "../assets/others/authentication.png"
const Login = () => {
    const handleSubmit=e=>{
        e.preventDefault();
        console.log("working")
    }
    return (
        <div className="hero min-h-screen " style={{backgroundImage: `url(${bgIMG})`}}>
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left">
    <img src={banner} alt="" />    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-transparent">
      <form className="card-body" onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#D1A054B3] text-white " type="submit">Sign In</button>
          
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;