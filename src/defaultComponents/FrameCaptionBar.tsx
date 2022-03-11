import React from "react";
import { FrameCaptionBarProps } from "../types/internal";

const FrameCaptionBar: React.FC<FrameCaptionBarProps> = ({ moveAreaId, caption }) => {
    // TODO add buttons
    return( 
        <div id={moveAreaId} className="t42-move-area t42-frame-caption-bar-element">
            <div className="t42-caption t42-title t42-frame-caption-bar-element">
                {caption ?? "Custom"}
            </div>
        </div>);
};

export default FrameCaptionBar;