import React from "react";
import { UseTabCaptionEditorOptions } from "../../types/api";
import { TargetType } from "../../types/internal";
import useCaptionEditor from "../captionEditor/useCaptionEditor";

function useTabCaptionEditor(ref: React.RefObject<HTMLInputElement>, options: UseTabCaptionEditorOptions): void {
    useCaptionEditor(ref, {
        ...options,
        targetType: TargetType.Tab
    });
}

export default useTabCaptionEditor;

