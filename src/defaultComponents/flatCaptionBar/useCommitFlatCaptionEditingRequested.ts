import { TargetType } from "../../types/internal";
import useCommitEditingRequested from "../captionEditor/useCommitEditingRequested";

function useCommitFlatCaptionEditingRequested(targetId: string, text: string): void {
    useCommitEditingRequested(TargetType.Frame, targetId, text);
}

export default useCommitFlatCaptionEditingRequested;