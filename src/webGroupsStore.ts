import {
    CreateElementRequestOptions,
    CreateFrameCaptionBarRequestOptions,
    CreateFrameElementRequestOptions,
    CreateGroupCaptionBarRequestOptions,
    CreateButtonsOptions,
    CreateTabRequestOptions,
    ElementCreationWrapperState,
    RemoveRequestOptions,
    TargetType,
    UpdateFrameCaptionBarRequestOptions,
    UpdateGroupCaptionBarRequestOptions,
    UpdateStandardButtonRequestOptions,
    UpdateFrameRequestOptions,
    CreateFrameLoadingAnimationRequestOptions,
    UpdateCustomButtonsRequestOptions,
    CreateTabOverflowPopupRequestOptions,
    OverflowedTabInfo,
    IndexableElementCreationWrapperState,
    BaseElementOptions
} from "./types/internal";
import webGroupsManager from "./webGroupsManager";

class WebGroupsStore {

    private listeners = new Set<() => void>();
    private state: ElementCreationWrapperState = {
        groupCaptionBar: undefined,
        groupOverlay: undefined,
        frameCaptionBars: {}, // dict frameId to create caption bar options
        frameWindowOverlays: {}, // dict frameId to create options
        aboveWindowZones: {}, // dict frameId to create options
        windowContentOverlays: {},//dict frameId to create options
        belowWindowZones: {}, // dict frameId to create options
        aboveTabsZones: {}, // dict frameId to create options
        beforeTabsZones: {}, // dict frameId to create before tabs zones options
        tabElements: {}, // dict windowId to create tab elements options
        afterTabsZones: {}, // dict frameId to after tabs zones options
        tabHeaderButtons: {}, // dict frameId to crate tab header buttons options
        tabOverflowPopups: {}, // dict frameId to create tab overflow popup options,
        belowTabsZones: {}, // dict frameId to create options
        frameLoadingAnimations: {}, // dict frameId to create options
        htmlButtons: {}, // dict frameId to crate html buttons options
    }

    public subscribe = (cb: () => void) => {
        this.listeners.add(cb);
        return () => {
            this.listeners.delete(cb);
        };
    }

    public getSnapshot = () => {
        return this.state;
    }

    public onCreateGroupCaptionBarRequested = (options: CreateGroupCaptionBarRequestOptions) => {
        if (options === this.state.groupCaptionBar) {
            return;
        }
        this.setState(s => {
            return {
                ...s,
                groupCaptionBar: options
            }
        });
    }

    public onCreateGroupOverlayRequested = (options: CreateElementRequestOptions) => {
        if (options === this.state.groupOverlay) {
            return;
        }
        this.setState(s => {
            return {
                ...s,
                groupOverlay: options
            }
        });
    }

    public onCreateFrameCaptionBarRequested = (options: CreateFrameCaptionBarRequestOptions) => {
        this.onCreateElementRequested("frameCaptionBars", options);
    }

    public onCreateFrameWindowOverlayRequested = (options: CreateFrameElementRequestOptions) => {
        this.onCreateElementRequested("frameWindowOverlays", options);
    }

    public onCreateAboveWindowRequested = (options: CreateFrameElementRequestOptions) => {
        this.onCreateElementRequested("aboveWindowZones", options);
    }

    public onCreateWindowContentOverlayRequested = (options: CreateFrameElementRequestOptions) => {
        this.onCreateElementRequested("windowContentOverlays", options);
    }

    public onCreateFrameLoadingAnimationRequested = (options: CreateFrameLoadingAnimationRequestOptions) => {
        this.onCreateElementRequested("frameLoadingAnimations", options);
    }

    public onCreateBelowWindowRequested = (options: CreateFrameElementRequestOptions) => {
        this.onCreateElementRequested("belowWindowZones", options);
    }

    public onCreateAboveTabsComponentRequested = (options: CreateFrameElementRequestOptions) => {
        this.onCreateElementRequested("aboveTabsZones", options);
    }

    public onCreateBeforeTabsComponentRequested = (options: CreateFrameElementRequestOptions) => {
        this.onCreateElementRequested("beforeTabsZones", options);
    }

    public onCreateTabElementRequested = (options: CreateTabRequestOptions) => {
        this.onCreateElementRequested("tabElements", options);
    }

    public onCreateAfterTabsComponentRequested = (options: CreateFrameElementRequestOptions) => {
        this.onCreateElementRequested("afterTabsZones", options);
    }

    public onCreateTabHeaderButtonsRequested = (options: CreateButtonsOptions) => {
        this.onCreateElementRequested("tabHeaderButtons", options);
    }

