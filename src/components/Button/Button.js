import * as React from "react";
import "./button.css";

class Button extends React.Component {
    handleClick = () => {
        const { onClick } = this.props;
        if (onClick) {
            onClick();
        }
    };

    render() {
        const { text, className, ariaLabel } = this.props;

        return (
            <button
                className={`button ${className || ''}`}
                onClick={this.handleClick}
                aria-label={ariaLabel} // Add aria-label for better accessibility
            >
                {text}
            </button>
        )
    }
}

export default Button;
