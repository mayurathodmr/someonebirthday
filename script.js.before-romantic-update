// PERSONALIZE YOUR WEBSITE HERE
const CONFIG = {
  name: "Dhanshri",
  message: "Happy Birthday, Dhanshri! ❤️ You are someone truly special, and your smile makes every moment beautiful. I wish you endless happiness, success, love and beautiful memories. No matter where life takes us, you will always have a special place in my heart. Keep smiling, keep shining and never stop being the wonderful person you are. ♡"
};

const intro = document.getElementById("intro");
const main = document.getElementById("main");
const popup = document.getElementById("popup");

document.querySelector(".intro h1").innerHTML =
  `Hey, <span>${CONFIG.name}!</span>`;
document.querySelector(".hero h1").innerHTML =
  `Happy Birthday<br><span class="gradient">${CONFIG.name}!</span>`;
document.getElementById("messageText").textContent = CONFIG.message;

function openSurprise(){
  document.getElementById("gift").style.transform="scale(1.2) rotate(12deg)";
  setTimeout(()=>popup.classList.add("show"),250);
}
function closePopup(){popup.classList.remove("show")}
function startExperience(){
  closePopup();
  intro.classList.add("hidden");
  main.classList.remove("hidden");
  window.scrollTo({top:0,behavior:"smooth"});
  setTimeout(()=>toast("Your special day starts now! ♡"),500);
}
function scrollToSection(id){
  document.getElementById(id).scrollIntoView({behavior:"smooth"});
}
function toast(text){
  const t=document.getElementById("toast");
  t.textContent=text;t.classList.add("show");
  setTimeout(()=>t.classList.remove("show"),2600);
}
function blowCandles(){
  document.querySelectorAll(".flame").forEach(f=>f.classList.add("off"));
  document.getElementById("wishText").textContent="May all your wishes come true! ✨";
  toast("Wish sent to the universe! 💗");
  confetti();
}
function celebrate(){
  confetti();
  toast("You deserve the whole universe! 🌸");
}
function confetti(){
  const symbols=["💗","💕","✨","🌸","🎀","💖","🦋"];
  for(let i=0;i<65;i++){
    const el=document.createElement("span");
    el.textContent=symbols[Math.floor(Math.random()*symbols.length)];
    el.style.cssText=`position:fixed;left:${Math.random()*100}vw;top:-30px;font-size:${15+Math.random()*20}px;z-index:50;pointer-events:none;transition:transform ${2+Math.random()*2}s linear,opacity 3s`;
    document.body.appendChild(el);
    requestAnimationFrame(()=>{el.style.transform=`translate(${Math.random()*160-80}px,110vh) rotate(${Math.random()*600}deg)`;el.style.opacity="0"});
    setTimeout(()=>el.remove(),4500);
  }
}
function floatingHearts(){
  const el=document.createElement("span");
  el.className="heart";
  el.textContent=["♡","♥","✧","💕"][Math.floor(Math.random()*4)];
  el.style.left=Math.random()*100+"vw";
  el.style.fontSize=(12+Math.random()*20)+"px";
  el.style.animationDuration=(7+Math.random()*7)+"s";
  document.body.appendChild(el);
  setTimeout(()=>el.remove(),15000);
}
setInterval(floatingHearts,700);


// ===== SPECIAL LOVE SURPRISE =====
function specialCakeWish() {
  const scene = document.querySelector('.cake-scene');
  if (scene) scene.classList.add('blown');
  const msg = document.getElementById('cake-message');
  if (msg) msg.textContent = "Your smile is the most beautiful wish! Happy Birthday, Dhanshri! ❤️";
  if (typeof confetti === 'function') confetti();
  launchLoveBalloons();
  launchLovePetals();
}

function launchLoveBalloons() {
  const emojis = ['🎈','💗','❤️','💕','🎀'];
  for (let i=0;i<24;i++) {
    const el=document.createElement('div');
    el.className='love-balloon';
    el.textContent=emojis[Math.floor(Math.random()*emojis.length)];
    el.style.left=Math.random()*100+'vw';
    el.style.animationDelay=(Math.random()*3)+'s';
    document.body.appendChild(el);
    setTimeout(()=>el.remove(),11000);
  }
}

