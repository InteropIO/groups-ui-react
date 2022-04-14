import React from "react";
import ChannelsIcon from "../../../assets/img/channels.svg";

const BaseChannelSelector: React.FC<any> = ({ outsideClass, contentClass }) => {
    return <div className={`t42-buttons ${outsideClass}`} >
        <div className={contentClass}>
            <ChannelsIcon />
        </div>
    </div>
};

export default BaseChannelSelector;