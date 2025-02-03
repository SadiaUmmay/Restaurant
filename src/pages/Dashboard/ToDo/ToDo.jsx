
import { useForm } from "react-hook-form"

const ToDo = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const user = {
            title: data.name,
            email: data.email
        }
        const storage = localStorage.setItem("todo", JSON.stringify(user));
        console.log(storage)
        console.log(errors)
    }
    const users = localStorage.getItem("todo")
    const userData = JSON.parse(users)
    console.log(userData)
    return (

        <div className=" py-5 ml-3">

            <div className="flex flex-row-reverse justify-center gap-40">

                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="text-2xl font-bold flex justify-center">Form</h1>
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
                                }
                            })} />
                        {
                            errors.password && <p className="text-orange-500"> {errors?.password?.message}</p>
                        }
                    </div>

                    <input className=" btn mt-5 bg-red-400 hover:bg-red-400 text-white w-96" type="submit" value={"Sign Up"} />


                </form>
               <div>
               <h1>User Name:{userData.title} </h1>
               <p>User Email:{userData.email} </p>
               </div>
            </div>
        </div>




    );
};

export default ToDo;