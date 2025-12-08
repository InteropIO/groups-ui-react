import { useEffect, useState } from "react";

export function useExternalWindowPopupClosed(io: any, ioConnectWindowPopup: any) {
    const [closed, setClosed] = useState(false);

    useEffect(() => {
        if (!ioConnectWindowPopup || !io) {
            return;
        }

        const unsub = io.windows.onWindowRemoved((removedWindow: any) => {
            if (removedWindow.id === ioConnectWindowPopup.id) {
                setClosed(true);
            }
        });

        return () => {
            if (typeof unsub === 'function') {
                unsub();
            }
        };
    }, [io, ioConnectWindowPopup?.id]);

    return closed;
}