import React from "react";


export interface BaseChannelSelectorProps {
	showSelector: (bounds: Bounds) => void;
	outsideClass: string;
	contentClass: string;
	selectedChannel: string;
	selectedChannelColor: string;
}

export interface FrameChannelSelectorProps {
	showSelector: (bounds: Bounds) => void;
	selectedChannel: string;
	selectedChannelColor: string;
}

export interface TabChannelSelectorProps {
	showSelector: (bounds: Bounds) => void;
	selectedChannel: string;
	selectedChannelColor: string;
}

export interface PortalProps {
	parentElement: HTMLElement
}

export interface GroupCaptionBarProps {
	moveAreaId: string;
	targetType: string;
	targetId: string;
	caption: string;

	minimize: ButtonProps;
	maximize: ButtonProps;
	restore: ButtonProps;
	close: ButtonProps;
}

export interface GroupMoveAreaProps {
	moveAreaId: string;
}

export interface GroupButtonsProps {
	minimize: ButtonProps;
	maximize: ButtonProps;
	restore: ButtonProps;
	close: ButtonProps;
}

export interface GroupCaptionProps {
	caption: string;
}

export interface GroupOverlayProps {

}

export interface MoveAreaProps {
	elementId: string;
}

export interface FrameCaptionBarProps {
	frameId: string;
	moveAreaId: string;
	caption: string;
	extract?: ButtonProps;
	minimize?: ButtonProps;
	maximize?: ButtonProps;
	restore?: ButtonProps;
	close?: ButtonProps;
	channels: ChannelProps;
	selectedWindow: string;
}

export interface FrameMoveAreaProps {
	moveAreaId: string;
}

export interface FrameButtonsProps {
	extract?: ButtonProps;
	minimize?: ButtonProps;
	maximize?: ButtonProps;
	restore?: ButtonProps;
	close?: ButtonProps;
}

export interface FrameCaptionProps {
	caption: string;
}

export interface FrameWindowOverlayProps {
	frameId: string;
	selectedWindow: string;
}

export interface BelowWindowProps {
	frameId: string;
	selectedWindow: string;
}

export interface ChannelProps {
	visible: boolean;
	selectedChannel: string;
	showSelector: (bounds: Bounds) => void;
	selectedChannelColor: string;
}

export interface AboveTabsProps {
	frameId: string;
	selectedWindow: string;
}

export interface BeforeTabsZoneProps {
	frameId: string;
	selectedWindow: string;
}

export interface TabElementProps {
	targetId: string;
	windowId: string;
	caption: string;
	selected: boolean;
	close: () => void;
	channels: ChannelProps;
}

export interface TabCaptionProps {
	caption: string;
	selected: boolean;
}

export interface TabCloseButtonProps {
	selected: boolean;
	close: () => void;
}

export interface AfterTabsZoneProps {
	frameId: string;
	selectedWindow: string;
}

export interface TabHeaderButtonsProps {
	extract?: ButtonProps;
	minimize?: ButtonProps;
	maximize?: ButtonProps;
	restore?: ButtonProps;
	close?: ButtonProps;
	frameId: string;
	selectedWindow: string;
}

export interface BelowTabsProps {
	frameId: string;
	selectedWindow: string;
}

export interface ButtonProps {
	onClick: () => void;
	tooltip: string;
	visible: boolean;
}

export interface MinimizeButtonProps extends ButtonProps {
}

export interface MaximizeButtonProps extends ButtonProps {
}

export interface RestoreButtonProps extends ButtonProps {
}

export interface CloseButtonProps extends ButtonProps {
}

export interface BaseButtonProps {
	outerElement: React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;
	innerElement: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
}

export interface GroupProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
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
			CaptionBar?: React.ComponentType<FrameCaptionBarProps>;
		};
		tabs?: {
			Above?: React.ComponentType<AboveTabsProps>;
			Before?: React.ComponentType<BeforeTabsZoneProps>;
			Element?: React.ComponentType<TabElementProps>;
			After?: React.ComponentType<AfterTabsZoneProps>;
			Buttons?: React.ComponentType<TabHeaderButtonsProps>;
			Below?: React.ComponentType<BelowTabsProps>;
		}
	},
	glue?: any;
}

