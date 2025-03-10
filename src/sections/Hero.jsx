import { Leva } from 'leva';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera } from '@react-three/drei';
import { OrbitControls } from '@react-three/drei';


import Cube from '../components/Cube.jsx';
import Rings from '../components/Rings.jsx';
import ReactLogo from '../components/ReactLogo.jsx';
import Button from '../components/Button.jsx';
import Target from '../components/Target.jsx';
import CanvasLoader from '../components/Loading.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import { calculateSizes } from '../constants/index.js';
import { HackerRoom } from '../components/HackerRoom.jsx';
import DeepSpaceSkybox from '../components/DeepSpaceSkybox.jsx';

const Hero = () => {
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="relative min-h-screen w-full flex flex-col" id="home">
      {/* TEXT CONTENT - Ensure z-index is higher */}
      <div className="relative z-20 w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am Raghavendra <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">Building Products & Brands</p>
      </div>

      {/* 3D MODEL - Ensure z-index is lower */}
      <div className="absolute inset-0 z-10">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            {/* Hide UI Controls */}
            <Leva hidden />
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            

            <HeroCamera isMobile={isMobile}>
              <DeepSpaceSkybox rotation={[0.1, -Math.PI, 0]} />
            </HeroCamera>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>

      {/* BUTTON - Ensure z-index is high */}
      <div className="absolute bottom-7 left-0 right-0 w-full z-20 c-space">
        <a href="#about" className="w-fit">
          <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>
    </section>
  );
};

export default Hero;

