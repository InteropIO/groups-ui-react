import React from "react";
import BaseChannelSelector from "./BaseChannelSelector";

const TabChannelSelector: React.FC<any> = () => {
    return <BaseChannelSelector outsideClass={"t42-tab-bar-element t42-tab-channel-selector"} contentClass={"t42-tab-channel-selector-content"} />
};

export default TabChannelSelector;