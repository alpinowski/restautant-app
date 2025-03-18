import React from "react";
import BgPolygon from "../../assets/polygon.png";
import Vector from "../../assets/vector-wave.png";
import { FaUser } from "react-icons/fa";


const bgStyle = {
    backgroundImage: `url(${BgPolygon})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
    position: "relative",
};
const About = ({HandlePopup}) => {
  return (
    <div style={bgStyle} className="py-14">
        <div className="container min-h-[500px] relative z-10">
            <h1 data-aos="fade" className="pt-20 tracking-wider text-4xl font-semibold text-center text-white">
            About Us
            </h1>
            <div 
              data-aos="fade" 
              data-aos-delay="300" 
              className="bg-white/80 p-10 my-10">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae amet assumenda ut dicta impedit, itaque necessitatibus architecto, id ea dolor vel ab, soluta odio iure qui esse exercitationem eligendi. Similique exercitationem, libero inventore consectetur ullam praesentium tempore vitae, aut doloribus nisi natus fugit quo dolor asperiores impedit voluptatem. Molestias magni sit molestiae minus nulla corporis iusto architecto voluptas maxime impedit? Esse hic architecto quasi aperiam corporis vero dicta facilis accusamus aliquid. Quis nam nulla maxime, impedit amet tempora adipisci, illo dicta sed rerum totam numquam autem est quae consequatur voluptatibus sunt! Soluta illum cum, incidunt sint nihil officia consequatur cupiditate!

                <div className="pt-10 flex justify-center">
                <button onClick={HandlePopup}
                 className="flex justify-center items-center gap-2 bg-primary text-xl h-[40px] text-white px-5 py-2 hover:scale-105 duration-300">
                <FaUser />
                MyAccount
              </button>
                </div>
            </div>
        </div>

        <div className="absolute top-0 right-0 w-full">
            <img src={Vector} alt="" className="mx-auto"/>
        </div>
    </div>
  );
};

export default About;