/* =============================================
   ARPIT BALA — Official Website JavaScript
   Designed & Built by Chirag
   ============================================= */

// ══════════════════════════════════════════════
// DATA
// ══════════════════════════════════════════════

const SONGS = [
  { title: "bargad",            year: 2022, dur: "3:42", color: "#1e3d1c", ytId: "WiPWRlP3KDs", label: "BRG" },
  { title: "Maharani",          year: 2021, dur: "3:15", color: "#5a1a55", ytId: "q0bvLKqjj2s", label: "MHR" },
  { title: "Anveshna",          year: 2022, dur: "3:58", color: "#6a3000", ytId: "Bq-1eLJyxAg", label: "ANV" },
  { title: "Gulabo",            year: 2022, dur: "3:22", color: "#7a0c38", ytId: "TxZBKr-NrOA", label: "GLB" },
  { title: "Aankhon",           year: 2022, dur: "4:12", color: "#0d3060", ytId: "6Oa8WvPDJyc", label: "ANK" },
  { title: "Duniya Zaalim",     year: 2023, dur: "3:45", color: "#1c1c40", ytId: "UyGNsj0KLXI", label: "DZ"  },
  { title: "Bandar",            year: 2021, dur: "3:01", color: "#3e2400", ytId: "v3K-Jt0MkRY", label: "BND" },
  { title: "Way Up",            year: 2022, dur: "3:30", color: "#063e28", ytId: "FRQMgFgpqRc", label: "WU"  },
  { title: "Kya Tu Theek Hai",  year: 2023, dur: "3:55", color: "#3e1000", ytId: "mFNTCz9DRTY", label: "KTH" },
  { title: "Bounce",            year: 2022, dur: "2:58", color: "#0e244e", ytId: "9UMnpOW-DcY", label: "BNC" },
  { title: "Keychain Laalu",    year: 2025, dur: "3:20", color: "#4e0828", ytId: "JQdD8FP_H2g", label: "KCL" },
  { title: "Sherdil",           year: 2023, dur: "3:40", color: "#320606", ytId: "yV0A4Npt4_E", label: "SHR" },
];

const ALBUMS = [
  {
    id: "bargad", name: "bargad", year: 2022, type: "EP", c1: "#1e3d1c", c2: "#0e1e0b",
    songs: [
      { title: "bargad",       dur: "3:42", ytId: "WiPWRlP3KDs" },
      { title: "Aankhon",      dur: "4:12", ytId: "6Oa8WvPDJyc" },
      { title: "Gulabo ft. D-0", dur: "3:22", ytId: "TxZBKr-NrOA" },
      { title: "Kaminey",      dur: "3:10", ytId: "WiPWRlP3KDs" },
    ]
  },
  {
    id: "qabool", name: "Qabool Hai", year: 2022, type: "EP", c1: "#5a1a00", c2: "#2e0d00",
    songs: [
      { title: "Maharani",       dur: "3:15", ytId: "q0bvLKqjj2s" },
      { title: "Gulabo ft. D-0", dur: "3:22", ytId: "TxZBKr-NrOA" },
      { title: "Bandar",         dur: "3:01", ytId: "v3K-Jt0MkRY" },
      { title: "Aankhon",        dur: "4:12", ytId: "6Oa8WvPDJyc" },
      { title: "Bounce",         dur: "2:58", ytId: "9UMnpOW-DcY" },
    ]
  },
  {
    id: "anveshna", name: "Anveshna", year: 2022, type: "Single", c1: "#3c2200", c2: "#1e1100",
    songs: [
      { title: "Anveshna", dur: "3:58", ytId: "Bq-1eLJyxAg" },
    ]
  },
  {
    id: "adhura", name: "Adhura", year: 2023, type: "EP", c1: "#0c1c38", c2: "#060e1c",
    songs: [
      { title: "Kya Tu Theek Hai", dur: "3:55", ytId: "mFNTCz9DRTY" },
      { title: "Sherdil",          dur: "3:40", ytId: "yV0A4Npt4_E" },
      { title: "Duniya Zaalim",    dur: "3:45", ytId: "UyGNsj0KLXI" },
    ]
  },
  {
    id: "ffkhelna", name: "FF Khelna Hai", year: 2022, type: "EP", c1: "#1a0a2e", c2: "#0c0516",
    songs: [
      { title: "Way Up",       dur: "3:30", ytId: "FRQMgFgpqRc" },
      { title: "Bounce",       dur: "2:58", ytId: "9UMnpOW-DcY" },
      { title: "FF Khelna Hai", dur: "3:20", ytId: "WiPWRlP3KDs" },
      { title: "Bandar",       dur: "3:01", ytId: "v3K-Jt0MkRY" },
    ]
  },
  {
    id: "sherdil", name: "Sherdil", year: 2023, type: "EP", c1: "#3c0606", c2: "#1e0303",
    songs: [
      { title: "Sherdil",        dur: "3:40", ytId: "yV0A4Npt4_E" },
      { title: "Duniya Zaalim",  dur: "3:45", ytId: "UyGNsj0KLXI" },
      { title: "Keychain Laalu", dur: "3:20", ytId: "JQdD8FP_H2g" },
      { title: "Maharani",       dur: "3:15", ytId: "q0bvLKqjj2s" },
    ]
  },
  {
    id: "kth", name: "Kya Tu Theek Hai", year: 2023, type: "Single", c1: "#2e1600", c2: "#160b00",
    songs: [
      { title: "Kya Tu Theek Hai", dur: "3:55", ytId: "mFNTCz9DRTY" },
    ]
  },
  {
    id: "aankhon", name: "Aankhon", year: 2022, type: "EP", c1: "#081826", c2: "#030c13",
    songs: [
      { title: "Aankhon",        dur: "4:12", ytId: "6Oa8WvPDJyc" },
      { title: "Gulabo ft. D-0", dur: "3:22", ytId: "TxZBKr-NrOA" },
      { title: "Bandar",         dur: "3:01", ytId: "v3K-Jt0MkRY" },
    ]
  },
];

