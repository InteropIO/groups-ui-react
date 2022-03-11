import React from "react";
import { GroupCaptionBarProps } from "../types/internal";

const GroupCaptionBar: React.FC<GroupCaptionBarProps> = ({ moveAreaId, targetType, targetId, caption, ...rest }) => {
    // TODO add buttons
    // move area should be working (the framework must find it by id)
    return <div id={moveAreaId} className="t42-move-area t42-group-caption-bar-element"> 
        <div className="t42-caption t42-title t42-group-caption-bar-element">{caption}</div>
    </div>
}

export default GroupCaptionBar;