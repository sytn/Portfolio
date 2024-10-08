import React from 'react';
import './Layout.css';
import Left from '../Left/Left';
import Right from '../Right/Right';

const Layout = () => {
    return (
        <div className="layout">
            <div className="content">
                <Left />
                <Right />
            </div>
        </div>
    );
};

export default Layout;
