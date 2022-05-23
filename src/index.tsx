import CloseButton from "./defaultComponents/CloseButton";
import FlatCaptionBar from "./defaultComponents/flatCaptionBar/FlatCaptionBar";
import GroupCaptionBar from "./defaultComponents/groupCaptionBar/GroupCaptionBar";
import MaximizeButton from "./defaultComponents/MaximizeButton";
import MinimizeButton from "./defaultComponents/MinimizeButton";
import Tab from "./defaultComponents/tabs/Tab";
import TabHeaderButtons from "./defaultComponents/tabs/TabHeaderButtons";
import TabCaption from "./defaultComponents/tabs/TabCaption";
import TabCloseButton from "./defaultComponents/tabs/TabCloseButton";
import GroupElementCreationWrapper from "./GroupElementCreationWrapper";
import {
    GroupCaptionBarProps,
    GroupProps,
    MoveAreaProps,
    TabElementProps,
    TabCaptionProps,
    TabCloseButtonProps,
    FlatCaptionBarProps,
    FrameWindowOverlayProps,
    FlatMoveAreaProps,
    FlatChannelSelectorProps,
    TabHeaderButtonsProps,
    GroupMoveAreaProps,
    GroupButtonsProps,
    FlatCaptionProps,
    FlatButtonsProps,
    GroupOverlayProps,
    MinimizeButtonProps,
    MaximizeButtonProps,
    RestoreButtonProps,
    CloseButtonProps,
    TabChannelSelectorProps
} from "./types/internal";
import webGroupsManager from "./webGroupsManager";
import GroupMoveArea from "./defaultComponents/groupCaptionBar/GroupMoveArea";
import GroupButtons from "./defaultComponents/groupCaptionBar/GroupButtons";
import FlatMoveArea from "./defaultComponents/flatCaptionBar/FlatMoveArea";
import FlatButtons from "./defaultComponents/flatCaptionBar/FlatButtons";
import FlatCaption from "./defaultComponents/flatCaptionBar/FlatCaption";
import GroupCaption from "./defaultComponents/groupCaptionBar/GroupCaption";
import FlatChannelSelector from "./defaultComponents/channelSelector/FlatChannelSelector";
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
    FlatCaptionBar,
    FlatChannelSelector,
    FlatCaption,
    FlatMoveArea,
    FlatButtons,
    TabHeaderButtons,
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
    GroupOverlayProps,
    GroupButtonsProps,
    TabElementProps,
    TabChannelSelectorProps,
    TabCaptionProps,
    TabCloseButtonProps,
    TabHeaderButtonsProps,
    FlatCaptionBarProps,
    FlatCaptionProps,
    FrameWindowOverlayProps,
    FlatMoveAreaProps,
    FlatChannelSelectorProps,
    FlatButtonsProps,
    MinimizeButtonProps,
    MaximizeButtonProps,
    RestoreButtonProps,
    CloseButtonProps,
}

export default GroupElementCreationWrapper;
