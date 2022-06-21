import React from "react";
import { FlatButtonsProps } from "../../types/internal";
import CloseButton from "../buttons/CloseButton";
import ExtractButton from "../buttons/ExtractButton";
import LockButton from "../buttons/LockButtons";
import MaximizeButton from "../buttons/MaximizeButton";
import MinimizeButton from "../buttons/MinimizeButton";
import RestoreButton from "../buttons/RestoreButton";
import UnlockButton from "../buttons/UnlockButton";

const FlatButtons: React.FC<FlatButtonsProps> = ({ extract, minimize, maximize, restore, close, lock, unlock }) => {
    return <div className="t42-buttons-container t42-frame-caption-bar-element">
        <ul className="t42-buttons t42-frame-caption-bar-element">
            {extract?.visible && <ExtractButton {...extract} />}
            {lock?.visible && <LockButton {...lock} />}
            {unlock?.visible && <UnlockButton {...unlock} />}
            {minimize?.visible && <MinimizeButton {...minimize} />}
            {maximize?.visible && <MaximizeButton {...maximize} />}
            {restore?.visible && <RestoreButton {...restore} />}
            {close?.visible && <CloseButton {...close} />}
        </ul>
    </div>
}

export default FlatButtons;