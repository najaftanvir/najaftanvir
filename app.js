const play = id => `https://play.google.com/store/apps/details?id=${id}`;
const projects = [{
  id: 'rv',
  publisher: 'STV Games',
  title: 'RV Camper',
  category: 'simulation',
  platform: 'ANDROID',
  kind: 'DRIVING / SIMULATION',
  desc: 'Mobile gameplay development.',
  image: 'rv-9.jpg',
  contribution: ['Unity gameplay development for the RV simulation project'],
  summary: 'A mobile RV driving project. My contribution was in Unity game development.',
  tech: 'Unity · C# · Android',
  links: [
    ['GOOGLE PLAY', play('com.trends.games.runto.escape.survival.games')]
  ],
  credit: 'Store artwork: RV Camper:Long Drive Simulator.'
}, {
  id: 'cruise',
  publisher: 'Turbo Games LTD',
  title: 'Epic Cruise Ship Transport Sim',
  category: 'simulation',
  platform: 'iOS',
  kind: 'SHIP / SIMULATION',
  desc: 'Unity development for a ship simulation game.',
  image: 'cruise-screen-0.jpg',
  contribution: ['Gameplay development on the cruise ship simulation project'],
  summary: 'A mobile cruise ship simulation project I worked on in Unity.',
  tech: 'Unity · C# · iOS',
  links: [
    ['APP STORE', 'https://apps.apple.com/us/app/epic-cruise-ship-transport-sim/id6738037992']
  ],
  credit: 'Store artwork: Epic Cruise Ship Transport Sim.'
}, {
  id: 'hills',
  publisher: 'GAME METRIX',
  title: 'Over the Hills 4x4',
  category: 'simulation',
  platform: 'ANDROID',
  kind: 'OFF-ROAD / EXPLORATION',
  desc: 'Vehicle recovery, missions and exploration.',
  image: 'hills-artwork.jpg',
  fallback: 'hills',
  contribution: ['RCC vehicle controls and health/repair flow',
    'Winch recovery and tree selection', 'Photo camera, album and wildlife photography',
    'Mission progression, tutorials and HNS map integration'
  ],
  summary: 'An off-road mobile project built around driving, exploring and recovering your vehicle. I worked on the gameplay systems that connect those experiences.',
  tech: 'Unity · C# · RCC · DOTween · HNS',
  links: [
    ['GOOGLE PLAY', play('com.gamemetrix.overthehill.offroad.games')]
  ],
  credit: 'Artwork from the linked Google Play listing, currently titled Mountain Trail Drive Adventure.'
}, {
  id: 'hunt',
  publisher: 'Turbo Games LTD',
  title: 'Wild Life Hunting Simulator',
  category: 'action',
  platform: 'iOS',
  kind: 'WILDLIFE / HUNTING',
  desc: 'Unity gameplay development.',
  image: 'hunt-screen-0.jpg',
  contribution: ['Unity gameplay development for the wildlife hunting project'],
  summary: 'A wildlife hunting simulation project in my mobile game development work.',
  tech: 'Unity · C# · iOS',
  links: [
    ['APP STORE', 'https://apps.apple.com/us/app/wild-life-hunting-simulator/id6778712366']
  ],
  credit: 'Store screenshot: Wild Life Hunting Simulator.'
}, {
  id: 'animal',
  publisher: 'Game Bus',
  title: 'Wild Animal Life Simulator',
  category: 'simulation',
  platform: 'ANDROID',
  kind: 'WILDLIFE / SURVIVAL',
  desc: 'Animal controls, AI and survival systems.',
  image: 'animal-9.jpg',
  contribution: ['Animal controller and AI behaviour', 'Health, stamina, eating and drinking',
    'XP, map and gameplay UI'
  ],
  summary: 'A wildlife simulation project with animal movement and survival gameplay. I worked on the controller, AI and the systems around player survival and progression.',
  tech: 'Unity · C# · AI · Gameplay UI',
  links: [
    ['GOOGLE PLAY', play('com.gamebus.wild.animal.life.simulator')]
  ],
  credit: 'Store screenshot: Wild Animal Life Simulator.'
}, {
  id: 'prison',
  publisher: 'Game Bus · Turbo Games LTD',
  title: 'Prison Break Escape',
  category: 'action',
  platform: 'ANDROID + iOS',
  kind: 'ESCAPE',
  desc: 'My contribution: the second game mode.',
  image: 'prison-2.jpg',
  contribution: ['Development work on Mode 2'],
  summary: 'I worked on the second mode of this prison escape project. My contribution is specifically Mode 2; the first mode was developed separately.',
  tech: 'Unity · C# · Game modes',
  links: [
    ['GOOGLE PLAY', play('com.gamebus.prisonescape3d.games')],
    ['APP STORE', 'https://apps.apple.com/us/app/prison-break-escape-games/id6740860972']
  ],
  credit: 'Overall app artwork from the App Store; not a screenshot of my Mode 2 contribution.'
}, {
  id: 'grass',
  publisher: 'PlayVex',
  title: 'Grass Cutting',
  category: 'simulation',
  platform: 'ANDROID + iOS',
  kind: 'CUTTING / SIMULATION',
  desc: 'Grass-cutting gameplay and mobile controls.',
  image: 'grass-0.jpg',
  contribution: ['Grass-cutting gameplay development', 'Controller and interaction work',
    'Android and iOS project work'
  ],
  summary: 'A grass-cutting game I worked on for Android and iOS, including the gameplay and controls.',
  tech: 'Unity · C# · Mobile controls',
  links: [
    ['GOOGLE PLAY', play('com.playvex.grass.cutter.farming.simulator')]
  ],
  credit: 'Store artwork: Grass Cutter Farming Sim. Android listing shown.'
}, {
  id: 'zombie',
  publisher: 'Gaming Culture',
  title: 'Lockdown Zombies Shooter',
  category: 'action',
  platform: 'ANDROID + iOS',
  kind: 'ACTION / SHOOTER',
  desc: 'Unity gameplay development.',
  image: 'zombie-9.jpg',
  contribution: ['Unity gameplay development for the zombie shooter project'],
  summary: 'A mobile zombie-shooter project in my commercial game development work.',
  tech: 'Unity · C# · Android / iOS',
  links: [
    ['GOOGLE PLAY', play('com.gc.lockdown.zombies.shooter.games')]
  ],
  credit: 'Store screenshot: Lockdown Zombies Shooter.'
}, ];
const storeIcon = name => name === 'GOOGLE PLAY' ?
  `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#58c9fa" d="M3 2.5v19L13.5 12z"/><path fill="#57d88a" d="M3 2.5L16.8 9.9 13.5 12z"/><path fill="#ffcf55" d="M16.8 9.9l3.5 1.9c.3.2.3.4 0 .6l-3.5 1.9L13.5 12z"/><path fill="#ff6b7a" d="M3 21.5l13.8-7.2L13.5 12z"/></svg>` :
  `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M17.1 12.5c0-2 1.6-3 1.7-3.1-1-1.5-2.5-1.7-3-1.7-1.3-.2-2.6.8-3.3.8-.7 0-1.8-.8-2.9-.8-1.5 0-2.9.9-3.7 2.2-1.6 2.8-.4 6.9 1.2 9.2.8 1.1 1.6 2.2 2.8 2.2 1.1-.1 1.5-.7 2.9-.7 1.3 0 1.7.7 2.9.7 1.2 0 2-1.1 2.7-2.2.9-1.3 1.3-2.5 1.3-2.6-.1 0-2.6-1-2.6-4zM14.9 6.2c.6-.8 1-1.9.9-3-.9 0-2 .6-2.7 1.4-.6.7-1.2 1.8-1 2.9 1 .1 2.1-.5 2.8-1.3z"/></svg>`;
