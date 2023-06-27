import { keyframes } from "@emotion/react";
import { Reveal } from "react-awesome-reveal";

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-150px, 10px, 0);
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
        <div className="w-full p-5">
            <h1 className="text-2xl text-red-500 font-semibold text-center"> What service I offer you</h1>
            <h3 className="text-3xl font-bold text-center">Services</h3>
            <div className="mt-9 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="nnn bg-slate-200 p-5 rounded-2xl hover:bg-white">
                    <Reveal keyframes={customAnimation}>
                        <h2 className="text-3xl font-bold">Web Development</h2>
                        <p className="mt-3 font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum iste, quae corporis sint culpa suscipit asperiores dolorum nobis! Voluptate, veritatis?</p>
                    </Reveal>

                </div>
                <div className="nnn bg-slate-200 p-5 rounded-2xl hover:bg-white">
                    <Reveal keyframes={customAnimation2}>
                        <h2 className="text-3xl font-bold">Front-End Development</h2>
                        <p className="mt-3 font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum iste, quae corporis sint culpa suscipit asperiores dolorum nobis! Voluptate, veritatis?</p>
                    </Reveal>

                </div>

                <div className="nnn bg-slate-200 p-5 rounded-2xl hover:bg-white">
                    <Reveal keyframes={customAnimation3}>
                        <h2 className="text-3xl font-bold">Full-Stack Development</h2>
                        <p className="mt-3 font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum iste, quae corporis sint culpa suscipit asperiores dolorum nobis! Voluptate, veritatis?</p>
                    </Reveal>

                </div>

                <div className="nnn bg-slate-200 p-5 rounded-2xl hover:bg-white">
                    <Reveal keyframes={customAnimation4}>
                        <h2 className="text-3xl font-bold">API intigration</h2>
                        <p className="mt-3 text-xl font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum iste, quae corporis sint culpa suscipit asperiores dolorum nobis! Voluptate, veritatis?</p>
                    </Reveal>

                </div>

                <div className="nnn bg-slate-200 p-5 rounded-2xl hover:bg-white">
                    <Reveal keyframes={customAnimation}>
                        <h2 className="text-3xl font-bold">Landing Page Design</h2>
                        <p className="mt-3 font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum iste, quae corporis sint culpa suscipit asperiores dolorum nobis! Voluptate, veritatis?</p>
                    </Reveal>

                </div>

            </div>
        </div>
    );
};

export default Service;