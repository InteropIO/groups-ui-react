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