function launchLovePetals() {
  const emojis=['🌹','🌸','💮','💗'];
  for(let i=0;i<22;i++){
    const el=document.createElement('div');
    el.className='love-petal';
    el.textContent=emojis[Math.floor(Math.random()*emojis.length)];
    el.style.left=Math.random()*100+'vw';
    el.style.animationDelay=(Math.random()*4)+'s';
    el.style.fontSize=(15+Math.random()*18)+'px';
    document.body.appendChild(el);
    setTimeout(()=>el.remove(),10000);
  }
}



/* PREMIUM SCROLL REVEAL */
(function(){
  function setupLoveReveal(){
    const selectors = [
      "section h1",
      "section h2",
      ".memory-card",
      ".photo-card",
      ".gallery-item",
      ".letter-card",
      ".cake-scene",
      ".marathi-card"
    ];

    const elements = document.querySelectorAll(selectors.join(","));
    elements.forEach(el => {
      if (!el.classList.contains("reveal-love")) {
        el.classList.add("reveal-love");
      }
    });

    if (!("IntersectionObserver" in window)) {
      elements.forEach(el => el.classList.add("visible-love"));
      return;
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible-love");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    elements.forEach(el => observer.observe(el));
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setupLoveReveal);
  } else {
    setupLoveReveal();
  }
})();

// ===== TORCH / FLASHLIGHT TOUCH EFFECT =====
(function(){
  function moveTorch(x,y){
    document.documentElement.style.setProperty('--torch-x',x+'px');
    document.documentElement.style.setProperty('--torch-y',y+'px');
    document.body.classList.add('torch-active');
  }

  document.addEventListener('pointermove',function(e){
    moveTorch(e.clientX,e.clientY);
  },{passive:true});

  document.addEventListener('touchstart',function(e){
    if(e.touches.length){
      moveTorch(e.touches[0].clientX,e.touches[0].clientY);
    }
  },{passive:true});

  document.addEventListener('touchmove',function(e){
    if(e.touches.length){
      moveTorch(e.touches[0].clientX,e.touches[0].clientY);
    }
  },{passive:true});

  document.addEventListener('touchend',function(){
    document.body.classList.remove('torch-active');
  },{passive:true});
})();

// ===== PREMIUM SCROLL REVEAL =====
(function(){
  const targets=document.querySelectorAll(
    '.polaroid,.message-card,.final-card,.love-content,'+
    '.cake-scene,.cake-heading,.love-final,.special-photo-card'
  );

  if(!('IntersectionObserver' in window)){
    targets.forEach(el=>el.classList.add('visible-love'));
    return;
  }

  const revealObserver=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('visible-love');
        revealObserver.unobserve(entry.target);
      }
    });
  },{threshold:0.12});

  targets.forEach(el=>{
    el.classList.add('reveal-love');
    revealObserver.observe(el);
  });
})();

// ===== BIRTHDAY SPARKLE EFFECT =====
document.addEventListener('click',function(e){
  const symbols=['✨','💗','🌸','💕','⭐'];

  for(let i=0;i<5;i++){
    const sparkle=document.createElement('span');
    sparkle.className='birthday-sparkle';
    sparkle.textContent=symbols[Math.floor(Math.random()*symbols.length)];
    sparkle.style.left=(e.clientX+Math.random()*50-25)+'px';
    sparkle.style.top=(e.clientY+Math.random()*40-20)+'px';
    sparkle.style.fontSize=(16+Math.random()*15)+'px';
    document.body.appendChild(sparkle);
    setTimeout(()=>sparkle.remove(),3000);
  }
});


// ===== SOFT ROMANTIC FLOATING DECORATIONS =====
(function(){
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const symbols=['♡','♥','✿','❀'];
  function createFloatingDecoration(){
    if(document.hidden) return;
    const item=document.createElement('span');
    item.className='romantic-float';
    item.textContent=symbols[Math.floor(Math.random()*symbols.length)];
    item.style.left=Math.random()*96+'vw';
    item.style.fontSize=(14+Math.random()*13)+'px';
    item.style.color=['#e879a7','#d9ae76','#d98eae'][Math.floor(Math.random()*3)];
    item.style.animationDuration=(9+Math.random()*7)+'s';
    document.body.appendChild(item);
    setTimeout(()=>item.remove(),17000);
  }
  setInterval(createFloatingDecoration,1800);
})();


