import React, { useState } from 'react';
import shirtIcon from '../assets/t-shirt.svg';
import shirtColor1 from '../assets/color-B2C7C7.svg';
import shirtColor2 from '../assets/color-88C10F.svg';
import shirtColor3 from '../assets/color-FF1414.svg';
import shirtColor4 from '../assets/color-striped.svg';
import "../styles/block.css";
function ShirtList() {
    const[shirtColor,setShirtColor] = useState({
        color1: "",
        color2: ""
    })

    const updateShirtColor = (newColor1,newColor2) =>{
        setShirtColor({
            ...shirtColor,
            color1: newColor1,
            color2 : newColor2
        });
    };
    return (
        <div className="shirtList"> 
            <ul>
                <li>
                    <img src={shirtIcon} />
                </li>
                <li onClick={() =>updateShirtColor("#B2C7C7","#B2C7C7")}>
                    <img src={shirtColor1} />
                </li>
                <li  onClick={() =>updateShirtColor("#88C10F","#88C10F")}>
                    <img src={shirtColor2} />
                </li>
                <li onClick={() =>updateShirtColor("#FF1414","#FF1414")}>
                    <img src={shirtColor3} />
                </li>
                <li onClick={() =>updateShirtColor("#1C3E8E","#1C3E8E")}>
                    <img src={shirtColor4} />
                </li>
            </ul>
        </div>
    );
}

export default ShirtList;