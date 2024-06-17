import React from "react";
import { OverflowButtonProps } from "../../types/defaultComponents";
import BaseButton from "./BaseButton";

const OverflowButton: React.FC<OverflowButtonProps> = ({ onClick, tooltip }) => {
    return <BaseButton
        innerElement={{ className: "t42-standard-button t42-standard-button-overflow" }}
        outerElement={{ className: "t42-button t42-caption-bar-button t42-tab-bar-button t42-caption-bar-button-overflow", title: tooltip, onClick }} />
}

export default OverflowButton;