/* ============================================================
   writing.js — Writing page for Rishav Singh Portfolio

   Features:
   1. Theme toggle (shared localStorage with home)
   2. Nav scroll border + progress + mobile drawer
   3. Load posts from writing.json
   4. List tiles / article view via ?id=
   5. Left sidenav + related tiles
   ============================================================ */

(function () {
  'use strict';

  var allPosts = [];

  // ── THEME TOGGLE ───────────────────────────────────────────

  var themeToggle = document.getElementById('theme-toggle');
  var iconSun = document.getElementById('icon-sun');
  var iconMoon = document.getElementById('icon-moon');
  var root = document.documentElement;

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      iconSun.style.display = 'none';
      iconMoon.style.display = 'block';
    } else {
      iconSun.style.display = 'block';
      iconMoon.style.display = 'none';
    }
  }

  var savedTheme = localStorage.getItem('theme');
  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(savedTheme || (prefersDark ? 'dark' : 'light'));

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      var current = root.getAttribute('data-theme');
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  // ── NAV SCROLL + PROGRESS ──────────────────────────────────

  var nav = document.getElementById('nav');
  var scrollProgress = document.getElementById('scrollProgress');

  function handleNavScroll() {
    if (window.scrollY > 10) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }

    var scrollTop = window.scrollY;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    var scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    if (scrollProgress) {
      scrollProgress.style.width = scrollPercent + '%';
    }
  }

  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();

  // ── MOBILE DRAWER ──────────────────────────────────────────

  var navToggle = document.getElementById('navToggle');
  var navDrawer = document.getElementById('navDrawer');

  if (navToggle && navDrawer) {
    function closeDrawer() {
      navDrawer.classList.remove('nav__drawer--open');
      navToggle.classList.remove('nav__toggle--open');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    function openDrawer() {
      navDrawer.classList.add('nav__drawer--open');
      navToggle.classList.add('nav__toggle--open');
      navToggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }

    navToggle.addEventListener('click', function () {
      if (navDrawer.classList.contains('nav__drawer--open')) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });

    navDrawer.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeDrawer);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navDrawer.classList.contains('nav__drawer--open')) {
        closeDrawer();
        navToggle.focus();
      }
    });
  }

  // ── FOOTER YEAR ────────────────────────────────────────────

  var footerYear = document.getElementById('footerYear');
  if (footerYear) {
    footerYear.textContent = String(new Date().getFullYear());
  }

  // ── FADE-IN ────────────────────────────────────────────────

  var fadeElements = document.querySelectorAll('.fade-in');
  if ('IntersectionObserver' in window) {
    var fadeObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in--visible');
            fadeObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    fadeElements.forEach(function (el) {
      fadeObserver.observe(el);
    });
  } else {
    fadeElements.forEach(function (el) {
      el.classList.add('fade-in--visible');
    });
  }

  // ── HELPERS ────────────────────────────────────────────────

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function formatDate(iso) {
    if (!iso) return '';
    var d = new Date(iso + 'T00:00:00');
    if (isNaN(d.getTime())) return iso;
    return d.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }

  function getPostIdFromUrl() {
    var params = new URLSearchParams(window.location.search);
    if (params.get('id')) return params.get('id');

    // Support shareable hash links as well as the canonical ?id= form.
    // The query parameter wins when both are present.
    return window.location.hash
      ? decodeURIComponent(window.location.hash.slice(1))
      : '';
  }

  function setPostUrl(id, replace) {
    var url = id ? 'writing.html?id=' + encodeURIComponent(id) : 'writing.html';
    if (replace) {
      history.replaceState({ id: id || null }, '', url);
    } else {
      history.pushState({ id: id || null }, '', url);
    }
  }

  function findPost(id) {
    for (var i = 0; i < allPosts.length; i++) {
      if (allPosts[i].id === id) return allPosts[i];
    }
    return null;
  }

  function sortByDateDesc(posts) {
    return posts.slice().sort(function (a, b) {
      return String(b.date).localeCompare(String(a.date));
    });
  }

  function renderTags(container, tags) {
    container.innerHTML = '';
    (tags || []).forEach(function (tag) {
      var span = document.createElement('span');
      span.className = 'tag';
      span.textContent = tag;
      container.appendChild(span);
    });
  }

  function createTile(post) {
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'writing-tile';
    btn.setAttribute('aria-label', 'Read: ' + post.title);

    var imgHtml = post.image
      ? '<div class="writing-tile__img-wrap"><img class="writing-tile__img" src="' +
        escapeHtml(post.image) +
        '" alt="" loading="lazy"></div>'
      : '';

    var tagsHtml = (post.tags || [])
      .slice(0, 3)
      .map(function (t) {
        return '<span class="tag">' + escapeHtml(t) + '</span>';
      })
      .join('');

    btn.innerHTML =
      imgHtml +
      '<div class="writing-tile__body">' +
      '<div class="writing-tile__meta">' +
      '<span class="writing-tile__category">' +
      escapeHtml(post.category || '') +
      '</span>' +
      '<span aria-hidden="true">·</span>' +
      '<time datetime="' +
      escapeHtml(post.date || '') +
      '">' +
      escapeHtml(formatDate(post.date)) +
      '</time>' +
      '</div>' +
      '<h3 class="writing-tile__title">' +
      escapeHtml(post.title) +
      '</h3>' +
      '<p class="writing-tile__excerpt">' +
      escapeHtml(post.excerpt || '') +
      '</p>' +
      '<div class="writing-tile__tags">' +
      tagsHtml +
      '</div>' +
      '</div>';

    btn.addEventListener('click', function () {
      openArticle(post.id, false);
    });

    return btn;
  }

  // ── VIEWS ──────────────────────────────────────────────────

  var listView = document.getElementById('writingListView');
  var articleView = document.getElementById('writingArticleView');
  var tileGrid = document.getElementById('writingTileGrid');
  var listStatus = document.getElementById('writingListStatus');
  var sidenav = document.getElementById('writingSidenav');
  var sidenavList = document.getElementById('writingSidenavList');
  var sidenavToggle = document.getElementById('writingSidenavToggle');
  var relatedGrid = document.getElementById('relatedGrid');

  function showList() {
    listView.hidden = false;
    articleView.hidden = true;
    document.title = 'Writing — Rishav Singh';
    if (sidenav) sidenav.classList.remove('is-open');
    if (sidenavToggle) sidenavToggle.setAttribute('aria-expanded', 'false');
    window.scrollTo(0, 0);
  }

  function showArticleShell() {
    listView.hidden = true;
    articleView.hidden = false;
    window.scrollTo(0, 0);
  }

  function renderTileGrid() {
    tileGrid.innerHTML = '';
    var sorted = sortByDateDesc(allPosts);
    sorted.forEach(function (post) {
      tileGrid.appendChild(createTile(post));
    });
    if (listStatus) {
      listStatus.textContent = sorted.length
        ? ''
        : 'No posts yet.';
    }
  }

  function renderSidenav(activeId) {
    sidenavList.innerHTML = '';
    sortByDateDesc(allPosts).forEach(function (post) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className =
        'writing-sidenav__link' +
        (post.id === activeId ? ' writing-sidenav__link--active' : '');
      btn.textContent = post.title;
      btn.setAttribute('aria-current', post.id === activeId ? 'page' : 'false');
      btn.addEventListener('click', function () {
        openArticle(post.id, false);
        if (sidenav) sidenav.classList.remove('is-open');
        if (sidenavToggle) sidenavToggle.setAttribute('aria-expanded', 'false');
      });
      sidenavList.appendChild(btn);
    });
  }

  function resolveRelated(post) {
    var related = [];
    var seen = {};

    function pushById(id) {
      if (!id || seen[id] || id === post.id) return;
      var p = findPost(id);
      if (p) {
        seen[id] = true;
        related.push(p);
      }
    }

    (post.related || []).forEach(pushById);

    if (related.length < 3) {
      sortByDateDesc(allPosts).forEach(function (p) {
        if (related.length >= 3) return;
        if (p.category === post.category) pushById(p.id);
      });
    }

    if (related.length < 3) {
      sortByDateDesc(allPosts).forEach(function (p) {
        if (related.length >= 3) return;
        pushById(p.id);
      });
    }

    return related.slice(0, 3);
  }

  function renderRelated(post) {
    relatedGrid.innerHTML = '';
    resolveRelated(post).forEach(function (p) {
      relatedGrid.appendChild(createTile(p));
    });
  }

  function openArticle(id, replace) {
    var post = findPost(id);
    if (!post) {
      setPostUrl('', true);
      showList();
      return;
    }

    setPostUrl(id, replace);
    showArticleShell();
    renderSidenav(id);

    document.title = post.title + ' — Rishav Singh';
    document.getElementById('articleCategory').textContent = post.category || '';
    var dateEl = document.getElementById('articleDate');
    dateEl.textContent = formatDate(post.date);
    dateEl.setAttribute('datetime', post.date || '');
    document.getElementById('articleTitle').textContent = post.title;
    renderTags(document.getElementById('articleTags'), post.tags);

    var banner = document.getElementById('articleBanner');
    if (post.image) {
      banner.src = post.image;
      banner.alt = '';
      banner.hidden = false;
    } else {
      banner.removeAttribute('src');
      banner.hidden = true;
    }

    document.getElementById('articleBody').innerHTML = post.content || '';
    renderRelated(post);
  }

  if (sidenavToggle && sidenav) {
    sidenavToggle.addEventListener('click', function () {
      var open = sidenav.classList.toggle('is-open');
      sidenavToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  window.addEventListener('popstate', function () {
    var id = getPostIdFromUrl();
    if (id) {
      openArticle(id, true);
    } else {
      showList();
    }
  });

  window.addEventListener('hashchange', function () {
    var id = getPostIdFromUrl();
    if (id) {
      openArticle(id, true);
    } else {
      showList();
    }
  });

  // ── LOAD DATA ──────────────────────────────────────────────

  fetch('data/writing.json')
    .then(function (res) {
      if (!res.ok) throw new Error('Failed to load writing.json');
      return res.json();
    })
    .then(function (data) {
      allPosts = Array.isArray(data) ? data : [];
      renderTileGrid();

      var id = getPostIdFromUrl();
      if (id) {
        openArticle(id, true);
      } else {
        showList();
      }
    })
    .catch(function () {
      if (listStatus) {
        listStatus.textContent = 'Unable to load writing. Please try again later.';
      }
    });
})();
