import Section1 from "../Home/Section1";
import Section2 from "../Home/Section2";
import Service from "../Home/Service";
import ContactMe from "./ContactMe";
import Newslatter from "./Newslatter";
// import MyTest from "./MyTest";
import Skills from "./Skills";


const Home = () => {
    return (
        <div className=" pt-20">
           <Section1></Section1>
           <Section2></Section2>
           <Service></Service>
           <Skills></Skills>
           <Newslatter></Newslatter>
           <ContactMe></ContactMe>
           {/* <MyTest></MyTest> */}
        </div>
    );
};

export default Home;