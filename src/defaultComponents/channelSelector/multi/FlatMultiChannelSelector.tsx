import React from "react";
import { FlatMultiChannelSelectorProps } from "../../../types/defaultComponents";
import BaseMultiChannelSelector from "./BaseMultiChannelSelector";

const FlatMultiChannelSelector: React.FC<FlatMultiChannelSelectorProps> = ({ showSelector, selectedChannels }) => {
    return <BaseMultiChannelSelector outsideClass={"t42-frame-caption-bar-element t42-frame-channel-selector"}
        contentClass={"t42-tab-channel-selector-content"}
        showSelector={showSelector}
        selectedChannels={selectedChannels}
    />
};

export default FlatMultiChannelSelector;