const grid = document.querySelector('#project-grid'),
  dialog = document.querySelector('#project-dialog'),
  content = document.querySelector('#dialog-content');
let lastFocus = null;

function render(filter = 'all') {
  grid.innerHTML = projects.filter(p => filter === 'all' || p.category === filter).map(p =>
    `<article class="project reveal"><a class="project-visual" href="${p.links[0][1]}" target="_blank" rel="noopener" aria-label="Open ${p.title} store listing"><span class="project-number">${String(projects.indexOf(p)+1).padStart(2,'0')}</span><img src="assets/${p.image}" alt="${p.title} store artwork" loading="lazy"><span class="project-arrow">↗</span></a><div class="project-meta"><span>${p.kind}</span><span>${p.platform}</span></div><h3>${p.title}</h3><p class="project-publisher">STORE PUBLISHER / ${p.publisher}</p><div class="project-links">${p.links.map(([name,url])=>`<a class="store-icon" href="${url}" target="_blank" rel="noopener" aria-label="${name==='GOOGLE PLAY'?'Open on Google Play':'Open on the App Store'}" title="${name==='GOOGLE PLAY'?'Google Play':'App Store'}">${storeIcon(name)}</a>`).join('')}</div>${p.id==='prison'?'<p class="project-note">Worked on the second gameplay.</p>':''}</article>`
    ).join('');
  observe();
}
const observer = new IntersectionObserver(entries => entries.forEach(e => {
  if (e.isIntersecting) {
    e.target.classList.add('visible');
    observer.unobserve(e.target)
  }
}), {
  threshold: .08
});

