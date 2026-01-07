import { StandardButtons, StandardButtonTarget } from "../../types/internal";
import { DownloadsButtonProps } from "../../types/defaultComponents";

export function getStandardButtonInnerClassName(buttonId: StandardButtons, target?: StandardButtonTarget): string {
    let classNames = `t42-standard-button t42-standard-button-${buttonId}`;
    if (target && target !== StandardButtonTarget.Default) {
        classNames = classNames.concat(` t42-standard-button-${target}-${buttonId}`);
    }
    return classNames;
}

export function getStandardButtonOuterClassName(buttonId: StandardButtons, target?: StandardButtonTarget, isPressed?: boolean): string {
    let classNames = `t42-button t42-caption-bar-button t42-tab-bar-button t42-caption-bar-button-${buttonId}`;
    if (isPressed === true) {
        classNames = classNames.concat(` active`);
    }
    if (target && target !== StandardButtonTarget.Default) {
        classNames = classNames.concat(` t42-caption-bar-button-${target}-${buttonId}`);
    }
    return classNames;
}

export function getDownloadButtonClassName(downloadState?: DownloadsButtonProps['downloadsState']): string {
    const defaultClass = 't42-standard-button-downloads';

    if (!downloadState) {
        return '';
    }
    
    switch(true) {
        case downloadState.state === 'not-started':
            return `${defaultClass}-download-not-started`;
        case downloadState.state === 'in-progress':
            return `${defaultClass}-download-in-progress`;
        case downloadState.state === 'paused':
            return `${defaultClass}-download-paused`;
        default:
            return `${defaultClass}-download-ready`;
    }
}