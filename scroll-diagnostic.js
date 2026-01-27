// SCROLL DIAGNOSTIC SCRIPT
// Run this in your mobile browser console to find scroll blockers
// Open DevTools on mobile: Chrome -> Menu -> More Tools -> Developer Tools

console.clear();
console.log('🔍 SCROLL DIAGNOSTIC STARTING...\n');

const results = {
  viewport: {
    width: window.innerWidth,
    height: window.innerHeight,
    isMobile: window.innerWidth < 768,
  },
  scrollability: {
    scrollHeight: document.documentElement.scrollHeight,
    clientHeight: document.documentElement.clientHeight,
    canScroll: document.documentElement.scrollHeight > document.documentElement.clientHeight,
  },
  htmlElement: {
    overflow: getComputedStyle(document.documentElement).overflow,
    overflowY: getComputedStyle(document.documentElement).overflowY,
    height: getComputedStyle(document.documentElement).height,
    touchAction: getComputedStyle(document.documentElement).touchAction,
    position: getComputedStyle(document.documentElement).position,
    classes: Array.from(document.documentElement.classList),
  },
  bodyElement: {
    overflow: getComputedStyle(document.body).overflow,
    height: getComputedStyle(document.body).height,
    touchAction: getComputedStyle(document.body).touchAction,
    position: getComputedStyle(document.body).position,
  },
  blockers: [],
};

// Find elements with touch-action: none
const touchActionNone = Array.from(document.querySelectorAll('*')).filter(el => {
  const style = getComputedStyle(el);
  return style.touchAction === 'none';
});

if (touchActionNone.length > 0) {
  results.blockers.push({
    type: 'touch-action: none',
    count: touchActionNone.length,
    elements: touchActionNone.slice(0, 5).map(el => ({
      tag: el.tagName,
      id: el.id,
      class: el.className,
    })),
  });
}

// Find elements with overflow: hidden that might block scroll
const overflowHidden = Array.from(document.querySelectorAll('*')).filter(el => {
  const style = getComputedStyle(el);
  const height = parseInt(style.height);
  return style.overflow === 'hidden' && height === window.innerHeight;
});

if (overflowHidden.length > 0) {
  results.blockers.push({
    type: 'overflow: hidden at viewport height',
    count: overflowHidden.length,
    elements: overflowHidden.slice(0, 3).map(el => ({
      tag: el.tagName,
      id: el.id,
      class: el.className,
    })),
  });
}

// Test actual scroll
console.log('Testing scroll...');
window.scrollTo(0, 0);
const beforeScroll = window.scrollY;
window.scrollTo(0, 500);
const afterScroll = window.scrollY;

results.scrollTest = {
  before: beforeScroll,
  after: afterScroll,
  worked: afterScroll > 0,
};

// Print results
console.log('\n📊 DIAGNOSTIC RESULTS:\n');
console.log('Viewport:', results.viewport);
console.log('Scrollability:', results.scrollability);
console.log('HTML Element:', results.htmlElement);
console.log('Body Element:', results.bodyElement);
console.log('Scroll Test:', results.scrollTest);

if (results.blockers.length > 0) {
  console.error('\n⚠️ FOUND SCROLL BLOCKERS:', results.blockers);
} else {
  console.log('\n✅ No obvious blockers found');
}

// Recommendations
console.log('\n💡 RECOMMENDATIONS:');
if (results.htmlElement.classes.includes('lenis')) {
  console.error('❌ Remove .lenis class from HTML');
  document.documentElement.classList.remove('lenis', 'lenis-smooth', 'lenis-scrolling');
}
if (results.htmlElement.touchAction === 'none') {
  console.error('❌ HTML has touch-action: none');
}
if (results.htmlElement.height === `${results.viewport.height}px`) {
  console.error('❌ HTML height is locked to viewport');
}
if (results.scrollTest.worked) {
  console.log('✅ Programmatic scroll works');
} else {
  console.error('❌ Programmatic scroll BLOCKED');
}

// Try to fix common issues
console.log('\n🔧 ATTEMPTING AUTO-FIX...');
document.documentElement.classList.remove('lenis', 'lenis-smooth', 'lenis-scrolling', 'lenis-stopped');
document.documentElement.style.height = 'auto';
document.documentElement.style.overflow = 'hidden auto';
document.body.style.overflow = 'hidden auto';
console.log('✅ Applied fixes. Try scrolling now!');

// Final test
window.scrollTo(0, 0);
setTimeout(() => {
  window.scrollTo(0, 800);
  setTimeout(() => {
    console.log('\n🎯 FINAL TEST:', window.scrollY > 0 ? '✅ SCROLL WORKS!' : '❌ Still blocked');
  }, 100);
}, 100);
