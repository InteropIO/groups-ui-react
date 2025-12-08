import React from "react";
import { FeedbackButtonProps } from "../../types/defaultComponents";
import { StandardButtons } from "../../types/internal";
import StandardButton from "./StandardButton";

const FeedbackButton: React.FC<FeedbackButtonProps> = (props) => {
    return <StandardButton
        buttonId={StandardButtons.Feedback}
        {...props}
    />
}

export default FeedbackButton;