import React from "react";
import { TabCloseButtonProps } from "../types/internal";
import CloseButton from "../../assets/img/close.svg";

const TabCloseButton: React.FC<TabCloseButtonProps> = ({ isSelected }) => {
    const normalClassName = "t42-tab-close-button t42-tab-bar-element";
    const selectedClassName = "t42-tab-close-button t42-tab-bar-element t42-selected-tab-close-button t42-selected-tab-element";

    const normalContentClassName = "t42-tab-close-button-content";
    const selectedContentClassName = "t42-tab-close-button-content t42-selected-tab-close-button-content";

    return <div className={isSelected ? selectedClassName : normalClassName} title="close">
        <div className={isSelected ? selectedContentClassName : normalContentClassName}>
            <CloseButton />
        </div>
    </div>
}

export default TabCloseButton;