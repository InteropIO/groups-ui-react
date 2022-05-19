import React from "react";
import { TabHeaderButtonsProps } from "../types/internal";
import CloseButton from "./CloseButton";
import ExtractButton from "./ExtractButton";
import MaximizeButton from "./MaximizeButton";
import MinimizeButton from "./MinimizeButton";
import RestoreButton from "./RestoreButton";

const TabHeaderButtons: React.FC<TabHeaderButtonsProps> = ({ extract, minimize, maximize, restore, close }) => {
    return <div className="t42-buttons-container t42-tab-bar-element">
        <ul className="t42-buttons t42-tab-bar-element">
            {extract?.visible && <ExtractButton {...extract} />}
            {minimize?.visible && <MinimizeButton {...minimize} />}
            {restore?.visible && <RestoreButton {...restore} />}
            {maximize?.visible && <MaximizeButton {...maximize} />}
            {close?.visible && <CloseButton  {...close} />}
        </ul>
    </div>
};


export default TabHeaderButtons;