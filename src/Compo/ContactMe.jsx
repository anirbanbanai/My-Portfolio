import { FcCallback } from "react-icons/fc";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import Btntt from "./Btn";


const ContactMe = () => {
    return (
        <div className=" m-10 p-10">
            <h2 className="text-red-500 text-5xl font-bold text-center mb-3">Contact me</h2>
            <div className="mt-5 md:grid grid-cols-2">
            <div >
                <div className="flex items-center mb-5">
                    <FcCallback className="text-4xl"/>
                    <div className="ml-4">
                    <h2 className="text-2xl font-semibold">Call me</h2>
                    <p className="text-xl">+8801313558092</p>
                    </div>
                   
                </div>
                <div className="flex items-center mb-5">
                    <GrLocation className="text-4xl"/>
                    <div className="ml-4">
                    <h2 className="text-2xl font-semibold">Location</h2>
                    <p className="text-xl">Bangladesh, Mymensingh</p>
                    </div>
                   
                </div>
                <div className="flex items-center mb-5">
                    <MdOutlineMarkEmailUnread className="text-4xl"/>
                    <div className="ml-4">
                    <h2 className="text-2xl font-semibold mx-auto">Email me : <a href="mailto:anirbanchondrobanai@gmail.com">Click Here</a></h2>
                    
                    </div>
                   
                </div>
            </div>

            <form>

            <div className="md:flex gap-5 mb-4">
                <input type="text" placeholder="Enter Your Name" className="input input-bordered input-secondary w-full max-w-xs" />
                <input type="email" placeholder="Enter Your Emal" className="input input-bordered input-secondary w-full max-w-xs" />
            </div>

            <input type="text" placeholder="Enter Your Subject" className="input input-bordered input-secondary w-full " />

            <textarea className="textarea textarea-secondary w-full mt-4 h-32" placeholder="Your Message"></textarea>
            <Btntt>Submit</Btntt>
            </form>
            </div>
        </div>
    );
};

export default ContactMe;