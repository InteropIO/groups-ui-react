import React from "react";
import { RestoreButtonProps } from "../../types/defaultComponents";
import { StandardButtons } from "../../types/internal";
import StandardButton from "./StandardButton";

const RestoreButton: React.FC<RestoreButtonProps> = (props) => {
    return <StandardButton
        buttonId={StandardButtons.Restore}
        {...props}
    />
}

export default RestoreButton;