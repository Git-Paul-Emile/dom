/* LOVE MESSAGES MODAL */
(function() {
  const loveMessages = [
    "Mon amour pour toi est plus grand que l'océan, plus profond que le ciel, et plus éternel que le temps.",
    "Chaque battement de mon cœur murmure ton nom, chaque souffle est une prière pour notre amour éternel.",
    "Tu es la mélodie de mes jours, la lumière de mes nuits, et la raison de chaque sourire sur mes lèvres.",
    "Dans tes yeux, j'ai trouvé mon univers. Dans ton cœur, j'ai trouvé ma maison. En toi, j'ai trouvé tout.",
    "Si l'amour était une étoile, tu serais la plus brillante de ma galaxie, illuminant chaque recoin de mon âme.",
    "Avec toi, chaque instant devient un trésor, chaque jour une aventure, chaque moment une éternité de bonheur.",
    "Tu es mon premier regard au réveil, ma dernière pensée le soir, et toutes celles entre les deux.",
    "Notre amour est une histoire sans fin que j'écris chaque jour dans mon cœur, page après page de bonheur.",
    "Tu es la rose la plus belle dans le jardin de ma vie, ton parfum d'amour enivre mon existence.",
    "Je t'aime aujourd'hui, je t'aimerai demain, et pour tous les jours qui suivront jusqu'à l'infini."
  ];

  const modal = document.getElementById('loveModal');
  const messageEl = document.getElementById('loveModalMessage');
  const closeBtn = document.getElementById('loveModalClose');
  const overlay = document.getElementById('loveModalOverlay');

  function showLoveModal() {
    const randomIndex = Math.floor(Math.random() * loveMessages.length);
    messageEl.textContent = loveMessages[randomIndex];
    modal.classList.add('active');
  }

  function closeLoveModal() {
    modal.classList.remove('active');
  }

  if (modal && messageEl && closeBtn) {
    // Show modal on page load
    setTimeout(showLoveModal, 800);

    // Close on button click
    closeBtn.addEventListener('click', closeLoveModal);

    // Close on overlay click
    if (overlay) {
      overlay.addEventListener('click', closeLoveModal);
    }

    // Close on Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeLoveModal();
      }
    });
  }
})();

/* DYNAMIC PHOTOS DATA */
const photosData = {
  gallery1: [
    { src: 'media/IMG-20191113-WA0005.jpg', caption: 'Le jour où tout a commencé...' },
    { src: 'media/20210513_140851.jpg', caption: 'Ce sourire qui illumine tout mon univers' },
    { src: 'media/gracita_lee_20220515_p_2838877055812340840_1_2838877055812340840.jpg', caption: 'Ensemble, chaque chemin devient une aventure' },
    { src: 'media/IMG-20200621-WA0008.jpg', caption: 'Ces moments où le monde n\'existait plus que pour nous' },
    { src: 'media/WhatsApp Image 2024-09-28 à 22.57.13_64713b2c.jpg', caption: 'Deux âmes, un seul rythme' },
    { src: 'media/IMG-20240601-WA0004.jpg', caption: 'Ton rire est ma mélodie préférée' }
  ],
  gallery2: [
    { src: 'media/20210413_221333.jpg', caption: 'Un moment de bonheur' },
    { src: 'media/gracita_lee_20210127_9.png', caption: 'Un moment de bonheur' },
    { src: 'media/gracita_lee_20220730_p_2893884076579097262_1_2893884076579097262.jpg', caption: 'Un moment de bonheur' },
    { src: 'media/IMG-20191206-WA0048.jpg', caption: 'Un moment de bonheur' },
    { src: 'media/IMG-20191206-WA0062.jpg', caption: 'Un moment de bonheur' },
    { src: 'media/IMG-20200120-WA0000.jpg', caption: 'Un moment de bonheur' },
    { src: 'media/IMG-20200303-WA0066.jpg', caption: 'Un moment de bonheur' },
    { src: 'media/IMG-20200303-WA0083.jpg', caption: 'Un moment de bonheur' },
    { src: 'media/IMG-20200621-WA0009.jpg', caption: 'Un moment de bonheur' }
  ],
  gallery3: [
    { src: 'media/IMG-20200621-WA0011.jpg', caption: 'Un moment de bonheur' },
    { src: 'media/IMG-20210606-WA0040.jpg', caption: 'Un moment de bonheur' },
    { src: 'media/IMG-20240601-WA0002.jpg', caption: 'Un moment de bonheur' },
    { src: 'media/IMG-20240601-WA0003.jpg', caption: 'Un moment de bonheur' },
    { src: 'media/IMG-20240601-WA0005.jpg', caption: 'Un moment de bonheur' },
    { src: 'media/Screenshot_20210913-211544_WhatsApp.jpg', caption: 'Un moment de bonheur' },
    { src: 'media/Screenshot_20220210-013716_WhatsApp.jpg', caption: 'Un moment de bonheur' }
  ],
  gallery4: [
    { src: 'media/WhatsApp Image 2024-09-28 à 22.57.12_ac0661fa.jpg', caption: 'Un moment de bonheur' },
    { src: 'media/WhatsApp Image 2026-02-11 at 08.06.08.jpeg', caption: 'Un moment de bonheur' }
  ]
};

