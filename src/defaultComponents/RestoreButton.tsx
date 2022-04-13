import React from "react";
import RestoreButtonImg from "../../assets/img/maximize.svg";
import { RestoreButtonProps } from "../types/internal";

const RestoreButton: React.FC<RestoreButtonProps> = ({ tooltip, onClick }) => {
    return <li onClick={onClick} className="t42-button t42-caption-bar-button t42-tab-bar-element t42-tab-bar-button t42-caption-bar-button-restore" title={tooltip}>
        <div className="t42-standard-button t42-standard-button-restore">
            <RestoreButtonImg />
        </div>
    </li >
}

export default RestoreButton;