    public onCreateBelowTabsComponentRequested = (options: CreateFrameElementRequestOptions) => {
        this.onCreateElementRequested("belowTabsZones", options);
    }

    public onCreateHtmlButtonsRequested = (options: CreateButtonsOptions) => {
        this.onCreateElementRequested("htmlButtons", options);
    }

    public onCreateTabOverflowPopupRequested = (options: CreateTabOverflowPopupRequestOptions) => {
        this.onCreateElementRequested("tabOverflowPopups", options);
    }

    public onUpdateHtmlButtonsRequested = (options: CreateButtonsOptions) => {
        this.onUpdateElementRequested("htmlButtons", options);
    }

    public onUpdateGroupCaptionBarRequested = (options: UpdateGroupCaptionBarRequestOptions) => {
        if (options === this.state.groupCaptionBar) {
            return;
        }
        this.setState(s => {
            return {
                ...s,
                groupCaptionBar: Object.assign({}, s.groupCaptionBar, options)
            }
        });
    }

    public onUpdateFrameCaptionBarRequested = (options: UpdateFrameCaptionBarRequestOptions) => {
        this.onUpdateElementRequested("frameCaptionBars", options);
    }

    public onUpdateFrameWindowOverlayRequested = (options: CreateElementRequestOptions) => {
        this.onUpdateElementRequested("frameWindowOverlays", options);
    }

    public onUpdateAboveTabsRequested = (options: CreateElementRequestOptions) => {
        this.onUpdateElementRequested("aboveTabsZones", options);
    }

    public onUpdateBeforeTabsRequested = (options: CreateElementRequestOptions) => {
        this.onUpdateElementRequested("beforeTabsZones", options);
    }

    public onUpdateTabElementRequested = (options: CreateTabRequestOptions) => {
        this.onUpdateElementRequested("tabElements", options);
    }

    public onUpdateAfterTabsRequested = (options: CreateElementRequestOptions) => {
        this.onUpdateElementRequested("afterTabsZones", options);
    }

    public onUpdateTabHeaderButtonsRequested = (options: CreateButtonsOptions) => {
        this.onUpdateElementRequested("tabHeaderButtons", options);
    }

    public onUpdateBelowTabsRequested = (options: CreateElementRequestOptions) => {
        this.onUpdateElementRequested("belowTabsZones", options);
    }

    public onUpdateFrame = (options: UpdateFrameRequestOptions) => {
        this.setState(s => {
            const newState = { ...s };

            const updateSelectionWindow = <T extends keyof IndexableElementCreationWrapperState>(stateProp: T, targetId: string, selectedWindow: string) => {
                if (stateProp === "tabElements") {
                    return;
                }
                const newStateRecord = newState[stateProp]![targetId] as any;

                if (newStateRecord && newStateRecord?.selectedWindow !== selectedWindow) {
                    newState[stateProp] = {
                        ...newState[stateProp],
                        [targetId]: { ...newState[stateProp]![targetId], selectedWindow }
                    }
                }
            };

            const updateHiddenTabs = <T extends keyof IndexableElementCreationWrapperState>(stateProp: T, targetId: string, hiddenTabsToTheLeft: OverflowedTabInfo[], hiddenTabsToTheRight: OverflowedTabInfo[]) => {
                const oldState = newState[stateProp]![targetId] as any;
                const oldHiddenToTheLeft = oldState?.hiddenTabsToTheLeft;
                const oldHiddenToTheRight = oldState?.hiddenTabsToTheRight;
                newState[stateProp] = {
                    ...newState[stateProp],
                    [targetId]: {
                        ...newState[stateProp]![targetId],
                        hiddenTabsToTheLeft: hiddenTabsToTheLeft || oldHiddenToTheLeft,
                        hiddenTabsToTheRight: hiddenTabsToTheRight || oldHiddenToTheRight
                    }
                }
            };

            updateSelectionWindow("frameCaptionBars", options.targetId, options.selectedWindow);
            updateSelectionWindow("frameWindowOverlays", options.targetId, options.selectedWindow);
            updateSelectionWindow("windowContentOverlays", options.targetId, options.selectedWindow);
            updateSelectionWindow("aboveWindowZones", options.targetId, options.selectedWindow);
            updateSelectionWindow("belowWindowZones", options.targetId, options.selectedWindow);
            updateSelectionWindow("aboveTabsZones", options.targetId, options.selectedWindow);
            updateSelectionWindow("beforeTabsZones", options.targetId, options.selectedWindow);
            updateSelectionWindow("afterTabsZones", options.targetId, options.selectedWindow);
            updateSelectionWindow("tabHeaderButtons", options.targetId, options.selectedWindow);
            updateSelectionWindow("belowTabsZones", options.targetId, options.selectedWindow);
            updateSelectionWindow("frameLoadingAnimations", options.targetId, options.selectedWindow);

            updateHiddenTabs("afterTabsZones", options.targetId, options.hiddenTabsToTheLeft, options.hiddenTabsToTheRight);
            updateHiddenTabs("tabHeaderButtons", options.targetId, options.hiddenTabsToTheLeft, options.hiddenTabsToTheRight);

            return newState;
        });
    }