// ===== DHANSHRI BIRTHDAY DATE & SPECIAL NOTE =====
(function(){
  if(document.getElementById('dhanshri-birthday-card')) return;

  const card=document.createElement('section');
  card.id='dhanshri-birthday-card';
  card.className='dhanshri-birthday-card';
  card.innerHTML=`
    <div style="font-size:32px">🎀 💗 🎂</div>
    <p style="letter-spacing:2px;font-size:12px;font-weight:700">A DAY MADE EXTRA SPECIAL</p>
    <div class="date">08 November 2007</div>
    <p>The beautiful day when Dhanshri came into this world. ✨</p>
    <div class="dhanshri-countdown" id="dhanshri-countdown"></div>
    <button class="dhanshri-note-button" id="dhanshri-open-note">
      💌 Open your special note
    </button>
  `;

  const overlay=document.createElement('div');
  overlay.className='dhanshri-note-overlay';
  overlay.id='dhanshri-note-overlay';
  overlay.innerHTML=`
    <div class="dhanshri-note-box">
      <div style="font-size:35px">💗</div>
      <h2>A Little Note for Dhanshri</h2>
      <p>
        On your birthday, I wish you endless smiles, peaceful days
        and dreams that come true. You deserve all the beautiful
        things life has to offer. Thank you for being you.
        No matter how life changes, you will always be someone
        special to me. Keep smiling, birthday girl! ❤️
      </p>
      <button class="dhanshri-note-close" id="dhanshri-close-note">
        Close with a smile ♡
      </button>
    </div>
  `;
  document.body.appendChild(overlay);

  const hero=document.querySelector('.hero');
  const main=document.getElementById('main');
  if(hero) hero.insertAdjacentElement('afterend',card);
  else if(main) main.insertBefore(card,main.firstChild);
  else document.body.appendChild(card);

  const open=()=>overlay.classList.add('open');
  const close=()=>overlay.classList.remove('open');
  document.getElementById('dhanshri-open-note').addEventListener('click',open);
  document.getElementById('dhanshri-close-note').addEventListener('click',close);
  overlay.addEventListener('click',e=>{if(e.target===overlay)close()});

  function updateCountdown(){
    const now=new Date();
    let next=new Date(now.getFullYear(),10,8);
    if(now>=next) next=new Date(now.getFullYear()+1,10,8);
    const days=Math.ceil((next-now)/(1000*60*60*24));
    const display=document.getElementById('dhanshri-countdown');
    if(display) display.textContent=days===0
      ? "🎉 It's her birthday today! 🎉"
      : "🎂 "+days+" days until her birthday";
  }
  updateCountdown();
})();



