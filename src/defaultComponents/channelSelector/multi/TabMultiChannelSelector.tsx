import React from "react";
import { TabMultiChannelSelectorProps } from "../../../types/defaultComponents";
import BaseMultiChannelSelector from "./BaseMultiChannelSelector";

const TabMultiChannelSelector: React.FC<TabMultiChannelSelectorProps> = ({ showSelector, selectedChannels, channelRestrictions, channelLabel }) => {
    return <BaseMultiChannelSelector outsideClass={channelLabel ? "t42-tab-bar-element t42-tab-channel-selector t42-channel-selector-direction" : "t42-tab-bar-element t42-tab-channel-selector"}
        contentClass={!channelLabel ? "t42-tab-channel-selector-content" : ""}
        showSelector={showSelector}
        selectedChannels={selectedChannels}
        channelRestrictions={channelRestrictions}
        channelLabel={channelLabel}
    />
};

export default TabMultiChannelSelector;
