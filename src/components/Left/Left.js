import React from "react";
import Hand from "../../assets/hand.gif";
import Typewriter from "../Typewriter";

const Left = () => {
    const roles = ["FRONT-END DEVELOPER", "FREELANCER", "MERN STACK DEVELOPER"];

    return (
        <div className="column left-column" style={{
            padding: '20px',
            maxWidth: '100%',
            overflow: 'hidden',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
        }}>
            <div className="waving-hand" style={{
                display: 'flex',
                alignItems: 'center',
                fontSize: '2em',
                marginBottom: '15px',
                fontWeight: "bold",
            }}>
                Hi There!
                <img
                    src={Hand}
                    style={{
                        width: "50px",
                        height: "50px",
                        marginLeft: '10px', // Add spacing between the text and the image
                    }}
                    alt="Waving Hand"
                />
            </div>
            <h2 style={{
                fontSize: '2.5em', // Make the heading more prominent
                margin: '0 0 10px 0',
                color: '#fff', // Ensure good contrast for readability
            }}>
                I'M <span style={{
                    color: '#c0392b',
                }}>BERKCAN ALKAN</span>
            </h2>
            <div style={{
                fontSize: '1.5em', // Make the typewriter text bigger and more readable
                color: '#fff', // Use a subtle color to complement the heading
            }}>
                <Typewriter words={roles} />
            </div>
        </div>
    );
}

export default Left;
