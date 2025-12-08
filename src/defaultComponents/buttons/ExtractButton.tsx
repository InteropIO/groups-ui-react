import React from "react";
import { ExtractButtonProps } from "../../types/defaultComponents";
import { StandardButtons } from "../../types/internal";
import StandardButton from "./StandardButton";

const ExtractButton: React.FC<ExtractButtonProps> = (props) => {
    return <StandardButton
        buttonId={StandardButtons.Extract}
        {...props}
    />
}

export default ExtractButton;