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

export const router = createBrowserRouter([
    {
        path: "/",
        // TO DO : Error Element use
        element: <Main></Main> , 
        children : [
            {
                path : "/",
                element : <Home/>
            },
            {
                path : "/colleges",
                element : <Colleges/>
            },
            {
                path : "/admission",
                element : <Admission/>
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
            }
        ]
    },
]);
