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
            frameCaptionBars: {},
            beforeTabsZones: {},
            tabElements: {},
            afterTabsZones: {},
            tabHeaderButtons: {}
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
        if (options === this.state.frameCaptionBars[options.elementId] || !options) {
            return;
        }
        this.setState(s => {
            const newCaptionBarsObj = Object.keys(s.frameCaptionBars).reduce((acc, elementId) => {
                acc[elementId] = s.frameCaptionBars[elementId];
                return acc;
            }, {});

            newCaptionBarsObj[options.elementId] = options;
            return {
                ...s,
                frameCaptionBars: newCaptionBarsObj
            }
        });
    }

    onCreateBeforeTabsComponentRequested = (options: CreateBeforeTabsZoneRequestOptions) => {
        if (options === this.state.beforeTabsZones[options.elementId] || !options) {
            return;
        }
        this.setState(s => {
            const beforeTabsZonesObj = Object.keys(s.beforeTabsZones).reduce((acc, elementId) => {
                acc[elementId] = s.beforeTabsZones[elementId];
                return acc;
            }, {});

            beforeTabsZonesObj[options.elementId] = options;
            return {
                ...s,
                beforeTabsZones: beforeTabsZonesObj
            }
        });
    }

    onCreateTabElementRequested = (options: CreateTabRequestOptions) => {
        if (options === this.state.tabElements[options.elementId] || !options) {
            return;
        }
        console.log(" creating with ", options);
        this.setState(s => {
            const newTabElementsObj = Object.keys(s.tabElements).reduce((acc, elementId) => {
                console.log("element id is", elementId);
                console.log("and the value for the element is", s.tabElements[elementId]);
                console.log("the number of values in the state is ", Object.values(s.tabElements));
                acc[elementId] = s.tabElements[elementId];
                return acc;
            }, {});

            newTabElementsObj[options.elementId] = options;

            console.log("after copying the new tab element stat is ", newTabElementsObj);
            return {
                ...s,
                tabElements: newTabElementsObj
            }
        });
    }

    onCreateAfterTabsComponentRequested = (options: CreateAfterTabsZoneRequestOptions) => {
        if (options === this.state.afterTabsZones[options.elementId] || !options) {
            return;
        }
        this.setState(s => {
            const afterTabsZonesObj = Object.keys(s.afterTabsZones).reduce((acc, elementId) => {
                acc[elementId] = s.afterTabsZones[elementId];
                return acc;
            }, {});

            afterTabsZonesObj[options.elementId] = options;
            return {
                ...s,
                afterTabsZones: afterTabsZonesObj
            }
        });
    }

    onCreateTabHeaderButtonsRequested = (options: CreateTabHeaderButtonsOptions) => {
        if (options === this.state.tabHeaderButtons[options.elementId] || !options) {
            return;
        }
        this.setState(s => {
            const newTabElementsObj = Object.keys(s.tabHeaderButtons).reduce((acc, elementId) => {
                acc[elementId] = s.tabHeaderButtons[elementId];
                return acc;
            }, {});

            newTabElementsObj[options.elementId] = options;
            return {
                ...s,
                tabHeaderButtons: newTabElementsObj
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
        if (options === this.state.frameCaptionBars[options.elementId] || !options) {
            return;
        }
        this.setState(s => {
            const newCaptionBarsObj = Object.keys(s.frameCaptionBars).reduce((acc, elementId) => {
                acc[elementId] = s.frameCaptionBars[elementId];
                return acc;
            }, {});

            newCaptionBarsObj[options.elementId] = { ...newCaptionBarsObj[options.elementId], ...options };
            return {
                ...s,
                frameCaptionBars: newCaptionBarsObj
            }
        });
    }

    onUpdateTabElementRequested = (options: CreateTabRequestOptions) => {
        if (options === this.state.tabElements[options.elementId] || !options) {
            return;
        }
        this.setState(s => {
            const newTabElementsObj = Object.keys(s.tabElements).reduce((acc, elementId) => {
                acc[elementId] = s.tabElements[elementId];
                return acc;
            }, {});

            console.log("merging", newTabElementsObj[options.elementId], "and ", options);
            newTabElementsObj[options.elementId] = { ...newTabElementsObj[options.elementId], ...options };
            return {
                ...s,
                tabElements: newTabElementsObj
            }
        });
    }

    renderGroupCaptionBar = () => {
        const GroupCaptionBarCustomElement = this.props.components?.group?.CaptionBar;
        if (!GroupCaptionBarCustomElement || (!this.state.groupCaptionBar || !this.state.groupCaptionBar.parentElement)) {
            return;
        }

        const { parentElement, callback, ...options } = this.state.groupCaptionBar;

        return <Portal parentElement={parentElement}><GroupCaptionBarCustomElement {...options} /></Portal>;
    }

    renderFrameCaptionBar = () => {
        const FrameCaptionBarCustomElement = this.props.components?.frame?.CaptionBar;
        return Object.values(this.state.frameCaptionBars).map((fcb) => {
            if (!FrameCaptionBarCustomElement || !fcb.parentElement) {
                return;
            }

            const { parentElement, callback, ...options } = fcb;
            return <Portal key={options.elementId} parentElement={parentElement}><FrameCaptionBarCustomElement {...options} /></Portal>
        });
    }

    renderBeforeTabsZones = () => {
        const BeforeTabsCustomElement = this.props.components?.tabs?.Before;
        return Object.values(this.state.beforeTabsZones).map((te) => {
            if (!BeforeTabsCustomElement || !te.parentElement) {
                return;
            }

            const { parentElement, callback, ...options } = te;
            return <Portal key={options.elementId} parentElement={parentElement}><BeforeTabsCustomElement {...options} /></Portal>
        });
    }

    renderTabElements = () => {
        const TabCustomElement = this.props.components?.tabs?.Element;
        return Object.values(this.state.tabElements).map((te) => {
            if (!TabCustomElement || !te.parentElement) {
                return;
            }

            const onCloseClick = ()=>{
                webGroupsManager.close(); 
            }

            const { parentElement, callback, ...options, } = te;
            return <Portal key={options.elementId} parentElement={parentElement}><TabCustomElement {...options} /></Portal>
        });
    }

    renderAfterTabsZones = () => {
        const AfterTabsCustomElement = this.props.components?.tabs?.After;
        return Object.values(this.state.afterTabsZones).map((te) => {
            if (!AfterTabsCustomElement || !te.parentElement) {
                return;
            }

            const { parentElement, callback, ...options } = te;
            return <Portal key={options.elementId} parentElement={parentElement}><AfterTabsCustomElement {...options} /></Portal>
        });
    }

    renderTabHeaderButtons = () => {
        const TabButtonsCustomElement = this.props.components?.tabs?.Buttons;
        return Object.values(this.state.tabHeaderButtons).map((te) => {
            if (!TabButtonsCustomElement || !te.parentElement) {
                return;
            }

            const { parentElement, callback, ...options } = te;
            return <Portal key={options.elementId} parentElement={parentElement}><TabButtonsCustomElement {...options} /></Portal>
        });
    }

    onRemoveFrameCaptionBarRequested = (options: RemoveRequestOptions) => {
        if (!this.state.frameCaptionBars[options.elementId]) {
            return;
        }
        this.setState(s => {
            const newCaptionBarsObj = Object.keys(s.frameCaptionBars).reduce((acc, elementId) => {
                if (elementId !== options.elementId) {
                    acc[elementId] = s.frameCaptionBars[elementId];
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
        if (!this.state.beforeTabsZones[options.elementId]) {
            return;
        }
        this.setState(s => {
            const newTabElementsObj = Object.keys(s.beforeTabsZones).reduce((acc, elementId) => {
                if (elementId != options.elementId) {
                    acc[elementId] = s.beforeTabsZones[elementId];
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
        if (!this.state.tabElements[options.elementId]) {
            return;
        }
        this.setState(s => {
            const newTabElementsObj = Object.keys(s.tabElements).reduce((acc, elementId) => {
                if (elementId != options.elementId) {
                    acc[elementId] = s.tabElements[elementId];
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
        if (!this.state.afterTabsZones[options.elementId]) {
            return;
        }
        this.setState(s => {
            const newTabElementsObj = Object.keys(s.afterTabsZones).reduce((acc, elementId) => {
                if (elementId != options.elementId) {
                    acc[elementId] = s.afterTabsZones[elementId];
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
        if (!this.state.tabHeaderButtons[options.elementId]) {
            return;
        }
        this.setState(s => {
            const newTabElementsObj = Object.keys(s.tabHeaderButtons).reduce((acc, elementId) => {
                if (elementId != options.elementId) {
                    acc[elementId] = s.tabHeaderButtons[elementId];
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
                    glue={glue}
                />
            </>
        );
    }
}

export default GroupElementCreationWrapper;
