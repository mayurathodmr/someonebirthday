(() => {
  if (document.querySelector("#dhanshri-romantic-extras")) return;

  const section = document.createElement("section");
  section.id = "dhanshri-romantic-extras";
  section.innerHTML = `
    <div class="romantic-heading">
      <span>A LITTLE MORE LOVE ♡</span>
      <h2>Made Especially For You, Dhanshri</h2>
      <p>Some surprises are made with feelings, not words. 💗</p>
    </div>

    <div class="romantic-feature">
      <div class="feature-icon">💌</div>
      <h3>A Letter From My Heart</h3>
      <p>A little letter, written just for you.</p>
      <button class="romantic-btn" id="open-love-letter">Open My Letter ♡</button>
    </div>

    <div class="romantic-feature">
      <div class="feature-icon">🎂</div>
      <h3>Make A Birthday Wish</h3>
      <p>Close your eyes, make a wish and tap the candle.</p>
      <div class="wish-cake" id="wish-cake">🎂</div>
      <button class="romantic-btn" id="make-wish">Make A Wish ✨</button>
      <p id="wish-result" class="romantic-result"></p>
    </div>

    <div class="romantic-feature">
      <div class="feature-icon">🫙</div>
      <h3>Open When You Need A Smile</h3>
      <p>Pick a little note for the moment you need it.</p>
      <div class="smile-note-buttons">
        <button data-note="sad">When you're sad 🌷</button>
        <button data-note="miss">When you miss someone 💗</button>
        <button data-note="motivation">When you need courage ✨</button>
      </div>
      <p id="smile-note" class="romantic-result">Choose a little note above ♡</p>
    </div>

    <div class="romantic-feature">
      <div class="feature-icon">✨</div>
      <h3>A Sky Full Of Wishes</h3>
      <p>Tap a star and discover a wish.</p>
      <div class="wish-stars">
        <button data-star="0">✦</button><button data-star="1">✧</button>
        <button data-star="2">★</button><button data-star="3">✦</button>
        <button data-star="4">✧</button>
      </div>
      <p id="star-wish" class="romantic-result">Your little wish is waiting... ♡</p>
    </div>

    <div class="romantic-feature final-gift-feature">
      <div class="feature-icon">🎁</div>
      <h3>One Last Little Surprise</h3>
      <p>There is something waiting inside this gift.</p>
      <button class="romantic-btn" id="open-final-gift">Open Your Gift 🎀</button>
      <p id="final-gift-message" class="romantic-result"></p>
    </div>
  `;

  const anchor = document.querySelector(".dhanshri-memory-gallery") ||
                 document.querySelector(".dhanshri-birthday-card") ||
                 document.querySelector(".hero") ||
                 document.querySelector("#main");

  if (anchor) anchor.insertAdjacentElement("afterend", section);
  else document.body.appendChild(section);

  const modal = document.createElement("div");
  modal.className = "romantic-letter-modal";
  modal.id = "romantic-letter-modal";
  modal.innerHTML = `
    <div class="romantic-letter-paper">
      <button class="letter-close" aria-label="Close">×</button>
      <div class="letter-decoration">💌</div>
      <p class="letter-small">A LETTER FROM MY HEART</p>
      <h2>Dear Dhanshri,</h2>
      <p class="letter-body">
        I don't know if words can ever explain how special you are.
        But today, I just want you to know that you deserve every
        beautiful thing this world has to offer. Your smile, your
        kindness and the little things that make you who you are
        are truly precious.
        <br><br>
        I hope your days are filled with happiness, your dreams find
        their way to reality, and your heart always has a reason to smile.
        Thank you for being you.
        <br><br>
        No matter where life takes us, I will always wish the very best
        for you. Keep shining, birthday girl.
        <br><br>
        With lots of care and warm wishes, ♡
      </p>
      <div class="letter-sign">Someone who wishes you happiness ❤️</div>
    </div>
  `;
  document.body.appendChild(modal);

  document.querySelector("#open-love-letter").onclick = () => modal.classList.add("show");
  modal.querySelector(".letter-close").onclick = () => modal.classList.remove("show");
  modal.onclick = e => { if (e.target === modal) modal.classList.remove("show"); };

  const notes = {
    sad: "Even on difficult days, remember that you are stronger than you think. Be gentle with yourself. You deserve happiness. 🌷",
    miss: "Some people make ordinary moments feel special. I hope this little note brings a smile to your face. 💗",
    motivation: "Believe in yourself, Dhanshri. Your dreams are worth chasing, and you are capable of beautiful things. ✨"
  };

  section.querySelectorAll("[data-note]").forEach(btn => {
    btn.onclick = () => section.querySelector("#smile-note").textContent = notes[btn.dataset.note];
  });

  const wishes = [
    "May your smile always shine brighter than the stars. 💗",
    "May every little dream find its way to you. 🌸",
    "May happiness follow you wherever you go. ✨",
    "May your heart always feel loved and peaceful. 🦋",
    "May this year bring you beautiful surprises. 🎀"
  ];

  section.querySelectorAll("[data-star]").forEach(btn => {
    btn.onclick = () => section.querySelector("#star-wish").textContent = wishes[Number(btn.dataset.star)];
  });

  let wished = false;
  section.querySelector("#make-wish").onclick = () => {
    if (wished) {
      section.querySelector("#wish-result").textContent = "Keep that beautiful wish close to your heart. ❤️";
      return;
    }
    wished = true;
    section.querySelector("#wish-cake").textContent = "🍰";
    section.querySelector("#wish-result").textContent = "Your candles are blown! May your wish come true, Dhanshri! 🎉";
    for (let i = 0; i < 24; i++) {
      const confetti = document.createElement("span");
      confetti.className = "birthday-confetti";
      confetti.textContent = ["💗","✨","🎉","🌸"][i % 4];
      confetti.style.left = Math.random() * 100 + "vw";
      confetti.style.animationDelay = Math.random() * 1.2 + "s";
      document.body.appendChild(confetti);
      setTimeout(() => confetti.remove(), 3500);
    }
  };

  section.querySelector("#open-final-gift").onclick = () => {
    section.querySelector("#final-gift-message").textContent =
      "Surprise! 🎀 The most beautiful gift is seeing you smile. Happy Birthday, Dhanshri! You deserve all the happiness in the world. ❤️";
    section.querySelector("#open-final-gift").textContent = "A gift full of love ♡";
  };
})();
