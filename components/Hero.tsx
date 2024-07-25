import {FaLocationArrow} from "react-icons/fa6";

import MagicButton from "./MagicButton";
import {Spotlight} from "./ui/Spotlight";
import {TextGenerateEffect} from "./ui/TextGenerateEffect";

const Hero = () => {

    const styles = {
        paddingX: "sm:px-16 px-6",
        paddingY: "sm:py-16 py-6",
        padding: "sm:px-16 px-6 sm:py-16 py-10",

        heroHeadText:
            "font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
        heroSubText:
            "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",

        sectionHeadText:
            "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
        sectionSubText:
            "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",
    };

    return (
        <div style={{paddingTop: "9rem"}}>
            {/**
             *  UI: Spotlights
             *  Link: https://ui.aceternity.com/components/spotlight
             */}
            <div>
                <Spotlight
                    className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                    fill="white"
                />
                <Spotlight
                    className="h-[80vh] w-[50vw] top-10 left-full"
                    fill="purple"
                />
                <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue"/>
            </div>

            {/**
             *  UI: grid
             *  change bg color to bg-black-100 and reduce grid color from
             *  0.2 to 0.03
             */}
            <div
                className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
            >
                {/* Radial gradient for the container to give a faded look */}
                <div
                    // chnage the bg to bg-black-100, so it matches the bg color and will blend in
                    className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
                />
            </div>


            {/*<div*/}
            {/*    className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}*/}
            {/*>*/}
            {/*    <div className='flex flex-col justify-center items-center mt-5'>*/}
            {/*        <div className='w-5 h-5 rounded-full bg-[#915EFF]'/>*/}
            {/*        <div className='w-1 sm:h-80 h-40 violet-gradient bg-red-300'/>*/}
            {/*    </div>*/}

            {/*    <div>*/}
            {/*        <h1 className={`${styles.heroHeadText} text-white`}>*/}
            {/*            Hi, I'm <span className='text-[#915EFF]'>Tanim</span>*/}
            {/*        </h1>*/}
            {/*        <p className={`${styles.heroSubText} mt-2 text-white-100`}>*/}
            {/*            I develop 3D visuals, user <br className='sm:block hidden'/>*/}
            {/*            interfaces and web applications*/}
            {/*        </p>*/}
            {/*    </div>*/}
            {/*</div>*/}


            <div className="flex justify-center relative my-20 z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
                        Fullstack Expertise in Next.js, Django, UI/UX, and DevOps
                    </p>

                    {/**
                     *  Link: https://ui.aceternity.com/components/text-generate-effect
                     *
                     *  change md:text-6xl, add more responsive code
                     */}
                    <TextGenerateEffect
                        words="Transforming Concepts into Seamless User Experiences"
                        className="text-center text-[40px] md:text-5xl lg:text-6xl"
                    />

                    <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                        Hi! I&apos;m Tanim, a Fullstack Developer From Bangladesh.
                    </p>

                    <a href="#projects">
                        <MagicButton
                            title="See my work"
                            icon={<FaLocationArrow/>}
                            position="right"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
