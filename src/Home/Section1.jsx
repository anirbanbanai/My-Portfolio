
import Btntt from "../Compo/Btn";
import { FaFacebookF } from 'react-icons/fa';
import { BsGithub, BsInstagram } from 'react-icons/bs';
import Default from "../Compo/Tilt";

const Section1 = () => {
    return (
        <div className="grid md:grid-cols-2">
            <div className="p-5 pl-11">
                <h3 className="text-xl font-semibold">MERN stack developer</h3>
                <h1 className="text-5xl font-bold mt-2 text-red-500">Hey ! I am </h1>
                <h1 className="text-5xl font-bold mt-5 ">Anirban Chondro Banai</h1>
                <p className="text-xl font-semibold mt-5">I am a MERN stack developer and experiences bulding Full-stack website</p>

                <a href="mailto:anirbanchondrobanai@gmail.com">
                    <Btntt>Hire me</Btntt>
                </a>
                <h2 className="text-2xl">Follow Me </h2>
                <div className="flex mt-2">
                    <a href="https://web.facebook.com/profile.php?id=100077890384340" className="text-2xl ml-1"><FaFacebookF /></a>
                    <a href="https://github.com/anirbanbanai" className="text-2xl ml-3"><BsGithub /></a>
                    <p className="text-2xl ml-2"><BsInstagram /></p>
                </div>
            </div>
            <div className=" p-16 pt-5">
                <Default />
            </div>
        </div>
    );
};

export default Section1;