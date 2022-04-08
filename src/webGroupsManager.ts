import { StandardButtons, TargetType, WebGroupsManager } from "./types/internal";

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
        return window.webGroupsManager.externalLibraryFactory.groupId;
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

    public closeFrame(targetId: string): void {
        window.webGroupsManager.externalLibraryFactory.onStandardButtonClick(TargetType.Frame, targetId, StandardButtons.Close);
    }

    public restoreFrame(targetId: string): void {
        window.webGroupsManager.externalLibraryFactory.onStandardButtonClick(TargetType.Frame, targetId, StandardButtons.Restore);
    }

    public maximizeFrame(targetId: string): void {
        window.webGroupsManager.externalLibraryFactory.onStandardButtonClick(TargetType.Frame, targetId, StandardButtons.Maximize);
    }

    public minimizeFrame(targetId: string): void {
        window.webGroupsManager.externalLibraryFactory.onStandardButtonClick(TargetType.Frame, targetId, StandardButtons.Minimize);
    }

    public closeTabBar(targetId: string): void {
        window.webGroupsManager.externalLibraryFactory.onStandardButtonClick(TargetType.TabBar, targetId, StandardButtons.Close);
    }

    public restoreTabBar(targetId: string): void {
        window.webGroupsManager.externalLibraryFactory.onStandardButtonClick(TargetType.TabBar, targetId, StandardButtons.Restore);
    }

    public maximizeTabBar(targetId: string): void {
        window.webGroupsManager.externalLibraryFactory.onStandardButtonClick(TargetType.TabBar, targetId, StandardButtons.Maximize);
    }

    public minimizeTabBar(targetId: string): void {
        window.webGroupsManager.externalLibraryFactory.onStandardButtonClick(TargetType.TabBar, targetId, StandardButtons.Minimize);
    }

    public closeGroup(targetId: string): void {
        window.webGroupsManager.externalLibraryFactory.onStandardButtonClick(TargetType.Group, targetId, StandardButtons.Close);
    }

    public restoreGroup(targetId: string): void {
        window.webGroupsManager.externalLibraryFactory.onStandardButtonClick(TargetType.Group, targetId, StandardButtons.Restore);
    }

    public maximizeGroup(targetId: string): void {
        window.webGroupsManager.externalLibraryFactory.onStandardButtonClick(TargetType.Group, targetId, StandardButtons.Maximize);
    }

    public minimizeGroup(targetId: string): void {
        window.webGroupsManager.externalLibraryFactory.onStandardButtonClick(TargetType.Group, targetId, StandardButtons.Minimize);
    }

    public closeTab(targetId: string): void {
        window.webGroupsManager.externalLibraryFactory.onTabCloseButtonClick(targetId);
    }

    // TODO wrap all the methods of the externalLibrary factory
}

export default new WorkspacesManagerDecorator();