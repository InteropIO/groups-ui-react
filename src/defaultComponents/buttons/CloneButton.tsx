import React from "react";
import { CloneButtonProps } from "../../types/defaultComponents";
import BaseButton from "./BaseButton";

const CloneButton: React.FC<CloneButtonProps> = ({ onClick, tooltip }) => {
    return <BaseButton
        innerElement={{ className: "t42-standard-button t42-standard-button-clone" }}
        outerElement={{ className: "t42-button t42-caption-bar-button t42-tab-bar-button t42-caption-bar-button-clone", title: tooltip, onClick }} />
}

export default CloneButton;