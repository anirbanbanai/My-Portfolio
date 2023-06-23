import { Link } from "react-router-dom";
import Btntt from "../Compo/Btn";
import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram, BsWhatsapp } from 'react-icons/bs';
import ParallaxEffectImg from "../Compo/Tilt";

const Section1 = () => {
    return (
        <div className="grid grid-cols-2">
            <div className="p-5 pl-11">
                <h3 className="text-xl font-semibold">MERN stack developer</h3>
                <h1 className="text-5xl font-bold mt-2 text-red-500">Hey ! I am </h1>
                <h1 className="text-5xl font-bold mt-5 ">Anirban Chondro Banai</h1>
                <p className="text-xl font-semibold mt-5">I am a MERN stack developer and experiences bulding <br /> Full-stack website</p>

                <Link><Btntt>Hire Me</Btntt></Link>
                <h2 className="text-2xl">Follow Me </h2>
                <div className="flex mt-2">
                    <p className="text-2xl ml-1"><FaFacebookF /></p>
                    <p className="text-2xl ml-2"><BsInstagram /></p>
                    <p className="text-2xl ml-3"><BsWhatsapp /></p>
                </div>
            </div>
            <div className="p-16">
              <ParallaxEffectImg/>
            </div>
        </div>
    );
};

export default Section1;