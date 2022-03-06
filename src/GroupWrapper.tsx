import React from "react";
import { GroupWrapperProps } from "./types/internal";
import webGroupsManager from "./webGroupsManager";

const templateId = "workspaces-react-wrapper-template";
const workspacesInnerContainerId = "outter-layout-container";

class GroupWrapper extends React.Component<GroupWrapperProps> {
    containerRef: HTMLElement | null;

    componentDidMount() {
        // let placeholder = document.getElementById(templateId) as HTMLTemplateElement;
        // if (!placeholder) {
        //     const template = document.createElement("template");
        //     template.id = templateId;
        //     const glContainer = document.createElement("div");

        //     glContainer.id = workspacesInnerContainerId;
        //     glContainer.style.overflow = "hidden";
        //     glContainer.style.width = "100%";
        //     glContainer.style.height = "100%";
        //     template.content.appendChild(glContainer);
        //     document.body.appendChild(template);
        //     placeholder = template;
        // }
        // if (!this.containerRef) {
        //     return;
        // }
        // this.containerRef.appendChild(placeholder.content);

        const componentFactory = { 
            createGroupCaptionBar: this.props.onCreateGroupCaptionBarRequested,
            changeGroupCaption: this.props.onUpdateGroupCaptionBarRequested,
            createFrameCaptionBar: this.props.onCreateFrameCaptionBarRequested,
            changeFrameCaption: this.props.onUpdateFrameCaptionBarRequested,
            createBeforeTabsComponent: this.props.onCreateBeforeTabsComponentRequested,
            createTab: this.props.onCreateTabRequested,
            changeTabCaption: this.props.onUpdateTabRequested,
            createAfterTabsComponent: this.props.onCreateAfterTabsComponentRequested,
            createTabHeaderButtonsComponent: this.props.onCreateTabHeaderButtonsRequested,
            removeFrameCaptionBar: this.props.onRemoveFrameCaptionBarRequested,
            removeTab: this.props.onRemoveTabRequested,
            removeTabHeaderButtons: this.props.onRemoveTabHeaderButtonsRequested
        };
        webGroupsManager.init(undefined, componentFactory);
    }

    componentWillUnmount() {
        // let placeholder = document.getElementById(templateId) as HTMLTemplateElement;

        // if (!this.containerRef) {
        //     return;
        // }

        // placeholder?.content.appendChild(this.containerRef.children[0]);

        // webGroupsManager.unmount();
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

// export default withGlueInstance(GroupWrapper);

export default GroupWrapper;