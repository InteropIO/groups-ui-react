import React from "react";
import { GroupButtonsProps } from "../../types/internal";
import CloseButton from "../buttons/CloseButton";
import MaximizeButton from "../buttons/MaximizeButton";
import MinimizeButton from "../buttons/MinimizeButton";
import RestoreButton from "../buttons/RestoreButton";

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