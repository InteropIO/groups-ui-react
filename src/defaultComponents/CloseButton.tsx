import React from "react";
import CloseButtonImg from "../../assets/img/close.svg";
import { CloseButtonProps } from "../types/internal";

const CloseButton: React.FC<CloseButtonProps> = ({close}) => {

    return <li className="t42-button t42-caption-bar-button t42-tab-bar-element t42-tab-bar-button t42-caption-bar-button-close" title="close" onClick={close}>
        <div className="t42-standard-button t42-standard-button-close">
            <CloseButtonImg />
        </div></li>
}

export default CloseButton;