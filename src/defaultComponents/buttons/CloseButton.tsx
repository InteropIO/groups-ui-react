import React from "react";
import { CloseButtonProps } from "../../types/defaultComponents";
import { StandardButtons } from "../../types/internal";
import StandardButton from "./StandardButton";

const CloseButton: React.FC<CloseButtonProps> = (props) => {
    return <StandardButton
        buttonId={StandardButtons.Close}
        {...props}
    />
}

export default CloseButton;