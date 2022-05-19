import React from "react";
import { FrameCaptionBarProps } from "../../types/internal";
import FrameChannelSelector from "../channelSelector/FrameChannelSelector";
import FrameButtons from "./FrameButtons";
import FrameCaption from "./FrameCaption";
import FrameMoveArea from "./FrameMoveArea";

const FrameCaptionBar: React.FC<FrameCaptionBarProps> = ({ moveAreaId, caption, close, maximize, restore, minimize, extract, channels }) => {
    return (
        <div className="t42-react-caption-bar">
            {channels?.visible && <FrameChannelSelector
                showSelector={channels?.showSelector}
                selectedChannel={channels?.selectedChannel}
                selectedChannelColor={channels?.selectedChannelColor} />}
            <FrameMoveArea moveAreaId={moveAreaId}>
                <FrameCaption caption={caption} />
            </FrameMoveArea>
            <FrameButtons extract={extract} minimize={minimize} maximize={maximize} restore={restore} close={close} />
        </div>);
};

export default FrameCaptionBar;