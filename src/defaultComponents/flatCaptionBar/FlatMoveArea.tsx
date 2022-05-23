import React from "react";
import { FlatMoveAreaProps } from "../../types/internal";

const FlatMoveArea: React.FC<FlatMoveAreaProps> = ({ children, moveAreaId }) => {
    return <div id={moveAreaId} className="t42-move-area t42-frame-caption-bar-element">
        {children}
    </div>
}


export default FlatMoveArea;