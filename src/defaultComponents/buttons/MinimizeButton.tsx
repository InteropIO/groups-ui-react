import React from "react";
import { MinimizeButtonProps } from "../../types/defaultComponents";
import { StandardButtons } from "../../types/internal";
import StandardButton from "./StandardButton";

const MinimizeButton: React.FC<MinimizeButtonProps> = (props) => {
    return <StandardButton
        buttonId={StandardButtons.Minimize}
        {...props}
    />
}

export default MinimizeButton;