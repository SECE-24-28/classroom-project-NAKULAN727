import React from "react";
import {MediaStyle} from "./media-styled";
const MediaComponent = () =>
{
    return(
        <MediaStyle>
            <div className="parent">
                <div className="content">
                    <h1>Learners Today, Leaders Tomorrow</h1>
                    <p>Our vision is to empower individuals from diverse backgrounds to become accomplished professionals. At Aptitude Guru Hem, we believe that knowledge has the power to transcend boundaries.</p>
                </div>
            </div>
        </MediaStyle>
    )
}
export default MediaComponent;