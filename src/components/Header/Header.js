import * as React from "react";
import './header.css'; // Ensure this file exists and styles are defined
import Button from "../Button/Button"; // Ensure this Button component works
import '../../index.css'; // Import global styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faContactCard, faHome, faInfo, faWorm, faBars, faTimes, faProcedures, faFile } from "@fortawesome/free-solid-svg-icons"; // Importing icons

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDropdownOpen: false,
        };
        this.toggleDropdown = this.toggleDropdown.bind(this);
    }

    toggleDropdown() {
        this.setState((prevState) => ({
            isDropdownOpen: !prevState.isDropdownOpen,
        }));
    }

    handleNavigation(path) {
        // Add logic for navigation, e.g., using React Router
        console.log(`Navigating to ${path}`);
    }

    render() {
        return (
            <header className="header"> {/* Add a class name to apply styles */}
                <span className="logo">BA.</span> {/* Single span for logo */}
                <div className="menu-container">
                    <button className="menu-toggle" onClick={this.toggleDropdown}>
                        <FontAwesomeIcon icon={this.state.isDropdownOpen ? faTimes : faBars} />
                    </button>
                    <nav className={`nav ${this.state.isDropdownOpen ? 'open' : ''}`}>
                        <Button text={<><FontAwesomeIcon icon={faHome} className="fa-icon"/> Home</>} onClick={() => this.handleNavigation('/home')} />
                        <Button text={<><FontAwesomeIcon icon={faAddressCard} className="fa-icon"/> About</>} onClick={() => this.handleNavigation('/about')} />
                        <Button text={<><FontAwesomeIcon icon={faWorm} className="fa-icon"/> Projects</>} onClick={() => this.handleNavigation('/services')} />
                        <Button text={<><FontAwesomeIcon icon={faFile} className="fa-icon"/> Resume</>} onClick={() => this.handleNavigation('/contact')} />
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;
