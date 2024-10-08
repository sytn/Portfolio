import * as React from "react";
import "./Footer.css";

export default class Footer extends React.Component {
    render() { 
        const date = new Date().getFullYear();
        return (
            <div className="footer">
                <p className="p1">Designed and Developed by Berkcan ALKAN</p>
                <p className="p2">Copyright © {date} SB</p>
            </div>
        );
    }
}