import CloseButton from "./defaultComponents/CloseButton";
import FrameCaptionBar from "./defaultComponents/FrameCaptionBar";
import GroupCaptionBar from "./defaultComponents/GroupCaptionBar";
import MaximizeButton from "./defaultComponents/MaximizeButton";
import MinimizeButton from "./defaultComponents/MinimizeButton";
import Tab from "./defaultComponents/Tab";
import TabCaption from "./defaultComponents/TabCaption";
import TabCloseButton from "./defaultComponents/TabCloseButton";
import GroupElementCreationWrapper from "./GroupElementCreationWrapper";
import { GroupCaptionBarProps, GroupProps, MoveAreaProps, TabElementProps, TabCaptionProps, TabCloseButtonProps, FrameCaptionBarProps } from "./types/internal";
import webGroupsManager from "./webGroupsManager";
// The assets (css, svgs etc) should be part of this lib, so the user can add or remove them on demand
// for reference look at workspaces(workspaces-ui-react) and the dev-workspaces-frame in Glue42/core
export {
    GroupCaptionBar,
    Tab,
    TabCaption,
    TabCloseButton,
    MinimizeButton,
    MaximizeButton,
    CloseButton,
    FrameCaptionBar
}

export const getGroupId: () => string = () => webGroupsManager?.getGroupId();

export {
    MoveAreaProps,
    GroupProps,
    GroupCaptionBarProps,
    TabElementProps,
    TabCaptionProps,
    TabCloseButtonProps,
    FrameCaptionBarProps
}

export default GroupElementCreationWrapper;
