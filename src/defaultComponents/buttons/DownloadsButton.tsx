import React from "react";
import { DownloadsButtonProps } from "../../types/defaultComponents";
import { StandardButtons } from "../../types/internal";
import BaseButton from "./BaseButton";
import { getDownloadButtonClassName, getStandardButtonInnerClassName, getStandardButtonOuterClassName } from "../utils/common";

const defaultDonwloadState =  { progress: -1, state: "not-started" } as NonNullable<DownloadsButtonProps['downloadsState']>;

const DownloadsButton: React.FC<DownloadsButtonProps> = (props) => {
    const { downloadsState = defaultDonwloadState } = props;

    const innerElementClassNames = [
        getStandardButtonInnerClassName(StandardButtons.Downloads, props.target),
        getDownloadButtonClassName(downloadsState)
    ].filter(Boolean).join(' ');

    const innerElementStyles = downloadsState.progress >= 0 ? ({ '--progress': downloadsState.progress } as React.CSSProperties) : undefined;

    return (
        <BaseButton
            innerElement={{
                className: innerElementClassNames,
                style: innerElementStyles
            }}
            outerElement={{
                className: getStandardButtonOuterClassName(StandardButtons.Downloads, props.target, props.isPressed),
                title: props.tooltip,
                onClick: props.onClick
            }}
        />
    )
};

export default DownloadsButton;
