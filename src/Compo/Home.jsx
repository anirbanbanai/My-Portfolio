import Section1 from "../Home/Section1";
import Section2 from "../Home/Section2";
import Service from "../Home/Service";
import ContactMe from "./ContactMe";
import Maps from "./Map";
import MyProject from "./MyProject";
import Newslatter from "./Newslatter";
import Skills from "./Skills";


const Home = () => {
    return (
        <div className="bgbg bg-slate-100 pt-20">
           <Section1></Section1>
           <Section2></Section2>
           <Service></Service>
           <Skills ></Skills>
           <MyProject></MyProject>
           <Newslatter></Newslatter>
           <ContactMe></ContactMe>
           <Maps></Maps>
        </div>
    );
};

export default Home;