import login from "../../assets/others/authentication2.png"
import { useForm } from "react-hook-form"
import "./Login.css"
import { Link } from "react-router-dom";
import { CiFacebook } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";
import logo from "../../assets/logo.png"
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useEffect } from "react";
import { useState } from "react";

const Login = () => {
  const [disabled, setDisabled] = useState(false)
  const [value, setValue] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, [])
  const onSubmit = (data) => console.log(data)
  const handleCaptcha = (event) =>{
    const value = event.target.value;
    console.log(value)
    setValue(value)
  }
  return (
    <div className="py-5 bg-img">
      <Link to="/"><img className="w-16 ml-5" src={logo} alt="" /></Link>
      <div className="flex   justify-center gap-40">
        <img src={login} alt="" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-2xl font-bold flex justify-center">Login</h1>
          <div className="mb-5">
            <label>Email</label> <br />
            <input className="focus:outline-none border-2 rounded-md bg-white p-3 w-96" placeholder="Type here" {...register("email")} />
          </div>

          <div className="mb-5" >
            <label>Password*</label> <br />
            <input className="focus:outline-none border-2 rounded-md bg-white  p-3 w-96" required placeholder="Enter your password"  {...register("password")} />
          </div>
          <div className="my-3" >
            <label > <LoadCanvasTemplate/></label> 
            <input onChange={handleCaptcha}  className="focus:outline-none border-2 rounded-md bg-white  p-3 w-96" required placeholder="Type here"  />
          </div>
          <input disabled={true} className=" btn mt-5 bg-orange-400 hover:bg-orange-400 text-white w-96" type="submit" value={"Sign In"} />
          <p className="my-3 text-orange-600">New Here?
            <Link className="font-bold" to="/signup" href=""> Create New Account</Link>
          </p>
          <h1 className="flex justify-center my-3">Or sign in with</h1>
          <div className="flex gap-5 justify-center text-3xl">
            <button>
              <CiFacebook />
            </button>
            <button>
              <FaGoogle />
            </button>
            <button>
              <AiOutlineGithub />
            </button>
          </div>
        </form>
      </div>
    </div>




  );
};

export default Login;