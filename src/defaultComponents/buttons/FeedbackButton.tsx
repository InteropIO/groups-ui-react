import React from "react";
import { FeedbackButtonProps } from "../../types/defaultComponents";
import BaseButton from "./BaseButton";

const FeedbackButton: React.FC<FeedbackButtonProps> = ({ onClick, tooltip }) => {
    return <BaseButton
        innerElement={{ className: "t42-standard-button t42-standard-button-feedback" }}
        outerElement={{ className: "t42-button t42-caption-bar-button t42-tab-bar-button t42-caption-bar-button-feedback", title: tooltip, onClick }} />
}

export default FeedbackButton;