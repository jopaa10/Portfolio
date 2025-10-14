export function isLargeFont(thresholdPx = 28) {
  // Create a hidden temporary element
  const testEl = document.createElement('span');
  testEl.style.fontSize = '1rem';
  testEl.style.visibility = 'hidden';
  document.body.appendChild(testEl);

  const computedSize = parseFloat(getComputedStyle(testEl).fontSize);
  document.body.removeChild(testEl);

  return computedSize >= thresholdPx;
}

export function watchFontSize(callback, thresholdPx = 28) {
  const checkAndNotify = () => callback(isLargeFont(thresholdPx));

  // Run immediately
  checkAndNotify();

  // Watch for window resize
  window.addEventListener('resize', checkAndNotify);

  // Watch for zoom/DPI changes
  const zoomListener = window.matchMedia('(resolution: 2dppx)');
  zoomListener.addEventListener('change', checkAndNotify);

  // Cleanup
  return () => {
    window.removeEventListener('resize', checkAndNotify);
    zoomListener.removeEventListener('change', checkAndNotify);
  };
}
