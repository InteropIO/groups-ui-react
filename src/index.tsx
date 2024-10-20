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
import FeedbackButton from "./defaultComponents/buttons/FeedbackButton";
import CloneButton from "./defaultComponents/buttons/CloneButton";
import StickyButton from "./defaultComponents/buttons/StickyButton";
import OverflowButton from "./defaultComponents/buttons/OverflowButton";
import useIOConnectWindow from "./useIOConnectWindow";
import CustomButton from "./defaultComponents/buttons/CustomButton";
import { waitForWindow } from "./utils";
import useGroupComponentVisibility from "./useGroupComponentVisibility";
import {
    CloseButtonProps,
    ExtractButtonProps,
    StickyButtonProps,
    FeedbackButtonProps,
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
    UnlockButtonProps,
    UseCaptionEditorOptions,
    UseEditableCaptionOptions,
    OverflowButtonProps
} from "./types/defaultComponents";
import {
    AboveTabsProps,
    AboveWindowProps,
    AfterTabsProps,
    BeforeTabsProps,
    BelowTabsProps,
    BelowWindowProps,
    FlatCaptionBarProps,
    FrameLoadingAnimationProps,
    FrameWindowOverlayProps,
    GroupCaptionBarProps,
    GroupComponentVisibilityState,
    GroupOverlayProps,
    GroupProps,
    HtmlButtonsProps,
    MoveAreaProps,
    OpenTabOverflowPopupOptions,
    TabElementProps,
    TabHeaderButtonsProps,
    TabOverflowPopupProps,
    WindowContentOverlayProps,
} from "./types/api";
import GroupCaptionEditor from "./defaultComponents/groupCaptionBar/GroupCaptionEditor";
import FlatCaptionEditor from "./defaultComponents/flatCaptionBar/FlatCaptionEditor";
import TabCaptionEditor from "./defaultComponents/tabs/TabCaptionEditor";
import { Location, TargetType } from "./types/internal";
import useCommitTabCaptionEditingRequested from "./defaultComponents/tabs/useCommitTabCaptionEditingRequested";
import useCommitGroupCaptionEditingRequested from "./defaultComponents/groupCaptionBar/useCommitGroupCaptionEditingRequested";
import useCommitFlatCaptionEditingRequested from "./defaultComponents/flatCaptionBar/useCommitFlatCaptionEditingRequested";
import useEditableCaption from "./defaultComponents/captionEditor/useEditableCaption";
import useCaptionEditor from "./defaultComponents/captionEditor/useCaptionEditor";
import FrameLoadingAnimation from "./defaultComponents/loadingAnimation/FrameLoadingAnimation";
import HtmlButtons from "./defaultComponents/htmlButtonsBar/buttons";
import TabOverflowPopup from "./defaultComponents/popups/TabOverflowPopup";
import TabMultiChannelSelector from "./defaultComponents/channelSelector/multi/TabMultiChannelSelector";
import FlatMultiChannelSelector from "./defaultComponents/channelSelector/multi/FlatMultiChannelSelector";

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
    FeedbackButton,
    CloneButton,
    StickyButton,
    ExtractButton,
    LockButton,
    UnlockButton,
    MinimizeButton,
    RestoreButton,
    MaximizeButton,
    CustomButton,
    CloseButton,
    FlatCaptionBar,
    FlatChannelSelector,
    FlatCaption,
    FlatMoveArea,
    FlatButtons,
    FlatCaptionEditor,
    TabHeaderButtons,
    FrameLoadingAnimation,
    HtmlButtons,
    TabOverflowPopup,
    OverflowButton,
    GroupComponentVisibilityState,
    TabMultiChannelSelector,
    FlatMultiChannelSelector,
    useIOConnectWindow,
    useGroupComponentVisibility,
    waitForWindow,
    useEditableCaption,
    useCaptionEditor,
    useCommitGroupCaptionEditingRequested,
    useCommitFlatCaptionEditingRequested,
    useCommitTabCaptionEditingRequested,
}

export const getGroupId: () => string = () => webGroupsManager?.getGroupId();
export const requestPageFocus: () => void = () => webGroupsManager?.requestPageFocus();
export const requestFrameFocus: (frameId: string) => void = (frameId) => webGroupsManager?.requestFrameFocus(frameId);
export const requestGroupFocus: () => void = () => webGroupsManager?.requestGroupFocus();
export const openTabOverflowPopup: (options: OpenTabOverflowPopupOptions) => void = ({ frameId, location }: OpenTabOverflowPopupOptions) => webGroupsManager.openTabOverflowPopup(frameId, location);

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
    HtmlButtonsProps,
    FlatCaptionBarProps,
    FlatCaptionProps,
    FrameWindowOverlayProps,
    FlatMoveAreaProps,
    FlatChannelSelectorProps,
    FlatButtonsProps,
    FlatCaptionEditorProps,
    OverflowButtonProps,
    StickyButtonProps,
    FeedbackButtonProps,
    ExtractButtonProps,
    LockButtonProps,
    UnlockButtonProps,
    MinimizeButtonProps,
    MaximizeButtonProps,
    RestoreButtonProps,
    CloseButtonProps,
    FrameLoadingAnimationProps,
    UseCaptionEditorOptions,
    UseEditableCaptionOptions,
    AboveWindowProps,
    BelowWindowProps,
    AboveTabsProps,
    BelowTabsProps,
    BeforeTabsProps,
    AfterTabsProps,
    WindowContentOverlayProps,
    TabOverflowPopupProps,
}

export default GroupElementCreationWrapper;
