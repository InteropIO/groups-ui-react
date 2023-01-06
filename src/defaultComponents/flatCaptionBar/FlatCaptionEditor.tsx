import React from "react";
import { FlatCaptionEditorProps } from "../../types/defaultComponents";
import { TargetType } from "../../types/internal";
import CaptionEditor from "../captionEditor/CaptionEditor";

const FlatCaptionEditor: React.FC<FlatCaptionEditorProps> = (props) => {
    return <CaptionEditor {...props} targetId={props.frameId} targetType={TargetType.Frame} className={"t42-caption-editor t42-frame-caption-bar-element"} />
}

export default FlatCaptionEditor;
