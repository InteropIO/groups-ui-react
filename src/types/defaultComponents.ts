import { Bounds, ButtonProps, TargetType, ToggleButtonProps } from "./internal";

export interface CaptionEditorProps {
    targetId: string;
    targetType: TargetType;
    commitChanges: (title: string) => void;
    notifyEditorVisibilityChanged: (visible: boolean) => void;
    notifyBoundsChanged: (bounds: Bounds) => void;
    hideEditor: () => void;
    caption: string;
    className: string;
}

export interface GroupCaptionEditorProps {
    groupId: string;
    commitChanges: (title: string) => void;
    notifyEditorVisibilityChanged: (visible: boolean) => void;
    notifyBoundsChanged: (bounds: Bounds) => void;
    hideEditor: () => void;
    caption: string;
}

export interface StickyButtonProps extends ToggleButtonProps {
}

export interface FeedbackButtonProps extends ButtonProps {
}

export interface CloneButtonProps extends ButtonProps {
}


export interface ExtractButtonProps extends ButtonProps {
}

export interface LockButtonProps extends ButtonProps {
}

export interface UnlockButtonProps extends ButtonProps {
}

export interface MinimizeButtonProps extends ButtonProps {
}

export interface OverflowButtonProps extends ButtonProps {
}

export interface MaximizeButtonProps extends ButtonProps {
}

export interface RestoreButtonProps extends ButtonProps {
}

export interface CloseButtonProps extends ButtonProps {
}

export interface CustomButtonProps extends ButtonProps {
    imageData: string;
    buttonId: string;
}

export interface BaseButtonProps {
    outerElement: React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;
    innerElement: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
}

export interface BaseChannelSelectorProps {
    showSelector: (bounds: Bounds) => void;
    outsideClass: string;
    contentClass: string;
    selectedChannel: string;
    selectedChannelColor: string;
}

export interface BaseMultiChannelSelectorProps {
    showSelector: (bounds: Bounds) => void;
    outsideClass: string;
    contentClass: string;
    selectedChannels: { name: string; color: string }[];
}

export interface FlatChannelSelectorProps {
    showSelector: (bounds: Bounds) => void;
    selectedChannel: string;
    selectedChannelColor: string;
}

export interface FlatMultiChannelSelectorProps {
    showSelector: (bounds: Bounds) => void;
    selectedChannels: { name: string; color: string }[];
}

export interface TabChannelSelectorProps {
    showSelector: (bounds: Bounds) => void;
    selectedChannel: string;
    selectedChannelColor: string;
}

export interface TabMultiChannelSelectorProps {
    showSelector: (bounds: Bounds) => void;
    selectedChannels: { name: string; color: string }[];
}

export interface FlatCaptionEditorProps {
    frameId: string;
    commitChanges: (title: string) => void;
    notifyEditorVisibilityChanged: (visible: boolean) => void;
    notifyBoundsChanged: (bounds: Bounds) => void;
    hideEditor: () => void;
    caption: string;
}

export interface FlatMoveAreaProps {
    moveAreaId: string;
    children?: React.ReactNode;
}

export interface FlatButtonsProps {
    feedback?: ButtonProps;
    clone?: ButtonProps;
    sticky?: ToggleButtonProps;
    extract?: ButtonProps;
    lock?: ButtonProps;
    unlock?: ButtonProps;
    minimize?: ButtonProps;
    maximize?: ButtonProps;
    restore?: ButtonProps;
    close?: ButtonProps;
    customButtons: CustomButtonProps[];
}

export interface FlatCaptionProps {
    caption: string;
    notifyBoundsChanged?: (bounds: Bounds) => void;
}

export interface GroupMoveAreaProps {
    moveAreaId: string;
    children?: React.ReactNode;
}

export interface GroupButtonsProps {
    minimize: ButtonProps;
    maximize: ButtonProps;
    restore: ButtonProps;
    close: ButtonProps;
}

export interface GroupCaptionProps {
    caption: string;
    notifyBoundsChanged?: (bounds: Bounds) => void;
}

export interface TabCaptionProps {
    caption: string;
    selected: boolean;
    notifyBoundsChanged?: (bounds: Bounds) => void;
}

export interface TabCloseButtonProps {
    selected: boolean;
    close: () => void;
}

export interface TabCaptionEditorProps {
    windowId: string;
    selected: boolean;
    commitChanges: (title: string) => void;
    notifyEditorVisibilityChanged: (visible: boolean) => void;
    notifyBoundsChanged: (bounds: Bounds) => void;
    hideEditor: () => void;
    caption: string;
}

export interface UseCaptionEditorOptions {
    notifyEditorVisibilityChanged: (visible: boolean) => void;
    notifyBoundsChanged: (bounds: Bounds) => void;
}

export interface UseEditableCaptionOptions {
    notifyBoundsChanged?: (bounds: Bounds) => void;
}
