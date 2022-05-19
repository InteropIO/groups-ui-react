import React from "react";
import { GroupButtonsProps } from "../../types/internal";
import CloseButton from "../CloseButton";
import MaximizeButton from "../MaximizeButton";
import MinimizeButton from "../MinimizeButton";
import RestoreButton from "../RestoreButton";

const GroupButtons: React.FC<GroupButtonsProps> = ({ minimize, restore, maximize, close }) => {
    return <div className="t42-buttons-container t42-group-caption-bar-element">
        <ul className="t42-buttons t42-group-caption-bar-element">
            {minimize?.visible && <MinimizeButton {...minimize} />}
            {restore?.visible && <RestoreButton {...restore} />}
            {maximize?.visible && <MaximizeButton {...maximize} />}
            {close?.visible && <CloseButton {...close} />}
        </ul>
    </div>
}

export default GroupButtons;