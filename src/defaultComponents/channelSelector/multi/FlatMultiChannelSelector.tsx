import React from "react";
import { FlatMultiChannelSelectorProps } from "../../../types/defaultComponents";
import BaseMultiChannelSelector from "./BaseMultiChannelSelector";

const FlatMultiChannelSelector: React.FC<FlatMultiChannelSelectorProps> = ({ showSelector, selectedChannels, channelRestrictions, channelLabel }) => {
    return <BaseMultiChannelSelector outsideClass={channelLabel ? "t42-frame-caption-bar-element t42-frame-channel-selector t42-channel-selector-direction" : "t42-frame-caption-bar-element t42-frame-channel-selector"}
        contentClass={!channelLabel ? "t42-frame-channel-selector-content" : ""}
        showSelector={showSelector}
        selectedChannels={selectedChannels}
        channelRestrictions={channelRestrictions}
        channelLabel={channelLabel}
    />
};

export default FlatMultiChannelSelector;