function observe() {
  document.querySelectorAll('.reveal:not(.visible)').forEach(e => observer.observe(e))
}
render();
document.addEventListener('click', e => {
  const f = e.target.closest('[data-filter]');
  if (f) {
    document.querySelectorAll('[data-filter]').forEach(x => x.classList.toggle('active', x ===
      f));
    render(f.dataset.filter)
  }
});
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', e => {
  if (e.target === dialog) {
    const r = dialog.getBoundingClientRect();
    if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom)
      dialog.close()
  }
});
dialog.addEventListener('close', () => {
  document.body.classList.remove('modal-open');
  lastFocus?.focus()
});
document.querySelector('#logic-gallery-button').addEventListener('click', () => {
  lastFocus = document.activeElement;
  content.innerHTML =
    `<div class="detail-body"><div class="eyebrow">LOGIC LAND / ACTUAL GAME SCREENS</div><h2>Logic Land</h2><p>An Android educational puzzle game created for our final-year team project at LCWU. My development work included puzzles, character selection, hints, level progression, UI and story animations.</p></div><div class="screens">${[['fyp-7-image17.jpeg','Home screen'],['fyp-17-image27.jpeg','Hint screen'],['fyp-24-image33.jpeg','Level complete screen']].map(([f,a])=>`<img src="assets/${f}" alt="Logic Land ${a}">`).join('')}</div>`;
  dialog.showModal();
  document.body.classList.add('modal-open')
});
const menu = document.querySelector('.mobile-menu');
menu.addEventListener('click', () => {
  const open = document.querySelector('nav').classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? 'Close menu' : 'Open menu')
});
document.querySelectorAll('nav a').forEach(a => a.addEventListener('click', () => {
  document.querySelector('nav').classList.remove('open');
  menu.setAttribute('aria-expanded', 'false')
}));
document.querySelector('#year').textContent = new Date().getFullYear();
const progress = document.querySelector('.scroll-progress');
addEventListener('scroll', () => {
  const h = document.documentElement.scrollHeight - innerHeight;
  progress.style.width = (h ? scrollY / h * 100 : 0) + '%'
}, {
  passive: true
});
if (matchMedia('(hover:hover) and (pointer:fine)').matches && !matchMedia('(prefers-reduced-motion:reduce)')
  .matches) {
  const cursor = document.querySelector('.cursor'),
    dot = document.querySelector('.cursor-dot'),
    canvas = document.querySelector('#particles'),
    ctx = canvas.getContext('2d');
  let px = innerWidth / 2,
    py = innerHeight / 2,
    cx = px,
    cy = py,
    seen = false,
    particles = [],
    last = 0;

  function resize() {
    canvas.width = innerWidth;
    canvas.height = innerHeight
  }
  resize();
  addEventListener('resize', resize);
  addEventListener('pointermove', e => {
    if (e.pointerType !== 'mouse') return;
    px = e.clientX;
    py = e.clientY;
    if (!seen) {
      cx = px;
      cy = py;
      seen = true;
      document.body.classList.add('cursor-ready');
      cursor.style.opacity = dot.style.opacity = '1'
    }
    if (performance.now() - last > 30) {
      particles.push({
        x: px,
        y: py,
        life: 1,
        vx: (Math.random() - .5) * 1.5,
        vy: Math.random() * 1.1
      });
      last = performance.now()
    }
    cursor.classList.toggle('hover', !!e.target.closest('a,button'))
  }, {
    passive: true
  });
  document.addEventListener('pointerleave', () => {
    cursor.style.opacity = dot.style.opacity = '0';
    document.body.classList.remove('cursor-ready');
    seen = false
  });

  function animate() {
    cx += (px - cx) * .15;
    cy += (py - cy) * .15;
    cursor.style.left = cx + 'px';
    cursor.style.top = cy + 'px';
    dot.style.left = px + 'px';
    dot.style.top = py + 'px';
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles = particles.filter(p => p.life > 0);
    particles.forEach(p => {
      p.life -= .04;
      p.x += p.vx;
      p.y += p.vy;
      ctx.fillStyle = `rgba(174,120,255,${p.life*.65})`;
      ctx.fillRect(p.x, p.y, 2, 2)
    });
    requestAnimationFrame(animate)
  }
  animate();
}

