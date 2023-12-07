import AOS from 'aos';
import 'aos/dist/aos.css';
import boot from '../assets/skills/bootstrap.png'
import css from '../assets/skills/css3.png'
import html from '../assets/skills/html-5--v1.png'
import js from '../assets/skills/javascript--v1.png'
import rtn from '../assets/skills/react-native.png'
import tail from '../assets/skills/tailwind_css.png'

import mongo from '../assets/skills/mongodb-icon-2048x2048-cezvpn3f.png'
import node from '../assets/skills/node.png'
import express from '../assets/skills/express-js.png'
import fire from '../assets/skills/firebase2.webp'
import next from '../assets/skills/next.png'
import ts from '../assets/skills/type.png'
import nest from '../assets/skills/nest2.jpg'
import post from '../assets/skills/postgresql.png'
import mysq from '../assets/skills/mysql.png'
import redux from '../assets/skills/redux.png'
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

            <div className='nnn2 grid grid-cols-2 lg:grid-cols-4 gap-4 items-center mx-auto text-center'>
                <div className='flex mx-auto items-center gap-1'>
                    <img width={50}  src={html} alt="" />
                    <p>HTML</p>
                </div>
                <div className='flex mx-auto items-center gap-1'>
                    <img width={50}  src={css} alt="" />
                    <p>CSS</p>
                </div>
             
                <div className='flex mx-auto items-center gap-1'>
                    <img width={50}  src={tail} alt="" />
                    <p>Tailwind</p>
                </div>
                <div className='flex mx-auto items-center gap-1'>
                    <img width={50}  src={boot} alt="" />
                    <p>Bootstrap</p>
                </div>
                <div className='flex mx-auto items-center gap-1'>
                    <img width={50}  src={js} alt="" />
                    <p>Javascript</p>
                </div>
                <div className='flex mx-auto items-center gap-1'>
                    <img width={50}  src={ts} alt="" />
                    <p>Typescript</p>
                </div>
                <div className='flex mx-auto items-center gap-1'>
                    <img width={50}  src={rtn} alt="" />
                    <p>React</p>
                </div>
                <div className='flex mx-auto items-center gap-1'>
                    <img width={50}  src={next} alt="" />
                    <p>Next.js</p>
                </div>
                <div className='flex mx-auto items-center gap-1'>
                    <img width={50}  src={nest} alt="" />
                    <p>Nest.js</p>
                </div>
                <div className='flex mx-auto items-center gap-1'>
                    <img width={50} className='rounded-full ' src={redux} alt="" />
                    <p>Redux</p>
                </div>
                <div className='flex mx-auto items-center gap-1'>
                    <img width={50}  src={node} alt="" />
                    <p>Node.js</p>
                </div>
                <div className='flex mx-auto items-center gap-1'>
                    <img width={50}  src={express} alt="" />
                    <p>Express.js</p>
                </div>
                <div className='flex mx-auto items-center gap-1'>
                    <img width={50}  src={mongo} alt="" />
                    <p>MongoDb</p>
                </div>
                <div className='flex mx-auto items-center gap-1'>
                    <img width={50}  src={post} alt="" />
                    <p>PostgreSQL</p>
                </div>
                <div className='flex mx-auto items-center gap-1'>
                    <img width={50}  src={mysq} alt="" />
                    <p>MySQl</p>
                </div>
                <div className='flex mx-auto items-center gap-1'>
                    <img width={50}  src={fire} alt="" />
                    <p>Firebase</p>
                </div>
            </div>

            {/* <div className='nnn2'>
                <h3 className='text-3xl font-bold text-center mb-6'>Front End Technology</h3>
                <div data-aos="zoom-in-up" data-aos-duration="1000" className=' n4 grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5'>
                    <div className='text-center bg-slate-300 p-5 rounded-2xl mx-5 md:mx-0'>
                        <img className='mx-auto w-16' src={img12} alt="" />
                        <h3 className='font-bold mb-2'>Next.js</h3><div className=" radial-progress tb" style={{ "--value": 95 }}>95%</div>
                    </div>
                    <div className='text-center bg-slate-300 p-5 rounded-2xl mx-5 md:mx-0'>
                        <img className='mx-auto w-16' src={img17} alt="" />
                        <h3 className='font-bold mb-2'>Redux</h3><div className="radial-progress tb" style={{ "--value": 95 }}>95%</div>
                    </div>
                    <div className='text-center bg-slate-300 p-5 rounded-2xl mx-5 md:mx-0'>
                        <img className='mx-auto w-16' src={img13} alt="" />
                        <h3 className='font-bold mb-2'>Typescript</h3><div className="radial-progress tb" style={{ "--value": 80 }}>80%</div>
                    </div>
                    <div className='text-center bg-slate-300 p-5 rounded-2xl mx-5 md:mx-0'>
                        <img className='mx-auto w-16' src={img7} alt="" />
                        <h3 className='font-bold mb-2'>Tailwind</h3><div className="radial-progress tb" style={{ "--value": 95 }}>95%</div>
                    </div>

                    <div className='text-center  bg-slate-300 p-5 rounded-2xl mx-5 md:mx-0'>
                        <img className='mx-auto w-16' src={img1} alt="" />

                        <h3  className='font-bold mb-2'>Bootstrap</h3>

                        <div className="radial-progress tb" style={{ "--value": 90 }}>90%</div>

                    </div>
                    <div className='text-center bg-slate-300 p-5 rounded-2xl mx-5 md:mx-0'>
                        <img className='mx-auto w-16' src={img2} alt="" />
                        <h3 className='font-bold mb-2'>CSS3</h3>

                        <div className="radial-progress tb" style={{ "--value": 95 }}>95%</div>


                    </div>
                    <div className='text-center bg-slate-300 p-5 rounded-2xl mx-5 md:mx-0'>
                        <img className='mx-auto w-16' src={img3} alt="" />
                        <h3 className='font-bold mb-2'>HTML5</h3>
                        <div className="radial-progress tb" style={{ "--value": 95 }}>95%</div>
                    </div>
                    <div className='text-center bg-slate-300 p-5 rounded-2xl mx-5 md:mx-0'>
                        <img className='mx-auto w-16' src={img4} alt="" />
                        <h3 className='font-bold mb-2'>JavaScript</h3><div className="radial-progress tb" style={{ "--value": 90 }}>90%</div>
                    </div>
                    <div className='text-center bg-slate-300 p-5 rounded-2xl mx-5 md:mx-0'>
                        <img className='mx-auto w-16' src={img6} alt="" />
                        <h3 className='font-bold mb-2'>React</h3><div className="radial-progress tb" style={{ "--value": 90 }}>90%</div>
                    </div>

                </div>
            </div> */}


            {/* <div className='nnn2'>
                <h3 className='text-3xl font-bold text-center mb-6 mt-5'>Back End Technology</h3>
                <div data-aos="zoom-in-up" data-aos-duration="1000" className=' n4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                    <div className='text-center bg-slate-300 p-5 rounded-2xl mx-5 md:mx-0'>
                        <img className='mx-auto w-20' src={img14} alt="" />
                        <h3 className='font-bold mb-2'>Nest.js</h3>
                        
                        <div className="radial-progress tb" style={{ "--value": 85 }}>85%</div>
                    </div>
                   

                    <div className='text-center  bg-slate-300 p-5 rounded-2xl mx-5 md:mx-0'>
                        <img className='mx-auto w-20' src={img9} alt="" />

                        <h3  className='font-bold mb-2'>Node JS</h3>

                        <div className="radial-progress tb" style={{ "--value": 85 }}>85%</div>

                    </div>
                    <div className='text-center bg-slate-300 p-5 rounded-2xl mx-5 md:mx-0'>
                        <img className='mx-auto w-20' src={img10} alt="" />
                        <h3 className='font-bold mb-2'>Express JS</h3>

                        <div className="radial-progress tb" style={{ "--value": 85 }}>85%</div>


                    </div>
                    <div className='text-center bg-slate-300 p-5 rounded-2xl mx-5 md:mx-0'>
                        <img className='mx-auto w-20' src={img11} alt="" />
                        <h3 className='font-bold mb-2'>Firebase </h3>

                        <div className="radial-progress tb" style={{ "--value": 85 }}>85%</div>


                    </div>


                </div>
            </div> */}
            {/* <div className='nnn2'>
            <h3 className='text-3xl font-bold text-center mb-6 mt-5'>Database</h3>
                <div  data-aos="zoom-in-up" data-aos-duration="1000" className=' n4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                    <div className='text-center bg-slate-300 p-5 rounded-2xl mx-5 md:mx-0'>
                        <img className='mx-auto w-20' src={img15} alt="" />
                        <h3 className='font-bold mb-2'>PostgreSQL</h3>
                        
                        <div className="radial-progress tb" style={{ "--value": 85 }}>85%</div>
                    </div>
                    <div className='text-center bg-slate-300 p-5 rounded-2xl mx-5 md:mx-0'>
                        <img className='mx-auto w-20' src={img8} alt="" />
                        <h3 className='font-bold mb-2'>Mongodb</h3>
                      
                        <div className="radial-progress tb" style={{ "--value": 85 }}>85%</div>
                    </div>
                    <div className='text-center bg-slate-300 p-5 rounded-2xl mx-5 md:mx-0'>
                        <img className='mx-auto w-20' src={img16} alt="" />
                
                        <div className="radial-progress tb" style={{ "--value": 85 }}>85%</div>
                    </div>
                </div>
            </div> */}

        </div>
    );
};

export default Skills;