(function () {
  'use strict';

  var BATCHES = {
    A: { key: 'A', label: 'Batch A', data: (window.BATCH_A || []) },
    B: { key: 'B', label: 'Batch B', data: (window.BATCH_B || []) },
    C: { key: 'C', label: 'Batch C', data: (window.BATCH_C || []) },
    D: { key: 'D', label: 'Batch D', data: (window.BATCH_D || []) },
    E: { key: 'E', label: 'Batch E', data: (window.BATCH_E || []) },
    F: { key: 'F', label: 'Batch F', data: (window.BATCH_F || []) }
  };

  var state = {
    selectedBatch: null,
    questions: [],      // shuffled working copy for this attempt
    current: 0,
    answers: [],         // per question: array of selected option indexes (mcq) or {itemId: targetId} map (dragdrop)
    selectedDragItem: null // itemId currently "picked up" for tap-to-place, or null
  };

  // ---------- utilities ----------
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  // Renders question/explanation text, turning ```...``` fenced blocks into <code class="q-codeblock">
  function renderRichText(str) {
    if (!str) return '';
    var parts = String(str).split(/```/g);
    var html = '';
    for (var i = 0; i < parts.length; i++) {
      if (i % 2 === 0) {
        html += escapeHtml(parts[i]);
      } else {
        html += '<code class="q-codeblock">' + escapeHtml(parts[i].replace(/^\n/, '')) + '</code>';
      }
    }
    return html;
  }

  function letters(n) {
    var out = [];
    for (var i = 0; i < n; i++) out.push(String.fromCharCode(65 + i));
    return out;
  }

  // ---------- build a fresh shuffled attempt from a batch ----------
  function prepareAttempt(batchKey) {
    var src = BATCHES[batchKey].data;
    var shuffledQuestions = shuffle(src).map(function (q) {
      if (q.type === 'dragdrop') {
        return {
          type: 'dragdrop',
          number: q.number,
          question: q.question,
          image: q.image || null,
          items: shuffle(q.items),
          targets: shuffle(q.targets),
          correctMapping: q.correctMapping,
          explanation: q.explanation
        };
      }
      var optionOrder = shuffle(q.options.map(function (_, idx) { return idx; }));
      var newOptions = optionOrder.map(function (origIdx) { return q.options[origIdx]; });
      var newCorrect = [];
      optionOrder.forEach(function (origIdx, newIdx) {
        if (q.correctIndexes.indexOf(origIdx) !== -1) newCorrect.push(newIdx);
      });
      return {
        type: 'mcq',
        number: q.number,
        question: q.question,
        image: q.image || null,
        options: newOptions,
        correctIndexes: newCorrect,
        explanation: q.explanation
      };
    });
    state.selectedBatch = batchKey;
    state.questions = shuffledQuestions;
    state.current = 0;
    state.selectedDragItem = null;
    state.answers = shuffledQuestions.map(function (q) { return q.type === 'dragdrop' ? {} : []; });
  }

  // ---------- SELECT SCREEN ----------
  var screenSelect = document.getElementById('screen-select');
  var screenQuiz = document.getElementById('screen-quiz');
  var screenResults = document.getElementById('screen-results');
  var batchGrid = document.getElementById('batch-grid');
  var btnStart = document.getElementById('btn-start');

  var pendingBatch = null;

  function renderBatchGrid() {
    batchGrid.innerHTML = '';
    ['A', 'B', 'C', 'D', 'E', 'F'].forEach(function (key) {
      var b = BATCHES[key];
      var card = document.createElement('div');
      card.className = 'batch-card';
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.innerHTML =
        '<div class="batch-card__check">&#10003;</div>' +
        '<h3 class="batch-card__title">' + b.label + '</h3>' +
        '<p class="batch-card__count">' + b.data.length + ' questions &middot; mixed topics</p>';
      card.addEventListener('click', function () { selectBatch(key, card); });
      card.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); selectBatch(key, card); }
      });
      batchGrid.appendChild(card);
    });
  }

  function selectBatch(key, cardEl) {
    pendingBatch = key;
    Array.prototype.forEach.call(batchGrid.children, function (c) { c.classList.remove('is-selected'); });
    cardEl.classList.add('is-selected');
    btnStart.disabled = false;
  }

  btnStart.addEventListener('click', function () {
    if (!pendingBatch) return;
    startQuiz(pendingBatch);
  });

  function showScreen(name) {
    screenSelect.hidden = name !== 'select';
    screenQuiz.hidden = name !== 'quiz';
    screenResults.hidden = name !== 'results';
    window.scrollTo(0, 0);
  }

  function startQuiz(batchKey) {
    prepareAttempt(batchKey);
    showScreen('quiz');
    renderQuestion();
  }

  // ---------- QUIZ SCREEN ----------
  var questionCard = document.getElementById('question-card');
  var progressFill = document.getElementById('progress-fill');
  var progressLabel = document.getElementById('quiz-progress-label');
  var btnPrev = document.getElementById('btn-prev');
  var btnNext = document.getElementById('btn-next');
  var btnQuit = document.getElementById('btn-quit');
  var answeredHint = document.getElementById('answered-hint');

  function currentQuestion() { return state.questions[state.current]; }

  function renderQuestion() {
    var q = currentQuestion();
    var total = state.questions.length;
    var selected = state.answers[state.current];

    progressLabel.textContent = 'Question ' + (state.current + 1) + '/' + total;
    progressFill.style.width = (((state.current) / total) * 100) + '%';

    var html = '';
    if (q.image) {
      html += '<div class="q-image-wrap" data-img="assets/' + q.image + '"><img src="assets/' + q.image + '" alt="Exhibit for question ' + q.number + '" loading="lazy" /></div>';
      html += '<p class="q-image-hint">Tap the image to zoom</p>';
    }
    html += '<p class="q-text">' + renderRichText(q.question) + '</p>';

    if (q.type === 'dragdrop') {
      html += renderDragdropBody(q, selected);
    } else {
      var isMulti = q.correctIndexes.length > 1;
      if (isMulti) {
        html += '<p class="q-multi-hint">Select ' + q.correctIndexes.length + ' answers.</p>';
      }
      html += '<div class="options-list" role="group">';
      q.options.forEach(function (opt, idx) {
        var isSelected = selected.indexOf(idx) !== -1;
        html += '<button type="button" class="option ' + (isMulti ? '' : 'option--radio') + (isSelected ? ' is-selected' : '') + '" data-idx="' + idx + '">' +
          '<span class="option__marker">' + (isSelected ? '&#10003;' : letters(q.options.length)[idx]) + '</span>' +
          '<span class="option__text">' + renderRichText(opt) + '</span>' +
          '</button>';
      });
      html += '</div>';
    }

    questionCard.innerHTML = html;

    if (q.image) {
      questionCard.querySelector('.q-image-wrap').addEventListener('click', function () {
        openLightbox('assets/' + q.image);
      });
    }

    if (q.type === 'dragdrop') {
      wireDragdropEvents(q, selected);
    } else {
      var isMultiWire = q.correctIndexes.length > 1;
      Array.prototype.forEach.call(questionCard.querySelectorAll('.option'), function (btn) {
        btn.addEventListener('click', function () {
          var idx = parseInt(btn.getAttribute('data-idx'), 10);
          toggleAnswer(idx, isMultiWire);
        });
      });
    }

    btnPrev.disabled = state.current === 0;
    btnNext.textContent = state.current === total - 1 ? 'Submit' : 'Next';
    updateAnsweredHint();
  }

  // ---------- DRAG AND DROP QUESTION TYPE ----------
  function renderDragdropBody(q, assign) {
    var placedIds = Object.keys(assign);
    var html = '';
    html += '<p class="dragdrop-hint">Drag each item onto its matching target — or tap an item, then tap a target. Tap a placed item to pull it back.</p>';
    html += '<div class="dragdrop-wrap">';

    html += '<div class="dragdrop-side">';
    html += '<p class="dragdrop-side__label">Items</p>';
    html += '<div class="dragdrop-pool" data-role="pool">';
    var anyUnplaced = false;
    q.items.forEach(function (item) {
      if (placedIds.indexOf(item.id) !== -1) return;
      anyUnplaced = true;
      var isSelected = state.selectedDragItem === item.id;
      html += '<div class="dragdrop-chip' + (isSelected ? ' is-selected' : '') + '" draggable="true" data-item-id="' + item.id + '">' +
        renderRichText(item.text) + '</div>';
    });
    if (!anyUnplaced) {
      html += '<div class="dragdrop-pool-empty">All items placed</div>';
    }
    html += '</div></div>';

    html += '<div class="dragdrop-side">';
    html += '<p class="dragdrop-side__label">Targets</p>';
    html += '<div class="dragdrop-targets">';
    q.targets.forEach(function (target) {
      var itemsHere = q.items.filter(function (it) { return assign[it.id] === target.id; });
      html += '<div class="dragdrop-target" data-target-id="' + target.id + '">';
      html += '<div class="dragdrop-target__label">' + renderRichText(target.text) + '</div>';
      html += '<div class="dragdrop-target__body">';
      if (itemsHere.length === 0) {
        html += '<div class="dragdrop-target__placeholder">Drop here</div>';
      } else {
        itemsHere.forEach(function (it) {
          html += '<div class="dragdrop-chip dragdrop-chip--placed" draggable="true" data-item-id="' + it.id + '">' +
            renderRichText(it.text) + '</div>';
        });
      }
      html += '</div></div>';
    });
    html += '</div></div>';

    html += '</div>';
    return html;
  }

  function wireDragdropEvents(q, assign) {
    function assignItem(itemId, targetId) {
      state.answers[state.current][itemId] = targetId;
      state.selectedDragItem = null;
      renderQuestion();
    }
    function unassignItem(itemId) {
      delete state.answers[state.current][itemId];
      state.selectedDragItem = null;
      renderQuestion();
    }

    var pool = questionCard.querySelector('.dragdrop-pool');
    if (pool) {
      pool.addEventListener('dragover', function (e) { e.preventDefault(); });
      pool.addEventListener('drop', function (e) {
        e.preventDefault();
        var itemId = e.dataTransfer.getData('text/plain');
        if (itemId && assign[itemId]) unassignItem(itemId);
      });
    }

    Array.prototype.forEach.call(questionCard.querySelectorAll('.dragdrop-chip'), function (chip) {
      var itemId = chip.getAttribute('data-item-id');

      chip.addEventListener('dragstart', function (e) {
        e.dataTransfer.setData('text/plain', itemId);
        e.dataTransfer.effectAllowed = 'move';
      });

      chip.addEventListener('click', function (e) {
        e.stopPropagation();
        var isPlaced = !!assign[itemId];
        if (isPlaced) {
          unassignItem(itemId);
        } else {
          state.selectedDragItem = (state.selectedDragItem === itemId) ? null : itemId;
          renderQuestion();
        }
      });
    });

    Array.prototype.forEach.call(questionCard.querySelectorAll('.dragdrop-target'), function (targetEl) {
      var targetId = targetEl.getAttribute('data-target-id');

      targetEl.addEventListener('dragover', function (e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        targetEl.classList.add('is-dragover');
      });
      targetEl.addEventListener('dragleave', function () {
        targetEl.classList.remove('is-dragover');
      });
      targetEl.addEventListener('drop', function (e) {
        e.preventDefault();
        targetEl.classList.remove('is-dragover');
        var itemId = e.dataTransfer.getData('text/plain');
        if (itemId) assignItem(itemId, targetId);
      });

      targetEl.addEventListener('click', function (e) {
        if (e.target.closest('.dragdrop-chip')) return;
        if (state.selectedDragItem) {
          assignItem(state.selectedDragItem, targetId);
        } else {
          var itemsHere = q.items.filter(function (it) { return assign[it.id] === targetId; });
          if (itemsHere.length === 1) unassignItem(itemsHere[0].id);
        }
      });
    });
  }

  function isDragdropCorrect(q, assign) {
    return q.items.every(function (it) {
      var expected = q.correctMapping[it.id] || null;
      var actual = assign[it.id] || null;
      return expected === actual;
    });
  }

  function updateAnsweredHint() {
    var answeredCount = state.answers.filter(function (a) {
      return Array.isArray(a) ? a.length > 0 : Object.keys(a).length > 0;
    }).length;
    answeredHint.textContent = answeredCount + '/' + state.questions.length + ' answered';
  }

  function toggleAnswer(idx, isMulti) {
    var arr = state.answers[state.current];
    var pos = arr.indexOf(idx);
    if (isMulti) {
      if (pos === -1) arr.push(idx); else arr.splice(pos, 1);
    } else {
      state.answers[state.current] = pos === -1 ? [idx] : [];
    }
    renderQuestion();
  }

  btnPrev.addEventListener('click', function () {
    if (state.current > 0) { state.current--; state.selectedDragItem = null; renderQuestion(); window.scrollTo(0, 0); }
  });

  btnNext.addEventListener('click', function () {
    state.selectedDragItem = null;
    if (state.current < state.questions.length - 1) {
      state.current++;
      renderQuestion();
      window.scrollTo(0, 0);
    } else {
      submitQuiz();
    }
  });

  btnQuit.addEventListener('click', function () {
    if (confirm('Leave this quiz and go back to batch selection? Your progress will be lost.')) {
      showScreen('select');
    }
  });

  // ---------- RESULTS SCREEN ----------
  var scoreRingFill = document.getElementById('score-ring-fill');
  var scorePct = document.getElementById('score-pct');
  var scoreHeadline = document.getElementById('score-headline');
  var scoreFraction = document.getElementById('score-fraction');
  var reviewList = document.getElementById('review-list');
  var reviewEmpty = document.getElementById('review-empty');
  var btnRetake = document.getElementById('btn-retake');
  var btnBack = document.getElementById('btn-back');

  var RING_CIRCUMFERENCE = 2 * Math.PI * 52;

  function arraysEqualAsSets(a, b) {
    if (a.length !== b.length) return false;
    var sa = a.slice().sort();
    var sb = b.slice().sort();
    for (var i = 0; i < sa.length; i++) if (sa[i] !== sb[i]) return false;
    return true;
  }

  function submitQuiz() {
    var total = state.questions.length;
    var correctCount = 0;
    var correctList = [];
    var missedList = [];

    state.questions.forEach(function (q, i) {
      var selected = state.answers[i];
      var isCorrect;
      if (q.type === 'dragdrop') {
        selected = selected || {};
        isCorrect = isDragdropCorrect(q, selected);
      } else {
        selected = selected || [];
        isCorrect = arraysEqualAsSets(selected, q.correctIndexes);
      }
      var entry = { q: q, selected: selected, isCorrect: isCorrect };
      if (isCorrect) {
        correctCount++;
        correctList.push(entry);
      } else {
        missedList.push(entry);
      }
    });

    var pct = Math.round((correctCount / total) * 100);

    scorePct.textContent = pct + '%';
    scoreFraction.textContent = correctCount + ' / ' + total + ' correct';
    scoreHeadline.textContent = headlineFor(pct);

    var offset = RING_CIRCUMFERENCE * (1 - pct / 100);
    scoreRingFill.style.strokeDasharray = RING_CIRCUMFERENCE;
    scoreRingFill.style.strokeDashoffset = RING_CIRCUMFERENCE;
    scoreRingFill.style.stroke = pct >= 80 ? 'var(--good)' : (pct >= 50 ? 'var(--accent)' : 'var(--bad)');
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        scoreRingFill.style.strokeDashoffset = offset;
      });
    });

    renderReview(correctList.concat(missedList), correctCount === total);
    showScreen('results');
  }

  function headlineFor(pct) {
    if (pct === 100) return 'Flawless run!';
    if (pct >= 90) return 'Excellent work!';
    if (pct >= 75) return 'Solid performance!';
    if (pct >= 50) return 'Good progress — keep drilling.';
    return "Let's review and try again.";
  }

  function renderReview(all, isPerfectScore) {
    reviewList.innerHTML = '';
    reviewEmpty.hidden = !isPerfectScore;

    all.forEach(function (item) {
      var q = item.q;
      var selected = item.selected;
      var isCorrect = item.isCorrect;

      var el = document.createElement('div');
      el.className = 'review-item';
      var html = '';
      if (q.image) {
        html += '<div class="q-image-wrap" data-img="assets/' + q.image + '"><img src="assets/' + q.image + '" alt="Exhibit for question ' + q.number + '" loading="lazy" /></div>';
      }
      html += '<p class="review-item__q"><span class="review-badge ' + (isCorrect ? 'review-badge--right' : 'review-badge--wrong') + '">' +
        (isCorrect ? '&#10003;' : '&#10007;') + '</span>' + renderRichText(q.question) + '</p>';

      if (q.type === 'dragdrop') {
        html += renderDragdropReview(q, selected);
      } else {
        var letterList = letters(q.options.length);
        var selectedText = selected.length
          ? selected.map(function (i) { return letterList[i] + '. ' + q.options[i]; }).join('  •  ')
          : '(no answer selected)';
        var correctText = q.correctIndexes.map(function (i) { return letterList[i] + '. ' + q.options[i]; }).join('  •  ');
        html += '<div class="review-answer-row"><span class="tag ' + (isCorrect ? 'tag--right' : 'tag--wrong') + '">Your answer</span><span class="val ' + (isCorrect ? 'is-right' : 'is-wrong') + '">' + escapeHtml(selectedText) + '</span></div>';
        html += '<div class="review-answer-row"><span class="tag tag--right">Correct answer</span><span class="val is-right">' + escapeHtml(correctText) + '</span></div>';
      }

      if (q.explanation) {
        html += '<div class="review-explanation"><strong>Explanation: </strong>' + renderRichText(q.explanation) + '</div>';
      }
      el.innerHTML = html;
      if (q.image) {
        el.querySelector('.q-image-wrap').addEventListener('click', function () {
          openLightbox('assets/' + q.image);
        });
      }
      reviewList.appendChild(el);
    });
  }

  function renderDragdropReview(q, assign) {
    function targetText(id) {
      if (!id) return '(left unplaced)';
      var match = q.targets.filter(function (t) { return t.id === id; })[0];
      return match ? match.text : '(left unplaced)';
    }
    var html = '<div class="dragdrop-review">';
    q.items.forEach(function (it) {
      var yourId = assign[it.id] || null;
      var correctId = q.correctMapping[it.id] || null;
      var isRight = yourId === correctId;
      html += '<div class="dragdrop-review-row ' + (isRight ? 'is-right' : 'is-wrong') + '">';
      html += '<span class="dragdrop-review-item">' + renderRichText(it.text) + '</span>';
      html += '<span class="dragdrop-review-arrow">&rarr;</span>';
      html += '<span class="dragdrop-review-your">' + escapeHtml(targetText(yourId)) + '</span>';
      if (!isRight) {
        html += '<span class="dragdrop-review-correct">Correct: ' + escapeHtml(targetText(correctId)) + '</span>';
      }
      html += '</div>';
    });
    html += '</div>';
    return html;
  }

  btnRetake.addEventListener('click', function () {
    startQuiz(state.selectedBatch);
  });

  btnBack.addEventListener('click', function () {
    pendingBatch = null;
    btnStart.disabled = true;
    Array.prototype.forEach.call(batchGrid.children, function (c) { c.classList.remove('is-selected'); });
    showScreen('select');
  });

  // ---------- LIGHTBOX ----------
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightbox-img');

  function openLightbox(src) {
    lightboxImg.src = src;
    lightbox.hidden = false;
  }
  lightbox.addEventListener('click', function () { lightbox.hidden = true; });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !lightbox.hidden) lightbox.hidden = true;
  });

  // ---------- INIT ----------
  renderBatchGrid();
  showScreen('select');
})();
