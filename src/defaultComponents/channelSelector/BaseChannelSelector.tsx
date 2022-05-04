import React, { useEffect, useRef } from "react";
import ChannelsIcon from "../../../assets/img/channels.svg";
import { BaseChannelSelectorProps } from "../../types/internal";
import { IsBlackReadable } from "./utils";

const BaseChannelSelector: React.FC<BaseChannelSelectorProps> = ({ outsideClass, contentClass, lightContentClass, darkContentClass, showSelector, selectedChannel }) => {
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
        ref.current?.addEventListener("mousedown", (e) => {
            e.stopPropagation();
        });
    }, [ref]);

    return <div title={selectedChannel ?? ""} ref={ref} style={{ background: selectedChannel }} onClick={wrappedOnClick} className={`t42-buttons ${outsideClass}`} >
        <div className={`${contentClass} ${selectedChannel && IsBlackReadable(selectedChannel) ? darkContentClass : lightContentClass}`}>
            <ChannelsIcon />
        </div>
    </div >
};

export default BaseChannelSelector;