import { Bounds } from "./types/internal";

export const waitForWindow = (io: any, windowId: string): Promise<any> => {
    return new Promise((res, rej) => {
        const unsub = io.windows.onWindowAdded((w: any) => {
            if (w.id === windowId) {
                res(w);
                unsub();
            }
        });

        const windowInCollection = io.windows.list().find((w: any) => w.id === windowId);
        if (windowInCollection) {
            res(windowInCollection);
            unsub();
        }
    });
}

export const getElementBounds = (element: HTMLElement): Bounds => {
    const bounds = element.getBoundingClientRect();

    return {
        left: bounds.left,
        top: bounds.top,
        width: bounds.width,
        height: bounds.height
    }
}