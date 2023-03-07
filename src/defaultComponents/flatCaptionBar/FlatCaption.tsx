import React, { useRef } from "react";
import { FlatCaptionProps } from "../../types/defaultComponents";
import useEditableCaption from "../captionEditor/useEditableCaption";

const FlatCaption: React.FC<FlatCaptionProps> = ({ caption, notifyBoundsChanged }) => {
    const ref = useRef<HTMLDivElement>(null);

    useEditableCaption(ref, { notifyBoundsChanged });

    return <div ref={ref} className="t42-caption t42-title t42-frame-caption-bar-element">
        {caption}
    </div>
}


export default FlatCaption;