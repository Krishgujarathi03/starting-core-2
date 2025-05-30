
import { useEffect, useRef } from "react";
import anime from "animejs";

import img1 from "../assets/AboutSectionImage/aboutUs.png";

const About = () => {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const textRef = useRef(null);
  let observer;

  // Function to set initial “hidden/off‑screen” styles
  const resetElements = () => {
    if (imgRef.current && textRef.current) {
      Object.assign(imgRef.current.style, {
        opacity: 0,
        transform: "translateX(-200px)",
      });
      Object.assign(textRef.current.style, {
        opacity: 0,
        transform: "translateX(200px)",
      });
    }
  };

  // Function to run the anime.js timeline
  const runAnimation = () => {
    const tl = anime.timeline({
      easing: "easeOutQuad",
      duration: 1000,
    });

    tl.add({
      targets: imgRef.current,
      translateX: [ -200, 0 ],
      opacity: [ 0, 1 ],
    })
    .add({
      targets: textRef.current,
      translateX: [ 200, 0 ],
      opacity: [ 0, 1 ],
    }, "-=700");
  };

  useEffect(() => {
    resetElements(); // ensure hidden at mount

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          runAnimation();
        } else {
          resetElements();
        }
      },
      {
        root: null,           // viewport
        threshold: 0.2,       // 20% visible
      }
    );

    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      id="about-us"
      ref={sectionRef}
      className=" bg-[#1a1a1a] text-white w-full overflow-x-hidden
        xs:w-[80%] xs:m-auto xs:mt-[3rem] 
        md:min-h-screen  md:px-10 md:py-10 
        xl:pt-0 xl:min-h-0 "
    >
      
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 w-full">
        {/* Left Column */}
        <div
          ref={imgRef}
          className=" xs:w-[73%] md:w-1/2 w-full max-w-[500px] relative"
        >
          <div className="absolute inset-0 z-0 overflow-hidden rounded-lg">
            <img
              src={img1}
              alt="blur-bg"
              className="w-full h-full object-cover scale-110 opacity-60 brightness-[1.1] blur-3xl rounded-lg"
            />
          </div>
          <img
            src={img1}
            alt="About"
            className="relative z-10 w-full h-auto object-contain drop-shadow-2xl rounded-lg"
          />
        </div>

        {/* Right Column */}
        <div
          ref={textRef}
          className="md:w-1/2 text-center md:text-left mt-[2rem] "
        >
          <h1 className="text-4xl font-avenir mb-4 leading-tight
            xs:text-[2.5rem] xs:leading-[1.3rem] xs:font-[700]  
            md:text-6xl 
            xl:text-[2.5rem] "
          >
            About Us
          </h1>
          <h2 className="font-bold text-3xl xs:text-[1.25rem] xs:font-[400] font-playfair text-white mb-4">
            BonBern Think Tank Studio is a behavior-first consultancy.
          </h2>

          <p className="text-base xs:text-[1rem] font-lora text-white leading-relaxed text-justify 
            md:text-left
            xl:text-[1.125rem]"
          >
            We believe the world doesn't move on logic — it moves on{" "}
            <strong>emotion, story, and belief</strong>. We go beyond marketing
            — into <strong>minds, memories, and meaning</strong>. <br />
            <br /> <span className="xs:text-[1.5rem] xs:font-[600] ">Our secret?</span> <br />A mix of
            <strong>
              {" "}
              psychological insight, creative storytelling, and tech-powered
              execution
            </strong>
            . <br />
            <br /> We blend{" "}
            <strong>psychology with creativity to shape perception</strong> —
            from <strong>celebrity image-building</strong> and{" "}
            <strong>viral brand campaigns to solving public problems</strong>.
          </p>
        </div>
      </div>

    </div>
  );
};


export default About;
