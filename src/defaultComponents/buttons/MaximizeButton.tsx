import React from "react";
import { MaximizeButtonProps } from "../../types/defaultComponents";
import { StandardButtons } from "../../types/internal";
import StandardButton from "./StandardButton";

const MaximizeButton: React.FC<MaximizeButtonProps> = (props) => {
    return <StandardButton
        buttonId={StandardButtons.Maximize}
        {...props}
    />
}

export default MaximizeButton;