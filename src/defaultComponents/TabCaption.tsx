import React from "react";
import { TabCaptionProps } from "../types/internal";

const TabCaption: React.FC<TabCaptionProps> = ({ text, isSelected }) => {
    const normalClassName = "t42-caption t42-tab-caption";
    const selectedClassName = "t42-caption t42-tab-caption t42-selected-tab-caption";
    return <div className={isSelected ? selectedClassName : normalClassName}>{text ?? "Caption"}</div>
}

export default TabCaption;