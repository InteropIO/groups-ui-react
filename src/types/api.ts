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

export interface GroupCaptionBarProps {
    moveAreaId: string;
    targetType: string;
    targetId: string;
    caption: string;
    captionEditor?: any;
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
    captionEditor: any;
}

export interface TabElementProps {
    targetId: string;
    windowId: string;
    caption: string;
    selected: boolean;
    close: () => void;
    channels: ChannelProps;
    notifyCaptionBoundsChanged: (bounds: Bounds) => void;
    captionEditor: any;
}

export interface AfterTabsZoneProps {
    frameId: string;
    selectedWindow: string;
}

export interface TabHeaderButtonsProps {
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
            BelowWindow?: React.ComponentType<BelowWindowProps>;
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

export interface UseGroupCaptionEditorOptions {
    targetId: string;
    text: string;
    notifyEditorVisibilityChanged: (visible: boolean) => void;
    notifyBoundsChanged: (bounds: Bounds) => void;
}

export interface UseEditableGroupCaptionOptions {
    notifyBoundsChanged: (bounds: Bounds) => void;
}

export interface UseFlatCaptionEditorOptions {
    targetId: string;
    text: string;
    notifyEditorVisibilityChanged: (visible: boolean) => void;
    notifyBoundsChanged: (bounds: Bounds) => void;
}

export interface UseEditableFlatCaptionOptions {
    notifyBoundsChanged: (bounds: Bounds) => void;
}

export interface UseTabCaptionEditorOptions {
    targetId: string;
    text: string;
    notifyEditorVisibilityChanged: (visible: boolean) => void;
    notifyBoundsChanged: (bounds: Bounds) => void;
}

export interface UseEditableTabCaptionOptions {
    notifyBoundsChanged: (bounds: Bounds) => void;
}

export interface MoveAreaProps {
    elementId: string;
}

export interface GroupComponentVisibilityState {
    groupCaptionBarVisible?: boolean;
}