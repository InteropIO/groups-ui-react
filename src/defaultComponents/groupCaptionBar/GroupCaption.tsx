import React from "react";
import { GroupCaptionProps } from "../../types/internal";

const GroupCaption: React.FC<GroupCaptionProps> = ({ caption }) => {
    return <div className="t42-caption t42-title t42-group-caption-bar-element">{caption}</div>
}

export default GroupCaption;