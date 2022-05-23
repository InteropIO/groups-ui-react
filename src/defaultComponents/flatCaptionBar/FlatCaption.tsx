import React from "react";
import { FlatCaptionProps } from "../../types/internal";

const FlatCaption: React.FC<FlatCaptionProps> = ({ caption }) => {
    return <div className="t42-caption t42-title t42-frame-caption-bar-element">
        {caption}
    </div>
}


export default FlatCaption;