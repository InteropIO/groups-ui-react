import React from "react";
import { TabElementProps } from "../types/internal";
import TabCaption from "./TabCaption";
import TabCloseButton from "./TabCloseButton";

const Tab: React.FC<TabElementProps> = ({ caption, selected, close }) => {
    return <div className={selected ? "t42-selected-tab" : ""} style={{ height: "100%", width: "100%", display: "flex" }} title={caption ?? "Caption"}>
        <TabCaption caption={caption} selected={selected} />
        <TabCloseButton selected={selected} close={close} />
    </div>
};

export default Tab;