const VIDEOS = [
  { title: "bargad — Official Music Video", views: "2.1M views", ytId: "WiPWRlP3KDs", featured: true,  dur: "3:42" },
  { title: "Maharani",                      views: "1.4M views", ytId: "q0bvLKqjj2s", featured: false, dur: "3:15" },
  { title: "Anveshna",                      views: "980K views",  ytId: "Bq-1eLJyxAg", featured: false, dur: "3:58" },
  { title: "Gulabo ft. D-0",               views: "750K views",  ytId: "TxZBKr-NrOA", featured: false, dur: "3:22" },
  { title: "Duniya Zaalim",                views: "620K views",  ytId: "UyGNsj0KLXI", featured: false, dur: "3:45" },
];

const GALLERY = [
  { src: "https://picsum.photos/seed/concert1/800/900", label: "Live Show" },
  { src: "https://picsum.photos/seed/studio2/600/400",  label: "Studio"   },
  { src: "https://picsum.photos/seed/stage3/600/400",   label: "On Stage" },
  { src: "https://picsum.photos/seed/streets4/800/400", label: "Streets"  },
  { src: "https://picsum.photos/seed/vibes5/400/400",   label: "Vibes"    },
  { src: "https://picsum.photos/seed/craft6/400/400",   label: "Craft"    },
  { src: "https://picsum.photos/seed/journey7/400/400", label: "Journey"  },
  { src: "https://picsum.photos/seed/roots8/400/400",   label: "Roots"    },
  { src: "https://picsum.photos/seed/flow9/400/400",    label: "Flow"     },
];

// ══════════════════════════════════════════════
// CURSOR
// ══════════════════════════════════════════════

/*const $c = document.getElementById('cursor');
const $r = document.getElementById('cursorRing');
let rx = 0, ry = 0, cx = 0, cy = 0;
}
document.addEventListener('mousemove', e => 
  cx = e.clientX; cy = e.clientY;
  $c.style.left = cx + 'px';
  $c.style.top  = cy + 'px';

setInterval(() => {
  rx += (cx - rx) * .14;
  ry += (cy - ry) * .14;
  $r.style.left = rx + 'px';
  $r.style.top  = ry + 'px';
}, 16);
document.addEventListener('mousedown', () => $c.style.transform = 'translate(-50%,-50%) scale(1.8)');
document.addEventListener('mouseup',   () => $c.style.transform = 'translate(-50%,-50%) scale(1)');*/

