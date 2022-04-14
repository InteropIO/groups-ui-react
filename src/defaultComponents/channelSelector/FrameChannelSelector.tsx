import React from "react";
import BaseChannelSelector from "./BaseChannelSelector";

const FrameChannelSelector: React.FC<any> = () => {
    return <BaseChannelSelector outsideClass={"t42-frame-caption-bar-element t42-frame-channel-selector"} contentClass={"t42-frame-channel-selector-content"} />
};

export default FrameChannelSelector;