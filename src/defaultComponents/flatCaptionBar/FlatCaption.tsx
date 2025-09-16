import React, { useRef, MouseEvent } from "react";
import { FlatCaptionProps } from "../../types/defaultComponents";
import useEditableCaption from "../captionEditor/useEditableCaption";
import { useDragMove } from "../utils/useDragMove";

const FlatCaption: React.FC<FlatCaptionProps> = ({
    showCaptionEditor,
    caption,
    notifyBoundsChanged,
}) => {
    const ref = useRef<HTMLDivElement>(null);
    useEditableCaption(ref, { notifyBoundsChanged });

    const { startDrag } = useDragMove();

    const handleMouseDown = (e: MouseEvent) => {
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
            className="t42-caption t42-title t42-frame-caption-bar-element"
            onMouseDown={handleMouseDown}
            onDoubleClick={handleDoubleClick}
        >
            {caption}
        </div >
    );
};

export default FlatCaption;