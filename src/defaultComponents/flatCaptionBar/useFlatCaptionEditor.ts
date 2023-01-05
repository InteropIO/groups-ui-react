import React from "react";
import { UseFlatCaptionEditorOptions } from "../../types/api";
import { TargetType } from "../../types/internal";
import useCaptionEditor from "../captionEditor/useCaptionEditor";

function useFlatCaptionEditor(ref: React.RefObject<HTMLInputElement>, options: UseFlatCaptionEditorOptions): void {
    useCaptionEditor(ref, {
        ...options,
        targetType: TargetType.Frame
    });
}

export default useFlatCaptionEditor;

