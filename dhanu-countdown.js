(()=>{
 const init=()=>{
  if(document.getElementById('dhanu-countdown'))return;
  const section=document.createElement('section');
  section.id='dhanu-countdown';
  section.className='dhanu-countdown-section';
  section.innerHTML=`
   <span class="dhanu-count-heart" style="top:18px;left:18px">💗</span>
   <span class="dhanu-count-heart" style="top:65px;right:20px;animation-delay:1s">🦋</span>
   <div style="font-size:27px">🎀 💜 🎀</div>
   <h2>Dhanu's Birthday Countdown</h2>
   <p class="dhanu-subtitle">A little countdown for my favourite girl ♡</p>
   <div class="dhanu-age-number" id="dhanu-current-age">18</div>
   <div class="dhanu-age-label">YEARS OF MAGIC ✨</div>
   <div class="dhanu-count-grid">
    <div class="dhanu-count-item"><strong id="dhanu-days">00</strong><span>Days</span></div>
    <div class="dhanu-count-item"><strong id="dhanu-hours">00</strong><span>Hours</span></div>
    <div class="dhanu-count-item"><strong id="dhanu-minutes">00</strong><span>Minutes</span></div>
    <div class="dhanu-count-item"><strong id="dhanu-seconds">00</strong><span>Seconds</span></div>
   </div>
   <p class="dhanu-birthday-status" id="dhanu-count-status">Counting every moment until your special day 💗</p>
   <div class="dhanu-date-line">
    🎂 Last birthday: <b>08 November 2025</b><br>
    🥳 Next birthday: <b>08 November 2026</b><br>
    💌 Made with love by Your Peacock 🦚
   </div>
   <div class="dhanu-celebration">🎂 🦋 🎈 💜 🎈</div>
   <p class="dhanu-subtitle">You deserve all the happiness in this world, Dhanu! ♡</p>`;
  const anchor=document.querySelector('.dhanshri-birthday-card')||document.querySelector('.hero')||document.body;
  anchor.insertAdjacentElement('afterend',section);

  const birthdayMonth=10,birthdayDay=8;
  const ageEl=section.querySelector('#dhanu-current-age');
  const status=section.querySelector('#dhanu-count-status');
  const pad=n=>String(n).padStart(2,'0');
  let celebratedYear=-1;
  function update(){
   const now=new Date();
   const birth=new Date(2007,10,8);
   let age=now.getFullYear()-2007;
   if(now.getMonth()<10||(now.getMonth()===10&&now.getDate()<8))age--;
   ageEl.textContent=age;
   let next=new Date(now.getFullYear(),birthdayMonth,birthdayDay);
   if(now>=next)next=new Date(now.getFullYear()+1,birthdayMonth,birthdayDay);
   const diff=Math.max(0,next-now);
   const days=Math.floor(diff/86400000);
   const hours=Math.floor(diff%86400000/3600000);
   const minutes=Math.floor(diff%3600000/60000);
   const seconds=Math.floor(diff%60000/1000);
   section.querySelector('#dhanu-days').textContent=pad(days);
   section.querySelector('#dhanu-hours').textContent=pad(hours);
   section.querySelector('#dhanu-minutes').textContent=pad(minutes);
   section.querySelector('#dhanu-seconds').textContent=pad(seconds);
   const isBirthday=now.getMonth()===10&&now.getDate()===8;
   if(isBirthday){
    status.textContent=`HAPPY BIRTHDAY DHANUUU! You are ${age} today! 🎉💜`;
    section.querySelector('.dhanu-celebration').textContent='🎉 🎂 🎈 🦋 🎈 🎂 🎉';
    if(celebratedYear!==now.getFullYear()){
     celebratedYear=now.getFullYear();
     launchConfetti();
    }
   }else{
    status.textContent=`${days} days left until your ${age+1}th birthday! 💗`;
    section.querySelector('.dhanu-celebration').textContent='🎂 🦋 🎈 💜 🎈';
   }
  }
  function launchConfetti(){
   for(let i=0;i<35;i++){
    const bit=document.createElement('span');
    bit.textContent=['💜','💗','✨','🎉','🦋'][i%5];
    bit.style.cssText=`position:fixed;z-index:100000;left:${Math.random()*100}vw;top:-30px;font-size:${16+Math.random()*17}px;pointer-events:none;transition:transform ${2+Math.random()*2}s ease-in,opacity 3s`;
    document.body.appendChild(bit);
    requestAnimationFrame(()=>{bit.style.transform=`translateY(${innerHeight+80}px) rotate(${Math.random()*500}deg)`;bit.style.opacity='0'});
    setTimeout(()=>bit.remove(),4500);
   }
  }
  update();
  setInterval(update,1000);
 };
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);
 else init();
})();
