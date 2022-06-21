import React from "react";
import { UnlockButtonProps } from "../../types/internal";
import BaseButton from "./BaseButton";

const UnlockButton: React.FC<UnlockButtonProps> = ({ tooltip, onClick }) => {
    return <BaseButton
        innerElement={{ className: "t42-standard-button t42-standard-button-unlock" }}
        outerElement={{ className: "t42-button t42-caption-bar-button t42-tab-bar-button t42-caption-bar-button-unlock", title: tooltip, onClick }} />
}

export default UnlockButton;