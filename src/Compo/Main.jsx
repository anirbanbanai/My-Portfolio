import { Outlet } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Footer from "./Footer";


const Main = () => {
    return (
        <div>
           <Navbar></Navbar>
           <Home></Home>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Main;