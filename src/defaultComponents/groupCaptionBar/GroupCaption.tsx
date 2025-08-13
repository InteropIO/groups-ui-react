import React, { MouseEvent, useRef } from "react";
import { GroupCaptionProps } from "../../types/defaultComponents";
import useEditableCaption from "../captionEditor/useEditableCaption";
import { useDragMove } from "./useDragMove";

const GroupCaption: React.FC<GroupCaptionProps> = ({
    showCaptionEditor,
    caption,
    notifyBoundsChanged,
}) => {
    const ref = useRef<HTMLDivElement>(null);
    useEditableCaption(ref, { notifyBoundsChanged });

    const { startDrag } = useDragMove();

    const handleMouseDown = (e: React.MouseEvent) => {
        if (e.button !== 0) return;
        startDrag(e);
    };

    const handleDoubleClick = (e: MouseEvent) => {
        showCaptionEditor(caption);
        e.stopPropagation();
    };

    return (
        <div
            ref={ref}
            onMouseDown={handleMouseDown}
            onDoubleClick={handleDoubleClick}
            className="t42-caption t42-title t42-group-caption-bar-element"
        >
            {caption}
        </div>
    );
};

export default GroupCaption;
