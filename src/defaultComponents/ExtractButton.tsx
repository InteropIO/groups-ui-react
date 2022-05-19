import React from "react";
import { MinimizeButtonProps } from "../types/internal";
import BaseButton from "./BaseButton";

const ExtractButton: React.FC<MinimizeButtonProps> = ({ onClick, tooltip }) => {
    return <BaseButton
        innerElement={{ className: "t42-standard-button t42-standard-button-extract" }}
        outerElement={{ className: "t42-button t42-caption-bar-button t42-tab-bar-button t42-caption-bar-button-extract", title: tooltip, onClick }} />
}

export default ExtractButton;