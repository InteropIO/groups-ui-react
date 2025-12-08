import React from "react";
import { CloneButtonProps } from "../../types/defaultComponents";
import { StandardButtons } from "../../types/internal";
import StandardButton from "./StandardButton";
    
const CloneButton: React.FC<CloneButtonProps> = (props) => {
    return <StandardButton
        buttonId={StandardButtons.Clone}
        {...props}
    />
}

export default CloneButton;