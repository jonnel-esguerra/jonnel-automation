import { useEffect, useRef, useState } from "react";

type ThemeMode = "light" | "dark" | "system";
type EffectiveTheme = "light" | "dark";

const storageKey = "portfolio-theme-mode";
const themeOptions: ThemeMode[] = ["light", "dark", "system"];

function isThemeMode(value: string | null): value is ThemeMode {
  return value === "light" || value === "dark" || value === "system";
}

function getStoredTheme(): ThemeMode {
  if (typeof window === "undefined") {
    return "system";
  }

  const stored = window.localStorage.getItem(storageKey);
  return isThemeMode(stored) ? stored : "system";
}

function getSystemTheme(): EffectiveTheme {
  if (typeof window === "undefined") {
    return "light";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function resolveTheme(mode: ThemeMode, systemTheme: EffectiveTheme): EffectiveTheme {
  return mode === "system" ? systemTheme : mode;
}

function labelFor(mode: ThemeMode) {
  return mode.charAt(0).toUpperCase() + mode.slice(1);
}

export default function ThemeToggle() {
  const [mode, setMode] = useState<ThemeMode>(getStoredTheme);
  const [systemTheme, setSystemTheme] = useState<EffectiveTheme>(getSystemTheme);
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const effectiveTheme = resolveTheme(mode, systemTheme);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    function handleChange(event: MediaQueryListEvent) {
      setSystemTheme(event.matches ? "dark" : "light");
    }

    setSystemTheme(media.matches ? "dark" : "light");
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = effectiveTheme;
    document.documentElement.style.colorScheme = effectiveTheme;
    window.localStorage.setItem(storageKey, mode);
  }, [effectiveTheme, mode]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handlePointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="theme-toggle" ref={rootRef}>
      <button
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-label={`Theme menu. Current mode is ${labelFor(mode)}.`}
        className="theme-trigger"
        onClick={() => setIsOpen((current) => !current)}
        type="button"
      >
        <span aria-hidden="true" className="theme-icon">
          {effectiveTheme === "dark" ? "☾" : "☀"}
        </span>
      </button>

      {isOpen ? (
        <div className="theme-menu" role="menu" aria-label="Theme options">
          {themeOptions.map((themeMode) => (
            <button
              aria-checked={mode === themeMode}
              className={mode === themeMode ? "theme-menu-item is-active" : "theme-menu-item"}
              key={themeMode}
              onClick={() => {
                setMode(themeMode);
                setIsOpen(false);
              }}
              role="menuitemradio"
              type="button"
            >
              {labelFor(themeMode)}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
