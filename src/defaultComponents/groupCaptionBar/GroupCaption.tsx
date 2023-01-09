import React, { useRef } from "react";
import { GroupCaptionProps } from "../../types/defaultComponents";
import useEditableCaption from "../captionEditor/useEditableCaption";

const GroupCaption: React.FC<GroupCaptionProps> = ({ caption, notifyBoundsChanged }) => {
    const ref = useRef<HTMLDivElement>(null);

    useEditableCaption(ref, { notifyBoundsChanged });

    return <div ref={ref} className="t42-caption t42-title t42-group-caption-bar-element">{caption}</div>
}

export default GroupCaption;