import React from "react";
import BaseButton from "./BaseButton";
import { CustomButtonProps } from "../../types/internal";

const CustomButton: React.FC<CustomButtonProps> = ({ onClick, tooltip, imageData }) => {
    return <BaseButton
        innerElement={{ className: "t42-custom-button", style: {backgroundImage: `url("${imageData}")`} }}
        outerElement={{ className: "t42-button t42-caption-bar-button t42-tab-bar-button", title: tooltip, onClick }} />
}

export default CustomButton;