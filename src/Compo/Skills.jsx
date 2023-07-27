import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from '../assets/skills/bootstrap.png'
import img2 from '../assets/skills/css3.png'
import img3 from '../assets/skills/html-5--v1.png'
import img4 from '../assets/skills/javascript--v1.png'
import img6 from '../assets/skills/react-native.png'
import img7 from '../assets/skills/tailwind_css.png'

import img8 from '../assets/skills/mongodb-icon-2048x2048-cezvpn3f.png'
import img9 from '../assets/skills/node.png'
import img10 from '../assets/skills/express-js.png'
import img11 from '../assets/skills/firebase2.webp'
import img12 from '../assets/skills/next.png'
import img13 from '../assets/skills/type.png'
// import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { useEffect } from 'react';


const Skills = () => {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div id="skill" className=' w-[90%]  mx-auto mt-10 mb-10'>
            <h2 className='text-4xl font-bold text-center mb-5'>My Skills </h2>

            <div className='nnn2'>
                <h3 className='text-3xl font-bold text-center mb-6'>Front End Technology</h3>
                <div data-aos="zoom-in-up" data-aos-duration="1000" className=' n4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                    <div className='text-center bg-slate-300 p-5 rounded-2xl mx-5 md:mx-0'>
                        <img className='mx-auto w-16' src={img12} alt="" />
                        <h3>Next.js</h3><div className="radial-progress tb" style={{ "--value": 95 }}>95%</div>
                    </div>
                    <div className='text-center bg-slate-300 p-5 rounded-2xl mx-5 md:mx-0'>
                        <img className='mx-auto w-16' src={img13} alt="" />
                        <h3>Typescript</h3><div className="radial-progress tb" style={{ "--value": 80 }}>80%</div>
                    </div>
                    <div className='text-center bg-slate-300 p-5 rounded-2xl mx-5 md:mx-0'>
                        <img className='mx-auto w-16' src={img7} alt="" />
                        <h3>Tailwind</h3><div className="radial-progress tb" style={{ "--value": 95 }}>95%</div>
                    </div>

                    <div className='text-center  bg-slate-300 p-5 rounded-2xl mx-5 md:mx-0'>
                        <img className='mx-auto w-16' src={img1} alt="" />

                        <h3 >Bootstrap</h3>

                        <div className="radial-progress tb" style={{ "--value": 90 }}>90%</div>

                    </div>
                    <div className='text-center bg-slate-300 p-5 rounded-2xl mx-5 md:mx-0'>
                        <img className='mx-auto w-16' src={img2} alt="" />
                        <h3>CSS3</h3>

                        <div className="radial-progress tb" style={{ "--value": 95 }}>95%</div>


                    </div>
                    <div className='text-center bg-slate-300 p-5 rounded-2xl mx-5 md:mx-0'>
                        <img className='mx-auto w-16' src={img3} alt="" />
                        <h3>HTML5</h3>
                        <div className="radial-progress tb" style={{ "--value": 95 }}>95%</div>
                    </div>
                    <div className='text-center bg-slate-300 p-5 rounded-2xl mx-5 md:mx-0'>
                        <img className='mx-auto w-16' src={img4} alt="" />
                        <h3>JavaScript</h3><div className="radial-progress tb" style={{ "--value": 90 }}>90%</div>
                    </div>
                    <div className='text-center bg-slate-300 p-5 rounded-2xl mx-5 md:mx-0'>
                        <img className='mx-auto w-16' src={img6} alt="" />
                        <h3>React</h3><div className="radial-progress tb" style={{ "--value": 90 }}>90%</div>
                    </div>

                </div>
            </div>


            <div className='nnn2'>
                <h3 className='text-3xl font-bold text-center mb-6 mt-5'>Back End Technology</h3>
                <div data-aos="zoom-in-up" data-aos-duration="1000" className=' n4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                    <div className='text-center bg-slate-300 p-5 rounded-2xl mx-5 md:mx-0'>
                        <img className='mx-auto w-20' src={img8} alt="" />
                        <h3>MongoDb</h3>
                        {/* <div style={{ width: 150, height: 150 }}>
                            <CircularProgressbar value={66} >
                                66
                            </CircularProgressbar>
                        </div> */}
                        <div className="radial-progress tb" style={{ "--value": 85 }}>85%</div>
                    </div>

                    <div className='text-center  bg-slate-300 p-5 rounded-2xl mx-5 md:mx-0'>
                        <img className='mx-auto w-20' src={img9} alt="" />

                        <h3 >Node JS</h3>

                        <div className="radial-progress tb" style={{ "--value": 85 }}>85%</div>

                    </div>
                    <div className='text-center bg-slate-300 p-5 rounded-2xl mx-5 md:mx-0'>
                        <img className='mx-auto w-20' src={img10} alt="" />
                        <h3>Express JS</h3>

                        <div className="radial-progress tb" style={{ "--value": 85 }}>85%</div>


                    </div>
                    <div className='text-center bg-slate-300 p-5 rounded-2xl mx-5 md:mx-0'>
                        <img className='mx-auto w-20' src={img11} alt="" />
                        <h3>Firebase </h3>

                        <div className="radial-progress tb" style={{ "--value": 85 }}>85%</div>


                    </div>


                </div>
            </div>


        </div>
    );
};

export default Skills;