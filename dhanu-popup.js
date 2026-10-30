(()=>{
 const init=()=>{
  if(document.getElementById('dhanu-cute-popup'))return;
  const overlay=document.createElement('div');
  overlay.id='dhanu-cute-popup';
  overlay.innerHTML=`<div class="dhanu-popup-card">
   <span class="dhanu-popup-heart" style="top:15px;left:20px">💗</span>
   <span class="dhanu-popup-heart" style="top:35px;right:22px;animation-delay:.7s">✨</span>
   <div class="dhanu-butterfly">💜🦋</div>
   <h2 class="dhanu-popup-title">Happy Birthday<br>My dear love.ly<br>dhanuuu_._💜🦋</h2>
   <div class="dhanu-popup-tags">#shemdi♡ #bala💋🤭<br>#wandrii🫵🏻🐼 #divuuu💋🫵🏻</div>
   <div class="dhanu-butterfly" style="margin-top:12px">🦋💜🦋</div>
   <button class="dhanu-popup-close" type="button">Awww, close ♡</button>
  </div>`;
  document.body.appendChild(overlay);
  const reopen=document.createElement('button');
  reopen.id='dhanu-popup-reopen';
  reopen.type='button';
  reopen.textContent='💜 Dhanu’s surprise';
  document.body.appendChild(reopen);
  const close=()=>overlay.classList.remove('show');
  const open=()=>overlay.classList.add('show');
  overlay.querySelector('.dhanu-popup-close').addEventListener('click',close);
  overlay.addEventListener('click',e=>{if(e.target===overlay)close()});
  reopen.addEventListener('click',open);
  setTimeout(open,1800);
 };
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);
 else init();
})();
