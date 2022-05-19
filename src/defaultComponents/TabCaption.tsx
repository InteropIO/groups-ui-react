import React from "react";
import { TabCaptionProps } from "../types/internal";

const TabCaption: React.FC<TabCaptionProps> = ({ caption, selected }) => {
    const normalClassName = "t42-caption t42-tab-caption";
    const selectedClassName = "t42-caption t42-tab-caption t42-selected-tab-caption";

    return <div className={selected ? selectedClassName : normalClassName}>{caption}</div>
}

export default TabCaption;