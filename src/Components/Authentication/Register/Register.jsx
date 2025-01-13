import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";

// import useAxiosPublic from "../../../Hooks/useAxiosPublic";
// import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

const Register = () => {
    const {createUser , googleUser , updateUserProfile} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const from = location.state?.from?.pathname || "/";

    const { register, handleSubmit,  formState: { errors }, } = useForm()
 
    const onSubmit = data => {
        console.log(data);
   createUser(data.email , data.password)
   .then(result => {
    const users = result.user;
    console.log(users);
    updateUserProfile(data.name, null)

    .then(res => {
        const usersInfo = {
            name : data.name,
            email : data.email,
        }
       axiosSecure.post('/users' , usersInfo)
       .then(res => {
     if(res.data.insertedId){
        return toast.success("Successfully Signin")
     }
     navigate(from, { replace: true })
                
       })
    })


   })
        
    }
    const handelGoogle = () => {
        googleUser()
            .then(res => {
                const google = res.user;
                console.log(google);
                const usersInfo = {
                    email: res.user?.email,
                    name: res.user?.displayName,
                
                };
           
                     axiosSecure.post("/users", usersInfo)
                     .then(res => {
                       if(res.data.insertedId){
                        return toast.success("Successfully Google Sign")
                       }

                     }) 
                    navigate(from, { replace: true })
                

            })
    }
    return (
        <div className="">
            <div className="hero  min-h-screen  max-w-7xl mx-auto md:px-5">
                <div data-aos="zoom-in" className=" grid md:grid-cols-2 rounded-r-2xl shadow-2xl">
                    
                    <div className="  lg:w-full bg-white shrink-0 rounded-r-2xl shadow-2xl">
                        <div className="card-body">
                            <Card color="  transparent" className="" shadow={false}>
                                <p className="text-2xl font-extrabold text-center mb-3 transition-all  text-[#8103ffcc]"> SIGNIN </p>



                                <form onSubmit={handleSubmit(onSubmit)} className="mt-3 mb-2 w-80 mx-auto max-w-screen-lg sm:w-80">
                                    <div className="mb-1 flex flex-col gap-6">

                                        <Input size="lg"
                                            name="name"
                                            type="name"
                                            label="Your Name"
                                            color="deep-purple"
                                            {...register("name", { required: true })}

                                        />
                                        {errors.name && <span className="text-red-700  text-sm font-bold">This field is required</span>}

                                        <Input
                                            size="lg"
                                            name="email"
                                            type="email"
                                            label="Your Email"
                                            color="deep-purple"
                                            {...register("email", { required: true })}
                                        />
                                        {errors.email && <span className="text-red-700  text-sm font-bold">This field is required</span>}

                                        <Input
                                            type="password"
                                            name="password"
                                            size="lg"
                                            placeholder="********"
                                            label="Password"
                                            color="deep-purple"
                                            {...register("password", { required: true, minLength: 8, maxLength: 20 })}
                                        />
                                        {errors.password?.type && <span className="text-red-700 ">This field is reqiure</span>}
                                        {errors.password?.type === 'minLength' && <span className="text-red-700 ">This pass must 6 Characters</span>}
                                        {errors.password?.type === 'maxLength' && <span className="text-red-700 ">This pass only 20 Characters</span>}
                                    </div>
                                   <div className="flex gap-3 mt-4">
                                   <input type="checkbox" defaultChecked className="checkbox ml-3 mb-  checkbox-primary" />
                                   <p> I agree the Terms and Conditions</p>
                                   </div>
                                      
                                    
                                    <button className=" w-full uppercase bg-[#8103ffcc] hover:bg-[#8103ffcc] text-white mt-2 btn rounded-badge" fullWidth>
                                        sign in
                                    </button>
                                    <div className="divider">OR</div>
                                </form>

                                <div className=" mx-auto "> <button onClick={handelGoogle} className="flex text-[14px] bg-white items-center font-bold btn rounded-full"><FcGoogle /> Continue With Google</button></div>
                                <Typography color="gray" className="mt-3 text-center font-normal">
                                    Already have an account?{" "}
                                    <a href="/login" className="font-medium text-gray-900">
                                        Sign up
                                    </a>
                                </Typography>

                            </Card>
                        </div>
                    </div>
                    <div className="text-center hidden sm:block ">
                        <img className=" md:w-[650px] md:h-[600px] lg:w-[685px] lg:h-[685px]   rounded-l-2xl" src="https://i.ibb.co.com/NN74N96/singin.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;