import React from "react";
import { TabMultiChannelSelectorProps } from "../../../types/defaultComponents";
import BaseMultiChannelSelector from "./BaseMultiChannelSelector";

const TabMultiChannelSelector: React.FC<TabMultiChannelSelectorProps> = ({ showSelector, selectedChannels }) => {
    return <BaseMultiChannelSelector outsideClass={"t42-tab-bar-element t42-tab-channel-selector"}
        contentClass={"t42-tab-channel-selector-content"}
        showSelector={showSelector}
        selectedChannels={selectedChannels}
    />
};

export default TabMultiChannelSelector;
