// Typewriter intro
const title = document.querySelector('.typewriter');
const caret = document.querySelector('.typewriter .caret');
if (title) {
  const text = 'welcome!';
  title.firstChild.textContent = '';
  let i = 0;
  const tick = () => {
    if (i <= text.length) {
      title.firstChild.textContent = text.slice(0, i++);
      requestAnimationFrame(tick);
    } else {
      caret.style.opacity = '0.6';
    }
  };
  requestAnimationFrame(tick);
}

// Reveal on scroll
document.querySelectorAll('.block').forEach((el)=>{
  el.setAttribute('data-reveal','');
});
const io = new IntersectionObserver((entries)=>{
  entries.forEach((e)=>{
    if (e.isIntersecting) e.target.classList.add('show');
  });
},{threshold:0.08});
document.querySelectorAll('[data-reveal]').forEach((el)=>io.observe(el));

// Telegram avatar fetch by username
async function loadTelegramAvatar(username){
  try{
    // Public avatar via t.me/i/userpic proxy (served by Telegram)
    const avatarUrl = `https://t.me/i/userpic/320/${username}.jpg`;
    // If specific container exists use it, else try generic mapping by id
    const explicitId = {
      'sexuzperedoz':'tg-avatar',
      'melonotmelo':'tg-avatar-melo',
      'amvwh1zy':'tg-avatar-whizy',
      'nettspendg':'tg-avatar-renix',
    }[username];
    const img = document.getElementById(explicitId || 'tg-avatar');
    if (img) { img.src = avatarUrl; img.onload = ()=> img.setAttribute('aria-hidden','false'); }
  }catch{}
}
loadTelegramAvatar('sexuzperedoz');

// Friends avatars
loadTelegramAvatar('melonotmelo');
loadTelegramAvatar('amvwh1zy');
loadTelegramAvatar('nettspendg');

// Copy buttons (donations)
document.querySelectorAll('.copy').forEach((btn)=>{
  btn.addEventListener('click', async ()=>{
    const value = btn.getAttribute('data-copy');
    if (!value) return;
    try { await navigator.clipboard.writeText(value); } catch {}
    btn.textContent = 'copied';
    setTimeout(()=>{ btn.textContent = shorten(value); }, 900);
  });
  // initialize truncated labels
  const value = btn.getAttribute('data-copy');
  if (value) btn.textContent = shorten(value);
});

function shorten(text){
  if (text.length <= 28) return text;
  return text.slice(0,12) + '…' + text.slice(-8);
}