// ══════════════════════════════════════════════
// NAV SCROLL EFFECT
// ══════════════════════════════════════════════

window.addEventListener('scroll', () =>
  document.getElementById('navbar').classList.toggle('scrolled', scrollY > 60)
);

// ══════════════════════════════════════════════
// REVEAL ON SCROLL (Intersection Observer)
// ══════════════════════════════════════════════

const obs = new IntersectionObserver(
  entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
  { threshold: .12 }
);
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// ══════════════════════════════════════════════
// YOUTUBE PLAYER (Audio Engine)
// ══════════════════════════════════════════════

let ytp = null, ytOk = false;
let curIdx = -1, curQ = SONGS, isPlay = false, pInt = null;

window.onYouTubeIframeAPIReady = function () {
  ytp = new YT.Player('yt-player', {
    height: '1', width: '1', videoId: '',
    playerVars: { autoplay: 0, controls: 0, playsinline: 1, origin: location.origin || 'https://localhost' },
    events: {
      onReady: () => { ytOk = true; ytp.setVolume(80); },
      onStateChange: e => {
        if (e.data === YT.PlayerState.PLAYING) { isPlay = true;  updBtn(); startProg(); }
        else if (e.data === YT.PlayerState.PAUSED) { isPlay = false; updBtn(); stopProg();  }
        else if (e.data === YT.PlayerState.ENDED)  { nextSong(); }
      }
    }
  });
};

// ── Helpers ──
function s2str(s) {
  const m = Math.floor(s / 60), sc = Math.floor(s % 60);
  return m + ':' + String(sc).padStart(2, '0');
}
function d2s(d) {
  const p = d.split(':');
  return (+p[0]) * 60 + (+p[1]);
}

// ── Play from queue ──
let curAlbumId = '';

function playQ(q, i) {
  const s = q[i];
  // Deactivate all playing states
  document.querySelectorAll('.song-card.playing, .det-row.playing').forEach(el => el.classList.remove('playing'));
  curIdx = i; curQ = q; isPlay = true;

  // Highlight active card
  const cardId = 'sc-' + i + '-' + (q === SONGS ? 'main' : curAlbumId);
  const card = document.getElementById(cardId);
  if (card) card.classList.add('playing');

  // Update player bar UI
  document.getElementById('player-bar').classList.add('visible');
  document.getElementById('pTitle').textContent = s.title;
  document.getElementById('pArt').style.background =
    `linear-gradient(135deg, ${s.color || '#2a1500'}cc, ${s.color || '#140a00'}44)`;
  document.getElementById('pArt').textContent = s.label || s.title.slice(0, 3).toUpperCase();
  document.getElementById('pTot').textContent = s.dur || '—';
  document.getElementById('pCur').textContent = '0:00';
  document.getElementById('pFill').style.width = '0%';
  document.getElementById('pYT').href = 'https://www.youtube.com/watch?v=' + s.ytId;

  updBtn(); stopProg();

  // Load YouTube video (audio only plays via hidden iframe)
  if (ytOk && ytp) { ytp.loadVideoById(s.ytId); }
  else { isPlay = true; startProg(); }
}

function updBtn() {
  document.getElementById('ppBtn').innerHTML = isPlay ? '&#9646;&#9646;' : '&#9654;';
}

function togglePlay() {
  if (curIdx < 0) return;
  if (ytOk && ytp) {
    isPlay ? ytp.pauseVideo() : ytp.playVideo();
  } else {
    isPlay = !isPlay; updBtn();
    isPlay ? startProg() : stopProg();
  }
}

function nextSong() { if (curQ.length) playQ(curQ, (curIdx + 1) % curQ.length); }
function prevSong() { if (curQ.length) playQ(curQ, (curIdx - 1 + curQ.length) % curQ.length); }

// ── Progress Bar ──
function startProg() {
  stopProg();
  pInt = setInterval(() => {
    if (!isPlay) return;
    if (ytOk && ytp && ytp.getCurrentTime) {
      try {
        const c = ytp.getCurrentTime() || 0;
        const d = ytp.getDuration()    || d2s(curQ[curIdx]?.dur || '3:30');
        document.getElementById('pFill').style.width = ((c / d) * 100) + '%';
        document.getElementById('pCur').textContent  = s2str(c);
        document.getElementById('pTot').textContent  = s2str(d);
      } catch (e) {}
    }
  }, 500);
}
function stopProg() { if (pInt) { clearInterval(pInt); pInt = null; } }
function setVol(v)  { if (ytOk && ytp) ytp.setVolume(+v); }

