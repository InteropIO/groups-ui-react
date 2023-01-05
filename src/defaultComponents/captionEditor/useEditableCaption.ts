import React, { useEffect, useLayoutEffect } from "react";
import { getElementBounds } from "../../utils";
import ResizeObserver from 'resize-observer-polyfill';
import { UseEditableCaptionOptions } from "../../types/defaultComponents";

function useEditableCaption(ref: React.RefObject<HTMLElement>, options: UseEditableCaptionOptions): void {
    useLayoutEffect(() => {
        if (!ref.current) {
            return;
        }

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
            observer.disconnect();
        }
    }, [ref]);
}

export default useEditableCaption;

