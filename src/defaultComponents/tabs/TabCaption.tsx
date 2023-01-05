import React, { useRef } from "react";
import { TabCaptionProps } from "../../types/defaultComponents";
import useEditableTabCaption from "./useEditableTabCaption";

const TabCaption: React.FC<TabCaptionProps> = ({ caption, selected, notifyBoundsChanged }) => {
    const normalClassName = "t42-caption t42-tab-caption";
    const selectedClassName = "t42-caption t42-tab-caption t42-selected-tab-caption";
    const ref = useRef<HTMLDivElement>(null);

    useEditableTabCaption(ref, { notifyBoundsChanged });

    return <div ref={ref} className={selected ? selectedClassName : normalClassName}>{caption}</div>
}

export default TabCaption;