import { useCallback, useEffect, useRef, useState } from "react";
import { useExternalWindowPopupClosed } from "./useExternalWindowPopupClosed";
import { useExternalWindowPopupHidden } from "./useExternalWindowPopupHidden";
import { Bounds, ExternalWindowPopup, PopupTargetLocation, ShowExternalWindowPopupConfig, Size } from "../../types/internal";
import { useMoveResizeWindow } from "./useMoveResizeWindow";
import { useShowPopupWindow } from "./useShowPopupWindow";
import { ExternalWindowPopupResult } from "../../types/api";

interface ExternalWindowPopupOptions {
    io: any;
    hideComponent?: () => void;
}

export function useExternalWindowPopup({ io, hideComponent }: ExternalWindowPopupOptions): ExternalWindowPopupResult {
    const [showConfig, setShowConfig] = useState<ShowExternalWindowPopupConfig | undefined>(undefined);
    const [externalWindow, setExternalWindow] = useState<ExternalWindowPopup>({});
    const [resizeConfig, setResizeConfig] = useState<Size | undefined>(undefined);
    const isClosed = useExternalWindowPopupClosed(io, externalWindow.ioConnectWindow);
    const isHidden = useExternalWindowPopupHidden(io, externalWindow.ioConnectWindow);

    useMoveResizeWindow(externalWindow.ioConnectWindow, resizeConfig);
    useShowPopupWindow(io, externalWindow.ioConnectWindow, showConfig);

    const getContainer = useCallback(() => {
        return externalWindow.browserWindow?.document.body;
    }, [externalWindow.browserWindow]);

    const show = useCallback((targetBounds: Bounds, size: Size, targetLocation: PopupTargetLocation) => {
        console.log("setting show config");
        setShowConfig({
            targetBounds,
            size,
            targetLocation
        });
    }, []);

    const resize = useCallback((size: Size) => {
        setResizeConfig(prevSize => {
            const isSizeEqual = prevSize && prevSize.height === size.height && prevSize.width === size.width;
            return isSizeEqual ? prevSize : size;
        });
    }, []);

    const hide = useCallback(() => {
        console.log("Hiding from lib");
        setExternalWindow(current => {
            if (current.ioConnectWindow) {
                current.ioConnectWindow.close().catch((err: any) => {
                    console.error("Error closing popup:", err);
                });
            }
            return {};
        });
        // Reset configs
        setShowConfig(undefined);
        setResizeConfig(undefined);
    }, []);

    useEffect(() => {
        let cancelled = false;
        let externalWindowResult = {} as ExternalWindowPopup;

        console.log("Creating external window popup");
        io.windows.createPopup({ width: 200, height: 200, transparent: true })
            .then((result: ExternalWindowPopup) => {
                externalWindowResult = result;
                if (cancelled) {
                    console.log("already cancelled");
                    result.ioConnectWindow?.close();
                    return;
                }

                console.log("setting external window popup", result);
                setExternalWindow(result);

                if (result.browserWindow) {
                    result.browserWindow.document.body.classList.add("io-connect-external-popup");
                }
            })
            .catch((error: any) => {
                console.error("Error creating popup window:", error);
            });
        return () => {
            cancelled = true;
            if (externalWindowResult?.ioConnectWindow) {
                externalWindowResult?.ioConnectWindow.close().catch((err: any) => {
                    console.error("Error closing popup on cleanup:", err);
                });
            }
        };
    }, [io]);

    useEffect(() => {
        if (isClosed || isHidden) {
            if (typeof hideComponent === "function") {
                hideComponent();
            }

            setExternalWindow({});
            setShowConfig(undefined);
            setResizeConfig(undefined);
        }
    }, [isClosed, isHidden, hideComponent]);

    return {
        getContainer,
        show,
        resize,
        hide,
    };
}