import React from "react";
import { GroupWrapperProps } from "./types/internal";
import webGroupsManager from "./webGroupsManager";

class GroupWrapper extends React.Component<GroupWrapperProps> {
    containerRef: HTMLElement | null;

    componentDidMount() {
        const componentFactory = {
            createGroupCaptionBar: this.props.onCreateGroupCaptionBarRequested,
            updateGroupCaptionBar: this.props.onUpdateGroupCaptionBarRequested,
            createGroupOverlay: this.props.onCreateGroupOverlayRequested,

            createFrameCaptionBar: this.props.onCreateFrameCaptionBarRequested,
            updateFrameCaptionBar: this.props.onUpdateFrameCaptionBarRequested,
            createFrameWindowOverlay: this.props.onCreateFrameWindowOverlayRequested,
            updateFrameWindowOverlay: this.props.onUpdateFrameWindowOverlayRequested,
            createAboveWindow: this.props.onCreateAboveWindowRequested,
            destroyAboveWindow: this.props.onRemoveAboveWindowRequested,
            createWindowContentOverlay: this.props.onCreateWindowContentOverlayRequested,
            destroyWindowContentOverlay: this.props.onRemoveWindowContentOverlayRequested,
            createFrameLoadingAnimation: this.props.onCreateFrameLoadingAnimationRequested,
            destroyFrameLoadingAnimation: this.props.onRemoveFrameLoadingAnimationRequested,
            createBelowWindow: this.props.onCreateBelowWindowRequested,
            destroyBelowWindow: this.props.onRemoveBelowWindowRequested,

            createAboveTabs: this.props.onCreateAboveTabsRequested,
            updateAboveTabs: this.props.onUpdateAboveTabsRequested,
            createBeforeTabs: this.props.onCreateBeforeTabsComponentRequested,
            updateBeforeTabs: this.props.onUpdateBeforeTabsComponentRequested,

            createTab: this.props.onCreateTabRequested,
            updateTab: this.props.onUpdateTabRequested,

            createAfterTabs: this.props.onCreateAfterTabsComponentRequested,
            updateAfterTabs: this.props.onUpdateAfterTabsComponentRequested,
            createTabBarButtonsContainerElement: this.props.onCreateTabHeaderButtonsRequested,
            createBelowTabs: this.props.onCreateBelowTabsRequested,
            updateBelowTabs: this.props.onUpdateBelowTabsRequested,
            
            createHtmlButtonsContainerElement: this.props.onCreateHtmlButtonsRequested,
            destroyHtmlButtonsContainerElement: this.props.onRemoveHtmlButtonsRequested,

            createTabOverflowPopup:this.props.onCreateTabOverflowPopupRequested,
            destroyTabOverflowPopup: this.props.onRemoveTabOverflowPopupRequested,
            
            updateFrame: this.props.onUpdateFrameRequested,
            updateStandardButton: this.props.onUpdateStandardButtonRequested,
            updateCustomButtons: this.props.onUpdateCustomButtonsRequested,

            destroyFrameCaptionBar: this.props.onRemoveFrameCaptionBarRequested, // needed to prevent a memory leak
            destroyFrameWindowOverlay: this.props.onRemoveFrameWindowOverlayRequested,

            destroyAboveTabs: this.props.onRemoveAboveTabsRequested,
            destroyBeforeTabs: this.props.onRemoveBeforeTabsComponentRequested,
            destroyTab: this.props.onRemoveTabRequested,
            destroyAfterTabs: this.props.onRemoveAfterTabsComponentRequested,
            destroyTabBarButtonsContainerElement: this.props.onRemoveTabHeaderButtonsRequested,
            destroyBelowTabs: this.props.onRemoveBelowTabsRequested,

            showCaptionEditor: this.props.onShowCaptionEditorRequested,
            commitCaptionEditing: this.props.onCommitCaptionEditingRequested,
            hideCaptionEditor: this.props.onHideCaptionEditorRequested,

            showLoadingAnimation: this.props.onShowLoadingAnimationRequested,
            hideLoadingAnimation: this.props.onHideLoadingAnimationRequested,
        };

        webGroupsManager.init(undefined, componentFactory);
    }

    componentWillUnmount() {
        // TODO
    }

    render() {
        return (
            <div id="t42-group-container" ref={(r) => this.containerRef = r}>
                <div id="t42-frames-container">
                </div>
            </div>
        );
    }
}

export default GroupWrapper;