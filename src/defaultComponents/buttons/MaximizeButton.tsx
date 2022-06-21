import React from "react";
import { MaximizeButtonProps } from "../../types/internal";
import BaseButton from "./BaseButton";

const MaximizeButton: React.FC<MaximizeButtonProps> = ({ tooltip, onClick }) => {
    return <BaseButton
        innerElement={{ className: "t42-standard-button t42-standard-button-maximize" }}
        outerElement={{ className: "t42-button t42-caption-bar-button t42-tab-bar-button t42-caption-bar-button-maximize", title: tooltip, onClick }} />
}

export default MaximizeButton;