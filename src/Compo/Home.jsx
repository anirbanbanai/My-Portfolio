import Section1 from "../Home/Section1";
import Section2 from "../Home/Section2";
import Service from "../Home/Service";
import Certification from "./Certification";
import ContactMe from "./ContactMe";
import Experience from "./Experience";
import MyProject from "./MyProject";
// import MyTest from "./MyTest";
import Newslatter from "./Newslatter";
import Skills from "./Skills";


const Home = () => {
    return (
        <div className="bgbg bg-slate-100 md:pt-20">
           <Section1></Section1>
           <Experience/>
           <Section2></Section2>
           <Service></Service>
           <Skills ></Skills>
           <MyProject></MyProject>
           <Newslatter></Newslatter>
           <ContactMe></ContactMe>
           <Certification></Certification>
           {/* <Maps></Maps> */}
           {/* <MyTest></MyTest> */}
        </div>
    );
};

export default Home;