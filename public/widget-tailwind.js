
      (function() {
        if (!document.getElementById('tryon-ai-styles')) {
          const style = document.createElement('style');
          style.id = 'tryon-ai-styles';
          style.textContent = `
            /* TryOn AI Widget Scoped Styles */
            #tryon-ai-widget {
              all: initial;
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              font-size: 14px;
              line-height: 1.5;
              color: #111827;
              box-sizing: border-box;
            }
            #tryon-ai-widget *, 
            #tryon-ai-widget *::before, 
            #tryon-ai-widget *::after {
              box-sizing: border-box;
            }
            *, ::before, ::after {
    --tw-border-spacing-x: 0;
    --tw-border-spacing-y: 0;
    --tw-translate-x: 0;
    --tw-translate-y: 0;
    --tw-rotate: 0;
    --tw-skew-x: 0;
    --tw-skew-y: 0;
    --tw-scale-x: 1;
    --tw-scale-y: 1;
    --tw-pan-x:  ;
    --tw-pan-y:  ;
    --tw-pinch-zoom:  ;
    --tw-scroll-snap-strictness: proximity;
    --tw-gradient-from-position:  ;
    --tw-gradient-via-position:  ;
    --tw-gradient-to-position:  ;
    --tw-ordinal:  ;
    --tw-slashed-zero:  ;
    --tw-numeric-figure:  ;
    --tw-numeric-spacing:  ;
    --tw-numeric-fraction:  ;
    --tw-ring-inset:  ;
    --tw-ring-offset-width: 0px;
    --tw-ring-offset-color: #fff;
    --tw-ring-color: rgb(59 130 246 / 0.5);
    --tw-ring-offset-shadow: 0 0 #0000;
    --tw-ring-shadow: 0 0 #0000;
    --tw-shadow: 0 0 #0000;
    --tw-shadow-colored: 0 0 #0000;
    --tw-blur:  ;
    --tw-brightness:  ;
    --tw-contrast:  ;
    --tw-grayscale:  ;
    --tw-hue-rotate:  ;
    --tw-invert:  ;
    --tw-saturate:  ;
    --tw-sepia:  ;
    --tw-drop-shadow:  ;
    --tw-backdrop-blur:  ;
    --tw-backdrop-brightness:  ;
    --tw-backdrop-contrast:  ;
    --tw-backdrop-grayscale:  ;
    --tw-backdrop-hue-rotate:  ;
    --tw-backdrop-invert:  ;
    --tw-backdrop-opacity:  ;
    --tw-backdrop-saturate:  ;
    --tw-backdrop-sepia:  ;
    --tw-contain-size:  ;
    --tw-contain-layout:  ;
    --tw-contain-paint:  ;
    --tw-contain-style:  
}
::backdrop {
    --tw-border-spacing-x: 0;
    --tw-border-spacing-y: 0;
    --tw-translate-x: 0;
    --tw-translate-y: 0;
    --tw-rotate: 0;
    --tw-skew-x: 0;
    --tw-skew-y: 0;
    --tw-scale-x: 1;
    --tw-scale-y: 1;
    --tw-pan-x:  ;
    --tw-pan-y:  ;
    --tw-pinch-zoom:  ;
    --tw-scroll-snap-strictness: proximity;
    --tw-gradient-from-position:  ;
    --tw-gradient-via-position:  ;
    --tw-gradient-to-position:  ;
    --tw-ordinal:  ;
    --tw-slashed-zero:  ;
    --tw-numeric-figure:  ;
    --tw-numeric-spacing:  ;
    --tw-numeric-fraction:  ;
    --tw-ring-inset:  ;
    --tw-ring-offset-width: 0px;
    --tw-ring-offset-color: #fff;
    --tw-ring-color: rgb(59 130 246 / 0.5);
    --tw-ring-offset-shadow: 0 0 #0000;
    --tw-ring-shadow: 0 0 #0000;
    --tw-shadow: 0 0 #0000;
    --tw-shadow-colored: 0 0 #0000;
    --tw-blur:  ;
    --tw-brightness:  ;
    --tw-contrast:  ;
    --tw-grayscale:  ;
    --tw-hue-rotate:  ;
    --tw-invert:  ;
    --tw-saturate:  ;
    --tw-sepia:  ;
    --tw-drop-shadow:  ;
    --tw-backdrop-blur:  ;
    --tw-backdrop-brightness:  ;
    --tw-backdrop-contrast:  ;
    --tw-backdrop-grayscale:  ;
    --tw-backdrop-hue-rotate:  ;
    --tw-backdrop-invert:  ;
    --tw-backdrop-opacity:  ;
    --tw-backdrop-saturate:  ;
    --tw-backdrop-sepia:  ;
    --tw-contain-size:  ;
    --tw-contain-layout:  ;
    --tw-contain-paint:  ;
    --tw-contain-style:  
}
      #tryon-ai-widget .container {
    width: 100%
}
      @media (min-width: 640px) {
    #tryon-ai-widget .container {
        max-width: 640px
    }
}
      @media (min-width: 768px) {
    #tryon-ai-widget .container {
        max-width: 768px
    }
}
      @media (min-width: 1024px) {
    #tryon-ai-widget .container {
        max-width: 1024px
    }
}
      @media (min-width: 1280px) {
    #tryon-ai-widget .container {
        max-width: 1280px
    }
}
      @media (min-width: 1536px) {
    #tryon-ai-widget .container {
        max-width: 1536px
    }
}
      #tryon-ai-widget #tryon-ai-widget .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0
}
      #tryon-ai-widget #tryon-ai-widget .pointer-events-none {
    pointer-events: none
}
      #tryon-ai-widget #tryon-ai-widget .pointer-events-auto {
    pointer-events: auto
}
      #tryon-ai-widget #tryon-ai-widget .visible {
    visibility: visible
}
      #tryon-ai-widget #tryon-ai-widget .invisible {
    visibility: hidden
}
      #tryon-ai-widget #tryon-ai-widget .fixed {
    position: fixed
}
      #tryon-ai-widget #tryon-ai-widget .absolute {
    position: absolute
}
      #tryon-ai-widget #tryon-ai-widget .relative {
    position: relative
}
      #tryon-ai-widget #tryon-ai-widget .inset-0 {
    inset: 0px
}
      #tryon-ai-widget #tryon-ai-widget .inset-x-0 {
    left: 0px;
    right: 0px
}
      #tryon-ai-widget #tryon-ai-widget .inset-y-0 {
    top: 0px;
    bottom: 0px
}
      #tryon-ai-widget .-bottom-12 {
    bottom: -3rem
}
      #tryon-ai-widget .-left-12 {
    left: -3rem
}
      #tryon-ai-widget .-right-12 {
    right: -3rem
}
      #tryon-ai-widget .-top-12 {
    top: -3rem
}
      #tryon-ai-widget #tryon-ai-widget .bottom-0 {
    bottom: 0px
}
      #tryon-ai-widget #tryon-ai-widget .bottom-6 {
    bottom: 1.5rem
}
      #tryon-ai-widget #tryon-ai-widget .left-0 {
    left: 0px
}
      #tryon-ai-widget #tryon-ai-widget .left-1 {
    left: 0.25rem
}
      #tryon-ai-widget #tryon-ai-widget .left-1\/2 {
    left: 50%
}
      #tryon-ai-widget #tryon-ai-widget .left-2 {
    left: 0.5rem
}
      #tryon-ai-widget #tryon-ai-widget .left-6 {
    left: 1.5rem
}
      #tryon-ai-widget #tryon-ai-widget .left-\[50\%\] {
    left: 50%
}
      #tryon-ai-widget #tryon-ai-widget .right-0 {
    right: 0px
}
      #tryon-ai-widget #tryon-ai-widget .right-1 {
    right: 0.25rem
}
      #tryon-ai-widget #tryon-ai-widget .right-2 {
    right: 0.5rem
}
      #tryon-ai-widget #tryon-ai-widget .right-3 {
    right: 0.75rem
}
      #tryon-ai-widget #tryon-ai-widget .right-4 {
    right: 1rem
}
      #tryon-ai-widget #tryon-ai-widget .right-6 {
    right: 1.5rem
}
      #tryon-ai-widget #tryon-ai-widget .top-0 {
    top: 0px
}
      #tryon-ai-widget #tryon-ai-widget .top-1\.5 {
    top: 0.375rem
}
      #tryon-ai-widget #tryon-ai-widget .top-1\/2 {
    top: 50%
}
      #tryon-ai-widget #tryon-ai-widget .top-2 {
    top: 0.5rem
}
      #tryon-ai-widget #tryon-ai-widget .top-3\.5 {
    top: 0.875rem
}
      #tryon-ai-widget #tryon-ai-widget .top-4 {
    top: 1rem
}
      #tryon-ai-widget #tryon-ai-widget .top-6 {
    top: 1.5rem
}
      #tryon-ai-widget #tryon-ai-widget .top-\[1px\] {
    top: 1px
}
      #tryon-ai-widget #tryon-ai-widget .top-\[50\%\] {
    top: 50%
}
      #tryon-ai-widget #tryon-ai-widget .top-\[60\%\] {
    top: 60%
}
      #tryon-ai-widget #tryon-ai-widget .top-full {
    top: 100%
}
      #tryon-ai-widget #tryon-ai-widget .z-10 {
    z-index: 10
}
      #tryon-ai-widget #tryon-ai-widget .z-20 {
    z-index: 20
}
      #tryon-ai-widget #tryon-ai-widget .z-50 {
    z-index: 50
}
      #tryon-ai-widget #tryon-ai-widget .z-\[10000\] {
    z-index: 10000
}
      #tryon-ai-widget #tryon-ai-widget .z-\[100\] {
    z-index: 100
}
      #tryon-ai-widget #tryon-ai-widget .z-\[1\] {
    z-index: 1
}
      #tryon-ai-widget .-mx-1 {
    margin-left: -0.25rem;
    margin-right: -0.25rem
}
      #tryon-ai-widget #tryon-ai-widget .mx-2 {
    margin-left: 0.5rem;
    margin-right: 0.5rem
}
      #tryon-ai-widget #tryon-ai-widget .mx-3\.5 {
    margin-left: 0.875rem;
    margin-right: 0.875rem
}
      #tryon-ai-widget #tryon-ai-widget .mx-auto {
    margin-left: auto;
    margin-right: auto
}
      #tryon-ai-widget #tryon-ai-widget .my-0\.5 {
    margin-top: 0.125rem;
    margin-bottom: 0.125rem
}
      #tryon-ai-widget #tryon-ai-widget .my-1 {
    margin-top: 0.25rem;
    margin-bottom: 0.25rem
}
      #tryon-ai-widget #tryon-ai-widget .my-4 {
    margin-top: 1rem;
    margin-bottom: 1rem
}
      #tryon-ai-widget .-ml-4 {
    margin-left: -1rem
}
      #tryon-ai-widget .-mt-4 {
    margin-top: -1rem
}
      #tryon-ai-widget #tryon-ai-widget .mb-1 {
    margin-bottom: 0.25rem
}
      #tryon-ai-widget #tryon-ai-widget .mb-2 {
    margin-bottom: 0.5rem
}
      #tryon-ai-widget #tryon-ai-widget .mb-3 {
    margin-bottom: 0.75rem
}
      #tryon-ai-widget #tryon-ai-widget .mb-4 {
    margin-bottom: 1rem
}
      #tryon-ai-widget #tryon-ai-widget .ml-1 {
    margin-left: 0.25rem
}
      #tryon-ai-widget #tryon-ai-widget .ml-auto {
    margin-left: auto
}
      #tryon-ai-widget #tryon-ai-widget .mr-1 {
    margin-right: 0.25rem
}
      #tryon-ai-widget #tryon-ai-widget .mr-2 {
    margin-right: 0.5rem
}
      #tryon-ai-widget #tryon-ai-widget .mt-0\.5 {
    margin-top: 0.125rem
}
      #tryon-ai-widget #tryon-ai-widget .mt-1\.5 {
    margin-top: 0.375rem
}
      #tryon-ai-widget #tryon-ai-widget .mt-2 {
    margin-top: 0.5rem
}
      #tryon-ai-widget #tryon-ai-widget .mt-24 {
    margin-top: 6rem
}
      #tryon-ai-widget #tryon-ai-widget .mt-4 {
    margin-top: 1rem
}
      #tryon-ai-widget #tryon-ai-widget .mt-6 {
    margin-top: 1.5rem
}
      #tryon-ai-widget #tryon-ai-widget .mt-auto {
    margin-top: auto
}
      #tryon-ai-widget #tryon-ai-widget .block {
    display: block
}
      #tryon-ai-widget #tryon-ai-widget .flex {
    display: flex
}
      #tryon-ai-widget #tryon-ai-widget .inline-flex {
    display: inline-flex
}
      #tryon-ai-widget #tryon-ai-widget .table {
    display: table
}
      #tryon-ai-widget #tryon-ai-widget .grid {
    display: grid
}
      #tryon-ai-widget #tryon-ai-widget .hidden {
    display: none
}
      #tryon-ai-widget #tryon-ai-widget .aspect-square {
    aspect-ratio: 1 / 1
}
      #tryon-ai-widget #tryon-ai-widget .aspect-video {
    aspect-ratio: 16 / 9
}
      #tryon-ai-widget #tryon-ai-widget .size-4 {
    width: 1rem;
    height: 1rem
}
      #tryon-ai-widget #tryon-ai-widget .h-1\.5 {
    height: 0.375rem
}
      #tryon-ai-widget #tryon-ai-widget .h-10 {
    height: 2.5rem
}
      #tryon-ai-widget #tryon-ai-widget .h-11 {
    height: 2.75rem
}
      #tryon-ai-widget #tryon-ai-widget .h-12 {
    height: 3rem
}
      #tryon-ai-widget #tryon-ai-widget .h-16 {
    height: 4rem
}
      #tryon-ai-widget #tryon-ai-widget .h-2 {
    height: 0.5rem
}
      #tryon-ai-widget #tryon-ai-widget .h-2\.5 {
    height: 0.625rem
}
      #tryon-ai-widget #tryon-ai-widget .h-20 {
    height: 5rem
}
      #tryon-ai-widget #tryon-ai-widget .h-3 {
    height: 0.75rem
}
      #tryon-ai-widget #tryon-ai-widget .h-3\.5 {
    height: 0.875rem
}
      #tryon-ai-widget #tryon-ai-widget .h-4 {
    height: 1rem
}
      #tryon-ai-widget #tryon-ai-widget .h-5 {
    height: 1.25rem
}
      #tryon-ai-widget #tryon-ai-widget .h-6 {
    height: 1.5rem
}
      #tryon-ai-widget #tryon-ai-widget .h-7 {
    height: 1.75rem
}
      #tryon-ai-widget #tryon-ai-widget .h-8 {
    height: 2rem
}
      #tryon-ai-widget #tryon-ai-widget .h-80 {
    height: 20rem
}
      #tryon-ai-widget #tryon-ai-widget .h-9 {
    height: 2.25rem
}
      #tryon-ai-widget #tryon-ai-widget .h-\[1px\] {
    height: 1px
}
      #tryon-ai-widget #tryon-ai-widget .h-\[var\(--radix-navigation-menu-viewport-height\)\] {
    height: var(--radix-navigation-menu-viewport-height)
}
      #tryon-ai-widget #tryon-ai-widget .h-\[var\(--radix-select-trigger-height\)\] {
    height: var(--radix-select-trigger-height)
}
      #tryon-ai-widget #tryon-ai-widget .h-auto {
    height: auto
}
      #tryon-ai-widget #tryon-ai-widget .h-full {
    height: 100%
}
      #tryon-ai-widget #tryon-ai-widget .h-px {
    height: 1px
}
      #tryon-ai-widget #tryon-ai-widget .h-screen {
    height: 100vh
}
      #tryon-ai-widget #tryon-ai-widget .h-svh {
    height: 100svh
}
      #tryon-ai-widget #tryon-ai-widget .max-h-80 {
    max-height: 20rem
}
      #tryon-ai-widget #tryon-ai-widget .max-h-96 {
    max-height: 24rem
}
      #tryon-ai-widget #tryon-ai-widget .max-h-\[--radix-context-menu-content-available-height\] {
    max-height: var(--radix-context-menu-content-available-height)
}
      #tryon-ai-widget #tryon-ai-widget .max-h-\[--radix-select-content-available-height\] {
    max-height: var(--radix-select-content-available-height)
}
      #tryon-ai-widget #tryon-ai-widget .max-h-\[300px\] {
    max-height: 300px
}
      #tryon-ai-widget #tryon-ai-widget .max-h-\[70vh\] {
    max-height: 70vh
}
      #tryon-ai-widget #tryon-ai-widget .max-h-\[90vh\] {
    max-height: 90vh
}
      #tryon-ai-widget #tryon-ai-widget .max-h-\[var\(--radix-dropdown-menu-content-available-height\)\] {
    max-height: var(--radix-dropdown-menu-content-available-height)
}
      #tryon-ai-widget #tryon-ai-widget .max-h-full {
    max-height: 100%
}
      #tryon-ai-widget #tryon-ai-widget .max-h-screen {
    max-height: 100vh
}
      #tryon-ai-widget #tryon-ai-widget .min-h-0 {
    min-height: 0px
}
      #tryon-ai-widget #tryon-ai-widget .min-h-\[460px\] {
    min-height: 460px
}
      #tryon-ai-widget #tryon-ai-widget .min-h-\[80px\] {
    min-height: 80px
}
      #tryon-ai-widget #tryon-ai-widget .min-h-svh {
    min-height: 100svh
}
      #tryon-ai-widget #tryon-ai-widget .w-0 {
    width: 0px
}
      #tryon-ai-widget #tryon-ai-widget .w-1 {
    width: 0.25rem
}
      #tryon-ai-widget #tryon-ai-widget .w-10 {
    width: 2.5rem
}
      #tryon-ai-widget #tryon-ai-widget .w-11 {
    width: 2.75rem
}
      #tryon-ai-widget #tryon-ai-widget .w-12 {
    width: 3rem
}
      #tryon-ai-widget #tryon-ai-widget .w-16 {
    width: 4rem
}
      #tryon-ai-widget #tryon-ai-widget .w-2 {
    width: 0.5rem
}
      #tryon-ai-widget #tryon-ai-widget .w-2\.5 {
    width: 0.625rem
}
      #tryon-ai-widget #tryon-ai-widget .w-3 {
    width: 0.75rem
}
      #tryon-ai-widget #tryon-ai-widget .w-3\.5 {
    width: 0.875rem
}
      #tryon-ai-widget #tryon-ai-widget .w-3\/4 {
    width: 75%
}
      #tryon-ai-widget #tryon-ai-widget .w-4 {
    width: 1rem
}
      #tryon-ai-widget #tryon-ai-widget .w-5 {
    width: 1.25rem
}
      #tryon-ai-widget #tryon-ai-widget .w-6 {
    width: 1.5rem
}
      #tryon-ai-widget #tryon-ai-widget .w-64 {
    width: 16rem
}
      #tryon-ai-widget #tryon-ai-widget .w-7 {
    width: 1.75rem
}
      #tryon-ai-widget #tryon-ai-widget .w-72 {
    width: 18rem
}
      #tryon-ai-widget #tryon-ai-widget .w-8 {
    width: 2rem
}
      #tryon-ai-widget #tryon-ai-widget .w-9 {
    width: 2.25rem
}
      #tryon-ai-widget #tryon-ai-widget .w-\[--sidebar-width\] {
    width: var(--sidebar-width)
}
      #tryon-ai-widget #tryon-ai-widget .w-\[100px\] {
    width: 100px
}
      #tryon-ai-widget #tryon-ai-widget .w-\[1px\] {
    width: 1px
}
      #tryon-ai-widget #tryon-ai-widget .w-auto {
    width: auto
}
      #tryon-ai-widget #tryon-ai-widget .w-full {
    width: 100%
}
      #tryon-ai-widget #tryon-ai-widget .w-max {
    width: -moz-max-content;
    width: max-content
}
      #tryon-ai-widget #tryon-ai-widget .w-px {
    width: 1px
}
      #tryon-ai-widget #tryon-ai-widget .w-screen {
    width: 100vw
}
      #tryon-ai-widget #tryon-ai-widget .min-w-0 {
    min-width: 0px
}
      #tryon-ai-widget #tryon-ai-widget .min-w-10 {
    min-width: 2.5rem
}
      #tryon-ai-widget #tryon-ai-widget .min-w-11 {
    min-width: 2.75rem
}
      #tryon-ai-widget #tryon-ai-widget .min-w-5 {
    min-width: 1.25rem
}
      #tryon-ai-widget #tryon-ai-widget .min-w-80 {
    min-width: 20rem
}
      #tryon-ai-widget #tryon-ai-widget .min-w-9 {
    min-width: 2.25rem
}
      #tryon-ai-widget #tryon-ai-widget .min-w-\[12rem\] {
    min-width: 12rem
}
      #tryon-ai-widget #tryon-ai-widget .min-w-\[8rem\] {
    min-width: 8rem
}
      #tryon-ai-widget #tryon-ai-widget .min-w-\[var\(--radix-select-trigger-width\)\] {
    min-width: var(--radix-select-trigger-width)
}
      #tryon-ai-widget #tryon-ai-widget .max-w-4xl {
    max-width: 56rem
}
      #tryon-ai-widget #tryon-ai-widget .max-w-96 {
    max-width: 24rem
}
      #tryon-ai-widget #tryon-ai-widget .max-w-\[--skeleton-width\] {
    max-width: var(--skeleton-width)
}
      #tryon-ai-widget #tryon-ai-widget .max-w-full {
    max-width: 100%
}
      #tryon-ai-widget #tryon-ai-widget .max-w-lg {
    max-width: 32rem
}
      #tryon-ai-widget #tryon-ai-widget .max-w-max {
    max-width: -moz-max-content;
    max-width: max-content
}
      #tryon-ai-widget #tryon-ai-widget .max-w-none {
    max-width: none
}
      #tryon-ai-widget #tryon-ai-widget .flex-1 {
    flex: 1 1 0%
}
      #tryon-ai-widget #tryon-ai-widget .flex-shrink-0 {
    flex-shrink: 0
}
      #tryon-ai-widget #tryon-ai-widget .shrink-0 {
    flex-shrink: 0
}
      #tryon-ai-widget #tryon-ai-widget .grow {
    flex-grow: 1
}
      #tryon-ai-widget #tryon-ai-widget .grow-0 {
    flex-grow: 0
}
      #tryon-ai-widget #tryon-ai-widget .basis-full {
    flex-basis: 100%
}
      #tryon-ai-widget #tryon-ai-widget .caption-bottom {
    caption-side: bottom
}
      #tryon-ai-widget #tryon-ai-widget .border-collapse {
    border-collapse: collapse
}
      #tryon-ai-widget #tryon-ai-widget .origin-\[--radix-context-menu-content-transform-origin\] {
    transform-origin: var(--radix-context-menu-content-transform-origin)
}
      #tryon-ai-widget #tryon-ai-widget .origin-\[--radix-dropdown-menu-content-transform-origin\] {
    transform-origin: var(--radix-dropdown-menu-content-transform-origin)
}
      #tryon-ai-widget #tryon-ai-widget .origin-\[--radix-hover-card-content-transform-origin\] {
    transform-origin: var(--radix-hover-card-content-transform-origin)
}
      #tryon-ai-widget #tryon-ai-widget .origin-\[--radix-menubar-content-transform-origin\] {
    transform-origin: var(--radix-menubar-content-transform-origin)
}
      #tryon-ai-widget #tryon-ai-widget .origin-\[--radix-popover-content-transform-origin\] {
    transform-origin: var(--radix-popover-content-transform-origin)
}
      #tryon-ai-widget #tryon-ai-widget .origin-\[--radix-select-content-transform-origin\] {
    transform-origin: var(--radix-select-content-transform-origin)
}
      #tryon-ai-widget #tryon-ai-widget .origin-\[--radix-tooltip-content-transform-origin\] {
    transform-origin: var(--radix-tooltip-content-transform-origin)
}
      #tryon-ai-widget .-translate-x-1\/2 {
    --tw-translate-x: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}
      #tryon-ai-widget .-translate-x-px {
    --tw-translate-x: -1px;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}
      #tryon-ai-widget .-translate-y-1\/2 {
    --tw-translate-y: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}
      #tryon-ai-widget #tryon-ai-widget .translate-x-\[-50\%\] {
    --tw-translate-x: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}
      #tryon-ai-widget #tryon-ai-widget .translate-x-px {
    --tw-translate-x: 1px;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}
      #tryon-ai-widget #tryon-ai-widget .translate-y-\[-50\%\] {
    --tw-translate-y: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}
      #tryon-ai-widget #tryon-ai-widget .rotate-45 {
    --tw-rotate: 45deg;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}
      #tryon-ai-widget #tryon-ai-widget .rotate-90 {
    --tw-rotate: 90deg;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}
      #tryon-ai-widget #tryon-ai-widget .transform {
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}
      @keyframes pulse {
    50% {
        opacity: .5
    }
}
      #tryon-ai-widget #tryon-ai-widget .animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite
}
      @keyframes spin {
    to {
        transform: rotate(360deg)
    }
}
      #tryon-ai-widget #tryon-ai-widget .animate-spin {
    animation: spin 1s linear infinite
}
      #tryon-ai-widget #tryon-ai-widget .cursor-default {
    cursor: default
}
      #tryon-ai-widget #tryon-ai-widget .cursor-pointer {
    cursor: pointer
}
      #tryon-ai-widget #tryon-ai-widget .touch-none {
    touch-action: none
}
      #tryon-ai-widget #tryon-ai-widget .select-none {
    -webkit-user-select: none;
       -moz-user-select: none;
            user-select: none
}
      #tryon-ai-widget #tryon-ai-widget .list-none {
    list-style-type: none
}
      #tryon-ai-widget #tryon-ai-widget .grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr))
}
      #tryon-ai-widget #tryon-ai-widget .grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr))
}
      #tryon-ai-widget #tryon-ai-widget .flex-row {
    flex-direction: row
}
      #tryon-ai-widget #tryon-ai-widget .flex-col {
    flex-direction: column
}
      #tryon-ai-widget #tryon-ai-widget .flex-col-reverse {
    flex-direction: column-reverse
}
      #tryon-ai-widget #tryon-ai-widget .flex-wrap {
    flex-wrap: wrap
}
      #tryon-ai-widget #tryon-ai-widget .items-start {
    align-items: flex-start
}
      #tryon-ai-widget #tryon-ai-widget .items-end {
    align-items: flex-end
}
      #tryon-ai-widget #tryon-ai-widget .items-center {
    align-items: center
}
      #tryon-ai-widget #tryon-ai-widget .items-stretch {
    align-items: stretch
}
      #tryon-ai-widget #tryon-ai-widget .justify-center {
    justify-content: center
}
      #tryon-ai-widget #tryon-ai-widget .justify-between {
    justify-content: space-between
}
      #tryon-ai-widget #tryon-ai-widget .gap-1 {
    gap: 0.25rem
}
      #tryon-ai-widget #tryon-ai-widget .gap-1\.5 {
    gap: 0.375rem
}
      #tryon-ai-widget #tryon-ai-widget .gap-2 {
    gap: 0.5rem
}
      #tryon-ai-widget #tryon-ai-widget .gap-3 {
    gap: 0.75rem
}
      #tryon-ai-widget #tryon-ai-widget .gap-4 {
    gap: 1rem
}
      #tryon-ai-widget #tryon-ai-widget .gap-6 {
    gap: 1.5rem
}
      #tryon-ai-widget :is(#tryon-ai-widget .space-x-1 > :not([hidden]) ~ :not([hidden])) {
    --tw-space-x-reverse: 0;
    margin-right: calc(0.25rem * var(--tw-space-x-reverse));
    margin-left: calc(0.25rem * calc(1 - var(--tw-space-x-reverse)))
}
      #tryon-ai-widget :is(#tryon-ai-widget .space-x-2 > :not([hidden]) ~ :not([hidden])) {
    --tw-space-x-reverse: 0;
    margin-right: calc(0.5rem * var(--tw-space-x-reverse));
    margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)))
}
      #tryon-ai-widget :is(#tryon-ai-widget .space-x-4 > :not([hidden]) ~ :not([hidden])) {
    --tw-space-x-reverse: 0;
    margin-right: calc(1rem * var(--tw-space-x-reverse));
    margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)))
}
      #tryon-ai-widget :is(#tryon-ai-widget .space-y-1 > :not([hidden]) ~ :not([hidden])) {
    --tw-space-y-reverse: 0;
    margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(0.25rem * var(--tw-space-y-reverse))
}
      #tryon-ai-widget :is(#tryon-ai-widget .space-y-1\.5 > :not([hidden]) ~ :not([hidden])) {
    --tw-space-y-reverse: 0;
    margin-top: calc(0.375rem * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(0.375rem * var(--tw-space-y-reverse))
}
      #tryon-ai-widget :is(#tryon-ai-widget .space-y-2 > :not([hidden]) ~ :not([hidden])) {
    --tw-space-y-reverse: 0;
    margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(0.5rem * var(--tw-space-y-reverse))
}
      #tryon-ai-widget :is(#tryon-ai-widget .space-y-3 > :not([hidden]) ~ :not([hidden])) {
    --tw-space-y-reverse: 0;
    margin-top: calc(0.75rem * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(0.75rem * var(--tw-space-y-reverse))
}
      #tryon-ai-widget :is(#tryon-ai-widget .space-y-4 > :not([hidden]) ~ :not([hidden])) {
    --tw-space-y-reverse: 0;
    margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(1rem * var(--tw-space-y-reverse))
}
      #tryon-ai-widget #tryon-ai-widget .overflow-auto {
    overflow: auto
}
      #tryon-ai-widget #tryon-ai-widget .overflow-hidden {
    overflow: hidden
}
      #tryon-ai-widget #tryon-ai-widget .overflow-y-auto {
    overflow-y: auto
}
      #tryon-ai-widget #tryon-ai-widget .overflow-x-hidden {
    overflow-x: hidden
}
      #tryon-ai-widget #tryon-ai-widget .whitespace-nowrap {
    white-space: nowrap
}
      #tryon-ai-widget #tryon-ai-widget .break-words {
    overflow-wrap: break-word
}
      #tryon-ai-widget #tryon-ai-widget .rounded {
    border-radius: 0.25rem
}
      #tryon-ai-widget #tryon-ai-widget .rounded-\[2px\] {
    border-radius: 2px
}
      #tryon-ai-widget #tryon-ai-widget .rounded-\[inherit\] {
    border-radius: inherit
}
      #tryon-ai-widget #tryon-ai-widget .rounded-full {
    border-radius: 9999px
}
      #tryon-ai-widget #tryon-ai-widget .rounded-lg {
    border-radius: 0.5rem
}
      #tryon-ai-widget #tryon-ai-widget .rounded-md {
    border-radius: 0.375rem
}
      #tryon-ai-widget #tryon-ai-widget .rounded-sm {
    border-radius: 0.125rem
}
      #tryon-ai-widget #tryon-ai-widget .rounded-t-\[10px\] {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px
}
      #tryon-ai-widget #tryon-ai-widget .rounded-t-lg {
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem
}
      #tryon-ai-widget #tryon-ai-widget .rounded-tl-sm {
    border-top-left-radius: 0.125rem
}
      #tryon-ai-widget #tryon-ai-widget .border {
    border-width: 1px
}
      #tryon-ai-widget #tryon-ai-widget .border-2 {
    border-width: 2px
}
      #tryon-ai-widget #tryon-ai-widget .border-\[1\.5px\] {
    border-width: 1.5px
}
      #tryon-ai-widget #tryon-ai-widget .border-y {
    border-top-width: 1px;
    border-bottom-width: 1px
}
      #tryon-ai-widget #tryon-ai-widget .border-b {
    border-bottom-width: 1px
}
      #tryon-ai-widget #tryon-ai-widget .border-b-2 {
    border-bottom-width: 2px
}
      #tryon-ai-widget #tryon-ai-widget .border-l {
    border-left-width: 1px
}
      #tryon-ai-widget #tryon-ai-widget .border-r {
    border-right-width: 1px
}
      #tryon-ai-widget #tryon-ai-widget .border-t {
    border-top-width: 1px
}
      #tryon-ai-widget #tryon-ai-widget .border-dashed {
    border-style: dashed
}
      #tryon-ai-widget #tryon-ai-widget .border-\[--color-border\] {
    border-color: var(--color-border)
}
      #tryon-ai-widget #tryon-ai-widget .border-gray-100 {
    --tw-border-opacity: 1;
    border-color: rgb(243 244 246 / var(--tw-border-opacity, 1))
}
      #tryon-ai-widget #tryon-ai-widget .border-gray-200 {
    --tw-border-opacity: 1;
    border-color: rgb(229 231 235 / var(--tw-border-opacity, 1))
}
      #tryon-ai-widget #tryon-ai-widget .border-gray-700 {
    --tw-border-opacity: 1;
    border-color: rgb(55 65 81 / var(--tw-border-opacity, 1))
}
      #tryon-ai-widget #tryon-ai-widget .border-green-300 {
    --tw-border-opacity: 1;
    border-color: rgb(134 239 172 / var(--tw-border-opacity, 1))
}
      #tryon-ai-widget #tryon-ai-widget .border-primary {
    --tw-border-opacity: 1;
    border-color: hsl(221.2 83.2% 53.3% / var(--tw-border-opacity, 1))
}
      #tryon-ai-widget #tryon-ai-widget .border-primary\/30 {
    border-color: hsl(221.2 83.2% 53.3% / 0.3)
}
      #tryon-ai-widget #tryon-ai-widget .border-secondary {
    --tw-border-opacity: 1;
    border-color: hsl(210 40% 96% / var(--tw-border-opacity, 1))
}
      #tryon-ai-widget #tryon-ai-widget .border-secondary\/30 {
    border-color: hsl(210 40% 96% / 0.3)
}
      #tryon-ai-widget #tryon-ai-widget .border-transparent {
    border-color: transparent
}
      #tryon-ai-widget #tryon-ai-widget .border-l-transparent {
    border-left-color: transparent
}
      #tryon-ai-widget #tryon-ai-widget .border-t-transparent {
    border-top-color: transparent
}
      #tryon-ai-widget #tryon-ai-widget .bg-\[--color-bg\] {
    background-color: var(--color-bg)
}
      #tryon-ai-widget #tryon-ai-widget .bg-black {
    --tw-bg-opacity: 1;
    background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1))
}
      #tryon-ai-widget #tryon-ai-widget .bg-black\/0 {
    background-color: rgb(0 0 0 / 0)
}
      #tryon-ai-widget #tryon-ai-widget .bg-black\/50 {
    background-color: rgb(0 0 0 / 0.5)
}
      #tryon-ai-widget #tryon-ai-widget .bg-black\/80 {
    background-color: rgb(0 0 0 / 0.8)
}
      #tryon-ai-widget #tryon-ai-widget .bg-blue-100 {
    --tw-bg-opacity: 1;
    background-color: rgb(219 234 254 / var(--tw-bg-opacity, 1))
}
      #tryon-ai-widget #tryon-ai-widget .bg-blue-50 {
    --tw-bg-opacity: 1;
    background-color: rgb(239 246 255 / var(--tw-bg-opacity, 1))
}
      #tryon-ai-widget #tryon-ai-widget .bg-blue-600 {
    --tw-bg-opacity: 1;
    background-color: rgb(37 99 235 / var(--tw-bg-opacity, 1))
}
      #tryon-ai-widget #tryon-ai-widget .bg-gray-900 {
    --tw-bg-opacity: 1;
    background-color: rgb(17 24 39 / var(--tw-bg-opacity, 1))
}
      #tryon-ai-widget #tryon-ai-widget .bg-green-50 {
    --tw-bg-opacity: 1;
    background-color: rgb(240 253 244 / var(--tw-bg-opacity, 1))
}
      #tryon-ai-widget #tryon-ai-widget .bg-green-600 {
    --tw-bg-opacity: 1;
    background-color: rgb(22 163 74 / var(--tw-bg-opacity, 1))
}
      #tryon-ai-widget #tryon-ai-widget .bg-primary {
    --tw-bg-opacity: 1;
    background-color: hsl(221.2 83.2% 53.3% / var(--tw-bg-opacity, 1))
}
      #tryon-ai-widget #tryon-ai-widget .bg-primary\/20 {
    background-color: hsl(221.2 83.2% 53.3% / 0.2)
}
      #tryon-ai-widget #tryon-ai-widget .bg-primary\/5 {
    background-color: hsl(221.2 83.2% 53.3% / 0.05)
}
      #tryon-ai-widget #tryon-ai-widget .bg-secondary {
    --tw-bg-opacity: 1;
    background-color: hsl(210 40% 96% / var(--tw-bg-opacity, 1))
}
      #tryon-ai-widget #tryon-ai-widget .bg-secondary\/20 {
    background-color: hsl(210 40% 96% / 0.2)
}
      #tryon-ai-widget #tryon-ai-widget .bg-secondary\/5 {
    background-color: hsl(210 40% 96% / 0.05)
}
      #tryon-ai-widget #tryon-ai-widget .bg-transparent {
    background-color: transparent
}
      #tryon-ai-widget #tryon-ai-widget .bg-white {
    --tw-bg-opacity: 1;
    background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1))
}
      #tryon-ai-widget #tryon-ai-widget .bg-opacity-20 {
    --tw-bg-opacity: 0.2
}
      #tryon-ai-widget #tryon-ai-widget .bg-gradient-to-br {
    background-image: linear-gradient(to bottom right, var(--tw-gradient-stops))
}
      #tryon-ai-widget #tryon-ai-widget .from-purple-100 {
    --tw-gradient-from: #f3e8ff var(--tw-gradient-from-position);
    --tw-gradient-to: rgb(243 232 255 / 0) var(--tw-gradient-to-position);
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)
}
      #tryon-ai-widget #tryon-ai-widget .to-pink-100 {
    --tw-gradient-to: #fce7f3 var(--tw-gradient-to-position)
}
      #tryon-ai-widget #tryon-ai-widget .fill-current {
    fill: currentColor
}
      #tryon-ai-widget #tryon-ai-widget .object-contain {
    -o-object-fit: contain;
       object-fit: contain
}
      #tryon-ai-widget #tryon-ai-widget .object-cover {
    -o-object-fit: cover;
       object-fit: cover
}
      #tryon-ai-widget #tryon-ai-widget .p-0 {
    padding: 0px
}
      #tryon-ai-widget #tryon-ai-widget .p-1 {
    padding: 0.25rem
}
      #tryon-ai-widget #tryon-ai-widget .p-2 {
    padding: 0.5rem
}
      #tryon-ai-widget #tryon-ai-widget .p-3 {
    padding: 0.75rem
}
      #tryon-ai-widget #tryon-ai-widget .p-4 {
    padding: 1rem
}
      #tryon-ai-widget #tryon-ai-widget .p-6 {
    padding: 1.5rem
}
      #tryon-ai-widget #tryon-ai-widget .p-\[1px\] {
    padding: 1px
}
      #tryon-ai-widget #tryon-ai-widget .px-1 {
    padding-left: 0.25rem;
    padding-right: 0.25rem
}
      #tryon-ai-widget #tryon-ai-widget .px-2 {
    padding-left: 0.5rem;
    padding-right: 0.5rem
}
      #tryon-ai-widget #tryon-ai-widget .px-2\.5 {
    padding-left: 0.625rem;
    padding-right: 0.625rem
}
      #tryon-ai-widget #tryon-ai-widget .px-3 {
    padding-left: 0.75rem;
    padding-right: 0.75rem
}
      #tryon-ai-widget #tryon-ai-widget .px-4 {
    padding-left: 1rem;
    padding-right: 1rem
}
      #tryon-ai-widget #tryon-ai-widget .px-5 {
    padding-left: 1.25rem;
    padding-right: 1.25rem
}
      #tryon-ai-widget #tryon-ai-widget .px-8 {
    padding-left: 2rem;
    padding-right: 2rem
}
      #tryon-ai-widget #tryon-ai-widget .py-0\.5 {
    padding-top: 0.125rem;
    padding-bottom: 0.125rem
}
      #tryon-ai-widget #tryon-ai-widget .py-1 {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem
}
      #tryon-ai-widget #tryon-ai-widget .py-1\.5 {
    padding-top: 0.375rem;
    padding-bottom: 0.375rem
}
      #tryon-ai-widget #tryon-ai-widget .py-2 {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem
}
      #tryon-ai-widget #tryon-ai-widget .py-3 {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem
}
      #tryon-ai-widget #tryon-ai-widget .py-4 {
    padding-top: 1rem;
    padding-bottom: 1rem
}
      #tryon-ai-widget #tryon-ai-widget .py-6 {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem
}
      #tryon-ai-widget #tryon-ai-widget .py-8 {
    padding-top: 2rem;
    padding-bottom: 2rem
}
      #tryon-ai-widget #tryon-ai-widget .pb-3 {
    padding-bottom: 0.75rem
}
      #tryon-ai-widget #tryon-ai-widget .pb-4 {
    padding-bottom: 1rem
}
      #tryon-ai-widget #tryon-ai-widget .pl-2\.5 {
    padding-left: 0.625rem
}
      #tryon-ai-widget #tryon-ai-widget .pl-4 {
    padding-left: 1rem
}
      #tryon-ai-widget #tryon-ai-widget .pl-8 {
    padding-left: 2rem
}
      #tryon-ai-widget #tryon-ai-widget .pr-2 {
    padding-right: 0.5rem
}
      #tryon-ai-widget #tryon-ai-widget .pr-2\.5 {
    padding-right: 0.625rem
}
      #tryon-ai-widget #tryon-ai-widget .pr-8 {
    padding-right: 2rem
}
      #tryon-ai-widget #tryon-ai-widget .pt-0 {
    padding-top: 0px
}
      #tryon-ai-widget #tryon-ai-widget .pt-1 {
    padding-top: 0.25rem
}
      #tryon-ai-widget #tryon-ai-widget .pt-3 {
    padding-top: 0.75rem
}
      #tryon-ai-widget #tryon-ai-widget .pt-4 {
    padding-top: 1rem
}
      #tryon-ai-widget #tryon-ai-widget .text-left {
    text-align: left
}
      #tryon-ai-widget #tryon-ai-widget .text-center {
    text-align: center
}
      #tryon-ai-widget #tryon-ai-widget .align-middle {
    vertical-align: middle
}
      #tryon-ai-widget #tryon-ai-widget .font-mono {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace
}
      #tryon-ai-widget #tryon-ai-widget .text-2xl {
    font-size: 1.5rem;
    line-height: 2rem
}
      #tryon-ai-widget #tryon-ai-widget .text-\[0\.8rem\] {
    font-size: 0.8rem
}
      #tryon-ai-widget #tryon-ai-widget .text-base {
    font-size: 1rem;
    line-height: 1.5rem
}
      #tryon-ai-widget #tryon-ai-widget .text-lg {
    font-size: 1.125rem;
    line-height: 1.75rem
}
      #tryon-ai-widget #tryon-ai-widget .text-sm {
    font-size: 0.875rem;
    line-height: 1.25rem
}
      #tryon-ai-widget #tryon-ai-widget .text-xl {
    font-size: 1.25rem;
    line-height: 1.75rem
}
      #tryon-ai-widget #tryon-ai-widget .text-xs {
    font-size: 0.75rem;
    line-height: 1rem
}
      #tryon-ai-widget #tryon-ai-widget .font-medium {
    font-weight: 500
}
      #tryon-ai-widget #tryon-ai-widget .font-normal {
    font-weight: 400
}
      #tryon-ai-widget #tryon-ai-widget .font-semibold {
    font-weight: 600
}
      #tryon-ai-widget #tryon-ai-widget .tabular-nums {
    --tw-numeric-spacing: tabular-nums;
    font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)
}
      #tryon-ai-widget #tryon-ai-widget .leading-none {
    line-height: 1
}
      #tryon-ai-widget #tryon-ai-widget .tracking-tight {
    letter-spacing: -0.025em
}
      #tryon-ai-widget #tryon-ai-widget .tracking-widest {
    letter-spacing: 0.1em
}
      #tryon-ai-widget #tryon-ai-widget .text-blue-600 {
    --tw-text-opacity: 1;
    color: rgb(37 99 235 / var(--tw-text-opacity, 1))
}
      #tryon-ai-widget #tryon-ai-widget .text-blue-700 {
    --tw-text-opacity: 1;
    color: rgb(29 78 216 / var(--tw-text-opacity, 1))
}
      #tryon-ai-widget #tryon-ai-widget .text-blue-800 {
    --tw-text-opacity: 1;
    color: rgb(30 64 175 / var(--tw-text-opacity, 1))
}
      #tryon-ai-widget #tryon-ai-widget .text-current {
    color: currentColor
}
      #tryon-ai-widget #tryon-ai-widget .text-gray-300 {
    --tw-text-opacity: 1;
    color: rgb(209 213 219 / var(--tw-text-opacity, 1))
}
      #tryon-ai-widget #tryon-ai-widget .text-gray-500 {
    --tw-text-opacity: 1;
    color: rgb(107 114 128 / var(--tw-text-opacity, 1))
}
      #tryon-ai-widget #tryon-ai-widget .text-gray-600 {
    --tw-text-opacity: 1;
    color: rgb(75 85 99 / var(--tw-text-opacity, 1))
}
      #tryon-ai-widget #tryon-ai-widget .text-gray-700 {
    --tw-text-opacity: 1;
    color: rgb(55 65 81 / var(--tw-text-opacity, 1))
}
      #tryon-ai-widget #tryon-ai-widget .text-green-600 {
    --tw-text-opacity: 1;
    color: rgb(22 163 74 / var(--tw-text-opacity, 1))
}
      #tryon-ai-widget #tryon-ai-widget .text-primary {
    --tw-text-opacity: 1;
    color: hsl(221.2 83.2% 53.3% / var(--tw-text-opacity, 1))
}
      #tryon-ai-widget #tryon-ai-widget .text-primary-foreground {
    --tw-text-opacity: 1;
    color: hsl(210 40% 98% / var(--tw-text-opacity, 1))
}
      #tryon-ai-widget #tryon-ai-widget .text-secondary {
    --tw-text-opacity: 1;
    color: hsl(210 40% 96% / var(--tw-text-opacity, 1))
}
      #tryon-ai-widget #tryon-ai-widget .text-secondary-foreground {
    --tw-text-opacity: 1;
    color: hsl(222.2 84% 4.9% / var(--tw-text-opacity, 1))
}
      #tryon-ai-widget #tryon-ai-widget .text-white {
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity, 1))
}
      #tryon-ai-widget #tryon-ai-widget .underline-offset-4 {
    text-underline-offset: 4px
}
      #tryon-ai-widget #tryon-ai-widget .opacity-0 {
    opacity: 0
}
      #tryon-ai-widget #tryon-ai-widget .opacity-50 {
    opacity: 0.5
}
      #tryon-ai-widget #tryon-ai-widget .opacity-60 {
    opacity: 0.6
}
      #tryon-ai-widget #tryon-ai-widget .opacity-70 {
    opacity: 0.7
}
      #tryon-ai-widget #tryon-ai-widget .opacity-90 {
    opacity: 0.9
}
      #tryon-ai-widget #tryon-ai-widget .shadow {
    --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
}
      #tryon-ai-widget #tryon-ai-widget .shadow-2xl {
    --tw-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
    --tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
}
      #tryon-ai-widget #tryon-ai-widget .shadow-\[0_0_0_1px_hsl\(var\(--sidebar-border\)\)\] {
    --tw-shadow: 0 0 0 1px hsl(var(--sidebar-border));
    --tw-shadow-colored: 0 0 0 1px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
}
      #tryon-ai-widget #tryon-ai-widget .shadow-lg {
    --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
}
      #tryon-ai-widget #tryon-ai-widget .shadow-md {
    --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
}
      #tryon-ai-widget #tryon-ai-widget .shadow-none {
    --tw-shadow: 0 0 #0000;
    --tw-shadow-colored: 0 0 #0000;
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
}
      #tryon-ai-widget #tryon-ai-widget .shadow-sm {
    --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
}
      #tryon-ai-widget #tryon-ai-widget .shadow-xl {
    --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
}
      #tryon-ai-widget #tryon-ai-widget .outline-none {
    outline: 2px solid transparent;
    outline-offset: 2px
}
      #tryon-ai-widget #tryon-ai-widget .outline {
    outline-style: solid
}
      #tryon-ai-widget #tryon-ai-widget .ring-0 {
    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)
}
      #tryon-ai-widget #tryon-ai-widget .ring-2 {
    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)
}
      #tryon-ai-widget #tryon-ai-widget .filter {
    filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)
}
      #tryon-ai-widget #tryon-ai-widget .transition {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms
}
      #tryon-ai-widget #tryon-ai-widget .transition-\[left\2c right\2c width\] {
    transition-property: left,right,width;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms
}
      #tryon-ai-widget #tryon-ai-widget .transition-\[margin\2c opacity\] {
    transition-property: margin,opacity;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms
}
      #tryon-ai-widget #tryon-ai-widget .transition-\[width\2c height\2c padding\] {
    transition-property: width,height,padding;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms
}
      #tryon-ai-widget #tryon-ai-widget .transition-\[width\] {
    transition-property: width;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms
}
      #tryon-ai-widget #tryon-ai-widget .transition-all {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms
}
      #tryon-ai-widget #tryon-ai-widget .transition-colors {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms
}
      #tryon-ai-widget #tryon-ai-widget .transition-opacity {
    transition-property: opacity;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms
}
      #tryon-ai-widget #tryon-ai-widget .transition-shadow {
    transition-property: box-shadow;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms
}
      #tryon-ai-widget #tryon-ai-widget .transition-transform {
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms
}
      #tryon-ai-widget #tryon-ai-widget .duration-1000 {
    transition-duration: 1000ms
}
      #tryon-ai-widget #tryon-ai-widget .duration-200 {
    transition-duration: 200ms
}
      #tryon-ai-widget #tryon-ai-widget .ease-in-out {
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)
}
      #tryon-ai-widget #tryon-ai-widget .ease-linear {
    transition-timing-function: linear
}
      #tryon-ai-widget #tryon-ai-widget .file\:border-0::file-selector-button {
    border-width: 0px
}
      #tryon-ai-widget #tryon-ai-widget .file\:bg-transparent::file-selector-button {
    background-color: transparent
}
      #tryon-ai-widget #tryon-ai-widget .file\:text-sm::file-selector-button {
    font-size: 0.875rem;
    line-height: 1.25rem
}
      #tryon-ai-widget #tryon-ai-widget .file\:font-medium::file-selector-button {
    font-weight: 500
}
      #tryon-ai-widget #tryon-ai-widget .after\:absolute::after {
    content: var(--tw-content);
    position: absolute
}
      #tryon-ai-widget #tryon-ai-widget .after\:-inset-2::after {
    content: var(--tw-content);
    inset: -0.5rem
}
      #tryon-ai-widget #tryon-ai-widget .after\:inset-y-0::after {
    content: var(--tw-content);
    top: 0px;
    bottom: 0px
}
      #tryon-ai-widget #tryon-ai-widget .after\:left-1\/2::after {
    content: var(--tw-content);
    left: 50%
}
      #tryon-ai-widget #tryon-ai-widget .after\:w-1::after {
    content: var(--tw-content);
    width: 0.25rem
}
      #tryon-ai-widget #tryon-ai-widget .after\:w-\[2px\]::after {
    content: var(--tw-content);
    width: 2px
}
      #tryon-ai-widget #tryon-ai-widget .after\:-translate-x-1\/2::after {
    content: var(--tw-content);
    --tw-translate-x: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}
      #tryon-ai-widget #tryon-ai-widget .first\:rounded-l-md:first-child {
    border-top-left-radius: 0.375rem;
    border-bottom-left-radius: 0.375rem
}
      #tryon-ai-widget #tryon-ai-widget .first\:border-l:first-child {
    border-left-width: 1px
}
      #tryon-ai-widget #tryon-ai-widget .last\:rounded-r-md:last-child {
    border-top-right-radius: 0.375rem;
    border-bottom-right-radius: 0.375rem
}
      #tryon-ai-widget #tryon-ai-widget .focus-within\:relative:focus-within {
    position: relative
}
      #tryon-ai-widget #tryon-ai-widget .focus-within\:z-20:focus-within {
    z-index: 20
}
      #tryon-ai-widget #tryon-ai-widget .hover\:scale-110:hover {
    --tw-scale-x: 1.1;
    --tw-scale-y: 1.1;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}
      #tryon-ai-widget #tryon-ai-widget .hover\:bg-black\/70:hover {
    background-color: rgb(0 0 0 / 0.7)
}
      #tryon-ai-widget #tryon-ai-widget .hover\:bg-blue-700:hover {
    --tw-bg-opacity: 1;
    background-color: rgb(29 78 216 / var(--tw-bg-opacity, 1))
}
      #tryon-ai-widget #tryon-ai-widget .hover\:bg-green-700:hover {
    --tw-bg-opacity: 1;
    background-color: rgb(21 128 61 / var(--tw-bg-opacity, 1))
}
      #tryon-ai-widget #tryon-ai-widget .hover\:bg-primary:hover {
    --tw-bg-opacity: 1;
    background-color: hsl(221.2 83.2% 53.3% / var(--tw-bg-opacity, 1))
}
      #tryon-ai-widget #tryon-ai-widget .hover\:bg-primary\/10:hover {
    background-color: hsl(221.2 83.2% 53.3% / 0.1)
}
      #tryon-ai-widget #tryon-ai-widget .hover\:bg-primary\/80:hover {
    background-color: hsl(221.2 83.2% 53.3% / 0.8)
}
      #tryon-ai-widget #tryon-ai-widget .hover\:bg-primary\/90:hover {
    background-color: hsl(221.2 83.2% 53.3% / 0.9)
}
      #tryon-ai-widget #tryon-ai-widget .hover\:bg-secondary:hover {
    --tw-bg-opacity: 1;
    background-color: hsl(210 40% 96% / var(--tw-bg-opacity, 1))
}
      #tryon-ai-widget #tryon-ai-widget .hover\:bg-secondary\/10:hover {
    background-color: hsl(210 40% 96% / 0.1)
}
      #tryon-ai-widget #tryon-ai-widget .hover\:bg-secondary\/80:hover {
    background-color: hsl(210 40% 96% / 0.8)
}
      #tryon-ai-widget #tryon-ai-widget .hover\:bg-white\/20:hover {
    background-color: rgb(255 255 255 / 0.2)
}
      #tryon-ai-widget #tryon-ai-widget .hover\:text-gray-700:hover {
    --tw-text-opacity: 1;
    color: rgb(55 65 81 / var(--tw-text-opacity, 1))
}
      #tryon-ai-widget #tryon-ai-widget .hover\:text-primary-foreground:hover {
    --tw-text-opacity: 1;
    color: hsl(210 40% 98% / var(--tw-text-opacity, 1))
}
      #tryon-ai-widget #tryon-ai-widget .hover\:underline:hover {
    text-decoration-line: underline
}
      #tryon-ai-widget #tryon-ai-widget .hover\:opacity-100:hover {
    opacity: 1
}
      #tryon-ai-widget #tryon-ai-widget .hover\:shadow-\[0_0_0_1px_hsl\(var\(--sidebar-accent\)\)\]:hover {
    --tw-shadow: 0 0 0 1px hsl(var(--sidebar-accent));
    --tw-shadow-colored: 0 0 0 1px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
}
      #tryon-ai-widget #tryon-ai-widget .hover\:shadow-md:hover {
    --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
}
      #tryon-ai-widget #tryon-ai-widget .focus\:bg-primary:focus {
    --tw-bg-opacity: 1;
    background-color: hsl(221.2 83.2% 53.3% / var(--tw-bg-opacity, 1))
}
      #tryon-ai-widget #tryon-ai-widget .focus\:text-primary-foreground:focus {
    --tw-text-opacity: 1;
    color: hsl(210 40% 98% / var(--tw-text-opacity, 1))
}
      #tryon-ai-widget #tryon-ai-widget .focus\:opacity-100:focus {
    opacity: 1
}
      #tryon-ai-widget #tryon-ai-widget .focus\:outline-none:focus {
    outline: 2px solid transparent;
    outline-offset: 2px
}
      #tryon-ai-widget #tryon-ai-widget .focus\:ring-2:focus {
    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)
}
      #tryon-ai-widget #tryon-ai-widget .focus\:ring-offset-2:focus {
    --tw-ring-offset-width: 2px
}
      #tryon-ai-widget #tryon-ai-widget .focus-visible\:outline-none:focus-visible {
    outline: 2px solid transparent;
    outline-offset: 2px
}
      #tryon-ai-widget #tryon-ai-widget .focus-visible\:ring-1:focus-visible {
    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)
}
      #tryon-ai-widget #tryon-ai-widget .focus-visible\:ring-2:focus-visible {
    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)
}
      #tryon-ai-widget #tryon-ai-widget .focus-visible\:ring-offset-1:focus-visible {
    --tw-ring-offset-width: 1px
}
      #tryon-ai-widget #tryon-ai-widget .focus-visible\:ring-offset-2:focus-visible {
    --tw-ring-offset-width: 2px
}
      #tryon-ai-widget #tryon-ai-widget .disabled\:pointer-events-none:disabled {
    pointer-events: none
}
      #tryon-ai-widget #tryon-ai-widget .disabled\:cursor-not-allowed:disabled {
    cursor: not-allowed
}
      #tryon-ai-widget #tryon-ai-widget .disabled\:opacity-50:disabled {
    opacity: 0.5
}
      #tryon-ai-widget :is(#tryon-ai-widget .group\/menu-item:focus-within #tryon-ai-widget .group-focus-within\/menu-item\:opacity-100) {
    opacity: 1
}
      #tryon-ai-widget :is(#tryon-ai-widget .group:hover #tryon-ai-widget .group-hover\:bg-black\/40) {
    background-color: rgb(0 0 0 / 0.4)
}
      #tryon-ai-widget :is(#tryon-ai-widget .group\/menu-item:hover #tryon-ai-widget .group-hover\/menu-item\:opacity-100) {
    opacity: 1
}
      #tryon-ai-widget :is(#tryon-ai-widget .group:hover #tryon-ai-widget .group-hover\:opacity-100) {
    opacity: 1
}
      #tryon-ai-widget :is(#tryon-ai-widget .group#tryon-ai-widget .destructive #tryon-ai-widget .group-\[\#tryon-ai-widget .destructive\]\:text-red-300) {
    --tw-text-opacity: 1;
    color: rgb(252 165 165 / var(--tw-text-opacity, 1))
}
      #tryon-ai-widget :is(#tryon-ai-widget .group#tryon-ai-widget .destructive #tryon-ai-widget .group-\[\#tryon-ai-widget .destructive\]\:hover\:text-red-50:hover) {
    --tw-text-opacity: 1;
    color: rgb(254 242 242 / var(--tw-text-opacity, 1))
}
      #tryon-ai-widget :is(#tryon-ai-widget .group#tryon-ai-widget .destructive #tryon-ai-widget .group-\[\#tryon-ai-widget .destructive\]\:focus\:ring-red-400:focus) {
    --tw-ring-opacity: 1;
    --tw-ring-color: rgb(248 113 113 / var(--tw-ring-opacity, 1))
}
      #tryon-ai-widget :is(#tryon-ai-widget .group#tryon-ai-widget .destructive #tryon-ai-widget .group-\[\#tryon-ai-widget .destructive\]\:focus\:ring-offset-red-600:focus) {
    --tw-ring-offset-color: #dc2626
}
      #tryon-ai-widget :is(#tryon-ai-widget .peer:disabled ~ #tryon-ai-widget .peer-disabled\:cursor-not-allowed) {
    cursor: not-allowed
}
      #tryon-ai-widget :is(#tryon-ai-widget .peer:disabled ~ #tryon-ai-widget .peer-disabled\:opacity-70) {
    opacity: 0.7
}
      #tryon-ai-widget #tryon-ai-widget .has-\[\:disabled\]\:opacity-50:has(:disabled) {
    opacity: 0.5
}
      #tryon-ai-widget :is(#tryon-ai-widget .group\/menu-item:has([data-sidebar=menu-action]) #tryon-ai-widget .group-has-\[\[data-sidebar\=menu-action\]\]\/menu-item\:pr-8) {
    padding-right: 2rem
}
      #tryon-ai-widget #tryon-ai-widget .aria-disabled\:pointer-events-none[aria-disabled="true"] {
    pointer-events: none
}
      #tryon-ai-widget #tryon-ai-widget .aria-disabled\:opacity-50[aria-disabled="true"] {
    opacity: 0.5
}
      #tryon-ai-widget #tryon-ai-widget .aria-selected\:opacity-100[aria-selected="true"] {
    opacity: 1
}
      #tryon-ai-widget #tryon-ai-widget .data-\[disabled\=true\]\:pointer-events-none[data-disabled="true"] {
    pointer-events: none
}
      #tryon-ai-widget #tryon-ai-widget .data-\[disabled\]\:pointer-events-none[data-disabled] {
    pointer-events: none
}
      #tryon-ai-widget #tryon-ai-widget .data-\[panel-group-direction\=vertical\]\:h-px[data-panel-group-direction="vertical"] {
    height: 1px
}
      #tryon-ai-widget #tryon-ai-widget .data-\[panel-group-direction\=vertical\]\:w-full[data-panel-group-direction="vertical"] {
    width: 100%
}
      #tryon-ai-widget #tryon-ai-widget .data-\[side\=bottom\]\:translate-y-1[data-side="bottom"] {
    --tw-translate-y: 0.25rem;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}
      #tryon-ai-widget #tryon-ai-widget .data-\[side\=left\]\:-translate-x-1[data-side="left"] {
    --tw-translate-x: -0.25rem;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}
      #tryon-ai-widget #tryon-ai-widget .data-\[side\=right\]\:translate-x-1[data-side="right"] {
    --tw-translate-x: 0.25rem;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}
      #tryon-ai-widget #tryon-ai-widget .data-\[side\=top\]\:-translate-y-1[data-side="top"] {
    --tw-translate-y: -0.25rem;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}
      #tryon-ai-widget #tryon-ai-widget .data-\[state\=checked\]\:translate-x-5[data-state="checked"] {
    --tw-translate-x: 1.25rem;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}
      #tryon-ai-widget #tryon-ai-widget .data-\[state\=unchecked\]\:translate-x-0[data-state="unchecked"] {
    --tw-translate-x: 0px;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}
      #tryon-ai-widget #tryon-ai-widget .data-\[swipe\=cancel\]\:translate-x-0[data-swipe="cancel"] {
    --tw-translate-x: 0px;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}
      #tryon-ai-widget #tryon-ai-widget .data-\[swipe\=end\]\:translate-x-\[var\(--radix-toast-swipe-end-x\)\][data-swipe="end"] {
    --tw-translate-x: var(--radix-toast-swipe-end-x);
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}
      #tryon-ai-widget #tryon-ai-widget .data-\[swipe\=move\]\:translate-x-\[var\(--radix-toast-swipe-move-x\)\][data-swipe="move"] {
    --tw-translate-x: var(--radix-toast-swipe-move-x);
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}
      #tryon-ai-widget #tryon-ai-widget .data-\[panel-group-direction\=vertical\]\:flex-col[data-panel-group-direction="vertical"] {
    flex-direction: column
}
      #tryon-ai-widget #tryon-ai-widget .data-\[state\=checked\]\:bg-primary[data-state="checked"] {
    --tw-bg-opacity: 1;
    background-color: hsl(221.2 83.2% 53.3% / var(--tw-bg-opacity, 1))
}
      #tryon-ai-widget #tryon-ai-widget .data-\[state\=open\]\:bg-primary[data-state="open"] {
    --tw-bg-opacity: 1;
    background-color: hsl(221.2 83.2% 53.3% / var(--tw-bg-opacity, 1))
}
      #tryon-ai-widget #tryon-ai-widget .data-\[state\=open\]\:bg-secondary[data-state="open"] {
    --tw-bg-opacity: 1;
    background-color: hsl(210 40% 96% / var(--tw-bg-opacity, 1))
}
      #tryon-ai-widget #tryon-ai-widget .data-\[active\=true\]\:font-medium[data-active="true"] {
    font-weight: 500
}
      #tryon-ai-widget #tryon-ai-widget .data-\[state\=checked\]\:text-primary-foreground[data-state="checked"] {
    --tw-text-opacity: 1;
    color: hsl(210 40% 98% / var(--tw-text-opacity, 1))
}
      #tryon-ai-widget #tryon-ai-widget .data-\[disabled\=true\]\:opacity-50[data-disabled="true"] {
    opacity: 0.5
}
      #tryon-ai-widget #tryon-ai-widget .data-\[disabled\]\:opacity-50[data-disabled] {
    opacity: 0.5
}
      #tryon-ai-widget #tryon-ai-widget .data-\[state\=open\]\:opacity-100[data-state="open"] {
    opacity: 1
}
      #tryon-ai-widget #tryon-ai-widget .data-\[state\=active\]\:shadow-sm[data-state="active"] {
    --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
}
      #tryon-ai-widget #tryon-ai-widget .data-\[swipe\=move\]\:transition-none[data-swipe="move"] {
    transition-property: none
}
      #tryon-ai-widget #tryon-ai-widget .data-\[state\=closed\]\:duration-300[data-state="closed"] {
    transition-duration: 300ms
}
      #tryon-ai-widget #tryon-ai-widget .data-\[state\=open\]\:duration-500[data-state="open"] {
    transition-duration: 500ms
}
      #tryon-ai-widget #tryon-ai-widget .data-\[panel-group-direction\=vertical\]\:after\:left-0[data-panel-group-direction="vertical"]::after {
    content: var(--tw-content);
    left: 0px
}
      #tryon-ai-widget #tryon-ai-widget .data-\[panel-group-direction\=vertical\]\:after\:h-1[data-panel-group-direction="vertical"]::after {
    content: var(--tw-content);
    height: 0.25rem
}
      #tryon-ai-widget #tryon-ai-widget .data-\[panel-group-direction\=vertical\]\:after\:w-full[data-panel-group-direction="vertical"]::after {
    content: var(--tw-content);
    width: 100%
}
      #tryon-ai-widget #tryon-ai-widget .data-\[panel-group-direction\=vertical\]\:after\:-translate-y-1\/2[data-panel-group-direction="vertical"]::after {
    content: var(--tw-content);
    --tw-translate-y: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}
      #tryon-ai-widget #tryon-ai-widget .data-\[panel-group-direction\=vertical\]\:after\:translate-x-0[data-panel-group-direction="vertical"]::after {
    content: var(--tw-content);
    --tw-translate-x: 0px;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}
      #tryon-ai-widget :is(#tryon-ai-widget .group[data-collapsible="offcanvas"] #tryon-ai-widget .group-data-\[collapsible\=offcanvas\]\:left-\[calc\(var\(--sidebar-width\)\*-1\)\]) {
    left: calc(var(--sidebar-width) * -1)
}
      #tryon-ai-widget :is(#tryon-ai-widget .group[data-collapsible="offcanvas"] #tryon-ai-widget .group-data-\[collapsible\=offcanvas\]\:right-\[calc\(var\(--sidebar-width\)\*-1\)\]) {
    right: calc(var(--sidebar-width) * -1)
}
      #tryon-ai-widget :is(#tryon-ai-widget .group[data-side="left"] #tryon-ai-widget .group-data-\[side\=left\]\:-right-4) {
    right: -1rem
}
      #tryon-ai-widget :is(#tryon-ai-widget .group[data-side="right"] #tryon-ai-widget .group-data-\[side\=right\]\:left-0) {
    left: 0px
}
      #tryon-ai-widget :is(#tryon-ai-widget .group[data-collapsible="icon"] #tryon-ai-widget .group-data-\[collapsible\=icon\]\:-mt-8) {
    margin-top: -2rem
}
      #tryon-ai-widget :is(#tryon-ai-widget .group[data-collapsible="icon"] #tryon-ai-widget .group-data-\[collapsible\=icon\]\:hidden) {
    display: none
}
      #tryon-ai-widget :is(#tryon-ai-widget .group[data-collapsible="icon"] #tryon-ai-widget .group-data-\[collapsible\=icon\]\:\!size-8) {
    width: 2rem !important;
    height: 2rem !important
}
      #tryon-ai-widget :is(#tryon-ai-widget .group[data-collapsible="icon"] #tryon-ai-widget .group-data-\[collapsible\=icon\]\:w-\[--sidebar-width-icon\]) {
    width: var(--sidebar-width-icon)
}
      #tryon-ai-widget :is(#tryon-ai-widget .group[data-collapsible="icon"] #tryon-ai-widget .group-data-\[collapsible\=icon\]\:w-\[calc\(var\(--sidebar-width-icon\)_\+_theme\(spacing\.4\)\)\]) {
    width: calc(var(--sidebar-width-icon) + 1rem)
}
      #tryon-ai-widget :is(#tryon-ai-widget .group[data-collapsible="icon"] #tryon-ai-widget .group-data-\[collapsible\=icon\]\:w-\[calc\(var\(--sidebar-width-icon\)_\+_theme\(spacing\.4\)_\+2px\)\]) {
    width: calc(var(--sidebar-width-icon) + 1rem + 2px)
}
      #tryon-ai-widget :is(#tryon-ai-widget .group[data-collapsible="offcanvas"] #tryon-ai-widget .group-data-\[collapsible\=offcanvas\]\:w-0) {
    width: 0px
}
      #tryon-ai-widget :is(#tryon-ai-widget .group[data-collapsible="offcanvas"] #tryon-ai-widget .group-data-\[collapsible\=offcanvas\]\:translate-x-0) {
    --tw-translate-x: 0px;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}
      #tryon-ai-widget :is(#tryon-ai-widget .group[data-side="right"] #tryon-ai-widget .group-data-\[side\=right\]\:rotate-180) {
    --tw-rotate: 180deg;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}
      #tryon-ai-widget :is(#tryon-ai-widget .group[data-state="open"] #tryon-ai-widget .group-data-\[state\=open\]\:rotate-180) {
    --tw-rotate: 180deg;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}
      #tryon-ai-widget :is(#tryon-ai-widget .group[data-collapsible="icon"] #tryon-ai-widget .group-data-\[collapsible\=icon\]\:overflow-hidden) {
    overflow: hidden
}
      #tryon-ai-widget :is(#tryon-ai-widget .group[data-variant="floating"] #tryon-ai-widget .group-data-\[variant\=floating\]\:rounded-lg) {
    border-radius: 0.5rem
}
      #tryon-ai-widget :is(#tryon-ai-widget .group[data-variant="floating"] #tryon-ai-widget .group-data-\[variant\=floating\]\:border) {
    border-width: 1px
}
      #tryon-ai-widget :is(#tryon-ai-widget .group[data-side="left"] #tryon-ai-widget .group-data-\[side\=left\]\:border-r) {
    border-right-width: 1px
}
      #tryon-ai-widget :is(#tryon-ai-widget .group[data-side="right"] #tryon-ai-widget .group-data-\[side\=right\]\:border-l) {
    border-left-width: 1px
}
      #tryon-ai-widget :is(#tryon-ai-widget .group[data-collapsible="icon"] #tryon-ai-widget .group-data-\[collapsible\=icon\]\:\!p-0) {
    padding: 0px !important
}
      #tryon-ai-widget :is(#tryon-ai-widget .group[data-collapsible="icon"] #tryon-ai-widget .group-data-\[collapsible\=icon\]\:\!p-2) {
    padding: 0.5rem !important
}
      #tryon-ai-widget :is(#tryon-ai-widget .group[data-collapsible="icon"] #tryon-ai-widget .group-data-\[collapsible\=icon\]\:opacity-0) {
    opacity: 0
}
      #tryon-ai-widget :is(#tryon-ai-widget .group[data-variant="floating"] #tryon-ai-widget .group-data-\[variant\=floating\]\:shadow) {
    --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
}
      #tryon-ai-widget :is(#tryon-ai-widget .group[data-collapsible="offcanvas"] #tryon-ai-widget .group-data-\[collapsible\=offcanvas\]\:after\:left-full)::after {
    content: var(--tw-content);
    left: 100%
}
      #tryon-ai-widget :is(#tryon-ai-widget .peer\/menu-button[data-size="default"] ~ #tryon-ai-widget .peer-data-\[size\=default\]\/menu-button\:top-1\.5) {
    top: 0.375rem
}
      #tryon-ai-widget :is(#tryon-ai-widget .peer\/menu-button[data-size="lg"] ~ #tryon-ai-widget .peer-data-\[size\=lg\]\/menu-button\:top-2\.5) {
    top: 0.625rem
}
      #tryon-ai-widget :is(#tryon-ai-widget .peer\/menu-button[data-size="sm"] ~ #tryon-ai-widget .peer-data-\[size\=sm\]\/menu-button\:top-1) {
    top: 0.25rem
}
      @media (min-width: 640px) {
    #tryon-ai-widget #tryon-ai-widget .sm\:bottom-0 {
        bottom: 0px
    }
    #tryon-ai-widget #tryon-ai-widget .sm\:right-0 {
        right: 0px
    }
    #tryon-ai-widget #tryon-ai-widget .sm\:top-auto {
        top: auto
    }
    #tryon-ai-widget #tryon-ai-widget .sm\:mt-0 {
        margin-top: 0px
    }
    #tryon-ai-widget #tryon-ai-widget .sm\:flex {
        display: flex
    }
    #tryon-ai-widget #tryon-ai-widget .sm\:max-w-sm {
        max-width: 24rem
    }
    #tryon-ai-widget #tryon-ai-widget .sm\:flex-row {
        flex-direction: row
    }
    #tryon-ai-widget #tryon-ai-widget .sm\:flex-col {
        flex-direction: column
    }
    #tryon-ai-widget #tryon-ai-widget .sm\:justify-end {
        justify-content: flex-end
    }
    #tryon-ai-widget #tryon-ai-widget .sm\:gap-2\.5 {
        gap: 0.625rem
    }
    #tryon-ai-widget :is(#tryon-ai-widget .sm\:space-x-2 > :not([hidden]) ~ :not([hidden])) {
        --tw-space-x-reverse: 0;
        margin-right: calc(0.5rem * var(--tw-space-x-reverse));
        margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)))
    }
    #tryon-ai-widget :is(#tryon-ai-widget .sm\:space-x-4 > :not([hidden]) ~ :not([hidden])) {
        --tw-space-x-reverse: 0;
        margin-right: calc(1rem * var(--tw-space-x-reverse));
        margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)))
    }
    #tryon-ai-widget :is(#tryon-ai-widget .sm\:space-y-0 > :not([hidden]) ~ :not([hidden])) {
        --tw-space-y-reverse: 0;
        margin-top: calc(0px * calc(1 - var(--tw-space-y-reverse)));
        margin-bottom: calc(0px * var(--tw-space-y-reverse))
    }
    #tryon-ai-widget #tryon-ai-widget .sm\:rounded-lg {
        border-radius: 0.5rem
    }
    #tryon-ai-widget #tryon-ai-widget .sm\:text-left {
        text-align: left
    }
}
      @media (min-width: 768px) {
    #tryon-ai-widget #tryon-ai-widget .md\:absolute {
        position: absolute
    }
    #tryon-ai-widget #tryon-ai-widget .md\:block {
        display: block
    }
    #tryon-ai-widget #tryon-ai-widget .md\:flex {
        display: flex
    }
    #tryon-ai-widget #tryon-ai-widget .md\:w-\[var\(--radix-navigation-menu-viewport-width\)\] {
        width: var(--radix-navigation-menu-viewport-width)
    }
    #tryon-ai-widget #tryon-ai-widget .md\:w-auto {
        width: auto
    }
    #tryon-ai-widget #tryon-ai-widget .md\:max-w-\[420px\] {
        max-width: 420px
    }
    #tryon-ai-widget #tryon-ai-widget .md\:grid-cols-2 {
        grid-template-columns: repeat(2, minmax(0, 1fr))
    }
    #tryon-ai-widget #tryon-ai-widget .md\:text-sm {
        font-size: 0.875rem;
        line-height: 1.25rem
    }
    #tryon-ai-widget #tryon-ai-widget .md\:opacity-0 {
        opacity: 0
    }
    #tryon-ai-widget #tryon-ai-widget .after\:md\:hidden::after {
        content: var(--tw-content);
        display: none
    }
    #tryon-ai-widget :is(#tryon-ai-widget .peer[data-variant="inset"] ~ #tryon-ai-widget .md\:peer-data-\[variant\=inset\]\:m-2) {
        margin: 0.5rem
    }
    #tryon-ai-widget :is(#tryon-ai-widget .peer[data-state="collapsed"][data-variant="inset"] ~ #tryon-ai-widget .md\:peer-data-\[state\=collapsed\]\:peer-data-\[variant\=inset\]\:ml-2) {
        margin-left: 0.5rem
    }
    #tryon-ai-widget :is(#tryon-ai-widget .peer[data-variant="inset"] ~ #tryon-ai-widget .md\:peer-data-\[variant\=inset\]\:ml-0) {
        margin-left: 0px
    }
    #tryon-ai-widget :is(#tryon-ai-widget .peer[data-variant="inset"] ~ #tryon-ai-widget .md\:peer-data-\[variant\=inset\]\:rounded-xl) {
        border-radius: 0.75rem
    }
    #tryon-ai-widget :is(#tryon-ai-widget .peer[data-variant="inset"] ~ #tryon-ai-widget .md\:peer-data-\[variant\=inset\]\:shadow) {
        --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
        --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
    }
}
      #tryon-ai-widget #tryon-ai-widget .first\:\[\&\:has\(\[aria-selected\]\)\]\:rounded-l-md:has([aria-selected]):first-child {
    border-top-left-radius: 0.375rem;
    border-bottom-left-radius: 0.375rem
}
      #tryon-ai-widget #tryon-ai-widget .last\:\[\&\:has\(\[aria-selected\]\)\]\:rounded-r-md:has([aria-selected]):last-child {
    border-top-right-radius: 0.375rem;
    border-bottom-right-radius: 0.375rem
}
      #tryon-ai-widget .\[\&\:has\(\[aria-selected\]\#tryon-ai-widget .day-range-end\)\]\:rounded-r-md:has([aria-selected]#tryon-ai-widget .day-range-end) {
    border-top-right-radius: 0.375rem;
    border-bottom-right-radius: 0.375rem
}
      #tryon-ai-widget .\[\&\:has\(\[role\=checkbox\]\)\]\:pr-0:has([role=checkbox]) {
    padding-right: 0px
}
      #tryon-ai-widget :is(.\[\&\>button\]\:hidden>button) {
    display: none
}
      #tryon-ai-widget :is(.\[\&\>span\:last-child\]\:truncate>span:last-child) {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}
      #tryon-ai-widget :is(.\[\&\>span\]\:line-clamp-1>span) {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1
}
      #tryon-ai-widget :is(.\[\&\>svg\+div\]\:translate-y-\[-3px\]>svg+div) {
    --tw-translate-y: -3px;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}
      #tryon-ai-widget :is(.\[\&\>svg\]\:absolute>svg) {
    position: absolute
}
      #tryon-ai-widget :is(.\[\&\>svg\]\:left-4>svg) {
    left: 1rem
}
      #tryon-ai-widget :is(.\[\&\>svg\]\:top-4>svg) {
    top: 1rem
}
      #tryon-ai-widget :is(.\[\&\>svg\]\:size-4>svg) {
    width: 1rem;
    height: 1rem
}
      #tryon-ai-widget :is(.\[\&\>svg\]\:h-2\.5>svg) {
    height: 0.625rem
}
      #tryon-ai-widget :is(.\[\&\>svg\]\:h-3>svg) {
    height: 0.75rem
}
      #tryon-ai-widget :is(.\[\&\>svg\]\:h-3\.5>svg) {
    height: 0.875rem
}
      #tryon-ai-widget :is(.\[\&\>svg\]\:w-2\.5>svg) {
    width: 0.625rem
}
      #tryon-ai-widget :is(.\[\&\>svg\]\:w-3>svg) {
    width: 0.75rem
}
      #tryon-ai-widget :is(.\[\&\>svg\]\:w-3\.5>svg) {
    width: 0.875rem
}
      #tryon-ai-widget :is(.\[\&\>svg\]\:shrink-0>svg) {
    flex-shrink: 0
}
      #tryon-ai-widget :is(.\[\&\>svg\~\*\]\:pl-7>svg~*) {
    padding-left: 1.75rem
}
      #tryon-ai-widget :is(.\[\&\>tr\]\:last\:border-b-0:last-child>tr) {
    border-bottom-width: 0px
}
      #tryon-ai-widget :is(.\[\&\[data-panel-group-direction\=vertical\]\>div\]\:rotate-90[data-panel-group-direction=vertical]>div) {
    --tw-rotate: 90deg;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}
      #tryon-ai-widget :is(.\[\&\[data-state\=open\]\>svg\]\:rotate-180[data-state=open]>svg) {
    --tw-rotate: 180deg;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}
      #tryon-ai-widget :is(.\[\&_\#tryon-ai-widget .recharts-dot\[stroke\=\'\#fff\'\]\]\:stroke-transparent #tryon-ai-widget .recharts-dot[stroke='#fff']) {
    stroke: transparent
}
      #tryon-ai-widget :is(.\[\&_\#tryon-ai-widget .recharts-layer\]\:outline-none #tryon-ai-widget .recharts-layer) {
    outline: 2px solid transparent;
    outline-offset: 2px
}
      #tryon-ai-widget :is(.\[\&_\#tryon-ai-widget .recharts-sector\[stroke\=\'\#fff\'\]\]\:stroke-transparent #tryon-ai-widget .recharts-sector[stroke='#fff']) {
    stroke: transparent
}
      #tryon-ai-widget :is(.\[\&_\#tryon-ai-widget .recharts-sector\]\:outline-none #tryon-ai-widget .recharts-sector) {
    outline: 2px solid transparent;
    outline-offset: 2px
}
      #tryon-ai-widget :is(.\[\&_\#tryon-ai-widget .recharts-surface\]\:outline-none #tryon-ai-widget .recharts-surface) {
    outline: 2px solid transparent;
    outline-offset: 2px
}
      #tryon-ai-widget :is(.\[\&_\[cmdk-group-heading\]\]\:px-2 [cmdk-group-heading]) {
    padding-left: 0.5rem;
    padding-right: 0.5rem
}
      #tryon-ai-widget :is(.\[\&_\[cmdk-group-heading\]\]\:py-1\.5 [cmdk-group-heading]) {
    padding-top: 0.375rem;
    padding-bottom: 0.375rem
}
      #tryon-ai-widget :is(.\[\&_\[cmdk-group-heading\]\]\:text-xs [cmdk-group-heading]) {
    font-size: 0.75rem;
    line-height: 1rem
}
      #tryon-ai-widget :is(.\[\&_\[cmdk-group-heading\]\]\:font-medium [cmdk-group-heading]) {
    font-weight: 500
}
      #tryon-ai-widget :is(.\[\&_\[cmdk-group\]\:not\(\[hidden\]\)_\~\[cmdk-group\]\]\:pt-0 [cmdk-group]:not([hidden]) ~[cmdk-group]) {
    padding-top: 0px
}
      #tryon-ai-widget :is(.\[\&_\[cmdk-group\]\]\:px-2 [cmdk-group]) {
    padding-left: 0.5rem;
    padding-right: 0.5rem
}
      #tryon-ai-widget :is(.\[\&_\[cmdk-input-wrapper\]_svg\]\:h-5 [cmdk-input-wrapper] svg) {
    height: 1.25rem
}
      #tryon-ai-widget :is(.\[\&_\[cmdk-input-wrapper\]_svg\]\:w-5 [cmdk-input-wrapper] svg) {
    width: 1.25rem
}
      #tryon-ai-widget :is(.\[\&_\[cmdk-input\]\]\:h-12 [cmdk-input]) {
    height: 3rem
}
      #tryon-ai-widget :is(.\[\&_\[cmdk-item\]\]\:px-2 [cmdk-item]) {
    padding-left: 0.5rem;
    padding-right: 0.5rem
}
      #tryon-ai-widget :is(.\[\&_\[cmdk-item\]\]\:py-3 [cmdk-item]) {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem
}
      #tryon-ai-widget :is(.\[\&_\[cmdk-item\]_svg\]\:h-5 [cmdk-item] svg) {
    height: 1.25rem
}
      #tryon-ai-widget :is(.\[\&_\[cmdk-item\]_svg\]\:w-5 [cmdk-item] svg) {
    width: 1.25rem
}
      #tryon-ai-widget :is(.\[\&_p\]\:leading-relaxed p) {
    line-height: 1.625
}
      #tryon-ai-widget :is(.\[\&_svg\]\:pointer-events-none svg) {
    pointer-events: none
}
      #tryon-ai-widget :is(.\[\&_svg\]\:size-4 svg) {
    width: 1rem;
    height: 1rem
}
      #tryon-ai-widget :is(.\[\&_svg\]\:shrink-0 svg) {
    flex-shrink: 0
}
      #tryon-ai-widget :is(.\[\&_tr\:last-child\]\:border-0 tr:last-child) {
    border-width: 0px
}
      #tryon-ai-widget :is(.\[\&_tr\]\:border-b tr) {
    border-bottom-width: 1px
}
      #tryon-ai-widget :is([data-side=left][data-collapsible=offcanvas] .\[\[data-side\=left\]\[data-collapsible\=offcanvas\]_\&\]\:-right-2) {
    right: -0.5rem
}
      #tryon-ai-widget :is([data-side=left][data-state=collapsed] .\[\[data-side\=left\]\[data-state\=collapsed\]_\&\]\:cursor-e-resize) {
    cursor: e-resize
}
      #tryon-ai-widget :is([data-side=left] .\[\[data-side\=left\]_\&\]\:cursor-w-resize) {
    cursor: w-resize
}
      #tryon-ai-widget :is([data-side=right][data-collapsible=offcanvas] .\[\[data-side\=right\]\[data-collapsible\=offcanvas\]_\&\]\:-left-2) {
    left: -0.5rem
}
      #tryon-ai-widget :is([data-side=right][data-state=collapsed] .\[\[data-side\=right\]\[data-state\=collapsed\]_\&\]\:cursor-w-resize) {
    cursor: w-resize
}
      #tryon-ai-widget :is([data-side=right] .\[\[data-side\=right\]_\&\]\:cursor-e-resize) {
    cursor: e-resize
}
    
          `;
          document.head.appendChild(style);
        }
      })();
    
