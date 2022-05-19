import React from "react";
import { FrameButtonsProps } from "../../types/internal";
import CloseButton from "../CloseButton";
import ExtractButton from "../ExtractButton";
import MaximizeButton from "../MaximizeButton";
import MinimizeButton from "../MinimizeButton";
import RestoreButton from "../RestoreButton";

const FrameButtons: React.FC<FrameButtonsProps> = ({ extract, minimize, maximize, restore, close }) => {
    return <div className="t42-buttons-container t42-frame-caption-bar-element">
        <ul className="t42-buttons t42-frame-caption-bar-element">
            {extract?.visible && <ExtractButton {...extract} />}
            {minimize?.visible && <MinimizeButton {...minimize} />}
            {maximize?.visible && <MaximizeButton {...maximize} />}
            {restore?.visible && <RestoreButton {...restore} />}
            {close?.visible && <CloseButton {...close} />}
        </ul>
    </div>
}

export default FrameButtons;