import React from "react";
import { GroupCaptionEditorProps } from "../../types/defaultComponents";
import { TargetType } from "../../types/internal";
import CaptionEditor from "../captionEditor/CaptionEditor";

const GroupCaptionEditor: React.FC<GroupCaptionEditorProps> = (props) => {
    return <CaptionEditor {...props} targetId={props.groupId} targetType={TargetType.Group} className="t42-caption-editor t42-group-caption-bar-element" />
}

export default GroupCaptionEditor;
