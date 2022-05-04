import React from "react";
import { TabChannelSelectorProps } from "../../types/internal";
import BaseChannelSelector from "./BaseChannelSelector";

const TabChannelSelector: React.FC<TabChannelSelectorProps> = ({ showSelector, selectedChannel }) => {
    return <BaseChannelSelector outsideClass={"t42-tab-bar-element t42-tab-channel-selector"}
        contentClass={"t42-tab-channel-selector-content"}
        lightContentClass = {"t42-tab-channel-selector-content-light"}
        darkContentClass = {"t42-tab-channel-selector-content-dark"}
        showSelector={showSelector}
        selectedChannel={selectedChannel}
    />
};

export default TabChannelSelector;