import React from "react";
import beyti from "../../assets/png/beyti.png";
import mercimek from "../../assets/png/mercimek.png";
import pilav from "../../assets/png/pilav.png";
import lahmacun from "../../assets/png/lahmacun.png";
import PrimaryButton from "../Shared/PrimaryButton";

const Banner = () => {
  return ( 
  <>
    <div className="container py-14 relative">
        <div className="relative z-20">
            <h1 data-aos="fade-up" data-aos-delay="300" className="py-8 tracking-wider text-2xl font-semibold text-dark text-center"> What would you like to eat today?</h1>
            
            <div className="space-y-10">
                <div data-aos="fade-up" data-aos-delay ="500" className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10">
                    <div>
                        <p>
                            {" "}
                            Lorem ipsum dolor sit amet <span className="text-primary">Write Here</span> consectetur adipisicing elit. Sit, minus reprehenderit cupiditate, minima dolores reiciendis nam tempore culpa voluptatem necessitatibus, fugit impedit quidem nesciunt tempora consequuntur labore unde? Magnam explicabo obcaecati ea accusamus molestias eos, alias, officia perferendis sit amet porro vero, eveniet optio beatae. Quae sapiente maxime repellendus dolor?
                        </p>
                    </div>
                    <div></div>
                </div>
                
                <div data-aos = "fade-up" data-aos-delay="300" className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10">
                <div></div>
                    <div>
                        <p>
                            {" "}
                            Lorem ipsum dolor sit amet <span className="text-primary">Write Here</span> consectetur adipisicing elit. Sit, minus reprehenderit cupiditate, minima dolores reiciendis nam tempore culpa voluptatem necessitatibus, fugit impedit quidem nesciunt tempora consequuntur labore unde? Magnam explicabo obcaecati ea accusamus molestias eos, alias, officia perferendis sit amet porro vero, eveniet optio beatae. Quae sapiente maxime repellendus dolor?
                        </p>
                    </div>
                </div>
            </div>

            <div data-aos = "fade-up" 
                data-aos-delay="500" 
                data-aos-offset="0" 
                className="flex justify-center mt-10 sm:mt-14">
                <PrimaryButton />
            </div>
        </div>

        <div data-aos = "fade-right" className="absolute top-5 left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100">
            <img src={mercimek} alt="" className="max-w-[160px]" />
        </div>
        <div data-aos = "fade-right" className="absolute bottom-16 left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100">
            <img src={lahmacun} alt="" className="max-w-[280px]" />
        </div>
        <div data-aos = "fade-left" className="absolute top-10 right-16 sm:top-0 sm:right-20 opacity-50 sm:opacity-100">
            <img src={pilav} alt="" className="max-w-[200px]" />
        </div>
        <div data-aos = "fade-left" className="hidden sm:block absolute bottom-0 right-2">
            <img src={beyti} alt="" className="max-w-[250px]" />
        </div>
    </div>
  </>
  );
};

export default Banner;