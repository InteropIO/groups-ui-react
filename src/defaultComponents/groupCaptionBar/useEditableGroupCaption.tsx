import React from "react";
import { UseEditableGroupCaptionOptions } from "../../types/api";
import useEditableCaption from "../captionEditor/useEditableCaption";

function useEditableGroupCaption(ref: React.RefObject<HTMLElement>, options: UseEditableGroupCaptionOptions): void {
    useEditableCaption(ref, options);
}

export default useEditableGroupCaption;

