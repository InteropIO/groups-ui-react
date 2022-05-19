import React from "react";
import { GroupCaptionBarProps } from "../../types/internal";
import GroupMoveArea from "./GroupMoveArea";
import GroupButtons from "./GroupButtons";
import GroupCaption from "./GroupCaption";

const GroupCaptionBar: React.FC<GroupCaptionBarProps> = ({ moveAreaId, targetType, targetId, caption, ...rest }) => {
    return <div className="t42-react-caption-bar">
        <GroupMoveArea moveAreaId={moveAreaId}>
            <GroupCaption caption={caption}/>
        </GroupMoveArea>
        <GroupButtons {...rest} />
    </div>
}

export default GroupCaptionBar;