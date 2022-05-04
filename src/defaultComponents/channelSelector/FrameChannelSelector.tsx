import React from "react";
import { FrameChannelSelectorProps } from "../../types/internal";
import BaseChannelSelector from "./BaseChannelSelector";

const FrameChannelSelector: React.FC<FrameChannelSelectorProps> = ({ showSelector, selectedChannel }) => {
    return <BaseChannelSelector outsideClass={"t42-frame-caption-bar-element t42-frame-channel-selector"}
        contentClass={"t42-frame-channel-selector-content"}
        lightContentClass = {"t42-frame-channel-selector-content-light"}
        darkContentClass = {"t42-frame-channel-selector-content-dark"}
        showSelector={showSelector}
        selectedChannel={selectedChannel}
    />
};

export default FrameChannelSelector;