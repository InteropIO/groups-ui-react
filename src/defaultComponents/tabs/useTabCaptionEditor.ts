import React from "react";
import { UseTabCaptionEditorOptions } from "../../types/api";
import useCaptionEditor from "../captionEditor/useCaptionEditor";

function useTabCaptionEditor(ref: React.RefObject<HTMLElement>, options: UseTabCaptionEditorOptions): void {
    useCaptionEditor(ref, {
        ...options,
    });
}

export default useTabCaptionEditor;

