import React from "react";
import { MinimizeButtonProps } from "../../types/defaultComponents";
import BaseButton from "./BaseButton";

const MinimizeButton: React.FC<MinimizeButtonProps> = ({ onClick, tooltip }) => {
    return <BaseButton
        innerElement={{ className: "t42-standard-button t42-standard-button-minimize" }}
        outerElement={{ className: "t42-button t42-caption-bar-button t42-tab-bar-button t42-caption-bar-button-minimize", title: tooltip, onClick }} />
}

export default MinimizeButton;