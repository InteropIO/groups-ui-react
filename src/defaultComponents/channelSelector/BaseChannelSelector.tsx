import React, { useEffect, useRef } from "react";
import { BaseChannelSelectorProps } from "../../types/defaultComponents";
import { IsBlackReadable } from "./utils";

const BaseChannelSelector: React.FC<BaseChannelSelectorProps> = ({ outsideClass, contentClass, showSelector, selectedChannel, selectedChannelColor, direction, channelLabel }) => {
    const ref = useRef<HTMLDivElement>(null);
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
        const handler = (e: MouseEvent) => {
            e.stopPropagation();
        };
        const current = ref.current;
        current?.addEventListener("mousedown", handler);
        return ()=> {
            current?.removeEventListener("mousedown", handler);
        }
    }, [ref]);

    let className = contentClass;

    if (selectedChannel && selectedChannelColor) {
        className = `${contentClass} ${IsBlackReadable(selectedChannelColor) ? "t42-channel-selector-content-dark" : "t42-channel-selector-content-light"}`;
    }

    const style = {
        background: selectedChannelColor
    };

    return <div title={selectedChannel ?? ""} ref={ref}
        style={style}
        onClick={wrappedOnClick} className={`t42-buttons ${outsideClass}`} >
        {channelLabel ?
            <div className={`${className} icon`}>
                {channelLabel}
                {direction && <i className={`icon-${direction}`}></i>}
            </div> : <div className={className}>
            </div>}
    </div >
};

export default BaseChannelSelector;
