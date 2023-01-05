import React from "react";
import { UseEditableTabCaptionOptions } from "../../types/api";
import useEditableCaption from "../captionEditor/useEditableCaption";

function useEditableTabCaption(ref: React.RefObject<HTMLElement>, options: UseEditableTabCaptionOptions): void {
    useEditableCaption(ref, options);
}

export default useEditableTabCaption;

