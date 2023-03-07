import React from "react";
import { TabCaptionEditorProps } from "../../types/defaultComponents";
import { TargetType } from "../../types/internal";
import CaptionEditor from "../captionEditor/CaptionEditor";

const TabCaptionEditor: React.FC<TabCaptionEditorProps> = (props) => {
    const normalClassName = "t42-caption-editor t42-tab-caption-editor t42-caption t42-tab-caption";
    const selectedClassName = "t42-caption-editor t42-tab-caption-editor t42-caption t42-tab-caption t42-selected-tab-caption  t42-selected-tab-element";

    return <CaptionEditor {...props}
        targetType={TargetType.Tab}
        targetId={props.windowId}
        className={props.selected ? selectedClassName : normalClassName} />
}

export default TabCaptionEditor;
