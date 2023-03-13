import React from "react";
import { RestoreButtonProps } from "../../types/defaultComponents";
import BaseButton from "./BaseButton";

const RestoreButton: React.FC<RestoreButtonProps> = ({ tooltip, onClick }) => {
    return <BaseButton
        innerElement={{ className: "t42-standard-button t42-standard-button-restore" }}
        outerElement={{ className: "t42-button t42-caption-bar-button t42-tab-bar-button t42-caption-bar-button-restore", title: tooltip, onClick }} />
}

export default RestoreButton;