// Pointer lighting and subtle perspective on commercial game cards.
if (matchMedia('(pointer:fine)').matches && !matchMedia('(prefers-reduced-motion:reduce)')
  .matches) {
  grid.addEventListener('pointermove', e => {
    const card = e.target.closest('.project');
    if (!card) return;
    const r = card.getBoundingClientRect(),
      x = (e.clientX - r.left) / r.width,
      y = (e.clientY - r.top) / r.height;
    card.style.setProperty('--pointer-x', `${x*100}%`);
    card.style.setProperty('--pointer-y', `${y*100}%`);
    card.style.setProperty('--tilt-x', `${(0.5-y)*5}deg`);
    card.style.setProperty('--tilt-y', `${(x-0.5)*5}deg`)
  });
  grid.addEventListener('pointerout', e => {
    const card = e.target.closest('.project');
    if (card && !card.contains(e.relatedTarget)) {
      card.style.setProperty('--tilt-x', '0deg');
      card.style.setProperty('--tilt-y', '0deg')
    }
  });
}

const portraitSwitch = document.querySelector('.portrait-switch');
portraitSwitch.addEventListener('click', () => {
  const changed = portraitSwitch.classList.toggle('is-alternate');
  portraitSwitch.setAttribute('aria-pressed', String(changed))
});
portraitSwitch.addEventListener('pointerleave', () => {
  if (matchMedia('(hover:hover) and (pointer:fine)').matches) {
    portraitSwitch.classList.remove('is-alternate');
    portraitSwitch.setAttribute('aria-pressed', 'false')
  }
});

document.querySelectorAll('.hero-mascot').forEach(hero => hero.addEventListener('click', () => {
  hero.classList.add('is-active');
  setTimeout(() => hero.classList.remove('is-active'), 1800)
}));

// Touch feedback stays brief and never follows the finger while scrolling.
if (!matchMedia('(prefers-reduced-motion:reduce)').matches) {
  document.addEventListener('pointerup', e => {
    if (e.pointerType !== 'touch') return;
    const target = e.target.closest('a, button, .portrait-switch, .hero-mascot');
    if (!target) return;
    const glow = document.createElement('span');
    glow.className = 'mobile-tap-glow';
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
    document.body.appendChild(glow);
    glow.addEventListener('animationend', () => glow.remove(), { once: true });
  }, { passive: true });
}
