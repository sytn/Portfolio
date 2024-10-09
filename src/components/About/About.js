import * as React from "react";
import './About.css';
import Guy from '../../assets/guy.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faHtml5, 
    faCss3Alt, 
    faJsSquare, 
    faReact, 
    faNodeJs, 
    faPython, 
    faGithub,
    faWindows
} from '@fortawesome/free-brands-svg-icons';
import { fa8, faArrows, faCode, faDatabase, faFire, faTriangleCircleSquare } from "@fortawesome/free-solid-svg-icons";

const About = () => {
    return (
        <div className="about">
            <div className="section1">
                <div className="rightSide">
                    <h2>Know Who <span>I'M</span></h2>
                    <p>
                        Hi Everyone, I'm <span>Berkcan ALKAN</span> from <span>Zonguldak/Turkiye</span>.
                    </p>
                    <p>
                        I’m currently not employed, but I’m focused on <span>personal growth and self-improvement</span> in front-end web development.
                    </p>
                    <p>
                        I have completed an <span>Associate Degree (AA) in Computer Programming</span> at Karabuk University.
                    </p>
                    <p>Apart from coding, here other activities that I love to do!</p>
                    <ul>
                        <li>Playing Video Games</li>
                        <li>Hitting to GYM</li>
                        <li>Watching & Playing Basketball</li>
                    </ul>
                </div>
                <div className="leftSide">
                    <img src={Guy} className="img" alt="Berkcan Alkan" />
                </div>
            </div>
            <div className="section2">
                <h2 className="skills-header">Professional <span>SkillSet</span></h2>
                <div className="skill-container">
                    <div className="skill-box"><FontAwesomeIcon icon={faHtml5} /> HTML</div>
                    <div className="skill-box"><FontAwesomeIcon icon={faCss3Alt} /> CSS</div>
                    <div className="skill-box"><FontAwesomeIcon icon={faJsSquare} /> JavaScript</div>
                    <div className="skill-box"><FontAwesomeIcon icon={faReact} /> React</div>
                    <div className="skill-box"><FontAwesomeIcon icon={faArrows} /> Next</div>
                    <div className="skill-box"><FontAwesomeIcon icon={faNodeJs} /> Node.js</div>
                    <div className="skill-box"><FontAwesomeIcon icon={faPython} /> Python</div>
                    <div className="skill-box"><FontAwesomeIcon icon={faDatabase} /> MongoDB</div>
                    <div className="skill-box"><FontAwesomeIcon icon={faFire} /> Firebase</div>
                </div>
                <h2 className="tools-header"><span>Tools</span> I Use</h2>
                <div className="skill-container">
                    <div className="skill-box"><FontAwesomeIcon icon={faWindows} /> Windows</div>
                    <div className="skill-box"><FontAwesomeIcon icon={faCode} /> VsCode</div>
                    <div className="skill-box"><FontAwesomeIcon icon={faTriangleCircleSquare} /> Vercel</div>
                    <div className="skill-box"><FontAwesomeIcon icon={faGithub} /> Git</div>
                </div>
            </div>
        </div>
    );
}

export default About;
