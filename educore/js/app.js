/**
 * EduCore – Core Application Logic
 * Authentication, navigation, state management, and helper utilities.
 */

// ─── Application State ────────────────────────────────────────────────────────
const S = {
  role:    'admin',
  user:    null,
  page:    'dashboard',
  attData: {},
};

// ─── Authentication ───────────────────────────────────────────────────────────
function setRole(r) {
  S.role = r;
  document.querySelectorAll('.role-tab').forEach((t, i) => {
    t.classList.toggle('active', ['admin', 'teacher', 'student', 'parent'][i] === r);
  });
}

function quickLogin(r) { S.role = r; setRole(r); doLogin(); }

function doLogin() {
  S.user = USERS[S.role];
  document.getElementById('loginScreen').classList.add('hidden');
  document.getElementById('appScreen').classList.remove('hidden');
  initApp();
}

function doLogout() {
  document.getElementById('appScreen').classList.add('hidden');
  document.getElementById('loginScreen').classList.remove('hidden');
  S.page = 'dashboard';
  S.attData = {};
}

// ─── App Initialisation ───────────────────────────────────────────────────────
function initApp() {
  const u = S.user;
  document.getElementById('sidebarName').textContent = u.name;
  document.getElementById('sidebarRole').textContent = u.role;
  const sav = document.getElementById('sidebarAvatar');
  sav.textContent = u.initials;
  sav.style.background = `linear-gradient(135deg,${u.color},${u.color}88)`;
  const tav = document.getElementById('topbarAvatar');
  tav.textContent = u.initials;
  tav.style.background = `linear-gradient(135deg,${u.color},${u.color}88)`;
  buildNav();
  navigate('dashboard');
}

// ─── Navigation ───────────────────────────────────────────────────────────────
function buildNav() {
  let html = '';
  NAV[S.role].forEach(item => {
    if (item.s) { html += `<div class="nav-section">${item.s}</div>`; return; }
    const bdg = item.badge ? `<span class="nav-badge">${item.badge}</span>` : '';
    html += `<div class="nav-item" id="nav-${item.id}" onclick="navigate('${item.id}')">
      <span class="nav-icon">${item.ic}</span><span>${item.lb}</span>${bdg}</div>`;
  });
  document.getElementById('sidebarNav').innerHTML = html;
}

function navigate(page) {
  S.page = page;
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
  const el = document.getElementById('nav-' + page);
  if (el) el.classList.add('active');
  document.getElementById('pageTitle').textContent = PAGE_TITLES[page] || page;
  const C = document.getElementById('mainContent');
  C.innerHTML = '';
  const RENDERS = {
    dashboard:renderDashboard, analytics:renderAnalytics, classes:renderClasses,
    timetable:renderTimetable, lessons:renderLessons, exams:renderExams,
    students:renderStudents, teachers:renderTeachers, parents:renderParents,
    attendance:renderAttendance, announcements:renderAnnouncements,
    messages:renderMessages, integrations:renderIntegrations,
    settings:renderSettings, myClasses:renderMyClasses,
    resources:renderResources, assignments:renderAssignments,
    grades:renderGrades, classroom:renderClassroom,
  };
  if (RENDERS[page]) RENDERS[page](C);
  else C.innerHTML = `<div style="text-align:center;padding:60px;color:var(--text3);font-size:15px">🚧 Section coming soon</div>`;
}

// ─── Modal ────────────────────────────────────────────────────────────────────
function openModal(type, title) {
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modal').classList.remove('hidden');
  buildModal(type);
}
function closeModal() { document.getElementById('modal').classList.add('hidden'); }

