import { Bounds, StandardButtons, TargetType, WebGroupsManager } from "./types/internal";
import callbackRegistry from "callback-registry";

declare const window: Window & { webGroupsManager: WebGroupsManager };

class WebGroupsManagerDecorator {
    private readonly registry = callbackRegistry();
    public readonly skipFocusStyle = "t42-skip-focus";

    public init(io: any, componentFactory: any) {
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

    public onCloseButtonClick(targetType: TargetType, targetId: string): void {
        window.webGroupsManager.externalLibraryFactory.onStandardButtonClick(targetType, targetId, StandardButtons.Close);
    }

    public onRestoreButtonClick(targetType: TargetType, targetId: string): void {
        window.webGroupsManager.externalLibraryFactory.onStandardButtonClick(targetType, targetId, StandardButtons.Restore);
    }

    public onMaximizeButtonClick(targetType: TargetType, targetId: string): void {
        window.webGroupsManager.externalLibraryFactory.onStandardButtonClick(targetType, targetId, StandardButtons.Maximize);
    }

    public onMinimizeButtonClick(targetType: TargetType, targetId: string): void {
        window.webGroupsManager.externalLibraryFactory.onStandardButtonClick(targetType, targetId, StandardButtons.Minimize);
    }

    public onLockButtonClick(targetType: TargetType, targetId: string): void {
        window.webGroupsManager.externalLibraryFactory.onStandardButtonClick(targetType, targetId, StandardButtons.Lock);
    }

    public onUnlockButtonClick(targetType: TargetType, targetId: string): void {
        window.webGroupsManager.externalLibraryFactory.onStandardButtonClick(targetType, targetId, StandardButtons.Unlock);
    }

    public onOverflowButtonClick(targetType: TargetType, targetId: string): void {
        window.webGroupsManager.externalLibraryFactory.onStandardButtonClick(targetType, targetId, StandardButtons.Overflow);
    }

    public onFeedbackButtonClick(targetType: TargetType, targetId: string): void {
        window.webGroupsManager.externalLibraryFactory.onStandardButtonClick(targetType, targetId, StandardButtons.Feedback);
    }

    public onCloneButtonClick(targetType: TargetType, targetId: string): void {
        window.webGroupsManager.externalLibraryFactory.onStandardButtonClick(targetType, targetId, StandardButtons.Clone);
    }

    public onStickyButtonClick(targetType: TargetType, targetId: string): void {
        window.webGroupsManager.externalLibraryFactory.onStandardButtonClick(targetType, targetId, StandardButtons.Sticky);
    }

    public onExtractButtonClick(targetType: TargetType, targetId: string): void {
        window.webGroupsManager.externalLibraryFactory.onStandardButtonClick(targetType, targetId, StandardButtons.Extract);
    }

    public closeTab(targetId: string): void {
        window.webGroupsManager.externalLibraryFactory.onTabCloseButtonClick(targetId);
    }

    public clickCustomButton(targetId: string, buttonId: string): void {
        window.webGroupsManager.externalLibraryFactory.onCustomButtonClick(TargetType.Frame, targetId, buttonId);
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

    public onCaptionTextBoundsChanged(targetType: TargetType, targetId: string, bounds: Bounds): void {
        if (typeof window.webGroupsManager.externalLibraryFactory.onCaptionTextBoundsChanged !== "function") {
            // Handling the case when a new library is used with an older version of io.Connect Desktop
            return;
        }
        window.webGroupsManager.externalLibraryFactory.onCaptionTextBoundsChanged(targetType, targetId, bounds);
    }

    public onCaptionEditorVisibleChanged(targetType: TargetType, targetId: string, visible: boolean): void {
        if (typeof window.webGroupsManager.externalLibraryFactory.onCaptionEditorVisibleChanged !== "function") {
            // Handling the case when a new library is used with an older version of io.Connect Desktop
            return;
        }
        window.webGroupsManager.externalLibraryFactory.onCaptionEditorVisibleChanged(targetType, targetId, visible);
    }

    public onCaptionEditorBoundsChanged(targetType: TargetType, targetId: string, bounds: Bounds): void {
        if (typeof window.webGroupsManager.externalLibraryFactory.onCaptionEditorBoundsChanged !== "function") {
            // Handling the case when a new library is used with an older version of io.Connect Desktop
            return;
        }
        window.webGroupsManager.externalLibraryFactory.onCaptionEditorBoundsChanged(targetType, targetId, bounds);
    }

    public commitCaptionEditing(targetType: TargetType, targetId: string, text: string): void {
        if (typeof window.webGroupsManager.externalLibraryFactory.commitCaptionEditing !== "function") {
            // Handling the case when a new library is used with an older version of io.Connect Desktop
            return;
        }
        window.webGroupsManager.externalLibraryFactory.commitCaptionEditing(targetType, targetId, text);
    }

    public onCommitCaptionEditingRequested(targetType: TargetType, targetId: string, callback: () => void): () => void {
        return this.registry.add(`${targetType}-${targetId}`, callback);
    }

    public requestCommitCaptionEditing(targetType: TargetType, targetId: string) {
        this.registry.execute(`${targetType}-${targetId}`);
    }

    public selectTab(windowId: string): void {
        window.webGroupsManager.externalLibraryFactory.selectTab(windowId);
    }

    public addTabContainerClass(windowId: string, className: string): void {
        if (typeof window.webGroupsManager.externalLibraryFactory.addTabContainerClass !== "function") {
            console.warn("The method addTabContainerClass is not supported by the current version of the library");
            return;
        }
        window.webGroupsManager.externalLibraryFactory.addTabContainerClass(windowId, className);
    }

    public removeTabContainerClass(windowId: string, className: string): void {
        if (typeof window.webGroupsManager.externalLibraryFactory.removeTabContainerClass !== "function") {
            console.warn("The method removeTabContainerClass is not supported by the current version of the library");
            return;
        }
        window.webGroupsManager.externalLibraryFactory.removeTabContainerClass(windowId, className);
    }
}

export default new WebGroupsManagerDecorator();