import React from "react";
import { UseGroupCaptionEditorOptions } from "../../types/api";
import { TargetType } from "../../types/internal";
import useCaptionEditor from "../captionEditor/useCaptionEditor";
import useCommitGroupCaptionEditingRequested from "./useCommitGroupCaptionEditingRequested";

function useGroupCaptionEditor(ref: React.RefObject<HTMLInputElement>, options: UseGroupCaptionEditorOptions): void {
    useCaptionEditor(ref, {
        ...options,
        targetType: TargetType.Group
    });
}

export default useGroupCaptionEditor;

