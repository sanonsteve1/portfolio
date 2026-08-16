import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

export type CubeFace = "home" | "about" | "projects" | "path" | "contact";

export const FACE_ORDER: CubeFace[] = ["home", "about", "projects", "path", "contact"];

const DESKTOP_MQ = "(min-width: 1024px) and (min-height: 700px)";
const ROTATION_DESKTOP_MS = 1150;
const ROTATION_COMPACT_MS = 380;

type CubeContextValue = {
  face: CubeFace;
  setFace: (face: CubeFace) => void;
};

const CubeContext = createContext<CubeContextValue | null>(null);

export function useCube() {
  const ctx = useContext(CubeContext);
  if (!ctx) throw new Error("useCube must be used within CubeProvider");
  return ctx;
}

function isTypingTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false;
  return Boolean(target.closest("input, textarea, select, [contenteditable='true']"));
}

function isDesktopCube() {
  return window.matchMedia(DESKTOP_MQ).matches;
}

function getActiveFaceEl() {
  return document.querySelector<HTMLElement>(".cube-face.is-active");
}

function atScrollEdge(el: HTMLElement, direction: 1 | -1) {
  const slack = 14;
  if (el.scrollHeight <= el.clientHeight + slack) return true;
  if (direction > 0) return el.scrollTop + el.clientHeight >= el.scrollHeight - slack;
  return el.scrollTop <= slack;
}

export function CubeProvider({ children }: { children: ReactNode }) {
  const [face, setFaceState] = useState<CubeFace>("home");
  const faceRef = useRef(face);
  const lockedRef = useRef(false);
  const unlockTimer = useRef<number>(0);
  const touchStartY = useRef<number | null>(null);
  const touchStartScroll = useRef(0);

  faceRef.current = face;

  const lock = useCallback(() => {
    lockedRef.current = true;
    window.clearTimeout(unlockTimer.current);
    const ms = isDesktopCube() ? ROTATION_DESKTOP_MS : ROTATION_COMPACT_MS;
    unlockTimer.current = window.setTimeout(() => {
      lockedRef.current = false;
    }, ms);
  }, []);

  const setFace = useCallback(
    (next: CubeFace) => {
      if (next === faceRef.current) return;
      faceRef.current = next;
      setFaceState(next);
      lock();
    },
    [lock]
  );

  const stepFace = useCallback(
    (direction: 1 | -1) => {
      if (lockedRef.current) return;
      const index = FACE_ORDER.indexOf(faceRef.current);
      const next = FACE_ORDER[index + direction];
      if (!next) return;
      setFace(next);
    },
    [setFace]
  );

  useEffect(() => {
    const onWheel = (event: WheelEvent) => {
      if (isTypingTarget(event.target)) return;
      if (Math.abs(event.deltaY) < Math.abs(event.deltaX)) return;
      if (Math.abs(event.deltaY) < 16) return;

      const panel = getActiveFaceEl();
      const direction: 1 | -1 = event.deltaY > 0 ? 1 : -1;
      if (panel && !atScrollEdge(panel, direction)) return;

      event.preventDefault();
      stepFace(direction);
    };

    const onTouchStart = (event: TouchEvent) => {
      if (isTypingTarget(event.target)) return;
      touchStartY.current = event.touches[0]?.clientY ?? null;
      touchStartScroll.current = getActiveFaceEl()?.scrollTop ?? 0;
    };

    const onTouchEnd = (event: TouchEvent) => {
      if (touchStartY.current == null || isTypingTarget(event.target)) {
        touchStartY.current = null;
        return;
      }
      const endY = event.changedTouches[0]?.clientY;
      const startY = touchStartY.current;
      touchStartY.current = null;
      if (endY == null) return;

      const panel = getActiveFaceEl();
      const scrolled = panel != null && Math.abs(panel.scrollTop - touchStartScroll.current) > 6;
      if (scrolled) return;

      const delta = startY - endY;
      if (Math.abs(delta) < 56) return;
      const direction: 1 | -1 = delta > 0 ? 1 : -1;
      if (panel && !atScrollEdge(panel, direction)) return;
      stepFace(direction);
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
      window.clearTimeout(unlockTimer.current);
    };
  }, [stepFace]);

  const value = useMemo(() => ({ face, setFace }), [face, setFace]);
  return <CubeContext.Provider value={value}>{children}</CubeContext.Provider>;
}

export function CubeScene({ children }: { children: ReactNode }) {
  const { face } = useCube();

  useEffect(() => {
    const panel = getActiveFaceEl();
    if (panel) panel.scrollTop = 0;
  }, [face]);

  return (
    <div className="cube-scene">
      <div className="cube" data-face={face}>
        {children}
      </div>
    </div>
  );
}

export function CubeFacePanel({
  side,
  className,
  children,
}: {
  side: CubeFace;
  className?: string;
  children: ReactNode;
}) {
  const { face } = useCube();
  const active = face === side;
  return (
    <section
      data-side={side}
      className={cn("cube-face", active && "is-active", className)}
      aria-hidden={active ? undefined : true}
      inert={active ? undefined : true}
    >
      {children}
    </section>
  );
}
