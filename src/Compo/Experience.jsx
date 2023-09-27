
import { FcMindMap, FcRating, FcProcess } from 'react-icons/fc';

const Experience = () => {
    return (
        <div className=" md:flex gap-3 justify-between experience m-5 p-5 w-3/4 mx-auto">
            <div className='flex mt-2 nnn1 items-center gap-2'>
                <div>
                    <h1><FcRating className='text-3xl' /></h1>
                </div>
                <div>
                    <p className='text-xl'>Back end developer</p>
                    <p className='text-sm'> 1 year at <a href="https://xcodex-7bdfb.web.app/?fbclid=IwAR3GAihQOoYy9dVfKtssu__j3YNj-XDG3dky8ang5dZk60bmQYIIcEg3YpU">X-Codex</a> Company</p>
                </div>
            </div>
            <div className='flex mt-2 nnn1 items-center gap-2'>
                <div>
                    <h1><FcMindMap className='text-3xl' /></h1>
                </div>
                <div>
                    <p className='text-xl'>50 project</p>
                    <p className='text-sm'> MERN |Next.js |Nest.js |Redux</p>
                </div>
            </div>
            <div className='flex mt-2 nnn1 items-center gap-2'>
                <div>
                    <h1><FcProcess className='text-3xl' /></h1>
                </div>
                <div className=''>
                    <p className='text-xl'>MERN stack developer</p>
                    <p className='text-sm'>Logi8tech company</p>
                </div>
            </div>
        </div>
    );
};

export default Experience;