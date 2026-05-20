document.addEventListener('DOMContentLoaded', () => {

  // --- 1. Language Support (i18n) ---
  const translations = {
    en: {
      lang_btn: "বাংলা",
      location_tag: "Agartala",
      coming_soon_eyebrow: "⚡ We are preparing something amazing",
      coming_soon_title: "<span>BhaloGo</span> is Coming Soon!",
      coming_soon_desc: "Agartala's fastest 60-minute delivery is undergoing a major upgrade. Stay tuned for a smarter, faster, and more beautiful experience.",
      countdown_days: "Days",
      countdown_hours: "Hours",
      countdown_mins: "Minutes",
      countdown_secs: "Seconds",
      notify_title: "Want to get notified when we launch?",
      notify_desc: "Drop us an email, and you'll be the first to know when we are live! Or reach out to partner with us.",
      contact_email: "hello@optivra.in",
      btn_copy: "Copy",
      btn_copied: "Copied!",
      btn_chat: "Chat with us on WhatsApp",
      footer_credit: "Powered by <a href=\"https://www.optivra.in\" target=\"_blank\" rel=\"noopener noreferrer\">Optivra</a>"
    },
    bn: {
      lang_btn: "English",
      location_tag: "আগরতলা",
      coming_soon_eyebrow: "⚡ আমরা দারুণ কিছু তৈরি করছি",
      coming_soon_title: "<span>ভালোগো</span> শীঘ্রই আসছে!",
      coming_soon_desc: "আগরতলার দ্রুততম ৬০-মিনিটের ডেলিভারি সার্ভিস আরও উন্নত হচ্ছে। একটি সহজ, দ্রুত এবং আরও চমৎকার অভিজ্ঞতার জন্য অপেক্ষা করুন।",
      countdown_days: "দিন",
      countdown_hours: "ঘণ্টা",
      countdown_mins: "মিনিট",
      countdown_secs: "সেকেন্ড",
      notify_title: "আমাদের লঞ্চের সময় জানতে চান?",
      notify_desc: "আমাদের ইমেল করুন, এবং আমরা লাইভ হওয়ার সাথে সাথেই আপনি জানতে পারবেন! অথবা আমাদের পার্টনার হতে যোগাযোগ করুন।",
      contact_email: "hello@optivra.in",
      btn_copy: "কপি",
      btn_copied: "কপি করা হয়েছে!",
      btn_chat: "আমাদের হোয়াটসঅ্যাপে মেসেজ করুন",
      footer_credit: "পাওয়ারড বাই <a href=\"https://www.optivra.in\" target=\"_blank\" rel=\"noopener noreferrer\">Optivra</a>"
    }
  };

  let currentLang = localStorage.getItem('bhalogo_lang') || 'en';
  
  function applyLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });
    // Set html lang attribute
    document.documentElement.lang = lang;
  }

  // Initialize Language
  applyLanguage(currentLang);

  const langToggle = document.getElementById('langToggle');
  if(langToggle) {
    langToggle.addEventListener('click', () => {
      currentLang = currentLang === 'en' ? 'bn' : 'en';
      localStorage.setItem('bhalogo_lang', currentLang);
      applyLanguage(currentLang);
      
      // Update clipboard button label if copied state is not active
      const copyBtn = document.getElementById('copyBtn');
      if (copyBtn && !copyBtn.classList.contains('copied-active')) {
        const label = copyBtn.querySelector('.copy-label');
        if (label) label.textContent = translations[currentLang]['btn_copy'];
      }
    });
  }

  // --- 2. Custom Cursor Logic ---
  const cursorDot = document.querySelector('.cursor-dot');
  const cursorRing = document.querySelector('.cursor-ring');
  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  
  if (cursorDot && cursorRing && !isMobile) {
    let mouseX = 0, mouseY = 0, dotX = 0, dotY = 0, ringX = 0, ringY = 0;
    window.addEventListener('mousemove', (e) => { mouseX = e.clientX; mouseY = e.clientY; });
    // Smooth LERP cursor for a fluid feel
    (function animateCursor() {
      dotX += (mouseX - dotX) * 0.25;
      dotY += (mouseY - dotY) * 0.25;
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      cursorDot.style.left = `${dotX}px`;
      cursorDot.style.top = `${dotY}px`;
      cursorRing.style.left = `${ringX}px`;
      cursorRing.style.top = `${ringY}px`;
      requestAnimationFrame(animateCursor);
    })();

    function updateInteractives() {
      const interactives = document.querySelectorAll('a, button, .countdown-item, .email-card');
      interactives.forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
      });
    }
    updateInteractives();
  }


  // --- 3. Theme Management ---
  const themeToggle = document.getElementById('themeToggle');
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark-mode');
      const isDark = document.documentElement.classList.contains('dark-mode');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      if (metaThemeColor) metaThemeColor.setAttribute('content', isDark ? '#121212' : '#0D5C3C');
    });
  }


  // --- 4. Premium Scroll/Load Animations ---
  const animElements = document.querySelectorAll('.js-anim');
  animElements.forEach(el => {
    const delay = el.dataset.delay || 0;
    const transformType = el.dataset.transform || 'translateY(50px)';
    
    el.style.visibility = 'visible';
    el.style.opacity = '0';
    el.style.transform = transformType;
    
    el.animate([
      { opacity: 0, transform: transformType },
      { opacity: 1, transform: 'translate(0,0) scale(1)' }
    ], {
      duration: 1000,
      delay: Number(delay),
      easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      fill: 'forwards'
    });
  });


  // --- 5. Floating Particles Canvas ---
  const canvas = document.getElementById('particleCanvas');
  if (canvas && !isMobile) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    function resizeCanvas() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    for (let i = 0; i < 40; i++) {
      particles.push({ 
        x: Math.random()*canvas.width, 
        y: Math.random()*canvas.height,
        r: Math.random()*2+1, 
        dx: (Math.random()-0.5)*0.4, 
        dy: (Math.random()-0.5)*0.4,
        o: Math.random()*0.5+0.1 
      });
    }
    (function drawParticles() {
      ctx.clearRect(0,0,canvas.width,canvas.height);
      const isDark = document.documentElement.classList.contains('dark-mode');
      particles.forEach(p => {
        p.x += p.dx; p.y += p.dy;
        if(p.x<0||p.x>canvas.width) p.dx*=-1;
        if(p.y<0||p.y>canvas.height) p.dy*=-1;
        ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fillStyle = isDark ? `rgba(245,184,27,${p.o})` : `rgba(13,92,60,${p.o*0.5})`;
        ctx.fill();
      });
      requestAnimationFrame(drawParticles);
    })();
  }


  // --- 6. Parallax Decorative Orbs on Mouse ---
  if (!isMobile) {
    window.addEventListener('mousemove', (e) => {
      const nx = (e.clientX / window.innerWidth) - 0.5;
      const ny = (e.clientY / window.innerHeight) - 0.5;
      
      const orbGreen = document.querySelector('.orb-green');
      const orbAccent = document.querySelector('.orb-accent');
      
      if (orbGreen) {
        orbGreen.style.transform = `translate(${nx * -45}px, ${ny * -45}px)`;
      }
      if (orbAccent) {
        orbAccent.style.transform = `translate(${nx * 55}px, ${ny * 55}px)`;
      }
    });
  }


  // --- 7. 3D Tilt on Central Card & Countdown Items ---
  if (!isMobile) {
    const card = document.querySelector('.coming-soon-card');
    if (card) {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left, y = e.clientY - rect.top;
        const cx = rect.width/2, cy = rect.height/2;
        const rotY = ((x - cx) / cx) * 4; 
        const rotX = ((cy - y) / cy) * 4;
        card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(0)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    }

    document.querySelectorAll('.countdown-item').forEach(item => {
      item.addEventListener('mousemove', (e) => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left, y = e.clientY - rect.top;
        const cx = rect.width/2, cy = rect.height/2;
        const rotY = ((x - cx) / cx) * 8;
        const rotX = ((cy - y) / cy) * 8;
        item.style.transform = `perspective(500px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-6px)`;
      });
      item.addEventListener('mouseleave', () => {
        item.style.transform = '';
      });
    });
  }


  // --- 8. Magnetic Buttons + Ripple Click ---
  document.querySelectorAll('.btn').forEach(btn => {
    if (!isMobile) {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const dx = (e.clientX - rect.left - rect.width/2) * 0.25;
        const dy = (e.clientY - rect.top - rect.height/2) * 0.25;
        btn.style.transform = `translate(${dx}px, ${dy}px) scale(1.04)`;
      });
      btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
    }
    btn.addEventListener('click', (e) => {
      const circle = document.createElement('span');
      circle.className = 'ripple-circle';
      const rect = btn.getBoundingClientRect();
      const sz = Math.max(rect.width, rect.height) * 2;
      circle.style.width = circle.style.height = sz + 'px';
      circle.style.left = (e.clientX - rect.left - sz/2) + 'px';
      circle.style.top = (e.clientY - rect.top - sz/2) + 'px';
      btn.appendChild(circle);
      setTimeout(() => circle.remove(), 700);
    });
  });


  // --- 9. Glassmorphic Countdown Timer (2 Months from May 20, 2026) ---
  // Target date is July 20, 2026 at 23:59:59
  const targetDate = new Date("2026-07-20T23:59:59").getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      document.getElementById("days").innerText = "00";
      document.getElementById("hours").innerText = "00";
      document.getElementById("minutes").innerText = "00";
      document.getElementById("seconds").innerText = "00";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = String(days).padStart(2, '0');
    document.getElementById("hours").innerText = String(hours).padStart(2, '0');
    document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);


  // --- 10. Interactive Email Clipboard Logic ---
  const emailCard = document.getElementById('emailCard');
  const copyBtn = document.getElementById('copyBtn');
  const emailText = "hello@optivra.in";

  if (emailCard && copyBtn) {
    copyBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevent launching mailto link when copy is clicked
      navigator.clipboard.writeText(emailText).then(() => {
        copyBtn.classList.add('copied-active');
        const copyIcon = copyBtn.querySelector('i');
        const copyLabel = copyBtn.querySelector('.copy-label');
        
        // Dynamic green feedback styling
        copyIcon.className = "fas fa-check";
        copyBtn.style.background = "#2ecc71";
        copyBtn.style.color = "#ffffff";
        copyBtn.style.borderColor = "#2ecc71";
        
        // Show correct translation
        copyLabel.textContent = translations[currentLang]['btn_copied'];
        
        // Reset after 2.5 seconds
        setTimeout(() => {
          copyBtn.classList.remove('copied-active');
          copyIcon.className = "fas fa-copy";
          copyBtn.style.background = "";
          copyBtn.style.color = "";
          copyBtn.style.borderColor = "";
          copyLabel.textContent = translations[currentLang]['btn_copy'];
        }, 2500);
      });
    });
    
    // Clicking the rest of the email card opens mail client
    emailCard.addEventListener('click', () => {
      window.location.href = `mailto:${emailText}`;
    });
  }

});
