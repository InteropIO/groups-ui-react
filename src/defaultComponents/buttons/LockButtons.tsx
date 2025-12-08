import React from "react";
import { LockButtonProps } from "../../types/defaultComponents";
import { StandardButtons } from "../../types/internal";
import StandardButton from "./StandardButton";

const LockButton: React.FC<LockButtonProps> = (props) => {
    return <StandardButton
        buttonId={StandardButtons.Lock}
        {...props}
    />
}

export default LockButton;