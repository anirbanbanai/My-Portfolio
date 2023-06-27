
import img1 from '../assets/skills/bootstrap.png'
import img2 from '../assets/skills/css3.png'
import img3 from '../assets/skills/html-5--v1.png'
import img4 from '../assets/skills/javascript--v1.png'
import img6 from '../assets/skills/react-native.png'
import img7 from '../assets/skills/tailwind_css.png'


const Skills = () => {
    return (
        <div className=' w-full  mx-auto mt-10 mb-10'>
            <h2 className='text-4xl font-bold text-center mb-5'>My Skills </h2>
           <div className='  grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
           <div className='text-center  bg-slate-300 p-5 rounded-2xl'>
                <img className='mx-auto' src={img1} alt="" />
                <h3 >Bootstrap</h3>
            </div>
            <div className='text-center bg-slate-300 p-5 rounded-2xl'>
                <img className='mx-auto' src={img2} alt="" />
                <h3>CSS3</h3>
            </div>
            <div className='text-center bg-slate-300 p-5 rounded-2xl'>
                <img className='mx-auto' src={img3} alt="" />
                <h3>HTML5</h3>
            </div>
            <div className='text-center bg-slate-300 p-5 rounded-2xl'>
                <img className='mx-auto' src={img4} alt="" />
                <h3>JavaScript</h3>
            </div>
            <div className='text-center bg-slate-300 p-5 rounded-2xl'>
                <img className='mx-auto' src={img6} alt="" />
                <h3>React</h3>
            </div>
            <div className='text-center bg-slate-300 p-5 rounded-2xl'>
                <img className='mx-auto' src={img7} alt="" />
                <h3>Tailwind</h3>
            </div>
           </div>
        </div>
    );
};

export default Skills;