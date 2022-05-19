import React from "react";
import { GroupMoveAreaProps } from "../../types/internal";

const GroupMoveArea: React.FC<GroupMoveAreaProps> = ({ children, moveAreaId }) => {
    return <div id={moveAreaId} className="t42-move-area t42-group-caption-bar-element">
        {children}
    </div>
}

export default GroupMoveArea;