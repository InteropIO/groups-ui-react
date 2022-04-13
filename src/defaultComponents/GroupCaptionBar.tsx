import React from "react";
import CloseButton from "./CloseButton";
import MaximizeButton from "./MaximizeButton";
import MinimizeButton from "./MinimizeButton";
import { GroupCaptionBarProps } from "../types/internal";
import RestoreButton from "./RestoreButton";

const GroupCaptionBar: React.FC<GroupCaptionBarProps> = ({ moveAreaId, targetType, targetId, caption, ...rest }) => {
    // TODO add buttons
    // move area should be working (the framework must find it by id)
    return <>
        <div id={moveAreaId} className="t42-move-area t42-group-caption-bar-element">
            <div className="t42-caption t42-title t42-group-caption-bar-element">{caption}</div>
        </div>
        <div className="t42-buttons-container t42-group-caption-bar-element">
            <ul className="t42-buttons t42-group-caption-bar-element">
                {rest.minimize.visible && <MinimizeButton {...rest.minimize} />}
                {rest.restore.visible && <RestoreButton {...rest.restore} />}
                {rest.maximize.visible && <MaximizeButton {...rest.maximize} />}
                {rest.close.visible && <CloseButton {...rest.close} />}
            </ul>
        </div>
    </>
}

export default GroupCaptionBar;