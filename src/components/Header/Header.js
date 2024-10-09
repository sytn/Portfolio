import React from "react";
import './header.css';
import Button from "../Button/Button";
import '../../index.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faBars, faTimes, faWorm, faFile, faHome } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
    const navigate = useNavigate(); // useNavigate hook'unu burada kullanın

    const toggleDropdown = () => {
        setIsDropdownOpen(prevState => !prevState);
    };

    return (
        <header className="header">
            <span className="logo">BA.</span>
            <div className="menu-container">
                <button className="menu-toggle" onClick={toggleDropdown}>
                    <FontAwesomeIcon icon={isDropdownOpen ? faTimes : faBars} />
                </button>
                <nav className={`nav ${isDropdownOpen ? 'open' : ''}`}>
                    <Button text={<><FontAwesomeIcon icon={faHome} className="fa-icon"/> Home</>} onClick={() => navigate('/home')} />
                    <Button text={<><FontAwesomeIcon icon={faAddressCard} className="fa-icon"/> About</>} onClick={() => navigate('/about')} />
                    <Button text={<><FontAwesomeIcon icon={faWorm} className="fa-icon"/> Projects</>} onClick={() => navigate('/projects')} />
                    <Button text={<><FontAwesomeIcon icon={faFile} className="fa-icon"/> Resume</>} onClick={() => navigate('/resume')} />
                </nav>
            </div>
        </header>
    );
};

export default Header;
