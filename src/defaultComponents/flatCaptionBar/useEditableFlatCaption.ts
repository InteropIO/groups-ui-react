import React from "react";
import { UseEditableFlatCaptionOptions } from "../../types/api";
import useEditableCaption from "../captionEditor/useEditableCaption";

function useEditableFlatCaption(ref: React.RefObject<HTMLElement>, options: UseEditableFlatCaptionOptions): void {
    useEditableCaption(ref, options);
}

export default useEditableFlatCaption;

