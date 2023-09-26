import { useContext, useEffect, useState } from "react";
import { IOConnectContext } from "@interopio/react-hooks";

function useIOConnectWindow (windowId: string) {
    const [IOConnectWindow, setIOConnectWindow] = useState<any>(undefined);

    const io = (window as any).io || useContext(IOConnectContext);
    useEffect(() => {
        const unsub = io.windows.onWindowAdded((w: any) => {
            if (w.id === windowId) {
                setIOConnectWindow(w);
                unsub();
            }
        });

        const windowInCollection = io.windows.list().find((w: any) => w.id === windowId);
        if (windowInCollection) {
            setIOConnectWindow(windowInCollection);
            unsub();
        }

        return unsub;
    }, [windowId]);

    return IOConnectWindow;
}

export default useIOConnectWindow;

