import { Bounds, StandardButtons, TargetType, WebGroupsManager } from "./types/internal";

declare const window: Window & { webGroupsManager: WebGroupsManager };

class WebGroupsManagerDecorator {
    public readonly skipFocusStyle = "t42-skip-focus";

    public init(glue: any, componentFactory: any) {
        if (window.webGroupsManager) {
            window.webGroupsManager.init(componentFactory);
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

    public requestPageFocus(): void {
        return window.webGroupsManager.externalLibraryFactory.focusPage();
    }

    public requestFrameFocus(frameId: string): void {
        return window.webGroupsManager.externalLibraryFactory.focusFrame(frameId);
    }

    public requestGroupFocus(): void {
        return window.webGroupsManager.externalLibraryFactory.focusGroup();
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

    public extractFrame(targetId: string): void {
        // TODO
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

    public extractTabBar(targetId: string): void {
        // TODO
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

    public onGroupMoveAreaChanged(targetId: string): void {
        window.webGroupsManager.externalLibraryFactory.onMoveAreaChanged(TargetType.Group, targetId);
    }

    public onTabChannelSelectorClick(targetId: string, selectorBounds: Bounds): void {
        window.webGroupsManager.externalLibraryFactory.onTabChannelSelectorClick(targetId, selectorBounds);
    }

    public onFrameChannelSelectorClick(targetId: string, selectorBounds: Bounds): void {
        window.webGroupsManager.externalLibraryFactory.onFrameChannelSelectorClick(targetId, selectorBounds);
    }
}

export default new WebGroupsManagerDecorator();