import React from "react";
import { TabElementProps } from "../../types/api";
import TabChannelSelector from "../channelSelector/TabChannelSelector";
import TabCaption from "./TabCaption";
import TabCaptionEditor from "./TabCaptionEditor";
import TabCloseButton from "./TabCloseButton";

const Tab: React.FC<TabElementProps> = ({ caption, selected, flashing, close, channels, captionEditor, notifyCaptionBoundsChanged, windowId }) => {
    const normalClassName = "t42-react-tab";
    const flashingClassName = "t42-react-tab t42-tab-flashing::after";
    return <div className={flashing ? flashingClassName : normalClassName}>
        {channels.visible && <TabChannelSelector {...channels} />}
        {captionEditor.show ?
            <TabCaptionEditor {...captionEditor} caption={captionEditor.text!} selected={selected} windowId={windowId} /> :
            <TabCaption notifyBoundsChanged={notifyCaptionBoundsChanged} caption={caption} selected={selected} />}
        <TabCloseButton selected={selected} close={close} /> 
    </div>
};

export default Tab;