    public onUpdateStandardButton = (options: UpdateStandardButtonRequestOptions) => {
        const targetState = { targetId: options.targetId };
        switch (options.targetType) {
            case TargetType.Group:
                const currentGroupState = this.state.groupCaptionBar || targetState as CreateGroupCaptionBarRequestOptions;
                const newGroupOptions = {
                    ...currentGroupState,
                    [options.buttonId]: {
                        ...options
                    }
                };
                this.onUpdateGroupCaptionBarRequested(newGroupOptions);
                break;
            case TargetType.Frame:
                const currentFrameState = this.state.frameCaptionBars[options.targetId] || targetState as CreateFrameCaptionBarRequestOptions;
                const newFrameOptions = {
                    ...currentFrameState,
                    [options.buttonId]: {
                        ...options
                    }
                };
                this.onUpdateFrameCaptionBarRequested(newFrameOptions);
                break;
            case TargetType.TabBar:
                const currentTabButtonsState = this.state.tabHeaderButtons[options.targetId] || targetState as CreateButtonsOptions;
                const newTabButtonsOptions = {
                    ...currentTabButtonsState,
                    [options.buttonId]: {
                        ...options
                    }
                };
                this.onUpdateTabHeaderButtonsRequested(newTabButtonsOptions);
                break;
            case TargetType.HtmlButtons:
                const currentHtmlButtonsState = this.state.htmlButtons[options.targetId] || targetState as CreateButtonsOptions;
                const newHtmlButtonsOptions = {
                    ...currentHtmlButtonsState,
                    [options.buttonId]: {
                        ...options
                    }
                };
                this.onUpdateHtmlButtonsRequested(newHtmlButtonsOptions);
                break;
        }
    }

    public onUpdateCustomButtons = (options: UpdateCustomButtonsRequestOptions) => {
        switch (options.targetType) {
            case TargetType.Frame:
                const currentFrameState = this.state.frameCaptionBars[options.targetId] || { targetId: options.targetId } as CreateButtonsOptions;
                const newFrameOptions = {
                    ...currentFrameState,
                    ...options
                };
                this.onUpdateFrameCaptionBarRequested(newFrameOptions);
                break;
            case TargetType.TabBar:
                const currentTabBarState = this.state.tabHeaderButtons.customButtons || { customButtons: options.customButtons } as CreateButtonsOptions;
                const newTabBarOptions = {
                    ...currentTabBarState,
                    ...options
                };
                this.onUpdateTabHeaderButtonsRequested(newTabBarOptions);
                break;
            case TargetType.HtmlButtons:
                const currentHtmlButtonsState = this.state.htmlButtons.customButtons || { customButtons: options.customButtons } as CreateButtonsOptions;
                const newHtmlButtonsOptions = {
                    ...currentHtmlButtonsState,
                    ...options
                };
                this.onUpdateHtmlButtonsRequested(newHtmlButtonsOptions);
                break;
        }
    }

    public onRemoveFrameCaptionBarRequested = (options: RemoveRequestOptions) => {
        this.onRemoveElementRequested("frameCaptionBars", options);
    }

    public onRemoveFrameWindowOverlayRequested = (options: RemoveRequestOptions) => {
        this.onRemoveElementRequested("frameWindowOverlays", options);
    }

    public onRemoveAboveWindowRequested = (options: RemoveRequestOptions) => {
        this.onRemoveElementRequested("aboveWindowZones", options);
    }

    public onRemoveWindowContentOverlayRequested = (options: RemoveRequestOptions) => {
        this.onRemoveElementRequested("windowContentOverlays", options);
    }

    public onRemoveFrameLoadingAnimationRequested = (options: RemoveRequestOptions) => {
        this.onRemoveElementRequested("frameLoadingAnimations", options);
    }

