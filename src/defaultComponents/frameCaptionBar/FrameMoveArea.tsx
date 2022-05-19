import React from "react";
import { FrameMoveAreaProps } from "../../types/internal";

const FrameMoveArea: React.FC<FrameMoveAreaProps> = ({ children, moveAreaId }) => {
    return <div id={moveAreaId} className="t42-move-area t42-frame-caption-bar-element">
        {children}
    </div>
}


export default FrameMoveArea;