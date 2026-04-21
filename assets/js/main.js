document.addEventListener('DOMContentLoaded', () => {

  // --- 1. Language Support (i18n) ---
  const translations = {
    en: {
      lang_btn: "বাংলা",
      location_tag: "Agartala",
      hero_title: "<span>Essentials Delivered</span><br>in 60 Minutes",
      hero_desc: "Medicines, groceries & emergency delivery — at your doorstep. Trusted by 100+ families in Agartala.",
      wa_order: "Order on WhatsApp",
      call_now: "Call Now",
      trust_secure: "100% Secure",
      trust_60min: "60-min delivery",
      trust_local: "Local pharmacies",
      quick_bar_text: "<strong>Order in seconds</strong> — just WhatsApp or call us!",
      call_urgent: "Call for urgent",
      services_title: "What We Deliver",
      services_sub: "Fast, reliable, and always fresh — from local stores to your home",
      srv1_title: "Emergency Medicines",
      srv1_desc: "Prescription or OTC, get medicines within 60 mins. We partner with verified pharmacies.",
      srv2_title: "Grocery Essentials",
      srv2_desc: "Milk, bread, eggs, vegetables — daily essentials delivered fresh.",
      srv3_title: "Baby & Personal Care",
      srv3_desc: "Diapers, baby food, hygiene products, and personal care items delivered instantly.",
      night_note: "🌙 <strong>Night & Urgent Delivery:</strong> 24/7 support for medical emergencies. We're just a call away, even at midnight.",
      how_title: "How BhaloGo Works",
      step1_title: "Send List / Prescription",
      step1_desc: "Share via WhatsApp or call us with your order",
      step2_title: "We Confirm Instantly",
      step2_desc: "Real-time confirmation & estimated delivery time",
      step3_title: "Delivered in 60 Mins",
      step3_desc: "Contactless drop at your doorstep",
      trust_title: "Trusted by Agartala ❤️",
      test1_txt: "“BhaloGo delivered my father's medicine at 10:30 PM. Lifesaver! Highly recommend.”",
      test1_auth: "- Anita Deb, Arundhutinagar",
      test2_txt: "“Fresh groceries and super fast. Best hyperlocal service in Agartala.”",
      test2_auth: "- Rohan Das, Banikya",
      test3_txt: "“Their WhatsApp ordering is so smooth. Medicine arrived in 45 mins.”",
      test3_auth: "- Srijita Paul, Battala",
      coverage_title: "We Deliver Across Agartala",
      coverage_note: "More areas coming soon — we're expanding!",
      partner_title: "Are you a local pharmacy or store?",
      partner_sub: "Partner with BhaloGo and reach more customers. Join Agartala's fastest delivery network.",
      partner_wa: "Contact via WhatsApp",
      partner_form_btn: "Fill Partner Form",
      form_title: "Partner Registration",
      form_pharmacy: "Pharmacy",
      form_store: "Grocery / General Store",
      form_btn: "Submit via WhatsApp",
      popup_txt: "Need medicines or groceries? Order now!",
      popup_btn: "Order Now",
      placeholder_biz: "Business Name",
      placeholder_owner: "Owner Name",
      placeholder_phone: "Phone Number",
      placeholder_addr: "Address (Agartala area)"
    },
    bn: {
      lang_btn: "English",
      location_tag: "আগরতলা",
      hero_title: "<span>প্রয়োজনীয় জিনিসপত্র</span><br>৬০ মিনিটে ডেলিভারি",
      hero_desc: "ওষুধ, মুদিখানা এবং জরুরি জিনিসপত্র — আপনার দোরগোড়ায়। আগরতলার ১০০+ পরিবারের বিশ্বস্ত।",
      wa_order: "হোয়াটসঅ্যাপে অর্ডার করুন",
      call_now: "এখনই কল করুন",
      trust_secure: "১০০% নিরাপদ",
      trust_60min: "৬০-মিনিটে ডেলিভারি",
      trust_local: "স্থানীয় ফার্মেসি",
      quick_bar_text: "<strong>কয়েক সেকেন্ডে অর্ডার করুন</strong> — শুধু হোয়াটসঅ্যাপ বা কল করুন!",
      call_urgent: "জরুরি কলের জন্য",
      services_title: "আমরা যা ডেলিভারি করি",
      services_sub: "দ্রুত, নির্ভরযোগ্য এবং সর্বদা তাজা — স্থানীয় দোকান থেকে আপনার বাড়িতে",
      srv1_title: "জরুরি ওষুধ",
      srv1_desc: "প্রেসক্রিপশন বা সাধারণ ওষুধ, ৬০ মিনিটে পেয়ে যান। আমরা বিশ্বস্ত ফার্মেসির সাথে কাজ করি।",
      srv2_title: "মুদিখানার জিনিসপত্র",
      srv2_desc: "দুধ, রুটি, ডিম, শাকসবজি — প্রতিদিনের প্রয়োজনীয় জিনিস তাজা পৌঁছে দেওয়া হয়।",
      srv3_title: "শিশু ও ব্যক্তিগত যত্ন",
      srv3_desc: "ডায়াপার, শিশুর খাবার, স্বাস্থ্যবিধি পণ্য এবং ব্যক্তিগত যত্নের আইটেমগুলি অবিলম্বে বিতরণ করা হয়।",
      night_note: "🌙 <strong>রাতের এবং জরুরি ডেলিভারি:</strong> চিকিৎসা সংক্রান্ত জরুরি অবস্থার জন্য ২৪/৭ সহায়তা। আমরা মাঝরাতেও শুধুমাত্র একটি কল দূরে।",
      how_title: "BhaloGo কীভাবে কাজ করে",
      step1_title: "তালিকা / প্রেসক্রিপশন পাঠান",
      step1_desc: "আপনার অর্ডারটি হোয়াটসঅ্যাপে শেয়ার করুন বা আমাদের কল করুন",
      step2_title: "আমরা অবিলম্বে নিশ্চিত করি",
      step2_desc: "রিয়েল-টাইম কনফার্মেশন এবং ডেলিভারির আনুমানিক সময়",
      step3_title: "৬০ মিনিটে ডেলিভারি",
      step3_desc: "আপনার দোরগোড়ায় কন্ট্যাক্টলেস ডেলিভারি",
      trust_title: "আগরতলার বিশ্বস্ত ❤️",
      test1_txt: "“BhaloGo আমার বাবার ওষুধ রাত ১০:৩০ টায় পৌঁছে দিয়েছে। জীবন রক্ষাকারী! অত্যন্ত সুপারিশ করছি।”",
      test1_auth: "- অনিতা দেব, অরুন্ধুতিনগর",
      test2_txt: "“তাজা মুদিখানা এবং অত্যন্ত দ্রুত। আগরতলার সেরা লোকাল সার্ভিস।”",
      test2_auth: "- রোহন দাস, বণিক্য",
      test3_txt: "“তাদের হোয়াটসঅ্যাপ অর্ডারিং খুব সহজ। ৪৫ মিনিটে ওষুধ চলে এসেছে।”",
      test3_auth: "- সৃজিতা পাল, বটতলা",
      coverage_title: "আমরা আগরতলা জুড়ে ডেলিভারি করি",
      coverage_note: "আরও এলাকা শীঘ্রই আসছে — আমরা সম্প্রসারণ করছি!",
      partner_title: "আপনি কি স্থানীয় ফার্মেসি বা দোকানদার?",
      partner_sub: "BhaloGo এর সাথে যুক্ত হন এবং আরও গ্রাহকের কাছে পৌঁছান। আগরতলার দ্রুততম ডেলিভারি নেটওয়ার্কে যোগ দিন।",
      partner_wa: "হোয়াটসঅ্যাপে যোগাযোগ করুন",
      partner_form_btn: "পার্টনার ফর্ম পূরণ করুন",
      form_title: "পার্টনার রেজিস্ট্রেশন",
      form_pharmacy: "ফার্মেসি",
      form_store: "মুদি / সাধারণ স্টোর",
      form_btn: "হোয়াটসঅ্যাপে সাবমিট করুন",
      popup_txt: "ওষুধ বা মুদিখানা দরকার? এখনই অর্ডার করুন!",
      popup_btn: "অর্ডার করুন",
      placeholder_biz: "ব্যবসার নাম",
      placeholder_owner: "মালিকের নাম",
      placeholder_phone: "ফোন নম্বর",
      placeholder_addr: "ঠিকানা (আগরতলা এলাকা)"
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
    document.querySelectorAll('[data-placeholder-i18n]').forEach(el => {
      const key = el.getAttribute('data-placeholder-i18n');
      if (translations[lang][key]) {
        el.placeholder = translations[lang][key];
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
    });
  }


  // --- 2. Custom Cursor Logic ---
  const cursorDot = document.querySelector('.cursor-dot');
  const cursorRing = document.querySelector('.cursor-ring');
  
  if (cursorDot && cursorRing) {
    window.addEventListener('mousemove', (e) => {
      requestAnimationFrame(() => {
        cursorDot.style.left = `${e.clientX}px`;
        cursorDot.style.top = `${e.clientY}px`;
        setTimeout(() => {
          cursorRing.style.left = `${e.clientX}px`;
          cursorRing.style.top = `${e.clientY}px`;
        }, 50);
      });
    });

    const interactives = document.querySelectorAll('a, button, input, textarea, label, .service-card, .step-card');
    interactives.forEach(el => {
      el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });
  }


  // --- 3. Theme Management ---
  const themeToggle = document.getElementById('themeToggle');
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  
  themeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark-mode');
    const isDark = document.documentElement.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    if (metaThemeColor) metaThemeColor.setAttribute('content', isDark ? '#121212' : '#0D5C3C');
  });


  // --- 4. Premium Scroll Animations ---
  const animElements = document.querySelectorAll('.js-anim');
  const animObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = el.dataset.delay || 0;
        const transformType = el.dataset.transform || 'translateY(50px)';
        
        el.style.visibility = 'visible';
        el.animate([
          { opacity: 0, transform: transformType },
          { opacity: 1, transform: 'translate(0,0) scale(1)' }
        ], {
          duration: 900,
          delay: Number(delay),
          easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          fill: 'forwards'
        });
        observer.unobserve(el);
      }
    });
  }, { root: null, rootMargin: '0px 0px -5% 0px', threshold: 0.1 });

  animElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = el.dataset.transform || 'translateY(50px)';
    animObserver.observe(el);
  });


  // --- 5. WhatsApp & Popup Logic ---
  const PHONE = "917439071619";
  function openWA(msg) { window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`, '_blank'); }

  document.querySelectorAll('.trigger-wa-order').forEach(btn => {
    btn.addEventListener('click', (e) => { 
      e.preventDefault(); 
      openWA("Hi BhaloGo! I need delivery in Agartala. Please share order details."); 
    });
  });

  const popup = document.getElementById('orderPopup');
  const popupBtn = document.getElementById('popupOrderBtn');
  
  if(popup) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        popup.classList.add('show');
      } else {
        popup.classList.remove('show');
      }
    });

    if(popupBtn) {
      popupBtn.addEventListener('click', () => {
        openWA("Hi BhaloGo, I want to place an order right now.");
        popup.classList.remove('show');
      });
    }
  }


  // --- 6. Partner Form Expansion & Submission ---
  const toggleBtn = document.getElementById('toggleFormBtn');
  const formContainer = document.getElementById('partnerFormContainer');
  
  if(toggleBtn && formContainer) {
    toggleBtn.addEventListener('click', () => {
      const isVisible = formContainer.style.display === 'block';
      if(!isVisible) {
        formContainer.style.display = 'block';
        formContainer.animate([
          {opacity: 0, transform: 'translateY(-20px) scale(0.95)'}, 
          {opacity: 1, transform: 'translateY(0) scale(1)'}
        ], {duration: 500, easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'});
        toggleBtn.innerHTML = '<i class="fas fa-times"></i> <span data-i18n="partner_form_btn">Hide Form</span>';
      } else {
        formContainer.style.display = 'none';
        toggleBtn.innerHTML = '<i class="fas fa-file-alt"></i> <span data-i18n="partner_form_btn">Fill Partner Form</span>';
        applyLanguage(currentLang); // Re-apply text inside button just in case
      }
    });
  }

  const partnerForm = document.getElementById('partnerForm');
  if(partnerForm) {
    partnerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const type = document.querySelector('input[name="businessType"]:checked')?.value || 'Store';
      const name = document.getElementById('businessName').value.trim();
      const owner = document.getElementById('ownerName').value.trim();
      const phone = document.getElementById('businessPhone').value.trim();
      const addr = document.getElementById('businessAddress').value.trim();
      
      const feedback = document.getElementById('partnerFormFeedback');
      const submitBtn = document.getElementById('submitPartnerFormBtn');
      const originalHtml = submitBtn.innerHTML;
      
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Preparing...';

      const msg = `🏥 *New Partner Request* 🏥\n\n*Type:* ${type}\n*Business:* ${name}\n*Owner:* ${owner}\n*Phone:* ${phone}\n*Address:* ${addr || 'Not provided'}`;
      
      setTimeout(() => {
        openWA(msg);
        submitBtn.innerHTML = originalHtml;
        feedback.style.color = '#2ecc71';
        feedback.innerHTML = "✅ Request ready! Please send via WhatsApp.";
        
        setTimeout(() => { 
          formContainer.style.display = 'none'; 
          toggleBtn.innerHTML = '<i class="fas fa-file-alt"></i> <span data-i18n="partner_form_btn">Fill Partner Form</span>';
          applyLanguage(currentLang);
          feedback.innerHTML = '';
          partnerForm.reset();
        }, 4000);
      }, 500);
    });
  }
});
