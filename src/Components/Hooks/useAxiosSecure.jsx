import axios from "axios";

const useAxiosSecure = () => {
    const axiosSecure =  axios.create({
        baseURL : "https://edu-booker-backend.vercel.app"
    })
    return axiosSecure;

}

export default useAxiosSecure;