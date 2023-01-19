import React from "react";
import { TabHeaderButtonsProps } from "../../types/api";
import CloseButton from "../buttons/CloseButton";
import ExtractButton from "../buttons/ExtractButton";
import LockButton from "../buttons/LockButtons";
import MaximizeButton from "../buttons/MaximizeButton";
import MinimizeButton from "../buttons/MinimizeButton";
import RestoreButton from "../buttons/RestoreButton";
import UnlockButton from "../buttons/UnlockButton";

const TabHeaderButtons: React.FC<TabHeaderButtonsProps> = ({ extract, minimize, maximize, restore, close, lock, unlock }) => {
    return <div className="t42-buttons-container t42-tab-bar-element">
        <ul className="t42-buttons t42-tab-bar-element">
            {extract?.visible && <ExtractButton {...extract} />}
            {lock?.visible && <LockButton {...lock} />}
            {unlock?.visible && <UnlockButton {...unlock} />}
            {minimize?.visible && <MinimizeButton {...minimize} />}
            {restore?.visible && <RestoreButton {...restore} />}
            {maximize?.visible && <MaximizeButton {...maximize} />}
            {close?.visible && <CloseButton  {...close} />}
        </ul>
    </div>
};


export default TabHeaderButtons;