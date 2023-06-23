import { Outlet } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";


const Main = () => {
    return (
        <div>
           <Navbar></Navbar>
           <Home></Home>
           <Outlet></Outlet>
        </div>
    );
};

export default Main;