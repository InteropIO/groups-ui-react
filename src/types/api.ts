import React from "react";
import { Bounds, ButtonProps, Location, OverflowedTabInfo, StylesOptions, ToggleButtonProps } from "./internal";
import { CustomButtonProps } from "./defaultComponents";

export interface ChannelProps {
    visible: boolean;
    selectedChannel: string;
    showSelector: (bounds: Bounds) => void;
    selectedChannelColor: string;
    channelsMode: "single" | "multi";
    selectedChannels: { name: string, color: string }[];
    channelRestrictions: {
        read: boolean,
        write: boolean
    };
    channelLabel: string;
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

export interface BeforeTabsProps {
    frameId: string;
    selectedWindow: string;
}

export interface BelowTabsProps {
    frameId: string;
    selectedWindow: string;
}

export interface TabOverflowPopupProps {
    frameId: string;
    select: (windowId: string) => void;
    close: (windowId: string) => void;
    hiddenTabsToTheLeft: OverflowedTabInfo[];
    hiddenTabsToTheRight: OverflowedTabInfo[];
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
    clone?: ButtonProps;
    sticky?: ToggleButtonProps;
    extract?: ButtonProps;
    lock?: ButtonProps;
    unlock?: ButtonProps;
    minimize?: ButtonProps;
    maximize?: ButtonProps;
    restore?: ButtonProps;
    close?: ButtonProps;
    channels: ChannelProps;
    customButtons: CustomButtonProps[];
    selectedWindow: string;
    notifyCaptionBoundsChanged: (bounds: Bounds) => void;
    captionEditor: CaptionEditorProps;
}

export interface TabElementProps {
    targetId: string;
    windowId: string;
    caption: string;
    selected: boolean;
    flashing: boolean;
    pinned: boolean;
    close: () => void;
    channels: ChannelProps;
    notifyCaptionBoundsChanged: (bounds: Bounds) => void;
    captionEditor: CaptionEditorProps;
    addContainerClass: (className: string) => void;
    removeContainerClass: (className: string) => void;
}

export interface AfterTabsProps {
    frameId: string;
    selectedWindow: string;
    hiddenTabsToTheLeft?: OverflowedTabInfo[];
    hiddenTabsToTheRight?: OverflowedTabInfo[];
}

interface FrameButtonsProps {
    overflow?: ButtonProps;
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
    frameId: string;
    selectedWindow: string;
}

export interface TabHeaderButtonsProps extends FrameButtonsProps {
    hiddenTabsToTheLeft: OverflowedTabInfo[];
    hiddenTabsToTheRight: OverflowedTabInfo[];
}

export interface HtmlButtonsProps extends FrameButtonsProps {
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
            Before?: React.ComponentType<BeforeTabsProps>;
            Element?: React.ComponentType<TabElementProps>;
            After?: React.ComponentType<AfterTabsProps>;
            Buttons?: React.ComponentType<TabHeaderButtonsProps>;
            Below?: React.ComponentType<BelowTabsProps>;
            OverflowPopup?: React.ComponentType<TabOverflowPopupProps>;
        };
        html?: {
            Buttons?: React.ComponentType<HtmlButtonsProps>;
        }
    },
    styles?: {
        tabs?: {
            header?: StylesOptions;
            moveArea?: StylesOptions;
        },
        frame?: {
            element?: StylesOptions;
        }
    }
}

export interface MoveAreaProps {
    elementId: string;
}

export interface GroupComponentVisibilityState {
    groupCaptionBarVisible?: boolean;
}

export interface OpenTabOverflowPopupOptions {
    frameId: string;
    location: Location;
}
