import React from "react";
import { StickyButtonProps } from "../../types/defaultComponents";
import BaseButton from "./BaseButton";

const StickyButton: React.FC<StickyButtonProps> = ({ onClick, tooltip, isPressed }) => {
    const outerElementClassName = "t42-button t42-caption-bar-button t42-tab-bar-button t42-caption-bar-button-sticky";
    return <BaseButton
        innerElement={{ className: "t42-standard-button t42-standard-button-sticky" }}
        outerElement={{ className: isPressed ? outerElementClassName +" active" : outerElementClassName, title: tooltip, onClick }} />
}

export default StickyButton;