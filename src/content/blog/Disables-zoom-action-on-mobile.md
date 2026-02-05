---
title: "Disables zoom action on mobile"
date: "2025-09-09"
description: "Disabling zoom or pinch-to-zoom feature on mobile devices, especially for iframes."
tags: ["web-development", "mobile-responsive", "react"]
---

The task is about disabling zoom or pinch-to-zoom feature on mobile; **especially** for iframe.
Googling for solutions always throws me with this HTML meta tag:

```html
<meta
  name="viewport"
  content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
/>
```

This may seems convincing at first, and it works; **except** for web developers worst enemy; Safari.

[Safari 10+ no longer respects `user-scalable=no`](https://stackoverflow.com/a/47866795) which brings another frustation. But the research never stops. This brings me to another solutions; via Javascript event listener.

```html
<script>
  window.addEventListener(
    "touchstart",
    (e) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    },
    { passive: false }
  );

  window.addEventListener(
    "touchmove",
    (e) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    },
    { passive: false }
  );

  window.addEventListener(
    "touchend",
    (e) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    },
    { passive: false }
  );
</script>
```

The following code checks for touches. If it is more than 1 touches, disable default behavior(which most likely be pinch to zoom). Does it disable scrolling? No. Since scrolling only use 1 finger so it works normally. Solved! atleast for now....