export interface GroupWrapperProps {
	onCreateGroupCaptionBarRequested?: (options: CreateGroupCaptionBarRequestOptions) => void;
	onUpdateGroupCaptionBarRequested?: (options: UpdateGroupCaptionBarRequestOptions) => void;

	onCreateGroupOverlayRequested?: (options: CreateElementRequestOptions) => void;

	onCreateFrameCaptionBarRequested?: (options: CreateFrameCaptionBarRequestOptions) => void;
	onUpdateFrameCaptionBarRequested?: (options: UpdateFrameCaptionBarRequestOptions) => void;

	onCreateFrameWindowOverlayRequested?: (options: CreateFrameElementRequestOptions) => void;
	onUpdateFrameWindowOverlayRequested?: (options: CreateFrameElementRequestOptions) => void;

	onCreateBelowWindowRequested?: (options: CreateFrameElementRequestOptions) => void;

	onCreateAboveTabsRequested?: (options: CreateFrameElementRequestOptions) => void;
	onUpdateAboveTabsRequested?: (options: CreateFrameElementRequestOptions) => void;

	onCreateBeforeTabsComponentRequested?: (options: CreateFrameElementRequestOptions) => void;
	onUpdateBeforeTabsComponentRequested?: (options: CreateFrameElementRequestOptions) => void;

	onCreateTabRequested?: (options: CreateTabRequestOptions) => void;
	onUpdateTabRequested?: (options: UpdateTabRequestOptions) => void;

	onCreateAfterTabsComponentRequested?: (options: CreateFrameElementRequestOptions) => void;
	onUpdateAfterTabsComponentRequested?: (options: CreateFrameElementRequestOptions) => void;

	onCreateTabHeaderButtonsRequested?: (options: CreateTabHeaderButtonsOptions) => void;

	onCreateBelowTabsRequested?: (options: CreateFrameElementRequestOptions) => void;
	onUpdateBelowTabsRequested?: (options: CreateFrameElementRequestOptions) => void;

	onUpdateFrameRequested?: (options: UpdateFrameRequestionOptions) => void;
	onUpdateStandardButtonRequested?: (options: UpdateStandardButtonRequestOptions) => void;

	onRemoveFrameCaptionBarRequested?: (options: RemoveRequestOptions) => void;
	onRemoveFrameWindowOverlayRequested?: (options: RemoveRequestOptions) => void;
	onRemoveBelowWindowRequested?: (options: RemoveRequestOptions) => void;
	onRemoveAboveTabsRequested?: (options: RemoveRequestOptions) => void;
	onRemoveBeforeTabsComponentRequested?: (options: RemoveRequestOptions) => void;
	onRemoveTabRequested?: (options: RemoveRequestOptions) => void;
	onRemoveAfterTabsComponentRequested?: (options: RemoveRequestOptions) => void;
	onRemoveTabHeaderButtonsRequested?: (options: RemoveRequestOptions) => void;
	onRemoveBelowTabsRequested?: (options: RemoveRequestOptions) => void;
}

export interface CreateGroupCaptionBarRequestOptions extends CreateElementRequestOptions {
	moveAreaId: string;
	caption: string;
	extract: {
		tooltip: string;
		visible: boolean;
	},
	minimize: {
		tooltip: string;
		visible: boolean;
	};
	restore: {
		tooltip: string;
		visible: boolean;
	};
	maximize: {
		tooltip: string;
		visible: boolean;
	};
	close: {
		tooltip: string;
		visible: boolean;
	};
}

export interface UpdateGroupCaptionBarRequestOptions extends CreateGroupCaptionBarRequestOptions {

}

export interface UpdateFrameCaptionBarRequestOptions extends BaseElementOptions {

}

