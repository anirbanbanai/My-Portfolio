import { Outlet } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ButtomNavbar from "./ButtomNavbar";
import AllNormal from "./AllNormal";


const Main = () => {
   
    return (
        <div>
            <AllNormal/>
            <Navbar></Navbar>
            <ButtomNavbar/>
            <Home></Home>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;