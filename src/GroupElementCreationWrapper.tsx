import React from "react";
import GroupWrapper from "./GroupWrapper";
import Portal from "./Portal";
import { GroupProps, ElementCreationWrapperState, CreateGroupCaptionBarRequestOptions, CreateFrameCaptionBarRequestOptions, CreateTabRequestOptions, RemoveRequestOptions, UpdateGroupCaptionBarRequestOptions, UpdateFrameCaptionBarRequestOptions, CreateTabHeaderButtonsOptions, UpdateStandardButtonRequestOptions, TargetType, Bounds, ChannelProps, CreateElementRequestOptions, CreateFrameElementRequestOptions, UpdateFrameRequestionOptions as UpdateFrameRequestOptions } from "./types/internal";
import webGroupsManager from "./webGroupsManager";

class GroupElementCreationWrapper extends React.Component<GroupProps, ElementCreationWrapperState> {
    constructor(props: GroupProps) {
        super(props);
        this.state = {
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
        };
    }

    onCreateGroupCaptionBarRequested = (options: CreateGroupCaptionBarRequestOptions) => {
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

    onCreateGroupOverlayRequested = (options: CreateElementRequestOptions) => {
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

    onCreateFrameCaptionBarRequested = (options: CreateFrameCaptionBarRequestOptions) => {
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

    onCreateFrameWindowOverlayRequested = (options: CreateFrameElementRequestOptions) => {
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

    onCreateBelowWindowRequested = (options: CreateFrameElementRequestOptions) => {
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

    onCreateAboveTabsComponentRequested = (options: CreateFrameElementRequestOptions) => {
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

    onCreateBeforeTabsComponentRequested = (options: CreateFrameElementRequestOptions) => {
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

    onCreateTabElementRequested = (options: CreateTabRequestOptions) => {
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

    onCreateAfterTabsComponentRequested = (options: CreateFrameElementRequestOptions) => {
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

    onCreateTabHeaderButtonsRequested = (options: CreateTabHeaderButtonsOptions) => {
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

    onCreateBelowTabsComponentRequested = (options: CreateFrameElementRequestOptions) => {
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

    onUpdateGroupCaptionBarRequested = (options: UpdateGroupCaptionBarRequestOptions) => {
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

    onUpdateFrameCaptionBarRequested = (options: UpdateFrameCaptionBarRequestOptions) => {
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

    onUpdateFrameWindowOverlayRequested = (options: CreateElementRequestOptions) => {
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

    onUpdateAboveTabsRequested = (options: CreateElementRequestOptions) => {
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

    onUpdateBeforeTabsRequested = (options: CreateElementRequestOptions) => {
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

    onUpdateTabElementRequested = (options: CreateTabRequestOptions) => {
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

    onUpdateAfterTabsRequested = (options: CreateElementRequestOptions) => {
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

    onUpdateTabHeaderButtonsRequested = (options: CreateTabHeaderButtonsOptions) => {
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

    onUpdateBelowTabsRequested = (options: CreateElementRequestOptions) => {
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

    onUpdateFrame = (options: UpdateFrameRequestOptions) => {
        this.setState(s => {
            const newState = { ...s };

            if (s.frameWindowOverlays[options.targetId] && s.frameWindowOverlays[options.targetId]?.selectedWindow != options.selectedWindow) {
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

    onUpdateStandardButton = (options: UpdateStandardButtonRequestOptions) => {
        const isCaptionBar = this.state.groupCaptionBar?.targetId === options.targetId;
        const isFrame = this.state.frameCaptionBars[options.targetId];
        const isTabHeaderButtons = this.state.tabHeaderButtons[options.targetId];
        if (isCaptionBar) {
            const newOptions = {
                ... this.state.groupCaptionBar,
                [options.buttonId]: {
                    ...options
                }
            };
            this.onUpdateGroupCaptionBarRequested(newOptions as UpdateGroupCaptionBarRequestOptions);
        } else if (isFrame && options.targetType === TargetType.Frame) {
            const newOptions = {
                ... this.state.frameCaptionBars[options.targetId],
                [options.buttonId]: {
                    ...options
                }
            };
            this.onUpdateFrameCaptionBarRequested(newOptions);
        } else if (isTabHeaderButtons && options.targetType === TargetType.TabBar) {
            const newOptions = {
                ... this.state.tabHeaderButtons[options.targetId],
                [options.buttonId]: {
                    ...options
                }
            };

            this.onUpdateTabHeaderButtonsRequested(newOptions);
        }
    }

    renderGroupCaptionBar = () => {
        const GroupCaptionBarCustomElement = this.props.components?.group?.CaptionBar;
        if (!GroupCaptionBarCustomElement || (!this.state.groupCaptionBar || !this.state.groupCaptionBar.parentElement)) {
            return;
        }

        const { parentElement, ...options } = this.state.groupCaptionBar;

        const minimize = {
            onClick: () => {
                webGroupsManager.minimizeGroup(options.targetId);
            },
            ...options.minimize
        }

        const restore = {
            onClick: () => {
                webGroupsManager.restoreGroup(options.targetId);
            },
            ...options.restore
        }

        const maximize = {
            onClick: () => {
                webGroupsManager.maximizeGroup(options.targetId);
            },
            ...options.maximize
        }

        const close = {
            onClick: () => {
                webGroupsManager.closeGroup(options.targetId);
            },
            ...options.close
        }

        return <Portal parentElement={parentElement}><GroupCaptionBarCustomElement {...options} minimize={minimize} maximize={maximize} restore={restore} close={close} /></Portal>;
    }

    renderGroupOverlay = () => {
        const GroupOverlayCustomElement = this.props.components?.group?.Overlay;
        if (!GroupOverlayCustomElement || (!this.state.groupOverlay || !this.state.groupOverlay.parentElement)) {
            return;
        }

        const { parentElement, ...options } = this.state.groupOverlay;


        return <Portal parentElement={parentElement}><GroupOverlayCustomElement {...options} /></Portal>;
    }

    renderFrameCaptionBar = () => {
        const FrameCaptionBarCustomElement = this.props.components?.flat?.CaptionBar;
        return Object.values(this.state.frameCaptionBars).map((fcb) => {
            if (!FrameCaptionBarCustomElement || !fcb.parentElement) {
                return;
            }

            const { parentElement, ...options } = fcb;

            // const extract = {
            //     onClick: () => {
            //         webGroupsManager.extractFrame(options.targetId);
            //     },
            //     ...options.extract
            // };

            const lock = {
                onClick: () => {
                    webGroupsManager.lockFrame(options.targetId);
                },
                ...options.lock
            };

            const unlock = {
                onClick: () => {
                    webGroupsManager.unlockFrame(options.targetId);
                },
                ...options.unlock
            };

            const minimize = {
                onClick: () => {
                    webGroupsManager.minimizeFrame(options.targetId);
                },
                ...options.minimize
            }

            const restore = {
                onClick: () => {
                    webGroupsManager.restoreFrame(options.targetId);
                },
                ...options.restore
            }

            const maximize = {
                onClick: () => {
                    webGroupsManager.maximizeFrame(options.targetId);
                },
                ...options.maximize
            }

            const close = {
                onClick: () => {
                    webGroupsManager.closeFrame(options.targetId);
                },
                ...options.close
            }

            const showSelector = (bounds: Bounds) => {
                webGroupsManager.onFrameChannelSelectorClick(options.targetId, bounds);
            }

            const channels = {
                showSelector,
                visible: options.channelSelectorVisible,
                selectedChannel: options.selectedChannel,
                selectedChannelColor: options.selectedChannelColor
            }

            return <Portal key={options.targetId} parentElement={parentElement}>
                <FrameCaptionBarCustomElement {...options}
                    lock={lock}
                    unlock={unlock}
                    minimize={minimize}
                    maximize={maximize}
                    restore={restore}
                    close={close}
                    channels={channels}
                    frameId={options.targetId} />
            </Portal>
        });
    }

    renderFrameWindowOverlay = () => {
        const FrameWindowOverlayCustomElement = this.props.components?.frame?.Overlay;
        return Object.values(this.state.frameWindowOverlays).map((fcb) => {
            if (!FrameWindowOverlayCustomElement || !fcb.parentElement) {
                return;
            }

            const { parentElement, ...options } = fcb;

            return <Portal key={options.targetId} parentElement={parentElement}>
                <FrameWindowOverlayCustomElement {...options} frameId={options.targetId} />
            </Portal>
        });
    }

    renderBelowWindow = () => {
        const BelowWindowCustomElement = this.props.components?.frame?.BelowWindow;
        return Object.values(this.state.belowWindowZones).map((bwz) => {
            if (!BelowWindowCustomElement || !bwz.parentElement) {
                return;
            }
            const { parentElement, ...options } = bwz;

            return <Portal key={options.targetId} parentElement={parentElement}>
                <BelowWindowCustomElement {...options} frameId={options.targetId} />
            </Portal>
        });
    }

    renderAboveTabs = () => {
        const AboveTabsCustomElement = this.props.components?.tabs?.Above;

        return Object.values(this.state.aboveTabsZones).map((te) => {
            if (!AboveTabsCustomElement || !te.parentElement) {
                return;
            }

            const { parentElement, ...options } = te;
            return <Portal key={options.targetId} parentElement={parentElement}><AboveTabsCustomElement {...options} frameId={options.targetId} /></Portal>
        });
    }

    renderBeforeTabsZones = () => {
        const BeforeTabsCustomElement = this.props.components?.tabs?.Before;

        return Object.values(this.state.beforeTabsZones).map((te) => {
            if (!BeforeTabsCustomElement || !te.parentElement) {
                return;
            }

            const { parentElement, ...options } = te;
            return <Portal key={options.targetId} parentElement={parentElement}><BeforeTabsCustomElement {...options} frameId={options.targetId} /></Portal>
        });
    }

    renderTabElements = () => {
        const TabCustomElement = this.props.components?.tabs?.Element;

        return Object.values(this.state.tabElements).map((te) => {
            if (!TabCustomElement || !te.parentElement) {
                return;
            }

            const { parentElement, ...options } = te;


            const onCloseClick = () => {
                webGroupsManager.closeTab(options.targetId);
            }

            const showSelector = (bounds: Bounds) => {
                webGroupsManager.onTabChannelSelectorClick(options.targetId, bounds);
            }

            const channels: ChannelProps = {
                showSelector,
                visible: options.channelSelectorVisible,
                selectedChannel: options.selectedChannel,
                selectedChannelColor: options.selectedChannelColor ?? options.selectedChannel // TODO remove the null check when the variable has been added
            };

            return <Portal key={options.targetId} parentElement={parentElement}><TabCustomElement {...options} close={onCloseClick} channels={channels} windowId={options.targetId} /></Portal>
        });
    }

    renderAfterTabsZones = () => {
        const AfterTabsCustomElement = this.props.components?.tabs?.After;

        return Object.values(this.state.afterTabsZones).map((te) => {
            if (!AfterTabsCustomElement || !te.parentElement) {
                return;
            }

            const { parentElement, ...options } = te;
            return <Portal key={options.targetId} parentElement={parentElement}><AfterTabsCustomElement {...options} frameId={options.targetId} /></Portal>
        });
    }

    renderTabHeaderButtons = () => {
        const TabButtonsCustomElement = this.props.components?.tabs?.Buttons;

        return Object.values(this.state.tabHeaderButtons).map((te) => {
            if (!TabButtonsCustomElement || !te.parentElement) {
                return;
            }
            const { parentElement, ...options } = te;

            // const extract = {
            //     onClick: () => {
            //         webGroupsManager.extractTabBar(options.targetId);
            //     },
            //     ...options.extract
            // };

            const lock = {
                onClick: () => {
                    webGroupsManager.lockTabBar(options.targetId);
                },
                ...options.lock
            }

            const unlock = {
                onClick: () => {
                    webGroupsManager.unlockTabBar(options.targetId);
                },
                ...options.unlock
            }

            const minimize = {
                onClick: () => {
                    webGroupsManager.minimizeTabBar(options.targetId);
                },
                ...options.minimize
            }

            const restore = {
                onClick: () => {
                    webGroupsManager.restoreTabBar(options.targetId);
                },
                ...options.restore
            }

            const maximize = {
                onClick: () => {
                    webGroupsManager.maximizeTabBar(options.targetId);
                },
                ...options.maximize
            }

            const close = {
                onClick: () => {
                    webGroupsManager.closeTabBar(options.targetId);
                },
                ...options.close
            }

            return <Portal key={options.targetId} parentElement={parentElement}><TabButtonsCustomElement {...options}
                lock={lock}
                unlock={unlock}
                minimize={minimize}
                maximize={maximize}
                restore={restore}
                close={close}
                frameId={options.targetId}
            /></Portal>
        });
    }

    renderBelowTabs = () => {
        const BelowTabsCustomElement = this.props.components?.tabs?.Below;

        return Object.values(this.state.belowTabsZones).map((te) => {
            if (!BelowTabsCustomElement || !te.parentElement) {
                return;
            }

            const { parentElement, ...options } = te;
            return <Portal key={options.targetId} parentElement={parentElement}><BelowTabsCustomElement {...options} frameId={options.targetId} /></Portal>
        });
    }

    onRemoveFrameCaptionBarRequested = (options: RemoveRequestOptions) => {
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

    onRemoveFrameWindowOverlayRequested = (options: RemoveRequestOptions) => {
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

    onRemoveBelowWindowRequested = (options: RemoveRequestOptions) => {
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

    onRemoveAboveTabsRequested = (options: RemoveRequestOptions) => {
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

    onRemoveBeforeTabsComponentRequested = (options: RemoveRequestOptions) => {
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

    onRemoveTabElementRequested = (options: RemoveRequestOptions) => {
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

    onRemoveAfterTabsComponentRequested = (options: RemoveRequestOptions) => {
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

    onRemoveTabHeaderButtonsRequested = (options: RemoveRequestOptions) => {
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

    onRemoveBelowTabsRequested = (options: RemoveRequestOptions) => {
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

    render() {
        const { components, ...additionalProperties } = this.props;
        return (
            <>
                {this.renderGroupCaptionBar()}
                {this.renderGroupOverlay()}
                {this.renderFrameCaptionBar()}
                {this.renderFrameWindowOverlay()}
                {this.renderBelowWindow()}
                {this.renderAboveTabs()}
                {this.renderBeforeTabsZones()}
                {this.renderTabElements()}
                {this.renderAfterTabsZones()}
                {this.renderTabHeaderButtons()}
                {this.renderBelowTabs()}
                <GroupWrapper
                    onCreateGroupCaptionBarRequested={components?.group?.CaptionBar ? this.onCreateGroupCaptionBarRequested : undefined}
                    onCreateGroupOverlayRequested={components?.group?.Overlay ? this.onCreateGroupOverlayRequested : undefined}
                    onCreateFrameCaptionBarRequested={components?.flat?.CaptionBar ? this.onCreateFrameCaptionBarRequested : undefined}
                    onCreateFrameWindowOverlayRequested={components?.frame?.Overlay ? this.onCreateFrameWindowOverlayRequested : undefined}
                    onCreateBelowWindowRequested={components?.frame?.BelowWindow ? this.onCreateBelowWindowRequested : undefined}
                    onCreateAboveTabsRequested={components?.tabs?.Above ? this.onCreateAboveTabsComponentRequested : undefined}
                    onCreateBeforeTabsComponentRequested={components?.tabs?.Before ? this.onCreateBeforeTabsComponentRequested : undefined}
                    onCreateTabRequested={components?.tabs?.Element ? this.onCreateTabElementRequested : undefined}
                    onCreateAfterTabsComponentRequested={components?.tabs?.After ? this.onCreateAfterTabsComponentRequested : undefined}
                    onCreateTabHeaderButtonsRequested={components?.tabs?.Buttons ? this.onCreateTabHeaderButtonsRequested : undefined}
                    onCreateBelowTabsRequested={components?.tabs?.Below ? this.onCreateBelowTabsComponentRequested : undefined}
                    onUpdateGroupCaptionBarRequested={components?.group?.CaptionBar ? this.onUpdateGroupCaptionBarRequested : undefined}
                    onUpdateFrameWindowOverlayRequested={components?.group?.Overlay ? this.onUpdateFrameWindowOverlayRequested : undefined}
                    onUpdateFrameCaptionBarRequested={components?.flat?.CaptionBar ? this.onUpdateFrameCaptionBarRequested : undefined}
                    onUpdateFrameRequested={this.onUpdateFrame}
                    onUpdateStandardButtonRequested={this.onUpdateStandardButton}
                    onUpdateAboveTabsRequested={components?.tabs?.Above ? this.onUpdateAboveTabsRequested : undefined}
                    onUpdateBeforeTabsComponentRequested={components?.tabs?.Before ? this.onUpdateBeforeTabsRequested : undefined}
                    onUpdateTabRequested={components?.tabs?.Element ? this.onUpdateTabElementRequested : undefined}
                    onUpdateAfterTabsComponentRequested={components?.tabs?.After ? this.onUpdateAfterTabsRequested : undefined}
                    onUpdateBelowTabsRequested={components?.tabs?.Below ? this.onUpdateBelowTabsRequested : undefined}
                    onRemoveFrameCaptionBarRequested={this.onRemoveFrameCaptionBarRequested}
                    onRemoveFrameWindowOverlayRequested={this.onRemoveFrameWindowOverlayRequested}
                    onRemoveBelowWindowRequested={this.onRemoveBelowWindowRequested}
                    onRemoveAboveTabsRequested={this.onRemoveAboveTabsRequested}
                    onRemoveBeforeTabsComponentRequested={this.onRemoveBeforeTabsComponentRequested}
                    onRemoveTabRequested={this.onRemoveTabElementRequested}
                    onRemoveAfterTabsComponentRequested={this.onRemoveAfterTabsComponentRequested}
                    onRemoveTabHeaderButtonsRequested={this.onRemoveTabHeaderButtonsRequested}
                    onRemoveBelowTabsRequested={this.onRemoveBelowTabsRequested}
                />
            </>
        );
    }
}

export default GroupElementCreationWrapper;
