import React from "react";
import { GroupWrapperProps } from "./types/internal";
import webGroupsManager from "./webGroupsManager";


class GroupWrapper extends React.Component<GroupWrapperProps> {
    containerRef: HTMLElement | null;

    componentDidMount() {
        // If unmount will be supported the element could be moved from the shadow dom to the normal dom (Workspaces works that way)
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
            updateGroupCaptionBar: this.props.onUpdateGroupCaptionBarRequested,

            createFrameCaptionBar: this.props.onCreateFrameCaptionBarRequested,
            updateFrameCaptionBar: this.props.onUpdateFrameCaptionBarRequested,

            createBeforeTabsComponent: this.props.onCreateBeforeTabsComponentRequested,

            createTab: this.props.onCreateTabRequested,
            updateTab: this.props.onUpdateTabRequested,

            createAfterTabsComponent: this.props.onCreateAfterTabsComponentRequested,
            createTabBarButtonsContainerElement: this.props.onCreateTabHeaderButtonsRequested,

            updateStandardButton: (a: any) => { console.log(a) },

            removeFrameCaptionBar: this.props.onRemoveFrameCaptionBarRequested, // needed to prevent a memory leak
            removeTab: this.props.onRemoveTabRequested,
            removeTabHeaderButtons: this.props.onRemoveTabHeaderButtonsRequested
        };

        // TODO some of the methods might (if they are too fast) set the state of the parent before its mounted
        // go to workspaces to see how its handled (with a flag in the state of the parent)
        webGroupsManager.init(undefined, componentFactory);
    }

    componentWillUnmount() {
        // If unmount will be supported the element could be moved the the shadow dom (Workspaces works that way)
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

export default GroupWrapper;