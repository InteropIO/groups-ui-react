import React from "react";
import { TabChannelSelectorProps } from "../../types/defaultComponents";
import BaseChannelSelector from "./BaseChannelSelector";
import { getChannelDirection } from "./utils";

const TabChannelSelector: React.FC<TabChannelSelectorProps> = ({ showSelector, selectedChannel, selectedChannelColor, channelRestrictions, channelLabel }) => {
    return <BaseChannelSelector outsideClass={channelLabel ? "t42-tab-bar-element t42-tab-channel-selector t42-channel-selector-direction" : "t42-tab-bar-element t42-tab-channel-selector"}
        contentClass={!channelLabel ? "t42-tab-channel-selector-content" : ""}
        showSelector={showSelector}
        selectedChannel={selectedChannel}
        selectedChannelColor={selectedChannelColor}
        direction={getChannelDirection(channelRestrictions)}
        channelLabel={channelLabel}
    />
};

export default TabChannelSelector;