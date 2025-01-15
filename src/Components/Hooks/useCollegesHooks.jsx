import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useCollegesHooks = () => {
    const axiosSecure = useAxiosSecure();
    const {data : colleges = []} = useQuery({
        queryKey : ["colleges"],
        queryFn : async () => {
            const res = await axiosSecure.get("/colleges")
            console.log(res.data)
            return res.data;
        }
    })
    return  [colleges]
};

export default useCollegesHooks;