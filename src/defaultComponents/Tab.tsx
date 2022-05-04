import React from "react";
import { TabElementProps } from "../types/internal";
import TabChannelSelector from "./channelSelector/TabChannelSelector";
import TabCaption from "./TabCaption";
import TabCloseButton from "./TabCloseButton";

const Tab: React.FC<TabElementProps> = ({ caption, selected, close, channels }) => {
    // const classNames = " t42-tab t42-tab-bar-element";
    // const selectedClassNames = "t42-selected-tab t42-selected-tab-element" + classNames;
    return <>
        {channels.visible && <TabChannelSelector showSelector={channels.showSelector} selectedChannel={channels.selectedChannel} />}
        <TabCaption caption={caption} selected={selected} />
        <TabCloseButton selected={selected} close={close} />
    </>

};

export default Tab;