import React from "react";


export interface BaseChannelSelectorProps {
	showSelector: (bounds: Bounds) => void;
	outsideClass: string;
	contentClass: string;
	lightContentClass: string;
	darkContentClass: string;
	selectedChannel: string;
}

export interface FrameChannelSelectorProps {
	showSelector: (bounds: Bounds) => void;
	selectedChannel: string;
}

export interface TabChannelSelectorProps {
	showSelector: (bounds: Bounds) => void;
	selectedChannel: string;
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

export interface MoveAreaProps {
	elementId: string;
}

export interface FrameCaptionBarProps {
	moveAreaId: string;
	caption: string;
	extract: ButtonProps;
	minimize: ButtonProps;
	maximize: ButtonProps;
	restore: ButtonProps;
	close: ButtonProps;
	channels: ChannelProps;
}

export interface ChannelProps {
	visible: boolean;
	selectedChannel: string;
	showSelector: (bounds: Bounds) => void;
}

export interface BeforeTabsZoneProps {

}

export interface TabElementProps {
	targetId: string;
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

}

export interface TabHeaderButtonsProps {
	extract: ButtonProps;
	minimize: ButtonProps;
	maximize: ButtonProps;
	restore: ButtonProps;
	close: ButtonProps;
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

export interface GroupProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	components?: {
		group?: {
			CaptionBar?: React.ComponentType<GroupCaptionBarProps>;
		}
		frame?: {
			CaptionBar?: React.ComponentType<FrameCaptionBarProps>;
		};
		tabs?: {
			Before?: React.ComponentType<BeforeTabsZoneProps>;
			Element?: React.ComponentType<TabElementProps>;
			After?: React.ComponentType<AfterTabsZoneProps>;
			Buttons?: React.ComponentType<TabHeaderButtonsProps>; // TODO create a default element
		}
	},
	glue?: any;
}

export interface GroupWrapperProps {
	onCreateGroupCaptionBarRequested?: (options: CreateGroupCaptionBarRequestOptions) => void;
	onUpdateGroupCaptionBarRequested?: (options: UpdateGroupCaptionBarRequestOptions) => void;
	onCreateFrameCaptionBarRequested?: (options: CreateFrameCaptionBarRequestOptions) => void;
	onUpdateFrameCaptionBarRequested?: (options: UpdateFrameCaptionBarRequestOptions) => void;
	onCreateBeforeTabsComponentRequested?: (options: CreateBeforeTabsZoneRequestOptions) => void;
	onCreateTabRequested?: (options: CreateTabRequestOptions) => void;
	onUpdateTabRequested?: (options: UpdateTabRequestOptions) => void;
	onCreateAfterTabsComponentRequested?: (options: CreateAfterTabsZoneRequestOptions) => void;
	onCreateTabHeaderButtonsRequested?: (options: CreateTabHeaderButtonsOptions) => void;
	onUpdateStandardButtonRequested?: (options: UpdateStandardButtonRequestOptions) => void;
	onRemoveFrameCaptionBarRequested?: (options: RemoveRequestOptions) => void;
	onRemoveBeforeTabsComponentRequested?: (options: RemoveRequestOptions) => void;
	onRemoveTabRequested?: (options: RemoveRequestOptions) => void;
	onRemoveAfterTabsComponentRequested?: (options: RemoveRequestOptions) => void;
	onRemoveTabHeaderButtonsRequested?: (options: RemoveRequestOptions) => void;
}

export interface CreateGroupCaptionBarRequestOptions extends CreateElementRequestOptions {
	moveAreaId: string;
	targetId: string;
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

export interface UpdateTabRequestOptions extends BaseElementOptions {

}

export interface CreateFrameCaptionBarRequestOptions extends CreateElementRequestOptions {
	caption: string;
	moveAreaId: string;
	channelSelectorVisible: boolean;
	selectedChannel: string;
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
}

export interface UpdateStandardButtonRequestOptions extends CreateElementRequestOptions {
	buttonId: StandardButtons;
	visible: boolean;
	tooltip: string;
}

export interface CreateBeforeTabsZoneRequestOptions extends CreateElementRequestOptions {

}

export interface CreateAfterTabsZoneRequestOptions extends CreateElementRequestOptions {

}

export interface CreateTabHeaderButtonsOptions extends CreateElementRequestOptions {
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
	[k: string]: any;
}

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
	frameCaptionBars: { [targetId: string]: CreateFrameCaptionBarRequestOptions };
	beforeTabsZones: { [targetId: string]: CreateBeforeTabsZoneRequestOptions };
	tabElements: { [targetId: string]: CreateTabRequestOptions };
	afterTabsZones: { [targetId: string]: CreateAfterTabsZoneRequestOptions };
	tabHeaderButtons: { [targetId: string]: CreateTabHeaderButtonsOptions };
}

export interface ExternalLibraryFactory {
	readonly groupId: string;
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
	requestFocus(): void;
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
