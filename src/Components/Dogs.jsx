import React, { useState } from "react";
import dogs from "./dogsData";
import "./dogs.css";
const Dogs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const handleNextDog = () => {
    if (currentIndex < dogs.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setCurrentImgIndex(0);
    }
  };
  const handlePrevDog = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setCurrentImgIndex(0);
    }
  };
  const handlePrvImage = () => {
    if (currentImgIndex > 0) {
      setCurrentImgIndex(currentImgIndex - 1);
    }
  };
  const handleNxtImage = () => {
    if (currentImgIndex < dogs[currentIndex].images.length -1) {
      setCurrentImgIndex(currentImgIndex + 1);
    }
  };
  return (
    <div className="container">
      <div className="dog-information">
        <div>
          <h3>{dogs[currentIndex].name}</h3>
          <p>{dogs[currentIndex].description}</p>
        </div>
        <div className="image-container">
          <img src={dogs[currentIndex].images[currentImgIndex]} alt={`${dogs[currentIndex].name} image`}></img>
          <div className="btn-container">
            <button
              className="btn"
              onClick={handlePrvImage}
              disabled={currentImgIndex === 0}
              style={{opacity : currentImgIndex === 0 ? "0.8" : "1"}}
            >
              <span>&laquo;</span>
            </button>
            <button
              className="btn"
              onClick={handleNxtImage}
              disabled={currentImgIndex === dogs[currentIndex].images.length -1}
              style={{opacity : currentImgIndex === dogs[currentIndex].images.length - 1  ? "0.8" : "1"}}
            >
              <span>&raquo;</span>
            </button>
          </div>
        </div>
      </div>
      <div className="btn-container">
        <button
          onClick={handlePrevDog}
          disabled={currentIndex === 0}
          className="btn"
          style={{ opacity: currentIndex === 0 ? "0.8" : "1" }}
        >
          <span>&laquo;</span>
        </button>
        <button
          onClick={handleNextDog}
          disabled={currentIndex === dogs.length - 1}
          className="btn"
          style={{ opacity: currentIndex === dogs.length - 1 ? "0.8" : "1" }}
        >
          <span>&raquo;</span>
        </button>
      </div>
    </div>
  );
};

export default Dogs;
