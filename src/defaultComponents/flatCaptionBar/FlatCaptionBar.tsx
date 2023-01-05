import React from "react";
import { FlatCaptionBarProps } from "../../types/api";
import FlatChannelSelector from "../channelSelector/FlatChannelSelector";
import FlatButtons from "./FlatButtons";
import FlatCaption from "./FlatCaption";
import FlatCaptionEditor from "./FlatCaptionEditor";
import FlatMoveArea from "./FlatMoveArea";

const FlatCaptionBar: React.FC<FlatCaptionBarProps> = ({ moveAreaId, caption, close, maximize, restore, minimize, extract, channels, lock, unlock, captionEditor, notifyCaptionBoundsChanged }) => {
    return (
        <div className="t42-react-caption-bar">
            {channels?.visible && <FlatChannelSelector
                showSelector={channels?.showSelector}
                selectedChannel={channels?.selectedChannel}
                selectedChannelColor={channels?.selectedChannelColor} />}
            <FlatMoveArea moveAreaId={moveAreaId}>
                {captionEditor.show ? <FlatCaptionEditor {...captionEditor} caption={captionEditor.text} /> : <FlatCaption notifyBoundsChanged={notifyCaptionBoundsChanged} caption={caption} />}
            </FlatMoveArea>
            <FlatButtons extract={extract} lock={lock} unlock={unlock} minimize={minimize} maximize={maximize} restore={restore} close={close} />
        </div>);
};

export default FlatCaptionBar;