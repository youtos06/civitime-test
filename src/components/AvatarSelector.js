import React, { useState } from 'react';
import ManAvatar from './avatars/ManAvatar';
import WomanAvatar from './avatars/WomanAvatar';
import  '../styles/AvatarSelector.css';
import SkinList from './SkinList';
import ShirtList from './ShirtList';
import NavBar from './NavBar';

function AvatarSelector(props) {
    const[formError,setFormError] = useState("");
    const[formData,setFormData] = useState({
        selected: "",
        man: {
            skinColor: "#E0A39A",
            shirtColor:{
                color1: "#1C3E8E",
                color2: "#C0C4C7"
            }
        },
        woman:{
            skinColor: "#FCD7B8",
            shirtColor:{
                color1: "#B2C7C7",
                color2: "#B2C7C7"
            }
        }
    });

    const setGender = (gender) =>{
        setFormData({
            ...formData,
            selected: gender
        })
    }

    const changeSkinColor = (childSkinColor) => {
        if(formData.selected === "woman"){
            setFormData({
                ...formData,
                woman: {...formData.man, skinColor:childSkinColor}
            });
            setFormError("");
        }else if(formData.selected === "man"){
            setFormData({
                ...formData,
                man: {...formData.man, skinColor:childSkinColor}
            });
            setFormError("");
        }else {
            setFormError("Please Select one of the Avatars (Man,Woman) Before Selecting a skin Color");
        }
    }

    const changeShirtColor = (childShirtColor) => {
        if(formData.selected === "woman"){
            if(childShirtColor.color1 === childShirtColor.color2){
                setFormData({
                    ...formData,
                    woman: {...formData.woman, 
                            shirtColor:{
                                ...formData.woman.shirtColor,
                                color1: childShirtColor.color1,
                                color2: childShirtColor.color2
                            }}
                });
                setFormError("");
            }else{
                setFormError("This Shirt is not avaible for the woman avatar");
            }
            
        }else if(formData.selected === "man"){
            setFormData({
                ...formData,
                man: {...formData.man, 
                        shirtColor:{
                            ...formData.man.shirtColor,
                            color1: childShirtColor.color1,
                            color2: childShirtColor.color2
                        }}
            });
            setFormError("");
        }else {
            setFormError("Please Select one of the Avatars (Man,Woman) Before choosing a shirt");
        }
    }

    const submit = ()=>{ 
        if(formData.selected==='man'){
            setFormError("");
            alert("choice : "+formData.selected+"\n"+
            "Skin Color : "+formData.man.skinColor+"\n"+
            "Shirt Color : Strip 1 : "+formData.man.shirtColor.color1+
                        "\t Strip 2 : "+formData.man.shirtColor.color2);
        }else if(formData.selected==='woman'){
            setFormError("");
            alert("choice : "+formData.selected+"\n"+
            "Skin Color : "+formData.woman.skinColor+"\n"+
            "Shirt Color : Strip 1 : "+formData.woman.shirtColor.color1+
                        "\t Strip 2 : "+formData.woman.shirtColor.color2);
        }else{
            setFormError("Please Select an Avatar before submit")
        }
    }

    return (
        <div className="container">
        <NavBar/>
        
            <p align="center">Lequel de ces deux avatars préférez-vous?</p>
            <div className="wrapper">
                
                <div className="left-grid">
                    <ManAvatar skinColor={formData.man.skinColor} shirtColor={formData.man.shirtColor} onClick={() => {
                        setGender("man");
                        setFormError("");}
                        }/>
                </div>
                <div className="right-grid">
                    <WomanAvatar skinColor={formData.woman.skinColor} shirtColor={formData.woman.shirtColor} onClick={() => {
                        setGender("woman");
                        setFormError("");}
                        }/>
                </div>
            </div>
            <hr/>
            <div className="wrapper">
                <SkinList changeSkinColor={changeSkinColor}/>
                <ShirtList changeShirtColor={changeShirtColor}/>
                <div>
                    <p align="center" className="error">{formError}</p>
                </div>
            </div>
            <div>

            </div>
            <div className="button">
                <button onClick={submit}>VALIDER</button>
            </div>
            
        </div>
    );
}

export default AvatarSelector;