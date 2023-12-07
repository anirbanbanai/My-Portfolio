
import Btntt from "./Btn";
import { CiHome,CiGrid42,CiSatellite1,CiGlobe } from "react-icons/ci";
import { GiSkills } from "react-icons/gi";

const Navbar = () => {
   
    const NavItem = <>
        <li className=""><a href="#home" className="text-xl pp font-semibold max-lg:bg-slate-300 rounded-full p-3 hover:bg-slate-500 hover:text-white"><span className="max-lg:hidden">Home</span> <span className="lg:hidden"><CiHome className="text-3xl "/></span> </a></li>
        
        <li><a href="#about" className="text-xl font-semibold pp max-lg:bg-slate-300 rounded-full p-3 hover:bg-slate-500 hover:text-white"><span className="max-lg:hidden">About</span> <span className="lg:hidden"><CiGrid42 className="text-3xl"/></span></a></li>
        
        <li><a href="#service" className="text-xl font-semibold pp max-lg:bg-slate-300 rounded-full p-3 hover:bg-slate-500 hover:text-white"><span className="max-lg:hidden">Services</span> <span className="lg:hidden"><CiSatellite1 className="text-3xl"/></span> </a></li>
       
        <li><a href="#skill" className="text-xl font-semibold pp max-lg:bg-slate-300 rounded-full p-3 hover:bg-slate-500 hover:text-white"><span className="max-lg:hidden">Skill</span> <span className="lg:hidden"><GiSkills className="text-3xl"/></span> </a></li>
        
        <li><a href="#contact" className="text-xl font-semibold pp max-lg:bg-slate-300 rounded-full p-3 hover:bg-slate-500 hover:text-white"><span className="max-lg:hidden">Contact</span> <span className="lg:hidden"><CiGlobe className="text-3xl"/></span></a></li>
    </>
    return (
        <div className=" w-full mx-auto fixed z-30 bg-slate-50 themeNav max-md:hidden">
            <div className="navbar ">
                <div className="navbar-start">
                    
                    <a className="btn btn-ghost normal-case text-3xl sm:text-4xl lg:text-5xl  font-bold"><span className="text-red-500">My</span> <span className="text-blue-500">Portfolio</span></a>
                </div>
                <div className="navbar-center hiddn  ">
                    <ul className="menu menu-horizontal px-1 flex gap-3 justify-between">
                        {NavItem}
                    </ul>
                </div>
                <div className="navbar-end ">
                    <a className="hidden md:flex items-center justify-center" href="https://drive.google.com/file/d/1JEEwXx3YPzM-VxzVoESnTmAvcAoW2V9T/view">
                        <Btntt>Download CV</Btntt>
                    </a>

                </div>
            </div>
        </div>
    );
};

export default Navbar;