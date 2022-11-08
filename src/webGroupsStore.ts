import {
    CreateElementRequestOptions,
    CreateFrameCaptionBarRequestOptions,
    CreateFrameElementRequestOptions,
    CreateGroupCaptionBarRequestOptions,
    CreateTabHeaderButtonsOptions,
    CreateTabRequestOptions,
    ElementCreationWrapperState,
    RemoveRequestOptions,
    TargetType,
    UpdateFrameCaptionBarRequestOptions,
    UpdateGroupCaptionBarRequestOptions,
    UpdateStandardButtonRequestOptions,
    UpdateFrameRequestOptions
} from "./types/internal";

class WebGroupsStore {

    private listeners = new Set<() => void>();
    private state: ElementCreationWrapperState = {
        groupCaptionBar: undefined,
        groupOverlay: undefined,
        frameCaptionBars: {}, // dict frameId to create caption bar options
        frameWindowOverlays: {}, // dict frameId to create options
        belowWindowZones: {}, // dict frameId to create options
        aboveTabsZones: {}, // dict frameId to create options
        beforeTabsZones: {}, // dict frameId to create before tabs zones options
        tabElements: {}, // dict windowId to create tab elements options
        afterTabsZones: {}, // dict frameId to after tabs zones options
        tabHeaderButtons: {}, // dict frameId to crate tab header buttons options
        belowTabsZones: {} // dict frameId to create options
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

    public onCreateTabHeaderButtonsRequested = (options: CreateTabHeaderButtonsOptions) => {
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

    public onUpdateTabHeaderButtonsRequested = (options: CreateTabHeaderButtonsOptions) => {
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

            if (s.frameCaptionBars[options.targetId] && s.frameCaptionBars[options.targetId]?.selectedWindow != options.selectedWindow) {
                newState.frameCaptionBars = {
                    ...s.frameCaptionBars,
                    [options.targetId]: { ...s.frameCaptionBars[options.targetId], selectedWindow: options.selectedWindow }
                }
            }

            if (s.frameWindowOverlays[options.targetId] && s.frameWindowOverlays[options.targetId]?.selectedWindow != options.selectedWindow) {
                newState.frameWindowOverlays = {
                    ...s.frameWindowOverlays,
                    [options.targetId]: { ...s.frameWindowOverlays[options.targetId], selectedWindow: options.selectedWindow }
                }
            }

            if (s.belowWindowZones[options.targetId] && s.belowWindowZones[options.targetId]?.selectedWindow != options.selectedWindow) {
                newState.belowWindowZones = {
                    ...s.belowWindowZones,
                    [options.targetId]: { ...s.belowWindowZones[options.targetId], selectedWindow: options.selectedWindow }
                }
            }

            if (s.aboveTabsZones[options.targetId] && s.frameWindowOverlays[options.targetId]?.selectedWindow != options.selectedWindow) {
                newState.aboveTabsZones = {
                    ...s.aboveTabsZones,
                    [options.targetId]: { ...s.aboveTabsZones[options.targetId], selectedWindow: options.selectedWindow }
                }
            }

            if (s.beforeTabsZones[options.targetId] && s.frameWindowOverlays[options.targetId]?.selectedWindow != options.selectedWindow) {
                newState.beforeTabsZones = {
                    ...s.beforeTabsZones,
                    [options.targetId]: { ...s.beforeTabsZones[options.targetId], selectedWindow: options.selectedWindow }
                }
            }

            if (s.afterTabsZones[options.targetId] && s.frameWindowOverlays[options.targetId]?.selectedWindow != options.selectedWindow) {
                newState.afterTabsZones = {
                    ...s.afterTabsZones,
                    [options.targetId]: { ...s.afterTabsZones[options.targetId], selectedWindow: options.selectedWindow }
                }
            }

            if (s.tabHeaderButtons[options.targetId] && s.frameWindowOverlays[options.targetId]?.selectedWindow != options.selectedWindow) {
                newState.tabHeaderButtons = {
                    ...s.tabHeaderButtons,
                    [options.targetId]: { ...s.tabHeaderButtons[options.targetId], selectedWindow: options.selectedWindow }
                }
            }

            if (s.belowTabsZones[options.targetId] && s.frameWindowOverlays[options.targetId]?.selectedWindow != options.selectedWindow) {
                newState.belowTabsZones = {
                    ...s.belowTabsZones,
                    [options.targetId]: { ...s.belowTabsZones[options.targetId], selectedWindow: options.selectedWindow }
                }
            }

            return newState;
        });
    }

    public onUpdateStandardButton = (options: UpdateStandardButtonRequestOptions) => {
        const isCaptionBar = options.targetType === TargetType.Group; //this.state.groupCaptionBar?.targetId === options.targetId;
        const isFrame = options.targetType === TargetType.Frame;
        const isTabHeaderButtons = options.targetType === TargetType.TabBar;

        if (isCaptionBar) {
            const currentState = this.state.groupCaptionBar || { targetId: options.targetId } as CreateGroupCaptionBarRequestOptions;
            const newOptions = {
                ...currentState,
                [options.buttonId]: {
                    ...options
                }
            };
            this.onUpdateGroupCaptionBarRequested(newOptions as UpdateGroupCaptionBarRequestOptions);
        } else if (isFrame && options.targetType === TargetType.Frame) {
            const currentState = this.state.frameCaptionBars[options.targetId] || { targetId: options.targetId } as CreateTabHeaderButtonsOptions;
            const newOptions = {
                ...currentState,
                [options.buttonId]: {
                    ...options
                }
            };
            this.onUpdateFrameCaptionBarRequested(newOptions);
        } else if (isTabHeaderButtons && options.targetType === TargetType.TabBar) {
            const currentState = this.state.tabHeaderButtons[options.targetId] || { targetId: options.targetId } as CreateTabHeaderButtonsOptions;
            const newOptions = {
                ...currentState,
                [options.buttonId]: {
                    ...options
                }
            };

            this.onUpdateTabHeaderButtonsRequested(newOptions);
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

    private setState = (cb: (s: ElementCreationWrapperState) => ElementCreationWrapperState) => {
        this.state = cb(this.state);

        this.listeners.forEach((l) => l());
    }

}

export default new WebGroupsStore();