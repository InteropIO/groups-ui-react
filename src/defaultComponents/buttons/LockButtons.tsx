import React from "react";
import { LockButtonProps } from "../../types/defaultComponents";
import BaseButton from "./BaseButton";

const LockButton: React.FC<LockButtonProps> = ({ tooltip, onClick }) => {
    return <BaseButton
        innerElement={{ className: "t42-standard-button t42-standard-button-lock" }}
        outerElement={{ className: "t42-button t42-caption-bar-button t42-tab-bar-button t42-caption-bar-button-lock", title: tooltip, onClick }} />
}

export default LockButton;