import React from "react";
import { HtmlButtonsProps } from "../../types/api";
import CloseButton from "../buttons/CloseButton";
import ExtractButton from "../buttons/ExtractButton";
import FeedbackButton from "../buttons/FeedbackButton";
import CloneButton from "../buttons/CloneButton";
import LockButton from "../buttons/LockButtons";
import MaximizeButton from "../buttons/MaximizeButton";
import MinimizeButton from "../buttons/MinimizeButton";
import RestoreButton from "../buttons/RestoreButton";
import StickyButton from "../buttons/StickyButton";
import UnlockButton from "../buttons/UnlockButton";
import CustomButton from "../buttons/CustomButton";

const HtmlButtons: React.FC<HtmlButtonsProps> = ({ extract, minimize, maximize, restore, close, lock, unlock, feedback, clone, sticky, customButtons }) => {
    return <div className="t42-buttons-container t42-html-buttons-bar-element">
        <ul className="t42-buttons t42-html-buttons-bar-element">
            {
                customButtons.map(customButton => {
                    return customButton.visible && <CustomButton key={customButton.buttonId} {...customButton} />
                })
            }
        </ul>
        <ul className="t42-buttons t42-html-buttons-bar-element">
            {feedback?.visible && <FeedbackButton {...feedback} />}
            {clone?.visible && <CloneButton {...clone} />}
            {sticky?.visible && <StickyButton {...sticky} />}
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


export default HtmlButtons;