// src/TypewriterComponent.js
import React from 'react';
import Typewriter from 'typewriter-effect';

const TypewriterComponent = () => {
    return (
        <div style={{ fontSize: '2em', fontWeight: 'bold' }}> {/* Adjust the size as needed */}
            <Typewriter
                options={{
                    strings: [
                        'FRONTEND DEVELOPER',
                        'FREELANCER',
                        'MERN STACK DEVELOPER',
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 75,
                }}
            />
        </div>
    );
};

export default TypewriterComponent;
