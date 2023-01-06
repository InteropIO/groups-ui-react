import React from "react";
import { UseGroupCaptionEditorOptions } from "../../types/api";
import useCaptionEditor from "../captionEditor/useCaptionEditor";

function useGroupCaptionEditor(ref: React.RefObject<HTMLElement>, options: UseGroupCaptionEditorOptions): void {
    useCaptionEditor(ref, {
        ...options,
    });
}

export default useGroupCaptionEditor;

