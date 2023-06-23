
import Tilt from 'react-parallax-tilt';


import img from '../assets/IMG_20230312_193407.jpg'

const ParallaxEffectImg = () => (
  <Tilt
    className="parallax-effect-img"
    tiltMaxAngleX={40}
    tiltMaxAngleY={40}
    perspective={800}
    transitionSpeed={1500}
    scale={1.1}
    gyroscope={true}
  >
    <img src={img} className="inner-element rounded-full" alt="pic" />
  </Tilt>
);

export default ParallaxEffectImg;