    public onRemoveBelowWindowRequested = (options: RemoveRequestOptions) => {
        this.onRemoveElementRequested("belowWindowZones", options);
    }

    public onRemoveAboveTabsRequested = (options: RemoveRequestOptions) => {
        this.onRemoveElementRequested("aboveTabsZones", options);
    }

    public onRemoveBeforeTabsComponentRequested = (options: RemoveRequestOptions) => {
        this.onRemoveElementRequested("beforeTabsZones", options);
    }

    public onRemoveTabElementRequested = (options: RemoveRequestOptions) => {
        this.onRemoveElementRequested("tabElements", options);
    }

    public onRemoveAfterTabsComponentRequested = (options: RemoveRequestOptions) => {
        this.onRemoveElementRequested("afterTabsZones", options);
    }

    public onRemoveTabHeaderButtonsRequested = (options: RemoveRequestOptions) => {
        this.onRemoveElementRequested("tabHeaderButtons", options);
    }

    public onRemoveBelowTabsRequested = (options: RemoveRequestOptions) => {
        this.onRemoveElementRequested("belowTabsZones", options);
    }

    public onRemoveHtmlButtonsRequested = (options: RemoveRequestOptions) => {
        this.onRemoveElementRequested("htmlButtons", options);
    }

    public onRemoveTabOverflowPopupRequested = (options: RemoveRequestOptions) => {
        this.onRemoveElementRequested("tabOverflowPopups", options);
    }

    public onShowCaptionEditorRequested = (targetType: TargetType, targetId: string, text: string) => {
        if (targetType === TargetType.Group) {
            this.onShowGroupCaptionEditorRequested(targetId, text);
        } else if (targetType === TargetType.Frame) {
            this.onShowFlatCaptionEditorRequested(targetId, text);
        } else if (targetType === TargetType.Tab) {
            this.onShowTabCaptionEditorRequested(targetId, text);
        }
    }

    public onCommitCaptionEditingRequested = (targetType: TargetType, targetId: string) => {
        webGroupsManager.requestCommitCaptionEditing(targetType, targetId);
    }

    public onHideCaptionEditorRequested = (targetType: TargetType, targetId: string) => {
        if (targetType === TargetType.Group) {
            this.onHideGroupCaptionEditorRequested(targetId);
        } else if (targetType === TargetType.Frame) {
            this.onHideFlatCaptionEditorRequested(targetId);
        } else if (targetType === TargetType.Tab) {
            this.onHideTabCaptionEditorRequested(targetId)
        }
    }

    public onShowLoadingAnimationRequested = (targetType: TargetType, targetId: string) => {
        if (targetType === TargetType.Frame) {
            this.onShowLoadingAnimation(targetId);
        } else {
            console.warn(`Loading animation for elements other than Frame are not supported`);
        }
    }

    public onHideLoadingAnimationRequested = (targetType: TargetType, targetId: string) => {
        if (targetType === TargetType.Frame) {
            this.onHideLoadingAnimation(targetId);
        } else {
            console.warn(`Loading animation for elements other than Frame are not supported`);
        }
    }

    private onShowGroupCaptionEditorRequested = (_: string, text: string) => {
        if (!this.state.groupCaptionBar) {
            return;
        }

        this.setState(s => {
            const captionEditor = s.groupCaptionBar?.captionEditor || {};
            const newState: ElementCreationWrapperState = {
                ...s,
                groupCaptionBar: {
                    ...s.groupCaptionBar!,
                    captionEditor: {
                        ...captionEditor,
                        show: true,
                        text
                    }
                }
            }
            return newState;
        });
    }

    private onHideGroupCaptionEditorRequested = (_: string) => {
        if (!this.state.groupCaptionBar) {
            return;
        }

        this.setState(s => {
            const captionEditor = s.groupCaptionBar?.captionEditor || {};
            const newState: ElementCreationWrapperState = {
                ...s,
                groupCaptionBar: {
                    ...s.groupCaptionBar!,
                    captionEditor: {
                        ...captionEditor,
                        show: false,
                    }
                }
            }
            return newState;
        });
    }

    private onShowFlatCaptionEditorRequested = (targetId: string, text: string) => {
        if (!this.state.frameCaptionBars[targetId]) {
            return;
        }

        this.setState(s => {
            const captionEditor = s.frameCaptionBars[targetId]?.captionEditor || {};
            const newState: ElementCreationWrapperState = {
                ...s,
                frameCaptionBars: {
                    ...s.frameCaptionBars!,
                    [targetId]: {
                        ...s.frameCaptionBars[targetId],
                        captionEditor: {
                            ...captionEditor,
                            show: true,
                            text
                        }
                    }

                }
            }
            return newState;
        });
    }

