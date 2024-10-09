import React from "react";
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVial } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Card = ({ image, header, description }) => {
    return (
        <div className="card">
            <img src={image} alt="Project" className="card-image" />
            <p className="header">{ header }</p>
            <p className="card-description">{description}</p>
            <div className="options">
                <button className="option-button">
                    <FontAwesomeIcon icon={faGithub} /> Github
                </button>
                <button className="option-button">
                    <FontAwesomeIcon icon={faVial} /> Demo
                </button>
            </div>
        </div>
    );
}

export default Card;
