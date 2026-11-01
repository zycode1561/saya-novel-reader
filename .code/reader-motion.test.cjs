// Exercise the shipped animation helpers with controlled completion and interruption.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const source = fs.readFileSync(path.join(__dirname, '../public/reader/reader.js'), 'utf8');
const helpers = source.slice(source.indexOf('\tlet readerPointerMotion = false;'), source.indexOf('\tfunction SlidingSelection('));
function setup({ pointer = true, reduced = false, supported = true } = {}) {
  const calls = [];
  const menu = { computed: { opacity: '1', transform: 'none', getPropertyValue: () => 'cubic-bezier(.23,1,.32,1)' } };
  if (supported) menu.animate = (frames, options) => {
    let finish, reject;
    const finished = new Promise((resolve, fail) => { finish = resolve; reject = fail; });
    const animation = { finished, cancelled: false, cancel() { this.cancelled = true; reject(new Error('cancelled')); } };
    calls.push({ frames, options, animation, finish });
    return animation;
  };
  const details = { open: true, querySelector: () => menu };
  const context = vm.createContext({ window: { matchMedia: () => ({ matches: reduced }) }, getComputedStyle: node => node.computed, WeakMap });
  vm.runInContext(helpers + `\nreaderPointerMotion = ${pointer};\nthis.api = { animateReaderSurface, closeShelfMenu, toggleShelfMenu };`, context);
  return { api: context.api, menu, details, calls };
}
async function flush() { await Promise.resolve(); await Promise.resolve(); }
(async () => {
  const idle = setup();
  idle.api.closeShelfMenu(idle.details);
  assert.equal(idle.calls[0].frames[0].opacity, '1', 'a settled menu must fade out from its visible opacity');
  assert.equal(idle.calls[0].options.duration, 120);
  idle.calls[0].finish(); await flush();
  assert.equal(idle.details.open, false);

  const interrupted = setup();
  interrupted.api.animateReaderSurface(interrupted.menu, true);
  interrupted.menu.computed.opacity = '.45';
  interrupted.menu.computed.transform = 'matrix(.985,0,0,.985,0,0)';
  interrupted.api.closeShelfMenu(interrupted.details);
  assert.equal(interrupted.calls[0].animation.cancelled, true);
  assert.equal(interrupted.calls[1].frames[0].opacity, '.45');
  let prevented = false;
  const summary = { parentElement: interrupted.details };
  interrupted.api.toggleShelfMenu({ target: { closest: () => summary }, currentTarget: interrupted.details, detail: 1, preventDefault() { prevented = true; } });
  assert.equal(prevented, true);
  assert.equal(interrupted.calls[1].animation.cancelled, true);
  interrupted.calls[1].finish(); await flush();
  assert.equal(interrupted.details.open, true, 'a stale closing completion must not close a reopened menu');
  assert.equal(interrupted.calls[2].frames[1].opacity, 1);

  for (const options of [{ pointer: false }, { reduced: true }, { supported: false }]) {
    const disabled = setup(options);
    disabled.api.closeShelfMenu(disabled.details);
    assert.equal(disabled.details.open, false, 'keyboard, reduced motion and unsupported browsers close immediately');
    assert.equal(disabled.calls.length, 0);
  }
  const keyboard = setup();
  let cancelled = false;
  keyboard.api.toggleShelfMenu({ target: { closest: () => ({ parentElement: keyboard.details }) }, currentTarget: keyboard.details, detail: 0, preventDefault() { cancelled = true; } });
  assert.equal(cancelled, false, 'keyboard activation keeps native details behavior');
  // Run the shipped collision code against a short shelf with room on either side.
  const positionStart = source.indexOf('\tfunction positionShelfMenu(');
  const positionCode = source.slice(positionStart, source.indexOf('\n//#endregion', positionStart));
  for (const triggerTop of [250, 424, 590]) {
    const menu = { style: {}, getBoundingClientRect() { return { width: 260, height: Math.min(266, Number.parseFloat(this.style.maxHeight) || 266) }; } };
    const trigger = { left: 137, right: 181, top: triggerTop, bottom: triggerTop + 44, width: 44 };
    const shelf = { clientHeight: 428, clientWidth: 346, getBoundingClientRect: () => ({ left: 22, top: 232 }), querySelector: () => ({ getBoundingClientRect: () => ({ bottom: 276 }) }) };
    const details = { open: true, closest: selector => selector === '.dnr-cloud-library' ? shelf : { querySelectorAll: () => [] }, querySelector: selector => selector === 'summary' ? { getBoundingClientRect: () => trigger } : menu, getBoundingClientRect: () => trigger };
    const context = vm.createContext({ getComputedStyle: () => ({ paddingRight: '0' }), animateReaderSurface() {}, readerClosingMenus: new WeakMap() });
    vm.runInContext(positionCode + '\nthis.positionShelfMenu = positionShelfMenu;', context);
    context.positionShelfMenu(details);
    const top = trigger.top + Number.parseFloat(menu.style.top), bottom = top + menu.getBoundingClientRect().height;
    assert.ok(bottom <= trigger.top || top >= trigger.bottom, 'menu must never cover the summary trigger');
    assert.ok(top >= 276 && bottom <= 652, 'menu must stay below the sticky search and inside the shelf');
  }
  console.log('PASS: visible exit, interruption, rapid reopen, keyboard, reduced motion, browser fallback and menu collision.');
})().catch(error => { console.error(error); process.exitCode = 1; });
