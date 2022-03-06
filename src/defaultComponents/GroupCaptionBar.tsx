import React from "react";
import { GroupCaptionBarProps } from "../types/internal";

const GroupCaptionBar: React.FC<GroupCaptionBarProps> = ({ elementId, moveAreaId, targetType, targetId, text, ...rest }) => {
    return <div id={moveAreaId} className="t42-move-area t42-group-caption-bar-element">
        <div className="t42-caption t42-title t42-group-caption-bar-element">{text}</div>
    </div>
}

export default GroupCaptionBar;