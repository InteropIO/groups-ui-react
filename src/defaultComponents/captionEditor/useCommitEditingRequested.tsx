import React, { useEffect } from "react";
import { TargetType } from "../../types/internal";
import webGroupsManager from "../../webGroupsManager";

function useCommitEditingRequested(targetType: TargetType, targetId: string, text: string): void {
    useEffect(() => {
        const unsub = webGroupsManager.onCommitCaptionEditingRequested(targetType, targetId, () => {
            webGroupsManager.commitCaptionEditing(targetType, targetId, text);
        });
        return () => {
            unsub();
        }
    }, [targetType, targetId, text]);
}

export default useCommitEditingRequested;

