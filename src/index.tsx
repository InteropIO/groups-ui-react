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
    FlatCaptionEditorProps,
    FlatCaptionProps,
    FlatChannelSelectorProps,
    FlatMoveAreaProps,
    GroupButtonsProps,
    GroupCaptionEditorProps,
    GroupMoveAreaProps,
    LockButtonProps,
    MaximizeButtonProps,
    MinimizeButtonProps,
    RestoreButtonProps,
    TabCaptionEditorProps,
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
    TabHeaderButtonsProps,
    UseTabCaptionEditorOptions,
    UseGroupCaptionEditorOptions,
    UseFlatCaptionEditorOptions,
    UseEditableTabCaptionOptions,
    UseEditableGroupCaptionOptions,
    UseEditableFlatCaptionOptions
} from "./types/api";
import useEditableTabCaption from "./defaultComponents/tabs/useEditableTabCaption";
import useTabCaptionEditor from "./defaultComponents/tabs/useTabCaptionEditor";
import useEditableGroupCaption from "./defaultComponents/groupCaptionBar/useEditableGroupCaption";
import useGroupCaptionEditor from "./defaultComponents/groupCaptionBar/useGroupCaptionEditor";
import useEditableFlatCaption from "./defaultComponents/flatCaptionBar/useEditableFlatCaption";
import useFlatCaptionEditor from "./defaultComponents/flatCaptionBar/useFlatCaptionEditor";
import GroupCaptionEditor from "./defaultComponents/groupCaptionBar/GroupCaptionEditor";
import FlatCaptionEditor from "./defaultComponents/flatCaptionBar/FlatCaptionEditor";
import TabCaptionEditor from "./defaultComponents/tabs/TabCaptionEditor";
import { TargetType } from "./types/internal";
import useCommitTabCaptionEditingRequested from "./defaultComponents/tabs/useCommitTabCaptionEditingRequested";
import useCommitGroupCaptionEditingRequested from "./defaultComponents/groupCaptionBar/useCommitGroupCaptionEditingRequested";
import useCommitFlatCaptionEditingRequested from "./defaultComponents/flatCaptionBar/useCommitFlatCaptionEditingRequested";

export {
    GroupCaptionBar,
    GroupMoveArea,
    GroupButtons,
    GroupCaptionEditor,
    Tab,
    TabChannelSelector,
    TabCaption,
    TabCloseButton,
    TabCaptionEditor,
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
    FlatCaptionEditor,
    TabHeaderButtons,
    GroupComponentVisibilityState,
    useGDWindow,
    useGroupComponentVisibility,
    waitForWindow,
    useEditableTabCaption,
    useTabCaptionEditor,
    useEditableGroupCaption,
    useGroupCaptionEditor,
    useEditableFlatCaption,
    useFlatCaptionEditor,
    useCommitGroupCaptionEditingRequested,
    useCommitFlatCaptionEditingRequested,
    useCommitTabCaptionEditingRequested,
}

export const getGroupId: () => string = () => webGroupsManager?.getGroupId();
export const requestPageFocus: () => void = () => webGroupsManager?.requestPageFocus();
export const requestFrameFocus: (frameId: string) => void = (frameId) => webGroupsManager?.requestFrameFocus(frameId);
export const requestGroupFocus: () => void = () => webGroupsManager?.requestGroupFocus();

export const onCommitGroupCaptionEditingRequested = (targetId: string, cb: () => void) => webGroupsManager.onCommitCaptionEditingRequested(TargetType.Group, targetId, cb);
export const onCommitFlatCaptionEditingRequested = (targetId: string, cb: () => void) => webGroupsManager.onCommitCaptionEditingRequested(TargetType.Frame, targetId, cb);
export const onCommitTabCaptionEditingRequested = (targetId: string, cb: () => void) => webGroupsManager.onCommitCaptionEditingRequested(TargetType.Tab, targetId, cb);

export {
    MoveAreaProps,
    GroupProps,
    GroupCaption,
    GroupCaptionBarProps,
    GroupMoveAreaProps,
    GroupOverlayProps,
    GroupButtonsProps,
    GroupCaptionEditorProps,
    TabElementProps,
    TabChannelSelectorProps,
    TabCaptionProps,
    TabCloseButtonProps,
    TabHeaderButtonsProps,
    TabCaptionEditorProps,
    FlatCaptionBarProps,
    FlatCaptionProps,
    FrameWindowOverlayProps,
    FlatMoveAreaProps,
    FlatChannelSelectorProps,
    FlatButtonsProps,
    FlatCaptionEditorProps,
    ExtractButtonProps,
    LockButtonProps,
    UnlockButtonProps,
    MinimizeButtonProps,
    MaximizeButtonProps,
    RestoreButtonProps,
    CloseButtonProps,
    UseTabCaptionEditorOptions,
    UseGroupCaptionEditorOptions,
    UseFlatCaptionEditorOptions,
    UseEditableTabCaptionOptions,
    UseEditableGroupCaptionOptions,
    UseEditableFlatCaptionOptions
}

export default GroupElementCreationWrapper;
