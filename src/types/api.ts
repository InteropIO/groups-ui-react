import React from "react";
import { Bounds, ButtonProps } from "./internal";

export interface ChannelProps {
    visible: boolean;
    selectedChannel: string;
    showSelector: (bounds: Bounds) => void;
    selectedChannelColor: string;
}

export interface FrameWindowOverlayProps {
    frameId: string;
    selectedWindow: string;
}

export interface AboveWindowProps {
    frameId: string;
    selectedWindow: string;
}

export interface WindowContentOverlayProps {
    frameId: string;
    selectedWindow: string;
}

export interface FrameLoadingAnimationProps {
    frameId: string;
    selectedWindow: string;
    show: boolean;
}

export interface BelowWindowProps {
    frameId: string;
    selectedWindow: string;
}

export interface AboveTabsProps {
    frameId: string;
    selectedWindow: string;
}

export interface BeforeTabsZoneProps {
    frameId: string;
    selectedWindow: string;
}

export interface BelowTabsProps {
    frameId: string;
    selectedWindow: string;
}

export interface CaptionEditorProps {
    show: boolean;
    text?: string;
    commitChanges: (text: string) => void;
    hideEditor: () => void;
    notifyBoundsChanged: (bounds: Bounds) => void;
    notifyEditorVisibilityChanged: (visible: boolean) => void;
}

export interface GroupCaptionBarProps {
    moveAreaId: string;
    targetType: string;
    targetId: string;
    caption: string;
    captionEditor?: CaptionEditorProps;
    visible: boolean,
    notifyCaptionBoundsChanged: (bounds: Bounds) => void;

    minimize: ButtonProps;
    maximize: ButtonProps;
    restore: ButtonProps;
    close: ButtonProps;
}

export interface GroupOverlayProps {

}

export interface FlatCaptionBarProps {
    frameId: string;
    moveAreaId: string;
    caption: string;
    feedback?: ButtonProps;
    extract?: ButtonProps;
    lock?: ButtonProps;
    unlock?: ButtonProps;
    minimize?: ButtonProps;
    maximize?: ButtonProps;
    restore?: ButtonProps;
    close?: ButtonProps;
    channels: ChannelProps;
    selectedWindow: string;
    notifyCaptionBoundsChanged: (bounds: Bounds) => void;
    captionEditor: CaptionEditorProps;
}

export interface TabElementProps {
    targetId: string;
    windowId: string;
    caption: string;
    selected: boolean;
    close: () => void;
    channels: ChannelProps;
    notifyCaptionBoundsChanged: (bounds: Bounds) => void;
    captionEditor: CaptionEditorProps;
}

export interface AfterTabsZoneProps {
    frameId: string;
    selectedWindow: string;
}

export interface TabHeaderButtonsProps {
    feedback?: ButtonProps;
    extract?: ButtonProps;
    lock?: ButtonProps;
    unlock?: ButtonProps;
    minimize?: ButtonProps;
    maximize?: ButtonProps;
    restore?: ButtonProps;
    close?: ButtonProps;
    frameId: string;
    selectedWindow: string;
}

export interface GroupProps {
    components?: {
        group?: {
            CaptionBar?: React.ComponentType<GroupCaptionBarProps>;
            Overlay?: React.ComponentType<GroupOverlayProps>;
        }
        frame?: {
            Overlay?: React.ComponentType<FrameWindowOverlayProps>;
            AboveWindow?: React.ComponentType<AboveWindowProps>;
            WindowContentOverlay?: React.ComponentType<WindowContentOverlayProps>;
            BelowWindow?: React.ComponentType<BelowWindowProps>;
            LoadingAnimation?: React.ComponentType<FrameLoadingAnimationProps>;
        };
        flat?: {
            CaptionBar?: React.ComponentType<FlatCaptionBarProps>;
        };
        tabs?: {
            Above?: React.ComponentType<AboveTabsProps>;
            Before?: React.ComponentType<BeforeTabsZoneProps>;
            Element?: React.ComponentType<TabElementProps>;
            After?: React.ComponentType<AfterTabsZoneProps>;
            Buttons?: React.ComponentType<TabHeaderButtonsProps>;
            Below?: React.ComponentType<BelowTabsProps>;
        }
    }
}

export interface MoveAreaProps {
    elementId: string;
}

export interface GroupComponentVisibilityState {
    groupCaptionBarVisible?: boolean;
}