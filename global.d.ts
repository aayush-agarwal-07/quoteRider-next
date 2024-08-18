// globals.d.ts
interface CursorIcon {
    show: (text: string) => void;
    hide: () => void;
}

interface Window {
    cursorIcon?: CursorIcon;
}
