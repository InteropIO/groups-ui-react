import React from "react";
import { TabElementProps } from "../types/internal";
import TabCaption from "./TabCaption";
import TabCloseButton from "./TabCloseButton";

const Tab: React.FC<TabElementProps> = ({ elementId, text, isSelected, onCloseClick }) => {
    return <div className={isSelected ? "t42-selected-tab" : ""} style={{ height: "100%", width: "100%", display: "flex" }} title={text ?? "Caption"}>
        <TabCaption text={text} isSelected={isSelected} />
        <TabCloseButton isSelected={isSelected} />
    </div>
};

export default Tab;