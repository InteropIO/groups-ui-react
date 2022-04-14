import React from "react";
import ExtractButtonImg from "../../assets/img/extract.svg";
import { MinimizeButtonProps } from "../types/internal";

const ExtractButton: React.FC<MinimizeButtonProps> = ({ onClick, tooltip }) => {
    return <li className="t42-button t42-caption-bar-button t42-tab-bar-element t42-tab-bar-button t42-caption-bar-button-extract" onClick={onClick} title={tooltip}>
        <div className="t42-standard-button t42-standard-button-extract">
            <ExtractButtonImg />
        </div>
    </li>
}

export default ExtractButton;