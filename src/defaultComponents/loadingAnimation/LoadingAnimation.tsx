import React from "react";
import { LoadingAnimationProps } from "../../types/api";

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({show}) => {

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

export default LoadingAnimation;