import React from "react";
import { FrameChannelSelectorProps } from "../../types/internal";
import BaseChannelSelector from "./BaseChannelSelector";

const FrameChannelSelector: React.FC<FrameChannelSelectorProps> = ({ showSelector, selectedChannel, selectedChannelColor }) => {
    return <BaseChannelSelector outsideClass={"t42-frame-caption-bar-element t42-frame-channel-selector"}
        contentClass={"t42-frame-channel-selector-content"}
        showSelector={showSelector}
        selectedChannel={selectedChannel}
        selectedChannelColor={selectedChannelColor}
    />
};

export default FrameChannelSelector;