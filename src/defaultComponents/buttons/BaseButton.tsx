import React from "react";
import { BaseButtonProps } from "../../types/internal";
import webGroupsManager from "../../webGroupsManager";

const BaseButton: React.FC<BaseButtonProps> = ({ outerElement, innerElement }) => {
    return <li {...outerElement} className={`${webGroupsManager.skipFocusStyle} ${outerElement.className}`}>
        <div {...innerElement}>
        </div>
    </li>
}

export default BaseButton;