export interface CreateFrameCaptionBarRequestOptions extends CreateFrameElementRequestOptions {
	caption: string;
	moveAreaId: string;
	channelSelectorVisible: boolean;
	selectedChannel: string;
	selectedChannelColor: string;
	minimize: {
		tooltip: string;
		visible: boolean;
	};
	restore: {
		tooltip: string;
		visible: boolean;
	};
	maximize: {
		tooltip: string;
		visible: boolean;
	};
	close: {
		tooltip: string;
		visible: boolean;
	};
}

export interface CreateTabRequestOptions extends CreateElementRequestOptions {
	caption: string;
	selected: boolean;
	channelSelectorVisible: boolean;
	selectedChannel: string;
	selectedChannelColor: string;
}

export interface UpdateTabRequestOptions extends BaseElementOptions {

}

export interface UpdateStandardButtonRequestOptions extends CreateElementRequestOptions {
	buttonId: StandardButtons;
	visible: boolean;
	tooltip: string;
}

export interface CreateTabHeaderButtonsOptions extends CreateFrameElementRequestOptions {
	minimize: {
		tooltip: string;
		visible: boolean;
	};
	restore: {
		tooltip: string;
		visible: boolean;
	};
	maximize: {
		tooltip: string;
		visible: boolean;
	};
	close: {
		tooltip: string;
		visible: boolean;
	};
}

export interface RemoveRequestOptions {
	targetId: string;
}

export interface BaseElementOptions {
	targetId: string;
}

export interface CreateElementRequestOptions extends BaseElementOptions {
	parentElement: HTMLElement;
	targetType: TargetType;
	elementId: string;
}

export interface CreateFrameElementRequestOptions extends CreateElementRequestOptions {
	selectedWindow: string;
}

export type UpdateFrameRequestionOptions = CreateFrameElementRequestOptions;

export enum TargetType {
	Group = "group",
	Frame = "frame",
	TabBar = "tabBar",
	Tab = "tab"
}

export enum StandardButtons {
	Minimize = "minimize",
	Maximize = "maximize",
	Restore = "restore",
	Close = "close"
}

export interface ElementCreationWrapperState {
	groupCaptionBar?: CreateGroupCaptionBarRequestOptions;
	groupOverlay?: CreateElementRequestOptions;
	frameCaptionBars: { [targetId: string]: CreateFrameCaptionBarRequestOptions };
	frameWindowOverlays: { [targetId: string]: CreateFrameElementRequestOptions };
	belowWindowZones: { [targetId: string]: CreateFrameElementRequestOptions };
	aboveTabsZones: { [targetId: string]: CreateFrameElementRequestOptions };
	beforeTabsZones: { [targetId: string]: CreateFrameElementRequestOptions };
	tabElements: { [targetId: string]: CreateTabRequestOptions };
	afterTabsZones: { [targetId: string]: CreateFrameElementRequestOptions };
	tabHeaderButtons: { [targetId: string]: CreateTabHeaderButtonsOptions };
	belowTabsZones: { [targetId: string]: CreateFrameElementRequestOptions };
}

export interface ExternalLibraryFactory {
	readonly groupId: string;
	focusPage(): void;
	focusFrame(frameId: string): void;
	focusGroup(): void;
	onStandardButtonClick(targetType: TargetType, targetId: string, buttonId: StandardButtons): void;
	onTabCloseButtonClick(targetId: string): void;
	onTabChannelSelectorClick(targetId: string, channelSelectorBounds: Bounds): void;
	onFrameChannelSelectorClick(targetId: string, channelSelectorBounds: Bounds): void;
	onMoveAreaChanged(targetType: TargetType, targetId: string): void;
}

export interface WebGroupsManager {
	init: (factory?: any) => void;
	notifyMoveAreaChanged(): void;
	registerPopup(element: HTMLElement): string;
	removePopup(element: HTMLElement): void;
	removePopupById(elementId: string): void;
	subscribeForWindowFocused(cb: () => any): () => void;
	unmount(): void;
	externalLibraryFactory: ExternalLibraryFactory;
}

export interface Size {
	width: number;
	height: number;
}

export interface Bounds extends Size {
	left: number;
	top: number;
}
