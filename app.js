(function () {
  'use strict';

  /* ==========================================================
     1. Ikony
     ========================================================== */
  var PATHS = {
    settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6h.09A1.65 1.65 0 0 0 10 3.09V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
    cards: '<path d="M12 2 2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>',
    grid: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
    plus: '<path d="M12 5v14"/><path d="M5 12h14"/>',
    edit: '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>',
    trash: '<path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
    close: '<path d="M18 6 6 18"/><path d="M6 6l12 12"/>',
    chevronLeft: '<path d="M15 18l-6-6 6-6"/>',
    chevronRight: '<path d="M9 18l6-6-6-6"/>',
    flip: '<path d="M17 1l4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><path d="M7 23l-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>',
    shuffle: '<path d="M16 3h5v5"/><path d="M4 20 21 3"/><path d="M21 16v5h-5"/><path d="M15 15l6 6"/><path d="M4 4l5 5"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/>',
    upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M17 8l-5-5-5 5"/><path d="M12 3v12"/>',
    filePlus: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M12 18v-6"/><path d="M9 15h6"/>',
    share: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.59 13.51l6.83 3.98"/><path d="M15.41 6.51l-6.82 3.98"/>',
    star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
    starFilled: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="currentColor" stroke="none"/>'
  };

  function icon(name, size) {
    size = size || 24;
    return '<svg xmlns="http://www.w3.org/2000/svg" width="' + size + '" height="' + size +
      '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' +
      'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' +
      (PATHS[name] || '') + '</svg>';
  }

  function iconNode(name, size) {
    var tpl = document.createElement('template');
    tpl.innerHTML = icon(name, size).trim();
    return tpl.content.firstChild;
  }

  /* ==========================================================
     2. Tłumaczenia
     ========================================================== */
  var STRINGS = {
    pl: {
      tabBrowse: 'Przeglądaj', tabSets: 'Zestawy', settings: 'Ustawienia', close: 'Zamknij',
      language: 'Język', theme: 'Motyw', themeSystem: 'Systemowy', themeLight: 'Jasny', themeDark: 'Ciemny',
      dataSection: 'Dane i kopia zapasowa',
      exportBackup: 'Eksportuj kopię zapasową',
      importBackup: 'Importuj kopię zapasową',
      importSet: 'Importuj zestaw',
      noActiveSet: 'Brak wybranego zestawu',
      noActiveSetDesc: 'Przejdź do zakładki Zestawy i wybierz zestaw, aby rozpocząć naukę.',
      goToSets: 'Przejdź do zestawów',
      emptySetTitle: 'Ten zestaw jest pusty',
      emptySetDesc: 'Dodaj fiszki do tego zestawu, aby rozpocząć naukę.',
      addCards: 'Dodaj fiszki',
      noMarkedTitle: 'Brak oznaczonych fiszek',
      noMarkedDesc: 'Oznacz fiszki gwiazdką, aby móc je potem przeglądać.',
      showAll: 'Pokaż wszystkie',
      filterAll: 'Wszystkie',
      filterMarked: 'Oznaczone',
      mark: 'Oznacz do powtórki', unmark: 'Usuń oznaczenie',
      shuffle: 'Losowa kolejność', flip: 'Odwróć', previous: 'Poprzednia', next: 'Następna',
      setsTitle: 'Twoje zestawy', newSet: 'Nowy zestaw', createSet: 'Utwórz zestaw', editSet: 'Edytuj zestaw',
      noSetsTitle: 'Nie masz jeszcze zestawów', noSetsDesc: 'Utwórz pierwszy zestaw fiszek i zacznij naukę.',
      setName: 'Nazwa zestawu', setNamePlaceholder: 'np. Angielskie słówka',
      cardsLabel: 'Fiszki', addCard: 'Dodaj fiszkę',
      front: 'Przód', back: 'Tył', frontPlaceholder: 'Pytanie', backPlaceholder: 'Odpowiedź',
      save: 'Zapisz', cancel: 'Anuluj', delete: 'Usuń', edit: 'Edytuj', removeCard: 'Usuń fiszkę',
      deleteSetTitle: 'Usunąć zestaw?', deleteSetDesc: 'Zestaw „{name}” zostanie trwale usunięty.',
      untitledSet: 'Bez nazwy', cardEmpty: 'Pusta fiszka', progressOf: '{a} z {b}',
      shareSet: 'Udostępnij', shareSetTitle: 'Udostępnij zestaw',
      shareIncludeMarks: 'Dołącz informacje o oznaczonych fiszkach',
      shareDownload: 'Pobierz plik',
      shareSuccess: 'Pobrano plik zestawu',
      shareError: 'Nie udało się wyeksportować zestawu',
      importBackupTitle: 'Import kopii zapasowej',
      importBackupDesc: 'Znaleziono {sets} zestawów ({cards} fiszek). Co chcesz zrobić?',
      importMerge: 'Scal (bezpiecznie)', importReplace: 'Zastąp wszystko',
      importSuccess: 'Import zakończony', importError: 'Nieprawidłowy plik',
      backupExported: 'Kopia zapasowa została pobrana'
    },
    en: {
      tabBrowse: 'Browse', tabSets: 'Sets', settings: 'Settings', close: 'Close',
      language: 'Language', theme: 'Theme', themeSystem: 'System', themeLight: 'Light', themeDark: 'Dark',
      dataSection: 'Data & backup',
      exportBackup: 'Export backup',
      importBackup: 'Import backup',
      importSet: 'Import set',
      noActiveSet: 'No set selected',
      noActiveSetDesc: 'Go to the Sets tab and pick a set to start studying.',
      goToSets: 'Go to sets',
      emptySetTitle: 'This set is empty',
      emptySetDesc: 'Add flashcards to this set to start studying.',
      addCards: 'Add cards',
      noMarkedTitle: 'No marked cards',
      noMarkedDesc: 'Star cards to review them later.',
      showAll: 'Show all',
      filterAll: 'All',
      filterMarked: 'Marked',
      mark: 'Mark for review', unmark: 'Remove mark',
      shuffle: 'Shuffle', flip: 'Flip', previous: 'Previous', next: 'Next',
      setsTitle: 'Your sets', newSet: 'New set', createSet: 'Create set', editSet: 'Edit set',
      noSetsTitle: 'No sets yet', noSetsDesc: 'Create your first flashcard set and start learning.',
      setName: 'Set name', setNamePlaceholder: 'e.g. English vocabulary',
      cardsLabel: 'Flashcards', addCard: 'Add card',
      front: 'Front', back: 'Back', frontPlaceholder: 'Question', backPlaceholder: 'Answer',
      save: 'Save', cancel: 'Cancel', delete: 'Delete', edit: 'Edit', removeCard: 'Remove card',
      deleteSetTitle: 'Delete set?', deleteSetDesc: 'The set “{name}” will be permanently deleted.',
      untitledSet: 'Untitled', cardEmpty: 'Empty card', progressOf: '{a} of {b}',
      shareSet: 'Share', shareSetTitle: 'Share set',
      shareIncludeMarks: 'Include marked status',
      shareDownload: 'Download file',
      shareSuccess: 'Set file downloaded',
      shareError: 'Failed to export set',
      importBackupTitle: 'Import backup',
      importBackupDesc: 'Found {sets} sets ({cards} cards). What would you like to do?',
      importMerge: 'Merge (safe)', importReplace: 'Replace all',
      importSuccess: 'Import complete', importError: 'Invalid file',
      backupExported: 'Backup downloaded'
    }
  };

  /* ==========================================================
     3. Stan + localStorage
     ========================================================== */
  var STORAGE_KEY = 'fisky.state.v1';
  var BACKUP_FORMAT = 'fisky.backup.v1';
  var SET_FORMAT = 'fisky.set.v1';

  function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 8); }

  function detectLang() {
    var l = (navigator.language || navigator.userLanguage || '').toLowerCase();
    if (l.indexOf('pl') === 0) return 'pl';
    if (l.indexOf('en') === 0) return 'en';
    return 'en';
  }

  function defaultState() {
    return { sets: [], activeSetId: null, lang: detectLang(), theme: 'system' };
  }

  function normalizeSet(s) {
    s = s || {};
    return {
      id: typeof s.id === 'string' && s.id ? s.id : uid(),
      name: typeof s.name === 'string' ? s.name : '',
      cards: Array.isArray(s.cards) ? s.cards.map(function (c) {
        c = c || {};
        return {
          id: typeof c.id === 'string' && c.id ? c.id : uid(),
          front: typeof c.front === 'string' ? c.front : '',
          back: typeof c.back === 'string' ? c.back : '',
          marked: !!c.marked
        };
      }) : [],
      updatedAt: typeof s.updatedAt === 'number' ? s.updatedAt : Date.now()
    };
  }

  function freshSet(s) {
    var ns = normalizeSet(s);
    ns.id = uid();
    ns.cards.forEach(function (c) { c.id = uid(); });
    return ns;
  }

  function loadState() {
    var base = defaultState();
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return base;
      var parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== 'object') return base;
      var state = {
        sets: Array.isArray(parsed.sets) ? parsed.sets.map(normalizeSet) : [],
        activeSetId: typeof parsed.activeSetId === 'string' ? parsed.activeSetId : null,
        lang: (parsed.lang === 'pl' || parsed.lang === 'en') ? parsed.lang : base.lang,
        theme: (parsed.theme === 'system' || parsed.theme === 'light' || parsed.theme === 'dark') ? parsed.theme : 'system'
      };
      if (!state.sets.some(function (s) { return s.id === state.activeSetId; })) {
        state.activeSetId = state.sets.length ? state.sets[0].id : null;
      }
      return state;
    } catch (err) {
      console.warn('[Fisky] load failed:', err);
      return base;
    }
  }

  var state = loadState();

  function persist() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
    catch (err) { console.warn('[Fisky] save failed:', err); }
  }

  /* ==========================================================
     4. i18n helpers
     ========================================================== */
  function t(key, vars) {
    var dict = STRINGS[state.lang] || STRINGS.en;
    var s = dict[key];
    if (s === undefined) s = STRINGS.en[key];
    if (s === undefined) s = key;
    if (vars) {
      Object.keys(vars).forEach(function (k) {
        s = s.split('{' + k + '}').join(vars[k]);
      });
    }
    return s;
  }

  function cardCountLabel(n) {
    if (state.lang === 'pl') {
      if (n === 1) return '1 fiszka';
      var d = n % 10, h = n % 100;
      if (d >= 2 && d <= 4 && !(h >= 12 && h <= 14)) return n + ' fiszki';
      return n + ' fiszek';
    }
    return n === 1 ? '1 card' : n + ' cards';
  }

  /* ==========================================================
     5. DOM helpers
     ========================================================== */
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  function h(tag, attrs) {
    var node = document.createElement(tag);
    var children = Array.prototype.slice.call(arguments, 2);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        var v = attrs[k];
        if (v === null || v === undefined || v === false) return;
        if (k === 'class') node.className = v;
        else if (k === 'dataset') Object.keys(v).forEach(function (d) { node.dataset[d] = v[d]; });
        else if (k.indexOf('on') === 0 && typeof v === 'function') node.addEventListener(k.slice(2).toLowerCase(), v);
        else if (v === true) node.setAttribute(k, '');
        else node.setAttribute(k, v);
      });
    }
    children.forEach(function (c) {
      if (c === null || c === undefined || c === false) return;
      if (Array.isArray(c)) {
        c.forEach(function (cc) {
          if (cc === null || cc === undefined) return;
          node.append(cc.nodeType ? cc : document.createTextNode(String(cc)));
        });
      } else node.append(c.nodeType ? c : document.createTextNode(String(c)));
    });
    return node;
  }

  /* ==========================================================
     6. Motyw
     ========================================================== */
  var darkQuery = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;

  function applyTheme() {
    var effective = state.theme;
    if (state.theme === 'system') effective = (darkQuery && darkQuery.matches) ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', effective);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', effective === 'dark' ? '#111318' : '#F9F9FF');
  }
  function onSystemThemeChange() { if (state.theme === 'system') applyTheme(); }

  /* ==========================================================
     7. Nawigacja
     ========================================================== */
  var currentView = 'browse';

  function switchView(view) {
    currentView = view;
    $$('.view').forEach(function (el) { el.classList.toggle('active', el.id === 'view-' + view); });
    updateNav(); updateFab();
  }
  function updateNav() {
    $$('[data-view]').forEach(function (btn) {
      var active = btn.dataset.view === currentView;
      btn.classList.toggle('active', active);
      if (active) btn.setAttribute('aria-current', 'page');
      else btn.removeAttribute('aria-current');
    });
  }
  function updateFab() {
    var fab = $('#fabNewSet');
    if (fab) fab.classList.toggle('visible', currentView === 'sets');
  }

  /* ==========================================================
     8. Zestawy
     ========================================================== */
  function getActiveSet() {
    if (!state.activeSetId) return null;
    for (var i = 0; i < state.sets.length; i++) {
      if (state.sets[i].id === state.activeSetId) return state.sets[i];
    }
    return null;
  }
  function getSetById(id) {
    for (var i = 0; i < state.sets.length; i++) {
      if (state.sets[i].id === id) return state.sets[i];
    }
    return null;
  }
  function markedCount(set) {
    return (set && set.cards) ? set.cards.filter(function (c) { return c.marked; }).length : 0;
  }

  /* ==========================================================
     9. Browse
     ========================================================== */
  var browse = { setId: null, filter: 'all', order: [], pos: 0, flipped: false };

  function getVisibleIndices() {
    var set = getActiveSet();
    if (!set) return [];
    if (browse.filter === 'marked') {
      return browse.order.filter(function (i) { return set.cards[i] && set.cards[i].marked; });
    }
    return browse.order.slice();
  }

  function syncBrowse(force) {
    var set = getActiveSet();
    if (!set) {
      browse = { setId: null, filter: 'all', order: [], pos: 0, flipped: false };
      return;
    }
    if (force || browse.setId !== set.id || browse.order.length !== set.cards.length) {
      var sameSet = browse.setId === set.id;
      browse = {
        setId: set.id,
        filter: sameSet ? browse.filter : 'all',
        order: set.cards.map(function (_, i) { return i; }),
        pos: sameSet ? browse.pos : 0,
        flipped: false
      };
    }
    var visible = getVisibleIndices();
    if (browse.pos >= visible.length) browse.pos = Math.max(0, visible.length - 1);
    if (browse.pos < 0) browse.pos = 0;
  }

  function buildEmptyState(opts) {
    var kids = [
      h('div', { class: 'empty-icon' }, iconNode(opts.iconName, 32)),
      h('h2', { class: 'empty-title' }, opts.title),
      h('p', { class: 'empty-desc' }, opts.desc)
    ];
    if (opts.action) {
      kids.push(h('button', { class: 'btn btn--filled', type: 'button', onclick: opts.action.onClick }, opts.action.label));
    }
    return h('div', { class: 'empty-state' }, kids);
  }

  function renderBrowse() {
    var wrap = $('#browseContent');
    if (!wrap) return;
    wrap.innerHTML = '';

    var set = getActiveSet();
    if (!set) {
      wrap.append(buildEmptyState({
        iconName: 'cards', title: t('noActiveSet'), desc: t('noActiveSetDesc'),
        action: { label: t('goToSets'), onClick: function () { switchView('sets'); } }
      }));
      return;
    }
    if (!set.cards.length) {
      wrap.append(buildEmptyState({
        iconName: 'cards', title: t('emptySetTitle'), desc: t('emptySetDesc'),
        action: { label: t('addCards'), onClick: function () { openEditor(set.id); } }
      }));
      return;
    }

    var mCount = markedCount(set);
    var visible = getVisibleIndices();

    if (visible.length === 0 && browse.filter === 'marked') {
      wrap.append(buildEmptyState({
        iconName: 'star', title: t('noMarkedTitle'), desc: t('noMarkedDesc'),
        action: {
          label: t('showAll'),
          onClick: function () {
            browse.filter = 'all'; browse.pos = 0; browse.flipped = false;
            renderBrowse();
          }
        }
      }));
      return;
    }

    if (browse.pos >= visible.length) browse.pos = Math.max(0, visible.length - 1);
    var total = visible.length;
    var pos = browse.pos;
    var actualIndex = visible[pos];
    var card = set.cards[actualIndex] || { front: '', back: '', marked: false };

    // Header
    var head = h('div', { class: 'browse-head' },
      h('div', { class: 'browse-head-text' },
        h('h2', { class: 'set-title' }, set.name || t('untitledSet')),
        h('div', { class: 'browse-progress-text' }, t('progressOf', { a: pos + 1, b: total }))
      ),
      h('button', {
        class: 'icon-btn', type: 'button', title: t('shuffle'), 'aria-label': t('shuffle'),
        onclick: shuffleDeck
      }, iconNode('shuffle', 22))
    );

    // Filter chips
    var filterRow = null;
    if (mCount > 0) {
      var allCount = set.cards.length;
      filterRow = h('div', { class: 'browse-filter' },
        h('button', {
          class: 'filter-chip' + (browse.filter === 'all' ? ' active' : ''),
          type: 'button',
          onclick: function () { browse.filter = 'all'; browse.pos = 0; browse.flipped = false; renderBrowse(); }
        }, t('filterAll') + ' (' + allCount + ')'),
        h('button', {
          class: 'filter-chip' + (browse.filter === 'marked' ? ' active' : ''),
          type: 'button',
          onclick: function () { browse.filter = 'marked'; browse.pos = 0; browse.flipped = false; renderBrowse(); }
        }, iconNode('starFilled', 14), ' ', t('filterMarked') + ' (' + mCount + ')')
      );
    }

    // Progress
    var progress = h('div', { class: 'progress-bar' },
      h('div', { class: 'progress-fill', style: 'width:' + (((pos + 1) / total) * 100) + '%' })
    );

    // Card + overlay mark
    var markOverlayBtn = h('button', {
      class: 'card-mark-btn--overlay' + (card.marked ? ' marked' : ''),
      type: 'button',
      title: card.marked ? t('unmark') : t('mark'),
      'aria-label': card.marked ? t('unmark') : t('mark'),
      'aria-pressed': card.marked ? 'true' : 'false',
      onclick: function (e) { e.stopPropagation(); toggleCardMark(); }
    }, iconNode(card.marked ? 'starFilled' : 'star', 22));

    var flashcard = h('div', {
      class: 'flashcard' + (browse.flipped ? ' flipped' : ''),
      role: 'button', tabindex: '0', 'aria-label': t('flip'),
      onclick: toggleFlip,
      onkeydown: function (e) {
        if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') { e.preventDefault(); toggleFlip(); }
      }
    },
      h('div', { class: 'flashcard-face flashcard-front' }, h('span', null, card.front || t('cardEmpty'))),
      h('div', { class: 'flashcard-face flashcard-back' }, h('span', null, card.back || t('cardEmpty')))
    );

    var stage = h('div', { class: 'card-stage' },
      h('div', { class: 'card-wrapper' }, markOverlayBtn, flashcard)
    );

    var controls = h('div', { class: 'browse-controls' },
      h('button', {
        class: 'icon-btn icon-btn--tonal', type: 'button', title: t('previous'), 'aria-label': t('previous'),
        onclick: function () { moveCard(-1); }
      }, iconNode('chevronLeft', 22)),
      h('button', { class: 'btn btn--tonal', type: 'button', onclick: toggleFlip },
        iconNode('flip', 18), h('span', null, t('flip'))),
      h('button', {
        class: 'icon-btn icon-btn--tonal', type: 'button', title: t('next'), 'aria-label': t('next'),
        onclick: function () { moveCard(1); }
      }, iconNode('chevronRight', 22))
    );

    wrap.append(head);
    if (filterRow) wrap.append(filterRow);
    wrap.append(progress, stage, controls);
  }

  function toggleFlip() {
    browse.flipped = !browse.flipped;
    var el = $('.flashcard');
    if (el) el.classList.toggle('flipped', browse.flipped);
  }

  function moveCard(delta) {
    var visible = getVisibleIndices();
    if (!visible.length) return;
    browse.pos = (browse.pos + delta + visible.length) % visible.length;
    browse.flipped = false;
    renderBrowse();
  }

  function shuffleDeck() {
    var set = getActiveSet();
    if (!set || !set.cards.length) return;
    var order = set.cards.map(function (_, i) { return i; });
    for (var i = order.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = order[i]; order[i] = order[j]; order[j] = tmp;
    }
    browse.order = order;
    browse.pos = 0;
    browse.flipped = false;
    renderBrowse();
  }

  function toggleCardMark() {
    var set = getActiveSet();
    if (!set) return;
    var visible = getVisibleIndices();
    if (!visible.length) return;
    var idx = visible[browse.pos];
    if (idx === undefined || !set.cards[idx]) return;
    set.cards[idx].marked = !set.cards[idx].marked;
    persist();
    if (browse.filter === 'marked' && !set.cards[idx].marked) {
      var newVisible = getVisibleIndices();
      if (browse.pos >= newVisible.length) browse.pos = Math.max(0, newVisible.length - 1);
    }
    renderBrowse();
    renderSets();
  }

  /* ==========================================================
     10. Sets view
     ========================================================== */
  function renderSets() {
    var wrap = $('#setsContent');
    if (!wrap) return;
    wrap.innerHTML = '';

    wrap.append(h('div', { class: 'section-head' }, h('h2', { class: 'section-title' }, t('setsTitle'))));

    if (!state.sets.length) {
      wrap.append(buildEmptyState({
        iconName: 'grid', title: t('noSetsTitle'), desc: t('noSetsDesc'),
        action: { label: t('createSet'), onClick: function () { openEditor(null); } }
      }));
      return;
    }

    var list = h('div', { class: 'sets-list' });

    state.sets.forEach(function (set) {
      var isActive = set.id === state.activeSetId;
      var m = markedCount(set);

      var shareBtn = h('button', {
        class: 'icon-btn', type: 'button', title: t('shareSet'), 'aria-label': t('shareSet'),
        onclick: function (e) { e.stopPropagation(); openShareDialog(set.id); }
      }, iconNode('share', 20));

      var editBtn = h('button', {
        class: 'icon-btn', type: 'button', title: t('edit'), 'aria-label': t('edit'),
        onclick: function (e) { e.stopPropagation(); openEditor(set.id); }
      }, iconNode('edit', 20));

      var delBtn = h('button', {
        class: 'icon-btn icon-btn--danger', type: 'button', title: t('delete'), 'aria-label': t('delete'),
        onclick: function (e) { e.stopPropagation(); askDeleteSet(set.id); }
      }, iconNode('trash', 20));

      var sub = cardCountLabel(set.cards.length) + (m > 0 ? ' · ★ ' + m : '');

      var card = h('div', {
        class: 'set-card' + (isActive ? ' active' : ''),
        role: 'button', tabindex: '0',
        'aria-pressed': isActive ? 'true' : 'false',
        onclick: function () { selectSet(set.id); },
        onkeydown: function (e) {
          if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
            e.preventDefault(); selectSet(set.id);
          }
        }
      },
        h('div', { class: 'set-card-icon' }, iconNode('cards', 22)),
        h('div', { class: 'set-card-body' },
          h('div', { class: 'set-card-title' }, set.name || t('untitledSet')),
          h('div', { class: 'set-card-sub' }, sub)
        ),
        h('div', { class: 'set-card-actions' }, shareBtn, editBtn, delBtn)
      );

      list.append(card);
    });

    wrap.append(list);
  }

  function selectSet(id) {
    state.activeSetId = id;
    persist();
    browse.filter = 'all';
    browse.pos = 0;
    browse.flipped = false;
    syncBrowse(true);
    switchView('browse');
    renderBrowse();
    renderSets();
  }

  /* ==========================================================
     11. Editor
     ========================================================== */
  var editor = null;

  function openEditor(setId) {
    var set = setId ? getSetById(setId) : null;
    editor = {
      id: set ? set.id : null,
      name: set ? set.name : '',
      cards: set && set.cards.length
        ? set.cards.map(function (c) { return { id: c.id, front: c.front, back: c.back, marked: !!c.marked }; })
        : [{ id: uid(), front: '', back: '', marked: false }]
    };

    $('#editorTitle').textContent = set ? t('editSet') : t('newSet');
    $('#editorNameLabel').textContent = t('setName');
    $('#editorCardsLabel').textContent = t('cardsLabel');
    $('#editorSaveBtn').textContent = t('save');
    $('#addCardLabel').textContent = t('addCard');

    var nameInput = $('#editorName');
    nameInput.value = editor.name;
    nameInput.placeholder = t('setNamePlaceholder');

    renderEditorCards();
    var dlg = $('#editorDialog');
    if (!dlg.open) dlg.showModal();
    setTimeout(function () { nameInput.focus(); }, 30);
  }

  function updateMarkButton(btn, marked) {
    btn.classList.toggle('marked', marked);
    btn.setAttribute('aria-pressed', marked ? 'true' : 'false');
    btn.title = marked ? t('unmark') : t('mark');
    btn.setAttribute('aria-label', btn.title);
    btn.innerHTML = '';
    btn.appendChild(iconNode(marked ? 'starFilled' : 'star', 20));
  }

  function renderEditorCards() {
    var list = $('#editorCards');
    if (!list) return;
    list.innerHTML = '';

    editor.cards.forEach(function (card, index) {
      var frontInput = h('input', {
        class: 'field', type: 'text', value: card.front,
        placeholder: t('frontPlaceholder'), 'aria-label': t('front'), autocomplete: 'off',
        oninput: function (e) { card.front = e.target.value; }
      });
      var backInput = h('input', {
        class: 'field', type: 'text', value: card.back,
        placeholder: t('backPlaceholder'), 'aria-label': t('back'), autocomplete: 'off',
        oninput: function (e) { card.back = e.target.value; }
      });

      var markBtn = h('button', {
        class: 'icon-btn card-mark-btn' + (card.marked ? ' marked' : ''),
        type: 'button',
        title: card.marked ? t('unmark') : t('mark'),
        'aria-label': card.marked ? t('unmark') : t('mark'),
        'aria-pressed': card.marked ? 'true' : 'false'
      }, iconNode(card.marked ? 'starFilled' : 'star', 20));
      markBtn.addEventListener('click', function () {
        card.marked = !card.marked;
        updateMarkButton(markBtn, card.marked);
      });

      var removeBtn = h('button', {
        class: 'icon-btn icon-btn--danger', type: 'button', title: t('removeCard'), 'aria-label': t('removeCard'),
        onclick: function () {
          editor.cards.splice(index, 1);
          if (!editor.cards.length) editor.cards.push({ id: uid(), front: '', back: '', marked: false });
          renderEditorCards();
        }
      }, iconNode('trash', 20));

      list.append(h('div', { class: 'card-row' },
        h('div', { class: 'card-row-num' }, String(index + 1)),
        h('div', { class: 'card-row-fields' }, frontInput, backInput),
        markBtn,
        removeBtn
      ));
    });
  }

  function addEditorCard() {
    editor.cards.push({ id: uid(), front: '', back: '', marked: false });
    renderEditorCards();
    var rows = $$('#editorCards .card-row');
    var last = rows[rows.length - 1];
    if (last) {
      if (last.scrollIntoView) last.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      var input = $('.field', last);
      if (input) input.focus();
    }
  }

  function saveEditor() {
    if (!editor) return;
    var name = ($('#editorName').value || '').trim() || t('untitledSet');
    var cards = editor.cards.map(function (c) {
      return {
        id: c.id,
        front: (c.front || '').trim(),
        back: (c.back || '').trim(),
        marked: !!c.marked
      };
    }).filter(function (c) { return c.front || c.back; });

    if (editor.id) {
      var existing = getSetById(editor.id);
      if (existing) {
        existing.name = name;
        existing.cards = cards;
        existing.updatedAt = Date.now();
      }
    } else {
      var newSet = { id: uid(), name: name, cards: cards, updatedAt: Date.now() };
      state.sets.unshift(newSet);
      state.activeSetId = newSet.id;
    }

    if (!state.sets.some(function (s) { return s.id === state.activeSetId; })) {
      state.activeSetId = state.sets.length ? state.sets[0].id : null;
    }

    persist();
    syncBrowse(true);
    var dlg = $('#editorDialog');
    if (dlg.open) dlg.close();
    editor = null;
    renderSets();
    renderBrowse();
  }

  /* ==========================================================
     12. Delete set
     ========================================================== */
  var pendingDeleteId = null;

  function askDeleteSet(id) {
    var set = getSetById(id);
    if (!set) return;
    pendingDeleteId = id;
    $('#confirmTitle').textContent = t('deleteSetTitle');
    $('#confirmDesc').textContent = t('deleteSetDesc', { name: set.name || t('untitledSet') });
    $('#confirmCancel').textContent = t('cancel');
    $('#confirmOk').textContent = t('delete');
    var dlg = $('#confirmDialog');
    if (!dlg.open) dlg.showModal();
  }

  function confirmDeleteSet() {
    if (!pendingDeleteId) return;
    var id = pendingDeleteId;
    pendingDeleteId = null;
    state.sets = state.sets.filter(function (s) { return s.id !== id; });
    if (state.activeSetId === id) state.activeSetId = state.sets.length ? state.sets[0].id : null;
    persist();
    syncBrowse(true);
    var dlg = $('#confirmDialog');
    if (dlg.open) dlg.close();
    renderSets();
    renderBrowse();
  }

  /* ==========================================================
     13. Settings
     ========================================================== */
  function syncSegmented() {
    $$('#langSegmented button').forEach(function (b) {
      b.classList.toggle('active', b.dataset.lang === state.lang);
      b.setAttribute('aria-pressed', b.dataset.lang === state.lang ? 'true' : 'false');
    });
    $$('#themeSegmented button').forEach(function (b) {
      b.classList.toggle('active', b.dataset.themeOpt === state.theme);
      b.setAttribute('aria-pressed', b.dataset.themeOpt === state.theme ? 'true' : 'false');
    });
  }

  function setLanguage(lang) {
    if (lang !== 'pl' && lang !== 'en') return;
    if (state.lang === lang) return;
    state.lang = lang;
    persist();
    applyI18n();
    syncSegmented();
    renderSets();
    renderBrowse();
  }

  function setTheme(theme) {
    if (['system', 'light', 'dark'].indexOf(theme) === -1) return;
    state.theme = theme;
    persist();
    applyTheme();
    syncSegmented();
  }

  function applyI18n() {
    document.documentElement.lang = state.lang;
    $$('[data-i18n]').forEach(function (el) { el.textContent = t(el.dataset.i18n); });
    $$('[data-i18n-aria]').forEach(function (el) { el.setAttribute('aria-label', t(el.dataset.i18nAria)); });
    $$('[data-i18n-title]').forEach(function (el) { el.setAttribute('title', t(el.dataset.i18nTitle)); });
    var sb = $('#settingsBtn'); if (sb) sb.setAttribute('aria-label', t('settings'));
    var fab = $('#fabNewSet'); if (fab) fab.setAttribute('aria-label', t('newSet'));
    var st = $('#settingsTitle'); if (st) st.textContent = t('settings');
  }

  /* ==========================================================
     14. Toast
     ========================================================== */
  function showToast(message) {
    var toast = $('#toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast';
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('visible');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(function () { toast.classList.remove('visible'); }, 2600);
  }

  /* ==========================================================
     15. Backup / Share / Import
     ========================================================== */
  function timestamp() {
    var d = new Date();
    function pad(n) { return n < 10 ? '0' + n : String(n); }
    return d.getFullYear() + pad(d.getMonth() + 1) + pad(d.getDate()) + '-' + pad(d.getHours()) + pad(d.getMinutes());
  }

  function slugify(s) {
    return (s || 'set').toString().toLowerCase()
      .replace(/[^\w\u00C0-\u024F\-]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .slice(0, 40) || 'set';
  }

  function downloadJson(data, filename) {
    try {
      var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url; a.download = filename;
      document.body.appendChild(a); a.click(); document.body.removeChild(a);
      setTimeout(function () { URL.revokeObjectURL(url); }, 1500);
      return true;
    } catch (err) {
      console.warn('[Fisky] download failed:', err);
      return false;
    }
  }

  function exportBackup() {
    var data = {
      format: BACKUP_FORMAT,
      version: 1,
      exportedAt: new Date().toISOString(),
      data: {
        sets: state.sets,
        activeSetId: state.activeSetId,
        lang: state.lang,
        theme: state.theme
      }
    };
    if (downloadJson(data, 'fisky-backup-' + timestamp() + '.json')) {
      showToast(t('backupExported'));
    }
  }

  function detectFormat(parsed) {
    if (!parsed || typeof parsed !== 'object') return null;
    if (parsed.format === BACKUP_FORMAT) return 'backup';
    if (parsed.format === SET_FORMAT) return 'set';
    if (parsed.data && Array.isArray(parsed.data.sets)) return 'backup';
    if (Array.isArray(parsed.cards) && typeof parsed.name === 'string') return 'set';
    return null;
  }

  var pendingImport = null;

  function importBackupFile(file) {
    file.text().then(function (text) {
      var parsed;
      try { parsed = JSON.parse(text); }
      catch (e) { showToast(t('importError')); return; }
      if (detectFormat(parsed) !== 'backup') { showToast(t('importError')); return; }
      var data = parsed.data || parsed;

      var sets = Array.isArray(data.sets) ? data.sets : [];
      var totalCards = sets.reduce(function (n, s) {
        return n + (Array.isArray(s.cards) ? s.cards.length : 0);
      }, 0);

      pendingImport = data;

      $('#importTitle').textContent = t('importBackupTitle');
      $('#importDesc').textContent = t('importBackupDesc', { sets: sets.length, cards: totalCards });
      $('#importCancel').textContent = t('cancel');
      $('#importMerge').textContent = t('importMerge');
      $('#importReplace').textContent = t('importReplace');

      var dlg = $('#importConfirmDialog');
      if (!dlg.open) dlg.showModal();
    }).catch(function () { showToast(t('importError')); });
  }

  function performMergeImport() {
    if (!pendingImport) return;
    var newSets = (pendingImport.sets || []).map(freshSet);
    state.sets = state.sets.concat(newSets);
    if (!state.sets.some(function (s) { return s.id === state.activeSetId; })) {
      state.activeSetId = state.sets.length ? state.sets[0].id : null;
    }
    persist();
    syncBrowse(true);
    pendingImport = null;
    var dlg = $('#importConfirmDialog'); if (dlg.open) dlg.close();
    renderSets();
    renderBrowse();
    showToast(t('importSuccess'));
  }

  function performReplaceImport() {
    if (!pendingImport) return;
    var data = pendingImport;
    state.sets = (data.sets || []).map(normalizeSet);
    state.activeSetId = (data.activeSetId && state.sets.some(function (s) { return s.id === data.activeSetId; }))
      ? data.activeSetId
      : (state.sets.length ? state.sets[0].id : null);
    if (data.lang === 'pl' || data.lang === 'en') state.lang = data.lang;
    if (['system', 'light', 'dark'].indexOf(data.theme) !== -1) state.theme = data.theme;
    persist();
    applyTheme();
    pendingImport = null;
    var dlg = $('#importConfirmDialog'); if (dlg.open) dlg.close();
    applyI18n();
    syncSegmented();
    syncBrowse(true);
    renderSets();
    renderBrowse();
    showToast(t('importSuccess'));
  }

  /* Share set */
  var shareSetId = null;

  function openShareDialog(setId) {
    var set = getSetById(setId);
    if (!set) return;
    shareSetId = setId;

    var m = markedCount(set);
    var base = cardCountLabel(set.cards.length);
    var desc = state.lang === 'pl'
      ? (base + (m > 0 ? ', w tym ' + m + ' oznaczonych' : ''))
      : (base + (m > 0 ? ', ' + m + ' marked' : ''));

    $('#shareTitle').textContent = t('shareSetTitle');
    $('#shareDesc').textContent = (set.name || t('untitledSet')) + ' — ' + desc;
    $('#shareIncludeMarksLabel').textContent = t('shareIncludeMarks');
    $('#shareIncludeMarks').checked = true;
    $('#shareCancel').textContent = t('cancel');
    $('#shareDownload').textContent = t('shareDownload');

    var dlg = $('#shareDialog');
    if (!dlg.open) dlg.showModal();
  }

  function performShareDownload() {
    var set = getSetById(shareSetId);
    if (!set) return;
    var includeMarks = $('#shareIncludeMarks').checked;
    var cards = set.cards.map(function (c) {
      var out = { front: c.front, back: c.back };
      if (includeMarks) out.marked = !!c.marked;
      return out;
    });
    var data = {
      format: SET_FORMAT,
      version: 1,
      exportedAt: new Date().toISOString(),
      includeMarks: includeMarks,
      name: set.name || t('untitledSet'),
      cards: cards
    };
    var ok = downloadJson(data, slugify(set.name) + '.fisky.json');
    var dlg = $('#shareDialog'); if (dlg.open) dlg.close();
    if (ok) showToast(t('shareSuccess'));
    else showToast(t('shareError'));
  }

  function importSetFile(file) {
    file.text().then(function (text) {
      var parsed;
      try { parsed = JSON.parse(text); }
      catch (e) { showToast(t('importError')); return; }
      if (detectFormat(parsed) !== 'set' || !Array.isArray(parsed.cards)) {
        showToast(t('importError')); return;
      }
      var newSet = {
        id: uid(),
        name: (typeof parsed.name === 'string' && parsed.name.trim()) ? parsed.name.trim() : t('untitledSet'),
        cards: parsed.cards.map(function (c) {
          c = c || {};
          return {
            id: uid(),
            front: typeof c.front === 'string' ? c.front : '',
            back: typeof c.back === 'string' ? c.back : '',
            marked: !!c.marked
          };
        }),
        updatedAt: Date.now()
      };
      state.sets.unshift(newSet);
      state.activeSetId = newSet.id;
      persist();
      browse.filter = 'all';
      browse.pos = 0;
      syncBrowse(true);
      switchView('browse');
      renderSets();
      renderBrowse();
      showToast(t('importSuccess'));
    }).catch(function () { showToast(t('importError')); });
  }

  /* ==========================================================
     16. Render całości
     ========================================================== */
  function renderAll() {
    applyI18n();
    syncBrowse(false);
    renderSets();
    renderBrowse();
    updateNav();
    updateFab();
    syncSegmented();
  }

  /* ==========================================================
     17. PWA (SW + apple-touch-icon)
     ========================================================== */
  function setupPWA() {
    try {
      var svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">' +
        '<rect width="512" height="512" rx="112" fill="#415F91"/>' +
        '<text x="256" y="256" font-family="system-ui,-apple-system,Segoe UI,Roboto,sans-serif" ' +
        'font-size="280" font-weight="700" fill="#FFFFFF" text-anchor="middle" ' +
        'dominant-baseline="central">F</text></svg>';
      var img = new Image();
      img.onload = function () {
        try {
          var size = 180, canvas = document.createElement('canvas');
          canvas.width = canvas.height = size;
          canvas.getContext('2d').drawImage(img, 0, 0, size, size);
          var link = document.createElement('link');
          link.rel = 'apple-touch-icon';
          link.href = canvas.toDataURL('image/png');
          document.head.appendChild(link);
        } catch (e) {}
      };
      img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
    } catch (e) {}

    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function () {
        navigator.serviceWorker.register('sw.js').catch(function (err) {
          console.warn('[Fisky] SW:', err);
        });
      });
    }
  }

  /* ==========================================================
     18. Zdarzenia
     ========================================================== */
  function bindEvents() {
    $$('[data-view]').forEach(function (btn) {
      btn.addEventListener('click', function () { switchView(btn.dataset.view); });
    });

    var fab = $('#fabNewSet');
    if (fab) fab.addEventListener('click', function () { openEditor(null); });

    var settingsBtn = $('#settingsBtn');
    if (settingsBtn) {
      settingsBtn.addEventListener('click', function () {
        syncSegmented();
        var dlg = $('#settingsDialog');
        if (!dlg.open) dlg.showModal();
      });
    }
    var settingsCloseBtn = $('#settingsCloseBtn');
    if (settingsCloseBtn) settingsCloseBtn.addEventListener('click', function () { $('#settingsDialog').close(); });

    $$('#langSegmented button').forEach(function (b) {
      b.addEventListener('click', function () { setLanguage(b.dataset.lang); });
    });
    $$('#themeSegmented button').forEach(function (b) {
      b.addEventListener('click', function () { setTheme(b.dataset.themeOpt); });
    });

    var editorCloseBtn = $('#editorCloseBtn');
    if (editorCloseBtn) editorCloseBtn.addEventListener('click', function () { $('#editorDialog').close(); editor = null; });
    var editorSaveBtn = $('#editorSaveBtn');
    if (editorSaveBtn) editorSaveBtn.addEventListener('click', saveEditor);
    var addCardBtn = $('#addCardBtn');
    if (addCardBtn) addCardBtn.addEventListener('click', addEditorCard);
    var nameInput = $('#editorName');
    if (nameInput) nameInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') { e.preventDefault(); nameInput.blur(); }
    });

    var confirmCancel = $('#confirmCancel');
    if (confirmCancel) confirmCancel.addEventListener('click', function () { pendingDeleteId = null; $('#confirmDialog').close(); });
    var confirmOk = $('#confirmOk');
    if (confirmOk) confirmOk.addEventListener('click', confirmDeleteSet);

    var importCancel = $('#importCancel');
    if (importCancel) importCancel.addEventListener('click', function () { pendingImport = null; $('#importConfirmDialog').close(); });
    var importMerge = $('#importMerge');
    if (importMerge) importMerge.addEventListener('click', performMergeImport);
    var importReplace = $('#importReplace');
    if (importReplace) importReplace.addEventListener('click', performReplaceImport);

    var shareCloseBtn = $('#shareCloseBtn');
    if (shareCloseBtn) shareCloseBtn.addEventListener('click', function () { $('#shareDialog').close(); });
    var shareCancel = $('#shareCancel');
    if (shareCancel) shareCancel.addEventListener('click', function () { $('#shareDialog').close(); });
    var shareDownload = $('#shareDownload');
    if (shareDownload) shareDownload.addEventListener('click', performShareDownload);

    var exportBackupBtn = $('#exportBackupBtn');
    if (exportBackupBtn) exportBackupBtn.addEventListener('click', exportBackup);
    var importBackupBtn = $('#importBackupBtn');
    if (importBackupBtn) importBackupBtn.addEventListener('click', function () { $('#backupFileInput').click(); });
    var importSetBtn = $('#importSetBtn');
    if (importSetBtn) importSetBtn.addEventListener('click', function () { $('#setFileInput').click(); });

    var backupFileInput = $('#backupFileInput');
    if (backupFileInput) backupFileInput.addEventListener('change', function (e) {
      var file = e.target.files && e.target.files[0];
      if (file) importBackupFile(file);
      e.target.value = '';
    });
    var setFileInput = $('#setFileInput');
    if (setFileInput) setFileInput.addEventListener('change', function (e) {
      var file = e.target.files && e.target.files[0];
      if (file) importSetFile(file);
      e.target.value = '';
    });

    $$('dialog').forEach(function (dlg) {
      dlg.addEventListener('click', function (e) {
        if (e.target === dlg) {
          if (dlg.id === 'editorDialog') editor = null;
          if (dlg.id === 'confirmDialog') pendingDeleteId = null;
          if (dlg.id === 'importConfirmDialog') pendingImport = null;
          dlg.close();
        }
      });
      dlg.addEventListener('cancel', function () {
        if (dlg.id === 'editorDialog') editor = null;
        if (dlg.id === 'confirmDialog') pendingDeleteId = null;
        if (dlg.id === 'importConfirmDialog') pendingImport = null;
      });
    });

    if (darkQuery) {
      if (darkQuery.addEventListener) darkQuery.addEventListener('change', onSystemThemeChange);
      else if (darkQuery.addListener) darkQuery.addListener(onSystemThemeChange);
    }

    document.addEventListener('keydown', function (e) {
      if ($$('dialog[open]').length) return;
      if (currentView !== 'browse') return;
      if (e.target && /^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName)) return;
      if (e.key === 'ArrowRight') { e.preventDefault(); moveCard(1); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); moveCard(-1); }
      else if (e.key === ' ' || e.key === 'Spacebar') { e.preventDefault(); toggleFlip(); }
    });

    var touchStartX = 0, touchStartY = 0, touchActive = false;
    document.addEventListener('touchstart', function (e) {
      if (currentView !== 'browse') return;
      var card = e.target.closest ? e.target.closest('.flashcard') : null;
      if (!card) return;
      touchActive = true;
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    }, { passive: true });
    document.addEventListener('touchend', function (e) {
      if (!touchActive) return;
      touchActive = false;
      var t0 = e.changedTouches[0];
      var dx = t0.clientX - touchStartX, dy = t0.clientY - touchStartY;
      if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.6) moveCard(dx < 0 ? 1 : -1);
    }, { passive: true });
  }

  /* ==========================================================
     19. Start
     ========================================================== */
  function hydrateIcons() {
    $$('[data-icon]').forEach(function (el) {
      var size = parseInt(el.dataset.iconSize, 10) || 24;
      el.innerHTML = icon(el.dataset.icon, size);
      if (!el.classList.contains('icon')) el.classList.add('icon');
    });
  }

  function init() {
    applyTheme();
    hydrateIcons();
    bindEvents();
    syncBrowse(true);
    renderAll();
    switchView('browse');
    setupPWA();
    document.body.addEventListener('touchmove', function (e) {
      if (e.touches.length > 1) e.preventDefault();
    }, { passive: false });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();