import React from "react";

export interface PortalProps {
	parentElement: HTMLElement
}

export interface GroupCaptionBarProps {
	elementId: string;
	moveAreaId: string;
	targetType: string;
	targetId: string;
	text: string;
}

export interface MoveAreaProps {
	elementId: string;
}

export interface FrameCaptionBarProps {
	moveAreaId: string;
	text: string;
}

export interface BeforeTabsZoneProps {

}

export interface TabElementProps {
	elementId: string;
	text: string;
	isSelected: boolean;
}

export interface TabCaptionProps {
	text: string;
	isSelected: boolean;
}

export interface TabCloseButtonProps {
	isSelected: boolean;
}

export interface AfterTabsZoneProps {

}

export interface ButtonsProps {

}

export interface MinimizeButtonProps {

}

export interface MaximizeButtonProps {

}

export interface CloseButtonProps {

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
			Buttons?: React.ComponentType<ButtonsProps>;
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
	onRemoveFrameCaptionBarRequested?: (options: RemoveRequestOptions) => void;
	onRemoveBeforeTabsComponentRequested?: (options: RemoveRequestOptions) => void;
	onRemoveTabRequested?: (options: RemoveRequestOptions) => void;
	onRemoveAfterTabsComponentRequested?: (options: RemoveRequestOptions) => void;
	onRemoveTabHeaderButtonsRequested?: (options: RemoveRequestOptions) => void;
	glue?: any;
}

export interface CreateGroupCaptionBarRequestOptions extends CreateElementRequestOptions {
	moveAreaId: string;
	targetId: string;
	targetType: string;
	text: string;
}

export interface UpdateGroupCaptionBarRequestOptions extends BaseElementOptions {

}

export interface UpdateFrameCaptionBarRequestOptions extends BaseElementOptions {

}

export interface UpdateTabRequestOptions extends BaseElementOptions {

}

export interface CreateFrameCaptionBarRequestOptions extends CreateElementRequestOptions {
	text: string;
	moveAreaId: string;
}

export interface CreateTabRequestOptions extends CreateElementRequestOptions {
	text: string;
	isSelected: boolean;
}

export interface CreateBeforeTabsZoneRequestOptions extends CreateElementRequestOptions {

}

export interface CreateAfterTabsZoneRequestOptions extends CreateElementRequestOptions {

}

export interface CreateTabHeaderButtonsOptions extends CreateElementRequestOptions {

}

export interface RemoveRequestOptions {
	elementId: string;
}

export interface BaseElementOptions {
	elementId: string;
}

export interface CreateElementRequestOptions extends BaseElementOptions {
	parentElement: HTMLElement;
	elementId: string;
	callback?: () => void;
	[k: string]: any;
}

export interface ElementCreationWrapperState {
	groupCaptionBar?: CreateGroupCaptionBarRequestOptions;
	frameCaptionBars: { [elementId: string]: CreateFrameCaptionBarRequestOptions };
	beforeTabsZones: { [elementId: string]: CreateBeforeTabsZoneRequestOptions };
	tabElements: { [elementId: string]: CreateTabRequestOptions };
	afterTabsZones: { [elementId: string]: CreateAfterTabsZoneRequestOptions };
	tabHeaderButtons: { [elementId: string]: CreateTabHeaderButtonsOptions };
}

export interface WebGroupsManager {
	init: (factory?: any) => void;
	getGroupId: () => string;
	notifyMoveAreaChanged(): void;
	registerPopup(element: HTMLElement): string;
	removePopup(element: HTMLElement): void;
	removePopupById(elementId: string): void;
	subscribeForWindowFocused(cb: () => any): () => void;
	unmount(): void;
	requestFocus(): void;
}
