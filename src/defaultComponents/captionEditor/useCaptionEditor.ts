import React, { useEffect } from "react";
import { getElementBounds } from "../../utils";
import ResizeObserver from 'resize-observer-polyfill';
import { UseCaptionEditorOptions } from "../../types/defaultComponents";

function useCaptionEditor(ref: React.RefObject<HTMLElement>, options: UseCaptionEditorOptions): void {
    useEffect(() => {
        if (!ref?.current) {
            return;
        }
        options.notifyEditorVisibilityChanged(true);
        const observer = new ResizeObserver(() => {
            if (ref.current) {
                options.notifyBoundsChanged(getElementBounds(ref.current));
            }
        });

        observer.observe(ref.current);

        if (ref.current) {
            options.notifyBoundsChanged(getElementBounds(ref.current));
        }

        return () => {
            options.notifyEditorVisibilityChanged(false);
            observer.disconnect();
        }
    }, [ref]);
}

export default useCaptionEditor;