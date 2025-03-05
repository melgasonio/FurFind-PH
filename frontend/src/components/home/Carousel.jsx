import { act, useState } from "react";

import PetReportDetails from "../petreportspage/PetReportDetails";
import { useGetRecentReports } from "../../hooks/pet_reports/useGetRecentReports";

const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  // Get the five most recent reports
  const { recentReports } = useGetRecentReports();
  const slidesLength = recentReports.length;
  const dotsArray = Array.from({ length: slidesLength }, (_, i) => i + 1)


  // Showslide function incase activeSlide becomes less than or greater than acceptable values when next/previous buttons are controlled
  // For previous button
  const handlePrevClick = () => {
    if (activeSlide === 1) {
      setActiveSlide((p) => slidesLength);
    } else {
      setActiveSlide(activeSlide - 1);
    }

  }
  // For next button
  const handleNextClick = () => {
    if (activeSlide === slidesLength) {
      setActiveSlide((p) => 1);
    } else {
      setActiveSlide(activeSlide + 1);    
    }
  }


  return (
    <div>
      {/* Slideshow Container */}
      <div className="max-w-[1000px] relative m-auto">
        {/* Slide wrapper */}
        {recentReports.map((r, i) => 
          <div key={r._id} className={i === activeSlide - 1 ? "block" : "hidden"}>
            <PetReportDetails petReport={r} />
          </div>
        )}

        {/* Next and previous buttons */}
          <a 
            className="cursor-pointer absolute top-[50%] w-auto mt-[-22px] p-[16px] bg-white-100 text-[18px] font-bold" 
            onClick={handlePrevClick}>
              &#10094;
          </a>
          <a 
            className="cursor-pointer absolute top-[50%] right-[0] w-auto mt-[-22px] p-[16px] bg-white-100 text-[18px] font-bold" onClick={handleNextClick}>
              &#10095;
          </a>  
      </div>

      {/* The dots */}
      <div className="text-center">
        {dotsArray.map((d) => 
          <span 
            key={d} 
            className={activeSlide === d ? 
              "cursor-pointer h-[15px] w-[15px] my-[12px] mx-[2px] bg-[#753131] rounded-[50%] inline-block" : 
              "cursor-pointer h-[15px] w-[15px] my-[12px] mx-[2px] bg-[#bbb] rounded-[50%] inline-block"} 
            onClick={() => setActiveSlide(d)}>
          </span>
        )}
      </div>
    </div>
    
  );
};

export default Carousel;