// Seek on click
document.getElementById('pBar').addEventListener('click', function (e) {
  if (curIdx < 0) return;
  const pct = (e.clientX - this.getBoundingClientRect().left) / this.offsetWidth;
  if (ytOk && ytp) { const d = ytp.getDuration() || 210; ytp.seekTo(pct * d, true); }
  document.getElementById('pFill').style.width = (pct * 100) + '%';
});

// ══════════════════════════════════════════════
// RENDER: SONGS
// ══════════════════════════════════════════════

const sg = document.getElementById('songsGrid');
SONGS.forEach((s, i) => {
  const d = document.createElement('div');
  d.className = 'song-card';
  d.id = 'sc-' + i + '-main';
  d.onclick = () => playQ(SONGS, i);
  d.innerHTML = `
    <div class="song-num">${String(i + 1).padStart(2, '0')}</div>
    <div class="song-play-icon">&#9654;</div>
    <div class="s-art" style="background:linear-gradient(135deg,${s.color}cc,${s.color}44)">${s.label}</div>
    <div class="song-info">
      <div class="song-title">${s.title}</div>
      <div class="song-meta">Arpit Bala · ${s.year}</div>
    </div>
    <div class="eq-bars">
      <div class="eq-bar"></div><div class="eq-bar"></div>
      <div class="eq-bar"></div><div class="eq-bar"></div>
    </div>
    <div class="song-dur">${s.dur}</div>`;
  sg.appendChild(d);
});

// ══════════════════════════════════════════════
// RENDER: ALBUMS
// ══════════════════════════════════════════════

const ag = document.getElementById('albumsGrid');
ALBUMS.forEach(a => {
  const d = document.createElement('div');
  d.className = 'album-card reveal';
  d.onclick = () => openAlbum(a);
  d.innerHTML = `
    <div class="alb-art">
      <div class="alb-inner" style="background:linear-gradient(145deg,${a.c1},${a.c2})">
        <div class="alb-title">${a.name.toUpperCase()}</div>
      </div>
      <div class="alb-ov"><div class="alb-btn">&#9654;</div></div>
    </div>
    <div class="alb-info">
      <div class="alb-name">${a.name}</div>
      <div class="alb-year">${a.year}</div>
      <div class="alb-tracks">${a.type} · ${a.songs.length} Track${a.songs.length > 1 ? 's' : ''}</div>
    </div>`;
  ag.appendChild(d);
  obs.observe(d);
});

// ── Open Album Detail Page ──
function openAlbum(a) {
  curAlbumId = a.id;
  document.getElementById('main-content').classList.add('hidden');
  const det = document.getElementById('album-detail');
  det.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Fill album art & info
  const art = document.getElementById('detArt');
  art.style.background = `linear-gradient(145deg,${a.c1},${a.c2})`;
  art.textContent = a.name.toUpperCase();
  document.getElementById('detLabel').textContent = a.type;
  document.getElementById('detName').textContent  = a.name;
  document.getElementById('detMeta').innerHTML =
    `<span>📅 ${a.year}</span>
     <span>🎵 ${a.songs.length} Track${a.songs.length > 1 ? 's' : ''}</span>
     <span>👤 Arpit Bala</span>`;

  // Render tracklist
  const list = document.getElementById('detSongs');
  list.innerHTML = '';
  const enriched = a.songs.map(s => ({ ...s, color: a.c1, label: s.title.slice(0, 3).toUpperCase() }));
  enriched.forEach((s, i) => {
    const row = document.createElement('div');
    row.className = 'det-row';
    row.id = 'sc-' + i + '-' + a.id;
    row.onclick = () => playQ(enriched, i);
    row.innerHTML = `
      <div class="det-num">${String(i + 1).padStart(2, '0')}</div>
      <div class="det-pi">&#9654;</div>
      <div class="s-art" style="background:linear-gradient(135deg,${a.c1}cc,${a.c1}44);width:42px;height:42px;flex-shrink:0">${s.label}</div>
      <div class="det-sname">${s.title}</div>
      <div class="det-eq">
        <div class="det-eq-b"></div><div class="det-eq-b"></div><div class="det-eq-b"></div>
      </div>
      <div class="det-dur">${s.dur}</div>`;
    list.appendChild(row);
  });
}

