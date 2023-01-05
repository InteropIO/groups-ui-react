import React from "react";
import { GroupCaptionBarProps } from "../../types/api";
import GroupMoveArea from "./GroupMoveArea";
import GroupButtons from "./GroupButtons";
import GroupCaption from "./GroupCaption";
import GroupCaptionEditor from "./GroupCaptionEditor";

const GroupCaptionBar: React.FC<GroupCaptionBarProps> = ({ moveAreaId, targetType, targetId, caption, captionEditor, notifyCaptionBoundsChanged, ...rest }) => {
    return <div className="t42-react-caption-bar">
        <GroupMoveArea moveAreaId={moveAreaId}>
            {captionEditor.show ? <GroupCaptionEditor {...captionEditor} caption={captionEditor.text} /> : <GroupCaption notifyBoundsChanged={notifyCaptionBoundsChanged} caption={caption} />}
        </GroupMoveArea>
        <GroupButtons {...rest} />
    </div>
}

export default GroupCaptionBar;