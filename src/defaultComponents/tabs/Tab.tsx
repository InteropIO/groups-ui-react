import React from "react";
import { TabElementProps } from "../../types/api";
import TabChannelSelector from "../channelSelector/TabChannelSelector";
import TabMultiChannelSelector from "../channelSelector/multi/FlatMultiChannelSelector";
import TabCaption from "./TabCaption";
import TabCaptionEditor from "./TabCaptionEditor";
import TabCloseButton from "./TabCloseButton";

const Tab: React.FC<TabElementProps> = ({ caption, selected, close, channels, captionEditor, notifyCaptionBoundsChanged, windowId }) => {
    return <div className="t42-react-tab">
        {channels.visible && channels.channelsMode !== "multi" && <TabChannelSelector {...channels} />}
        {channels.visible && channels.channelsMode === "multi" && <TabMultiChannelSelector {...channels} />}
        {captionEditor.show ?
            <TabCaptionEditor {...captionEditor} caption={captionEditor.text!} selected={selected} windowId={windowId} /> :
            <TabCaption notifyBoundsChanged={notifyCaptionBoundsChanged} caption={caption} selected={selected} />}
        <TabCloseButton selected={selected} close={close} />
    </div>
};

export default Tab;
