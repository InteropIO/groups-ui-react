import React from "react";
import { FlatChannelSelectorProps } from "../../types/defaultComponents";
import BaseChannelSelector from "./BaseChannelSelector";

const FlatChannelSelector: React.FC<FlatChannelSelectorProps> = ({ showSelector, selectedChannel, selectedChannelColor }) => {
    return <BaseChannelSelector outsideClass={"t42-frame-caption-bar-element t42-frame-channel-selector"}
        contentClass={"t42-frame-channel-selector-content"}
        showSelector={showSelector}
        selectedChannel={selectedChannel}
        selectedChannelColor={selectedChannelColor}
    />
};

export default FlatChannelSelector;