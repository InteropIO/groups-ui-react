import { useEffect } from "react";
import { ShowExternalWindowPopupConfig } from "../../types/internal";
import { getGroupId } from "../..";

export const useShowPopupWindow = (io: any, ioConnectWindowPopup: any, showConfig?: ShowExternalWindowPopupConfig) => {
    const showPopup = async (showConfig: ShowExternalWindowPopupConfig, ioConnectWindowPopup: any) => {

        const allGroups = io.windows.groups.list()
        const myGroup = allGroups.find((f: any) => f.id === getGroupId());
        console.log("Showing popup window in group:", myGroup?.id);
        await myGroup?.showPopup({
            windowId: ioConnectWindowPopup.id,
            targetLocation: showConfig.targetLocation,
            targetBounds: showConfig.targetBounds,
            size: showConfig.size
        });
    }
    useEffect(() => {
        if (!showConfig || !ioConnectWindowPopup || ioConnectWindowPopup.isVisible) {
            return;
        }
        showPopup(showConfig, ioConnectWindowPopup).catch((err: Error) => {
            console.error("Error showing popup window:", err);
        });
    }, [showConfig, ioConnectWindowPopup]);
}