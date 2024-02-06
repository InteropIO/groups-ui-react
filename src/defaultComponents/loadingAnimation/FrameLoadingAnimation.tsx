import React from "react";
import { FrameLoadingAnimationProps } from "../../types/api";

const FrameLoadingAnimation: React.FC<FrameLoadingAnimationProps> = ({show}) => {
    return (
        show ?
        (
        <div className="loader-wrapper active">
            <div className="loader"></div>
            <div className="loader-text">Loading...</div>
        </div>
        ) : <></>
    );
}

export default FrameLoadingAnimation;