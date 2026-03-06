// main.js — Reveal.js initialization and custom behavior

Reveal.initialize({
  // Presentation dimensions
  width: 1280,
  height: 720,

  // Navigation
  controls: true,
  progress: true,
  slideNumber: true,
  hash: true,           // URL updates as you navigate
  history: true,

  // Transitions (update once Figma motion specs are ready)
  transition: 'slide',        // none | fade | slide | convex | concave | zoom
  transitionSpeed: 'default', // default | fast | slow
  backgroundTransition: 'fade',

  // Misc
  autoAnimateEasing: 'ease',
  autoAnimateDuration: 0.6,

  // Plugins
  plugins: [
    RevealMarkdown,
    RevealHighlight,
    RevealNotes,
    RevealZoom,
  ],
});

// ─── Keyboard shortcuts ───────────────────────────────────────────────────

Reveal.addKeyBinding({ keyCode: 70, key: 'F', description: 'Toggle fullscreen' }, () => {
  const el = document.documentElement;
  if (!document.fullscreenElement) {
    el.requestFullscreen?.();
  } else {
    document.exitFullscreen?.();
  }
});
