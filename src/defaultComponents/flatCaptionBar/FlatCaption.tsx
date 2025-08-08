import React, { useRef } from "react";
import { FlatCaptionProps } from "../../types/defaultComponents";
import useEditableCaption from "../captionEditor/useEditableCaption";
import { useDragMove } from "../groupCaptionBar/useDragMove";

const FlatCaption: React.FC<FlatCaptionProps> = ({
    showCaptionEditor,
    startDragMove,
    caption,
    notifyBoundsChanged,
}) => {
    const ref = useRef<HTMLDivElement>(null);

    useEditableCaption(ref, { notifyBoundsChanged });

    const handleDragStart = () => {
        startDragMove();
    };

    const { startDrag } = useDragMove({ onDragStart: handleDragStart, threshold: 3 });

    const handleMouseDown = (e: React.MouseEvent) => {
        if (e.button !== 0) return;
        startDrag(e);
        e.stopPropagation();
    };

    return (
        <div
            ref={ref}
            className="t42-caption t42-title t42-frame-caption-bar-element"
            onMouseDown={handleMouseDown}
            onDoubleClick={() => showCaptionEditor(caption)}
        >
            {caption}
        </div >
    );
};

export default FlatCaption;