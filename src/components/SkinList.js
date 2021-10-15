import React from 'react';
import skinIcon from '../assets/skin.svg';
import skinColor4 from '../assets/color-533724.svg';
import skinColor2 from '../assets/color-E0A39A.svg';
import skinColor3 from '../assets/color-FCCC84.svg';
import skinColor1 from '../assets/color-FCD7B8.svg';
import "../styles/block.css";

function SkinList({changeSkinColor}) {
    return (
        <div className="skinList">
            <ul>
                
                <li>
                    <img src={skinIcon} alt="skinIcon" />
                </li>
                <li>
                    <img src={skinColor1} alt="skinColor" onClick={() => {
                        changeSkinColor("#FCD7B8");}
                    } />
                </li>
                <li>
                    <img src={skinColor2} alt="skinColor" onClick={() => {
                        changeSkinColor("#E0A39A");}
                    }  
                    />
                </li>
                <li>
                    <img src={skinColor3} alt="skinColor" onClick={() => {
                        changeSkinColor("#FCCC84");}
                    } />
                </li>
                <li>
                    <img src={skinColor4} alt="skinColor" onClick={() => {
                        changeSkinColor("#533724");}
                    } 
                    />
                </li>
            </ul>            
        </div>
    );
}

export default SkinList;