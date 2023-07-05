import { useEffect, useRef } from "react";
import * as THREE from "three";
import HALO from "vanta/dist/vanta.halo.min";
const Hero = () => {
  const vantaRef = useRef(null); 
  useEffect(() => {
    
    const vantaEffect = HALO({
      el: vantaRef.current,
      THREE,
      backgroundColor: 0x000000,
      baseColor: 0x1a59,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      amplitudeFactor: 0.1,
      xOffset: 0.38,
      yOffset: 0.14,
      size: 2.0,
      
    });
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);
  return (
    <section
      ref={vantaRef}
      className="flex min-h-screen relative w-full h-full bg-slate-100 dark:bg-slate:900"
    >
      <div className="h-100 w-full absolute" />
    </section>
  );
};

export default Hero;