/* LOAD DYNAMIC PHOTOS */
(function() {
  function createPhotoCard(photo, delay) {
    const card = document.createElement('div');
    card.className = 'photo-card reveal';
    card.style.transitionDelay = delay + 's';
    
    const img = document.createElement('img');
    img.src = photo.src;
    img.alt = 'Photo souvenir';
    img.loading = 'lazy';
    img.decoding = 'async';
    
    card.appendChild(img);
    
    return card;
  }
  
  function loadGallery(galleryId, photos) {
    const grid = document.getElementById(galleryId + '-grid');
    if (!grid) return;
    
    photos.forEach(function(photo, index) {
      const delay = 0.1 + (index * 0.1);
      const card = createPhotoCard(photo, delay);
      grid.appendChild(card);
    });
  }
  
  // Load all galleries
  Object.keys(photosData).forEach(function(galleryId) {
    loadGallery(galleryId, photosData[galleryId]);
  });
})();

/* VIDEO BACKGROUND - Auto play multiple videos every 3 seconds */
(function() {
  const videos = [
    'media/VID-20240528-WA0008.mp4',
    'media/VID-20240601-WA0006.mp4',
    'media/VID-20210606-WA0042.mp4',
    'media/WhatsApp Video 2026-02-11 at 08.06.12.mp4',
    'media/44c79c68266544e1a22ebedc4c158589_1734205514948.mp4',
    'media/94bcf0aba9c64a3c9ddc3d09b6ce8e5d_1734205536539.mp4',
    'media/WhatsApp Vidéo 2024-09-28 à 22.57.11_29dfe73f.mp4'
  ];
  
  const bgVideo = document.getElementById('bgVideo');
  let currentVideoIndex = 0;
  
  if (bgVideo) {
    // Change video every 3 seconds
    setInterval(function() {
      currentVideoIndex = (currentVideoIndex + 1) % videos.length;
      bgVideo.src = videos[currentVideoIndex];
      bgVideo.play();
    }, 3000);
  }
})();

/* GENERATE FLOATING HEARTS */
(function() {
  const container = document.getElementById('heartsBg');
  for (let i = 0; i < 25; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = '♥';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.fontSize = (8 + Math.random() * 22) + 'px';
    heart.style.setProperty('--dur', (8 + Math.random() * 14) + 's');
    heart.style.setProperty('--delay', (Math.random() * -20) + 's');
    container.appendChild(heart);
  }
})();

