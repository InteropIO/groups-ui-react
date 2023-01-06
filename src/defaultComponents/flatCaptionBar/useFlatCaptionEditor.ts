import React from "react";
import { UseFlatCaptionEditorOptions } from "../../types/api";
import useCaptionEditor from "../captionEditor/useCaptionEditor";

function useFlatCaptionEditor(ref: React.RefObject<HTMLElement>, options: UseFlatCaptionEditorOptions): void {
    useCaptionEditor(ref, {
        ...options
    });
}

export default useFlatCaptionEditor;

