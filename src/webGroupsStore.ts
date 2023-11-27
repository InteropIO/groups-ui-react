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
    UpdateCustomButtonsRequestOptions
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
        if (options === this.state.frameCaptionBars[options.targetId] || !options) {
            return;
        }
        this.setState(s => {
            return {
                ...s,
                frameCaptionBars: {
                    ...s.frameCaptionBars,
                    [options.targetId]: options
                }
            }
        });
    }

    public onCreateFrameWindowOverlayRequested = (options: CreateFrameElementRequestOptions) => {
        if (options === this.state.frameWindowOverlays[options.targetId] || !options) {
            return;
        }
        this.setState(s => {
            return {
                ...s,
                frameWindowOverlays: {
                    ...s.frameWindowOverlays,
                    [options.targetId]: options
                }
            }
        });
    }

    public onCreateAboveWindowRequested = (options: CreateFrameElementRequestOptions) => {
        if (options === this.state.aboveWindowZones[options.targetId] || !options) {
            return;
        }
        this.setState(s => {
            return {
                ...s,
                aboveWindowZones: {
                    ...s.aboveWindowZones,
                    [options.targetId]: options
                }
            }
        });
    }

    public onCreateWindowContentOverlayRequested = (options: CreateFrameElementRequestOptions) => {
        if (options === this.state.windowContentOverlays[options.targetId] || !options) {
            return;
        }
        this.setState(s => {
            return {
                ...s,
                windowContentOverlays: {
                    ...s.windowContentOverlays,
                    [options.targetId]: options
                }
            }
        });
    }

    public onCreateFrameLoadingAnimationRequested = (options: CreateFrameLoadingAnimationRequestOptions) => {
        if (options === this.state.frameLoadingAnimations[options.targetId] || !options) {
            return;
        }
        this.setState(s => {
            return {
                ...s,
                frameLoadingAnimations: {
                    ...s.frameLoadingAnimations,
                    [options.targetId]: options
                }
            }
        });
    }

    public onCreateBelowWindowRequested = (options: CreateFrameElementRequestOptions) => {
        if (options === this.state.belowWindowZones[options.targetId] || !options) {
            return;
        }
        this.setState(s => {
            return {
                ...s,
                belowWindowZones: {
                    ...s.belowWindowZones,
                    [options.targetId]: options
                }
            }
        });
    }

    public onCreateAboveTabsComponentRequested = (options: CreateFrameElementRequestOptions) => {
        if (options === this.state.aboveTabsZones[options.targetId] || !options) {
            return;
        }
        this.setState(s => {
            return {
                ...s,
                aboveTabsZones: {
                    ...s.aboveTabsZones,
                    [options.targetId]: options
                }
            }
        });
    }

    public onCreateBeforeTabsComponentRequested = (options: CreateFrameElementRequestOptions) => {
        if (options === this.state.beforeTabsZones[options.targetId] || !options) {
            return;
        }
        this.setState(s => {
            return {
                ...s,
                beforeTabsZones: {
                    ...s.beforeTabsZones,
                    [options.targetId]: options
                }
            }
        });
    }

    public onCreateTabElementRequested = (options: CreateTabRequestOptions) => {
        if (options === this.state.tabElements[options.targetId] || !options) {
            return;
        }
        this.setState(s => {
            const newTabElementsObj = Object.keys(s.tabElements).reduce((acc, targetId) => {
                acc[targetId] = s.tabElements[targetId];
                return acc;
            }, {});

            newTabElementsObj[options.targetId] = options;

            return {
                ...s,
                tabElements: {
                    ...s.tabElements,
                    [options.targetId]: options
                }
            }
        });
    }

    public onCreateAfterTabsComponentRequested = (options: CreateFrameElementRequestOptions) => {
        if (options === this.state.afterTabsZones[options.targetId] || !options) {
            return;
        }
        this.setState(s => {
            return {
                ...s,
                afterTabsZones: {
                    ...s.afterTabsZones,
                    [options.targetId]: options
                }
            }
        });
    }

    public onCreateTabHeaderButtonsRequested = (options: CreateButtonsOptions) => {
        if (options === this.state.tabHeaderButtons[options.targetId] || !options) {
            return;
        }
        this.setState(s => {
            return {
                ...s,
                tabHeaderButtons: {
                    ...s.tabHeaderButtons,
                    [options.targetId]: options
                }
            }
        });
    }

    public onCreateBelowTabsComponentRequested = (options: CreateFrameElementRequestOptions) => {
        if (options === this.state.belowTabsZones[options.targetId] || !options) {
            return;
        }
        this.setState(s => {
            return {
                ...s,
                belowTabsZones: {
                    ...s.belowTabsZones,
                    [options.targetId]: options
                }
            }
        });
    }

    public onCreateHtmlButtonsRequested = (options: CreateButtonsOptions) => {
        if (options === this.state.htmlButtons[options.targetId] || !options) {
            return;
        }
        this.setState(s => {
            return {
                ...s,
                htmlButtons: {
                    ...s.htmlButtons,
                    [options.targetId]: options
                }
            }
        });
    }

    public onUpdateHtmlButtonsRequested = (options: CreateButtonsOptions) => {
        if (options === this.state.htmlButtons[options.targetId] || !options) {
            return;
        }
        this.setState(s => {
            return {
                ...s,
                htmlButtons: {
                    ...s.htmlButtons,
                    [options.targetId]: { ...s.htmlButtons[options.targetId], ...options }
                }
            }
        });
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
        if (options === this.state.frameCaptionBars[options.targetId] || !options) {
            return;
        }
        this.setState(s => {
            return {
                ...s,
                frameCaptionBars: {
                    ...s.frameCaptionBars,
                    [options.targetId]: { ...s.frameCaptionBars[options.targetId], ...options }
                }
            }
        });
    }

    public onUpdateFrameWindowOverlayRequested = (options: CreateElementRequestOptions) => {
        if (options === this.state.frameWindowOverlays[options.targetId] || !options) {
            return;
        }
        this.setState(s => {
            return {
                ...s,
                frameWindowOverlays: {
                    ...s.frameWindowOverlays,
                    [options.targetId]: { ...s.frameWindowOverlays[options.targetId], ...options }
                }
            }
        });
    }

    public onUpdateAboveTabsRequested = (options: CreateElementRequestOptions) => {
        if (options === this.state.aboveTabsZones[options.targetId] || !options) {
            return;
        }
        this.setState(s => {
            return {
                ...s,
                aboveTabsZones: {
                    ...s.aboveTabsZones,
                    [options.targetId]: { ...s.aboveTabsZones[options.targetId], ...options }
                }
            }
        });
    }

    public onUpdateBeforeTabsRequested = (options: CreateElementRequestOptions) => {
        if (options === this.state.beforeTabsZones[options.targetId] || !options) {
            return;
        }
        this.setState(s => {
            return {
                ...s,
                beforeTabsZones: {
                    ...s.beforeTabsZones,
                    [options.targetId]: { ...s.beforeTabsZones[options.targetId], ...options }
                }
            }
        });
    }

    public onUpdateTabElementRequested = (options: CreateTabRequestOptions) => {
        if (options === this.state.tabElements[options.targetId] || !options) {
            return;
        }

        this.setState(s => {
            return {
                ...s,
                tabElements: {
                    ...s.tabElements,
                    [options.targetId]: { ...s.tabElements[options.targetId], ...options }
                }
            }
        });
    }

    public onUpdateAfterTabsRequested = (options: CreateElementRequestOptions) => {
        if (options === this.state.afterTabsZones[options.targetId] || !options) {
            return;
        }
        this.setState(s => {
            return {
                ...s,
                afterTabsZones: {
                    ...s.afterTabsZones,
                    [options.targetId]: { ...s.afterTabsZones[options.targetId], ...options }
                }
            }
        });
    }

    public onUpdateTabHeaderButtonsRequested = (options: CreateButtonsOptions) => {
        if (options === this.state.tabHeaderButtons[options.targetId] || !options) {
            return;
        }
        this.setState(s => {
            return {
                ...s,
                tabHeaderButtons: {
                    ...s.tabHeaderButtons,
                    [options.targetId]: { ...s.tabHeaderButtons[options.targetId], ...options }
                }
            }
        });
    }

    public onUpdateBelowTabsRequested = (options: CreateElementRequestOptions) => {
        if (options === this.state.belowTabsZones[options.targetId] || !options) {
            return;
        }
        this.setState(s => {
            return {
                ...s,
                belowTabsZones: {
                    ...s.belowTabsZones,
                    [options.targetId]: { ...s.belowTabsZones[options.targetId], ...options }
                }
            }
        });
    }

    public onUpdateFrame = (options: UpdateFrameRequestOptions) => {
        this.setState(s => {
            const newState = { ...s };

            const updateSelectionWindow = <T extends keyof ElementCreationWrapperState>(stateProp: T, targetId: string, selectedWindow: string) => {
                if (stateProp === "groupOverlay" || stateProp === "groupCaptionBar" || stateProp === "tabElements") {
                    return;
                }

                if (s[stateProp]![targetId] && s[stateProp]![targetId]?.selectedWindow !== selectedWindow) {
                    newState[stateProp] = {
                        ...s[stateProp],
                        [targetId]: { ...s[stateProp]![targetId], selectedWindow: selectedWindow }
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

            return newState;
        });
    }

    public onUpdateStandardButton = (options: UpdateStandardButtonRequestOptions) => {
        const targetState = { targetId: options.targetId };
        switch(options.targetType) {
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
        switch(options.targetType) {
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
        if (!this.state.frameCaptionBars[options.targetId]) {
            return;
        }
        this.setState(s => {
            const newCaptionBarsObj = Object.keys(s.frameCaptionBars).reduce((acc, targetId) => {
                if (targetId !== options.targetId) {
                    acc[targetId] = s.frameCaptionBars[targetId];
                }
                return acc;
            }, {});

            return {
                ...s,
                frameCaptionBars: newCaptionBarsObj
            }
        });
    }

    public onRemoveFrameWindowOverlayRequested = (options: RemoveRequestOptions) => {
        if (!this.state.frameWindowOverlays[options.targetId]) {
            return;
        }
        this.setState(s => {
            const newCaptionBarsObj = Object.keys(s.frameWindowOverlays).reduce((acc, targetId) => {
                if (targetId !== options.targetId) {
                    acc[targetId] = s.frameWindowOverlays[targetId];
                }
                return acc;
            }, {});

            return {
                ...s,
                frameWindowOverlays: newCaptionBarsObj
            }
        });
    }

    public onRemoveAboveWindowRequested = (options: RemoveRequestOptions) => {
        if (!this.state.aboveWindowZones[options.targetId]) {
            return;
        }
        this.setState(s => {
            const newCaptionBarsObj = Object.keys(s.aboveWindowZones).reduce((acc, targetId) => {
                if (targetId !== options.targetId) {
                    acc[targetId] = s.aboveWindowZones[targetId];
                }
                return acc;
            }, {});

            return {
                ...s,
                aboveWindowZones: newCaptionBarsObj
            }
        });
    }

    public onRemoveWindowContentOverlayRequested = (options: RemoveRequestOptions) => {
        if (!this.state.windowContentOverlays[options.targetId]) {
            return;
        }
        this.setState(s => {
            const newOverlaysObj = Object.keys(s.windowContentOverlays).reduce((acc, targetId) => {
                if (targetId !== options.targetId) {
                    acc[targetId] = s.windowContentOverlays[targetId];
                }
                return acc;
            }, {});

            return {
                ...s,
                windowContentOverlays: newOverlaysObj
            }
        });
    }

    public onRemoveFrameLoadingAnimationRequested = (options: RemoveRequestOptions) => {
        if (!this.state.frameLoadingAnimations[options.targetId]) {
            return;
        }
        this.setState(s => {
            const newLoadingAnimationObj = Object.keys(s.frameLoadingAnimations).reduce((acc, targetId) => {
                if (targetId !== options.targetId) {
                    acc[targetId] = s.frameLoadingAnimations[targetId];
                }
                return acc;
            }, {});
            return {
                ...s,
                frameLoadingAnimation: newLoadingAnimationObj
            }
        })
    }

    public onRemoveBelowWindowRequested = (options: RemoveRequestOptions) => {
        if (!this.state.belowWindowZones[options.targetId]) {
            return;
        }
        this.setState(s => {
            const newCaptionBarsObj = Object.keys(s.belowWindowZones).reduce((acc, targetId) => {
                if (targetId !== options.targetId) {
                    acc[targetId] = s.belowWindowZones[targetId];
                }
                return acc;
            }, {});

            return {
                ...s,
                belowWindowZones: newCaptionBarsObj
            }
        });
    }

    public onRemoveAboveTabsRequested = (options: RemoveRequestOptions) => {
        if (!this.state.aboveTabsZones[options.targetId]) {
            return;
        }
        this.setState(s => {
            const newTabElementsObj = Object.keys(s.aboveTabsZones).reduce((acc, targetId) => {
                if (targetId != options.targetId) {
                    acc[targetId] = s.aboveTabsZones[targetId];
                }
                return acc;
            }, {});

            return {
                ...s,
                aboveTabsZones: newTabElementsObj
            }
        });
    }

    public onRemoveBeforeTabsComponentRequested = (options: RemoveRequestOptions) => {
        if (!this.state.beforeTabsZones[options.targetId]) {
            return;
        }
        this.setState(s => {
            const newTabElementsObj = Object.keys(s.beforeTabsZones).reduce((acc, targetId) => {
                if (targetId != options.targetId) {
                    acc[targetId] = s.beforeTabsZones[targetId];
                }
                return acc;
            }, {});

            return {
                ...s,
                beforeTabsZones: newTabElementsObj
            }
        });
    }

    public onRemoveTabElementRequested = (options: RemoveRequestOptions) => {
        if (!this.state.tabElements[options.targetId]) {
            return;
        }
        this.setState(s => {
            const newTabElementsObj = Object.keys(s.tabElements).reduce((acc, targetId) => {
                if (targetId != options.targetId) {
                    acc[targetId] = s.tabElements[targetId];
                }
                return acc;
            }, {});

            return {
                ...s,
                tabElements: newTabElementsObj
            }
        });
    }

    public onRemoveAfterTabsComponentRequested = (options: RemoveRequestOptions) => {
        if (!this.state.afterTabsZones[options.targetId]) {
            return;
        }
        this.setState(s => {
            const newTabElementsObj = Object.keys(s.afterTabsZones).reduce((acc, targetId) => {
                if (targetId != options.targetId) {
                    acc[targetId] = s.afterTabsZones[targetId];
                }
                return acc;
            }, {});

            return {
                ...s,
                afterTabsZones: newTabElementsObj
            }
        });
    }

    public onRemoveTabHeaderButtonsRequested = (options: RemoveRequestOptions) => {
        if (!this.state.tabHeaderButtons[options.targetId]) {
            return;
        }
        this.setState(s => {
            const newTabElementsObj = Object.keys(s.tabHeaderButtons).reduce((acc, targetId) => {
                if (targetId != options.targetId) {
                    acc[targetId] = s.tabHeaderButtons[targetId];
                }
                return acc;
            }, {});

            return {
                ...s,
                tabHeaderButtons: newTabElementsObj
            }
        });
    }

    public onRemoveBelowTabsRequested = (options: RemoveRequestOptions) => {
        if (!this.state.belowTabsZones[options.targetId]) {
            return;
        }
        this.setState(s => {
            const newTabElementsObj = Object.keys(s.belowTabsZones).reduce((acc, targetId) => {
                if (targetId != options.targetId) {
                    acc[targetId] = s.belowTabsZones[targetId];
                }
                return acc;
            }, {});

            return {
                ...s,
                belowTabsZones: newTabElementsObj
            }
        });
    }

    public onRemoveHtmlButtonsRequested = (options: RemoveRequestOptions) => {
        if (!this.state.htmlButtons[options.targetId]) {
            return;
        }
        this.setState(s => {
            const newHtmlObj = Object.keys(s.htmlButtons).reduce((acc, targetId) => {
                if (targetId != options.targetId) {
                    acc[targetId] = s.htmlButtons[targetId];
                }
                return acc;
            }, {});

            return {
                ...s,
                htmlButtons: newHtmlObj
            }
        });
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

    public onShowLoadingAnimationRequested = (targetType: TargetType,targetId: string) => {
       if (targetType === TargetType.Frame) {
            this.onShowLoadingAnimation(targetId);
       } else {
            console.warn(`Loading animation for elements other than Frame are not supported`);
       }
    }

    public onHideLoadingAnimationRequested = (targetType: TargetType,targetId: string) => {
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

    private setState = (cb: (s: ElementCreationWrapperState) => ElementCreationWrapperState) => {
        this.state = cb(this.state);

        this.listeners.forEach((l) => l());
    }
}

export default new WebGroupsStore();