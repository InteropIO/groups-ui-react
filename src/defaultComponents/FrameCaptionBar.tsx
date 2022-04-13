import React from "react";
import { FrameCaptionBarProps } from "../types/internal";
import CloseButton from "./CloseButton";
import MaximizeButton from "./MaximizeButton";
import MinimizeButton from "./MinimizeButton";
import RestoreButton from "./RestoreButton";

const FrameCaptionBar: React.FC<FrameCaptionBarProps> = ({ moveAreaId, caption, close, maximize, restore, minimize }) => {
    // TODO add buttons
    return (
        <>
            <div id={moveAreaId} className="t42-move-area t42-frame-caption-bar-element">
                <div className="t42-caption t42-title t42-frame-caption-bar-element">
                    {caption}
                </div>
            </div>
            <div className="t42-buttons-container t42-frame-caption-bar-element">
                <ul className="t42-buttons t42-frame-caption-bar-element">
                    {minimize.visible && <MinimizeButton {...minimize} />}
                    {maximize.visible && <MaximizeButton {...maximize} />}
                    {restore.visible && <RestoreButton {...restore} />}
                    {close.visible && <CloseButton {...close} />}
                </ul>
            </div>
        </>);
};

export default FrameCaptionBar;