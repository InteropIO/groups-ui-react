import React from "react";
import { FlatCaptionBarProps } from "../../types/internal";
import FlatChannelSelector from "../channelSelector/FlatChannelSelector";
import FlatButtons from "./FlatButtons";
import FlatCaption from "./FlatCaption";
import FlatMoveArea from "./FlatMoveArea";

const FlatCaptionBar: React.FC<FlatCaptionBarProps> = ({ moveAreaId, caption, close, maximize, restore, minimize, extract, channels }) => {
    return (
        <div className="t42-react-caption-bar">
            {channels?.visible && <FlatChannelSelector
                showSelector={channels?.showSelector}
                selectedChannel={channels?.selectedChannel}
                selectedChannelColor={channels?.selectedChannelColor} />}
            <FlatMoveArea moveAreaId={moveAreaId}>
                <FlatCaption caption={caption} />
            </FlatMoveArea>
            <FlatButtons extract={extract} minimize={minimize} maximize={maximize} restore={restore} close={close} />
        </div>);
};

export default FlatCaptionBar;