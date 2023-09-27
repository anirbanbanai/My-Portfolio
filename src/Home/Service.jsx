import { keyframes } from "@emotion/react";
import { Reveal } from "react-awesome-reveal";

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-150px, 1px, 0);
  }

  
`;
const customAnimation2 = keyframes`
from {
    opacity: 0;
    transform: translate3d(-150px, 10px, 0);
}
`;
const customAnimation3 = keyframes`
from {
    opacity: 0;
    transform: translate3d(-150px, -10px, 0);
    
  }
`;
const customAnimation4 = keyframes`
      from {
        opacity: 0;
        transform: translate3d(-150px, 10px, 0);
      }
    `;

const Service = () => {
    return (
        <div id="service" name="test1" className="w-full p-5">
            <h1 className="text-2xl text-red-500 font-semibold text-center"> What service I offer you</h1>
            <h3 className="text-3xl font-bold text-center">Services</h3>
            <div className="mt-9 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="nnn bg-slate-200 p-5 rounded-2xl hover:bg-white">
                    
                    <Reveal keyframes={customAnimation}>
                        <h2 className="text-3xl font-bold">Web Development</h2>
                        <p className="mt-3 font-normal">As a Web Developer use coding language like HTML, CSS, JavaScript and Python to build website and web application</p>
                    </Reveal>

                </div>
                <div className="nnn bg-slate-200 p-5 rounded-2xl hover:bg-white">
                    <Reveal keyframes={customAnimation2}>
                        <h2 className="text-3xl font-bold">Front-End Development</h2>
                        <p className="mt-3 font-normal"><p className="mt-3 font-normal">As a Front End Developer use FrontEnd Technology like React.JS, CSS FrameWork like Tailwind CSS, Bootstrap, React Awesome components to build website and web application</p></p>
                    </Reveal>

                </div>
                <div className="nnn bg-slate-200 p-5 rounded-2xl hover:bg-white">
                    <Reveal keyframes={customAnimation2}>
                        <h2 className="text-3xl font-bold">Back-End Development</h2>
                        <p className="mt-3 font-normal"><p className="mt-3 font-normal">As a Front End Developer use Back-End Technology like Node.js,express.js, back end FrameWork like Nest.js to build website and web application</p></p>
                    </Reveal>

                </div>

                <div className="nnn bg-slate-200 p-5 rounded-2xl hover:bg-white">
                    <Reveal keyframes={customAnimation3}>
                        <h2 className="text-3xl font-bold">Full-Stack Development</h2>
                        <p className="mt-3 font-normal">As a Full Stack Developer use FullStack Technology like Express.JS, Node.JS, MongoDb, Firebase Authentication to build website and web application</p>
                    </Reveal>

                </div>

                <div className="nnn bg-slate-200 p-5 rounded-2xl hover:bg-white">
                    <Reveal keyframes={customAnimation4}>
                        <h2 className="text-3xl font-bold">API intigration</h2>
                        <p className="mt-3 text-xl font-normal">I offer API integration service in existing application or in software i create from scratch</p>
                    </Reveal>

                </div>

                <div className="nnn bg-slate-200 p-5 rounded-2xl hover:bg-white">
                    <Reveal keyframes={customAnimation}>
                        <h2 className="text-3xl font-bold">Database</h2>
                        <p className="mt-3 font-normal">
                            I use MongoDb,PostgreSQL, GrapSQl
                        </p>
                    </Reveal>

                </div>

            </div>
        </div>
    );
};

export default Service;