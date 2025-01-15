import React from "react";
import { FlatChannelSelectorProps } from "../../types/defaultComponents";
import BaseChannelSelector from "./BaseChannelSelector";
import { getChannelDirection } from "./utils";

const FlatChannelSelector: React.FC<FlatChannelSelectorProps> = ({ showSelector, selectedChannel, selectedChannelColor, channelRestrictions, channelLabel }) => {
    return <BaseChannelSelector outsideClass={channelLabel ? "t42-frame-caption-bar-element t42-frame-channel-selector t42-channel-selector-direction" : "t42-frame-caption-bar-element t42-frame-channel-selector"}
        contentClass={!channelLabel ? "t42-frame-channel-selector-content" : ""}
        showSelector={showSelector}
        selectedChannel={selectedChannel}
        selectedChannelColor={selectedChannelColor}
        direction={getChannelDirection(channelRestrictions)}
        channelLabel={channelLabel}
    />
};

export default FlatChannelSelector;