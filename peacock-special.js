
// PEACOCK FINAL BIRTHDAY EXPERIENCE
(() => {
  function initPeacock() {
    if (document.querySelector(".peacock-final")) return;

    // Calculate her age from her birthday.
    const dob = new Date(2007, 10, 8);
    const today = new Date();
    let age = today.getFullYear() - 2007;
    const birthdayNotReached =
      today.getMonth() < 10 ||
      (today.getMonth() === 10 && today.getDate() < 8);
    if (birthdayNotReached) age--;

    const ageChip = document.createElement("div");
    ageChip.className = "peacock-age-chip";
    ageChip.innerHTML = `🎂 ${age} years of magic ♡ &nbsp;|&nbsp; Born on 08 November 2007`;
    const birthdayCard = document.querySelector(".dhanshri-birthday-card");
    if (birthdayCard) birthdayCard.appendChild(ageChip);

    const final = document.createElement("section");
    final.className = "peacock-final";
    final.innerHTML = `
      <div class="peacock-eyebrow">A LITTLE GAME BEFORE YOU GO ♡</div>
      <h2>How Well Do You Know Your Peacock?</h2>
      <p class="peacock-intro">
        Dhanshri, before you leave, answer these little questions.
        No exams, no pressure... just a little fun! 🥹
      </p>

      <div class="peacock-quiz-card">
        <h3>1. Who made this little birthday website?</h3>
        <button class="peacock-answer-btn" data-answer="0">Reveal answer ♡</button>
        <div class="peacock-answer">A certain boy who wanted to make you smile... Your Peacock! 🦚</div>
      </div>

      <div class="peacock-quiz-card">
        <h3>2. What does your Peacock wish for you?</h3>
        <button class="peacock-answer-btn" data-answer="1">Tell me! ✨</button>
        <div class="peacock-answer">Endless happiness, beautiful dreams, good health and a million reasons to smile. 💗</div>
      </div>

      <div class="peacock-quiz-card">
        <h3>3. What is your Peacock's favourite sight?</h3>
        <button class="peacock-answer-btn" data-answer="2">Reveal it 😋</button>
        <div class="peacock-answer">Your beautiful smile, obviously! Don't make me say it twice. 😉</div>
      </div>

      <div class="peacock-quiz-card">
        <h3>4. What should you never stop doing?</h3>
        <button class="peacock-answer-btn" data-answer="3">Show answer 🌸</button>
        <div class="peacock-answer">Dreaming big, being yourself and smiling like the sunshine you are. ☀️</div>
      </div>

      <div class="peacock-quiz-card">
        <h3>5. One thing your Peacock wants you to remember?</h3>
        <button class="peacock-answer-btn" data-answer="4">I want to know! 💌</button>
        <div class="peacock-answer">You are special, you matter, and you deserve all the good things life has waiting for you. ❤️</div>
      </div>

      <div class="peacock-flirt">
        <span class="peacock-floating">🌷</span><br>
        "Tumhari smile ka koi competition hi nahi hai...<br>
        because honestly, it wins every single time! 😉"<br>
        "Agar cuteness ka award hota na,<br>
        toh trophy bhi tumhare naam hoti. 🎀"<br>
        "Aur haan, itna bhi mat muskurana...<br>
        kahin tumhara Peacock phir se tumpe fida na ho jaaye! 🦚"
      </div>

      <div class="peacock-signature">
        <div class="bird">🦚</div>
        <h3>From Your Peacock</h3>
        <p class="peacock-wish">
          Happy Birthday, Dhanshri! ❤️<br><br>
          May your life be filled with beautiful surprises,
          genuine people, peaceful moments and dreams that come true.
          Hamesha khush rehna, apna khayal rakhna aur apni cute si smile
          kabhi mat khona. Tumhari life ka har new chapter aur bhi
          beautiful ho. You deserve the best, always! 🌸<br><br>
          This little website is just a small effort to make your
          special day a little more memorable. Keep shining, birthday girl! ✨
        </p>
      </div>

      <div class="peacock-miss-box">
        <div style="font-size:35px">💗</div>
        <h3>Ek last question...</h3>
        <h3>Miss karti ho kya apne Peacock ko? 🙈</h3>
        <button class="peacock-final-btn" data-miss="yes">Haan, thoda sa ❤️</button>
        <button class="peacock-final-btn" data-miss="maybe">Maybe... 🙈</button>
        <button class="peacock-final-btn" data-miss="no">Bilkul nahi 😜</button>
        <div class="peacock-miss-response" aria-live="polite"></div>
      </div>
      <p style="font-family:'Dancing Script',cursive;font-size:23px;color:#bd7895;margin-top:25px">
        Made with lots of care, just for you ♡
      </p>
    `;

    const anchor = document.querySelector("#dhanshri-romantic-extras");
    if (anchor) anchor.insertAdjacentElement("afterend", final);
    else document.body.appendChild(final);

    final.querySelectorAll("[data-answer]").forEach(button => {
      button.addEventListener("click", () => {
        const answer = button.nextElementSibling;
        answer.classList.toggle("show");
        button.textContent = answer.classList.contains("show") ? "Hide answer ♡" : "Reveal answer ♡";
      });
    });

    const response = final.querySelector(".peacock-miss-response");
    final.querySelectorAll("[data-miss]").forEach(button => {
      button.addEventListener("click", () => {
        const replies = {
          yes: "Awww! Your Peacock is smiling right now. 🙈❤️",
          maybe: "Maybe bhi cute hai... I'll take that as a little yes! 😉",
          no: "Haha, okay ji! Still wishing you a day full of smiles. 😄💗"
        };
        response.textContent = replies[button.dataset.miss];
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initPeacock);
  } else {
    initPeacock();
  }
})();
