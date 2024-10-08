import * as React from "react";
import './sections.css';
import Salute from "./Salute";

class LeftSection extends React.Component{
    render() { 
        return (
            <div className="left-section">
                <Salute />
            </div>
        );
    }
}

export default LeftSection;