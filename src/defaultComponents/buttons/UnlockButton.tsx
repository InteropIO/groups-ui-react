import React from "react";
import { UnlockButtonProps } from "../../types/defaultComponents";
import { StandardButtons } from "../../types/internal";
import StandardButton from "./StandardButton";

const UnlockButton: React.FC<UnlockButtonProps> = (props) => {
    return <StandardButton
        buttonId={StandardButtons.Unlock}
        {...props}
    />
}

export default UnlockButton;