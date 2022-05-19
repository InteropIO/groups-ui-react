import React from "react";
import { FrameCaptionProps } from "../../types/internal";

const FrameCaption: React.FC<FrameCaptionProps> = ({ caption }) => {
    return <div className="t42-caption t42-title t42-frame-caption-bar-element">
        {caption}
    </div>
}


export default FrameCaption;