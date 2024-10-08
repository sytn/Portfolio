import * as React from "react";
import './Findme.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";

export default class Findme extends React.Component {
    render() {
        return (
            <div className="findme">
                <h2>FIND ME ON</h2>
                <h4>Feel free to <span>Contact</span> with me</h4>
                <div className="social">
                    <button
                        className="icon-button"
                        onClick={() => window.open('https://github.com/sytn', '_blank')}
                    >
                        <FontAwesomeIcon icon={faGithub} />
                    </button>
                    <button
                        className="icon-button"
                        onClick={() => window.open('https://www.linkedin.com/in/berkcan-alkan-8907a2167/', '_blank')}
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </button>
                    <button
                        className="icon-button"
                        onClick={() => window.open('https://x.com/tomaengineer', '_blank')}
                    >
                        <FontAwesomeIcon icon={faXTwitter} />
                    </button>
                </div>
            </div>
        );
    }
}
