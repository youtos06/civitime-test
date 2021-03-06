import React from 'react';
import shirtIcon from '../assets/t-shirt.svg';
import shirtColor1 from '../assets/color-B2C7C7.svg';
import shirtColor2 from '../assets/color-88C10F.svg';
import shirtColor3 from '../assets/color-FF1414.svg';
import shirtColor4 from '../assets/color-striped.svg';
import "../styles/block.css";
function ShirtList({changeShirtColor}) {

    const updateShirtColor = (newColor1,newColor2) =>{
        changeShirtColor({
            color1: newColor1,
            color2 : newColor2
        });
    };
    return (
        <div className="shirtList"> 
            <ul>
                <li>
                    <img src={shirtIcon} alt="shirtIcon"/>
                </li>
                <li onClick={() =>updateShirtColor("#B2C7C7","#B2C7C7")}>
                    <img src={shirtColor1} alt="shirtColor"/>
                </li>
                <li  onClick={() =>updateShirtColor("#88C10F","#88C10F")}>
                    <img src={shirtColor2} alt="shirtColor"/>
                </li>
                <li onClick={() =>updateShirtColor("#FF1414","#FF1414")}>
                    <img src={shirtColor3} alt="shirtColor"/>
                </li>
                <li onClick={() =>updateShirtColor("#1C3E8E","#C0C4C7")}>
                    <img src={shirtColor4} alt="shirtColor"/>
                </li>
            </ul>
        </div>
    );
}

export default ShirtList;