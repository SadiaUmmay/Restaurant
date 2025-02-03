import login from "../../assets/others/authentication2.png"
import { useForm } from "react-hook-form"

import { Link } from "react-router-dom";
import { CiFacebook } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";
import "../login/Login";
import logo from "../../assets/logo.png"
const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    const user ={
      name: data.name,
      email: data.email
    }
    var storage = localStorage.setItem("user", JSON.stringify(user));
    console.log(storage)
  }
  console.log(errors)
  return (

    <div className=" bg-img  py-5">
      <Link to="/"><img className="w-16 ml-5" src={logo} alt="" /></Link>
      <div className="flex flex-row-reverse justify-center gap-40">
        <img src={login} alt="" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-2xl font-bold flex justify-center">SignUp</h1>
          <div className="mb-3" >
            <label>Name</label> <br />
            <input className="focus:outline-none border-2 rounded-md bg-white  p-3 w-96" placeholder="name"  {...register("name", {
              required: true,
              minLength: 1,
              maxLength: 20,

            })} />
            {
              errors.name && <p className="text-orange-400"> minimum length 1 & Maximum length 20 </p>
            }

          </div>
          <div className="mb-5">
            <label>Email</label> <br />
            <input className="focus:outline-none border-2 rounded-md bg-white p-3 w-96" placeholder="email" {...register("email")} />
          </div>
          <div className="mb-3" >
            <label>Password*</label> <br />
            <input className="focus:outline-none border-2 rounded-md bg-white  p-3 w-96" placeholder="password"  {...register("password",
              {
                required: true,
                minLength: {
                  value: 6,
                  message: "your paasword must be six character "
                },
                maxLength: {
                  value: 20,
                  message: "your password must be 20 character long"
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
                  message: "password must be strong"
                }})} />
                {
                  errors.password && <p className="text-orange-500"> {errors?.password?.message}</p>
                }
          </div>

          <input className=" btn mt-5 bg-orange-400 hover:bg-orange-400 text-white w-96" type="submit" value={"Sign Up"} />
          <p className="my-3 text-orange-600">Already registered?
            <Link className="font-bold" to="/login"> Go to log in</Link>
          </p>
          <h1 className="flex justify-center my-3">Or sign up with</h1>
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

export default SignUp;