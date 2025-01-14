

import toast from "react-hot-toast";
import { useRef } from "react";

import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { Helmet } from "react-helmet";
import { Input } from "@material-tailwind/react";
import { useForm } from "react-hook-form";

const ForgotPassword = () => {
    const { forgotpassword } = useAuth();
    const { register,   formState: { errors }, } = useForm()
    const emailRef = useRef(null);
    const handleForgetPassword = event => {
        event.preventDefault()
        const email = emailRef.current.value;
        if (!email) {
            console.log('pelase provide an email', emailRef.current.value)
            return
        }
        else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            console.log('please write a valid email')

            return
        }

        forgotpassword(email)
            .then(result => {
                const forget = result
                if (forget) {
                    return toast.success('Please Check Your E-mail');
                }



            })

            .catch(error => {
                console.error(error)
                if (error.code === "auth/network-request-failed") {
                    toast.error('Please Connect Internet')
                }
                else if (error.code === "auth/too-many-requests") {
                    toast.error('Try Another Later')
                }
            })

    }
    return (
        <div className="max-w-7xl mx-auto px-5 rounded-xl flex min-h-screen justify-center items-center">
            <Helmet>
                <title>Enter Your Email</title>
            </Helmet>
            <div className=" w-full mx-auto p-10 px-10 shadow-xl rounded-2xl">
                <p className="text-2xl text-center font-extrabold text-[#ffff] ">Reset Your Password</p>
                <form onSubmit={handleForgetPassword} className="mt-5 mx-auto">
                    <div className="w-full mx-auto font-bold ">
                        <Input
                            label="Type Your Email"
                            placeholder="Type Your Email"
                            inputRef={emailRef}
                            color="deep-purple"
                            name="email"
                            className="text-[#ffff] rounded-lg"
                            {...register("email", { required: true })}
                        />
                        {errors.email && (
                            <span className="text-red-600 text-sm font-bold">
                                This field is required
                            </span>
                        )}
                    </div>
                    <div className="  mt-4 ">
                        <button  className="btn    w-full mx-auto   rounded-full mt-2 px-4  bg-[#ffff] hover:bg-[#ffff] text-white">
                            Send Your Email
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;