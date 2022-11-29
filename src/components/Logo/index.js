import React from 'react';
import LogoImg from '../../assets/logo.jpeg'
import '../../App.css';

export default function Logo () {
    return (
        <>
            <img
                className="logo-img"
                src={LogoImg}
                alt="Logo"
            />
        </>
    )
}