// ─── HTML Helpers ─────────────────────────────────────────────────────────────
function av(name, color, size = 34, fs = 13) {
  return `<div class="avatar" style="width:${size}px;height:${size}px;font-size:${fs}px;background:${color}">${name[0]}</div>`;
}
function badge(txt, cls) { return `<span class="badge ${cls}">${txt}</span>`; }
function statusBadge(s) {
  const m = { present:'bg-green',graded:'bg-green',done:'bg-green',absent:'bg-red',overdue:'bg-red',late:'bg-amber',active:'bg-blue',pending:'bg-amber',upcoming:'bg-gray' };
  return badge(s, m[s] || 'bg-gray');
}
function pb(val, color) {
  return `<div class="progress-bar"><div class="progress-fill" style="background:${color};width:${val}%"></div></div>`;
}
function statCard(ic, bg, label, val, change, ct) {
  return `<div class="stat-card">
    <div class="stat-icon" style="background:${bg}">${ic}</div>
    <div><div class="stat-label">${label}</div><div class="stat-value">${val}</div></div>
    <div class="stat-change ${ct}">${change}</div></div>`;
}
function annItem(ic, bg, title, desc, time) {
  return `<div class="ann-item">
    <div class="ann-icon" style="background:${bg}">${ic}</div>
    <div><div style="font-size:13.5px;font-weight:600;color:var(--navy)">${title}</div>
    <div style="font-size:12px;color:var(--text2);margin-top:3px;line-height:1.4">${desc}</div>
    <div style="font-size:11px;color:var(--text3);margin-top:5px">${time}</div></div></div>`;
}

// ─── Attendance ───────────────────────────────────────────────────────────────
function setAtt(i, st, btn) {
  S.attData[i] = st;
  const row = document.getElementById('attRow' + i);
  row.querySelectorAll('button').forEach(b => { b.className = 'btn btn-sm btn-outline'; b.style.cssText = ''; });
  if (st === 'P') btn.className = 'btn btn-sm btn-green';
  else if (st === 'A') btn.className = 'btn btn-sm btn-red';
  else { btn.style.background = 'var(--amber)'; btn.style.color = 'white'; btn.style.borderColor = 'var(--amber)'; }
}
function markAll(st) {
  STUDENTS.forEach((_, i) => {
    S.attData[i] = st;
    const row = document.getElementById('attRow' + i);
    if (!row) return;
    row.querySelectorAll('button').forEach(b => { b.className = 'btn btn-sm btn-outline'; b.style.cssText = ''; });
    row.querySelectorAll('button')[0].className = 'btn btn-sm btn-green';
  });
}
function saveAtt() {
  const present = Object.values(S.attData).filter(v => v === 'P').length + (STUDENTS.length - Object.keys(S.attData).length);
  const absent  = Object.values(S.attData).filter(v => v === 'A').length;
  const late    = Object.values(S.attData).filter(v => v === 'L').length;
  openModal('attOk', 'Attendance Saved');
  document.getElementById('modalBody').innerHTML = `
    <div style="text-align:center;padding:24px">
      <div style="font-size:52px;margin-bottom:16px">✅</div>
      <div style="font-size:17px;font-weight:700;color:var(--navy);margin-bottom:8px">Attendance recorded!</div>
      <div style="font-size:13px;color:var(--text2);margin-bottom:20px">Synced in real-time to parents, students, and admin.</div>
      <div style="background:var(--surface3);border-radius:12px;padding:14px;font-size:13px;color:var(--text2);margin-bottom:20px;text-align:left">
        <div>✅ Present: ${present}</div><div>❌ Absent: ${absent}</div><div>⏰ Late: ${late}</div>
      </div>
      <button class="btn btn-blue" style="width:100%;justify-content:center;padding:12px" onclick="closeModal()">Done</button>
    </div>`;
}

// ─── Chat ─────────────────────────────────────────────────────────────────────
function sendChat() {
  const inp = document.getElementById('chatInput');
  const txt = inp.value.trim(); if (!txt) return;
  const area = document.getElementById('chatArea');
  const div = document.createElement('div');
  div.style.cssText = 'display:flex;justify-content:flex-end';
  div.innerHTML = `<div class="msg-bubble msg-me">${txt}<div style="font-size:11px;opacity:.55;margin-top:5px;text-align:right">Just now ✓✓</div></div>`;
  area.appendChild(div); inp.value = ''; area.scrollTop = area.scrollHeight;
  setTimeout(() => {
    const r = document.createElement('div'); r.style.cssText = 'display:flex;';
    r.innerHTML = `<div class="avatar" style="width:30px;height:30px;font-size:11px;background:#14b8a6;margin-right:8px">J</div>
      <div class="msg-bubble msg-other">Thanks for your message! I'll get back to you shortly.
        <div style="font-size:11px;opacity:.55;margin-top:5px;text-align:right">Just now</div></div>`;
    area.appendChild(r); area.scrollTop = area.scrollHeight;
  }, 1200);
}

function filterTab(btn) {
  btn.closest('.tabs').querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
