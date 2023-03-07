import React from "react";
import { CloseButtonProps } from "../../types/defaultComponents";
import BaseButton from "./BaseButton";

const CloseButton: React.FC<CloseButtonProps> = ({ onClick, tooltip }) => {
    return <BaseButton
        innerElement={{ className: "t42-standard-button t42-standard-button-close" }}
        outerElement={{ className: "t42-button t42-caption-bar-button t42-tab-bar-button t42-caption-bar-button-close", title: tooltip, onClick }} />
}

export default CloseButton;