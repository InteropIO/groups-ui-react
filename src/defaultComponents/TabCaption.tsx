import React from "react";
import { TabCaptionProps } from "../types/internal";

const TabCaption: React.FC<TabCaptionProps> = ({ caption, selected }) => {
    const normalClassName = "t42-caption t42-tab-caption";
    const selectedClassName = "t42-caption t42-tab-caption t42-selected-tab-caption";
    // TODO remove the ?? - its for tests purposes
    // The caption changing works, but from the second time its an issue in the framework
    return <div className={selected ? selectedClassName : normalClassName}>{caption ?? "Caption"}</div>
}

export default TabCaption;