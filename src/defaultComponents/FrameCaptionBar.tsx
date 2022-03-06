import React from "react";
import { FrameCaptionBarProps } from "../types/internal";

const FrameCaptionBar: React.FC<FrameCaptionBarProps> = ({ moveAreaId, text }) => {
    return( 
        <div id={moveAreaId} className="t42-move-area t42-frame-caption-bar-element">
            <div className="t42-caption t42-title t42-frame-caption-bar-element">
                {text ?? "Custom"}
            </div>
        </div>);
};

export default FrameCaptionBar;