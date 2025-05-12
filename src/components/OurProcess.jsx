import { useRef, useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';
import img1 from "../assets/OurProcessSection/ourprocess.png";

export default function OurProcess() {
  const containerRef = useRef(null);
  const textRef      = useRef(null);
  const imageRef     = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Prepare a reusable timeline
    const tl = anime.timeline({
      autoplay: false,
      easing:   'easeOutExpo',
      duration: 1000,
    }).add({
      targets: textRef.current,
      translateX: [-200, 0],
      opacity:    [0, 1],
      scale:      [0.8, 1],
    }, 0).add({
      targets: imageRef.current,
      translateX: [200, 0],
      opacity:    [0, 1],
      scale:      [0.8, 1],
    }, 0);

    const resetStyles = () => {
      [textRef.current, imageRef.current].forEach(el => {
        if (!el) return;
        el.style.opacity   = '0';
        el.style.transform = el === textRef.current
          ? 'translateX(-200px) scale(0.8)'
          : 'translateX(200px) scale(0.8)';
      });
    };

    // initial reset
    resetStyles();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          tl.restart();
        } else {
          tl.pause();
          resetStyles();
        }
      },
      {
        root: null,
        threshold: 0.3,
      }
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
      tl.pause();
    };
  }, []);

  const steps = [
    {
      title: "1. Understand the Brief",
      text: "We decode what's said, what's unsaid, and why it matters. This is where the foundation of perception begins.",
    },
    {
      title: "2. Decode Behavior",
      text: "We dive deep into psychology, audience patterns, and cultural signals — so that what we create is not just creative, but correctly wired.",
    },
    {
      title: "3. Design the Narrative",
      text: "Every message is engineered to not just be seen, but felt and remembered.",
    },
    {
      title: "4. Develop Communication Assets",
      text: "From content to campaigns, we build assets that are platform-fit — digital, physical, or phygital.",
    },
    {
      title: "5. Adapt & Amplify",
      text: "We observe how the world reacts, learn from signals, and evolve the message accordingly.",
    },
    {
      title: "6. Reflect & Reinvent",
      text: "We circle back, learn what shifted perception, and explore new opportunities.",
    },
  ];

  return (
    <div
      id="our-process"
      ref={containerRef}
      className="bg-[#1a1a1a] text-white w-full
                 xs:w-[90%] xs:m-auto xs:mt-[3rem] 
                 md:min-h-screen md:px-10 
                 xl:px-0 xl:mt-[4rem]"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 w-full">
        {/* Text Column */}
        <div
          ref={textRef}
          className="md:w-1/2 text-center md:text-left"
          style={{ willChange: 'transform, opacity' }}
        >
          <h1 className="text-4xl font-avenir mb-4 leading-tight
                         xs:text-[2.5rem] xs:font-[700] 
                         md:text-6xl xl:text-[2.5rem]">
            Our Process
          </h1>
          <div className="xs:w-[82%] xs:m-auto xl:ms-0">
            {steps.map((step, idx) => (
              <div key={idx} className="xs:mb-8">
                <h3 className="font-playfair text-xl xs:text-[1.2rem] xs:font-[400] xs:leading-[3.4rem] mb-2 text-white">
                  {step.title}
                </h3>
                <p className="font-lora text-base text-white xs:text-[1rem] xl:text-[1.125rem]">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Image Column */}
        <div
          ref={imageRef}
          className="xs:w-[73%] md:w-1/2 w-full max-w-[500px] relative"
          style={{ willChange: 'transform, opacity' }}
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
            alt="Our Process"
            className="relative z-10 w-full h-auto object-contain drop-shadow-2xl rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