// DHANSHRI BIRTHDAY SPECIAL GALLERY
(() => {
  const photos = [
    ["M.jpg", "A Lovely Memory"],
    ["N.jpg", "Beautiful Smile"],
    ["P.jpg", "Sweet Moments"],
    ["Q.png", "A Special Memory"],
    ["R.jpg", "Simply Beautiful"],
    ["S.jpg", "Little Happiness"],
    ["T.jpg", "Precious Moments"],
    ["U.jpg", "Forever Remembered"],
    ["V.jpg", "One of a Kind"]
  ];

  function addDhanshriGallery() {
    if (document.querySelector(".dhanshri-memory-gallery")) return;

    const section = document.createElement("section");
    section.className = "dhanshri-memory-gallery";
    section.innerHTML = `
      <div class="memory-eyebrow">A little collection of happiness ♡</div>
      <h2>Dhanshri's Birthday Memories</h2>
      <p class="memory-subtitle">
        Nine little pictures, countless beautiful feelings.
        Every picture has its own special place. 💗
      </p>
      <div class="memory-grid">
        ${photos.map((photo, index) => `
          <div class="memory-card" data-photo="${index}">
            <span class="memory-number">Memory ${String(index + 1).padStart(2, "0")}</span>
            <img src="assets/birthday-gallery/${photo[0]}" alt="${photo[1]}" loading="lazy">
            <span class="memory-label">${photo[1]}</span>
          </div>
        `).join("")}
      </div>
      <div class="memory-footer">Made with love, just for you ♡</div>
    `;

    const anchor = document.querySelector(".dhanshri-birthday-card") ||
                   document.querySelector(".hero") ||
                   document.querySelector("#main");

    if (anchor) anchor.insertAdjacentElement("afterend", section);
    else document.body.appendChild(section);

    const lightbox = document.createElement("div");
    lightbox.className = "memory-lightbox";
    lightbox.innerHTML = `
      <button class="memory-close" aria-label="Close">&times;</button>
      <img src="" alt="Birthday memory">
    `;
    document.body.appendChild(lightbox);

    const largeImage = lightbox.querySelector("img");

    section.querySelectorAll(".memory-card").forEach(card => {
      card.addEventListener("click", () => {
        const photo = photos[Number(card.dataset.photo)];
        largeImage.src = "assets/birthday-gallery/" + photo[0];
        largeImage.alt = photo[1];
        lightbox.classList.add("open");
      });
    });

    lightbox.addEventListener("click", event => {
      if (event.target === lightbox || event.target.closest(".memory-close")) {
        lightbox.classList.remove("open");
        largeImage.src = "";
      }
    });

    document.addEventListener("keydown", event => {
      if (event.key === "Escape") lightbox.classList.remove("open");
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", addDhanshriGallery);
  } else {
    addDhanshriGallery();
  }
})();



// DHANSHRI CUTE SURPRISE POPUPS
(() => {
  if (window.dhanshriCuteSurpriseReady) return;
  window.dhanshriCuteSurpriseReady = true;

  const notes = [
    "Your smile has a beautiful way of making an ordinary day feel special. Keep smiling, Dhanshri! ❤️",
    "I hope life gives you a thousand reasons to be happy, and a thousand beautiful moments to remember. 🌸",
    "You are one of those rare people who make memories feel extra precious. Never forget how special you are. 💗",
    "May all your little dreams turn into big, beautiful realities. You deserve so much happiness. ✨",
    "One last thing... this little website is made with care, just to bring a smile to your face. Happy Birthday! 🎂"
  ];

  function setup() {
    if (document.querySelector(".cute-surprise-overlay")) return;

    const launch = document.createElement("button");
    launch.className = "dhanshri-surprise-launch";
    launch.textContent = "💌 Open a Little Surprise ♡";

    const gallery = document.querySelector(".dhanshri-memory-gallery");
    if (gallery) gallery.insertAdjacentElement("afterend", launch);
    else document.body.appendChild(launch);

    const overlay = document.createElement("div");
    overlay.className = "cute-surprise-overlay";
    overlay.innerHTML = `
      <div class="cute-surprise-box">
        <div class="cute-envelope">💌</div>
        <div class="cute-surprise-count">A LITTLE NOTE FOR YOU</div>
        <h3>Dear Dhanshri ♡</h3>
        <div class="cute-surprise-message" aria-live="polite">
          Someone has a few sweet words for you...
        </div>
        <div class="cute-surprise-count cute-note-number">A SPECIAL SURPRISE</div>
        <div class="cute-surprise-actions">
          <button class="cute-next">Read my little note ♡</button>
          <button class="cute-close">Close ✕</button>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);

    const message = overlay.querySelector(".cute-surprise-message");
    const number = overlay.querySelector(".cute-note-number");
    const next = overlay.querySelector(".cute-next");
    const close = overlay.querySelector(".cute-close");
    let index = -1;

    function openPopup() {
      index = -1;
      message.textContent = "Someone has a few sweet words for you...";
      number.textContent = "A SPECIAL SURPRISE";
      next.textContent = "Read my little note ♡";
      overlay.classList.add("show");
    }

    function closePopup() {
      overlay.classList.remove("show");
    }

    next.addEventListener("click", () => {
      index++;
      if (index < notes.length) {
        message.textContent = notes[index];
        number.textContent = `NOTE ${index + 1} OF ${notes.length}`;
        next.textContent = index === notes.length - 1 ? "Read again ♡" : "Next little note →";
      } else {
        index = -1;
        message.textContent = "Someone has a few sweet words for you...";
        number.textContent = "A SPECIAL SURPRISE";
        next.textContent = "Read my little note ♡";
      }
    });

    launch.addEventListener("click", openPopup);
    close.addEventListener("click", closePopup);
    overlay.addEventListener("click", e => {
      if (e.target === overlay) closePopup();
    });
    document.addEventListener("keydown", e => {
      if (e.key === "Escape") closePopup();
    });

    for (let i = 0; i < 5; i++) {
      const heart = document.createElement("span");
      heart.className = "cute-floating-heart";
      heart.textContent = ["♡","♥","✿","💕","❀"][i];
      heart.style.left = (10 + i * 19) + "%";
      heart.style.animationDelay = (i * .8) + "s";
      overlay.querySelector(".cute-surprise-box").appendChild(heart);
    }

    setTimeout(openPopup, 3500);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setup);
  } else {
    setup();
  }
})();
