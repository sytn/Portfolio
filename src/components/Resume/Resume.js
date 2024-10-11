import React from 'react';
import './Resume.css';
import Button from "../Button/Button";

const Resume = () => {
  const handleButtonClick = () => {
    window.open("https://example.com/my-resume.pdf", "_blank"); // Replace with your actual URL
  };

  return (
    <div className="resume-container">
      <div className="button-container">
        <Button 
          text="Display My Resume" 
          ariaLabel="Display My resume" 
          className="button large-button" 
          onClick={handleButtonClick} // Use the click handler
        />
      </div>
    </div>
  );
};

export default Resume;
