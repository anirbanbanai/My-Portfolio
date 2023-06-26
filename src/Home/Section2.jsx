import Btntt from "../Compo/Btn";
import img from '../assets/mail-to-sms-compatible-toute-messagerie.svg'

const Section2 = () => {
    return (
        <div className="grid md:grid-cols-2">
            <div className="p-5 pl-11">
                <h2 className="text-2xl font-semibold text-red-500"> About Me</h2>
                <h1 className="text-4xl font-bold mt-3">Why Hire Me For Your Next Project?</h1>
                <p className=" font-semibold mt-5">I have extensive knowledge HTML, CSS, Bootstrap, Tailwind CSS, React , Mongodb, Express.JS, Node.JS, API,
                    Debugging, Front-End development , Back-End development. I have recently complete my MERN stack
                    project . And also complete more than 15 project based on my skills. Also, I am interested to work more with
                    MERN stack development in future with the ABC company.</p>
                <a href="https://drive.google.com/file/d/1JEEwXx3YPzM-VxzVoESnTmAvcAoW2V9T/view">
                    <Btntt>Download CV</Btntt>
                </a>
            </div>
            <div className="p-5">
                <img className="p-8" src={img} alt="" />
            </div>
        </div>
    );
};

export default Section2;