import React from "react";
import GroupWrapper from "./GroupWrapper";
import Portal from "./Portal";
import { GroupProps, ElementCreationWrapperState, CreateGroupCaptionBarRequestOptions, CreateFrameCaptionBarRequestOptions, CreateTabRequestOptions, RemoveRequestOptions, CreateBeforeTabsZoneRequestOptions, CreateAfterTabsZoneRequestOptions, UpdateGroupCaptionBarRequestOptions, UpdateFrameCaptionBarRequestOptions, CreateTabHeaderButtonsOptions } from "./types/internal";
import webGroupsManager from "./webGroupsManager";

class GroupElementCreationWrapper extends React.Component<GroupProps, ElementCreationWrapperState> {
    constructor(props: GroupProps) {
        super(props);
        this.state = {
            groupCaptionBar: undefined,
            frameCaptionBars: {}, // dict frameId to create caption bar options
            beforeTabsZones: {}, // dict frameId to create before tabs zones options
            tabElements: {}, // dict windowId to create tab elements options
            afterTabsZones: {}, // dict frameId to after tabs zones options
            tabHeaderButtons: {} // dict frameId to crate tab header buttons options
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

    onCreateBeforeTabsComponentRequested = (options: CreateBeforeTabsZoneRequestOptions) => {
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

    onCreateAfterTabsComponentRequested = (options: CreateAfterTabsZoneRequestOptions) => {
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

    renderGroupCaptionBar = () => {
        const GroupCaptionBarCustomElement = this.props.components?.group?.CaptionBar;
        if (!GroupCaptionBarCustomElement || (!this.state.groupCaptionBar || !this.state.groupCaptionBar.parentElement)) {
            return;
        }

        const { parentElement, ...options } = this.state.groupCaptionBar;

        return <Portal parentElement={parentElement}><GroupCaptionBarCustomElement {...options} /></Portal>;
    }

    renderFrameCaptionBar = () => {
        const FrameCaptionBarCustomElement = this.props.components?.frame?.CaptionBar;
        return Object.values(this.state.frameCaptionBars).map((fcb) => {
            if (!FrameCaptionBarCustomElement || !fcb.parentElement) {
                return;
            }

            const { parentElement, ...options } = fcb;
            return <Portal key={options.targetId} parentElement={parentElement}><FrameCaptionBarCustomElement {...options} /></Portal>
        });
    }

    renderBeforeTabsZones = () => {
        const BeforeTabsCustomElement = this.props.components?.tabs?.Before;
        return Object.values(this.state.beforeTabsZones).map((te) => {
            if (!BeforeTabsCustomElement || !te.parentElement) {
                return;
            }

            const { parentElement, ...options } = te;
            return <Portal key={options.targetId} parentElement={parentElement}><BeforeTabsCustomElement {...options} /></Portal>
        });
    }

    renderTabElements = () => {
        const TabCustomElement = this.props.components?.tabs?.Element;
        return Object.values(this.state.tabElements).map((te) => {
            if (!TabCustomElement || !te.parentElement) {
                return;
            }

            const onCloseClick = () => {
                webGroupsManager.closeTab(te.targetId);
            }

            const { parentElement, ...options } = te;
            return <Portal key={options.targetId} parentElement={parentElement}><TabCustomElement {...options} close={onCloseClick} /></Portal>
        });
    }

    renderAfterTabsZones = () => {
        const AfterTabsCustomElement = this.props.components?.tabs?.After;
        return Object.values(this.state.afterTabsZones).map((te) => {
            if (!AfterTabsCustomElement || !te.parentElement) {
                return;
            }

            const { parentElement, ...options } = te;
            return <Portal key={options.targetId} parentElement={parentElement}><AfterTabsCustomElement {...options} /></Portal>
        });
    }

    renderTabHeaderButtons = () => {
        const TabButtonsCustomElement = this.props.components?.tabs?.Buttons;
        return Object.values(this.state.tabHeaderButtons).map((te) => {
            if (!TabButtonsCustomElement || !te.parentElement) {
                return;
            }
            // TODO Create wrapper functions for minimize, close, maximize etc like in renderTabElement
            const { parentElement, ...options } = te;
            return <Portal key={options.targetId} parentElement={parentElement}><TabButtonsCustomElement {...options} /></Portal>
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

    render() {
        const { components, glue, ...additionalProperties } = this.props;
        return (
            <>
                {this.renderGroupCaptionBar()}
                {this.renderFrameCaptionBar()}
                {this.renderBeforeTabsZones()}
                {this.renderTabElements()}
                {this.renderAfterTabsZones()}
                {this.renderTabHeaderButtons()}
                <GroupWrapper
                    onCreateGroupCaptionBarRequested={components?.group?.CaptionBar ? this.onCreateGroupCaptionBarRequested : undefined}
                    onCreateFrameCaptionBarRequested={components?.frame?.CaptionBar ? this.onCreateFrameCaptionBarRequested : undefined}
                    onCreateTabRequested={components?.tabs?.Element ? this.onCreateTabElementRequested : undefined}
                    onCreateBeforeTabsComponentRequested={false ? this.onCreateBeforeTabsComponentRequested : undefined}
                    onCreateAfterTabsComponentRequested={false ? this.onCreateAfterTabsComponentRequested : undefined}
                    onCreateTabHeaderButtonsRequested={false ? this.onCreateTabHeaderButtonsRequested : undefined}
                    onUpdateGroupCaptionBarRequested={components?.group?.CaptionBar ? this.onUpdateGroupCaptionBarRequested : undefined}
                    onUpdateFrameCaptionBarRequested={components?.frame?.CaptionBar ? this.onUpdateFrameCaptionBarRequested : undefined}
                    onUpdateTabRequested={components?.tabs?.Element ? this.onUpdateTabElementRequested : undefined}
                    onRemoveFrameCaptionBarRequested={this.onRemoveFrameCaptionBarRequested}
                    onRemoveTabRequested={this.onRemoveTabElementRequested}
                    onRemoveBeforeTabsComponentRequested={this.onRemoveBeforeTabsComponentRequested}
                    onRemoveAfterTabsComponentRequested={this.onRemoveAfterTabsComponentRequested}
                    onRemoveTabHeaderButtonsRequested={this.onRemoveTabHeaderButtonsRequested}
                />
            </>
        );
    }
}

export default GroupElementCreationWrapper;
