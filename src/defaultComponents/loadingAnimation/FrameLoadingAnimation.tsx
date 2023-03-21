import React from "react";
import { FrameLoadingAnimationProps } from "../../types/api";

const FrameLoadingAnimation: React.FC<FrameLoadingAnimationProps> = ({show}) => {
    return (
        show ?
        (
        <div className="t42-loading-animation">
            <div className="t42-loading active">
                <div className="t42-loading-text">Loading...</div>
            </div>
        </div>
        ) : <></>
    );
}

export default FrameLoadingAnimation;