/* RAINING HEARTS EFFECT */
(function() {
  const container = document.getElementById('heartsBg');
  const heartSymbols = ['♥', '❤', '💕', '💗', '💖', '💘', '💝'];
  const colors = [
    'rgba(233,30,99,0.6)',
    'rgba(233,30,99,0.4)',
    'rgba(248,204,216,0.5)',
    'rgba(255,105,180,0.5)',
    'rgba(255,182,193,0.4)',
    'rgba(219,112,147,0.5)'
  ];
  
  function createRainHeart() {
    const heart = document.createElement('div');
    heart.className = 'rain-heart';
    
    // Symbole aléatoire
    heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
    
    // Position horizontale aléatoire
    heart.style.left = Math.random() * 100 + '%';
    heart.style.top = '-50px';
    
    // Taille aléatoire
    const size = 12 + Math.random() * 28;
    heart.style.fontSize = size + 'px';
    
    // Couleur aléatoire
    heart.style.color = colors[Math.floor(Math.random() * colors.length)];
    
    // Durée de chute aléatoire
    const duration = 4 + Math.random() * 6;
    heart.style.setProperty('--rain-dur', duration + 's');
    
    // Délai aléatoire pour l'oscillation
    heart.style.setProperty('--sway-delay', (Math.random() * 2) + 's');
    
    // Opacité aléatoire
    heart.style.setProperty('--heart-opacity', 0.3 + Math.random() * 0.5);
    
    container.appendChild(heart);
    
    // Supprimer le cœur après l'animation
    setTimeout(function() {
      if (heart.parentNode) {
        heart.remove();
      }
    }, duration * 1000 + 500);
  }
  
  // Créer des cœurs initiaux
  for (let i = 0; i < 15; i++) {
    setTimeout(createRainHeart, Math.random() * 2000);
  }
  
  // Continuer à créer des cœurs en pluie
  setInterval(createRainHeart, 300);
})();

/* HERO PARTICLES */
(function() {
  const container = document.getElementById('heroParticles');
  for (let i = 0; i < 50; i++) {
    const dot = document.createElement('div');
    dot.className = 'dot';
    dot.style.left = Math.random() * 100 + '%';
    dot.style.top = Math.random() * 100 + '%';
    dot.style.setProperty('--size', (1 + Math.random() * 3) + 'px');
    dot.style.setProperty('--dur', (2 + Math.random() * 5) + 's');
    dot.style.setProperty('--delay', (Math.random() * -6) + 's');
    container.appendChild(dot);
  }
})();

/* SPARKLE ON CLICK */
document.addEventListener('click', function(e) {
  for (let i = 0; i < 7; i++) {
    const spark = document.createElement('div');
    spark.className = 'sparkle';
    const angle = (i * 360 / 7 + Math.random() * 30) * Math.PI / 180;
    const dist = 25 + Math.random() * 45;
    const size = 3 + Math.random() * 5;
    spark.style.left = e.clientX + 'px';
    spark.style.top = e.clientY + 'px';
    spark.style.width = size + 'px';
    spark.style.height = size + 'px';
    spark.style.background = `hsl(${340 + Math.random() * 40}, 85%, 65%)`;
    spark.style.setProperty('--tx', Math.cos(angle) * dist + 'px');
    spark.style.setProperty('--ty', Math.sin(angle) * dist + 'px');
    document.body.appendChild(spark);
    setTimeout(() => spark.remove(), 700);
  }
});

/* PARALLAX ON SCROLL */
(function() {
  const heroBg = document.getElementById('heroBg');
  const strips = document.querySelectorAll('[data-parallax]');

  function onScroll() {
    const scrollY = window.scrollY;

    // Hero parallax
    if (heroBg) {
      heroBg.style.transform = 'translateY(' + (scrollY * 0.35) + 'px)';
    }

    // Parallax strips
    strips.forEach(function(strip) {
      const rect = strip.parentElement.getBoundingClientRect();
      const speed = parseFloat(strip.dataset.parallax) || 0.3;
      const offset = rect.top * speed;
      strip.style.transform = 'translateY(' + offset + 'px)';
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* SCROLL REVEAL */
(function() {
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  // Initial observation
  document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(function(el) {
    observer.observe(el);
  });
  
  // Re-observe dynamically added elements
  setTimeout(function() {
    document.querySelectorAll('.photo-card.reveal').forEach(function(el) {
      if (!el.classList.contains('visible')) {
        observer.observe(el);
      }
    });
  }, 100);
})();

/* SCROLL TO TOP BUTTON */
(function() {
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  
  if (scrollTopBtn) {
    // Show/hide button based on scroll position
    function toggleScrollBtn() {
      if (window.scrollY > 400) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    }
    
    // Scroll to top on click
    scrollTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
    
    window.addEventListener('scroll', toggleScrollBtn, { passive: true });
    toggleScrollBtn();
  }
})();
