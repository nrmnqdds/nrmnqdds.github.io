---
title: "Visual viewport with keyboard on mobile"
date: "2025-09-15"
description: "Handling on-screen keyboard with visual viewport API in React applications."
tags: ["web-development", "mobile-responsive", "react"]
---

Continuation from [[Disables zoom action on mobile|previous blog]], disabling zoom already works. Now the problem is we got an input field, with submit button all the way at the bottom. So now when the keyboard opens up, it blocks the button; user has to close the keyboard to click the button. This is not efficient.

Here I learn about [https://developer.mozilla.org/en-US/docs/Web/API/Visual_Viewport_API](Visual viewport). It tells the visual portion of a screen excluding on-screen keyboards, areas outside of a pinch-zoom area, or any other on-screen artifact that doesn't scale with the dimensions of a page. So I got the virtual viewport hooks to work in our React app with the following snippet code:

```typescript
export function useDetectKeyboardOpen(
  minKeyboardHeight = 300,
  debounceMs = 100
): KeyboardState {
  const [keyboardState, setKeyboardState] = useState<KeyboardState>(() => {
    const screenHeight = window.screen.height;
    const viewportHeight = window.visualViewport?.height || window.innerHeight;
    const keyboardHeight = Math.max(0, screenHeight - viewportHeight);
    const isOpen = keyboardHeight > minKeyboardHeight;

    return {
      isOpen,
      viewportHeight,
      screenHeight,
      keyboardHeight,
    };
  });

  const updateKeyboardState = useCallback(() => {
    const screenHeight = window.screen.height;
    const viewportHeight = window.visualViewport?.height || window.innerHeight;
    const keyboardHeight = Math.max(0, screenHeight - viewportHeight);
    const isOpen = keyboardHeight > minKeyboardHeight;

    setKeyboardState((prevState) => {
      // Only update if there's a meaningful change to avoid unnecessary re-renders
      if (
        prevState.isOpen !== isOpen ||
        Math.abs(prevState.viewportHeight - viewportHeight) > 10 ||
        Math.abs(prevState.keyboardHeight - keyboardHeight) > 10
      ) {
        return {
          isOpen,
          viewportHeight,
          screenHeight,
          keyboardHeight,
        };
      }
      return prevState;
    });
  }, [minKeyboardHeight]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const debouncedUpdate = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateKeyboardState, debounceMs);
    };

    // Check if visual viewport API is supported
    if (typeof window.visualViewport !== "undefined" && window.visualViewport) {
      const visualViewport = window.visualViewport;

      // Listen to resize events on visual viewport
      visualViewport.addEventListener("resize", debouncedUpdate);

      // Also listen to scroll events as they can indicate keyboard changes
      visualViewport.addEventListener("scroll", debouncedUpdate);

      return () => {
        clearTimeout(timeoutId);
        visualViewport.removeEventListener("resize", debouncedUpdate);
        visualViewport.removeEventListener("scroll", debouncedUpdate);
      };
    } else {
      // Fallback for browsers without visual viewport support
      window.addEventListener("resize", debouncedUpdate);
      window.addEventListener("orientationchange", debouncedUpdate);

      return () => {
        clearTimeout(timeoutId);
        window.removeEventListener("resize", debouncedUpdate);
        window.removeEventListener("orientationchange", debouncedUpdate);
      };
    }
  }, [updateKeyboardState, debounceMs]);

  console.log("keyboard state: ", keyboardState);
  return keyboardState;
}
```

Having a useful hook for checking current virtual viewport, and if keyboard is opened or not, is very useful. **However**, it is not the case for web developers worst enemy; Safari. Again, Safari don't support virtual viewport; [https://github.com/WICG/visual-viewport/issues/79](actually it do, but it doesn't work). Another L for Safari. I have to find another solution to support this.
