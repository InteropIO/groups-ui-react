import React from "react";
import { OverflowButtonProps } from "../../types/defaultComponents";
import BaseButton from "./BaseButton";
import { getStandardButtonInnerClassName, getStandardButtonOuterClassName } from "../utils/common";
import { StandardButtons } from "../../types/internal";

const OverflowButton: React.FC<OverflowButtonProps> = ({ onClick, tooltip }) => {
    return <BaseButton
        innerElement={{ className: getStandardButtonInnerClassName(StandardButtons.Overflow) }}
        outerElement={{
            onMouseDown: (e) => e.stopPropagation(),
            onPointerDown: (e) => e.stopPropagation(),
            className: getStandardButtonOuterClassName(StandardButtons.Overflow), title: tooltip, onClick
        }} />
}

export default OverflowButton;