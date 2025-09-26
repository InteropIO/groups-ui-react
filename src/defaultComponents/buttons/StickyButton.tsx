import React from "react";
import { StickyButtonProps } from "../../types/defaultComponents";
import { StandardButtons } from "../../types/internal";
import StandardButton from "./StandardButton";

const StickyButton: React.FC<StickyButtonProps> = (props) => {
    return <StandardButton
        buttonId={StandardButtons.Sticky}
        {...props}
    />
}

export default StickyButton;