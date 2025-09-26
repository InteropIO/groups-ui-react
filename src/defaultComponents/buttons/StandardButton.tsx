import React from "react";
import { StandardButtonProps } from "../../types/defaultComponents";
import BaseButton from "./BaseButton";
import { getStandardButtonInnerClassName, getStandardButtonOuterClassName } from "../utils/common";

const StandardButton: React.FC<StandardButtonProps> = ({ buttonId, target, isPressed, tooltip, onClick }) => {
    return <BaseButton
        innerElement={{ className: getStandardButtonInnerClassName(buttonId, target) }}
        outerElement={{ className: getStandardButtonOuterClassName(buttonId, target, isPressed), title: tooltip, onClick }} />
}

export default StandardButton;