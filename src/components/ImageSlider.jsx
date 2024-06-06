import { useState } from "react";

const slideStyles = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "-45px",
  fontSize: "20px",
  zIndex: 1,
  cursor: "pointer",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "-45px",
  fontSize: "20px",
  zIndex: 1,
  cursor: "pointer",
};

const sliderStyles = {
  position: "relative",
  height: "100%",
};

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
};

const dotStyle = {
 
};

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
    text:`${slides[currentIndex].desc}`
  };
  const highlightedDesc = {__html: slides[currentIndex].desc}

  return (
    <div style={sliderStyles}>
      <div>
      <div>
        <i onClick={goToNext}  style={leftArrowStyles} className="ri-arrow-left-s-line text-zinc-500 hover:bg-zinc-100 rounded-full px-[1.5%]"></i>
        </div>
        
        <div>
        <i onClick={goToNext}  style={rightArrowStyles} className="ri-arrow-right-s-line text-zinc-500 hover:bg-zinc-100 rounded-full px-[1.5%]"></i>
        </div>

      </div>
      <div style={slideStylesWidthBackground}></div>
      <div style={dotsContainerStyles}>     
      <div className="">
        {/* <p>{slideStylesWidthBackground.text}</p> */}
        <div  className="flex flex-col justify-center items-center">
          <h1 className=" mb-3 w-[89%] text-[15px] text-center text-zinc-500 font-[450]">` <div dangerouslySetInnerHTML={highlightedDesc}></div>`</h1>
         
          <div className="flex items-center">
        {slides.map((slide, slideIndex) => (
          
          <div className="text-zinc-200 hover:text-blue-400 hover:animate-ping text-[8px] mx-1 cursor-pointer"
            style={dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          
          >
            ●
          </div>
        ))}
        </div>
        </div>
        </div>
        </div>
      </div>
  );
};

export default ImageSlider;