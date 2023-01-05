import { TargetType } from "../../types/internal";
import useCommitEditingRequested from "../captionEditor/useCommitEditingRequested";

function useCommitGroupCaptionEditingRequested(targetId: string, text: string): void {
    useCommitEditingRequested(TargetType.Group, targetId, text);
}

export default useCommitGroupCaptionEditingRequested;
