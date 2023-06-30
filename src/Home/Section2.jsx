import { Fade } from "react-awesome-reveal";
import Btntt from "../Compo/Btn";
import img from '../assets/mail-to-sms-compatible-toute-messagerie.svg'
import { keyframes } from "@emotion/react";
import { Reveal } from "react-awesome-reveal";

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-200px, -10px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;
const Section2 = () => {
    return (
        <div id="about" className="nnn2 grid md:grid-cols-2 mt-20">

            <div className="p-5 ">
                <Fade cascade damping={0.1}>
                    <h2 className="text-2xl font-semibold text-red-500"> About Me</h2>
                    <h1 className="text-4xl font-bold mt-3">Why Hire Me For Your Next Project?</h1>
                    <p className=" font-semibold mt-5">I have extensive knowledge HTML, CSS, Bootstrap, Tailwind CSS, React , Mongodb, Express.JS, Node.JS, API,
                            Debugging, Front-End development , Back-End development. I have recently complete my MERN stack
                            project . And also complete more than 15 project based on my skills. Also, I am interested to work more with
                            MERN stack development in future with the ABC company.</p>
                   <div className="sm:flex">
                   <a href="https://drive.google.com/file/d/1JEEwXx3YPzM-VxzVoESnTmAvcAoW2V9T/view">
                        <Btntt>Download CV</Btntt>
                    </a>
                    <a href="https://drive.google.com/file/d/179KKSCQABlb50lWS9Ggfj1wT2Rmiv943/view">
                        <Btntt>Download Cover Latter</Btntt>
                    </a>
                   </div>
                </Fade>

            </div>
            <div className="p-5 ">
                <Reveal  keyframes={customAnimation}>
                    <img className="nnn" src={img} alt="" />
                </Reveal>
            </div>
        </div>
    );
};

export default Section2;