function showMain() {
  document.getElementById('album-detail').classList.remove('active');
  const mc = document.getElementById('main-content');
  mc.classList.remove('hidden');
  mc.style.position = '';
  mc.style.left = '';
}

// ══════════════════════════════════════════════
// RENDER: VIDEOS
// ══════════════════════════════════════════════

const vg = document.getElementById('videosGrid');
VIDEOS.forEach(v => {
  const d = document.createElement('div');
  d.className = 'vid-card reveal' + (v.featured ? ' featured' : '');
  d.onclick = () => openVideo(v.ytId);
  const thumb = `https://img.youtube.com/vi/${v.ytId}/hqdefault.jpg`;
  d.innerHTML = `
    <div class="vid-thumb">
      <img class="vid-img" src="${thumb}" alt="${v.title}" onerror="this.style.display='none'"/>
      <div class="vid-play">&#9654;</div>
      <div class="vid-ov">
        <div>
          <div class="vid-dur">${v.dur}</div>
          <div class="vid-title">${v.title}</div>
          <div class="vid-views">${v.views}</div>
        </div>
      </div>
    </div>`;
  vg.appendChild(d);
  obs.observe(d);
});

function openVideo(id) {
  if (isPlay && ytOk && ytp) ytp.pauseVideo();
  document.getElementById('modalFrame').src =
    'https://www.youtube.com/embed/' + id + '?autoplay=1&rel=0&modestbranding=1';
  document.getElementById('videoModal').classList.add('open');
}
function closeVideo() {
  document.getElementById('videoModal').classList.remove('open');
  setTimeout(() => document.getElementById('modalFrame').src = '', 400);
}
document.getElementById('videoModal').addEventListener('click', function (e) {
  if (e.target === this) closeVideo();
});

// ══════════════════════════════════════════════
// RENDER: GALLERY
// ══════════════════════════════════════════════

let curLBIdx = 0;
const gg = document.getElementById('galGrid');

GALLERY.forEach((g, i) => {
  const item = document.createElement('div');
  item.className = 'gal-item reveal';
  item.onclick = () => openLB(i);
  item.innerHTML = `
    <img class="gal-img" src="${g.src}" alt="${g.label}" loading="lazy"
      onerror="this.parentNode.style.background='linear-gradient(135deg,#1a1814,#0a0806)';this.style.display='none'"/>
    <div class="gal-ov"><div class="gal-zoom">&#8599;</div></div>
    <div class="gal-cap">${g.label}</div>`;
  gg.appendChild(item);
  obs.observe(item);
});

function openLB(i) {
  curLBIdx = i;
  document.getElementById('lbImg').src =
    GALLERY[i].src.replace('/400/', '/1200/').replace('/600/', '/1200/').replace('/800/', '/1200/');
  document.getElementById('galLB').classList.add('open');
}
function closeLB() { document.getElementById('galLB').classList.remove('open'); }
function navLB(dir) {
  curLBIdx = (curLBIdx + dir + GALLERY.length) % GALLERY.length;
  openLB(curLBIdx);
}
document.getElementById('galLB').addEventListener('click', function (e) {
  if (e.target === this) closeLB();
});

// ══════════════════════════════════════════════
// KEYBOARD SHORTCUTS
// ══════════════════════════════════════════════

document.addEventListener('keydown', e => {
  if (e.key === 'Escape')     { closeVideo(); closeLB(); }
  if (e.key === 'ArrowLeft')  { navLB(-1); }
  if (e.key === 'ArrowRight') { navLB(1);  }
});

// ══════════════════════════════════════════════
// PARALLAX HERO
// ══════════════════════════════════════════════

window.addEventListener('scroll', () => {
  const y  = scrollY;
  const hc = document.querySelector('.hero-content');
  if (hc && y < innerHeight) {
    hc.style.transform = `translateY(${y * .3}px)`;
    hc.style.opacity   = Math.max(0, 1 - (y / (innerHeight * .75)));
  }
});
