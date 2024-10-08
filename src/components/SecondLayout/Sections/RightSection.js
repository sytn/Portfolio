import * as React from "react";
import './sections.css';

class RightSection extends React.Component{
    render() { 
        return (
            <div className="right-section">
                <p className="head">LET ME <span className="costum-cursor">INTRODUCE</span> MYSELF.</p>
                <p className="p1">I am fluent in core technologies such as <span>HTML</span>, <span>CSS</span>, and <span>JavaScript</span>.</p>
                <p className="p2">
                    I am particularly interested in developing innovative web technologies and products, as well as engaging in areas like digital marketing.
                </p>
                <p className="p3">
                    Whenever possible, I embrace my passion for building products using React.js.
                </p>
            </div>
        );
    }
}

export default RightSection;

