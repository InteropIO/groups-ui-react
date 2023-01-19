import React, { useEffect, useRef } from "react";
import { TabCloseButtonProps } from "../../types/defaultComponents";

const TabCloseButton: React.FC<TabCloseButtonProps> = ({ selected, close }) => {
    const normalClassName = "t42-tab-close-button t42-tab-bar-element";
    const selectedClassName = "t42-tab-close-button t42-tab-bar-element t42-selected-tab-close-button t42-selected-tab-element";

    const normalContentClassName = "t42-tab-close-button-content";
    const selectedContentClassName = "t42-tab-close-button-content t42-selected-tab-close-button-content";

    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        ref.current?.addEventListener("mousedown", (e) => {
            e.stopPropagation();
        });
    }, [ref]);

    return <div ref={ref} onClick={close} className={selected ? selectedClassName : normalClassName} title="close">
        <div className={selected ? selectedContentClassName : normalContentClassName}>
        </div>
    </div>
}

export default TabCloseButton;