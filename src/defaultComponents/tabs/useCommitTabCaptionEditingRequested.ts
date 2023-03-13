import { TargetType } from "../../types/internal";
import useCommitEditingRequested from "../captionEditor/useCommitEditingRequested";

function useCommitTabCaptionEditingRequested(targetId: string, text: string): void {
    useCommitEditingRequested(TargetType.Tab, targetId, text);
}

export default useCommitTabCaptionEditingRequested;