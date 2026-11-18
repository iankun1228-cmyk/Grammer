(() => {
  const game = document.getElementById('game');
  const view = document.getElementById('view');
  const sceneEdge = parseFloat(getComputedStyle(game).getPropertyValue('--ui-scene-edge'));
  const toolbarSelectors = [
    '.word-stage-one-tools', '.word-stage-three-tools',
    '.word-stage-four-tools', '.phrase-reference-tools',
    '.phrase-stage4-tools', '.sentence-reference-tools', '.word-map-tools'
  ].join(',');
  const bannerSelectors = [
    '.word-stage-one-find-instruction', '.word-stage-two-instruction',
    '.stage-top-instruction', '.sentence-stage-instruction'
  ].join(',');
  function place(element, x, y) {
    const root = game.getBoundingClientRect();
    const scale = root.width / game.offsetWidth;
    const parent = element.offsetParent;
    if (!parent) return;
    const rect = parent.getBoundingClientRect();
    element.style.left = `${x - (rect.left - root.left) / scale - parent.clientLeft}px`;
    element.style.top = `${y - (rect.top - root.top) / scale - parent.clientTop}px`;
  }
  // Use the same outside margin as the resource frames, including their depth.
  function update() {
    for (const toolbar of view.querySelectorAll(toolbarSelectors)) {
      const controls = [...toolbar.querySelectorAll('button')];
      controls.forEach((button, index) => {
        button.classList.add('ui-top-control');
        // Frame faces are inset 3px: align visible outer edges to X=32/1160.
        place(button, [29, 981, 1077][index], sceneEdge);
      });
    }
    const back = view.querySelector('.word-map-back');
    if (back) {
      back.classList.add('ui-top-control');
      // Use the same source, including transparent padding, as every stage.
      const img = back.querySelector('img');
      const src = './assets/word-stage1/Group%20103.png';
      if (img.getAttribute('src') !== src) img.setAttribute('src', src);
      place(back, 29, sceneEdge);
    }
    for (const banner of view.querySelectorAll(bannerSelectors)) {
      banner.classList.add('ui-top-banner');
      place(banner, 147, sceneEdge);
    }
  }
  new MutationObserver(update).observe(view, {childList: true, subtree: true});
  window.addEventListener('resize', update);
  update();
})();
