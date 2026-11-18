/* Shared completion screen, using the supplied three celebration designs. */
function renderLevelCelebration(category) {
  const game = document.getElementById('game');
  game.classList.add('celebration-layout');
  if (view.querySelector(`[data-celebration="${category}"]`)) return;
  const label = { word: '助动词-的', phrase: '动宾短语', sentence: '被字句' }[category];
  const confetti = Array.from({length: 28}, (_, i) => `<i style="--x:${4 + (i * 37 % 92)}%;--delay:${(i % 8) * 0.12}s;--duration:${2.6 + (i % 5) * 0.18}s;--drift:${(i % 2 ? 1 : -1) * (20 + i % 60)}px;--color:${['#ffd33f','#ff9cc5','#8bcaf2','#a9df8b'][i % 4]};--spin:${i % 2 ? 280 : -240}deg"></i>`).join('');
  view.innerHTML = `<section class="celebration-screen" data-celebration="${category}" aria-label="${label}闯关成功">
    <img class="celebration-background" src="./assets/celebration/background.png" alt="">
    <div class="celebration-confetti" aria-hidden="true">${confetti}</div>
    <button class="celebration-tool celebration-back" type="button" aria-label="返回关卡选择"><img src="${WORD_STAGE_ONE_ASSETS.back}" alt=""></button>
    <button class="celebration-tool celebration-replay" type="button" aria-label="重新挑战本关"><img src="./assets/celebration/replay.png" alt=""></button>
    <img class="celebration-hero" src="./assets/celebration/success-${category}.png" alt="闯关成功！">
    <div class="celebration-sparkles" aria-hidden="true"><i></i><i></i><i></i></div>
    <button class="celebration-book" type="button" aria-label="查看${label}语法宝典"><span>${label}</span><span class="celebration-book-icon" aria-hidden="true"></span></button>
  </section>`;
  const screen = view.querySelector('.celebration-screen');
  const book = screen.querySelector('.celebration-book');
  screen.querySelector('.celebration-back').addEventListener('click', () => {
    state.homeMenuOpen = true;
    setStage('home');
  });
  screen.querySelector('.celebration-replay').addEventListener('click', () => {
    playSound('mapStart');
    state.category = category;
    if (category === 'word') restart();
    else if (category === 'phrase') startPhraseLevel();
    else startSentenceLevel();
  });
  book.addEventListener('click', () => {
    if (screen.querySelector('.stage-four-grammar-overlay')) return;
    playSound('click');
    const art = category === 'word' ? WORD_STAGE_FOUR_ASSETS.grammarBook : category === 'phrase' ? PHRASE_STAGE_THREE_ASSETS.scroll : SENTENCE_STAGE_THREE_ASSETS.scroll;
    screen.insertAdjacentHTML('beforeend', stageFourGrammarOverlayHtml(art, `${label}语法宝典`, category));
    const overlay = screen.querySelector('.stage-four-grammar-overlay');
    const controls = [...screen.children].filter(el => el !== overlay);
    controls.forEach(el => el.inert = true);
    const close = () => { overlay.remove(); controls.forEach(el => el.inert = false); book.focus(); };
    overlay.querySelectorAll('[data-stage-four-book-close]').forEach(button => button.addEventListener('click', close));
    overlay.addEventListener('keydown', event => {
      if (event.key === 'Escape') { event.stopPropagation(); close(); }
      if (event.key === 'Tab') { event.preventDefault(); overlay.querySelector('.stage-four-grammar-close').focus(); }
    });
    overlay.querySelector('.stage-four-grammar-close').focus();
  });
  playSound('reward');
  setFeedback(`${label}闯关成功！`);
  updateProgress();
}
