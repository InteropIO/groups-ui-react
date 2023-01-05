import React from "react";
import { TabElementProps } from "../../types/api";
import TabChannelSelector from "../channelSelector/TabChannelSelector";
import TabCaption from "./TabCaption";
import TabCaptionEditor from "./TabCaptionEditor";
import TabCloseButton from "./TabCloseButton";

const Tab: React.FC<TabElementProps> = ({ caption, selected, close, channels, captionEditor, notifyCaptionBoundsChanged }) => {
    return <div className="t42-react-tab">
        {channels.visible && <TabChannelSelector showSelector={channels.showSelector} selectedChannel={channels.selectedChannel} selectedChannelColor={channels?.selectedChannelColor} />}
        {captionEditor.show ? <TabCaptionEditor {...captionEditor} caption={captionEditor.text} selected={selected} /> : <TabCaption notifyBoundsChanged={notifyCaptionBoundsChanged} caption={caption} selected={selected} />}
        <TabCloseButton selected={selected} close={close} />
    </div>
};

export default Tab;