var TryOnWidget=function(Ni){"use strict";function bm(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}function ua(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ca={exports:{}},ki={};/**
 * @license React
 * react-jsx-dev-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cm=Symbol.for("react.fragment");ki.Fragment=Cm,ki.jsxDEV=void 0,ca.exports=ki;var y=ca.exports,da={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bn=Symbol.for("react.element"),Dm=Symbol.for("react.portal"),Tm=Symbol.for("react.fragment"),Pm=Symbol.for("react.strict_mode"),_m=Symbol.for("react.profiler"),Rm=Symbol.for("react.provider"),jm=Symbol.for("react.context"),Im=Symbol.for("react.forward_ref"),Om=Symbol.for("react.suspense"),Um=Symbol.for("react.memo"),Mm=Symbol.for("react.lazy"),fa=Symbol.iterator;function Lm(e){return e===null||typeof e!="object"?null:(e=fa&&e[fa]||e["@@iterator"],typeof e=="function"?e:null)}var ma={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},pa=Object.assign,ha={};function an(e,t,n){this.props=e,this.context=t,this.refs=ha,this.updater=n||ma}an.prototype.isReactComponent={},an.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},an.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function va(){}va.prototype=an.prototype;function Ei(e,t,n){this.props=e,this.context=t,this.refs=ha,this.updater=n||ma}var Si=Ei.prototype=new va;Si.constructor=Ei,pa(Si,an.prototype),Si.isPureReactComponent=!0;var ga=Array.isArray,ya=Object.prototype.hasOwnProperty,bi={current:null},wa={key:!0,ref:!0,__self:!0,__source:!0};function xa(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)ya.call(t,r)&&!wa.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var a=Array(s),u=0;u<s;u++)a[u]=arguments[u+2];o.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:Bn,type:e,key:i,ref:l,props:o,_owner:bi.current}}function zm(e,t){return{$$typeof:Bn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ci(e){return typeof e=="object"&&e!==null&&e.$$typeof===Bn}function Am(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Na=/\/+/g;function Di(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Am(""+e.key):t.toString(36)}function $r(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Bn:case Dm:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+Di(l,0):r,ga(o)?(n="",e!=null&&(n=e.replace(Na,"$&/")+"/"),$r(o,t,n,"",function(u){return u})):o!=null&&(Ci(o)&&(o=zm(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(Na,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",ga(e))for(var s=0;s<e.length;s++){i=e[s];var a=r+Di(i,s);l+=$r(i,t,n,a,o)}else if(a=Lm(e),typeof a=="function")for(e=a.call(e),s=0;!(i=e.next()).done;)i=i.value,a=r+Di(i,s++),l+=$r(i,t,n,a,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Wr(e,t,n){if(e==null)return e;var r=[],o=0;return $r(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Vm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ye={current:null},Br={transition:null},Fm={ReactCurrentDispatcher:ye,ReactCurrentBatchConfig:Br,ReactCurrentOwner:bi};function ka(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:Wr,forEach:function(e,t,n){Wr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Wr(e,function(){t++}),t},toArray:function(e){return Wr(e,function(t){return t})||[]},only:function(e){if(!Ci(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},M.Component=an,M.Fragment=Tm,M.Profiler=_m,M.PureComponent=Ei,M.StrictMode=Pm,M.Suspense=Om,M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fm,M.act=ka,M.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=pa({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=bi.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)ya.call(t,a)&&!wa.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var u=0;u<a;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Bn,type:e.type,key:o,ref:i,props:r,_owner:l}},M.createContext=function(e){return e={$$typeof:jm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Rm,_context:e},e.Consumer=e},M.createElement=xa,M.createFactory=function(e){var t=xa.bind(null,e);return t.type=e,t},M.createRef=function(){return{current:null}},M.forwardRef=function(e){return{$$typeof:Im,render:e}},M.isValidElement=Ci,M.lazy=function(e){return{$$typeof:Mm,_payload:{_status:-1,_result:e},_init:Vm}},M.memo=function(e,t){return{$$typeof:Um,type:e,compare:t===void 0?null:t}},M.startTransition=function(e){var t=Br.transition;Br.transition={};try{e()}finally{Br.transition=t}},M.unstable_act=ka,M.useCallback=function(e,t){return ye.current.useCallback(e,t)},M.useContext=function(e){return ye.current.useContext(e)},M.useDebugValue=function(){},M.useDeferredValue=function(e){return ye.current.useDeferredValue(e)},M.useEffect=function(e,t){return ye.current.useEffect(e,t)},M.useId=function(){return ye.current.useId()},M.useImperativeHandle=function(e,t,n){return ye.current.useImperativeHandle(e,t,n)},M.useInsertionEffect=function(e,t){return ye.current.useInsertionEffect(e,t)},M.useLayoutEffect=function(e,t){return ye.current.useLayoutEffect(e,t)},M.useMemo=function(e,t){return ye.current.useMemo(e,t)},M.useReducer=function(e,t,n){return ye.current.useReducer(e,t,n)},M.useRef=function(e){return ye.current.useRef(e)},M.useState=function(e){return ye.current.useState(e)},M.useSyncExternalStore=function(e,t,n){return ye.current.useSyncExternalStore(e,t,n)},M.useTransition=function(){return ye.current.useTransition()},M.version="18.3.1",da.exports=M;var p=da.exports;const wt=ua(p),$m=bm({__proto__:null,default:wt},[p]);var Ea={exports:{}},Pe={},Sa={exports:{}},ba={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,j){var O=T.length;T.push(j);e:for(;0<O;){var A=O-1>>>1,q=T[A];if(0<o(q,j))T[A]=j,T[O]=q,O=A;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var j=T[0],O=T.pop();if(O!==j){T[0]=O;e:for(var A=0,q=T.length,Ht=q>>>1;A<Ht;){var Je=2*(A+1)-1,Fr=T[Je],yt=Je+1,Wn=T[yt];if(0>o(Fr,O))yt<q&&0>o(Wn,Fr)?(T[A]=Wn,T[yt]=O,A=yt):(T[A]=Fr,T[Je]=O,A=Je);else if(yt<q&&0>o(Wn,O))T[A]=Wn,T[yt]=O,A=yt;else break e}}return j}function o(T,j){var O=T.sortIndex-j.sortIndex;return O!==0?O:T.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var a=[],u=[],f=1,m=null,h=3,x=!1,w=!1,g=!1,k=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(T){for(var j=n(u);j!==null;){if(j.callback===null)r(u);else if(j.startTime<=T)r(u),j.sortIndex=j.expirationTime,t(a,j);else break;j=n(u)}}function N(T){if(g=!1,v(T),!w)if(n(a)!==null)w=!0,ae(E);else{var j=n(u);j!==null&&Bt(N,j.startTime-T)}}function E(T,j){w=!1,g&&(g=!1,d(C),C=-1),x=!0;var O=h;try{for(v(j),m=n(a);m!==null&&(!(m.expirationTime>j)||T&&!J());){var A=m.callback;if(typeof A=="function"){m.callback=null,h=m.priorityLevel;var q=A(m.expirationTime<=j);j=e.unstable_now(),typeof q=="function"?m.callback=q:m===n(a)&&r(a),v(j)}else r(a);m=n(a)}if(m!==null)var Ht=!0;else{var Je=n(u);Je!==null&&Bt(N,Je.startTime-j),Ht=!1}return Ht}finally{m=null,h=O,x=!1}}var D=!1,b=null,C=-1,L=5,I=-1;function J(){return!(e.unstable_now()-I<L)}function z(){if(b!==null){var T=e.unstable_now();I=T;var j=!0;try{j=b(!0,T)}finally{j?ke():(D=!1,b=null)}}else D=!1}var ke;if(typeof c=="function")ke=function(){c(z)};else if(typeof MessageChannel<"u"){var Me=new MessageChannel,gt=Me.port2;Me.port1.onmessage=z,ke=function(){gt.postMessage(null)}}else ke=function(){k(z,0)};function ae(T){b=T,D||(D=!0,ke())}function Bt(T,j){C=k(function(){T(e.unstable_now())},j)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){w||x||(w=!0,ae(E))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(T){switch(h){case 1:case 2:case 3:var j=3;break;default:j=h}var O=h;h=j;try{return T()}finally{h=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,j){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var O=h;h=T;try{return j()}finally{h=O}},e.unstable_scheduleCallback=function(T,j,O){var A=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?A+O:A):O=A,T){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=O+q,T={id:f++,callback:j,priorityLevel:T,startTime:O,expirationTime:q,sortIndex:-1},O>A?(T.sortIndex=O,t(u,T),n(a)===null&&T===n(u)&&(g?(d(C),C=-1):g=!0,Bt(N,O-A))):(T.sortIndex=q,t(a,T),w||x||(w=!0,ae(E))),T},e.unstable_shouldYield=J,e.unstable_wrapCallback=function(T){var j=h;return function(){var O=h;h=j;try{return T.apply(this,arguments)}finally{h=O}}}})(ba),Sa.exports=ba;var Wm=Sa.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bm=p,_e=Wm;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ca=new Set,Hn={};function Gt(e,t){un(e,t),un(e+"Capture",t)}function un(e,t){for(Hn[e]=t,e=0;e<t.length;e++)Ca.add(t[e])}var lt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ti=Object.prototype.hasOwnProperty,Hm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Da={},Ta={};function Gm(e){return Ti.call(Ta,e)?!0:Ti.call(Da,e)?!1:Hm.test(e)?Ta[e]=!0:(Da[e]=!0,!1)}function Qm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Km(e,t,n,r){if(t===null||typeof t>"u"||Qm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function we(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ue[e]=new we(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ue[t]=new we(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){ue[e]=new we(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ue[e]=new we(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ue[e]=new we(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){ue[e]=new we(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){ue[e]=new we(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){ue[e]=new we(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){ue[e]=new we(e,5,!1,e.toLowerCase(),null,!1,!1)});var Pi=/[\-:]([a-z])/g;function _i(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Pi,_i);ue[t]=new we(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Pi,_i);ue[t]=new we(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Pi,_i);ue[t]=new we(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){ue[e]=new we(e,1,!1,e.toLowerCase(),null,!1,!1)}),ue.xlinkHref=new we("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){ue[e]=new we(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ri(e,t,n,r){var o=ue.hasOwnProperty(t)?ue[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Km(t,n,o,r)&&(n=null),r||o===null?Gm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var st=Bm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Hr=Symbol.for("react.element"),cn=Symbol.for("react.portal"),dn=Symbol.for("react.fragment"),ji=Symbol.for("react.strict_mode"),Ii=Symbol.for("react.profiler"),Pa=Symbol.for("react.provider"),_a=Symbol.for("react.context"),Oi=Symbol.for("react.forward_ref"),Ui=Symbol.for("react.suspense"),Mi=Symbol.for("react.suspense_list"),Li=Symbol.for("react.memo"),xt=Symbol.for("react.lazy"),Ra=Symbol.for("react.offscreen"),ja=Symbol.iterator;function Gn(e){return e===null||typeof e!="object"?null:(e=ja&&e[ja]||e["@@iterator"],typeof e=="function"?e:null)}var K=Object.assign,zi;function Qn(e){if(zi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);zi=t&&t[1]||""}return`
`+zi+e}var Ai=!1;function Vi(e,t){if(!e||Ai)return"";Ai=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,s=i.length-1;1<=l&&0<=s&&o[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(o[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||o[l]!==i[s]){var a=`
`+o[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=s);break}}}finally{Ai=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Qn(e):""}function Ym(e){switch(e.tag){case 5:return Qn(e.type);case 16:return Qn("Lazy");case 13:return Qn("Suspense");case 19:return Qn("SuspenseList");case 0:case 2:case 15:return e=Vi(e.type,!1),e;case 11:return e=Vi(e.type.render,!1),e;case 1:return e=Vi(e.type,!0),e;default:return""}}function Fi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case dn:return"Fragment";case cn:return"Portal";case Ii:return"Profiler";case ji:return"StrictMode";case Ui:return"Suspense";case Mi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case _a:return(e.displayName||"Context")+".Consumer";case Pa:return(e._context.displayName||"Context")+".Provider";case Oi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Li:return t=e.displayName||null,t!==null?t:Fi(e.type)||"Memo";case xt:t=e._payload,e=e._init;try{return Fi(e(t))}catch{}}return null}function Xm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Fi(t);case 8:return t===ji?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Nt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ia(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Zm(e){var t=Ia(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Gr(e){e._valueTracker||(e._valueTracker=Zm(e))}function Oa(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ia(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Qr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function $i(e,t){var n=t.checked;return K({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ua(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Nt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ma(e,t){t=t.checked,t!=null&&Ri(e,"checked",t,!1)}function Wi(e,t){Ma(e,t);var n=Nt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Bi(e,t.type,n):t.hasOwnProperty("defaultValue")&&Bi(e,t.type,Nt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function La(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Bi(e,t,n){(t!=="number"||Qr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Kn=Array.isArray;function fn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Nt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Hi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return K({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function za(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(Kn(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Nt(n)}}function Aa(e,t){var n=Nt(t.value),r=Nt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Va(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Fa(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Gi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Fa(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Kr,$a=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Kr=Kr||document.createElement("div"),Kr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Kr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Yn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Xn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Jm=["Webkit","ms","Moz","O"];Object.keys(Xn).forEach(function(e){Jm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Xn[t]=Xn[e]})});function Wa(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Xn.hasOwnProperty(e)&&Xn[e]?(""+t).trim():t+"px"}function Ba(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Wa(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var qm=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qi(e,t){if(t){if(qm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function Ki(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yi=null;function Xi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Zi=null,mn=null,pn=null;function Ha(e){if(e=yr(e)){if(typeof Zi!="function")throw Error(S(280));var t=e.stateNode;t&&(t=yo(t),Zi(e.stateNode,e.type,t))}}function Ga(e){mn?pn?pn.push(e):pn=[e]:mn=e}function Qa(){if(mn){var e=mn,t=pn;if(pn=mn=null,Ha(e),t)for(e=0;e<t.length;e++)Ha(t[e])}}function Ka(e,t){return e(t)}function Ya(){}var Ji=!1;function Xa(e,t,n){if(Ji)return e(t,n);Ji=!0;try{return Ka(e,t,n)}finally{Ji=!1,(mn!==null||pn!==null)&&(Ya(),Qa())}}function Zn(e,t){var n=e.stateNode;if(n===null)return null;var r=yo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var qi=!1;if(lt)try{var Jn={};Object.defineProperty(Jn,"passive",{get:function(){qi=!0}}),window.addEventListener("test",Jn,Jn),window.removeEventListener("test",Jn,Jn)}catch{qi=!1}function ep(e,t,n,r,o,i,l,s,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var qn=!1,Yr=null,Xr=!1,el=null,tp={onError:function(e){qn=!0,Yr=e}};function np(e,t,n,r,o,i,l,s,a){qn=!1,Yr=null,ep.apply(tp,arguments)}function rp(e,t,n,r,o,i,l,s,a){if(np.apply(this,arguments),qn){if(qn){var u=Yr;qn=!1,Yr=null}else throw Error(S(198));Xr||(Xr=!0,el=u)}}function Qt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Za(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ja(e){if(Qt(e)!==e)throw Error(S(188))}function op(e){var t=e.alternate;if(!t){if(t=Qt(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Ja(o),e;if(i===r)return Ja(o),t;i=i.sibling}throw Error(S(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function qa(e){return e=op(e),e!==null?eu(e):null}function eu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=eu(e);if(t!==null)return t;e=e.sibling}return null}var tu=_e.unstable_scheduleCallback,nu=_e.unstable_cancelCallback,ip=_e.unstable_shouldYield,lp=_e.unstable_requestPaint,ee=_e.unstable_now,sp=_e.unstable_getCurrentPriorityLevel,tl=_e.unstable_ImmediatePriority,ru=_e.unstable_UserBlockingPriority,Zr=_e.unstable_NormalPriority,ap=_e.unstable_LowPriority,ou=_e.unstable_IdlePriority,Jr=null,qe=null;function up(e){if(qe&&typeof qe.onCommitFiberRoot=="function")try{qe.onCommitFiberRoot(Jr,e,void 0,(e.current.flags&128)===128)}catch{}}var We=Math.clz32?Math.clz32:fp,cp=Math.log,dp=Math.LN2;function fp(e){return e>>>=0,e===0?32:31-(cp(e)/dp|0)|0}var qr=64,eo=4194304;function er(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function to(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~o;s!==0?r=er(s):(i&=l,i!==0&&(r=er(i)))}else l=n&~o,l!==0?r=er(l):i!==0&&(r=er(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-We(t),o=1<<n,r|=e[n],t&=~o;return r}function mp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-We(i),s=1<<l,a=o[l];a===-1?(!(s&n)||s&r)&&(o[l]=mp(s,t)):a<=t&&(e.expiredLanes|=s),i&=~s}}function nl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function iu(){var e=qr;return qr<<=1,!(qr&4194240)&&(qr=64),e}function rl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function tr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-We(t),e[t]=n}function hp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-We(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function ol(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-We(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var $=0;function lu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var su,il,au,uu,cu,ll=!1,no=[],kt=null,Et=null,St=null,nr=new Map,rr=new Map,bt=[],vp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function du(e,t){switch(e){case"focusin":case"focusout":kt=null;break;case"dragenter":case"dragleave":Et=null;break;case"mouseover":case"mouseout":St=null;break;case"pointerover":case"pointerout":nr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":rr.delete(t.pointerId)}}function or(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=yr(t),t!==null&&il(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function gp(e,t,n,r,o){switch(t){case"focusin":return kt=or(kt,e,t,n,r,o),!0;case"dragenter":return Et=or(Et,e,t,n,r,o),!0;case"mouseover":return St=or(St,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return nr.set(i,or(nr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,rr.set(i,or(rr.get(i)||null,e,t,n,r,o)),!0}return!1}function fu(e){var t=Kt(e.target);if(t!==null){var n=Qt(t);if(n!==null){if(t=n.tag,t===13){if(t=Za(n),t!==null){e.blockedOn=t,cu(e.priority,function(){au(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ro(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=al(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Yi=r,n.target.dispatchEvent(r),Yi=null}else return t=yr(n),t!==null&&il(t),e.blockedOn=n,!1;t.shift()}return!0}function mu(e,t,n){ro(e)&&n.delete(t)}function yp(){ll=!1,kt!==null&&ro(kt)&&(kt=null),Et!==null&&ro(Et)&&(Et=null),St!==null&&ro(St)&&(St=null),nr.forEach(mu),rr.forEach(mu)}function ir(e,t){e.blockedOn===t&&(e.blockedOn=null,ll||(ll=!0,_e.unstable_scheduleCallback(_e.unstable_NormalPriority,yp)))}function lr(e){function t(o){return ir(o,e)}if(0<no.length){ir(no[0],e);for(var n=1;n<no.length;n++){var r=no[n];r.blockedOn===e&&(r.blockedOn=null)}}for(kt!==null&&ir(kt,e),Et!==null&&ir(Et,e),St!==null&&ir(St,e),nr.forEach(t),rr.forEach(t),n=0;n<bt.length;n++)r=bt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<bt.length&&(n=bt[0],n.blockedOn===null);)fu(n),n.blockedOn===null&&bt.shift()}var hn=st.ReactCurrentBatchConfig,oo=!0;function wp(e,t,n,r){var o=$,i=hn.transition;hn.transition=null;try{$=1,sl(e,t,n,r)}finally{$=o,hn.transition=i}}function xp(e,t,n,r){var o=$,i=hn.transition;hn.transition=null;try{$=4,sl(e,t,n,r)}finally{$=o,hn.transition=i}}function sl(e,t,n,r){if(oo){var o=al(e,t,n,r);if(o===null)bl(e,t,r,io,n),du(e,r);else if(gp(o,e,t,n,r))r.stopPropagation();else if(du(e,r),t&4&&-1<vp.indexOf(e)){for(;o!==null;){var i=yr(o);if(i!==null&&su(i),i=al(e,t,n,r),i===null&&bl(e,t,r,io,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else bl(e,t,r,null,n)}}var io=null;function al(e,t,n,r){if(io=null,e=Xi(r),e=Kt(e),e!==null)if(t=Qt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Za(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return io=e,null}function pu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(sp()){case tl:return 1;case ru:return 4;case Zr:case ap:return 16;case ou:return 536870912;default:return 16}default:return 16}}var Ct=null,ul=null,lo=null;function hu(){if(lo)return lo;var e,t=ul,n=t.length,r,o="value"in Ct?Ct.value:Ct.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return lo=o.slice(e,1<r?1-r:void 0)}function so(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ao(){return!0}function vu(){return!1}function Re(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ao:vu,this.isPropagationStopped=vu,this}return K(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ao)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ao)},persist:function(){},isPersistent:ao}),t}var vn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cl=Re(vn),sr=K({},vn,{view:0,detail:0}),Np=Re(sr),dl,fl,ar,uo=K({},sr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ar&&(ar&&e.type==="mousemove"?(dl=e.screenX-ar.screenX,fl=e.screenY-ar.screenY):fl=dl=0,ar=e),dl)},movementY:function(e){return"movementY"in e?e.movementY:fl}}),gu=Re(uo),kp=K({},uo,{dataTransfer:0}),Ep=Re(kp),Sp=K({},sr,{relatedTarget:0}),ml=Re(Sp),bp=K({},vn,{animationName:0,elapsedTime:0,pseudoElement:0}),Cp=Re(bp),Dp=K({},vn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Tp=Re(Dp),Pp=K({},vn,{data:0}),yu=Re(Pp),_p={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ip(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=jp[e])?!!t[e]:!1}function pl(){return Ip}var Op=K({},sr,{key:function(e){if(e.key){var t=_p[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=so(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Rp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pl,charCode:function(e){return e.type==="keypress"?so(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?so(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Up=Re(Op),Mp=K({},uo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wu=Re(Mp),Lp=K({},sr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pl}),zp=Re(Lp),Ap=K({},vn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vp=Re(Ap),Fp=K({},uo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),$p=Re(Fp),Wp=[9,13,27,32],hl=lt&&"CompositionEvent"in window,ur=null;lt&&"documentMode"in document&&(ur=document.documentMode);var Bp=lt&&"TextEvent"in window&&!ur,xu=lt&&(!hl||ur&&8<ur&&11>=ur),Nu=" ",ku=!1;function Eu(e,t){switch(e){case"keyup":return Wp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Su(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var gn=!1;function Hp(e,t){switch(e){case"compositionend":return Su(t);case"keypress":return t.which!==32?null:(ku=!0,Nu);case"textInput":return e=t.data,e===Nu&&ku?null:e;default:return null}}function Gp(e,t){if(gn)return e==="compositionend"||!hl&&Eu(e,t)?(e=hu(),lo=ul=Ct=null,gn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return xu&&t.locale!=="ko"?null:t.data;default:return null}}var Qp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Qp[e.type]:t==="textarea"}function Cu(e,t,n,r){Ga(r),t=ho(t,"onChange"),0<t.length&&(n=new cl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var cr=null,dr=null;function Kp(e){Bu(e,0)}function co(e){var t=kn(e);if(Oa(t))return e}function Yp(e,t){if(e==="change")return t}var Du=!1;if(lt){var vl;if(lt){var gl="oninput"in document;if(!gl){var Tu=document.createElement("div");Tu.setAttribute("oninput","return;"),gl=typeof Tu.oninput=="function"}vl=gl}else vl=!1;Du=vl&&(!document.documentMode||9<document.documentMode)}function Pu(){cr&&(cr.detachEvent("onpropertychange",_u),dr=cr=null)}function _u(e){if(e.propertyName==="value"&&co(dr)){var t=[];Cu(t,dr,e,Xi(e)),Xa(Kp,t)}}function Xp(e,t,n){e==="focusin"?(Pu(),cr=t,dr=n,cr.attachEvent("onpropertychange",_u)):e==="focusout"&&Pu()}function Zp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return co(dr)}function Jp(e,t){if(e==="click")return co(t)}function qp(e,t){if(e==="input"||e==="change")return co(t)}function eh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Be=typeof Object.is=="function"?Object.is:eh;function fr(e,t){if(Be(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Ti.call(t,o)||!Be(e[o],t[o]))return!1}return!0}function Ru(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ju(e,t){var n=Ru(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ru(n)}}function Iu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Iu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ou(){for(var e=window,t=Qr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Qr(e.document)}return t}function yl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function th(e){var t=Ou(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Iu(n.ownerDocument.documentElement,n)){if(r!==null&&yl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=ju(n,i);var l=ju(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var nh=lt&&"documentMode"in document&&11>=document.documentMode,yn=null,wl=null,mr=null,xl=!1;function Uu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;xl||yn==null||yn!==Qr(r)||(r=yn,"selectionStart"in r&&yl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),mr&&fr(mr,r)||(mr=r,r=ho(wl,"onSelect"),0<r.length&&(t=new cl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=yn)))}function fo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var wn={animationend:fo("Animation","AnimationEnd"),animationiteration:fo("Animation","AnimationIteration"),animationstart:fo("Animation","AnimationStart"),transitionend:fo("Transition","TransitionEnd")},Nl={},Mu={};lt&&(Mu=document.createElement("div").style,"AnimationEvent"in window||(delete wn.animationend.animation,delete wn.animationiteration.animation,delete wn.animationstart.animation),"TransitionEvent"in window||delete wn.transitionend.transition);function mo(e){if(Nl[e])return Nl[e];if(!wn[e])return e;var t=wn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Mu)return Nl[e]=t[n];return e}var Lu=mo("animationend"),zu=mo("animationiteration"),Au=mo("animationstart"),Vu=mo("transitionend"),Fu=new Map,$u="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dt(e,t){Fu.set(e,t),Gt(t,[e])}for(var kl=0;kl<$u.length;kl++){var El=$u[kl],rh=El.toLowerCase(),oh=El[0].toUpperCase()+El.slice(1);Dt(rh,"on"+oh)}Dt(Lu,"onAnimationEnd"),Dt(zu,"onAnimationIteration"),Dt(Au,"onAnimationStart"),Dt("dblclick","onDoubleClick"),Dt("focusin","onFocus"),Dt("focusout","onBlur"),Dt(Vu,"onTransitionEnd"),un("onMouseEnter",["mouseout","mouseover"]),un("onMouseLeave",["mouseout","mouseover"]),un("onPointerEnter",["pointerout","pointerover"]),un("onPointerLeave",["pointerout","pointerover"]),Gt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Gt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Gt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Gt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Gt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Gt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ih=new Set("cancel close invalid load scroll toggle".split(" ").concat(pr));function Wu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,rp(r,t,void 0,e),e.currentTarget=null}function Bu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],a=s.instance,u=s.currentTarget;if(s=s.listener,a!==i&&o.isPropagationStopped())break e;Wu(o,s,u),i=a}else for(l=0;l<r.length;l++){if(s=r[l],a=s.instance,u=s.currentTarget,s=s.listener,a!==i&&o.isPropagationStopped())break e;Wu(o,s,u),i=a}}}if(Xr)throw e=el,Xr=!1,el=null,e}function B(e,t){var n=t[Rl];n===void 0&&(n=t[Rl]=new Set);var r=e+"__bubble";n.has(r)||(Hu(t,e,2,!1),n.add(r))}function Sl(e,t,n){var r=0;t&&(r|=4),Hu(n,e,r,t)}var po="_reactListening"+Math.random().toString(36).slice(2);function hr(e){if(!e[po]){e[po]=!0,Ca.forEach(function(n){n!=="selectionchange"&&(ih.has(n)||Sl(n,!1,e),Sl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[po]||(t[po]=!0,Sl("selectionchange",!1,t))}}function Hu(e,t,n,r){switch(pu(t)){case 1:var o=wp;break;case 4:o=xp;break;default:o=sl}n=o.bind(null,t,n,e),o=void 0,!qi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function bl(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;l=l.return}for(;s!==null;){if(l=Kt(s),l===null)return;if(a=l.tag,a===5||a===6){r=i=l;continue e}s=s.parentNode}}r=r.return}Xa(function(){var u=i,f=Xi(n),m=[];e:{var h=Fu.get(e);if(h!==void 0){var x=cl,w=e;switch(e){case"keypress":if(so(n)===0)break e;case"keydown":case"keyup":x=Up;break;case"focusin":w="focus",x=ml;break;case"focusout":w="blur",x=ml;break;case"beforeblur":case"afterblur":x=ml;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=gu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Ep;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=zp;break;case Lu:case zu:case Au:x=Cp;break;case Vu:x=Vp;break;case"scroll":x=Np;break;case"wheel":x=$p;break;case"copy":case"cut":case"paste":x=Tp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=wu}var g=(t&4)!==0,k=!g&&e==="scroll",d=g?h!==null?h+"Capture":null:h;g=[];for(var c=u,v;c!==null;){v=c;var N=v.stateNode;if(v.tag===5&&N!==null&&(v=N,d!==null&&(N=Zn(c,d),N!=null&&g.push(vr(c,N,v)))),k)break;c=c.return}0<g.length&&(h=new x(h,w,null,n,f),m.push({event:h,listeners:g}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",h&&n!==Yi&&(w=n.relatedTarget||n.fromElement)&&(Kt(w)||w[at]))break e;if((x||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,x?(w=n.relatedTarget||n.toElement,x=u,w=w?Kt(w):null,w!==null&&(k=Qt(w),w!==k||w.tag!==5&&w.tag!==6)&&(w=null)):(x=null,w=u),x!==w)){if(g=gu,N="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(g=wu,N="onPointerLeave",d="onPointerEnter",c="pointer"),k=x==null?h:kn(x),v=w==null?h:kn(w),h=new g(N,c+"leave",x,n,f),h.target=k,h.relatedTarget=v,N=null,Kt(f)===u&&(g=new g(d,c+"enter",w,n,f),g.target=v,g.relatedTarget=k,N=g),k=N,x&&w)t:{for(g=x,d=w,c=0,v=g;v;v=xn(v))c++;for(v=0,N=d;N;N=xn(N))v++;for(;0<c-v;)g=xn(g),c--;for(;0<v-c;)d=xn(d),v--;for(;c--;){if(g===d||d!==null&&g===d.alternate)break t;g=xn(g),d=xn(d)}g=null}else g=null;x!==null&&Gu(m,h,x,g,!1),w!==null&&k!==null&&Gu(m,k,w,g,!0)}}e:{if(h=u?kn(u):window,x=h.nodeName&&h.nodeName.toLowerCase(),x==="select"||x==="input"&&h.type==="file")var E=Yp;else if(bu(h))if(Du)E=qp;else{E=Zp;var D=Xp}else(x=h.nodeName)&&x.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(E=Jp);if(E&&(E=E(e,u))){Cu(m,E,n,f);break e}D&&D(e,h,u),e==="focusout"&&(D=h._wrapperState)&&D.controlled&&h.type==="number"&&Bi(h,"number",h.value)}switch(D=u?kn(u):window,e){case"focusin":(bu(D)||D.contentEditable==="true")&&(yn=D,wl=u,mr=null);break;case"focusout":mr=wl=yn=null;break;case"mousedown":xl=!0;break;case"contextmenu":case"mouseup":case"dragend":xl=!1,Uu(m,n,f);break;case"selectionchange":if(nh)break;case"keydown":case"keyup":Uu(m,n,f)}var b;if(hl)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else gn?Eu(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(xu&&n.locale!=="ko"&&(gn||C!=="onCompositionStart"?C==="onCompositionEnd"&&gn&&(b=hu()):(Ct=f,ul="value"in Ct?Ct.value:Ct.textContent,gn=!0)),D=ho(u,C),0<D.length&&(C=new yu(C,e,null,n,f),m.push({event:C,listeners:D}),b?C.data=b:(b=Su(n),b!==null&&(C.data=b)))),(b=Bp?Hp(e,n):Gp(e,n))&&(u=ho(u,"onBeforeInput"),0<u.length&&(f=new yu("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:u}),f.data=b))}Bu(m,t)})}function vr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ho(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Zn(e,n),i!=null&&r.unshift(vr(e,i,o)),i=Zn(e,t),i!=null&&r.push(vr(e,i,o))),e=e.return}return r}function xn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Gu(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var s=n,a=s.alternate,u=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&u!==null&&(s=u,o?(a=Zn(n,i),a!=null&&l.unshift(vr(n,a,s))):o||(a=Zn(n,i),a!=null&&l.push(vr(n,a,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var lh=/\r\n?/g,sh=/\u0000|\uFFFD/g;function Qu(e){return(typeof e=="string"?e:""+e).replace(lh,`
`).replace(sh,"")}function vo(e,t,n){if(t=Qu(t),Qu(e)!==t&&n)throw Error(S(425))}function go(){}var Cl=null,Dl=null;function Tl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Pl=typeof setTimeout=="function"?setTimeout:void 0,ah=typeof clearTimeout=="function"?clearTimeout:void 0,Ku=typeof Promise=="function"?Promise:void 0,uh=typeof queueMicrotask=="function"?queueMicrotask:typeof Ku<"u"?function(e){return Ku.resolve(null).then(e).catch(ch)}:Pl;function ch(e){setTimeout(function(){throw e})}function _l(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),lr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);lr(t)}function Tt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Yu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Nn=Math.random().toString(36).slice(2),et="__reactFiber$"+Nn,gr="__reactProps$"+Nn,at="__reactContainer$"+Nn,Rl="__reactEvents$"+Nn,dh="__reactListeners$"+Nn,fh="__reactHandles$"+Nn;function Kt(e){var t=e[et];if(t)return t;for(var n=e.parentNode;n;){if(t=n[at]||n[et]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Yu(e);e!==null;){if(n=e[et])return n;e=Yu(e)}return t}e=n,n=e.parentNode}return null}function yr(e){return e=e[et]||e[at],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function kn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function yo(e){return e[gr]||null}var jl=[],En=-1;function Pt(e){return{current:e}}function H(e){0>En||(e.current=jl[En],jl[En]=null,En--)}function W(e,t){En++,jl[En]=e.current,e.current=t}var _t={},me=Pt(_t),Ee=Pt(!1),Yt=_t;function Sn(e,t){var n=e.type.contextTypes;if(!n)return _t;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Se(e){return e=e.childContextTypes,e!=null}function wo(){H(Ee),H(me)}function Xu(e,t,n){if(me.current!==_t)throw Error(S(168));W(me,t),W(Ee,n)}function Zu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(S(108,Xm(e)||"Unknown",o));return K({},n,r)}function xo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||_t,Yt=me.current,W(me,e),W(Ee,Ee.current),!0}function Ju(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=Zu(e,t,Yt),r.__reactInternalMemoizedMergedChildContext=e,H(Ee),H(me),W(me,e)):H(Ee),W(Ee,n)}var ut=null,No=!1,Il=!1;function qu(e){ut===null?ut=[e]:ut.push(e)}function mh(e){No=!0,qu(e)}function Rt(){if(!Il&&ut!==null){Il=!0;var e=0,t=$;try{var n=ut;for($=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ut=null,No=!1}catch(o){throw ut!==null&&(ut=ut.slice(e+1)),tu(tl,Rt),o}finally{$=t,Il=!1}}return null}var bn=[],Cn=0,ko=null,Eo=0,Le=[],ze=0,Xt=null,ct=1,dt="";function Zt(e,t){bn[Cn++]=Eo,bn[Cn++]=ko,ko=e,Eo=t}function ec(e,t,n){Le[ze++]=ct,Le[ze++]=dt,Le[ze++]=Xt,Xt=e;var r=ct;e=dt;var o=32-We(r)-1;r&=~(1<<o),n+=1;var i=32-We(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,ct=1<<32-We(t)+o|n<<o|r,dt=i+e}else ct=1<<i|n<<o|r,dt=e}function Ol(e){e.return!==null&&(Zt(e,1),ec(e,1,0))}function Ul(e){for(;e===ko;)ko=bn[--Cn],bn[Cn]=null,Eo=bn[--Cn],bn[Cn]=null;for(;e===Xt;)Xt=Le[--ze],Le[ze]=null,dt=Le[--ze],Le[ze]=null,ct=Le[--ze],Le[ze]=null}var je=null,Ie=null,Q=!1,He=null;function tc(e,t){var n=$e(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function nc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,je=e,Ie=Tt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,je=e,Ie=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Xt!==null?{id:ct,overflow:dt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=$e(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,je=e,Ie=null,!0):!1;default:return!1}}function Ml(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ll(e){if(Q){var t=Ie;if(t){var n=t;if(!nc(e,t)){if(Ml(e))throw Error(S(418));t=Tt(n.nextSibling);var r=je;t&&nc(e,t)?tc(r,n):(e.flags=e.flags&-4097|2,Q=!1,je=e)}}else{if(Ml(e))throw Error(S(418));e.flags=e.flags&-4097|2,Q=!1,je=e}}}function rc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;je=e}function So(e){if(e!==je)return!1;if(!Q)return rc(e),Q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Tl(e.type,e.memoizedProps)),t&&(t=Ie)){if(Ml(e))throw oc(),Error(S(418));for(;t;)tc(e,t),t=Tt(t.nextSibling)}if(rc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ie=Tt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ie=null}}else Ie=je?Tt(e.stateNode.nextSibling):null;return!0}function oc(){for(var e=Ie;e;)e=Tt(e.nextSibling)}function Dn(){Ie=je=null,Q=!1}function zl(e){He===null?He=[e]:He.push(e)}var ph=st.ReactCurrentBatchConfig;function wr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var s=o.refs;l===null?delete s[i]:s[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function bo(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ic(e){var t=e._init;return t(e._payload)}function lc(e){function t(d,c){if(e){var v=d.deletions;v===null?(d.deletions=[c],d.flags|=16):v.push(c)}}function n(d,c){if(!e)return null;for(;c!==null;)t(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function o(d,c){return d=At(d,c),d.index=0,d.sibling=null,d}function i(d,c,v){return d.index=v,e?(v=d.alternate,v!==null?(v=v.index,v<c?(d.flags|=2,c):v):(d.flags|=2,c)):(d.flags|=1048576,c)}function l(d){return e&&d.alternate===null&&(d.flags|=2),d}function s(d,c,v,N){return c===null||c.tag!==6?(c=Ps(v,d.mode,N),c.return=d,c):(c=o(c,v),c.return=d,c)}function a(d,c,v,N){var E=v.type;return E===dn?f(d,c,v.props.children,N,v.key):c!==null&&(c.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===xt&&ic(E)===c.type)?(N=o(c,v.props),N.ref=wr(d,c,v),N.return=d,N):(N=Yo(v.type,v.key,v.props,null,d.mode,N),N.ref=wr(d,c,v),N.return=d,N)}function u(d,c,v,N){return c===null||c.tag!==4||c.stateNode.containerInfo!==v.containerInfo||c.stateNode.implementation!==v.implementation?(c=_s(v,d.mode,N),c.return=d,c):(c=o(c,v.children||[]),c.return=d,c)}function f(d,c,v,N,E){return c===null||c.tag!==7?(c=ln(v,d.mode,N,E),c.return=d,c):(c=o(c,v),c.return=d,c)}function m(d,c,v){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Ps(""+c,d.mode,v),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Hr:return v=Yo(c.type,c.key,c.props,null,d.mode,v),v.ref=wr(d,null,c),v.return=d,v;case cn:return c=_s(c,d.mode,v),c.return=d,c;case xt:var N=c._init;return m(d,N(c._payload),v)}if(Kn(c)||Gn(c))return c=ln(c,d.mode,v,null),c.return=d,c;bo(d,c)}return null}function h(d,c,v,N){var E=c!==null?c.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return E!==null?null:s(d,c,""+v,N);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Hr:return v.key===E?a(d,c,v,N):null;case cn:return v.key===E?u(d,c,v,N):null;case xt:return E=v._init,h(d,c,E(v._payload),N)}if(Kn(v)||Gn(v))return E!==null?null:f(d,c,v,N,null);bo(d,v)}return null}function x(d,c,v,N,E){if(typeof N=="string"&&N!==""||typeof N=="number")return d=d.get(v)||null,s(c,d,""+N,E);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Hr:return d=d.get(N.key===null?v:N.key)||null,a(c,d,N,E);case cn:return d=d.get(N.key===null?v:N.key)||null,u(c,d,N,E);case xt:var D=N._init;return x(d,c,v,D(N._payload),E)}if(Kn(N)||Gn(N))return d=d.get(v)||null,f(c,d,N,E,null);bo(c,N)}return null}function w(d,c,v,N){for(var E=null,D=null,b=c,C=c=0,L=null;b!==null&&C<v.length;C++){b.index>C?(L=b,b=null):L=b.sibling;var I=h(d,b,v[C],N);if(I===null){b===null&&(b=L);break}e&&b&&I.alternate===null&&t(d,b),c=i(I,c,C),D===null?E=I:D.sibling=I,D=I,b=L}if(C===v.length)return n(d,b),Q&&Zt(d,C),E;if(b===null){for(;C<v.length;C++)b=m(d,v[C],N),b!==null&&(c=i(b,c,C),D===null?E=b:D.sibling=b,D=b);return Q&&Zt(d,C),E}for(b=r(d,b);C<v.length;C++)L=x(b,d,C,v[C],N),L!==null&&(e&&L.alternate!==null&&b.delete(L.key===null?C:L.key),c=i(L,c,C),D===null?E=L:D.sibling=L,D=L);return e&&b.forEach(function(J){return t(d,J)}),Q&&Zt(d,C),E}function g(d,c,v,N){var E=Gn(v);if(typeof E!="function")throw Error(S(150));if(v=E.call(v),v==null)throw Error(S(151));for(var D=E=null,b=c,C=c=0,L=null,I=v.next();b!==null&&!I.done;C++,I=v.next()){b.index>C?(L=b,b=null):L=b.sibling;var J=h(d,b,I.value,N);if(J===null){b===null&&(b=L);break}e&&b&&J.alternate===null&&t(d,b),c=i(J,c,C),D===null?E=J:D.sibling=J,D=J,b=L}if(I.done)return n(d,b),Q&&Zt(d,C),E;if(b===null){for(;!I.done;C++,I=v.next())I=m(d,I.value,N),I!==null&&(c=i(I,c,C),D===null?E=I:D.sibling=I,D=I);return Q&&Zt(d,C),E}for(b=r(d,b);!I.done;C++,I=v.next())I=x(b,d,C,I.value,N),I!==null&&(e&&I.alternate!==null&&b.delete(I.key===null?C:I.key),c=i(I,c,C),D===null?E=I:D.sibling=I,D=I);return e&&b.forEach(function(z){return t(d,z)}),Q&&Zt(d,C),E}function k(d,c,v,N){if(typeof v=="object"&&v!==null&&v.type===dn&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Hr:e:{for(var E=v.key,D=c;D!==null;){if(D.key===E){if(E=v.type,E===dn){if(D.tag===7){n(d,D.sibling),c=o(D,v.props.children),c.return=d,d=c;break e}}else if(D.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===xt&&ic(E)===D.type){n(d,D.sibling),c=o(D,v.props),c.ref=wr(d,D,v),c.return=d,d=c;break e}n(d,D);break}else t(d,D);D=D.sibling}v.type===dn?(c=ln(v.props.children,d.mode,N,v.key),c.return=d,d=c):(N=Yo(v.type,v.key,v.props,null,d.mode,N),N.ref=wr(d,c,v),N.return=d,d=N)}return l(d);case cn:e:{for(D=v.key;c!==null;){if(c.key===D)if(c.tag===4&&c.stateNode.containerInfo===v.containerInfo&&c.stateNode.implementation===v.implementation){n(d,c.sibling),c=o(c,v.children||[]),c.return=d,d=c;break e}else{n(d,c);break}else t(d,c);c=c.sibling}c=_s(v,d.mode,N),c.return=d,d=c}return l(d);case xt:return D=v._init,k(d,c,D(v._payload),N)}if(Kn(v))return w(d,c,v,N);if(Gn(v))return g(d,c,v,N);bo(d,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,c!==null&&c.tag===6?(n(d,c.sibling),c=o(c,v),c.return=d,d=c):(n(d,c),c=Ps(v,d.mode,N),c.return=d,d=c),l(d)):n(d,c)}return k}var Tn=lc(!0),sc=lc(!1),Co=Pt(null),Do=null,Pn=null,Al=null;function Vl(){Al=Pn=Do=null}function Fl(e){var t=Co.current;H(Co),e._currentValue=t}function $l(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function _n(e,t){Do=e,Al=Pn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(be=!0),e.firstContext=null)}function Ae(e){var t=e._currentValue;if(Al!==e)if(e={context:e,memoizedValue:t,next:null},Pn===null){if(Do===null)throw Error(S(308));Pn=e,Do.dependencies={lanes:0,firstContext:e}}else Pn=Pn.next=e;return t}var Jt=null;function Wl(e){Jt===null?Jt=[e]:Jt.push(e)}function ac(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Wl(t)):(n.next=o.next,o.next=n),t.interleaved=n,ft(e,r)}function ft(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var jt=!1;function Bl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function uc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function mt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function It(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,V&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,ft(e,n)}return o=r.interleaved,o===null?(t.next=t,Wl(r)):(t.next=o.next,o.next=t),r.interleaved=t,ft(e,n)}function To(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ol(e,n)}}function cc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Po(e,t,n,r){var o=e.updateQueue;jt=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var a=s,u=a.next;a.next=null,l===null?i=u:l.next=u,l=a;var f=e.alternate;f!==null&&(f=f.updateQueue,s=f.lastBaseUpdate,s!==l&&(s===null?f.firstBaseUpdate=u:s.next=u,f.lastBaseUpdate=a))}if(i!==null){var m=o.baseState;l=0,f=u=a=null,s=i;do{var h=s.lane,x=s.eventTime;if((r&h)===h){f!==null&&(f=f.next={eventTime:x,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,g=s;switch(h=t,x=n,g.tag){case 1:if(w=g.payload,typeof w=="function"){m=w.call(x,m,h);break e}m=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=g.payload,h=typeof w=="function"?w.call(x,m,h):w,h==null)break e;m=K({},m,h);break e;case 2:jt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[s]:h.push(s))}else x={eventTime:x,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},f===null?(u=f=x,a=m):f=f.next=x,l|=h;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;h=s,s=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(!0);if(f===null&&(a=m),o.baseState=a,o.firstBaseUpdate=u,o.lastBaseUpdate=f,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);tn|=l,e.lanes=l,e.memoizedState=m}}function dc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(S(191,o));o.call(r)}}}var xr={},tt=Pt(xr),Nr=Pt(xr),kr=Pt(xr);function qt(e){if(e===xr)throw Error(S(174));return e}function Hl(e,t){switch(W(kr,t),W(Nr,e),W(tt,xr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Gi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Gi(t,e)}H(tt),W(tt,t)}function Rn(){H(tt),H(Nr),H(kr)}function fc(e){qt(kr.current);var t=qt(tt.current),n=Gi(t,e.type);t!==n&&(W(Nr,e),W(tt,n))}function Gl(e){Nr.current===e&&(H(tt),H(Nr))}var Y=Pt(0);function _o(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ql=[];function Kl(){for(var e=0;e<Ql.length;e++)Ql[e]._workInProgressVersionPrimary=null;Ql.length=0}var Ro=st.ReactCurrentDispatcher,Yl=st.ReactCurrentBatchConfig,en=0,X=null,oe=null,le=null,jo=!1,Er=!1,Sr=0,hh=0;function pe(){throw Error(S(321))}function Xl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Be(e[n],t[n]))return!1;return!0}function Zl(e,t,n,r,o,i){if(en=i,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ro.current=e===null||e.memoizedState===null?wh:xh,e=n(r,o),Er){i=0;do{if(Er=!1,Sr=0,25<=i)throw Error(S(301));i+=1,le=oe=null,t.updateQueue=null,Ro.current=Nh,e=n(r,o)}while(Er)}if(Ro.current=Uo,t=oe!==null&&oe.next!==null,en=0,le=oe=X=null,jo=!1,t)throw Error(S(300));return e}function Jl(){var e=Sr!==0;return Sr=0,e}function nt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?X.memoizedState=le=e:le=le.next=e,le}function Ve(){if(oe===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=oe.next;var t=le===null?X.memoizedState:le.next;if(t!==null)le=t,oe=e;else{if(e===null)throw Error(S(310));oe=e,e={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},le===null?X.memoizedState=le=e:le=le.next=e}return le}function br(e,t){return typeof t=="function"?t(e):t}function ql(e){var t=Ve(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=oe,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=l=null,a=null,u=i;do{var f=u.lane;if((en&f)===f)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var m={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(s=a=m,l=r):a=a.next=m,X.lanes|=f,tn|=f}u=u.next}while(u!==null&&u!==i);a===null?l=r:a.next=s,Be(r,t.memoizedState)||(be=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,X.lanes|=i,tn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function es(e){var t=Ve(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);Be(i,t.memoizedState)||(be=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function mc(){}function pc(e,t){var n=X,r=Ve(),o=t(),i=!Be(r.memoizedState,o);if(i&&(r.memoizedState=o,be=!0),r=r.queue,ts(gc.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||le!==null&&le.memoizedState.tag&1){if(n.flags|=2048,Cr(9,vc.bind(null,n,r,o,t),void 0,null),se===null)throw Error(S(349));en&30||hc(n,t,o)}return o}function hc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function vc(e,t,n,r){t.value=n,t.getSnapshot=r,yc(t)&&wc(e)}function gc(e,t,n){return n(function(){yc(t)&&wc(e)})}function yc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Be(e,n)}catch{return!0}}function wc(e){var t=ft(e,1);t!==null&&Ye(t,e,1,-1)}function xc(e){var t=nt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:br,lastRenderedState:e},t.queue=e,e=e.dispatch=yh.bind(null,X,e),[t.memoizedState,e]}function Cr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Nc(){return Ve().memoizedState}function Io(e,t,n,r){var o=nt();X.flags|=e,o.memoizedState=Cr(1|t,n,void 0,r===void 0?null:r)}function Oo(e,t,n,r){var o=Ve();r=r===void 0?null:r;var i=void 0;if(oe!==null){var l=oe.memoizedState;if(i=l.destroy,r!==null&&Xl(r,l.deps)){o.memoizedState=Cr(t,n,i,r);return}}X.flags|=e,o.memoizedState=Cr(1|t,n,i,r)}function kc(e,t){return Io(8390656,8,e,t)}function ts(e,t){return Oo(2048,8,e,t)}function Ec(e,t){return Oo(4,2,e,t)}function Sc(e,t){return Oo(4,4,e,t)}function bc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Cc(e,t,n){return n=n!=null?n.concat([e]):null,Oo(4,4,bc.bind(null,t,e),n)}function ns(){}function Dc(e,t){var n=Ve();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Xl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Tc(e,t){var n=Ve();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Xl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Pc(e,t,n){return en&21?(Be(n,t)||(n=iu(),X.lanes|=n,tn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,be=!0),e.memoizedState=n)}function vh(e,t){var n=$;$=n!==0&&4>n?n:4,e(!0);var r=Yl.transition;Yl.transition={};try{e(!1),t()}finally{$=n,Yl.transition=r}}function _c(){return Ve().memoizedState}function gh(e,t,n){var r=Lt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Rc(e))jc(t,n);else if(n=ac(e,t,n,r),n!==null){var o=Ne();Ye(n,e,r,o),Ic(n,t,r)}}function yh(e,t,n){var r=Lt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Rc(e))jc(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,s=i(l,n);if(o.hasEagerState=!0,o.eagerState=s,Be(s,l)){var a=t.interleaved;a===null?(o.next=o,Wl(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}n=ac(e,t,o,r),n!==null&&(o=Ne(),Ye(n,e,r,o),Ic(n,t,r))}}function Rc(e){var t=e.alternate;return e===X||t!==null&&t===X}function jc(e,t){Er=jo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ic(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ol(e,n)}}var Uo={readContext:Ae,useCallback:pe,useContext:pe,useEffect:pe,useImperativeHandle:pe,useInsertionEffect:pe,useLayoutEffect:pe,useMemo:pe,useReducer:pe,useRef:pe,useState:pe,useDebugValue:pe,useDeferredValue:pe,useTransition:pe,useMutableSource:pe,useSyncExternalStore:pe,useId:pe,unstable_isNewReconciler:!1},wh={readContext:Ae,useCallback:function(e,t){return nt().memoizedState=[e,t===void 0?null:t],e},useContext:Ae,useEffect:kc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Io(4194308,4,bc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Io(4194308,4,e,t)},useInsertionEffect:function(e,t){return Io(4,2,e,t)},useMemo:function(e,t){var n=nt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=nt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=gh.bind(null,X,e),[r.memoizedState,e]},useRef:function(e){var t=nt();return e={current:e},t.memoizedState=e},useState:xc,useDebugValue:ns,useDeferredValue:function(e){return nt().memoizedState=e},useTransition:function(){var e=xc(!1),t=e[0];return e=vh.bind(null,e[1]),nt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=X,o=nt();if(Q){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),se===null)throw Error(S(349));en&30||hc(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,kc(gc.bind(null,r,i,e),[e]),r.flags|=2048,Cr(9,vc.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=nt(),t=se.identifierPrefix;if(Q){var n=dt,r=ct;n=(r&~(1<<32-We(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Sr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=hh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},xh={readContext:Ae,useCallback:Dc,useContext:Ae,useEffect:ts,useImperativeHandle:Cc,useInsertionEffect:Ec,useLayoutEffect:Sc,useMemo:Tc,useReducer:ql,useRef:Nc,useState:function(){return ql(br)},useDebugValue:ns,useDeferredValue:function(e){var t=Ve();return Pc(t,oe.memoizedState,e)},useTransition:function(){var e=ql(br)[0],t=Ve().memoizedState;return[e,t]},useMutableSource:mc,useSyncExternalStore:pc,useId:_c,unstable_isNewReconciler:!1},Nh={readContext:Ae,useCallback:Dc,useContext:Ae,useEffect:ts,useImperativeHandle:Cc,useInsertionEffect:Ec,useLayoutEffect:Sc,useMemo:Tc,useReducer:es,useRef:Nc,useState:function(){return es(br)},useDebugValue:ns,useDeferredValue:function(e){var t=Ve();return oe===null?t.memoizedState=e:Pc(t,oe.memoizedState,e)},useTransition:function(){var e=es(br)[0],t=Ve().memoizedState;return[e,t]},useMutableSource:mc,useSyncExternalStore:pc,useId:_c,unstable_isNewReconciler:!1};function Ge(e,t){if(e&&e.defaultProps){t=K({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function rs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:K({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Mo={isMounted:function(e){return(e=e._reactInternals)?Qt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ne(),o=Lt(e),i=mt(r,o);i.payload=t,n!=null&&(i.callback=n),t=It(e,i,o),t!==null&&(Ye(t,e,o,r),To(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ne(),o=Lt(e),i=mt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=It(e,i,o),t!==null&&(Ye(t,e,o,r),To(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ne(),r=Lt(e),o=mt(n,r);o.tag=2,t!=null&&(o.callback=t),t=It(e,o,r),t!==null&&(Ye(t,e,r,n),To(t,e,r))}};function Oc(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!fr(n,r)||!fr(o,i):!0}function Uc(e,t,n){var r=!1,o=_t,i=t.contextType;return typeof i=="object"&&i!==null?i=Ae(i):(o=Se(t)?Yt:me.current,r=t.contextTypes,i=(r=r!=null)?Sn(e,o):_t),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Mo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Mc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Mo.enqueueReplaceState(t,t.state,null)}function os(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Bl(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Ae(i):(i=Se(t)?Yt:me.current,o.context=Sn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(rs(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Mo.enqueueReplaceState(o,o.state,null),Po(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function jn(e,t){try{var n="",r=t;do n+=Ym(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function is(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ls(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var kh=typeof WeakMap=="function"?WeakMap:Map;function Lc(e,t,n){n=mt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Wo||(Wo=!0,Ns=r),ls(e,t)},n}function zc(e,t,n){n=mt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){ls(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){ls(e,t),typeof r!="function"&&(Ut===null?Ut=new Set([this]):Ut.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Ac(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new kh;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Mh.bind(null,e,t,n),t.then(e,e))}function Vc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Fc(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=mt(-1,1),t.tag=2,It(n,t,1))),n.lanes|=1),e)}var Eh=st.ReactCurrentOwner,be=!1;function xe(e,t,n,r){t.child=e===null?sc(t,null,n,r):Tn(t,e.child,n,r)}function $c(e,t,n,r,o){n=n.render;var i=t.ref;return _n(t,o),r=Zl(e,t,n,r,i,o),n=Jl(),e!==null&&!be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,pt(e,t,o)):(Q&&n&&Ol(t),t.flags|=1,xe(e,t,r,o),t.child)}function Wc(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Ts(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Bc(e,t,i,r,o)):(e=Yo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:fr,n(l,r)&&e.ref===t.ref)return pt(e,t,o)}return t.flags|=1,e=At(i,r),e.ref=t.ref,e.return=t,t.child=e}function Bc(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(fr(i,r)&&e.ref===t.ref)if(be=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(be=!0);else return t.lanes=e.lanes,pt(e,t,o)}return ss(e,t,n,r,o)}function Hc(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(On,Oe),Oe|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(On,Oe),Oe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,W(On,Oe),Oe|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,W(On,Oe),Oe|=r;return xe(e,t,o,n),t.child}function Gc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ss(e,t,n,r,o){var i=Se(n)?Yt:me.current;return i=Sn(t,i),_n(t,o),n=Zl(e,t,n,r,i,o),r=Jl(),e!==null&&!be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,pt(e,t,o)):(Q&&r&&Ol(t),t.flags|=1,xe(e,t,n,o),t.child)}function Qc(e,t,n,r,o){if(Se(n)){var i=!0;xo(t)}else i=!1;if(_n(t,o),t.stateNode===null)zo(e,t),Uc(t,n,r),os(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var a=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ae(u):(u=Se(n)?Yt:me.current,u=Sn(t,u));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||a!==u)&&Mc(t,l,r,u),jt=!1;var h=t.memoizedState;l.state=h,Po(t,r,l,o),a=t.memoizedState,s!==r||h!==a||Ee.current||jt?(typeof f=="function"&&(rs(t,n,f,r),a=t.memoizedState),(s=jt||Oc(t,n,s,r,h,a,u))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),l.props=r,l.state=a,l.context=u,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,uc(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Ge(t.type,s),l.props=u,m=t.pendingProps,h=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ae(a):(a=Se(n)?Yt:me.current,a=Sn(t,a));var x=n.getDerivedStateFromProps;(f=typeof x=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==m||h!==a)&&Mc(t,l,r,a),jt=!1,h=t.memoizedState,l.state=h,Po(t,r,l,o);var w=t.memoizedState;s!==m||h!==w||Ee.current||jt?(typeof x=="function"&&(rs(t,n,x,r),w=t.memoizedState),(u=jt||Oc(t,n,u,r,h,w,a)||!1)?(f||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,w,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,w,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),l.props=r,l.state=w,l.context=a,r=u):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return as(e,t,n,r,i,o)}function as(e,t,n,r,o,i){Gc(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&Ju(t,n,!1),pt(e,t,i);r=t.stateNode,Eh.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Tn(t,e.child,null,i),t.child=Tn(t,null,s,i)):xe(e,t,s,i),t.memoizedState=r.state,o&&Ju(t,n,!0),t.child}function Kc(e){var t=e.stateNode;t.pendingContext?Xu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Xu(e,t.context,!1),Hl(e,t.containerInfo)}function Yc(e,t,n,r,o){return Dn(),zl(o),t.flags|=256,xe(e,t,n,r),t.child}var us={dehydrated:null,treeContext:null,retryLane:0};function cs(e){return{baseLanes:e,cachePool:null,transitions:null}}function Xc(e,t,n){var r=t.pendingProps,o=Y.current,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),W(Y,o&1),e===null)return Ll(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Xo(l,r,0,null),e=ln(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=cs(n),t.memoizedState=us,e):ds(t,l));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return Sh(e,t,l,r,s,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,s=o.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=At(o,a),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=At(s,i):(i=ln(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?cs(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=us,r}return i=e.child,e=i.sibling,r=At(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ds(e,t){return t=Xo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Lo(e,t,n,r){return r!==null&&zl(r),Tn(t,e.child,null,n),e=ds(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Sh(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=is(Error(S(422))),Lo(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Xo({mode:"visible",children:r.children},o,0,null),i=ln(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Tn(t,e.child,null,l),t.child.memoizedState=cs(l),t.memoizedState=us,i);if(!(t.mode&1))return Lo(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(S(419)),r=is(i,r,void 0),Lo(e,t,l,r)}if(s=(l&e.childLanes)!==0,be||s){if(r=se,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,ft(e,o),Ye(r,e,o,-1))}return Ds(),r=is(Error(S(421))),Lo(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Lh.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Ie=Tt(o.nextSibling),je=t,Q=!0,He=null,e!==null&&(Le[ze++]=ct,Le[ze++]=dt,Le[ze++]=Xt,ct=e.id,dt=e.overflow,Xt=t),t=ds(t,r.children),t.flags|=4096,t)}function Zc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),$l(e.return,t,n)}function fs(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Jc(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(xe(e,t,r.children,n),r=Y.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zc(e,n,t);else if(e.tag===19)Zc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(Y,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&_o(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),fs(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&_o(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}fs(t,!0,n,null,i);break;case"together":fs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function zo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function pt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),tn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=At(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=At(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function bh(e,t,n){switch(t.tag){case 3:Kc(t),Dn();break;case 5:fc(t);break;case 1:Se(t.type)&&xo(t);break;case 4:Hl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;W(Co,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(W(Y,Y.current&1),t.flags|=128,null):n&t.child.childLanes?Xc(e,t,n):(W(Y,Y.current&1),e=pt(e,t,n),e!==null?e.sibling:null);W(Y,Y.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Jc(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),W(Y,Y.current),r)break;return null;case 22:case 23:return t.lanes=0,Hc(e,t,n)}return pt(e,t,n)}var qc,ms,ed,td;qc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},ms=function(){},ed=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,qt(tt.current);var i=null;switch(n){case"input":o=$i(e,o),r=$i(e,r),i=[];break;case"select":o=K({},o,{value:void 0}),r=K({},r,{value:void 0}),i=[];break;case"textarea":o=Hi(e,o),r=Hi(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=go)}Qi(n,r);var l;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var s=o[u];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Hn.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var a=r[u];if(s=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&a!==s&&(a!=null||s!=null))if(u==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(i||(i=[]),i.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(i=i||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Hn.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&B("scroll",e),i||s===a||(i=[])):(i=i||[]).push(u,a))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}},td=function(e,t,n,r){n!==r&&(t.flags|=4)};function Dr(e,t){if(!Q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function he(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ch(e,t,n){var r=t.pendingProps;switch(Ul(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return he(t),null;case 1:return Se(t.type)&&wo(),he(t),null;case 3:return r=t.stateNode,Rn(),H(Ee),H(me),Kl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(So(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,He!==null&&(Ss(He),He=null))),ms(e,t),he(t),null;case 5:Gl(t);var o=qt(kr.current);if(n=t.type,e!==null&&t.stateNode!=null)ed(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return he(t),null}if(e=qt(tt.current),So(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[et]=t,r[gr]=i,e=(t.mode&1)!==0,n){case"dialog":B("cancel",r),B("close",r);break;case"iframe":case"object":case"embed":B("load",r);break;case"video":case"audio":for(o=0;o<pr.length;o++)B(pr[o],r);break;case"source":B("error",r);break;case"img":case"image":case"link":B("error",r),B("load",r);break;case"details":B("toggle",r);break;case"input":Ua(r,i),B("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},B("invalid",r);break;case"textarea":za(r,i),B("invalid",r)}Qi(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&vo(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&vo(r.textContent,s,e),o=["children",""+s]):Hn.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&B("scroll",r)}switch(n){case"input":Gr(r),La(r,i,!0);break;case"textarea":Gr(r),Va(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=go)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Fa(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[et]=t,e[gr]=r,qc(e,t,!1,!1),t.stateNode=e;e:{switch(l=Ki(n,r),n){case"dialog":B("cancel",e),B("close",e),o=r;break;case"iframe":case"object":case"embed":B("load",e),o=r;break;case"video":case"audio":for(o=0;o<pr.length;o++)B(pr[o],e);o=r;break;case"source":B("error",e),o=r;break;case"img":case"image":case"link":B("error",e),B("load",e),o=r;break;case"details":B("toggle",e),o=r;break;case"input":Ua(e,r),o=$i(e,r),B("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=K({},r,{value:void 0}),B("invalid",e);break;case"textarea":za(e,r),o=Hi(e,r),B("invalid",e);break;default:o=r}Qi(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var a=s[i];i==="style"?Ba(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&$a(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Yn(e,a):typeof a=="number"&&Yn(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Hn.hasOwnProperty(i)?a!=null&&i==="onScroll"&&B("scroll",e):a!=null&&Ri(e,i,a,l))}switch(n){case"input":Gr(e),La(e,r,!1);break;case"textarea":Gr(e),Va(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Nt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?fn(e,!!r.multiple,i,!1):r.defaultValue!=null&&fn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=go)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return he(t),null;case 6:if(e&&t.stateNode!=null)td(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=qt(kr.current),qt(tt.current),So(t)){if(r=t.stateNode,n=t.memoizedProps,r[et]=t,(i=r.nodeValue!==n)&&(e=je,e!==null))switch(e.tag){case 3:vo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&vo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[et]=t,t.stateNode=r}return he(t),null;case 13:if(H(Y),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Q&&Ie!==null&&t.mode&1&&!(t.flags&128))oc(),Dn(),t.flags|=98560,i=!1;else if(i=So(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(S(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(S(317));i[et]=t}else Dn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;he(t),i=!1}else He!==null&&(Ss(He),He=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Y.current&1?ie===0&&(ie=3):Ds())),t.updateQueue!==null&&(t.flags|=4),he(t),null);case 4:return Rn(),ms(e,t),e===null&&hr(t.stateNode.containerInfo),he(t),null;case 10:return Fl(t.type._context),he(t),null;case 17:return Se(t.type)&&wo(),he(t),null;case 19:if(H(Y),i=t.memoizedState,i===null)return he(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)Dr(i,!1);else{if(ie!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=_o(e),l!==null){for(t.flags|=128,Dr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return W(Y,Y.current&1|2),t.child}e=e.sibling}i.tail!==null&&ee()>Un&&(t.flags|=128,r=!0,Dr(i,!1),t.lanes=4194304)}else{if(!r)if(e=_o(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Dr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!Q)return he(t),null}else 2*ee()-i.renderingStartTime>Un&&n!==1073741824&&(t.flags|=128,r=!0,Dr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ee(),t.sibling=null,n=Y.current,W(Y,r?n&1|2:n&1),t):(he(t),null);case 22:case 23:return Cs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Oe&1073741824&&(he(t),t.subtreeFlags&6&&(t.flags|=8192)):he(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function Dh(e,t){switch(Ul(t),t.tag){case 1:return Se(t.type)&&wo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Rn(),H(Ee),H(me),Kl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Gl(t),null;case 13:if(H(Y),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));Dn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(Y),null;case 4:return Rn(),null;case 10:return Fl(t.type._context),null;case 22:case 23:return Cs(),null;case 24:return null;default:return null}}var Ao=!1,ve=!1,Th=typeof WeakSet=="function"?WeakSet:Set,_=null;function In(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Z(e,t,r)}else n.current=null}function ps(e,t,n){try{n()}catch(r){Z(e,t,r)}}var nd=!1;function Ph(e,t){if(Cl=oo,e=Ou(),yl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,s=-1,a=-1,u=0,f=0,m=e,h=null;t:for(;;){for(var x;m!==n||o!==0&&m.nodeType!==3||(s=l+o),m!==i||r!==0&&m.nodeType!==3||(a=l+r),m.nodeType===3&&(l+=m.nodeValue.length),(x=m.firstChild)!==null;)h=m,m=x;for(;;){if(m===e)break t;if(h===n&&++u===o&&(s=l),h===i&&++f===r&&(a=l),(x=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=x}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Dl={focusedElem:e,selectionRange:n},oo=!1,_=t;_!==null;)if(t=_,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_=e;else for(;_!==null;){t=_;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var g=w.memoizedProps,k=w.memoizedState,d=t.stateNode,c=d.getSnapshotBeforeUpdate(t.elementType===t.type?g:Ge(t.type,g),k);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(N){Z(t,t.return,N)}if(e=t.sibling,e!==null){e.return=t.return,_=e;break}_=t.return}return w=nd,nd=!1,w}function Tr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&ps(t,n,i)}o=o.next}while(o!==r)}}function Vo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function hs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function rd(e){var t=e.alternate;t!==null&&(e.alternate=null,rd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[et],delete t[gr],delete t[Rl],delete t[dh],delete t[fh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function od(e){return e.tag===5||e.tag===3||e.tag===4}function id(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||od(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=go));else if(r!==4&&(e=e.child,e!==null))for(vs(e,t,n),e=e.sibling;e!==null;)vs(e,t,n),e=e.sibling}function gs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(gs(e,t,n),e=e.sibling;e!==null;)gs(e,t,n),e=e.sibling}var ce=null,Qe=!1;function Ot(e,t,n){for(n=n.child;n!==null;)ld(e,t,n),n=n.sibling}function ld(e,t,n){if(qe&&typeof qe.onCommitFiberUnmount=="function")try{qe.onCommitFiberUnmount(Jr,n)}catch{}switch(n.tag){case 5:ve||In(n,t);case 6:var r=ce,o=Qe;ce=null,Ot(e,t,n),ce=r,Qe=o,ce!==null&&(Qe?(e=ce,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ce.removeChild(n.stateNode));break;case 18:ce!==null&&(Qe?(e=ce,n=n.stateNode,e.nodeType===8?_l(e.parentNode,n):e.nodeType===1&&_l(e,n),lr(e)):_l(ce,n.stateNode));break;case 4:r=ce,o=Qe,ce=n.stateNode.containerInfo,Qe=!0,Ot(e,t,n),ce=r,Qe=o;break;case 0:case 11:case 14:case 15:if(!ve&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&ps(n,t,l),o=o.next}while(o!==r)}Ot(e,t,n);break;case 1:if(!ve&&(In(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Z(n,t,s)}Ot(e,t,n);break;case 21:Ot(e,t,n);break;case 22:n.mode&1?(ve=(r=ve)||n.memoizedState!==null,Ot(e,t,n),ve=r):Ot(e,t,n);break;default:Ot(e,t,n)}}function sd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Th),t.forEach(function(r){var o=zh.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ke(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:ce=s.stateNode,Qe=!1;break e;case 3:ce=s.stateNode.containerInfo,Qe=!0;break e;case 4:ce=s.stateNode.containerInfo,Qe=!0;break e}s=s.return}if(ce===null)throw Error(S(160));ld(i,l,o),ce=null,Qe=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(u){Z(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ad(t,e),t=t.sibling}function ad(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ke(t,e),rt(e),r&4){try{Tr(3,e,e.return),Vo(3,e)}catch(g){Z(e,e.return,g)}try{Tr(5,e,e.return)}catch(g){Z(e,e.return,g)}}break;case 1:Ke(t,e),rt(e),r&512&&n!==null&&In(n,n.return);break;case 5:if(Ke(t,e),rt(e),r&512&&n!==null&&In(n,n.return),e.flags&32){var o=e.stateNode;try{Yn(o,"")}catch(g){Z(e,e.return,g)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Ma(o,i),Ki(s,l);var u=Ki(s,i);for(l=0;l<a.length;l+=2){var f=a[l],m=a[l+1];f==="style"?Ba(o,m):f==="dangerouslySetInnerHTML"?$a(o,m):f==="children"?Yn(o,m):Ri(o,f,m,u)}switch(s){case"input":Wi(o,i);break;case"textarea":Aa(o,i);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?fn(o,!!i.multiple,x,!1):h!==!!i.multiple&&(i.defaultValue!=null?fn(o,!!i.multiple,i.defaultValue,!0):fn(o,!!i.multiple,i.multiple?[]:"",!1))}o[gr]=i}catch(g){Z(e,e.return,g)}}break;case 6:if(Ke(t,e),rt(e),r&4){if(e.stateNode===null)throw Error(S(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(g){Z(e,e.return,g)}}break;case 3:if(Ke(t,e),rt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{lr(t.containerInfo)}catch(g){Z(e,e.return,g)}break;case 4:Ke(t,e),rt(e);break;case 13:Ke(t,e),rt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(xs=ee())),r&4&&sd(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(ve=(u=ve)||f,Ke(t,e),ve=u):Ke(t,e),rt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(_=e,f=e.child;f!==null;){for(m=_=f;_!==null;){switch(h=_,x=h.child,h.tag){case 0:case 11:case 14:case 15:Tr(4,h,h.return);break;case 1:In(h,h.return);var w=h.stateNode;if(typeof w.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(g){Z(r,n,g)}}break;case 5:In(h,h.return);break;case 22:if(h.memoizedState!==null){dd(m);continue}}x!==null?(x.return=h,_=x):dd(m)}f=f.sibling}e:for(f=null,m=e;;){if(m.tag===5){if(f===null){f=m;try{o=m.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=m.stateNode,a=m.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Wa("display",l))}catch(g){Z(e,e.return,g)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(g){Z(e,e.return,g)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Ke(t,e),rt(e),r&4&&sd(e);break;case 21:break;default:Ke(t,e),rt(e)}}function rt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(od(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Yn(o,""),r.flags&=-33);var i=id(e);gs(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,s=id(e);vs(e,s,l);break;default:throw Error(S(161))}}catch(a){Z(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function _h(e,t,n){_=e,ud(e)}function ud(e,t,n){for(var r=(e.mode&1)!==0;_!==null;){var o=_,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||Ao;if(!l){var s=o.alternate,a=s!==null&&s.memoizedState!==null||ve;s=Ao;var u=ve;if(Ao=l,(ve=a)&&!u)for(_=o;_!==null;)l=_,a=l.child,l.tag===22&&l.memoizedState!==null?fd(o):a!==null?(a.return=l,_=a):fd(o);for(;i!==null;)_=i,ud(i),i=i.sibling;_=o,Ao=s,ve=u}cd(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,_=i):cd(e)}}function cd(e){for(;_!==null;){var t=_;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ve||Vo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ve)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Ge(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&dc(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}dc(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&lr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}ve||t.flags&512&&hs(t)}catch(h){Z(t,t.return,h)}}if(t===e){_=null;break}if(n=t.sibling,n!==null){n.return=t.return,_=n;break}_=t.return}}function dd(e){for(;_!==null;){var t=_;if(t===e){_=null;break}var n=t.sibling;if(n!==null){n.return=t.return,_=n;break}_=t.return}}function fd(e){for(;_!==null;){var t=_;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Vo(4,t)}catch(a){Z(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(a){Z(t,o,a)}}var i=t.return;try{hs(t)}catch(a){Z(t,i,a)}break;case 5:var l=t.return;try{hs(t)}catch(a){Z(t,l,a)}}}catch(a){Z(t,t.return,a)}if(t===e){_=null;break}var s=t.sibling;if(s!==null){s.return=t.return,_=s;break}_=t.return}}var Rh=Math.ceil,Fo=st.ReactCurrentDispatcher,ys=st.ReactCurrentOwner,Fe=st.ReactCurrentBatchConfig,V=0,se=null,te=null,de=0,Oe=0,On=Pt(0),ie=0,Pr=null,tn=0,$o=0,ws=0,_r=null,Ce=null,xs=0,Un=1/0,ht=null,Wo=!1,Ns=null,Ut=null,Bo=!1,Mt=null,Ho=0,Rr=0,ks=null,Go=-1,Qo=0;function Ne(){return V&6?ee():Go!==-1?Go:Go=ee()}function Lt(e){return e.mode&1?V&2&&de!==0?de&-de:ph.transition!==null?(Qo===0&&(Qo=iu()),Qo):(e=$,e!==0||(e=window.event,e=e===void 0?16:pu(e.type)),e):1}function Ye(e,t,n,r){if(50<Rr)throw Rr=0,ks=null,Error(S(185));tr(e,n,r),(!(V&2)||e!==se)&&(e===se&&(!(V&2)&&($o|=n),ie===4&&zt(e,de)),De(e,r),n===1&&V===0&&!(t.mode&1)&&(Un=ee()+500,No&&Rt()))}function De(e,t){var n=e.callbackNode;pp(e,t);var r=to(e,e===se?de:0);if(r===0)n!==null&&nu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&nu(n),t===1)e.tag===0?mh(pd.bind(null,e)):qu(pd.bind(null,e)),uh(function(){!(V&6)&&Rt()}),n=null;else{switch(lu(r)){case 1:n=tl;break;case 4:n=ru;break;case 16:n=Zr;break;case 536870912:n=ou;break;default:n=Zr}n=kd(n,md.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function md(e,t){if(Go=-1,Qo=0,V&6)throw Error(S(327));var n=e.callbackNode;if(Mn()&&e.callbackNode!==n)return null;var r=to(e,e===se?de:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ko(e,r);else{t=r;var o=V;V|=2;var i=vd();(se!==e||de!==t)&&(ht=null,Un=ee()+500,rn(e,t));do try{Oh();break}catch(s){hd(e,s)}while(!0);Vl(),Fo.current=i,V=o,te!==null?t=0:(se=null,de=0,t=ie)}if(t!==0){if(t===2&&(o=nl(e),o!==0&&(r=o,t=Es(e,o))),t===1)throw n=Pr,rn(e,0),zt(e,r),De(e,ee()),n;if(t===6)zt(e,r);else{if(o=e.current.alternate,!(r&30)&&!jh(o)&&(t=Ko(e,r),t===2&&(i=nl(e),i!==0&&(r=i,t=Es(e,i))),t===1))throw n=Pr,rn(e,0),zt(e,r),De(e,ee()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:on(e,Ce,ht);break;case 3:if(zt(e,r),(r&130023424)===r&&(t=xs+500-ee(),10<t)){if(to(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ne(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Pl(on.bind(null,e,Ce,ht),t);break}on(e,Ce,ht);break;case 4:if(zt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-We(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Rh(r/1960))-r,10<r){e.timeoutHandle=Pl(on.bind(null,e,Ce,ht),r);break}on(e,Ce,ht);break;case 5:on(e,Ce,ht);break;default:throw Error(S(329))}}}return De(e,ee()),e.callbackNode===n?md.bind(null,e):null}function Es(e,t){var n=_r;return e.current.memoizedState.isDehydrated&&(rn(e,t).flags|=256),e=Ko(e,t),e!==2&&(t=Ce,Ce=n,t!==null&&Ss(t)),e}function Ss(e){Ce===null?Ce=e:Ce.push.apply(Ce,e)}function jh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Be(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function zt(e,t){for(t&=~ws,t&=~$o,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-We(t),r=1<<n;e[n]=-1,t&=~r}}function pd(e){if(V&6)throw Error(S(327));Mn();var t=to(e,0);if(!(t&1))return De(e,ee()),null;var n=Ko(e,t);if(e.tag!==0&&n===2){var r=nl(e);r!==0&&(t=r,n=Es(e,r))}if(n===1)throw n=Pr,rn(e,0),zt(e,t),De(e,ee()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,on(e,Ce,ht),De(e,ee()),null}function bs(e,t){var n=V;V|=1;try{return e(t)}finally{V=n,V===0&&(Un=ee()+500,No&&Rt())}}function nn(e){Mt!==null&&Mt.tag===0&&!(V&6)&&Mn();var t=V;V|=1;var n=Fe.transition,r=$;try{if(Fe.transition=null,$=1,e)return e()}finally{$=r,Fe.transition=n,V=t,!(V&6)&&Rt()}}function Cs(){Oe=On.current,H(On)}function rn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ah(n)),te!==null)for(n=te.return;n!==null;){var r=n;switch(Ul(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&wo();break;case 3:Rn(),H(Ee),H(me),Kl();break;case 5:Gl(r);break;case 4:Rn();break;case 13:H(Y);break;case 19:H(Y);break;case 10:Fl(r.type._context);break;case 22:case 23:Cs()}n=n.return}if(se=e,te=e=At(e.current,null),de=Oe=t,ie=0,Pr=null,ws=$o=tn=0,Ce=_r=null,Jt!==null){for(t=0;t<Jt.length;t++)if(n=Jt[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}Jt=null}return e}function hd(e,t){do{var n=te;try{if(Vl(),Ro.current=Uo,jo){for(var r=X.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}jo=!1}if(en=0,le=oe=X=null,Er=!1,Sr=0,ys.current=null,n===null||n.return===null){ie=1,Pr=t,te=null;break}e:{var i=e,l=n.return,s=n,a=t;if(t=de,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,f=s,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var x=Vc(l);if(x!==null){x.flags&=-257,Fc(x,l,s,i,t),x.mode&1&&Ac(i,u,t),t=x,a=u;var w=t.updateQueue;if(w===null){var g=new Set;g.add(a),t.updateQueue=g}else w.add(a);break e}else{if(!(t&1)){Ac(i,u,t),Ds();break e}a=Error(S(426))}}else if(Q&&s.mode&1){var k=Vc(l);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Fc(k,l,s,i,t),zl(jn(a,s));break e}}i=a=jn(a,s),ie!==4&&(ie=2),_r===null?_r=[i]:_r.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var d=Lc(i,a,t);cc(i,d);break e;case 1:s=a;var c=i.type,v=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Ut===null||!Ut.has(v)))){i.flags|=65536,t&=-t,i.lanes|=t;var N=zc(i,s,t);cc(i,N);break e}}i=i.return}while(i!==null)}yd(n)}catch(E){t=E,te===n&&n!==null&&(te=n=n.return);continue}break}while(!0)}function vd(){var e=Fo.current;return Fo.current=Uo,e===null?Uo:e}function Ds(){(ie===0||ie===3||ie===2)&&(ie=4),se===null||!(tn&268435455)&&!($o&268435455)||zt(se,de)}function Ko(e,t){var n=V;V|=2;var r=vd();(se!==e||de!==t)&&(ht=null,rn(e,t));do try{Ih();break}catch(o){hd(e,o)}while(!0);if(Vl(),V=n,Fo.current=r,te!==null)throw Error(S(261));return se=null,de=0,ie}function Ih(){for(;te!==null;)gd(te)}function Oh(){for(;te!==null&&!ip();)gd(te)}function gd(e){var t=Nd(e.alternate,e,Oe);e.memoizedProps=e.pendingProps,t===null?yd(e):te=t,ys.current=null}function yd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Dh(n,t),n!==null){n.flags&=32767,te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ie=6,te=null;return}}else if(n=Ch(n,t,Oe),n!==null){te=n;return}if(t=t.sibling,t!==null){te=t;return}te=t=e}while(t!==null);ie===0&&(ie=5)}function on(e,t,n){var r=$,o=Fe.transition;try{Fe.transition=null,$=1,Uh(e,t,n,r)}finally{Fe.transition=o,$=r}return null}function Uh(e,t,n,r){do Mn();while(Mt!==null);if(V&6)throw Error(S(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(hp(e,i),e===se&&(te=se=null,de=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Bo||(Bo=!0,kd(Zr,function(){return Mn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Fe.transition,Fe.transition=null;var l=$;$=1;var s=V;V|=4,ys.current=null,Ph(e,n),ad(n,e),th(Dl),oo=!!Cl,Dl=Cl=null,e.current=n,_h(n),lp(),V=s,$=l,Fe.transition=i}else e.current=n;if(Bo&&(Bo=!1,Mt=e,Ho=o),i=e.pendingLanes,i===0&&(Ut=null),up(n.stateNode),De(e,ee()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Wo)throw Wo=!1,e=Ns,Ns=null,e;return Ho&1&&e.tag!==0&&Mn(),i=e.pendingLanes,i&1?e===ks?Rr++:(Rr=0,ks=e):Rr=0,Rt(),null}function Mn(){if(Mt!==null){var e=lu(Ho),t=Fe.transition,n=$;try{if(Fe.transition=null,$=16>e?16:e,Mt===null)var r=!1;else{if(e=Mt,Mt=null,Ho=0,V&6)throw Error(S(331));var o=V;for(V|=4,_=e.current;_!==null;){var i=_,l=i.child;if(_.flags&16){var s=i.deletions;if(s!==null){for(var a=0;a<s.length;a++){var u=s[a];for(_=u;_!==null;){var f=_;switch(f.tag){case 0:case 11:case 15:Tr(8,f,i)}var m=f.child;if(m!==null)m.return=f,_=m;else for(;_!==null;){f=_;var h=f.sibling,x=f.return;if(rd(f),f===u){_=null;break}if(h!==null){h.return=x,_=h;break}_=x}}}var w=i.alternate;if(w!==null){var g=w.child;if(g!==null){w.child=null;do{var k=g.sibling;g.sibling=null,g=k}while(g!==null)}}_=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,_=l;else e:for(;_!==null;){if(i=_,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Tr(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,_=d;break e}_=i.return}}var c=e.current;for(_=c;_!==null;){l=_;var v=l.child;if(l.subtreeFlags&2064&&v!==null)v.return=l,_=v;else e:for(l=c;_!==null;){if(s=_,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Vo(9,s)}}catch(E){Z(s,s.return,E)}if(s===l){_=null;break e}var N=s.sibling;if(N!==null){N.return=s.return,_=N;break e}_=s.return}}if(V=o,Rt(),qe&&typeof qe.onPostCommitFiberRoot=="function")try{qe.onPostCommitFiberRoot(Jr,e)}catch{}r=!0}return r}finally{$=n,Fe.transition=t}}return!1}function wd(e,t,n){t=jn(n,t),t=Lc(e,t,1),e=It(e,t,1),t=Ne(),e!==null&&(tr(e,1,t),De(e,t))}function Z(e,t,n){if(e.tag===3)wd(e,e,n);else for(;t!==null;){if(t.tag===3){wd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ut===null||!Ut.has(r))){e=jn(n,e),e=zc(t,e,1),t=It(t,e,1),e=Ne(),t!==null&&(tr(t,1,e),De(t,e));break}}t=t.return}}function Mh(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ne(),e.pingedLanes|=e.suspendedLanes&n,se===e&&(de&n)===n&&(ie===4||ie===3&&(de&130023424)===de&&500>ee()-xs?rn(e,0):ws|=n),De(e,t)}function xd(e,t){t===0&&(e.mode&1?(t=eo,eo<<=1,!(eo&130023424)&&(eo=4194304)):t=1);var n=Ne();e=ft(e,t),e!==null&&(tr(e,t,n),De(e,n))}function Lh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),xd(e,n)}function zh(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),xd(e,n)}var Nd;Nd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ee.current)be=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return be=!1,bh(e,t,n);be=!!(e.flags&131072)}else be=!1,Q&&t.flags&1048576&&ec(t,Eo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;zo(e,t),e=t.pendingProps;var o=Sn(t,me.current);_n(t,n),o=Zl(null,t,r,e,o,n);var i=Jl();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Se(r)?(i=!0,xo(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Bl(t),o.updater=Mo,t.stateNode=o,o._reactInternals=t,os(t,r,e,n),t=as(null,t,r,!0,i,n)):(t.tag=0,Q&&i&&Ol(t),xe(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(zo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Vh(r),e=Ge(r,e),o){case 0:t=ss(null,t,r,e,n);break e;case 1:t=Qc(null,t,r,e,n);break e;case 11:t=$c(null,t,r,e,n);break e;case 14:t=Wc(null,t,r,Ge(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ge(r,o),ss(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ge(r,o),Qc(e,t,r,o,n);case 3:e:{if(Kc(t),e===null)throw Error(S(387));r=t.pendingProps,i=t.memoizedState,o=i.element,uc(e,t),Po(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=jn(Error(S(423)),t),t=Yc(e,t,r,n,o);break e}else if(r!==o){o=jn(Error(S(424)),t),t=Yc(e,t,r,n,o);break e}else for(Ie=Tt(t.stateNode.containerInfo.firstChild),je=t,Q=!0,He=null,n=sc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Dn(),r===o){t=pt(e,t,n);break e}xe(e,t,r,n)}t=t.child}return t;case 5:return fc(t),e===null&&Ll(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Tl(r,o)?l=null:i!==null&&Tl(r,i)&&(t.flags|=32),Gc(e,t),xe(e,t,l,n),t.child;case 6:return e===null&&Ll(t),null;case 13:return Xc(e,t,n);case 4:return Hl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Tn(t,null,r,n):xe(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ge(r,o),$c(e,t,r,o,n);case 7:return xe(e,t,t.pendingProps,n),t.child;case 8:return xe(e,t,t.pendingProps.children,n),t.child;case 12:return xe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,W(Co,r._currentValue),r._currentValue=l,i!==null)if(Be(i.value,l)){if(i.children===o.children&&!Ee.current){t=pt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=mt(-1,n&-n),a.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?a.next=a:(a.next=f.next,f.next=a),u.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),$l(i.return,n,t),s.lanes|=n;break}a=a.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(S(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),$l(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}xe(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,_n(t,n),o=Ae(o),r=r(o),t.flags|=1,xe(e,t,r,n),t.child;case 14:return r=t.type,o=Ge(r,t.pendingProps),o=Ge(r.type,o),Wc(e,t,r,o,n);case 15:return Bc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ge(r,o),zo(e,t),t.tag=1,Se(r)?(e=!0,xo(t)):e=!1,_n(t,n),Uc(t,r,o),os(t,r,o,n),as(null,t,r,!0,e,n);case 19:return Jc(e,t,n);case 22:return Hc(e,t,n)}throw Error(S(156,t.tag))};function kd(e,t){return tu(e,t)}function Ah(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $e(e,t,n,r){return new Ah(e,t,n,r)}function Ts(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Vh(e){if(typeof e=="function")return Ts(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Oi)return 11;if(e===Li)return 14}return 2}function At(e,t){var n=e.alternate;return n===null?(n=$e(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Yo(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")Ts(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case dn:return ln(n.children,o,i,t);case ji:l=8,o|=8;break;case Ii:return e=$e(12,n,t,o|2),e.elementType=Ii,e.lanes=i,e;case Ui:return e=$e(13,n,t,o),e.elementType=Ui,e.lanes=i,e;case Mi:return e=$e(19,n,t,o),e.elementType=Mi,e.lanes=i,e;case Ra:return Xo(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Pa:l=10;break e;case _a:l=9;break e;case Oi:l=11;break e;case Li:l=14;break e;case xt:l=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=$e(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function ln(e,t,n,r){return e=$e(7,e,r,t),e.lanes=n,e}function Xo(e,t,n,r){return e=$e(22,e,r,t),e.elementType=Ra,e.lanes=n,e.stateNode={isHidden:!1},e}function Ps(e,t,n){return e=$e(6,e,null,t),e.lanes=n,e}function _s(e,t,n){return t=$e(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Fh(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=rl(0),this.expirationTimes=rl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Rs(e,t,n,r,o,i,l,s,a){return e=new Fh(e,t,n,s,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=$e(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bl(i),e}function $h(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:cn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ed(e){if(!e)return _t;e=e._reactInternals;e:{if(Qt(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Se(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(Se(n))return Zu(e,n,t)}return t}function Sd(e,t,n,r,o,i,l,s,a){return e=Rs(n,r,!0,e,o,i,l,s,a),e.context=Ed(null),n=e.current,r=Ne(),o=Lt(n),i=mt(r,o),i.callback=t??null,It(n,i,o),e.current.lanes=o,tr(e,o,r),De(e,r),e}function Zo(e,t,n,r){var o=t.current,i=Ne(),l=Lt(o);return n=Ed(n),t.context===null?t.context=n:t.pendingContext=n,t=mt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=It(o,t,l),e!==null&&(Ye(e,o,l,i),To(e,o,l)),l}function Jo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function bd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function js(e,t){bd(e,t),(e=e.alternate)&&bd(e,t)}function Wh(){return null}var Cd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Is(e){this._internalRoot=e}qo.prototype.render=Is.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));Zo(e,t,null,null)},qo.prototype.unmount=Is.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;nn(function(){Zo(null,e,null,null)}),t[at]=null}};function qo(e){this._internalRoot=e}qo.prototype.unstable_scheduleHydration=function(e){if(e){var t=uu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<bt.length&&t!==0&&t<bt[n].priority;n++);bt.splice(n,0,e),n===0&&fu(e)}};function Os(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ei(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Dd(){}function Bh(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=Jo(l);i.call(u)}}var l=Sd(t,r,e,0,null,!1,!1,"",Dd);return e._reactRootContainer=l,e[at]=l.current,hr(e.nodeType===8?e.parentNode:e),nn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var u=Jo(a);s.call(u)}}var a=Rs(e,0,!1,null,null,!1,!1,"",Dd);return e._reactRootContainer=a,e[at]=a.current,hr(e.nodeType===8?e.parentNode:e),nn(function(){Zo(t,a,n,r)}),a}function ti(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var s=o;o=function(){var a=Jo(l);s.call(a)}}Zo(t,l,e,o)}else l=Bh(n,t,e,o,r);return Jo(l)}su=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=er(t.pendingLanes);n!==0&&(ol(t,n|1),De(t,ee()),!(V&6)&&(Un=ee()+500,Rt()))}break;case 13:nn(function(){var r=ft(e,1);if(r!==null){var o=Ne();Ye(r,e,1,o)}}),js(e,1)}},il=function(e){if(e.tag===13){var t=ft(e,134217728);if(t!==null){var n=Ne();Ye(t,e,134217728,n)}js(e,134217728)}},au=function(e){if(e.tag===13){var t=Lt(e),n=ft(e,t);if(n!==null){var r=Ne();Ye(n,e,t,r)}js(e,t)}},uu=function(){return $},cu=function(e,t){var n=$;try{return $=e,t()}finally{$=n}},Zi=function(e,t,n){switch(t){case"input":if(Wi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=yo(r);if(!o)throw Error(S(90));Oa(r),Wi(r,o)}}}break;case"textarea":Aa(e,n);break;case"select":t=n.value,t!=null&&fn(e,!!n.multiple,t,!1)}},Ka=bs,Ya=nn;var Hh={usingClientEntryPoint:!1,Events:[yr,kn,yo,Ga,Qa,bs]},jr={findFiberByHostInstance:Kt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Gh={bundleType:jr.bundleType,version:jr.version,rendererPackageName:jr.rendererPackageName,rendererConfig:jr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:st.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=qa(e),e===null?null:e.stateNode},findFiberByHostInstance:jr.findFiberByHostInstance||Wh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ni=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ni.isDisabled&&ni.supportsFiber)try{Jr=ni.inject(Gh),qe=ni}catch{}}Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hh,Pe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Os(t))throw Error(S(200));return $h(e,t,null,n)},Pe.createRoot=function(e,t){if(!Os(e))throw Error(S(299));var n=!1,r="",o=Cd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Rs(e,1,!1,null,null,n,!1,r,o),e[at]=t.current,hr(e.nodeType===8?e.parentNode:e),new Is(t)},Pe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=qa(t),e=e===null?null:e.stateNode,e},Pe.flushSync=function(e){return nn(e)},Pe.hydrate=function(e,t,n){if(!ei(t))throw Error(S(200));return ti(null,e,t,!0,n)},Pe.hydrateRoot=function(e,t,n){if(!Os(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=Cd;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Sd(t,null,e,1,n??null,o,!1,i,l),e[at]=t.current,hr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new qo(t)},Pe.render=function(e,t,n){if(!ei(t))throw Error(S(200));return ti(null,e,t,!1,n)},Pe.unmountComponentAtNode=function(e){if(!ei(e))throw Error(S(40));return e._reactRootContainer?(nn(function(){ti(null,null,e,!1,function(){e._reactRootContainer=null,e[at]=null})}),!0):!1},Pe.unstable_batchedUpdates=bs,Pe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ei(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return ti(e,t,n,!1,r)},Pe.version="18.3.1-next-f1338f8080-20240426";function Td(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Td)}catch(e){console.error(e)}}Td(),Ea.exports=Pe;var Us=Ea.exports;const Qh=ua(Us);var Pd,_d=Us;Pd=_d.createRoot,_d.hydrateRoot;function Rd(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function jd(...e){return t=>{let n=!1;const r=e.map(o=>{const i=Rd(o,t);return!n&&typeof i=="function"&&(n=!0),i});if(n)return()=>{for(let o=0;o<r.length;o++){const i=r[o];typeof i=="function"?i():Rd(e[o],null)}}}}function ot(...e){return p.useCallback(jd(...e),e)}var Id={exports:{}},ri={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kh=p,Yh=Symbol.for("react.element"),Xh=Symbol.for("react.fragment"),Zh=Object.prototype.hasOwnProperty,Jh=Kh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,qh={key:!0,ref:!0,__self:!0,__source:!0};function Od(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Zh.call(t,r)&&!qh.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Yh,type:e,key:i,ref:l,props:o,_owner:Jh.current}}ri.Fragment=Xh,ri.jsx=Od,ri.jsxs=Od,Id.exports=ri;var R=Id.exports;function Ir(e){const t=tv(e),n=p.forwardRef((r,o)=>{const{children:i,...l}=r,s=p.Children.toArray(i),a=s.find(rv);if(a){const u=a.props.children,f=s.map(m=>m===a?p.Children.count(u)>1?p.Children.only(null):p.isValidElement(u)?u.props.children:null:m);return R.jsx(t,{...l,ref:o,children:p.isValidElement(u)?p.cloneElement(u,void 0,f):null})}return R.jsx(t,{...l,ref:o,children:i})});return n.displayName=`${e}.Slot`,n}var ev=Ir("Slot");function tv(e){const t=p.forwardRef((n,r)=>{const{children:o,...i}=n;if(p.isValidElement(o)){const l=iv(o),s=ov(i,o.props);return o.type!==p.Fragment&&(s.ref=r?jd(r,l):l),p.cloneElement(o,s)}return p.Children.count(o)>1?p.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var nv=Symbol("radix.slottable");function rv(e){return p.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===nv}function ov(e,t){const n={...t};for(const r in t){const o=e[r],i=t[r];/^on[A-Z]/.test(r)?o&&i?n[r]=(...s)=>{i(...s),o(...s)}:o&&(n[r]=o):r==="style"?n[r]={...o,...i}:r==="className"&&(n[r]=[o,i].filter(Boolean).join(" "))}return{...e,...n}}function iv(e){var r,o;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function Ud(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=Ud(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Md(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=Ud(e))&&(r&&(r+=" "),r+=t);return r}const Ld=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,zd=Md,Ad=(e,t)=>n=>{var r;if((t==null?void 0:t.variants)==null)return zd(e,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:o,defaultVariants:i}=t,l=Object.keys(o).map(u=>{const f=n==null?void 0:n[u],m=i==null?void 0:i[u];if(f===null)return null;const h=Ld(f)||Ld(m);return o[u][h]}),s=n&&Object.entries(n).reduce((u,f)=>{let[m,h]=f;return h===void 0||(u[m]=h),u},{}),a=t==null||(r=t.compoundVariants)===null||r===void 0?void 0:r.reduce((u,f)=>{let{class:m,className:h,...x}=f;return Object.entries(x).every(w=>{let[g,k]=w;return Array.isArray(k)?k.includes({...i,...s}[g]):{...i,...s}[g]===k})?[...u,m,h]:u},[]);return zd(e,l,a,n==null?void 0:n.class,n==null?void 0:n.className)},Ms="-",lv=e=>{const t=av(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:l=>{const s=l.split(Ms);return s[0]===""&&s.length!==1&&s.shift(),Vd(s,t)||sv(l)},getConflictingClassGroupIds:(l,s)=>{const a=n[l]||[];return s&&r[l]?[...a,...r[l]]:a}}},Vd=(e,t)=>{var l;if(e.length===0)return t.classGroupId;const n=e[0],r=t.nextPart.get(n),o=r?Vd(e.slice(1),r):void 0;if(o)return o;if(t.validators.length===0)return;const i=e.join(Ms);return(l=t.validators.find(({validator:s})=>s(i)))==null?void 0:l.classGroupId},Fd=/^\[(.+)\]$/,sv=e=>{if(Fd.test(e)){const t=Fd.exec(e)[1],n=t==null?void 0:t.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}},av=e=>{const{theme:t,prefix:n}=e,r={nextPart:new Map,validators:[]};return cv(Object.entries(e.classGroups),n).forEach(([i,l])=>{Ls(l,r,i,t)}),r},Ls=(e,t,n,r)=>{e.forEach(o=>{if(typeof o=="string"){const i=o===""?t:$d(t,o);i.classGroupId=n;return}if(typeof o=="function"){if(uv(o)){Ls(o(r),t,n,r);return}t.validators.push({validator:o,classGroupId:n});return}Object.entries(o).forEach(([i,l])=>{Ls(l,$d(t,i),n,r)})})},$d=(e,t)=>{let n=e;return t.split(Ms).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n},uv=e=>e.isThemeGetter,cv=(e,t)=>t?e.map(([n,r])=>{const o=r.map(i=>typeof i=="string"?t+i:typeof i=="object"?Object.fromEntries(Object.entries(i).map(([l,s])=>[t+l,s])):i);return[n,o]}):e,dv=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=new Map,r=new Map;const o=(i,l)=>{n.set(i,l),t++,t>e&&(t=0,r=n,n=new Map)};return{get(i){let l=n.get(i);if(l!==void 0)return l;if((l=r.get(i))!==void 0)return o(i,l),l},set(i,l){n.has(i)?n.set(i,l):o(i,l)}}},Wd="!",fv=e=>{const{separator:t,experimentalParseClassName:n}=e,r=t.length===1,o=t[0],i=t.length,l=s=>{const a=[];let u=0,f=0,m;for(let k=0;k<s.length;k++){let d=s[k];if(u===0){if(d===o&&(r||s.slice(k,k+i)===t)){a.push(s.slice(f,k)),f=k+i;continue}if(d==="/"){m=k;continue}}d==="["?u++:d==="]"&&u--}const h=a.length===0?s:s.substring(f),x=h.startsWith(Wd),w=x?h.substring(1):h,g=m&&m>f?m-f:void 0;return{modifiers:a,hasImportantModifier:x,baseClassName:w,maybePostfixModifierPosition:g}};return n?s=>n({className:s,parseClassName:l}):l},mv=e=>{if(e.length<=1)return e;const t=[];let n=[];return e.forEach(r=>{r[0]==="["?(t.push(...n.sort(),r),n=[]):n.push(r)}),t.push(...n.sort()),t},pv=e=>({cache:dv(e.cacheSize),parseClassName:fv(e),...lv(e)}),hv=/\s+/,vv=(e,t)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:o}=t,i=[],l=e.trim().split(hv);let s="";for(let a=l.length-1;a>=0;a-=1){const u=l[a],{modifiers:f,hasImportantModifier:m,baseClassName:h,maybePostfixModifierPosition:x}=n(u);let w=!!x,g=r(w?h.substring(0,x):h);if(!g){if(!w){s=u+(s.length>0?" "+s:s);continue}if(g=r(h),!g){s=u+(s.length>0?" "+s:s);continue}w=!1}const k=mv(f).join(":"),d=m?k+Wd:k,c=d+g;if(i.includes(c))continue;i.push(c);const v=o(g,w);for(let N=0;N<v.length;++N){const E=v[N];i.push(d+E)}s=u+(s.length>0?" "+s:s)}return s};function gv(){let e=0,t,n,r="";for(;e<arguments.length;)(t=arguments[e++])&&(n=Bd(t))&&(r&&(r+=" "),r+=n);return r}const Bd=e=>{if(typeof e=="string")return e;let t,n="";for(let r=0;r<e.length;r++)e[r]&&(t=Bd(e[r]))&&(n&&(n+=" "),n+=t);return n};function yv(e,...t){let n,r,o,i=l;function l(a){const u=t.reduce((f,m)=>m(f),e());return n=pv(u),r=n.cache.get,o=n.cache.set,i=s,s(a)}function s(a){const u=r(a);if(u)return u;const f=vv(a,n);return o(a,f),f}return function(){return i(gv.apply(null,arguments))}}const G=e=>{const t=n=>n[e]||[];return t.isThemeGetter=!0,t},Hd=/^\[(?:([a-z-]+):)?(.+)\]$/i,wv=/^\d+\/\d+$/,xv=new Set(["px","full","screen"]),Nv=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,kv=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Ev=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Sv=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,bv=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,vt=e=>Ln(e)||xv.has(e)||wv.test(e),Vt=e=>zn(e,"length",Iv),Ln=e=>!!e&&!Number.isNaN(Number(e)),zs=e=>zn(e,"number",Ln),Or=e=>!!e&&Number.isInteger(Number(e)),Cv=e=>e.endsWith("%")&&Ln(e.slice(0,-1)),U=e=>Hd.test(e),Ft=e=>Nv.test(e),Dv=new Set(["length","size","percentage"]),Tv=e=>zn(e,Dv,Gd),Pv=e=>zn(e,"position",Gd),_v=new Set(["image","url"]),Rv=e=>zn(e,_v,Uv),jv=e=>zn(e,"",Ov),Ur=()=>!0,zn=(e,t,n)=>{const r=Hd.exec(e);return r?r[1]?typeof t=="string"?r[1]===t:t.has(r[1]):n(r[2]):!1},Iv=e=>kv.test(e)&&!Ev.test(e),Gd=()=>!1,Ov=e=>Sv.test(e),Uv=e=>bv.test(e),Mv=yv(()=>{const e=G("colors"),t=G("spacing"),n=G("blur"),r=G("brightness"),o=G("borderColor"),i=G("borderRadius"),l=G("borderSpacing"),s=G("borderWidth"),a=G("contrast"),u=G("grayscale"),f=G("hueRotate"),m=G("invert"),h=G("gap"),x=G("gradientColorStops"),w=G("gradientColorStopPositions"),g=G("inset"),k=G("margin"),d=G("opacity"),c=G("padding"),v=G("saturate"),N=G("scale"),E=G("sepia"),D=G("skew"),b=G("space"),C=G("translate"),L=()=>["auto","contain","none"],I=()=>["auto","hidden","clip","visible","scroll"],J=()=>["auto",U,t],z=()=>[U,t],ke=()=>["",vt,Vt],Me=()=>["auto",Ln,U],gt=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],ae=()=>["solid","dashed","dotted","double","none"],Bt=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],T=()=>["start","end","center","between","around","evenly","stretch"],j=()=>["","0",U],O=()=>["auto","avoid","all","avoid-page","page","left","right","column"],A=()=>[Ln,U];return{cacheSize:500,separator:":",theme:{colors:[Ur],spacing:[vt,Vt],blur:["none","",Ft,U],brightness:A(),borderColor:[e],borderRadius:["none","","full",Ft,U],borderSpacing:z(),borderWidth:ke(),contrast:A(),grayscale:j(),hueRotate:A(),invert:j(),gap:z(),gradientColorStops:[e],gradientColorStopPositions:[Cv,Vt],inset:J(),margin:J(),opacity:A(),padding:z(),saturate:A(),scale:A(),sepia:j(),skew:A(),space:z(),translate:z()},classGroups:{aspect:[{aspect:["auto","square","video",U]}],container:["container"],columns:[{columns:[Ft]}],"break-after":[{"break-after":O()}],"break-before":[{"break-before":O()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...gt(),U]}],overflow:[{overflow:I()}],"overflow-x":[{"overflow-x":I()}],"overflow-y":[{"overflow-y":I()}],overscroll:[{overscroll:L()}],"overscroll-x":[{"overscroll-x":L()}],"overscroll-y":[{"overscroll-y":L()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[g]}],"inset-x":[{"inset-x":[g]}],"inset-y":[{"inset-y":[g]}],start:[{start:[g]}],end:[{end:[g]}],top:[{top:[g]}],right:[{right:[g]}],bottom:[{bottom:[g]}],left:[{left:[g]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Or,U]}],basis:[{basis:J()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",U]}],grow:[{grow:j()}],shrink:[{shrink:j()}],order:[{order:["first","last","none",Or,U]}],"grid-cols":[{"grid-cols":[Ur]}],"col-start-end":[{col:["auto",{span:["full",Or,U]},U]}],"col-start":[{"col-start":Me()}],"col-end":[{"col-end":Me()}],"grid-rows":[{"grid-rows":[Ur]}],"row-start-end":[{row:["auto",{span:[Or,U]},U]}],"row-start":[{"row-start":Me()}],"row-end":[{"row-end":Me()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",U]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",U]}],gap:[{gap:[h]}],"gap-x":[{"gap-x":[h]}],"gap-y":[{"gap-y":[h]}],"justify-content":[{justify:["normal",...T()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...T(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...T(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[c]}],px:[{px:[c]}],py:[{py:[c]}],ps:[{ps:[c]}],pe:[{pe:[c]}],pt:[{pt:[c]}],pr:[{pr:[c]}],pb:[{pb:[c]}],pl:[{pl:[c]}],m:[{m:[k]}],mx:[{mx:[k]}],my:[{my:[k]}],ms:[{ms:[k]}],me:[{me:[k]}],mt:[{mt:[k]}],mr:[{mr:[k]}],mb:[{mb:[k]}],ml:[{ml:[k]}],"space-x":[{"space-x":[b]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[b]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",U,t]}],"min-w":[{"min-w":[U,t,"min","max","fit"]}],"max-w":[{"max-w":[U,t,"none","full","min","max","fit","prose",{screen:[Ft]},Ft]}],h:[{h:[U,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[U,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[U,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[U,t,"auto","min","max","fit"]}],"font-size":[{text:["base",Ft,Vt]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",zs]}],"font-family":[{font:[Ur]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",U]}],"line-clamp":[{"line-clamp":["none",Ln,zs]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",vt,U]}],"list-image":[{"list-image":["none",U]}],"list-style-type":[{list:["none","disc","decimal",U]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[d]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[d]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...ae(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",vt,Vt]}],"underline-offset":[{"underline-offset":["auto",vt,U]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:z()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",U]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",U]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[d]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...gt(),Pv]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Tv]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Rv]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[w]}],"gradient-via-pos":[{via:[w]}],"gradient-to-pos":[{to:[w]}],"gradient-from":[{from:[x]}],"gradient-via":[{via:[x]}],"gradient-to":[{to:[x]}],rounded:[{rounded:[i]}],"rounded-s":[{"rounded-s":[i]}],"rounded-e":[{"rounded-e":[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-ss":[{"rounded-ss":[i]}],"rounded-se":[{"rounded-se":[i]}],"rounded-ee":[{"rounded-ee":[i]}],"rounded-es":[{"rounded-es":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[s]}],"border-w-x":[{"border-x":[s]}],"border-w-y":[{"border-y":[s]}],"border-w-s":[{"border-s":[s]}],"border-w-e":[{"border-e":[s]}],"border-w-t":[{"border-t":[s]}],"border-w-r":[{"border-r":[s]}],"border-w-b":[{"border-b":[s]}],"border-w-l":[{"border-l":[s]}],"border-opacity":[{"border-opacity":[d]}],"border-style":[{border:[...ae(),"hidden"]}],"divide-x":[{"divide-x":[s]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[s]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[d]}],"divide-style":[{divide:ae()}],"border-color":[{border:[o]}],"border-color-x":[{"border-x":[o]}],"border-color-y":[{"border-y":[o]}],"border-color-s":[{"border-s":[o]}],"border-color-e":[{"border-e":[o]}],"border-color-t":[{"border-t":[o]}],"border-color-r":[{"border-r":[o]}],"border-color-b":[{"border-b":[o]}],"border-color-l":[{"border-l":[o]}],"divide-color":[{divide:[o]}],"outline-style":[{outline:["",...ae()]}],"outline-offset":[{"outline-offset":[vt,U]}],"outline-w":[{outline:[vt,Vt]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:ke()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[d]}],"ring-offset-w":[{"ring-offset":[vt,Vt]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",Ft,jv]}],"shadow-color":[{shadow:[Ur]}],opacity:[{opacity:[d]}],"mix-blend":[{"mix-blend":[...Bt(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":Bt()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[a]}],"drop-shadow":[{"drop-shadow":["","none",Ft,U]}],grayscale:[{grayscale:[u]}],"hue-rotate":[{"hue-rotate":[f]}],invert:[{invert:[m]}],saturate:[{saturate:[v]}],sepia:[{sepia:[E]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[a]}],"backdrop-grayscale":[{"backdrop-grayscale":[u]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[f]}],"backdrop-invert":[{"backdrop-invert":[m]}],"backdrop-opacity":[{"backdrop-opacity":[d]}],"backdrop-saturate":[{"backdrop-saturate":[v]}],"backdrop-sepia":[{"backdrop-sepia":[E]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[l]}],"border-spacing-x":[{"border-spacing-x":[l]}],"border-spacing-y":[{"border-spacing-y":[l]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",U]}],duration:[{duration:A()}],ease:[{ease:["linear","in","out","in-out",U]}],delay:[{delay:A()}],animate:[{animate:["none","spin","ping","pulse","bounce",U]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[N]}],"scale-x":[{"scale-x":[N]}],"scale-y":[{"scale-y":[N]}],rotate:[{rotate:[Or,U]}],"translate-x":[{"translate-x":[C]}],"translate-y":[{"translate-y":[C]}],"skew-x":[{"skew-x":[D]}],"skew-y":[{"skew-y":[D]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",U]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",U]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":z()}],"scroll-mx":[{"scroll-mx":z()}],"scroll-my":[{"scroll-my":z()}],"scroll-ms":[{"scroll-ms":z()}],"scroll-me":[{"scroll-me":z()}],"scroll-mt":[{"scroll-mt":z()}],"scroll-mr":[{"scroll-mr":z()}],"scroll-mb":[{"scroll-mb":z()}],"scroll-ml":[{"scroll-ml":z()}],"scroll-p":[{"scroll-p":z()}],"scroll-px":[{"scroll-px":z()}],"scroll-py":[{"scroll-py":z()}],"scroll-ps":[{"scroll-ps":z()}],"scroll-pe":[{"scroll-pe":z()}],"scroll-pt":[{"scroll-pt":z()}],"scroll-pr":[{"scroll-pr":z()}],"scroll-pb":[{"scroll-pb":z()}],"scroll-pl":[{"scroll-pl":z()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",U]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[vt,Vt,zs]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}});function ne(...e){return Mv(Md(e))}const oi="https://tryonai-chatbot.vercel.app",Lv=Ad("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-primary hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),Xe=p.forwardRef(({className:e,variant:t,size:n,asChild:r=!1,...o},i)=>{const l=r?ev:"button";return y.jsxDEV(l,{className:ne(Lv({variant:t,size:n,className:e})),ref:i,...o},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/ui/button.tsx",lineNumber:46,columnNumber:7},void 0)});Xe.displayName="Button";const Qd=p.forwardRef(({className:e,...t},n)=>y.jsxDEV("div",{ref:n,className:ne("rounded-lg border bg-card text-card-foreground shadow-sm",e),...t},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/ui/card.tsx",lineNumber:9,columnNumber:3},void 0));Qd.displayName="Card";const Kd=p.forwardRef(({className:e,...t},n)=>y.jsxDEV("div",{ref:n,className:ne("flex flex-col space-y-1.5 p-6",e),...t},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/ui/card.tsx",lineNumber:24,columnNumber:3},void 0));Kd.displayName="CardHeader";const Yd=p.forwardRef(({className:e,...t},n)=>y.jsxDEV("div",{ref:n,className:ne("text-2xl font-semibold leading-none tracking-tight",e),...t},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/ui/card.tsx",lineNumber:36,columnNumber:3},void 0));Yd.displayName="CardTitle";const zv=p.forwardRef(({className:e,...t},n)=>y.jsxDEV("div",{ref:n,className:ne("text-sm text-muted-foreground",e),...t},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/ui/card.tsx",lineNumber:51,columnNumber:3},void 0));zv.displayName="CardDescription";const Xd=p.forwardRef(({className:e,...t},n)=>y.jsxDEV("div",{ref:n,className:ne("p-6 pt-0",e),...t},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/ui/card.tsx",lineNumber:63,columnNumber:3},void 0));Xd.displayName="CardContent";const Av=p.forwardRef(({className:e,...t},n)=>y.jsxDEV("div",{ref:n,className:ne("flex items-center p-6 pt-0",e),...t},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/ui/card.tsx",lineNumber:71,columnNumber:3},void 0));Av.displayName="CardFooter";const Zd=p.forwardRef(({className:e,type:t,...n},r)=>y.jsxDEV("input",{type:t,className:ne("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",e),ref:r,...n},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/ui/input.tsx",lineNumber:8,columnNumber:7},void 0));Zd.displayName="Input";var Vv=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],ge=Vv.reduce((e,t)=>{const n=Ir(`Primitive.${t}`),r=p.forwardRef((o,i)=>{const{asChild:l,...s}=o,a=l?n:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),R.jsx(a,{...s,ref:i})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function Fv(e,t){e&&Us.flushSync(()=>e.dispatchEvent(t))}var $v="Label",Jd=p.forwardRef((e,t)=>R.jsx(ge.label,{...e,ref:t,onMouseDown:n=>{var o;n.target.closest("button, input, select, textarea")||((o=e.onMouseDown)==null||o.call(e,n),!n.defaultPrevented&&n.detail>1&&n.preventDefault())}}));Jd.displayName=$v;var qd=Jd;const Wv=Ad("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),As=p.forwardRef(({className:e,...t},n)=>y.jsxDEV(qd,{ref:n,className:ne(Wv(),e),...t},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/ui/label.tsx",lineNumber:16,columnNumber:3},void 0));As.displayName=qd.displayName;function fe(e,t,{checkForDefaultPrevented:n=!0}={}){return function(o){if(e==null||e(o),n===!1||!o.defaultPrevented)return t==null?void 0:t(o)}}function Bv(e,t){const n=p.createContext(t),r=i=>{const{children:l,...s}=i,a=p.useMemo(()=>s,Object.values(s));return R.jsx(n.Provider,{value:a,children:l})};r.displayName=e+"Provider";function o(i){const l=p.useContext(n);if(l)return l;if(t!==void 0)return t;throw new Error(`\`${i}\` must be used within \`${e}\``)}return[r,o]}function ii(e,t=[]){let n=[];function r(i,l){const s=p.createContext(l),a=n.length;n=[...n,l];const u=m=>{var d;const{scope:h,children:x,...w}=m,g=((d=h==null?void 0:h[e])==null?void 0:d[a])||s,k=p.useMemo(()=>w,Object.values(w));return R.jsx(g.Provider,{value:k,children:x})};u.displayName=i+"Provider";function f(m,h){var g;const x=((g=h==null?void 0:h[e])==null?void 0:g[a])||s,w=p.useContext(x);if(w)return w;if(l!==void 0)return l;throw new Error(`\`${m}\` must be used within \`${i}\``)}return[u,f]}const o=()=>{const i=n.map(l=>p.createContext(l));return function(s){const a=(s==null?void 0:s[e])||i;return p.useMemo(()=>({[`__scope${e}`]:{...s,[e]:a}}),[s,a])}};return o.scopeName=e,[r,Hv(o,...t)]}function Hv(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(i){const l=r.reduce((s,{useScope:a,scopeName:u})=>{const m=a(i)[`__scope${u}`];return{...s,...m}},{});return p.useMemo(()=>({[`__scope${t.scopeName}`]:l}),[l])}};return n.scopeName=t.scopeName,n}function Gv(e){const t=e+"CollectionProvider",[n,r]=ii(t),[o,i]=n(t,{collectionRef:{current:null},itemMap:new Map}),l=g=>{const{scope:k,children:d}=g,c=wt.useRef(null),v=wt.useRef(new Map).current;return R.jsx(o,{scope:k,itemMap:v,collectionRef:c,children:d})};l.displayName=t;const s=e+"CollectionSlot",a=Ir(s),u=wt.forwardRef((g,k)=>{const{scope:d,children:c}=g,v=i(s,d),N=ot(k,v.collectionRef);return R.jsx(a,{ref:N,children:c})});u.displayName=s;const f=e+"CollectionItemSlot",m="data-radix-collection-item",h=Ir(f),x=wt.forwardRef((g,k)=>{const{scope:d,children:c,...v}=g,N=wt.useRef(null),E=ot(k,N),D=i(f,d);return wt.useEffect(()=>(D.itemMap.set(N,{ref:N,...v}),()=>void D.itemMap.delete(N))),R.jsx(h,{[m]:"",ref:E,children:c})});x.displayName=f;function w(g){const k=i(e+"CollectionConsumer",g);return wt.useCallback(()=>{const c=k.collectionRef.current;if(!c)return[];const v=Array.from(c.querySelectorAll(`[${m}]`));return Array.from(k.itemMap.values()).sort((D,b)=>v.indexOf(D.ref.current)-v.indexOf(b.ref.current))},[k.collectionRef,k.itemMap])}return[{Provider:l,Slot:u,ItemSlot:x},w,r]}var li=globalThis!=null&&globalThis.document?p.useLayoutEffect:()=>{},Qv=$m[" useId ".trim().toString()]||(()=>{}),Kv=0;function Mr(e){const[t,n]=p.useState(Qv());return li(()=>{e||n(r=>r??String(Kv++))},[e]),e||(t?`radix-${t}`:"")}function $t(e){const t=p.useRef(e);return p.useEffect(()=>{t.current=e}),p.useMemo(()=>(...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)},[])}function Vs({prop:e,defaultProp:t,onChange:n=()=>{}}){const[r,o]=Yv({defaultProp:t,onChange:n}),i=e!==void 0,l=i?e:r,s=$t(n),a=p.useCallback(u=>{if(i){const m=typeof u=="function"?u(e):u;m!==e&&s(m)}else o(u)},[i,e,o,s]);return[l,a]}function Yv({defaultProp:e,onChange:t}){const n=p.useState(e),[r]=n,o=p.useRef(r),i=$t(t);return p.useEffect(()=>{o.current!==r&&(i(r),o.current=r)},[r,o,i]),n}var Xv=p.createContext(void 0);function ef(e){const t=p.useContext(Xv);return e||t||"ltr"}var Fs="rovingFocusGroup.onEntryFocus",Zv={bubbles:!1,cancelable:!0},si="RovingFocusGroup",[$s,tf,Jv]=Gv(si),[qv,nf]=ii(si,[Jv]),[eg,tg]=qv(si),rf=p.forwardRef((e,t)=>R.jsx($s.Provider,{scope:e.__scopeRovingFocusGroup,children:R.jsx($s.Slot,{scope:e.__scopeRovingFocusGroup,children:R.jsx(ng,{...e,ref:t})})}));rf.displayName=si;var ng=p.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:n,orientation:r,loop:o=!1,dir:i,currentTabStopId:l,defaultCurrentTabStopId:s,onCurrentTabStopIdChange:a,onEntryFocus:u,preventScrollOnEntryFocus:f=!1,...m}=e,h=p.useRef(null),x=ot(t,h),w=ef(i),[g=null,k]=Vs({prop:l,defaultProp:s,onChange:a}),[d,c]=p.useState(!1),v=$t(u),N=tf(n),E=p.useRef(!1),[D,b]=p.useState(0);return p.useEffect(()=>{const C=h.current;if(C)return C.addEventListener(Fs,v),()=>C.removeEventListener(Fs,v)},[v]),R.jsx(eg,{scope:n,orientation:r,dir:w,loop:o,currentTabStopId:g,onItemFocus:p.useCallback(C=>k(C),[k]),onItemShiftTab:p.useCallback(()=>c(!0),[]),onFocusableItemAdd:p.useCallback(()=>b(C=>C+1),[]),onFocusableItemRemove:p.useCallback(()=>b(C=>C-1),[]),children:R.jsx(ge.div,{tabIndex:d||D===0?-1:0,"data-orientation":r,...m,ref:x,style:{outline:"none",...e.style},onMouseDown:fe(e.onMouseDown,()=>{E.current=!0}),onFocus:fe(e.onFocus,C=>{const L=!E.current;if(C.target===C.currentTarget&&L&&!d){const I=new CustomEvent(Fs,Zv);if(C.currentTarget.dispatchEvent(I),!I.defaultPrevented){const J=N().filter(ae=>ae.focusable),z=J.find(ae=>ae.active),ke=J.find(ae=>ae.id===g),gt=[z,ke,...J].filter(Boolean).map(ae=>ae.ref.current);sf(gt,f)}}E.current=!1}),onBlur:fe(e.onBlur,()=>c(!1))})})}),of="RovingFocusGroupItem",lf=p.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:n,focusable:r=!0,active:o=!1,tabStopId:i,...l}=e,s=Mr(),a=i||s,u=tg(of,n),f=u.currentTabStopId===a,m=tf(n),{onFocusableItemAdd:h,onFocusableItemRemove:x}=u;return p.useEffect(()=>{if(r)return h(),()=>x()},[r,h,x]),R.jsx($s.ItemSlot,{scope:n,id:a,focusable:r,active:o,children:R.jsx(ge.span,{tabIndex:f?0:-1,"data-orientation":u.orientation,...l,ref:t,onMouseDown:fe(e.onMouseDown,w=>{r?u.onItemFocus(a):w.preventDefault()}),onFocus:fe(e.onFocus,()=>u.onItemFocus(a)),onKeyDown:fe(e.onKeyDown,w=>{if(w.key==="Tab"&&w.shiftKey){u.onItemShiftTab();return}if(w.target!==w.currentTarget)return;const g=ig(w,u.orientation,u.dir);if(g!==void 0){if(w.metaKey||w.ctrlKey||w.altKey||w.shiftKey)return;w.preventDefault();let d=m().filter(c=>c.focusable).map(c=>c.ref.current);if(g==="last")d.reverse();else if(g==="prev"||g==="next"){g==="prev"&&d.reverse();const c=d.indexOf(w.currentTarget);d=u.loop?lg(d,c+1):d.slice(c+1)}setTimeout(()=>sf(d))}})})})});lf.displayName=of;var rg={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function og(e,t){return t!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function ig(e,t,n){const r=og(e.key,n);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(r))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(r)))return rg[r]}function sf(e,t=!1){const n=document.activeElement;for(const r of e)if(r===n||(r.focus({preventScroll:t}),document.activeElement!==n))return}function lg(e,t){return e.map((n,r)=>e[(t+r)%e.length])}var sg=rf,ag=lf;function ug(e,t){return p.useReducer((n,r)=>t[n][r]??n,e)}var Lr=e=>{const{present:t,children:n}=e,r=cg(t),o=typeof n=="function"?n({present:r.isPresent}):p.Children.only(n),i=ot(r.ref,dg(o));return typeof n=="function"||r.isPresent?p.cloneElement(o,{ref:i}):null};Lr.displayName="Presence";function cg(e){const[t,n]=p.useState(),r=p.useRef({}),o=p.useRef(e),i=p.useRef("none"),l=e?"mounted":"unmounted",[s,a]=ug(l,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return p.useEffect(()=>{const u=ai(r.current);i.current=s==="mounted"?u:"none"},[s]),li(()=>{const u=r.current,f=o.current;if(f!==e){const h=i.current,x=ai(u);e?a("MOUNT"):x==="none"||(u==null?void 0:u.display)==="none"?a("UNMOUNT"):a(f&&h!==x?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,a]),li(()=>{if(t){let u;const f=t.ownerDocument.defaultView??window,m=x=>{const g=ai(r.current).includes(x.animationName);if(x.target===t&&g&&(a("ANIMATION_END"),!o.current)){const k=t.style.animationFillMode;t.style.animationFillMode="forwards",u=f.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=k)})}},h=x=>{x.target===t&&(i.current=ai(r.current))};return t.addEventListener("animationstart",h),t.addEventListener("animationcancel",m),t.addEventListener("animationend",m),()=>{f.clearTimeout(u),t.removeEventListener("animationstart",h),t.removeEventListener("animationcancel",m),t.removeEventListener("animationend",m)}}else a("ANIMATION_END")},[t,a]),{isPresent:["mounted","unmountSuspended"].includes(s),ref:p.useCallback(u=>{u&&(r.current=getComputedStyle(u)),n(u)},[])}}function ai(e){return(e==null?void 0:e.animationName)||"none"}function dg(e){var r,o;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var Ws="Tabs",[fg,r0]=ii(Ws,[nf]),af=nf(),[mg,Bs]=fg(Ws),uf=p.forwardRef((e,t)=>{const{__scopeTabs:n,value:r,onValueChange:o,defaultValue:i,orientation:l="horizontal",dir:s,activationMode:a="automatic",...u}=e,f=ef(s),[m,h]=Vs({prop:r,onChange:o,defaultProp:i});return R.jsx(mg,{scope:n,baseId:Mr(),value:m,onValueChange:h,orientation:l,dir:f,activationMode:a,children:R.jsx(ge.div,{dir:f,"data-orientation":l,...u,ref:t})})});uf.displayName=Ws;var cf="TabsList",df=p.forwardRef((e,t)=>{const{__scopeTabs:n,loop:r=!0,...o}=e,i=Bs(cf,n),l=af(n);return R.jsx(sg,{asChild:!0,...l,orientation:i.orientation,dir:i.dir,loop:r,children:R.jsx(ge.div,{role:"tablist","aria-orientation":i.orientation,...o,ref:t})})});df.displayName=cf;var ff="TabsTrigger",mf=p.forwardRef((e,t)=>{const{__scopeTabs:n,value:r,disabled:o=!1,...i}=e,l=Bs(ff,n),s=af(n),a=vf(l.baseId,r),u=gf(l.baseId,r),f=r===l.value;return R.jsx(ag,{asChild:!0,...s,focusable:!o,active:f,children:R.jsx(ge.button,{type:"button",role:"tab","aria-selected":f,"aria-controls":u,"data-state":f?"active":"inactive","data-disabled":o?"":void 0,disabled:o,id:a,...i,ref:t,onMouseDown:fe(e.onMouseDown,m=>{!o&&m.button===0&&m.ctrlKey===!1?l.onValueChange(r):m.preventDefault()}),onKeyDown:fe(e.onKeyDown,m=>{[" ","Enter"].includes(m.key)&&l.onValueChange(r)}),onFocus:fe(e.onFocus,()=>{const m=l.activationMode!=="manual";!f&&!o&&m&&l.onValueChange(r)})})})});mf.displayName=ff;var pf="TabsContent",hf=p.forwardRef((e,t)=>{const{__scopeTabs:n,value:r,forceMount:o,children:i,...l}=e,s=Bs(pf,n),a=vf(s.baseId,r),u=gf(s.baseId,r),f=r===s.value,m=p.useRef(f);return p.useEffect(()=>{const h=requestAnimationFrame(()=>m.current=!1);return()=>cancelAnimationFrame(h)},[]),R.jsx(Lr,{present:o||f,children:({present:h})=>R.jsx(ge.div,{"data-state":f?"active":"inactive","data-orientation":s.orientation,role:"tabpanel","aria-labelledby":a,hidden:!h,id:u,tabIndex:0,...l,ref:t,style:{...e.style,animationDuration:m.current?"0s":void 0},children:h&&i})})});hf.displayName=pf;function vf(e,t){return`${e}-trigger-${t}`}function gf(e,t){return`${e}-content-${t}`}var pg=uf,yf=df,wf=mf,xf=hf;const Nf=pg,Hs=p.forwardRef(({className:e,...t},n)=>y.jsxDEV(yf,{ref:n,className:ne("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",e),...t},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/ui/tabs.tsx",lineNumber:12,columnNumber:3},void 0));Hs.displayName=yf.displayName;const zr=p.forwardRef(({className:e,...t},n)=>y.jsxDEV(wf,{ref:n,className:ne("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",e),...t},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/ui/tabs.tsx",lineNumber:27,columnNumber:3},void 0));zr.displayName=wf.displayName;const Ar=p.forwardRef(({className:e,...t},n)=>y.jsxDEV(xf,{ref:n,className:ne("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",e),...t},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/ui/tabs.tsx",lineNumber:42,columnNumber:3},void 0));Ar.displayName=xf.displayName;/**
 * @license lucide-react v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),kf=(...e)=>e.filter((t,n,r)=>!!t&&r.indexOf(t)===n).join(" ");/**
 * @license lucide-react v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var vg={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=p.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:i,iconNode:l,...s},a)=>p.createElement("svg",{ref:a,...vg,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:kf("lucide",o),...s},[...l.map(([u,f])=>p.createElement(u,f)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ue=(e,t)=>{const n=p.forwardRef(({className:r,...o},i)=>p.createElement(gg,{ref:i,iconNode:t,className:kf(`lucide-${hg(e)}`,r),...o}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg=Ue("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=Ue("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg=Ue("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng=Ue("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kg=Ue("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=Ue("Minimize2",[["polyline",{points:"4 14 10 14 10 20",key:"11kfnr"}],["polyline",{points:"20 10 14 10 14 4",key:"rlmsce"}],["line",{x1:"14",x2:"21",y1:"10",y2:"3",key:"o5lafz"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg=Ue("Share",[["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["polyline",{points:"16 6 12 2 8 6",key:"m901s6"}],["line",{x1:"12",x2:"12",y1:"2",y2:"15",key:"1p0rca"}]]);/**
 * @license lucide-react v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ef=Ue("Shirt",[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",key:"1wgbhj"}]]);/**
 * @license lucide-react v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=Ue("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=Ue("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg=Ue("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=Ue("WandSparkles",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ui=Ue("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function Pg(e,t=globalThis==null?void 0:globalThis.document){const n=$t(e);p.useEffect(()=>{const r=o=>{o.key==="Escape"&&n(o)};return t.addEventListener("keydown",r,{capture:!0}),()=>t.removeEventListener("keydown",r,{capture:!0})},[n,t])}var _g="DismissableLayer",Gs="dismissableLayer.update",Rg="dismissableLayer.pointerDownOutside",jg="dismissableLayer.focusOutside",Sf,bf=p.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Cf=p.forwardRef((e,t)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:o,onFocusOutside:i,onInteractOutside:l,onDismiss:s,...a}=e,u=p.useContext(bf),[f,m]=p.useState(null),h=(f==null?void 0:f.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,x]=p.useState({}),w=ot(t,b=>m(b)),g=Array.from(u.layers),[k]=[...u.layersWithOutsidePointerEventsDisabled].slice(-1),d=g.indexOf(k),c=f?g.indexOf(f):-1,v=u.layersWithOutsidePointerEventsDisabled.size>0,N=c>=d,E=Ug(b=>{const C=b.target,L=[...u.branches].some(I=>I.contains(C));!N||L||(o==null||o(b),l==null||l(b),b.defaultPrevented||s==null||s())},h),D=Mg(b=>{const C=b.target;[...u.branches].some(I=>I.contains(C))||(i==null||i(b),l==null||l(b),b.defaultPrevented||s==null||s())},h);return Pg(b=>{c===u.layers.size-1&&(r==null||r(b),!b.defaultPrevented&&s&&(b.preventDefault(),s()))},h),p.useEffect(()=>{if(f)return n&&(u.layersWithOutsidePointerEventsDisabled.size===0&&(Sf=h.body.style.pointerEvents,h.body.style.pointerEvents="none"),u.layersWithOutsidePointerEventsDisabled.add(f)),u.layers.add(f),Df(),()=>{n&&u.layersWithOutsidePointerEventsDisabled.size===1&&(h.body.style.pointerEvents=Sf)}},[f,h,n,u]),p.useEffect(()=>()=>{f&&(u.layers.delete(f),u.layersWithOutsidePointerEventsDisabled.delete(f),Df())},[f,u]),p.useEffect(()=>{const b=()=>x({});return document.addEventListener(Gs,b),()=>document.removeEventListener(Gs,b)},[]),R.jsx(ge.div,{...a,ref:w,style:{pointerEvents:v?N?"auto":"none":void 0,...e.style},onFocusCapture:fe(e.onFocusCapture,D.onFocusCapture),onBlurCapture:fe(e.onBlurCapture,D.onBlurCapture),onPointerDownCapture:fe(e.onPointerDownCapture,E.onPointerDownCapture)})});Cf.displayName=_g;var Ig="DismissableLayerBranch",Og=p.forwardRef((e,t)=>{const n=p.useContext(bf),r=p.useRef(null),o=ot(t,r);return p.useEffect(()=>{const i=r.current;if(i)return n.branches.add(i),()=>{n.branches.delete(i)}},[n.branches]),R.jsx(ge.div,{...e,ref:o})});Og.displayName=Ig;function Ug(e,t=globalThis==null?void 0:globalThis.document){const n=$t(e),r=p.useRef(!1),o=p.useRef(()=>{});return p.useEffect(()=>{const i=s=>{if(s.target&&!r.current){let a=function(){Tf(Rg,n,u,{discrete:!0})};const u={originalEvent:s};s.pointerType==="touch"?(t.removeEventListener("click",o.current),o.current=a,t.addEventListener("click",o.current,{once:!0})):a()}else t.removeEventListener("click",o.current);r.current=!1},l=window.setTimeout(()=>{t.addEventListener("pointerdown",i)},0);return()=>{window.clearTimeout(l),t.removeEventListener("pointerdown",i),t.removeEventListener("click",o.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function Mg(e,t=globalThis==null?void 0:globalThis.document){const n=$t(e),r=p.useRef(!1);return p.useEffect(()=>{const o=i=>{i.target&&!r.current&&Tf(jg,n,{originalEvent:i},{discrete:!1})};return t.addEventListener("focusin",o),()=>t.removeEventListener("focusin",o)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function Df(){const e=new CustomEvent(Gs);document.dispatchEvent(e)}function Tf(e,t,n,{discrete:r}){const o=n.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?Fv(o,i):o.dispatchEvent(i)}var Qs="focusScope.autoFocusOnMount",Ks="focusScope.autoFocusOnUnmount",Pf={bubbles:!1,cancelable:!0},Lg="FocusScope",_f=p.forwardRef((e,t)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:i,...l}=e,[s,a]=p.useState(null),u=$t(o),f=$t(i),m=p.useRef(null),h=ot(t,g=>a(g)),x=p.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;p.useEffect(()=>{if(r){let g=function(v){if(x.paused||!s)return;const N=v.target;s.contains(N)?m.current=N:Wt(m.current,{select:!0})},k=function(v){if(x.paused||!s)return;const N=v.relatedTarget;N!==null&&(s.contains(N)||Wt(m.current,{select:!0}))},d=function(v){if(document.activeElement===document.body)for(const E of v)E.removedNodes.length>0&&Wt(s)};document.addEventListener("focusin",g),document.addEventListener("focusout",k);const c=new MutationObserver(d);return s&&c.observe(s,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",g),document.removeEventListener("focusout",k),c.disconnect()}}},[r,s,x.paused]),p.useEffect(()=>{if(s){If.add(x);const g=document.activeElement;if(!s.contains(g)){const d=new CustomEvent(Qs,Pf);s.addEventListener(Qs,u),s.dispatchEvent(d),d.defaultPrevented||(zg(Wg(Rf(s)),{select:!0}),document.activeElement===g&&Wt(s))}return()=>{s.removeEventListener(Qs,u),setTimeout(()=>{const d=new CustomEvent(Ks,Pf);s.addEventListener(Ks,f),s.dispatchEvent(d),d.defaultPrevented||Wt(g??document.body,{select:!0}),s.removeEventListener(Ks,f),If.remove(x)},0)}}},[s,u,f,x]);const w=p.useCallback(g=>{if(!n&&!r||x.paused)return;const k=g.key==="Tab"&&!g.altKey&&!g.ctrlKey&&!g.metaKey,d=document.activeElement;if(k&&d){const c=g.currentTarget,[v,N]=Ag(c);v&&N?!g.shiftKey&&d===N?(g.preventDefault(),n&&Wt(v,{select:!0})):g.shiftKey&&d===v&&(g.preventDefault(),n&&Wt(N,{select:!0})):d===c&&g.preventDefault()}},[n,r,x.paused]);return R.jsx(ge.div,{tabIndex:-1,...l,ref:h,onKeyDown:w})});_f.displayName=Lg;function zg(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(Wt(r,{select:t}),document.activeElement!==n)return}function Ag(e){const t=Rf(e),n=jf(t,e),r=jf(t.reverse(),e);return[n,r]}function Rf(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const o=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||o?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function jf(e,t){for(const n of e)if(!Vg(n,{upTo:t}))return n}function Vg(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function Fg(e){return e instanceof HTMLInputElement&&"select"in e}function Wt(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&Fg(e)&&t&&e.select()}}var If=$g();function $g(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=Of(e,t),e.unshift(t)},remove(t){var n;e=Of(e,t),(n=e[0])==null||n.resume()}}}function Of(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function Wg(e){return e.filter(t=>t.tagName!=="A")}var Bg="Portal",Uf=p.forwardRef((e,t)=>{var s;const{container:n,...r}=e,[o,i]=p.useState(!1);li(()=>i(!0),[]);const l=n||o&&((s=globalThis==null?void 0:globalThis.document)==null?void 0:s.body);return l?Qh.createPortal(R.jsx(ge.div,{...r,ref:t}),l):null});Uf.displayName=Bg;var Ys=0;function Hg(){p.useEffect(()=>{const e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??Mf()),document.body.insertAdjacentElement("beforeend",e[1]??Mf()),Ys++,()=>{Ys===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(t=>t.remove()),Ys--}},[])}function Mf(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var it=function(){return it=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},it.apply(this,arguments)};function Lf(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function Gg(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}typeof SuppressedError=="function"&&SuppressedError;var ci="right-scroll-bar-position",di="width-before-scroll-bar",Qg="with-scroll-bars-hidden",Kg="--removed-body-scroll-bar-size";function Xs(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function Yg(e,t){var n=p.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var o=n.value;o!==r&&(n.value=r,n.callback(r,o))}}}})[0];return n.callback=t,n.facade}var Xg=typeof window<"u"?p.useLayoutEffect:p.useEffect,zf=new WeakMap;function Zg(e,t){var n=Yg(null,function(r){return e.forEach(function(o){return Xs(o,r)})});return Xg(function(){var r=zf.get(n);if(r){var o=new Set(r),i=new Set(e),l=n.current;o.forEach(function(s){i.has(s)||Xs(s,null)}),i.forEach(function(s){o.has(s)||Xs(s,l)})}zf.set(n,e)},[e]),n}function Jg(e){return e}function qg(e,t){t===void 0&&(t=Jg);var n=[],r=!1,o={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(i){var l=t(i,r);return n.push(l),function(){n=n.filter(function(s){return s!==l})}},assignSyncMedium:function(i){for(r=!0;n.length;){var l=n;n=[],l.forEach(i)}n={push:function(s){return i(s)},filter:function(){return n}}},assignMedium:function(i){r=!0;var l=[];if(n.length){var s=n;n=[],s.forEach(i),l=n}var a=function(){var f=l;l=[],f.forEach(i)},u=function(){return Promise.resolve().then(a)};u(),n={push:function(f){l.push(f),u()},filter:function(f){return l=l.filter(f),n}}}};return o}function ey(e){e===void 0&&(e={});var t=qg(null);return t.options=it({async:!0,ssr:!1},e),t}var Af=function(e){var t=e.sideCar,n=Lf(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return p.createElement(r,it({},n))};Af.isSideCarExport=!0;function ty(e,t){return e.useMedium(t),Af}var Vf=ey(),Zs=function(){},fi=p.forwardRef(function(e,t){var n=p.useRef(null),r=p.useState({onScrollCapture:Zs,onWheelCapture:Zs,onTouchMoveCapture:Zs}),o=r[0],i=r[1],l=e.forwardProps,s=e.children,a=e.className,u=e.removeScrollBar,f=e.enabled,m=e.shards,h=e.sideCar,x=e.noIsolation,w=e.inert,g=e.allowPinchZoom,k=e.as,d=k===void 0?"div":k,c=e.gapMode,v=Lf(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),N=h,E=Zg([n,t]),D=it(it({},v),o);return p.createElement(p.Fragment,null,f&&p.createElement(N,{sideCar:Vf,removeScrollBar:u,shards:m,noIsolation:x,inert:w,setCallbacks:i,allowPinchZoom:!!g,lockRef:n,gapMode:c}),l?p.cloneElement(p.Children.only(s),it(it({},D),{ref:E})):p.createElement(d,it({},D,{className:a,ref:E}),s))});fi.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},fi.classNames={fullWidth:di,zeroRight:ci};var ny=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function ry(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=ny();return t&&e.setAttribute("nonce",t),e}function oy(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function iy(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var ly=function(){var e=0,t=null;return{add:function(n){e==0&&(t=ry())&&(oy(t,n),iy(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},sy=function(){var e=ly();return function(t,n){p.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},Ff=function(){var e=sy(),t=function(n){var r=n.styles,o=n.dynamic;return e(r,o),null};return t},ay={left:0,top:0,right:0,gap:0},Js=function(e){return parseInt(e||"",10)||0},uy=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],o=t[e==="padding"?"paddingRight":"marginRight"];return[Js(n),Js(r),Js(o)]},cy=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return ay;var t=uy(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},dy=Ff(),An="data-scroll-locked",fy=function(e,t,n,r){var o=e.left,i=e.top,l=e.right,s=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(Qg,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(s,"px ").concat(r,`;
  }
  body[`).concat(An,`] {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(o,`px;
    padding-top: `).concat(i,`px;
    padding-right: `).concat(l,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(s,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(ci,` {
    right: `).concat(s,"px ").concat(r,`;
  }
  
  .`).concat(di,` {
    margin-right: `).concat(s,"px ").concat(r,`;
  }
  
  .`).concat(ci," .").concat(ci,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(di," .").concat(di,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(An,`] {
    `).concat(Kg,": ").concat(s,`px;
  }
`)},$f=function(){var e=parseInt(document.body.getAttribute(An)||"0",10);return isFinite(e)?e:0},my=function(){p.useEffect(function(){return document.body.setAttribute(An,($f()+1).toString()),function(){var e=$f()-1;e<=0?document.body.removeAttribute(An):document.body.setAttribute(An,e.toString())}},[])},py=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=r===void 0?"margin":r;my();var i=p.useMemo(function(){return cy(o)},[o]);return p.createElement(dy,{styles:fy(i,!t,o,n?"":"!important")})},qs=!1;if(typeof window<"u")try{var mi=Object.defineProperty({},"passive",{get:function(){return qs=!0,!0}});window.addEventListener("test",mi,mi),window.removeEventListener("test",mi,mi)}catch{qs=!1}var Vn=qs?{passive:!1}:!1,hy=function(e){return e.tagName==="TEXTAREA"},Wf=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!hy(e)&&n[t]==="visible")},vy=function(e){return Wf(e,"overflowY")},gy=function(e){return Wf(e,"overflowX")},Bf=function(e,t){var n=t.ownerDocument,r=t;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var o=Hf(e,r);if(o){var i=Gf(e,r),l=i[1],s=i[2];if(l>s)return!0}r=r.parentNode}while(r&&r!==n.body);return!1},yy=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},wy=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},Hf=function(e,t){return e==="v"?vy(t):gy(t)},Gf=function(e,t){return e==="v"?yy(t):wy(t)},xy=function(e,t){return e==="h"&&t==="rtl"?-1:1},Ny=function(e,t,n,r,o){var i=xy(e,window.getComputedStyle(t).direction),l=i*r,s=n.target,a=t.contains(s),u=!1,f=l>0,m=0,h=0;do{var x=Gf(e,s),w=x[0],g=x[1],k=x[2],d=g-k-i*w;(w||d)&&Hf(e,s)&&(m+=d,h+=w),s instanceof ShadowRoot?s=s.host:s=s.parentNode}while(!a&&s!==document.body||a&&(t.contains(s)||t===s));return(f&&(Math.abs(m)<1||!o)||!f&&(Math.abs(h)<1||!o))&&(u=!0),u},pi=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},Qf=function(e){return[e.deltaX,e.deltaY]},Kf=function(e){return e&&"current"in e?e.current:e},ky=function(e,t){return e[0]===t[0]&&e[1]===t[1]},Ey=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},Sy=0,Fn=[];function by(e){var t=p.useRef([]),n=p.useRef([0,0]),r=p.useRef(),o=p.useState(Sy++)[0],i=p.useState(Ff)[0],l=p.useRef(e);p.useEffect(function(){l.current=e},[e]),p.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var g=Gg([e.lockRef.current],(e.shards||[]).map(Kf),!0).filter(Boolean);return g.forEach(function(k){return k.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),g.forEach(function(k){return k.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var s=p.useCallback(function(g,k){if("touches"in g&&g.touches.length===2||g.type==="wheel"&&g.ctrlKey)return!l.current.allowPinchZoom;var d=pi(g),c=n.current,v="deltaX"in g?g.deltaX:c[0]-d[0],N="deltaY"in g?g.deltaY:c[1]-d[1],E,D=g.target,b=Math.abs(v)>Math.abs(N)?"h":"v";if("touches"in g&&b==="h"&&D.type==="range")return!1;var C=Bf(b,D);if(!C)return!0;if(C?E=b:(E=b==="v"?"h":"v",C=Bf(b,D)),!C)return!1;if(!r.current&&"changedTouches"in g&&(v||N)&&(r.current=E),!E)return!0;var L=r.current||E;return Ny(L,k,g,L==="h"?v:N,!0)},[]),a=p.useCallback(function(g){var k=g;if(!(!Fn.length||Fn[Fn.length-1]!==i)){var d="deltaY"in k?Qf(k):pi(k),c=t.current.filter(function(E){return E.name===k.type&&(E.target===k.target||k.target===E.shadowParent)&&ky(E.delta,d)})[0];if(c&&c.should){k.cancelable&&k.preventDefault();return}if(!c){var v=(l.current.shards||[]).map(Kf).filter(Boolean).filter(function(E){return E.contains(k.target)}),N=v.length>0?s(k,v[0]):!l.current.noIsolation;N&&k.cancelable&&k.preventDefault()}}},[]),u=p.useCallback(function(g,k,d,c){var v={name:g,delta:k,target:d,should:c,shadowParent:Cy(d)};t.current.push(v),setTimeout(function(){t.current=t.current.filter(function(N){return N!==v})},1)},[]),f=p.useCallback(function(g){n.current=pi(g),r.current=void 0},[]),m=p.useCallback(function(g){u(g.type,Qf(g),g.target,s(g,e.lockRef.current))},[]),h=p.useCallback(function(g){u(g.type,pi(g),g.target,s(g,e.lockRef.current))},[]);p.useEffect(function(){return Fn.push(i),e.setCallbacks({onScrollCapture:m,onWheelCapture:m,onTouchMoveCapture:h}),document.addEventListener("wheel",a,Vn),document.addEventListener("touchmove",a,Vn),document.addEventListener("touchstart",f,Vn),function(){Fn=Fn.filter(function(g){return g!==i}),document.removeEventListener("wheel",a,Vn),document.removeEventListener("touchmove",a,Vn),document.removeEventListener("touchstart",f,Vn)}},[]);var x=e.removeScrollBar,w=e.inert;return p.createElement(p.Fragment,null,w?p.createElement(i,{styles:Ey(o)}):null,x?p.createElement(py,{gapMode:e.gapMode}):null)}function Cy(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const Dy=ty(Vf,by);var Yf=p.forwardRef(function(e,t){return p.createElement(fi,it({},e,{ref:t,sideCar:Dy}))});Yf.classNames=fi.classNames;var Ty=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},$n=new WeakMap,hi=new WeakMap,vi={},ea=0,Xf=function(e){return e&&(e.host||Xf(e.parentNode))},Py=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=Xf(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},_y=function(e,t,n,r){var o=Py(t,Array.isArray(e)?e:[e]);vi[n]||(vi[n]=new WeakMap);var i=vi[n],l=[],s=new Set,a=new Set(o),u=function(m){!m||s.has(m)||(s.add(m),u(m.parentNode))};o.forEach(u);var f=function(m){!m||a.has(m)||Array.prototype.forEach.call(m.children,function(h){if(s.has(h))f(h);else try{var x=h.getAttribute(r),w=x!==null&&x!=="false",g=($n.get(h)||0)+1,k=(i.get(h)||0)+1;$n.set(h,g),i.set(h,k),l.push(h),g===1&&w&&hi.set(h,!0),k===1&&h.setAttribute(n,"true"),w||h.setAttribute(r,"true")}catch(d){console.error("aria-hidden: cannot operate on ",h,d)}})};return f(t),s.clear(),ea++,function(){l.forEach(function(m){var h=$n.get(m)-1,x=i.get(m)-1;$n.set(m,h),i.set(m,x),h||(hi.has(m)||m.removeAttribute(r),hi.delete(m)),x||m.removeAttribute(n)}),ea--,ea||($n=new WeakMap,$n=new WeakMap,hi=new WeakMap,vi={})}},Ry=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=Ty(e);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),_y(r,o,n,"aria-hidden")):function(){return null}},ta="Dialog",[Zf,o0]=ii(ta),[jy,Ze]=Zf(ta),Jf=e=>{const{__scopeDialog:t,children:n,open:r,defaultOpen:o,onOpenChange:i,modal:l=!0}=e,s=p.useRef(null),a=p.useRef(null),[u=!1,f]=Vs({prop:r,defaultProp:o,onChange:i});return R.jsx(jy,{scope:t,triggerRef:s,contentRef:a,contentId:Mr(),titleId:Mr(),descriptionId:Mr(),open:u,onOpenChange:f,onOpenToggle:p.useCallback(()=>f(m=>!m),[f]),modal:l,children:n})};Jf.displayName=ta;var qf="DialogTrigger",Iy=p.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=Ze(qf,n),i=ot(t,o.triggerRef);return R.jsx(ge.button,{type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":oa(o.open),...r,ref:i,onClick:fe(e.onClick,o.onOpenToggle)})});Iy.displayName=qf;var na="DialogPortal",[Oy,em]=Zf(na,{forceMount:void 0}),tm=e=>{const{__scopeDialog:t,forceMount:n,children:r,container:o}=e,i=Ze(na,t);return R.jsx(Oy,{scope:t,forceMount:n,children:p.Children.map(r,l=>R.jsx(Lr,{present:n||i.open,children:R.jsx(Uf,{asChild:!0,container:o,children:l})}))})};tm.displayName=na;var gi="DialogOverlay",nm=p.forwardRef((e,t)=>{const n=em(gi,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,i=Ze(gi,e.__scopeDialog);return i.modal?R.jsx(Lr,{present:r||i.open,children:R.jsx(My,{...o,ref:t})}):null});nm.displayName=gi;var Uy=Ir("DialogOverlay.RemoveScroll"),My=p.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=Ze(gi,n);return R.jsx(Yf,{as:Uy,allowPinchZoom:!0,shards:[o.contentRef],children:R.jsx(ge.div,{"data-state":oa(o.open),...r,ref:t,style:{pointerEvents:"auto",...r.style}})})}),sn="DialogContent",rm=p.forwardRef((e,t)=>{const n=em(sn,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,i=Ze(sn,e.__scopeDialog);return R.jsx(Lr,{present:r||i.open,children:i.modal?R.jsx(Ly,{...o,ref:t}):R.jsx(zy,{...o,ref:t})})});rm.displayName=sn;var Ly=p.forwardRef((e,t)=>{const n=Ze(sn,e.__scopeDialog),r=p.useRef(null),o=ot(t,n.contentRef,r);return p.useEffect(()=>{const i=r.current;if(i)return Ry(i)},[]),R.jsx(om,{...e,ref:o,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:fe(e.onCloseAutoFocus,i=>{var l;i.preventDefault(),(l=n.triggerRef.current)==null||l.focus()}),onPointerDownOutside:fe(e.onPointerDownOutside,i=>{const l=i.detail.originalEvent,s=l.button===0&&l.ctrlKey===!0;(l.button===2||s)&&i.preventDefault()}),onFocusOutside:fe(e.onFocusOutside,i=>i.preventDefault())})}),zy=p.forwardRef((e,t)=>{const n=Ze(sn,e.__scopeDialog),r=p.useRef(!1),o=p.useRef(!1);return R.jsx(om,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:i=>{var l,s;(l=e.onCloseAutoFocus)==null||l.call(e,i),i.defaultPrevented||(r.current||(s=n.triggerRef.current)==null||s.focus(),i.preventDefault()),r.current=!1,o.current=!1},onInteractOutside:i=>{var a,u;(a=e.onInteractOutside)==null||a.call(e,i),i.defaultPrevented||(r.current=!0,i.detail.originalEvent.type==="pointerdown"&&(o.current=!0));const l=i.target;((u=n.triggerRef.current)==null?void 0:u.contains(l))&&i.preventDefault(),i.detail.originalEvent.type==="focusin"&&o.current&&i.preventDefault()}})}),om=p.forwardRef((e,t)=>{const{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:o,onCloseAutoFocus:i,...l}=e,s=Ze(sn,n),a=p.useRef(null),u=ot(t,a);return Hg(),R.jsxs(R.Fragment,{children:[R.jsx(_f,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:o,onUnmountAutoFocus:i,children:R.jsx(Cf,{role:"dialog",id:s.contentId,"aria-describedby":s.descriptionId,"aria-labelledby":s.titleId,"data-state":oa(s.open),...l,ref:u,onDismiss:()=>s.onOpenChange(!1)})}),R.jsxs(R.Fragment,{children:[R.jsx(Ay,{titleId:s.titleId}),R.jsx(Fy,{contentRef:a,descriptionId:s.descriptionId})]})]})}),ra="DialogTitle",im=p.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=Ze(ra,n);return R.jsx(ge.h2,{id:o.titleId,...r,ref:t})});im.displayName=ra;var lm="DialogDescription",sm=p.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=Ze(lm,n);return R.jsx(ge.p,{id:o.descriptionId,...r,ref:t})});sm.displayName=lm;var am="DialogClose",um=p.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=Ze(am,n);return R.jsx(ge.button,{type:"button",...r,ref:t,onClick:fe(e.onClick,()=>o.onOpenChange(!1))})});um.displayName=am;function oa(e){return e?"open":"closed"}var cm="DialogTitleWarning",[i0,dm]=Bv(cm,{contentName:sn,titleName:ra,docsSlug:"dialog"}),Ay=({titleId:e})=>{const t=dm(cm),n=`\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;return p.useEffect(()=>{e&&(document.getElementById(e)||console.error(n))},[n,e]),null},Vy="DialogDescriptionWarning",Fy=({contentRef:e,descriptionId:t})=>{const r=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${dm(Vy).contentName}}.`;return p.useEffect(()=>{var i;const o=(i=e.current)==null?void 0:i.getAttribute("aria-describedby");t&&o&&(document.getElementById(t)||console.warn(r))},[r,e,t]),null},$y=Jf,Wy=tm,fm=nm,mm=rm,pm=im,hm=sm,By=um;const vm=$y,Hy=Wy,gm=p.forwardRef(({className:e,...t},n)=>y.jsxDEV(fm,{ref:n,className:ne("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...t},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/ui/dialog.tsx",lineNumber:21,columnNumber:3},void 0));gm.displayName=fm.displayName;const ia=p.forwardRef(({className:e,children:t,...n},r)=>y.jsxDEV(Hy,{children:[y.jsxDEV(gm,{},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/ui/dialog.tsx",lineNumber:37,columnNumber:5},void 0),y.jsxDEV(mm,{ref:r,className:ne("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",e),...n,children:[t,y.jsxDEV(By,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[y.jsxDEV(ui,{className:"h-4 w-4"},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/ui/dialog.tsx",lineNumber:48,columnNumber:9},void 0),y.jsxDEV("span",{className:"sr-only",children:"Close"},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/ui/dialog.tsx",lineNumber:49,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/ui/dialog.tsx",lineNumber:47,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/ui/dialog.tsx",lineNumber:38,columnNumber:5},void 0)]},void 0,!0,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/ui/dialog.tsx",lineNumber:36,columnNumber:3},void 0));ia.displayName=mm.displayName;const ym=({className:e,...t})=>y.jsxDEV("div",{className:ne("flex flex-col space-y-1.5 text-center sm:text-left",e),...t},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/ui/dialog.tsx",lineNumber:60,columnNumber:3},void 0);ym.displayName="DialogHeader";const wm=p.forwardRef(({className:e,...t},n)=>y.jsxDEV(pm,{ref:n,className:ne("text-lg font-semibold leading-none tracking-tight",e),...t},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/ui/dialog.tsx",lineNumber:88,columnNumber:3},void 0));wm.displayName=pm.displayName;const Gy=p.forwardRef(({className:e,...t},n)=>y.jsxDEV(hm,{ref:n,className:ne("text-sm text-muted-foreground",e),...t},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/ui/dialog.tsx",lineNumber:103,columnNumber:3},void 0));Gy.displayName=hm.displayName;const Qy=1,Ky=1e6;let la=0;function Yy(){return la=(la+1)%Number.MAX_SAFE_INTEGER,la.toString()}const sa=new Map,xm=e=>{if(sa.has(e))return;const t=setTimeout(()=>{sa.delete(e),Vr({type:"REMOVE_TOAST",toastId:e})},Ky);sa.set(e,t)},Xy=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,Qy)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(n=>n.id===t.toast.id?{...n,...t.toast}:n)};case"DISMISS_TOAST":{const{toastId:n}=t;return n?xm(n):e.toasts.forEach(r=>{xm(r.id)}),{...e,toasts:e.toasts.map(r=>r.id===n||n===void 0?{...r,open:!1}:r)}}case"REMOVE_TOAST":return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(n=>n.id!==t.toastId)}}},yi=[];let wi={toasts:[]};function Vr(e){wi=Xy(wi,e),yi.forEach(t=>{t(wi)})}function Zy({...e}){const t=Yy(),n=o=>Vr({type:"UPDATE_TOAST",toast:{...o,id:t}}),r=()=>Vr({type:"DISMISS_TOAST",toastId:t});return Vr({type:"ADD_TOAST",toast:{...e,id:t,open:!0,onOpenChange:o=>{o||r()}}}),{id:t,dismiss:r,update:n}}function Nm(){const[e,t]=p.useState(wi);return p.useEffect(()=>(yi.push(t),()=>{const n=yi.indexOf(t);n>-1&&yi.splice(n,1)}),[e]),{...e,toast:Zy,dismiss:n=>Vr({type:"DISMISS_TOAST",toastId:n})}}function Jy({isOpen:e,onClose:t,originalImage:n,resultImage:r}){const{toast:o}=Nm(),[i,l]=p.useState(null),s=async()=>{if(r)try{let f=r;if(r.startsWith("http")){const x=await(await fetch(r,{mode:"cors"})).blob();f=URL.createObjectURL(x)}const m=document.createElement("a");m.href=f,m.download="virtual-try-on-result.jpg",document.body.appendChild(m),m.click(),document.body.removeChild(m),f!==r&&setTimeout(()=>URL.revokeObjectURL(f),1e3)}catch(f){console.error("Download failed:",f),o({title:"Error",description:"Failed to download the result.",variant:"destructive"})}},a=async()=>{if(navigator.share)try{await navigator.share({title:"My Virtual Try-On Result",text:"Check out how this looks on me!",url:window.location.href})}catch(f){console.error("Error sharing:",f)}else navigator.clipboard.writeText(window.location.href),o({title:"Link copied!",description:"Share link has been copied to clipboard."})},u=()=>{window.open(window.location.href,"_blank"),o({title:"Redirecting to store",description:"Taking you to complete your purchase..."})};return y.jsxDEV(y.Fragment,{children:[y.jsxDEV(vm,{open:e,onOpenChange:t,children:y.jsxDEV(ia,{className:"max-w-4xl max-h-[90vh] overflow-y-auto",children:[y.jsxDEV(ym,{children:y.jsxDEV(wm,{className:"text-xl font-semibold",children:"Your Virtual Try-On Result"},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/try-on-result-modal.tsx",lineNumber:111,columnNumber:13},this)},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/try-on-result-modal.tsx",lineNumber:110,columnNumber:11},this),y.jsxDEV("div",{className:"grid md:grid-cols-2 gap-6 mt-4",children:[y.jsxDEV("div",{children:[y.jsxDEV("h3",{className:"text-sm font-medium text-gray-700 mb-3",children:"Original"},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/try-on-result-modal.tsx",lineNumber:119,columnNumber:15},this),y.jsxDEV("div",{className:"relative cursor-pointer",onClick:()=>l(n),children:y.jsxDEV("img",{src:n,alt:"Original photo",className:"object-cover rounded-lg mx-auto max-h-96"},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/try-on-result-modal.tsx",lineNumber:126,columnNumber:17},this)},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/try-on-result-modal.tsx",lineNumber:122,columnNumber:15},this)]},void 0,!0,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/try-on-result-modal.tsx",lineNumber:118,columnNumber:13},this),y.jsxDEV("div",{children:[y.jsxDEV("h3",{className:"text-sm font-medium text-gray-700 mb-3",children:"With Clothing Item"},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/try-on-result-modal.tsx",lineNumber:137,columnNumber:15},this),y.jsxDEV("div",{className:"relative cursor-pointer",onClick:()=>r&&l(r),children:r?y.jsxDEV("img",{src:r,alt:"Try-on result",className:"object-cover rounded-lg mx-auto max-h-96"},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/try-on-result-modal.tsx",lineNumber:145,columnNumber:19},this):y.jsxDEV("div",{className:"w-full h-80 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg shadow-md flex items-center justify-center",children:y.jsxDEV("div",{className:"text-center",children:[y.jsxDEV("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/try-on-result-modal.tsx",lineNumber:154,columnNumber:23},this),y.jsxDEV("p",{className:"text-gray-600 font-medium",children:"Processing your try-on..."},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/try-on-result-modal.tsx",lineNumber:155,columnNumber:23},this),y.jsxDEV("p",{className:"text-sm text-gray-500",children:"This may take a few moments"},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/try-on-result-modal.tsx",lineNumber:158,columnNumber:23},this)]},void 0,!0,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/try-on-result-modal.tsx",lineNumber:153,columnNumber:21},this)},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/try-on-result-modal.tsx",lineNumber:152,columnNumber:19},this)},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/try-on-result-modal.tsx",lineNumber:140,columnNumber:15},this)]},void 0,!0,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/try-on-result-modal.tsx",lineNumber:136,columnNumber:13},this)]},void 0,!0,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/try-on-result-modal.tsx",lineNumber:116,columnNumber:11},this),y.jsxDEV("div",{className:"flex flex-col sm:flex-row gap-3 mt-6",children:[y.jsxDEV(Xe,{onClick:s,disabled:!r,className:"flex-1 bg-primary hover:bg-primary/90",children:[y.jsxDEV(wg,{className:"h-4 w-4 mr-2"},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/try-on-result-modal.tsx",lineNumber:175,columnNumber:15},this),"Download Result"]},void 0,!0,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/try-on-result-modal.tsx",lineNumber:170,columnNumber:13},this),y.jsxDEV(Xe,{onClick:a,disabled:!r,variant:"outline",className:"flex-1",children:[y.jsxDEV(Sg,{className:"h-4 w-4 mr-2"},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/try-on-result-modal.tsx",lineNumber:184,columnNumber:15},this),"Share"]},void 0,!0,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/try-on-result-modal.tsx",lineNumber:178,columnNumber:13},this),y.jsxDEV(Xe,{onClick:u,disabled:!r,className:"flex-1 bg-green-600 hover:bg-green-700",children:[y.jsxDEV(Cg,{className:"h-4 w-4 mr-2"},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/try-on-result-modal.tsx",lineNumber:192,columnNumber:15},this),"Buy Now"]},void 0,!0,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/try-on-result-modal.tsx",lineNumber:187,columnNumber:13},this)]},void 0,!0,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/try-on-result-modal.tsx",lineNumber:169,columnNumber:11},this),y.jsxDEV("div",{className:"mt-4 p-3 bg-blue-50 rounded-lg",children:y.jsxDEV("p",{className:"text-sm text-blue-800",children:[y.jsxDEV("span",{className:"font-medium",children:"Tip:"},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/try-on-result-modal.tsx",lineNumber:199,columnNumber:15},this)," Save this result and share it with friends to get their opinion!"]},void 0,!0,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/try-on-result-modal.tsx",lineNumber:198,columnNumber:13},this)},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/try-on-result-modal.tsx",lineNumber:197,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/try-on-result-modal.tsx",lineNumber:109,columnNumber:9},this)},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/try-on-result-modal.tsx",lineNumber:108,columnNumber:7},this),y.jsxDEV(vm,{open:!!i,onOpenChange:()=>l(null),children:y.jsxDEV(ia,{className:"w-screen h-screen max-w-none p-0 flex items-center justify-center bg-black",children:[y.jsxDEV("button",{onClick:()=>l(null),className:"absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-2",children:"✕"},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/try-on-result-modal.tsx",lineNumber:208,columnNumber:11},this),i&&y.jsxDEV("img",{src:i,alt:"Preview",className:"max-w-full max-h-full object-contain"},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/try-on-result-modal.tsx",lineNumber:215,columnNumber:13},this)]},void 0,!0,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/try-on-result-modal.tsx",lineNumber:207,columnNumber:9},this)},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/try-on-result-modal.tsx",lineNumber:206,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/try-on-result-modal.tsx",lineNumber:107,columnNumber:5},this)}const qy={sm:12,md:24,lg:36};function e0({size:e="md",className:t}){return y.jsxDEV(kg,{className:ne("animate-spin",t),size:qy[e]},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/ui/spinner.tsx",lineNumber:17,columnNumber:5},this)}async function km(e){const n=await(await fetch(e)).blob();return new Promise((r,o)=>{const i=new FileReader;i.onloadend=()=>r(i.result),i.onerror=o,i.readAsDataURL(n)})}function t0({appId:e="demo",position:t="bottom-right",theme:n="default",isDemo:r=!1}){const[o,i]=p.useState(r),[l,s]=p.useState(""),[a,u]=p.useState(""),[f,m]=p.useState(""),[h,x]=p.useState(""),[w,g]=p.useState(!1),[k,d]=p.useState(""),[c,v]=p.useState(!1),[N,E]=p.useState(!1),[D,b]=p.useState(!1),{toast:C}=Nm(),[L,I]=p.useState([]),[J,z]=p.useState("upload"),ke=p.useRef(null),Me=p.useRef(null),gt={"bottom-right":"bottom-6 right-6","bottom-left":"bottom-6 left-6","top-right":"top-6 right-6","top-left":"top-6 left-6"},ae={default:"bg-white border-gray-200",dark:"bg-gray-900 border-gray-700 text-white",minimal:"bg-white border-gray-100 shadow-sm"},Bt=async P=>{b(!0);try{const F=await fetch(`${oi}/api/try-on`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(P)});if(!F.ok)throw new Error(`HTTP error! status: ${F.status}`);const re=await F.json();if(!re.success)throw(re==null?void 0:re.error)||(re==null?void 0:re.message);console.log({result:re}),d(re.resultImage),g(!0),localStorage.setItem("recentTryOn",JSON.stringify({recentTryOn:[{resultImage:re.resultImage,userImage:l,clothingImage:a},...L.slice(0,4)]})),C({title:"Try-on complete!",description:"Your virtual try-on result is ready."})}catch(F){console.error("Try-on failed:",F),C({title:"Try-on failed",description:"Something went wrong. Please try again.",variant:"destructive"})}finally{b(!1)}},T=()=>{localStorage.removeItem("recentTryOn"),I([])};p.useEffect(()=>{const P=localStorage.getItem("recentTryOn");if(P){const F=JSON.parse(P);I(F.recentTryOn)}},[]);const j=(P,F)=>{var Te;const re=(Te=P.target.files)==null?void 0:Te[0];re&&O(re,F)},O=(P,F)=>{if(!P.type.startsWith("image/")){C({title:"Invalid file type",description:"Please upload an image file.",variant:"destructive"});return}if(P.size>5*1024*1024){C({title:"File too large",description:"Please upload an image smaller than 5MB.",variant:"destructive"});return}const re=new FileReader;re.onload=Te=>{var xi;const aa=(xi=Te.target)==null?void 0:xi.result;F==="user"?s(aa):(u(aa),m(""))},re.readAsDataURL(P)},A=P=>{const F=P.getData("text/uri-list")||P.getData("text/plain")||P.getData("text/html");if(F&&(F.startsWith("http")||F.startsWith("https"))){const Te=[".jpg",".jpeg",".png",".gif",".webp",".bmp"].some(xi=>F.toLowerCase().includes(xi));if(F.includes("cloudinary.com")||F.includes("amazonaws.com")||F.includes("googleapis.com")||F.includes("imgur.com")||F.includes("unsplash.com")||Te)return F}return null},q=p.useCallback((P,F)=>{P.preventDefault(),P.stopPropagation(),F==="user"?v(!0):E(!0)},[]),Ht=p.useCallback((P,F)=>{P.preventDefault(),P.stopPropagation(),F==="user"?v(!1):E(!1)},[]),Je=p.useCallback((P,F)=>{P.preventDefault(),P.stopPropagation(),F==="user"?v(!1):E(!1);const re=Array.from(P.dataTransfer.files);if(re.length>0){const Te=re[0];O(Te,F)}else if(F==="clothing"){const Te=A(P.dataTransfer);Te&&(m(Te),u(""))}else if(F==="user"){const Te=A(P.dataTransfer);Te&&(x(Te),s(""))}},[C]),Fr=P=>{m(P),P&&u("")},yt=async()=>{if(!l&&!h){C({title:"Missing user photo",description:"Please upload your photo.",variant:"destructive"});return}if(!a&&!f){C({title:"Missing clothing item",description:"Please upload a clothing image.",variant:"destructive"});return}await Bt({userImage:l||await km(h),clothingImage:a||await km(f),appId:e})},Wn=()=>{s(""),x(""),ke.current&&(ke.current.value="")},Sm=()=>{u(""),m(""),Me.current&&(Me.current.value="")};return o?y.jsxDEV(y.Fragment,{children:[y.jsxDEV("div",{className:`fixed ${gt[t]} z-50 max-w-96 min-w-80 `,children:y.jsxDEV(Qd,{className:`${ae[n]} shadow-2xl border`,children:[y.jsxDEV(Kd,{className:"bg-primary text-white rounded-t-lg",children:y.jsxDEV("div",{className:"flex items-center justify-between",children:[y.jsxDEV("div",{className:"flex items-center space-x-2",children:[y.jsxDEV("div",{className:"w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center",children:y.jsxDEV(Ef,{className:"h-4 w-4"},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:372,columnNumber:19},this)},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:371,columnNumber:17},this),y.jsxDEV(Yd,{className:"text-lg",children:"Virtual Try-On"},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:374,columnNumber:17},this)]},void 0,!0,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:370,columnNumber:15},this),y.jsxDEV(Xe,{variant:"ghost",size:"sm",onClick:()=>i(!1),className:"text-white hover:bg-white/20 p-1 h-auto",children:y.jsxDEV(Eg,{className:"h-4 w-4"},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:382,columnNumber:17},this)},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:376,columnNumber:15},this)]},void 0,!0,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:369,columnNumber:13},this)},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:368,columnNumber:11},this),y.jsxDEV(Xd,{className:"p-4 space-y-4 max-h-[70vh] min-h-[460px] overflow-y-auto",children:y.jsxDEV(Nf,{defaultValue:"try-on",className:"w-full",children:[y.jsxDEV(Hs,{className:"grid w-full grid-cols-2 mb-4",children:[y.jsxDEV(zr,{value:"try-on",children:"Try On"},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:390,columnNumber:17},this),y.jsxDEV(zr,{value:"history",children:"History"},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:391,columnNumber:17},this)]},void 0,!0,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:389,columnNumber:15},this),y.jsxDEV(Ar,{value:"try-on",className:"mt-2 space-y-2",children:[y.jsxDEV("div",{children:[y.jsxDEV(As,{className:"text-sm font-medium",children:"Your Photo"},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:396,columnNumber:19},this),y.jsxDEV("div",{className:`mt-2 border-2 border-dashed rounded-lg p-4 text-center transition-colors cursor-pointer ${c?"border-primary bg-primary/20":l?"border-green-300 bg-green-50":"border-primary/30 bg-primary/5 hover:bg-primary/10"}`,onDragOver:P=>q(P,"user"),onDragLeave:P=>Ht(P,"user"),onDrop:P=>Je(P,"user"),onClick:()=>{var P;return(P=ke.current)==null?void 0:P.click()},children:[y.jsxDEV("input",{ref:ke,type:"file",accept:"image/*",onChange:P=>j(P,"user"),className:"hidden"},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:410,columnNumber:21},this),l||h?y.jsxDEV("div",{className:" relative group",children:[y.jsxDEV("img",{src:l||h,alt:"Your photo",className:"object-cover rounded-lg mx-auto max-h-80"},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:419,columnNumber:25},this),y.jsxDEV("div",{className:"absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100",children:y.jsxDEV(Xe,{type:"button",variant:"secondary",size:"icon",onClick:P=>{P.stopPropagation(),Wn()},className:"h-8 w-8 bg-transparent",children:y.jsxDEV(ui,{className:"h-3 w-3"},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:439,columnNumber:29},this)},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:428,columnNumber:27},this)},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:427,columnNumber:25},this)]},void 0,!0,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:418,columnNumber:23},this):y.jsxDEV("div",{className:"space-y-2",children:[y.jsxDEV(yg,{className:"h-8 w-8 text-primary mx-auto"},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:446,columnNumber:25},this),y.jsxDEV("p",{className:"text-sm text-primary font-medium",children:c?"Drop your photo here":"Upload or drag your photo"},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:447,columnNumber:25},this),y.jsxDEV("p",{className:"text-xs text-gray-500",children:"JPG, PNG up to 5MB"},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:452,columnNumber:25},this)]},void 0,!0,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:445,columnNumber:23},this)]},void 0,!0,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:397,columnNumber:19},this)]},void 0,!0,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:395,columnNumber:17},this),y.jsxDEV("div",{children:[y.jsxDEV(As,{className:"text-sm font-medium ",children:"Clothing Item"},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:462,columnNumber:19},this),y.jsxDEV(Nf,{defaultValue:J,value:J,onValueChange:P=>z(P),className:"mt-2",children:[y.jsxDEV(Hs,{className:"grid w-full grid-cols-2",children:[y.jsxDEV(zr,{value:"upload",className:"text-xs",children:[y.jsxDEV(Dg,{className:"h-3 w-3 mr-1"},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:471,columnNumber:25},this),"Upload"]},void 0,!0,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:470,columnNumber:23},this),y.jsxDEV(zr,{value:"url",className:"text-xs",children:[y.jsxDEV(Ng,{className:"h-3 w-3 mr-1"},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:475,columnNumber:25},this),"URL"]},void 0,!0,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:474,columnNumber:23},this)]},void 0,!0,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:469,columnNumber:21},this),y.jsxDEV(Ar,{value:"upload",className:"mt-2",children:y.jsxDEV("div",{className:`border-2 border-dashed rounded-lg p-4 text-center transition-colors cursor-pointer ${N?"border-secondary bg-secondary/20":a?"border-green-300 bg-green-50":"border-secondary/30 bg-secondary/5 hover:bg-secondary/10"}`,onDragOver:P=>q(P,"clothing"),onDragLeave:P=>Ht(P,"clothing"),onDrop:P=>Je(P,"clothing"),onClick:()=>{var P;return(P=Me.current)==null?void 0:P.click()},children:[y.jsxDEV("input",{ref:Me,type:"file",accept:"image/*",onChange:P=>j(P,"clothing"),className:"hidden"},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:494,columnNumber:25},this),a||f?y.jsxDEV("div",{className:" relative group",children:[y.jsxDEV("img",{src:a||f,alt:"Clothing item",className:"object-cover rounded-lg mx-auto max-h-80"},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:503,columnNumber:29},this),y.jsxDEV("div",{className:"absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100",children:y.jsxDEV(Xe,{type:"button",variant:"secondary",size:"icon",onClick:P=>{P.stopPropagation(),Sm()},className:"h-8 w-8 bg-transparent",children:y.jsxDEV(ui,{className:"h-4 w-4"},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:523,columnNumber:33},this)},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:512,columnNumber:31},this)},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:511,columnNumber:29},this)]},void 0,!0,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:502,columnNumber:27},this):y.jsxDEV("div",{className:"space-y-2",children:[y.jsxDEV(xg,{className:"h-8 w-8 text-secondary mx-auto"},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:530,columnNumber:29},this),y.jsxDEV("p",{className:"text-sm text-secondary font-medium",children:N?"Drop clothing image here":"Upload or drag clothing image"},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:531,columnNumber:29},this),y.jsxDEV("p",{className:"text-xs text-gray-500",children:"JPG, PNG up to 5MB"},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:536,columnNumber:29},this)]},void 0,!0,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:529,columnNumber:27},this)]},void 0,!0,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:481,columnNumber:23},this)},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:480,columnNumber:21},this),y.jsxDEV(Ar,{value:"url",className:"mt-2",children:y.jsxDEV("div",{className:ne("space-y-3"),onDragOver:P=>q(P,"clothing"),onDragLeave:P=>Ht(P,"clothing"),onDrop:P=>Je(P,"clothing"),children:[y.jsxDEV(Zd,{type:"url",placeholder:"https://example.com/image.jpg",value:f,onChange:P=>Fr(P.target.value),className:ne("text-sm",N&&"border-secondary bg-secondary/20")},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:551,columnNumber:25},this),f&&y.jsxDEV("div",{className:"relative group",children:[y.jsxDEV("img",{src:f,alt:"Clothing from URL",className:"object-cover rounded-lg mx-auto max-h-80",onError:()=>{C({title:"Invalid image URL",description:"Could not load image from the provided URL.",variant:"destructive"})}},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:564,columnNumber:29},this),y.jsxDEV("div",{className:"absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100",children:y.jsxDEV(Xe,{type:"button",variant:"secondary",size:"icon",onClick:Sm,className:"h-8 w-8 bg-transparent",children:y.jsxDEV(ui,{className:"h-3 w-3"},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:589,columnNumber:33},this)},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:581,columnNumber:31},this)},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:580,columnNumber:29},this)]},void 0,!0,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:563,columnNumber:27},this)]},void 0,!0,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:545,columnNumber:23},this)},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:544,columnNumber:21},this),!f&&!a&&y.jsxDEV("p",{className:"text-xs text-gray-500 text-center mt-2",children:"Or drag & drop a cloud image to auto-capture URL"},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:598,columnNumber:23},this)]},void 0,!0,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:463,columnNumber:19},this)]},void 0,!0,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:461,columnNumber:17},this),y.jsxDEV(Xe,{onClick:yt,disabled:D||!l&&!h||!a&&!f,className:"w-full bg-primary hover:bg-primary/90 my-4",children:D?y.jsxDEV("div",{className:"flex items-center space-x-2",children:[y.jsxDEV(e0,{size:"sm"},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:617,columnNumber:23},this),y.jsxDEV("span",{children:"Processing..."},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:618,columnNumber:23},this)]},void 0,!0,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:616,columnNumber:21},this):y.jsxDEV("div",{className:"flex items-center space-x-2",children:[y.jsxDEV(Tg,{className:"h-4 w-4"},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:622,columnNumber:23},this),y.jsxDEV("span",{children:"Try On Now"},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:623,columnNumber:23},this)]},void 0,!0,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:621,columnNumber:21},this)},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:606,columnNumber:17},this),y.jsxDEV("div",{className:"bg-blue-50 rounded-lg p-3 text-xs",children:y.jsxDEV("div",{className:"flex items-start space-x-2",children:[y.jsxDEV("div",{className:"w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",children:y.jsxDEV("span",{className:"text-blue-600 text-xs",children:"💡"},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:632,columnNumber:23},this)},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:631,columnNumber:21},this),y.jsxDEV("div",{className:"text-blue-700",children:[y.jsxDEV("p",{className:"font-medium mb-1",children:"For best results:"},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:635,columnNumber:23},this),y.jsxDEV("ul",{className:"space-y-1 text-blue-600",children:[y.jsxDEV("li",{children:"• Use a full-body photo"},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:637,columnNumber:25},this),y.jsxDEV("li",{children:"• Stand facing forward"},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:638,columnNumber:25},this),y.jsxDEV("li",{children:"• Plain background works best"},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:639,columnNumber:25},this),y.jsxDEV("li",{children:"• Drag cloud images to auto-capture URLs"},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:640,columnNumber:25},this)]},void 0,!0,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:636,columnNumber:23},this)]},void 0,!0,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:634,columnNumber:21},this)]},void 0,!0,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:630,columnNumber:19},this)},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:629,columnNumber:17},this)]},void 0,!0,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:393,columnNumber:15},this),y.jsxDEV(Ar,{value:"history",className:"mt-2",children:[y.jsxDEV("h2",{className:"text-lg font-semibold text-gray-700 mb-3",children:"Recent Try-Ons"},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:647,columnNumber:17},this),L.length>0?y.jsxDEV("div",{className:"space-y-4",children:[L.map((P,F)=>y.jsxDEV("div",{className:"bg-white rounded-lg shadow p-3 hover:shadow-md transition-shadow",children:y.jsxDEV("div",{className:"grid grid-cols-3 gap-2",children:[y.jsxDEV("img",{src:P.userImage,alt:"User",className:"h-20 w-full object-cover rounded"},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:658,columnNumber:27},this),y.jsxDEV("img",{src:P.clothingImage,alt:"User",className:"h-20 w-full object-cover rounded"},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:663,columnNumber:27},this),y.jsxDEV("img",{src:P.resultImage,alt:"Result",className:"h-20 w-full object-cover rounded"},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:669,columnNumber:27},this)]},void 0,!0,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:657,columnNumber:25},this)},F,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:653,columnNumber:23},this)),y.jsxDEV(Xe,{variant:"outline",size:"sm",onClick:T,children:"Clear All"},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:677,columnNumber:21},this)]},void 0,!0,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:651,columnNumber:19},this):y.jsxDEV("div",{className:"text-center py-8 text-gray-500",children:[y.jsxDEV(bg,{className:"h-10 w-10 mx-auto text-gray-300 mb-2"},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:683,columnNumber:21},this),y.jsxDEV("p",{children:"No try-on history yet"},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:684,columnNumber:21},this),y.jsxDEV("p",{className:"text-sm",children:"Your recent try-ons will appear here"},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:685,columnNumber:21},this)]},void 0,!0,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:682,columnNumber:19},this)]},void 0,!0,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:646,columnNumber:15},this)]},void 0,!0,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:388,columnNumber:13},this)},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:387,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:367,columnNumber:9},this)},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:364,columnNumber:7},this),y.jsxDEV(Jy,{isOpen:w,onClose:()=>g(!1),originalImage:l||h,resultImage:k},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:696,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:363,columnNumber:5},this):y.jsxDEV("div",{className:`fixed ${gt[t]} z-50`,children:y.jsxDEV(Xe,{onClick:()=>i(!0),className:"w-12 h-12 rounded-full bg-primary hover:bg-primary/90 shadow-2xl",children:y.jsxDEV(Ef,{className:"h-6 w-6"},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:356,columnNumber:11},this)},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:352,columnNumber:9},this)},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/virtual-try-on-widget.tsx",lineNumber:351,columnNumber:7},this)}const Em=({config:e})=>{p.useState(!1);const[t,n]=p.useState({userImage:"",clothingImage:"",clothingImageUrl:"",isProcessing:!1,sessionToken:null,tokenExpiry:null});console.log("config",e),p.useState(!1),p.useState("");const[r,o]=p.useState(""),[i,l]=p.useState(!1),s=p.useRef(null),a=p.useRef(!1),u=p.useRef(!0),f=p.useCallback(w=>{try{const g=JSON.parse(Buffer.from(w,"base64").toString());return JSON.parse(g.payload).exp*1e3}catch(g){return console.error("Failed to parse token expiry:",g),null}},[]),m=p.useCallback(async(w=!1)=>{if(!(a.current&&w)){w&&(a.current=!0);try{const g=window.location.hostname,k=await fetch(`${oi}/api/widget/init`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({appId:e.appId,domain:g})});if(k.ok){const d=await k.json(),c=f(d.sessionToken);console.log({tokenExpiry:c}),u.current&&(n(v=>({...v,sessionToken:d.sessionToken,tokenExpiry:c})),w||l(!0),d.config&&(e.position=d.config.position||e.position,e.theme=d.config.theme||e.theme),w&&r&&o(""))}else{const d=await k.json();u.current&&o(d.error||"Widget initialization failed")}}catch(g){console.error("Widget initialization error:",g),u.current&&o("Failed to initialize widget")}finally{w&&(a.current=!1)}}},[e,f,r]),h=p.useCallback(()=>{if(s.current&&clearInterval(s.current),!t.tokenExpiry)return;const w=Date.now(),g=t.tokenExpiry-w,k=Math.max(0,g-5*60*1e3);s.current=setTimeout(async()=>{u.current&&!a.current&&(console.log("Auto-refreshing widget token..."),await m(!0),u.current&&h())},k),console.log(`Token refresh scheduled in ${Math.round(k/1e3)} seconds`)},[t.tokenExpiry,m]);p.useEffect(()=>(m(),()=>{u.current=!1,s.current&&clearTimeout(s.current)}),[m]),p.useEffect(()=>(t.sessionToken&&t.tokenExpiry&&h(),()=>{s.current&&clearTimeout(s.current)}),[t.sessionToken,t.tokenExpiry,h]),p.useEffect(()=>{if(!i)return;setTimeout(()=>{const g=['img[src*="product"]','img[alt*="product"]',".product img",'[class*="product"] img'],k=document.querySelector(g.join(", "));k&&k.src&&n(d=>({...d,clothingImageUrl:k.src}))},1e3)},[i]);const x=p.useCallback(async(w,g)=>{const k=async c=>await fetch(w,{method:g.method||"GET",headers:{"Content-Type":"application/json"},body:{...g.body?JSON.parse(g.body):{},sessionToken:c}});if(t.sessionToken){const c=await k(t.sessionToken);if(c.status!==401)return c;console.log("Token expired, attempting refresh...")}await m(!0),await new Promise(c=>setTimeout(c,100));const d=t;if(d.sessionToken)return k(d.sessionToken);throw new Error("Failed to refresh authentication token")},[t.sessionToken,m,t]);return p.useCallback(async(w,g={})=>{if(t.sessionToken)try{await x(`${oi}/api/analytics`,{method:"POST",body:JSON.stringify({eventType:w,metadata:g})})}catch(k){console.error("Analytics tracking error:",k)}},[t.sessionToken,x]),y.jsxDEV(y.Fragment,{children:y.jsxDEV(t0,{appId:e.appId,position:"bottom-right",theme:"default",isDemo:window.location.origin===oi},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/widget-standalone.tsx",lineNumber:402,columnNumber:7},void 0)},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/widget-standalone.tsx",lineNumber:401,columnNumber:5},void 0)};return window.TryOnAI={init:e=>{const t={appId:e.appId||"",position:e.position||"bottom-right",theme:e.theme||"default"};if(!t.appId){console.error("TryOn AI Widget: App Id is required");return}const n=document.createElement("div");n.id="tryon-ai-widget",document.body.appendChild(n),Pd(n).render(y.jsxDEV(Em,{config:t},void 0,!1,{fileName:"/Users/sakin/code/mine/tryonai-chatbot/client/src/components/widget-standalone.tsx",lineNumber:481,columnNumber:17},void 0))}},Ni.VirtualTryOnStandaloneWidget=Em,Object.defineProperty(Ni,Symbol.toStringTag,{value:"Module"}),Ni}({});
