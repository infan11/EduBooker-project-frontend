
import { Circles } from "react-loader-spinner";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const PrivateRoutes = ({children}) => {
    const {user , loading} = useAuth();
    const location = useLocation();
if(loading){
    <div className="min-h-screen flex justify-center items-center">
        
 <Circles
  height="80"
  width="80"
  color="#ea9540fd"
  ariaLabel="circles-loading"
  wrapperStyle={{}} 
  wrapperClass=""
  visible={true}
  />
    </div>
}
if(!user){
    return <Navigate to={"/login"} state={{from : location}} replace/>
}
    return children;
};

export default PrivateRoutes;