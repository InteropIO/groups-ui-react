import CloseButton from "./defaultComponents/CloseButton";
import FrameCaptionBar from "./defaultComponents/frameCaptionBar/FrameCaptionBar";
import GroupCaptionBar from "./defaultComponents/groupCaptionBar/GroupCaptionBar";
import MaximizeButton from "./defaultComponents/MaximizeButton";
import MinimizeButton from "./defaultComponents/MinimizeButton";
import Tab from "./defaultComponents/Tab";
import TabHeaderButtons from "./defaultComponents/TabHeaderButtons";
import TabCaption from "./defaultComponents/TabCaption";
import TabCloseButton from "./defaultComponents/TabCloseButton";
import GroupElementCreationWrapper from "./GroupElementCreationWrapper";
import {
    GroupCaptionBarProps,
    GroupProps,
    MoveAreaProps,
    TabElementProps,
    TabCaptionProps,
    TabCloseButtonProps,
    FrameCaptionBarProps,
    TabHeaderButtonsProps,
    GroupMoveAreaProps,
    GroupButtonsProps
} from "./types/internal";
import webGroupsManager from "./webGroupsManager";
import GroupMoveArea from "./defaultComponents/groupCaptionBar/GroupMoveArea";
import GroupButtons from "./defaultComponents/groupCaptionBar/GroupButtons";
import FrameMoveArea from "./defaultComponents/frameCaptionBar/FrameMoveArea";
import FrameButtons from "./defaultComponents/frameCaptionBar/FrameButtons";
import FrameCaption from "./defaultComponents/frameCaptionBar/FrameCaption";
import GroupCaption from "./defaultComponents/groupCaptionBar/GroupCaption";
import FrameChannelSelector from "./defaultComponents/channelSelector/FrameChannelSelector";
import TabChannelSelector from "./defaultComponents/channelSelector/TabChannelSelector";
import RestoreButton from "./defaultComponents/RestoreButton";
export {
    GroupCaptionBar,
    GroupMoveArea,
    GroupButtons,
    Tab,
    TabChannelSelector,
    TabCaption,
    TabCloseButton,
    MinimizeButton,
    RestoreButton,
    MaximizeButton,
    CloseButton,
    FrameCaptionBar,
    FrameChannelSelector,
    FrameCaption,
    FrameMoveArea,
    FrameButtons,
    TabHeaderButtons
}

export const getGroupId: () => string = () => webGroupsManager?.getGroupId();
export const requestPageFocus: () => void = () => webGroupsManager?.requestPageFocus();
export const requestFrameFocus: (frameId: string) => void = (frameId) => webGroupsManager?.requestFrameFocus(frameId);
export const requestGroupFocus: () => void = () => webGroupsManager?.requestGroupFocus();

export {
    MoveAreaProps,
    GroupProps,
    GroupCaption,
    GroupCaptionBarProps,
    GroupMoveAreaProps,
    GroupButtonsProps,
    TabElementProps,
    TabCaptionProps,
    TabCloseButtonProps,
    FrameCaptionBarProps,
    TabHeaderButtonsProps,
}

export default GroupElementCreationWrapper;
