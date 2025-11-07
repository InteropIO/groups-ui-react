import { useEffect, useState } from "react";

export function useExternalWindowPopupHidden(io: any, ioConnectWindowPopup: any) {
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        if (!ioConnectWindowPopup || !io) {
            return;
        }

        const unsub = ioConnectWindowPopup.onVisibilityChanged(() => {
            setHidden(!ioConnectWindowPopup.isVisible);
        });

        return () => {
            if (typeof unsub === 'function') {
                unsub();
            }
        };
    }, [io, ioConnectWindowPopup?.id]);

    return hidden;
}