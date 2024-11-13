import React, { useEffect, useRef, useState } from "react";
import { BaseMultiChannelSelectorProps } from "../../../types/defaultComponents";
import BaseChannelSelector from "../BaseChannelSelector";
import { getChannelDirection } from "../utils";

const BaseMultiChannelSelector: React.FC<BaseMultiChannelSelectorProps> = ({ outsideClass, contentClass, showSelector, selectedChannels, channelLabel, channelRestrictions }) => {
    const ref = useRef<HTMLDivElement>(null);
    const len = selectedChannels.length;
    const showBaseChannelSelector = len < 2;
    const wrappedOnClick = () => {
        if (!ref.current) {
            return;
        }

        const bounds = ref.current.getBoundingClientRect();
        showSelector({
            left: bounds.left,
            top: bounds.top,
            width: bounds.width,
            height: bounds.height,
        });
    }

    useEffect(() => {
        if (showBaseChannelSelector) {
            return;
        }

        const handler = (e: MouseEvent) => {
            e.stopPropagation();
        };
        const current = ref.current;
        ref.current?.addEventListener("mousedown", handler);
        return () => {
            current?.removeEventListener("mousedown", handler);
        }
    }, [ref, showBaseChannelSelector]);

    if (showBaseChannelSelector) {
        return <BaseChannelSelector
            showSelector={showSelector}
            selectedChannel={selectedChannels[0]?.name}
            selectedChannelColor={selectedChannels[0]?.color}
            outsideClass={outsideClass}
            contentClass={contentClass}
            channelLabel={channelLabel}
            direction={getChannelDirection(channelRestrictions)} />;
    }

    const colors = selectedChannels.map((channel) => channel.color) ?? [];
    const title = colors.join(", ");
    const lenMax4 = Math.min(len, 4);
    const cssClass = `t42-multi-channel-selector-content t42-multi-channel-selector-${lenMax4}`;
    let style: any = {};
    colors.forEach((color: string, index: number) => {
        const colorVarName = `--t42-multi-channel-selector-${lenMax4}-color-${index + 1}`;
        style[colorVarName] = color;
    });

    return (
        <div id="basem" title={title} ref={ref} onClick={wrappedOnClick} className={`t42-buttons ${outsideClass}`}>
            <div className={cssClass} style={style} >
            </div>
        </div>
    );
};

export default BaseMultiChannelSelector;
