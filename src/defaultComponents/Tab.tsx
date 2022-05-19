import React from "react";
import { TabElementProps } from "../types/internal";
import TabChannelSelector from "./channelSelector/TabChannelSelector";
import TabCaption from "./TabCaption";
import TabCloseButton from "./TabCloseButton";

const Tab: React.FC<TabElementProps> = ({ caption, selected, close, channels }) => {
    return <div className="t42-react-tab">
        {channels.visible && <TabChannelSelector showSelector={channels.showSelector} selectedChannel={channels.selectedChannel} selectedChannelColor={channels?.selectedChannelColor} />}
        <TabCaption caption={caption} selected={selected} />
        <TabCloseButton selected={selected} close={close} />
    </div>
};

export default Tab;