import { useCallback } from "react";
import { ExternalWindowPopupResult } from "../../types/api";
import { usePopupWindow } from "@interopio/components-react";
import { Size } from "../../types/internal";

export default function useExternalWindowPopup(): ExternalWindowPopupResult {
    const { getContainer, closePopup, createPopup, hidePopup, showPopup, isOpen, isVisible, popup } = usePopupWindow();

    const resizePopup = useCallback(async (size: Size) => {
        await popup?.ioConnectWindow.moveResize({ ...size });
    }, [popup]);

    return {
        getContainer,
        closePopup,
        createPopup,
        hidePopup,
        showPopup: showPopup as ExternalWindowPopupResult["showPopup"],
        isOpen,
        isVisible,
        resizePopup,
        popup
    }
}