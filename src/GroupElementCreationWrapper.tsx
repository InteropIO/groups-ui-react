import React from "react";
import { useSyncExternalStore } from "use-sync-external-store/shim";
import GroupWrapper from "./GroupWrapper";
import Portal from "./Portal";
import { ChannelProps, GroupProps } from "./types/api";
import { Bounds, ElementCreationWrapperState, TargetType } from "./types/internal";
import { CustomButtonProps } from "./types/defaultComponents";
import webGroupsManager from "./webGroupsManager";
import webGroupsStore from "./webGroupsStore";
import FrameLoadingAnimation from "./defaultComponents/loadingAnimation/FrameLoadingAnimation";

const GroupElementCreationWrapper: React.FC<GroupProps> = ({ components }) => {
    const state = useSyncExternalStore<ElementCreationWrapperState>(webGroupsStore.subscribe, webGroupsStore.getSnapshot);
    const LoadingAnimation = components?.frame?.LoadingAnimation ?? FrameLoadingAnimation;

    const renderGroupCaptionBar = () => {
        const GroupCaptionBarCustomElement = components?.group?.CaptionBar;
        if (!GroupCaptionBarCustomElement || (!state.groupCaptionBar || !state.groupCaptionBar.parentElement)) {
            return;
        }

        const { parentElement, ...options } = state.groupCaptionBar;

        const minimize = {
            onClick: () => {
                webGroupsManager.onMinimizeButtonClick(TargetType.Group, options.targetId);
            },
            ...options.minimize
        }

        const restore = {
            onClick: () => {
                webGroupsManager.onRestoreButtonClick(TargetType.Group, options.targetId);
            },
            ...options.restore
        }

        const maximize = {
            onClick: () => {
                webGroupsManager.onMaximizeButtonClick(TargetType.Group, options.targetId);
            },
            ...options.maximize
        }

        const close = {
            onClick: () => {
                webGroupsManager.onCloseButtonClick(TargetType.Group, options.targetId);
            },
            ...options.close
        }

        const captionEditor = {
            ...options.captionEditor,
            commitChanges: (text: string) => {
                webGroupsManager.commitCaptionEditing(TargetType.Group, options.targetId, text);
            },
            hideEditor: () => {
                webGroupsStore.onHideCaptionEditorRequested(TargetType.Group, options.targetId);
            },
            notifyBoundsChanged: (bounds: Bounds) => {
                webGroupsManager.onCaptionEditorBoundsChanged(TargetType.Group, options.targetId, bounds);
            },
            notifyEditorVisibilityChanged: (visible: boolean) => {
                webGroupsManager.onCaptionEditorVisibleChanged(TargetType.Group, options.targetId, visible);
            }
        };

        const notifyCaptionBoundsChanged = (bounds: Bounds) => webGroupsManager.onCaptionTextBoundsChanged(TargetType.Group, options.targetId, bounds);

        return (
            <Portal parentElement={parentElement}>
                <GroupCaptionBarCustomElement {...options}
                    minimize={minimize}
                    maximize={maximize}
                    restore={restore}
                    close={close}
                    captionEditor={captionEditor}
                    notifyCaptionBoundsChanged={notifyCaptionBoundsChanged} />
            </Portal>
        );
    }

    const renderGroupOverlay = () => {
        const GroupOverlayCustomElement = components?.group?.Overlay;
        if (!GroupOverlayCustomElement || (!state.groupOverlay || !state.groupOverlay.parentElement)) {
            return;
        }

        const { parentElement, ...options } = state.groupOverlay;


        return <Portal parentElement={parentElement}><GroupOverlayCustomElement {...options} /></Portal>;
    }

    const renderFrameCaptionBar = () => {
        const FrameCaptionBarCustomElement = components?.flat?.CaptionBar;
        return Object.values(state.frameCaptionBars).map((fcb) => {
            if (!FrameCaptionBarCustomElement || !fcb.parentElement) {
                return;
            }

            const { parentElement, ...options } = fcb;

            const feedback = {
                onClick: () => {
                    webGroupsManager.onFeedbackButtonClick(TargetType.Frame, options.targetId);
                },
                ...options.feedback
            };

            const clone = {
                onClick: () => {
                    webGroupsManager.onCloneButtonClick(TargetType.Frame, options.targetId);
                },
                ...options.clone
            };

            const sticky = {
                onClick: () => {
                    webGroupsManager.onStickyButtonClick(TargetType.Frame, options.targetId);
                },
                ...options.sticky
            };

            const extract = {
                onClick: () => {
                    webGroupsManager.onExtractButtonClick(TargetType.Frame, options.targetId);
                },
                ...options.extract
            };

            const lock = {
                onClick: () => {
                    webGroupsManager.onLockButtonClick(TargetType.Frame, options.targetId);
                },
                ...options.lock
            };

            const unlock = {
                onClick: () => {
                    webGroupsManager.onUnlockButtonClick(TargetType.Frame, options.targetId);
                },
                ...options.unlock
            };

            const minimize = {
                onClick: () => {
                    webGroupsManager.onMinimizeButtonClick(TargetType.Frame, options.targetId);
                },
                ...options.minimize
            }

            const restore = {
                onClick: () => {
                    webGroupsManager.onRestoreButtonClick(TargetType.Frame, options.targetId);
                },
                ...options.restore
            }

            const maximize = {
                onClick: () => {
                    webGroupsManager.onMaximizeButtonClick(TargetType.Frame, options.targetId);
                },
                ...options.maximize
            }

            const close = {
                onClick: () => {
                    webGroupsManager.onCloseButtonClick(TargetType.Frame, options.targetId);
                },
                ...options.close
            }

            let customButtonsProps = new Array<CustomButtonProps>();
            if (options.customButtons) {
                customButtonsProps = options.customButtons.map((cButton) => {
                    return {
                        onClick: () => {
                            webGroupsManager.clickCustomButton(options.targetId, cButton.buttonId);
                        },
                        visible: true,
                        imageData: cButton.imageData,
                        tooltip: cButton.tooltip,
                        buttonId: cButton.buttonId
                    }
                });
            }

            const showSelector = (bounds: Bounds) => {
                webGroupsManager.onFrameChannelSelectorClick(options.targetId, bounds);
            }

            const channels = {
                showSelector,
                visible: options.channelSelectorVisible,
                selectedChannel: options.selectedChannel,
                selectedChannelColor: options.selectedChannelColor,
                channelsMode: options.channelsMode ?? "single",
                selectedChannels : options.selectedChannels
            }

            const captionEditor = {
                ...options.captionEditor,
                commitChanges: (text: string) => {
                    webGroupsManager.commitCaptionEditing(TargetType.Frame, options.targetId, text);
                },
                hideEditor: () => {
                    webGroupsStore.onHideCaptionEditorRequested(TargetType.Frame, options.targetId);
                },
                notifyBoundsChanged: (bounds: Bounds) => {
                    webGroupsManager.onCaptionEditorBoundsChanged(TargetType.Frame, options.targetId, bounds);
                },
                notifyEditorVisibilityChanged: (visible: boolean) => {
                    webGroupsManager.onCaptionEditorVisibleChanged(TargetType.Frame, options.targetId, visible);
                }
            };

            const notifyCaptionBoundsChanged = (bounds: Bounds) => webGroupsManager.onCaptionTextBoundsChanged(TargetType.Frame, options.targetId, bounds);

            return <Portal key={options.targetId} parentElement={parentElement}>
                <FrameCaptionBarCustomElement {...options}
                    feedback={feedback}
                    clone={clone}
                    sticky={sticky}
                    extract={extract}
                    lock={lock}
                    unlock={unlock}
                    minimize={minimize}
                    maximize={maximize}
                    restore={restore}
                    close={close}
                    channels={channels}
                    customButtons={customButtonsProps}
                    frameId={options.targetId}
                    captionEditor={captionEditor}
                    notifyCaptionBoundsChanged={notifyCaptionBoundsChanged} />
            </Portal>
        });
    }

    const renderFrameWindowOverlay = () => {
        const FrameWindowOverlayCustomElement = components?.frame?.Overlay;
        return Object.values(state.frameWindowOverlays).map((fcb) => {
            if (!FrameWindowOverlayCustomElement || !fcb.parentElement) {
                return;
            }

            const { parentElement, ...options } = fcb;

            return <Portal key={options.targetId} parentElement={parentElement}>
                <FrameWindowOverlayCustomElement {...options} frameId={options.targetId} />
            </Portal>
        });
    }

    const renderAboveWindow = () => {
        const AboveWindowCustomElement = components?.frame?.AboveWindow;
        return Object.values(state.aboveWindowZones).map((awz) => {
            if (!AboveWindowCustomElement || !awz.parentElement) {
                return;
            }
            const { parentElement, ...options } = awz;

            return <Portal key={options.targetId} parentElement={parentElement}>
                <AboveWindowCustomElement {...options} frameId={options.targetId} />
            </Portal>
        });
    }

    const renderWindowContentOverlays = () => {
        const WindowContentCustomElement = components?.frame?.WindowContentOverlay;
        return Object.values(state.windowContentOverlays).map((wco) => {
            if (!WindowContentCustomElement || !wco.parentElement) {
                return;
            }
            const { parentElement, ...options } = wco;

            return <Portal key={options.targetId} parentElement={parentElement}>
                <WindowContentCustomElement {...options} frameId={options.targetId} />
            </Portal>
        });
    }

    const renderFrameLoadingAnimations = () => {
        const LoadingAnimationCustomElement = LoadingAnimation;
        return Object.values(state.frameLoadingAnimations).map((wla) => {
            if (!LoadingAnimationCustomElement || !wla.parentElement) {
                return;
            }
            const { parentElement, ...options } = wla;

            return <Portal key={options.targetId} parentElement={parentElement}>
                <LoadingAnimationCustomElement {...options} frameId={options.targetId} />
            </Portal>
        });
    }

    const renderBelowWindow = () => {
        const BelowWindowCustomElement = components?.frame?.BelowWindow;
        return Object.values(state.belowWindowZones).map((bwz) => {
            if (!BelowWindowCustomElement || !bwz.parentElement) {
                return;
            }
            const { parentElement, ...options } = bwz;

            return <Portal key={options.targetId} parentElement={parentElement}>
                <BelowWindowCustomElement {...options} frameId={options.targetId} />
            </Portal>
        });
    }

    const renderAboveTabs = () => {
        const AboveTabsCustomElement = components?.tabs?.Above;

        return Object.values(state.aboveTabsZones).map((te) => {
            if (!AboveTabsCustomElement || !te.parentElement) {
                return;
            }

            const { parentElement, ...options } = te;
            return <Portal key={options.targetId} parentElement={parentElement}><AboveTabsCustomElement {...options} frameId={options.targetId} /></Portal>
        });
    }

    const renderBeforeTabsZones = () => {
        const BeforeTabsCustomElement = components?.tabs?.Before;

        return Object.values(state.beforeTabsZones).map((te) => {
            if (!BeforeTabsCustomElement || !te.parentElement) {
                return;
            }

            const { parentElement, ...options } = te;
            return <Portal key={options.targetId} parentElement={parentElement}><BeforeTabsCustomElement {...options} frameId={options.targetId} /></Portal>
        });
    }

    const renderTabElements = () => {
        const TabCustomElement = components?.tabs?.Element;

        return Object.values(state.tabElements).map((te) => {
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
                selectedChannelColor: options.selectedChannelColor ?? options.selectedChannel, // TODO remove the null check when the variable has been added
                channelsMode: options.channelsMode ?? "single",
                selectedChannels: options.selectedChannels
            };

            const captionEditor = {
                ...options.captionEditor,
                commitChanges: (text: string) => {
                    webGroupsManager.commitCaptionEditing(TargetType.Tab, options.targetId, text);
                },
                hideEditor: () => {
                    webGroupsStore.onHideCaptionEditorRequested(TargetType.Tab, options.targetId);
                },
                notifyBoundsChanged: (bounds: Bounds) => {
                    webGroupsManager.onCaptionEditorBoundsChanged(TargetType.Tab, options.targetId, bounds);
                },
                notifyEditorVisibilityChanged: (visible: boolean) => {
                    webGroupsManager.onCaptionEditorVisibleChanged(TargetType.Tab, options.targetId, visible);
                }
            };

            const notifyCaptionBoundsChanged = (bounds: Bounds) => webGroupsManager.onCaptionTextBoundsChanged(TargetType.Tab, options.targetId, bounds);

            const addContainerClass = (className: string) => {
                webGroupsManager.addTabContainerClass(options.targetId, className);
            }

            const removeContainerClass = (className: string) => {
                webGroupsManager.removeTabContainerClass(options.targetId, className);
            }

            return <Portal key={options.targetId} parentElement={parentElement}>
                <TabCustomElement {...options}
                    close={onCloseClick}
                    channels={channels}
                    windowId={options.targetId}
                    captionEditor={captionEditor}
                    notifyCaptionBoundsChanged={notifyCaptionBoundsChanged}
                    addContainerClass={addContainerClass}
                    removeContainerClass={removeContainerClass}
                />
            </Portal>
        });
    }

    const renderAfterTabsZones = () => {
        const AfterTabsCustomElement = components?.tabs?.After;

        return Object.values(state.afterTabsZones).map((te) => {
            if (!AfterTabsCustomElement || !te.parentElement) {
                return;
            }

            const { parentElement, ...options } = te;
            return <Portal key={options.targetId} parentElement={parentElement}><AfterTabsCustomElement {...options} frameId={options.targetId} /></Portal>
        });
    }

    const renderTabHeaderButtons = () => {
        const TabButtonsCustomElement = components?.tabs?.Buttons;

        return Object.values(state.tabHeaderButtons).map((te) => {
            if (!TabButtonsCustomElement || !te.parentElement) {
                return;
            }
            const { parentElement, ...options } = te;

            const overflow = {
                onClick: () => {
                    webGroupsManager.onOverflowButtonClick(TargetType.TabBar, options.targetId);
                },
                ...options.overflow
            };

            const feedback = {
                onClick: () => {
                    webGroupsManager.onFeedbackButtonClick(TargetType.TabBar, options.targetId);
                },
                ...options.feedback
            };

            const clone = {
                onClick: () => {
                    webGroupsManager.onCloneButtonClick(TargetType.TabBar, options.targetId);
                },
                ...options.clone
            };

            const sticky = {
                onClick: () => {
                    webGroupsManager.onStickyButtonClick(TargetType.TabBar, options.targetId);
                },
                ...options.sticky
            };

            const extract = {
                onClick: () => {
                    webGroupsManager.onExtractButtonClick(TargetType.TabBar, options.targetId);
                },
                ...options.extract
            };

            const lock = {
                onClick: () => {
                    webGroupsManager.onLockButtonClick(TargetType.TabBar, options.targetId);
                },
                ...options.lock
            }

            const unlock = {
                onClick: () => {
                    webGroupsManager.onUnlockButtonClick(TargetType.TabBar, options.targetId);
                },
                ...options.unlock
            }

            const minimize = {
                onClick: () => {
                    webGroupsManager.onMinimizeButtonClick(TargetType.TabBar, options.targetId);
                },
                ...options.minimize
            }

            const restore = {
                onClick: () => {
                    webGroupsManager.onRestoreButtonClick(TargetType.TabBar, options.targetId);
                },
                ...options.restore
            }

            const maximize = {
                onClick: () => {
                    webGroupsManager.onMaximizeButtonClick(TargetType.TabBar, options.targetId);
                },
                ...options.maximize
            }

            const close = {
                onClick: () => {
                    webGroupsManager.onCloseButtonClick(TargetType.TabBar, options.targetId);
                },
                ...options.close
            }

            let customButtonsProps = new Array<CustomButtonProps>();
            if (options.customButtons) {
                customButtonsProps = options.customButtons.map((cButton) => {
                    return {
                        onClick: () => {
                            webGroupsManager.clickCustomButton(options.targetId, cButton.buttonId);
                        },
                        visible: true,
                        imageData: cButton.imageData,
                        tooltip: cButton.tooltip,
                        buttonId: cButton.buttonId
                    }
                });
            }

            return <Portal key={options.targetId} parentElement={parentElement}><TabButtonsCustomElement {...options}
                overflow={overflow}
                feedback={feedback}
                clone={clone}
                sticky={sticky}
                extract={extract}
                lock={lock}
                unlock={unlock}
                minimize={minimize}
                maximize={maximize}
                restore={restore}
                close={close}
                customButtons={customButtonsProps}
                frameId={options.targetId}
            /></Portal>
        });
    }

    const renderTabOverflowPopups = () => {
        const TabOverflowCustomElement = components?.tabs?.OverflowPopup;

        return Object.values(state.tabOverflowPopups).map((top) => {
            if (!TabOverflowCustomElement || !top.parentElement) {
                return;
            }
            const { parentElement, ...options } = top;

            const select = (windowId: string) => {
                webGroupsManager.selectTab(windowId);
            };

            const close = (windowId: string) => {
                webGroupsManager.closeTab(windowId);
            }

            return <Portal key={options.targetId} parentElement={parentElement}><TabOverflowCustomElement {...options}
                select={select}
                close={close}
                frameId={options.targetId}
            /></Portal>
        });
    }

    const renderBelowTabs = () => {
        const BelowTabsCustomElement = components?.tabs?.Below;

        return Object.values(state.belowTabsZones).map((te) => {
            if (!BelowTabsCustomElement || !te.parentElement) {
                return;
            }

            const { parentElement, ...options } = te;
            return <Portal key={options.targetId} parentElement={parentElement}><BelowTabsCustomElement {...options} frameId={options.targetId} /></Portal>
        });
    }

    const renderHtmlButtons = () => {
        const HtmlButtonsCustomElement = components?.html?.Buttons;

        return Object.values(state.htmlButtons).map((te) => {
            if (!HtmlButtonsCustomElement || !te.parentElement) {
                return;
            }
            const { parentElement, ...options } = te;

            const overflow = {
                onClick: () => {
                    webGroupsManager.onOverflowButtonClick(TargetType.HtmlButtons, options.targetId);
                },
                ...options.overflow
            };

            const feedback = {
                onClick: () => {
                    webGroupsManager.onFeedbackButtonClick(TargetType.HtmlButtons, options.targetId);
                },
                ...options.feedback
            };

            const clone = {
                onClick: () => {
                    webGroupsManager.onCloneButtonClick(TargetType.HtmlButtons, options.targetId);
                },
                ...options.clone
            };

            const sticky = {
                onClick: () => {
                    webGroupsManager.onStickyButtonClick(TargetType.HtmlButtons, options.targetId);
                },
                ...options.sticky
            };

            const extract = {
                onClick: () => {
                    webGroupsManager.onExtractButtonClick(TargetType.HtmlButtons, options.targetId);
                },
                ...options.extract
            };

            const lock = {
                onClick: () => {
                    webGroupsManager.onLockButtonClick(TargetType.HtmlButtons, options.targetId);
                },
                ...options.lock
            }

            const unlock = {
                onClick: () => {
                    webGroupsManager.onUnlockButtonClick(TargetType.HtmlButtons, options.targetId);
                },
                ...options.unlock
            }

            const minimize = {
                onClick: () => {
                    webGroupsManager.onMinimizeButtonClick(TargetType.HtmlButtons, options.targetId);
                },
                ...options.minimize
            }

            const restore = {
                onClick: () => {
                    webGroupsManager.onRestoreButtonClick(TargetType.HtmlButtons, options.targetId);
                },
                ...options.restore
            }

            const maximize = {
                onClick: () => {
                    webGroupsManager.onMaximizeButtonClick(TargetType.HtmlButtons, options.targetId);
                },
                ...options.maximize
            }

            const close = {
                onClick: () => {
                    webGroupsManager.onCloseButtonClick(TargetType.HtmlButtons, options.targetId);
                },
                ...options.close
            }

            let customButtonsProps = new Array<CustomButtonProps>();
            if (options.customButtons) {
                customButtonsProps = options.customButtons.map((cButton) => {
                    return {
                        onClick: () => {
                            webGroupsManager.clickCustomButton(options.targetId, cButton.buttonId);
                        },
                        visible: true,
                        imageData: cButton.imageData,
                        tooltip: cButton.tooltip,
                        buttonId: cButton.buttonId
                    }
                });
            }

            return <Portal key={options.targetId} parentElement={parentElement}><HtmlButtonsCustomElement {...options}
                overflow={overflow}
                feedback={feedback}
                clone={clone}
                sticky={sticky}
                extract={extract}
                lock={lock}
                unlock={unlock}
                minimize={minimize}
                maximize={maximize}
                restore={restore}
                close={close}
                customButtons={customButtonsProps}
                frameId={options.targetId}
            /></Portal>
        });
    }

    return <>
        {renderGroupCaptionBar()}
        {renderGroupOverlay()}
        {renderFrameCaptionBar()}
        {renderFrameWindowOverlay()}
        {renderAboveWindow()}
        {renderWindowContentOverlays()}
        {renderFrameLoadingAnimations()}
        {renderBelowWindow()}
        {renderAboveTabs()}
        {renderBeforeTabsZones()}
        {renderTabElements()}
        {renderAfterTabsZones()}
        {renderTabHeaderButtons()}
        {renderTabOverflowPopups()}
        {renderBelowTabs()}
        {renderHtmlButtons()}
        <GroupWrapper
            onCreateGroupCaptionBarRequested={components?.group?.CaptionBar ? webGroupsStore.onCreateGroupCaptionBarRequested : undefined}
            onCreateGroupOverlayRequested={components?.group?.Overlay ? webGroupsStore.onCreateGroupOverlayRequested : undefined}
            onCreateFrameCaptionBarRequested={components?.flat?.CaptionBar ? webGroupsStore.onCreateFrameCaptionBarRequested : undefined}
            onCreateFrameWindowOverlayRequested={components?.frame?.Overlay ? webGroupsStore.onCreateFrameWindowOverlayRequested : undefined}
            onCreateAboveWindowRequested={components?.frame?.AboveWindow ? webGroupsStore.onCreateAboveWindowRequested : undefined}
            onCreateWindowContentOverlayRequested={components?.frame?.WindowContentOverlay ? webGroupsStore.onCreateWindowContentOverlayRequested : undefined}
            onCreateFrameLoadingAnimationRequested={LoadingAnimation ? webGroupsStore.onCreateFrameLoadingAnimationRequested : undefined}
            onCreateBelowWindowRequested={components?.frame?.BelowWindow ? webGroupsStore.onCreateBelowWindowRequested : undefined}
            onCreateAboveTabsRequested={components?.tabs?.Above ? webGroupsStore.onCreateAboveTabsComponentRequested : undefined}
            onCreateBeforeTabsComponentRequested={components?.tabs?.Before ? webGroupsStore.onCreateBeforeTabsComponentRequested : undefined}
            onCreateTabRequested={components?.tabs?.Element ? webGroupsStore.onCreateTabElementRequested : undefined}
            onCreateAfterTabsComponentRequested={components?.tabs?.After ? webGroupsStore.onCreateAfterTabsComponentRequested : undefined}
            onCreateTabHeaderButtonsRequested={components?.tabs?.Buttons ? webGroupsStore.onCreateTabHeaderButtonsRequested : undefined}
            onCreateBelowTabsRequested={components?.tabs?.Below ? webGroupsStore.onCreateBelowTabsComponentRequested : undefined}
            onCreateHtmlButtonsRequested={components?.html?.Buttons ? webGroupsStore.onCreateHtmlButtonsRequested : undefined}
            onCreateTabOverflowPopupRequested={components?.tabs?.OverflowPopup ? webGroupsStore.onCreateTabOverflowPopupRequested : undefined}
            onUpdateGroupCaptionBarRequested={components?.group?.CaptionBar ? webGroupsStore.onUpdateGroupCaptionBarRequested : undefined}
            onUpdateFrameWindowOverlayRequested={components?.group?.Overlay ? webGroupsStore.onUpdateFrameWindowOverlayRequested : undefined}
            onUpdateFrameCaptionBarRequested={components?.flat?.CaptionBar ? webGroupsStore.onUpdateFrameCaptionBarRequested : undefined}
            onUpdateFrameRequested={webGroupsStore.onUpdateFrame}
            onUpdateStandardButtonRequested={webGroupsStore.onUpdateStandardButton}
            onUpdateCustomButtonsRequested={webGroupsStore.onUpdateCustomButtons}
            onUpdateAboveTabsRequested={components?.tabs?.Above ? webGroupsStore.onUpdateAboveTabsRequested : undefined}
            onUpdateBeforeTabsComponentRequested={components?.tabs?.Before ? webGroupsStore.onUpdateBeforeTabsRequested : undefined}
            onUpdateTabRequested={components?.tabs?.Element ? webGroupsStore.onUpdateTabElementRequested : undefined}
            onUpdateAfterTabsComponentRequested={components?.tabs?.After ? webGroupsStore.onUpdateAfterTabsRequested : undefined}
            onUpdateBelowTabsRequested={components?.tabs?.Below ? webGroupsStore.onUpdateBelowTabsRequested : undefined}
            onRemoveFrameCaptionBarRequested={webGroupsStore.onRemoveFrameCaptionBarRequested}
            onRemoveFrameWindowOverlayRequested={webGroupsStore.onRemoveFrameWindowOverlayRequested}
            onRemoveAboveWindowRequested={webGroupsStore.onRemoveAboveWindowRequested}
            onRemoveWindowContentOverlayRequested={webGroupsStore.onRemoveWindowContentOverlayRequested}
            onRemoveFrameLoadingAnimationRequested={webGroupsStore.onRemoveFrameLoadingAnimationRequested}
            onRemoveBelowWindowRequested={webGroupsStore.onRemoveBelowWindowRequested}
            onRemoveAboveTabsRequested={webGroupsStore.onRemoveAboveTabsRequested}
            onRemoveBeforeTabsComponentRequested={webGroupsStore.onRemoveBeforeTabsComponentRequested}
            onRemoveTabRequested={webGroupsStore.onRemoveTabElementRequested}
            onRemoveAfterTabsComponentRequested={webGroupsStore.onRemoveAfterTabsComponentRequested}
            onRemoveTabHeaderButtonsRequested={webGroupsStore.onRemoveTabHeaderButtonsRequested}
            onRemoveBelowTabsRequested={webGroupsStore.onRemoveBelowTabsRequested}
            onRemoveHtmlButtonsRequested={webGroupsStore.onRemoveHtmlButtonsRequested}
            onRemoveTabOverflowPopupRequested={webGroupsStore.onRemoveTabOverflowPopupRequested}
            onShowCaptionEditorRequested={webGroupsStore.onShowCaptionEditorRequested}
            onCommitCaptionEditingRequested={webGroupsStore.onCommitCaptionEditingRequested}
            onHideCaptionEditorRequested={webGroupsStore.onHideCaptionEditorRequested}
            onShowLoadingAnimationRequested={webGroupsStore.onShowLoadingAnimationRequested}
            onHideLoadingAnimationRequested={webGroupsStore.onHideLoadingAnimationRequested}
        />
    </>
}

export default GroupElementCreationWrapper;
