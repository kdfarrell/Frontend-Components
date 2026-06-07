const shareBtn    = document.getElementById('share-btn');
const mobileClose = document.getElementById('mobile-close');
const shareLinks  = document.getElementById('share-links');
const mobileBar   = document.getElementById('mobile-bar');
const profileInfo = document.getElementById('profile-info');

const isDesktop = () => window.innerWidth >= 700;

// Reset all state when crossing the breakpoint
function resetAll() {
  shareLinks.classList.remove('open');
  mobileBar.classList.remove('open');
  profileInfo.style.visibility = 'visible';
}

let wasDesktop = isDesktop();
window.addEventListener('resize', () => {
  const nowDesktop = isDesktop();
  if (nowDesktop !== wasDesktop) {
    resetAll();
    wasDesktop = nowDesktop;
  }
});

shareBtn.addEventListener('click', () => {
  if (isDesktop()) {
    // Desktop: toggle tooltip
    shareLinks.classList.toggle('open');
  } else {
    // Mobile: show bar, hide profile
    mobileBar.classList.add('open');
    profileInfo.style.visibility = 'hidden';
  }
});

mobileClose.addEventListener('click', () => {
  mobileBar.classList.remove('open');
  profileInfo.style.visibility = 'visible';
});