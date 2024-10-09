import * as React from "react";
import "./Footer.css";

export default class Footer extends React.Component {
    render() { 
        const date = new Date().getFullYear();
        return (
            <div className="footer">
                <p className="p1">Designed and Developed by <span>Berkcan ALKAN</span></p>
                <p className="p2">Copyright © {date} SB</p>
            </div>
        );
    }
}