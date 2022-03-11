import React from "react";
import { TabCloseButtonProps } from "../types/internal";
import CloseButton from "../../assets/img/close.svg";

const TabCloseButton: React.FC<TabCloseButtonProps> = ({ selected, close }) => {
    const normalClassName = "t42-tab-close-button t42-tab-bar-element";
    const selectedClassName = "t42-tab-close-button t42-tab-bar-element t42-selected-tab-close-button t42-selected-tab-element";

    const normalContentClassName = "t42-tab-close-button-content";
    const selectedContentClassName = "t42-tab-close-button-content t42-selected-tab-close-button-content";

    // TODO add close button visibility and tooltip props
    return <div onClick={close} className={selected ? selectedClassName : normalClassName} title="close">
        <div className={selected ? selectedContentClassName : normalContentClassName}>
            <CloseButton /> 
        </div>
    </div>
}

export default TabCloseButton;