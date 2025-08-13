import { useEffect, useRef } from "react";
import webGroupsManager from "../../webGroupsManager";


export function useDragMove(threshold = 3) {
  const initialPos = useRef<{ x: number; y: number } | null>(null);

  const onMoveRef = useRef<(ev: MouseEvent) => void>();
  const onUpRef = useRef<(ev: MouseEvent) => void>();

  const cleanup = () => {
    document.removeEventListener("mousemove", onMoveRef.current!, true);
    document.removeEventListener("mouseup", onUpRef.current!, true);
    initialPos.current = null;
    document.body.style.pointerEvents = "auto";
  };

  if (!onMoveRef.current) {
    onMoveRef.current = (ev: MouseEvent) => {
      if (!initialPos.current) return;

      const dx = ev.pageX - initialPos.current.x;
      const dy = ev.pageY - initialPos.current.y;
      if (Math.abs(dx) >= threshold || Math.abs(dy) >= threshold) {
        document.body.style.pointerEvents = "none";
        cleanup();
        webGroupsManager.startDragMove();
      }

      ev.stopPropagation();
      ev.preventDefault();
    };
  }

  if (!onUpRef.current) {
    onUpRef.current = (ev: MouseEvent) => {
      cleanup();
      ev.stopPropagation();
      ev.preventDefault();
    };
  }

  const startDrag = (ev: React.MouseEvent) => {
    if (ev.button !== 0) return;
    initialPos.current = { x: ev.pageX, y: ev.pageY };

    document.addEventListener("mousemove", onMoveRef.current!, true);
    document.addEventListener("mouseup", onUpRef.current!, true);

    ev.stopPropagation();
    ev.preventDefault();
  };

  useEffect(() => {
    return () => {
      if (onMoveRef.current) document.removeEventListener("mousemove", onMoveRef.current, true);
      if (onUpRef.current) document.removeEventListener("mouseup", onUpRef.current, true);
      document.body.style.pointerEvents = "auto";
      initialPos.current = null;
    };
  }, []);

  return { startDrag };
}