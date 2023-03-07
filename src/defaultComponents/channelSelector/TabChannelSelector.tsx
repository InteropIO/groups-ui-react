import React from "react";
import { TabChannelSelectorProps } from "../../types/defaultComponents";
import BaseChannelSelector from "./BaseChannelSelector";

const TabChannelSelector: React.FC<TabChannelSelectorProps> = ({ showSelector, selectedChannel, selectedChannelColor }) => {
    return <BaseChannelSelector outsideClass={"t42-tab-bar-element t42-tab-channel-selector"}
        contentClass={"t42-tab-channel-selector-content"}
        showSelector={showSelector}
        selectedChannel={selectedChannel}
        selectedChannelColor={selectedChannelColor}
    />
};

export default TabChannelSelector;