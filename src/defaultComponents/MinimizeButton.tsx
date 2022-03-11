import React from "react";
import MinimizeButtonImg from "../../assets/img/minimize.svg";
import { MinimizeButtonProps } from "../types/internal";

const MinimizeButton: React.FC<MinimizeButtonProps> = ({minimize}) => {
    return <li className="t42-button t42-caption-bar-button t42-tab-bar-element t42-tab-bar-button t42-caption-bar-button-minimize" onClick={minimize} title="minimize">
        <div className="t42-standard-button t42-standard-button-minimize">
            <MinimizeButtonImg />
        </div>
    </li>
}

export default MinimizeButton;