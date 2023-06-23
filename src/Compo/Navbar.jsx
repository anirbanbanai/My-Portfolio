import { Link } from "react-router-dom";


const Navbar = () => {
    const NavItem = <>
        <li><Link className="text-xl font-semibold">Home</Link></li>
        <li><Link className="text-xl font-semibold">About</Link></li>
        <li><Link className="text-xl font-semibold">Services</Link></li>
        <li><Link className="text-xl font-semibold">Skill</Link></li>
        <li><Link className="text-xl font-semibold">Contact </Link></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
{NavItem}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-4xl font-bold"><span className="text-red-500">My</span> <span className="text-blue-500">Portfolio</span></a>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavItem}
                    </ul>
                </div>
                <div className="navbar-end">
                        <button className="btn btn-warning">ME</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;