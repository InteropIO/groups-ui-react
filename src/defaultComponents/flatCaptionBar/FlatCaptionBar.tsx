import React from "react";
import { FlatCaptionBarProps } from "../../types/api";
import FlatChannelSelector from "../channelSelector/FlatChannelSelector";
import FlatButtons from "./FlatButtons";
import FlatCaption from "./FlatCaption";
import FlatCaptionEditor from "./FlatCaptionEditor";
import FlatMoveArea from "./FlatMoveArea";
import FlatMultiChannelSelector from "../channelSelector/multi/FlatMultiChannelSelector";

const FlatCaptionBar: React.FC<FlatCaptionBarProps> = ({ moveAreaId, caption, channels, captionEditor, notifyCaptionBoundsChanged, ...rest }) => {
    return (
        <div className="t42-re act-caption-bar">
            {channels?.visible && channels.channelsMode !== "multi" && <FlatChannelSelector
                showSelector={channels?.showSelector}
                selectedChannel={channels?.selectedChannel}
                selectedChannelColor={channels?.selectedChannelColor} />}
            {channels?.visible && channels.channelsMode === "multi" && <FlatMultiChannelSelector
                showSelector={channels?.showSelector}
                selectedChannels={channels?.selectedChannels} />}
            <FlatMoveArea moveAreaId={moveAreaId}>
                {captionEditor.show ? <FlatCaptionEditor {...captionEditor} caption={captionEditor.text!} frameId={rest.frameId} /> : <FlatCaption notifyBoundsChanged={notifyCaptionBoundsChanged} caption={caption} />}
            </FlatMoveArea>
            <FlatButtons {...rest} />
        </div>);
};

export default FlatCaptionBar;
