
import Tilt from 'react-parallax-tilt';

import img from '../assets/IMG_20230312_193407.jpg'

const Default = () => (
  <Tilt>
    <img className='rounded-full w-[90%]' src={img} alt="" />
  </Tilt>
);

export default Default;



// const ParallaxEffectImg = () => (
//   <Tilt
//     className="parallax-effect-img"
//     tiltMaxAngleX={40}
//     tiltMaxAngleY={40}
//     perspective={800}
//     transitionSpeed={1500}
//     scale={1.1}
//     gyroscope={true}
//   >
//     <img src={img} className="inner-element rounded-full" alt="pic" />
//   </Tilt>
// );

// export default ParallaxEffectImg;




// const TiltImg = () => (
//   <Tilt
//     className="tilt-img"
//     tiltMaxAngleX={35}
//     tiltMaxAngleY={35}
//     perspective={900}
//     scale={1.1}
//     transitionSpeed={2000}
//     gyroscope={true}
//   >
//     <img src={img} className="inner-element rounded-full" alt="pic" />
//   </Tilt>
// );

// export default TiltImg;