    private onHideFlatCaptionEditorRequested = (targetId: string) => {
        if (!this.state.frameCaptionBars[targetId]) {
            return;
        }

        this.setState(s => {
            const captionEditor = s.frameCaptionBars[targetId]?.captionEditor || {};
            const newState: ElementCreationWrapperState = {
                ...s,
                frameCaptionBars: {
                    ...s.frameCaptionBars!,
                    [targetId]: {
                        ...s.frameCaptionBars[targetId],
                        captionEditor: {
                            ...captionEditor,
                            show: false,
                        }
                    }

                }
            }
            return newState;
        });
    }

    private onShowTabCaptionEditorRequested = (targetId: string, text: string) => {
        if (!this.state.tabElements[targetId]) {
            return;
        }

        this.setState(s => {
            const captionEditor = s.tabElements[targetId]?.captionEditor || {};
            const newState: ElementCreationWrapperState = {
                ...s,
                tabElements: {
                    ...s.tabElements!,
                    [targetId]: {
                        ...s.tabElements[targetId],
                        captionEditor: {
                            ...captionEditor,
                            show: true,
                            text
                        }
                    }

                }
            }
            return newState;
        });
    }

    private onHideTabCaptionEditorRequested = (targetId: string) => {
        if (!this.state.tabElements[targetId]) {
            return;
        }

        this.setState(s => {
            const captionEditor = s.tabElements[targetId]?.captionEditor || {};
            const newState: ElementCreationWrapperState = {
                ...s,
                tabElements: {
                    ...s.tabElements!,
                    [targetId]: {
                        ...s.tabElements[targetId],
                        captionEditor: {
                            ...captionEditor,
                            show: false,
                        }
                    }

                }
            }
            return newState;
        });
    }

    private onShowLoadingAnimation = (targetId: string) => {
        if (!this.state.frameLoadingAnimations[targetId]) {
            return;
        }

        this.setState(s => {
            const newState: ElementCreationWrapperState = {
                ...s,
                frameLoadingAnimations: {
                    ...s.frameLoadingAnimations,
                    [targetId]: {
                        ...s.frameLoadingAnimations[targetId],
                        show: true,
                    }

                }
            }
            return newState;
        });
    }

    private onHideLoadingAnimation = (targetId: string) => {
        if (!this.state.frameLoadingAnimations[targetId]) {
            return;
        }

        this.setState(s => {
            const newState: ElementCreationWrapperState = {
                ...s,
                frameLoadingAnimations: {
                    ...s.frameLoadingAnimations,
                    [targetId]: {
                        ...s.frameLoadingAnimations[targetId],
                        show: false,
                    }

                }
            }
            return newState;
        });
    }

    private onCreateElementRequested = <T extends keyof IndexableElementCreationWrapperState>(key: T, options: BaseElementOptions) => {
        if (options === this.state[key][options.targetId] || !options) {
            return;
        }
        this.setState(s => {
            return {
                ...s,
                [key]: {
                    ...s[key],
                    [options.targetId]: options
                }
            }
        });
    }

    private onUpdateElementRequested = <T extends keyof IndexableElementCreationWrapperState>(key: T, options: BaseElementOptions) => {
        if (options === this.state[key][options.targetId] || !options) {
            return;
        }
        this.setState(s => {
            return {
                ...s,
                [key]: {
                    ...s[key],
                    [options.targetId]: { ...s[key][options.targetId], ...options }
                }
            }
        });
    }

    private onRemoveElementRequested = <T extends keyof IndexableElementCreationWrapperState>(key: T, options: RemoveRequestOptions) => {
        const stateValue = this.state[key];
        if (!stateValue || !stateValue[options.targetId]) {
            return;
        }
        this.setState(s => {
            const newRecordObj = Object.keys(s[key]!).reduce<IndexableElementCreationWrapperState[T]>((acc, targetId: keyof IndexableElementCreationWrapperState[T]) => {
                if (targetId != options.targetId) {
                    acc[targetId] = (s[key] as IndexableElementCreationWrapperState[T])[targetId];
                }
                return acc;
            }, {} as ElementCreationWrapperState[T]);

            return {
                ...s,
                [key]: newRecordObj
            }
        });
    }

    private setState = (cb: (s: ElementCreationWrapperState) => ElementCreationWrapperState) => {
        this.state = cb(this.state);

        this.listeners.forEach((l) => l());
    }
}

export default new WebGroupsStore();