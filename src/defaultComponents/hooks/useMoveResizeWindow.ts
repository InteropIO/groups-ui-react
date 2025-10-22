import { useEffect } from "react";
import { Size } from "../../types/internal";

export function useMoveResizeWindow(ioConnectWindow?: any, size?: Size) {
    useEffect(() => {
        if (!ioConnectWindow || !size) {
            return;
        }

        ioConnectWindow.moveResize(size).catch((err: any) => {
            console.error("Error resizing window:", err);
        });
    }, [ioConnectWindow, size]);
}