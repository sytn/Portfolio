import * as React from "react";
import Card from "../Card/Card";
import './Projects.css';

const Projects = () => {
    return (
        <div className="projects-container">
            <div className="projects-header">
                <h2>My Recent <span>Works</span></h2>
                <p>Here are my few projects I've <span>worked</span> recently.</p>
            </div>
            <div className="projects-section">
                <Card
                    image={"https://picsum.photos/200/300"}
                    header={"test"}
                    description={"This is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a description"}
                />
                <Card
                    image={"https://picsum.photos/200/300?random=1"}
                    header={"test"}
                    description={"Another project description"}
                />
                <Card
                    image={"https://picsum.photos/200/300?random=2"}
                    header={"test"}
                    description={"Yet another project description"}
                />
                <Card
                    image={"https://picsum.photos/200/300"}
                    description={"This is a description"}
                />
                {/* Add more Card components as needed */}
            </div>
        </div>
    );
}

export default Projects;
