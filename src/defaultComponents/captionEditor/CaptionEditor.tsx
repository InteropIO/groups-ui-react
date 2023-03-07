import React, { useEffect, useRef, useState } from "react";
import { CaptionEditorProps, } from "../../types/defaultComponents";
import useCaptionEditor from "./useCaptionEditor";
import useCommitEditingRequested from "./useCommitEditingRequested";

const CaptionEditor: React.FC<CaptionEditorProps> = ({ className,
    commitChanges,
    hideEditor,
    notifyBoundsChanged,
    caption,
    notifyEditorVisibilityChanged,
    targetType,
    targetId }) => {
    const [captionInEditor, setCaptionInEditor] = useState(caption);
    const [inputWidth, setInputWidth] = useState(0);
    const ref = useRef<HTMLInputElement>(null);
    const measurementRef = useRef<HTMLSpanElement>(null);

    const onBlur = () => {
        commitChanges(captionInEditor);
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCaptionInEditor(e.target.value);
    }

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();
        }
    }

    const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Escape") {
            hideEditor();
        } else if (e.key === "Enter") {
            commitChanges(captionInEditor);
            e.preventDefault();
        }
    }

    useCaptionEditor(ref, { notifyBoundsChanged, notifyEditorVisibilityChanged });
    useCommitEditingRequested(targetType, targetId, captionInEditor);

    useEffect(() => {
        if (!ref.current) {
            return;
        }
        const onMouseDown = (e: MouseEvent) => {
            e.stopPropagation();
        };

        const element = ref.current;
        element.addEventListener("mousedown", onMouseDown);

        if (ref.current) {
             // Focus element on the next tick to have properly focused page
            setTimeout(() => {
                element?.focus();
                element?.select();
            }, 0);
        }

        return () => {
            element?.removeEventListener("mousedown", onMouseDown);
        }
    }, [ref]);

    useEffect(() => {
        if (!measurementRef.current) {
            return;
        }

        setInputWidth(measurementRef.current.scrollWidth);
    }, [measurementRef, captionInEditor]);

    return <>
        <input ref={ref}
            style={{
                width: `${inputWidth}px`
            }}
            onKeyDown={onKeyDown}
            onKeyUp={onKeyUp}
            onChange={onChange}
            onBlur={onBlur}
            value={captionInEditor} className={className} />
        <span ref={measurementRef} style={{ visibility: "hidden", position: "absolute", top: -30000, left: -30000 }}>{captionInEditor}</span>
    </>;
}

export default CaptionEditor;
