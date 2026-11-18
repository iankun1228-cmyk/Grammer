/* Shared presentation rules for the resource docks. Existing buttons and
   their event handlers stay in place when a scene is rendered again. */
(() => {
  const game = document.getElementById("game");
  const view = document.getElementById("view");
  // Include the 5px lower depth when applying the shared outside margin.
  const resourceBaseline = 834 - parseFloat(getComputedStyle(game).getPropertyValue("--ui-scene-edge")) - 5;
  const groups = [
    [".word-stage-one-modifiers", "说明资源", "wide-left"],
    [".word-stage-one-objects", "物品资源", "wide-right"],
    [".word-stage-four-resource-group-modifier", "说明资源", "compact-left"],
    [".word-stage-four-resource-group-object", "物品资源", "compact-right"],
    [".phrase-find-earned-actions", "动作资源", "wide-left"],
    [".phrase-find-earned-objects", "对象资源", "wide-right"],
    [".phrase-restore-resource-group:first-child", "动作资源", "wide-left"],
    [".phrase-restore-resource-group:last-child", "对象资源", "wide-right"],
    [".phrase-stage4-action-list", "动作资源", "compact-left"],
    [".phrase-stage4-object-list", "对象资源", "compact-right"],
    [".phrase-stage4-single-result-list", "结果资源", "single"],
    [".sentence-reference-resource-items", "动作结果资源", "wide-right"],
    [".sentence-care-asset-animal-list", "动物资源", "wide-left"],
    [".sentence-care-asset-result-list", "动作结果资源", "wide-right"],
    [".sentence-stage4-object-list", "物品资源", "compact-left"],
    [".sentence-stage4-result-list", "动作结果资源", "compact-right"],
    [".sentence-stage4-single-list", "资源栏", "single"]
  ];
  const cardSelector = [
    ".word-stage-one-resource", ".word-stage-four-resource-card",
    ".phrase-find-earned-resource", ".phrase-stage2-resource-card",
    ".phrase-stage4-resource", ".phrase-stage4-single-result-choice", ".sentence-reference-earned-item",
    ".sentence-care-asset-resource", ".sentence-stage4-resource"
  ].join(",");
  const positions = {
    "wide-left": [32, 416], "wide-right": [744, 416],
    "compact-left": [376, 194], "compact-right": [624, 194],
    single: [500, 194]
  };


  const taskFrames = [
    // First-stage audio frames share fixed scene coordinates in styles.css.
    // Only the second-stage task artwork follows the resource baseline.
    [".sentence-care-asset-task", "img:not(.sentence-care-task-label)", "white"]
  ];
  const frameEdges = new Map();

  function visibleFrameEnd(image, kind, knownEdge) {
    if (!image.complete || !image.naturalWidth) return null;
    if (knownEdge !== undefined) return knownEdge;
    const key = `${kind}:${image.currentSrc || image.src}`;
    if (frameEdges.has(key)) return frameEdges.get(key);
    // Sample the bottom border of the local artwork, excluding its shadow.
    const canvas = document.createElement("canvas");
    canvas.width = 1;
    canvas.height = image.naturalHeight;
    const context = canvas.getContext("2d", { willReadFrequently: true });
    context.drawImage(image, Math.floor(image.naturalWidth / 2), 0, 1,
      image.naturalHeight, 0, 0, 1, image.naturalHeight);
    const pixels = context.getImageData(0, 0, 1, image.naturalHeight).data;
    let end = image.naturalHeight;
    for (let y = image.naturalHeight - 1; y >= image.naturalHeight * .65; y--) {
      const [r, g, b, a] = pixels.subarray(y * 4, y * 4 + 4);
      const border = kind === "gold"
        ? r > 220 && g > 140 && g < 235 && b < 130
        : Math.min(r, g, b) > 240;
      if (border && a > 240) { end = y + 1; break; }
    }
    const ratio = end / image.naturalHeight;
    frameEdges.set(key, ratio);
    return ratio;
  }

  function alignBottomTasks() {
    const root = game.getBoundingClientRect();
    const scale = root.width / game.offsetWidth;
    for (const [selector, imageSelector, kind, knownEdge] of taskFrames) {
      const task = view.querySelector(selector);
      const image = task?.querySelector(imageSelector);
      if (!image) continue;
      const edge = visibleFrameEnd(image, kind, knownEdge);
      if (edge === null) continue;
      const boxHeight = image.offsetHeight;
      const boxWidth = image.offsetWidth;
      const contain = getComputedStyle(image).objectFit === "contain";
      const contentHeight = contain
        ? Math.min(boxWidth / image.naturalWidth, boxHeight / image.naturalHeight) * image.naturalHeight
        : boxHeight;
      const visibleOffset = (boxHeight - contentHeight) / 2 + edge * contentHeight;
      // Breathing motion pivots on the visible bottom, so it cannot shift
      // the baseline after initial alignment or during a scene re-render.
      image.style.transformOrigin = `50% ${visibleOffset}px`;
      const rect = image.getBoundingClientRect();
      const visibleBottom = rect.top + rect.height * visibleOffset / boxHeight;
      const shift = resourceBaseline - (visibleBottom - root.top) / scale;
      const top = parseFloat(getComputedStyle(task).top);
      task.style.top = `${top + shift}px`;
      task.style.bottom = "auto";
    }
  }

  function placePanel(panel, layout) {
    const [left, width] = positions[layout];
    const rootRect = game.getBoundingClientRect();
    const scale = rootRect.width / game.offsetWidth;
    const parent = panel.offsetParent;
    const parentRect = parent.getBoundingClientRect();
    const parentLeft = (parentRect.left - rootRect.left) / scale + parent.clientLeft;
    const parentTop = (parentRect.top - rootRect.top) / scale + parent.clientTop;
    panel.style.left = `${left - parentLeft}px`;
    // Keep the lower baseline fixed when the shared frame height changes.
    panel.style.top = `${resourceBaseline - panel.offsetHeight - parentTop}px`;
    panel.style.width = `${width}px`;
  }

  function updateResourcePanels() {
    const rows = [];
    for (const [selector, title, layout] of groups) {
      for (const panel of view.querySelectorAll(selector)) {
        const cards = [...panel.querySelectorAll(cardSelector)];
        // First-stage resources remain hidden until they have been earned.
        panel.classList.toggle("ui-resource-panel", cards.length > 0);
        if (!cards.length) continue;
        panel.dataset.resourceTitle = title;
        panel.dataset.resourceLayout = layout;
        panel.setAttribute("role", "group");
        panel.setAttribute("aria-label", title);
        let list = cards[0].parentElement;
        if (list === panel) {
          // A shared row keeps icons aligned while its actual content height
          // (including wrapped names) is centered inside the frame.
          list = document.createElement("div");
          list.className = "ui-resource-list";
          panel.append(list);
          for (const card of cards) list.append(card);
        } else {
          list.classList.add("ui-resource-list");
        }
        for (const card of cards) {
          card.classList.add("ui-resource-card");
          card.querySelector("img")?.classList.add("ui-resource-icon");
          const name = card.lastElementChild;
          if (name) {
            name.classList.add("ui-resource-name");
            const length = Array.from(name.textContent.trim()).length;
            name.dataset.nameSize = length > 8 ? "small" : length > 4 ? "compact" : "normal";
          }
        }
        rows.push({ panel, list, layout });
      }
    }
    // Paired frames keep the same height. Only pages with wrapped names need
    // the taller variant; a single-line row gets balanced, tighter padding.
    const density = rows.some(({ list }) => list.offsetHeight > 70) ? "wrapped" : "compact";
    for (const { panel, layout } of rows) {
      panel.dataset.resourceDensity = density;
      placePanel(panel, layout);
    }
    alignBottomTasks();
  }

  function fitGameToWindow() {
    game.style.zoom = String(Math.min(1, Math.max(1, window.innerWidth - 24) / 1194));
    updateResourcePanels();
  }
  // Scenes also re-render directly after selections and timed character moves.
  // Observe structural changes only: class/style updates here cannot recurse.
  new MutationObserver(updateResourcePanels).observe(view, { childList: true, subtree: true });
  view.addEventListener("load", (event) => {
    if (taskFrames.some(([selector, imageSelector]) =>
      event.target.matches?.(`${selector} ${imageSelector}`))) updateResourcePanels();
  }, true);
  window.addEventListener("resize", fitGameToWindow);
  fitGameToWindow();
})();
