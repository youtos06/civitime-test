import React, { useState } from 'react';
import ManAvatar from './avatars/ManAvatar';
import WomanAvatar from './avatars/WomanAvatar';
import  '../styles/AvatarSelector.css';
import SkinList from './SkinList';
import ShirtList from './ShirtList';

function AvatarSelector(props) {
    const[gender,setGender] = useState("");
    const[skinColor,setSkinColor] = useState("")
    const[shirtColor,setShirtColor] = useState({
        color1: "",
        color2: ""
    })

    const changeSkinColor = (childSkinColor) => {
        console.log("hehehe")
        setSkinColor(childSkinColor)
    }
    const changeShirtColor = () => {

    }

    return (
        <div class="wrapper">
            <div class="left-grid">
                <ManAvatar />
            </div>
            <div class="right-grid">
                <WomanAvatar skinColor={skinColor}/>
            </div>
            <SkinList changeSkinColor={changeSkinColor}/>
            <ShirtList changeShirtColor={changeShirtColor}/>
        </div>
    );
}

export default AvatarSelector;