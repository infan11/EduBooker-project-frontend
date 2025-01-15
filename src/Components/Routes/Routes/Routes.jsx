import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../../Main/Main";
import Home from "../../Home/Home/Home";
import Colleges from "../../Colleges/Colleges/Colleges";
import Admission from "../../Admission/Admission/Admission";
import Profile from "../../Profile/Profile/Profile";
import Login from "../../Authentication/Login/Login";
import Register from "../../Authentication/Register/Register";
import ForgotPassword from "../../Authentication/ForgotPassword/ForgotPassword";
import Serach from "../../Home/Serach/Serach";
import Details from "../../Details/Details";
import MyCollege from "../../MyCollege/MyCollege/MyCollege";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import ErrorPage from "../../ErrorPage/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        errorElement : <ErrorPage/>,
        element: <Main></Main> , 
        children : [
            {
                path : "/",
                element : <Home/>
            },
            {
                path : "/search",
                element : <Serach/>
            },
            {
                path : "/colleges",
                element : <Colleges/>
            },
            {
                path : "/details/:id",
                element : <PrivateRoutes><Details/></PrivateRoutes>
            },
            {
                path : "/admission",
                element :<PrivateRoutes><Admission/></PrivateRoutes>
            },
            {
                path : "/myCollege",
                element : <PrivateRoutes> <MyCollege/></PrivateRoutes>
            },
            {
                path : "Profile", 
                element : <Profile/>
            },
            {
                path : "/login",
                element : <Login/>
            },
            {
                path : "/register",
                element : <Register/>
            },
            {
                path : "/forgotPassword",
                element : <ForgotPassword/>
            }
        ]
    },
]);
