 import { useEffect, useRef } from "react";

interface DragOptions {
  onDragStart: (initial: { x: number; y: number }) => void;
  threshold?: number;
}

export function useDragMove({ onDragStart, threshold = 3 }: DragOptions) {
  const initialPos = useRef<{ x: number; y: number } | null>(null);
  const dragging = useRef(false);

  const onDragStartRef = useRef(onDragStart);
  useEffect(() => { onDragStartRef.current = onDragStart; }, [onDragStart]);

  const onMoveRef = useRef<(ev: MouseEvent) => void>();
  const onUpRef = useRef<(ev: MouseEvent) => void>();

  if (!onMoveRef.current) {
    onMoveRef.current = (ev) => {
      if (!initialPos.current) return;
      ev.preventDefault();

      const dx = ev.pageX - initialPos.current.x;
      const dy = ev.pageY - initialPos.current.y;

      if (!dragging.current) {
        if (Math.abs(dx) >= threshold || Math.abs(dy) >= threshold) {
          dragging.current = true;
          document.body.style.pointerEvents = "none";
          onDragStartRef.current?.(initialPos.current);
        }
      }
    };
  }

  if (!onUpRef.current) {
    onUpRef.current = (ev) => {
      document.body.style.pointerEvents = "auto";
      document.removeEventListener("mousemove", onMoveRef.current!, true);
      document.removeEventListener("mouseup", onUpRef.current!, true);

      dragging.current = false;
      initialPos.current = null;

      ev.preventDefault();
    };
  }

  const startDrag = (ev: React.MouseEvent) => {
    if (ev.button !== 0) return;
    initialPos.current = { x: ev.pageX, y: ev.pageY };
    dragging.current = false;

    ev.preventDefault();
    ev.stopPropagation();

    document.addEventListener("mousemove", onMoveRef.current!, true);
    document.addEventListener("mouseup", onUpRef.current!, true);
  };

  useEffect(() => {
    return () => {
      if (onMoveRef.current) document.removeEventListener("mousemove", onMoveRef.current, true);
      if (onUpRef.current) document.removeEventListener("mouseup", onUpRef.current, true);
      document.body.style.pointerEvents = "auto";
    };
  }, []);

  return { startDrag };
}