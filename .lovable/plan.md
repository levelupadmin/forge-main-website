

## Mobile Layout Fix — Horizontal Overflow & Initial Render

### Root Cause

Two issues visible in the phone screenshots:

1. **Horizontal overflow causing white space on the right**: On mobile browsers, `overflow-x: hidden` on `body` alone doesn't prevent horizontal scroll/zoom. The `html` element also needs it. Some elements using `100vw` (which includes scrollbar width) or `width: max-content` marquees may push the page wider.

2. **Desktop nav flashing on mobile**: `useIsMobile()` initializes state as `undefined`, and `!!undefined === false`, so the **desktop layout renders first** before the effect kicks in. On a real phone this can cause a visible flash of the desktop nav (as seen in screenshot 2).

### Changes

**`src/styles/forge.css`** (line 12 area)
- Add `overflow-x: hidden` to `html` alongside `body` to prevent mobile horizontal scroll on all browsers

**`src/hooks/use-mobile.tsx`**
- Initialize state using `window.innerWidth` check instead of `undefined`, so the very first render uses the correct layout:
  ```ts
  const [isMobile, setIsMobile] = useState<boolean>(
    typeof window !== 'undefined' ? window.innerWidth < MOBILE_BREAKPOINT : false
  );
  ```
- Remove the `!!` cast since state is now always a boolean

**`src/pages/Index.tsx`** (or root `div`)
- Add `overflow-x: hidden` as inline style on the root wrapper `<div>` to prevent any child from causing horizontal overflow

These three changes should eliminate the white-space-on-right issue and the desktop-nav-on-mobile flash.

