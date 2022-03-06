import React from "react";
import MaximizeButtonImg from "../../assets/img/maximize.svg";
import { MaximizeButtonProps } from "../types/internal";

const MaximizeButton: React.FC<MaximizeButtonProps> = () => {
    return <li className="t42-button t42-caption-bar-button t42-tab-bar-element t42-tab-bar-button t42-caption-bar-button-maximize" title="maximize">
        <div className="t42-standard-button t42-standard-button-maximize">
            <MaximizeButtonImg />
        </div>
    </li >
}

export default MaximizeButton;