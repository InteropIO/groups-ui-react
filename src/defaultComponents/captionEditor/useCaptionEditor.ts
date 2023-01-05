import React, { useEffect, useLayoutEffect } from "react";
import { getElementBounds } from "../../utils";
import ResizeObserver from 'resize-observer-polyfill';
import { UseCaptionEditorOptions } from "../../types/defaultComponents";

function useCaptionEditor(ref: React.RefObject<HTMLInputElement>, options: UseCaptionEditorOptions): void {
    useEffect(() => {
        if (!ref?.current) {
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

    useLayoutEffect(() => {
        if (!ref?.current) {
            return;
        }

        options.notifyEditorVisibilityChanged(true);

        const element = ref.current;
        const onMouseDown = (e: MouseEvent) => {
            e.stopPropagation();
        };

        element.addEventListener("mousedown", onMouseDown);
        element.addEventListener("click", onMouseDown);

        if (ref.current) {
            setTimeout(() => {
                ref!.current!.focus();
                ref!.current!.select();
            }, 0);
        }

        return () => {
            element?.removeEventListener("mousedown", onMouseDown);
            element?.removeEventListener("click", onMouseDown);

            options.notifyEditorVisibilityChanged(false);
        }
    }, [ref]);
}

export default useCaptionEditor;

