import * as React from "react";
import './SecondLayout.css';
import LeftSection from "./Sections/LeftSection";
import RightSection from "./Sections/RightSection";

class SecondLayout extends React.Component {
    render() {
        return (
          <div className="second-layout">
            <LeftSection />
            <RightSection />
          </div>
        );
    }
}

export default SecondLayout;