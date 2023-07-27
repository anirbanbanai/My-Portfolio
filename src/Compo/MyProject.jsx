
import img from '../assets/skills/school camp.png'
import img2 from '../assets/skills/TOY0INDUS-30-9-2022.jpg'
import img3 from '../assets/skills/nilu.png'
import img4 from '../assets/skills/Kitchen.png'

const MyProject = () => {
    return (
        <div className=" p-10">
            <h2 className='text-4xl font-bold text-center pb-4 '>My Project</h2>
            <div className="n3 grid md:grid-cols-2 lg:grid-cols-3 gap-5">

                <div className="book bg-slate-200 rounded-2xl p-5">
                    <div>
                    <div>
                    <a href="https://github.com/anirbanbanai/School-camp">Client</a>
                    </div>
                    <div>
                    <a href="https://github.com/anirbanbanai/school-camp-server">Server</a>
                    </div> 
                   <div>
                   <a href="https://assign-12-d95ce.web.app/">Live</a>
                   </div>
                    </div>
                    {/* 
                    <a href="https://assign-12-d95ce.web.app/">Client side</a>
                    <a href="https://assign-12-d95ce.web.app/">Server side </a> */}
                   <div className='cover'>
                   <div>
                   <h2 className='text-2xl text-center font-semibold mb-3'>School Camping</h2>
                        <img className=' rounded-2xl' src={img} alt="" />
                   </div>
                   </div>
                </div>
                
                <div className="book bg-slate-200 rounded-2xl p-5">
                    <div>
                    <div>
                    <a href="https://github.com/anirbanbanai/Nilutpala-kitchen-client">Client</a>
                    </div>
                    <div>
                    <a href="https://github.com/anirbanbanai/Nilutpala-Kitchen-Server">Server</a>
                    </div> 
                   <div>
                   <a href="https://nilutpala-kitchen.web.app/">Live</a>
                   </div>
                    </div>
                   <div className='cover'>
                  <div>
                  <h2 className='text-2xl text-center font-semibold mb-3'>Simple Kitchen</h2>
                        <img className='  rounded-2xl' src={img4} alt="" />
                  </div>
                   </div>
                </div>
                <div className="book bg-slate-200 rounded-2xl p-5">
                    <a href="https://tiny-elf-934a00.netlify.app/fs">Click to Project</a>
                   <div className='cover'>
                  <div>
                  <h2 className='text-2xl text-center font-semibold mb-3'>Simple React</h2>
                        <img className=' rounded-2xl' src={img3} alt="" />
                  </div>
                   </div>
                </div>
                <div className="book bg-slate-200 rounded-2xl p-5">
                    <a href="https://my-toy-project-df20e.web.app/">Click to Project</a>
                   <div className='cover'>
                   <div>
                   <h2 className='text-2xl text-center font-semibold mb-3'>Toy Marketplace</h2>
                        <img className=' rounded-2xl' src={img2} alt="" />
                   </div>
                   </div>
                </div>

                {/* <div className="bg-slate-200 rounded-2xl p-5">
                    <a href="">
                        <h2 className='text-2xl text-center font-semibold mb-3'>Toy Marketplace</h2>
                        <img className='rounded-2xl' src={img2} alt="" />
                    </a>
                </div>
                <div className="bg-slate-200 rounded-2xl p-5">
                    <a href="">
                        <h2 className='text-2xl text-center font-semibold mb-3'>Simple React</h2>
                        <img className='rounded-2xl' src={img3} alt="" />
                    </a>
                </div> */}
            </div>
        </div>
    );
};

export default MyProject;