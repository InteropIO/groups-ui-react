import CloseButton from "./defaultComponents/buttons/CloseButton";
import FlatCaptionBar from "./defaultComponents/flatCaptionBar/FlatCaptionBar";
import GroupCaptionBar from "./defaultComponents/groupCaptionBar/GroupCaptionBar";
import MaximizeButton from "./defaultComponents/buttons/MaximizeButton";
import MinimizeButton from "./defaultComponents/buttons/MinimizeButton";
import Tab from "./defaultComponents/tabs/Tab";
import TabHeaderButtons from "./defaultComponents/tabs/TabHeaderButtons";
import TabCaption from "./defaultComponents/tabs/TabCaption";
import TabCloseButton from "./defaultComponents/tabs/TabCloseButton";
import GroupElementCreationWrapper from "./GroupElementCreationWrapper";
import webGroupsManager from "./webGroupsManager";
import GroupMoveArea from "./defaultComponents/groupCaptionBar/GroupMoveArea";
import GroupButtons from "./defaultComponents/groupCaptionBar/GroupButtons";
import FlatMoveArea from "./defaultComponents/flatCaptionBar/FlatMoveArea";
import FlatButtons from "./defaultComponents/flatCaptionBar/FlatButtons";
import FlatCaption from "./defaultComponents/flatCaptionBar/FlatCaption";
import GroupCaption from "./defaultComponents/groupCaptionBar/GroupCaption";
import FlatChannelSelector from "./defaultComponents/channelSelector/FlatChannelSelector";
import TabChannelSelector from "./defaultComponents/channelSelector/TabChannelSelector";
import RestoreButton from "./defaultComponents/buttons/RestoreButton";
import LockButton from "./defaultComponents/buttons/LockButtons";
import UnlockButton from "./defaultComponents/buttons/UnlockButton";
import ExtractButton from "./defaultComponents/buttons/ExtractButton";
import useGDWindow from "./useGDWindow";
import { waitForWindow } from "./utils";
import useGroupComponentVisibility from "./useGroupComponentVisibility";
import {
    CloseButtonProps,
    ExtractButtonProps,
    FlatButtonsProps,
    FlatCaptionProps,
    FlatChannelSelectorProps,
    FlatMoveAreaProps,
    GroupButtonsProps,
    GroupMoveAreaProps,
    LockButtonProps,
    MaximizeButtonProps,
    MinimizeButtonProps,
    RestoreButtonProps,
    TabCaptionProps,
    TabChannelSelectorProps,
    TabCloseButtonProps,
    UnlockButtonProps
} from "./types/defaultComponents";
import {
    FlatCaptionBarProps,
    FrameWindowOverlayProps,
    GroupCaptionBarProps,
    GroupComponentVisibilityState,
    GroupOverlayProps,
    GroupProps,
    MoveAreaProps,
    TabElementProps,
    TabHeaderButtonsProps
} from "./types/api";
import useTabCaption from "./defaultComponents/tabs/useEditableTabCaption";
import useTabCaptionEditor from "./defaultComponents/tabs/useTabCaptionEditor";
import useEditableGroupCaption from "./defaultComponents/groupCaptionBar/useEditableGroupCaption";
import useGroupCaptionEditor from "./defaultComponents/groupCaptionBar/useGroupCaptionEditor";
import useFlatCaption from "./defaultComponents/flatCaptionBar/useEditableFlatCaption";
import useFlatCaptionEditor from "./defaultComponents/flatCaptionBar/useFlatCaptionEditor";

export {
    GroupCaptionBar,
    GroupMoveArea,
    GroupButtons,
    Tab,
    TabChannelSelector,
    TabCaption,
    TabCloseButton,
    ExtractButton,
    LockButton,
    UnlockButton,
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
    GroupComponentVisibilityState,
    useGDWindow,
    useGroupComponentVisibility,
    waitForWindow,
    useTabCaption,
    useTabCaptionEditor,
    useEditableGroupCaption as useGroupCaption,
    useGroupCaptionEditor,
    useFlatCaption,
    useFlatCaptionEditor
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
    ExtractButtonProps,
    LockButtonProps,
    UnlockButtonProps,
    MinimizeButtonProps,
    MaximizeButtonProps,
    RestoreButtonProps,
    CloseButtonProps,
}

export default GroupElementCreationWrapper;
