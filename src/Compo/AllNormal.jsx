import { useEffect } from "react";
import { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { HiOutlineSun } from "react-icons/hi";
import ScrollButton from "./ReactScroll";



const AllNormal = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem("theme") : "autumn");

    const handletoggle = (e) => {
        if (e.target.checked) {
            setTheme("synthwave")
        }
        else {
            setTheme("autumn")
        }
    }

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme)
    }, [theme])
    return (
        <div className='tggl  p-4 top-2/4 right-0  fixed'>
            <label className="swap swap-rotate">

                <input onChange={handletoggle} type="checkbox" />

                <HiOutlineSun className="swap-on text-4xl text-yellow-500" />
                <BsFillMoonStarsFill className="swap-off text-3xl " />

            </label>

            <ScrollButton/>
        </div>
    );
};

export default AllNormal;