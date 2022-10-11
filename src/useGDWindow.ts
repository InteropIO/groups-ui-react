import { useContext, useEffect, useState } from "react";
import { GlueContext } from "@glue42/react-hooks";

function useGDWindow(windowId: string) {
    const [gdWindow, setGdWindow] = useState<any>(undefined);

    const glue = (window as any).glue || useContext(GlueContext);

    useEffect(() => {
        const unsub = glue.windows.onWindowAdded((w: any) => {
            if (w.id === windowId) {
                setGdWindow(w);
                unsub();
            }
        });

        const windowInCollection = glue.windows.list().find((w: any) => w.id === windowId);
        if (windowInCollection) {
            setGdWindow(windowInCollection);
            unsub();
        }

        return unsub;
    }, []);

    return gdWindow;
}

export default useGDWindow;

