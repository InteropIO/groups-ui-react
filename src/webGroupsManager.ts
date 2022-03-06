import { WebGroupsManager } from "./types/internal";

declare const window: Window & { webGroupsManager: WebGroupsManager };

class WorkspacesManagerDecorator {
    public init(glue: any, componentFactory: any) {
        if (window.webGroupsManager) {
            window.webGroupsManager.init(componentFactory);

            console.log("init invoked with", componentFactory);
        } else {
            throw new Error(`Could not find the webGroupsManager the groups library should be loaded as a group application`);
        }
    }

    public getGroupId() {
        return window.webGroupsManager.getGroupId();
    }

    public notifyMoveAreaChanged() {
        window.webGroupsManager.notifyMoveAreaChanged();
    }

    public registerPopup(element: HTMLElement): string {
        return window.webGroupsManager.registerPopup(element);
    }

    public removePopup(element: HTMLElement): void {
        return window.webGroupsManager.removePopup(element);
    }

    public removePopupById(elementId: string): void {
        return window.webGroupsManager.removePopupById(elementId);
    }

    public subscribeForWindowFocused(cb: () => any): () => void {
        return window.webGroupsManager.subscribeForWindowFocused(cb);
    }

    public unmount(): void {
        return window.webGroupsManager.unmount();
    }

    public requestFocus(): void {
        return window.webGroupsManager.requestFocus();
    }
}

export default new WorkspacesManagerDecorator();