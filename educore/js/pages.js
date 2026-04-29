function renderDashboard(el){
  if(S.role==='admin') adminDash(el);
  else if(S.role==='teacher') teacherDash(el);
  else if(S.role==='student') studentDash(el);
  else parentDash(el);
}

function adminDash(el){
  el.innerHTML=`
  <div class="stats-grid">
    ${statCard('🎒','#dbeafe','Total Students','1,284','↑ 42 this term','up')}
    ${statCard('👩‍🏫','#dcfce7','Teaching Staff','68','↑ 3 new hires','up')}
    ${statCard('✅','#fef3c7','Avg Attendance','91%','↓ 2% this week','dn')}
    ${statCard('📊','#ede9fe','Classes Today','48','6 online','','')}
  </div>
  <div class="grid-2 mb20">
    <div class="card">
      <div class="card-header"><div class="card-title">📢 Announcements</div><button class="btn btn-blue btn-sm" onclick="openModal('newAnn','Post Announcement')">+ New</button></div>
      <div style="padding:0 20px">
        ${annItem('📅','#dbeafe','End of Term Exams','Scheduled Feb 14–21. Teachers submit marks by Feb 25.','2h ago')}
        ${annItem('🏆','#dcfce7','Inter-School Games','Our team qualifies for the national finals!','Yesterday')}
        ${annItem('⚠️','#fef3c7','System Maintenance','EduCore offline Sat 10pm–2am for upgrades.','2 days ago')}
      </div>
    </div>
    <div class="card">
      <div class="card-header"><div class="card-title">👥 Students</div><button class="btn btn-outline btn-sm" onclick="navigate('students')">View all</button></div>
      <div class="table-wrap"><table>
        <thead><tr><th>Student</th><th>Class</th><th>Att.</th><th>Status</th></tr></thead>
        <tbody>${STUDENTS.slice(0,5).map(s=>`<tr>
          <td><div style="display:flex;align-items:center;gap:10px">${av(s.name,s.color)}
            <div><div style="font-weight:600;font-size:13px">${s.name}</div><div style="font-size:11px;color:var(--text3)">${s.id}</div></div></div></td>
          <td>${badge('Gr.'+s.cls,'bg-blue')}</td>
          <td style="font-weight:600;color:${s.att>90?'var(--green)':s.att>80?'var(--amber)':'var(--red)'}">${s.att}%</td>
          <td>${statusBadge(s.status)}</td>
        </tr>`).join('')}</tbody>
      </table></div>
    </div>
  </div>
  <div class="grid-2">
    <div class="card">
      <div class="card-header"><div class="card-title">📈 Weekly Attendance</div></div>
      <div class="card-body">
        <div style="display:flex;gap:20px;align-items:flex-end;height:120px">
          ${['Mon','Tue','Wed','Thu','Fri'].map((d,i)=>{const v=[94,91,88,95,93][i];return`
          <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:8px;height:100%">
            <div style="font-size:13px;font-weight:700;color:var(--navy)">${v}%</div>
            <div style="flex:1;width:100%;background:var(--surface3);border-radius:6px;display:flex;align-items:flex-end;overflow:hidden">
              <div style="width:100%;height:${v}%;background:linear-gradient(to top,var(--accent),${v>90?'#22c55e':'#f59e0b'});border-radius:6px;transition:.5s"></div>
            </div>
            <div style="font-size:12px;color:var(--text3)">${d}</div>
          </div>`}).join('')}
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header"><div class="card-title">🏫 Quick Actions</div></div>
      <div class="card-body">
        <div class="grid-2" style="gap:10px">
          ${[
            ['🎒 Add Student','students','bg-blue'],['👩‍🏫 Add Teacher','teachers','bg-green'],
            ['📢 Announce','announcements','bg-purple'],['🎥 Schedule Meet','integrations','bg-teal'],
            ['📋 New Exam','exams','bg-amber'],['📁 Upload Resource','resources','bg-pink'],
          ].map(([l,p,c])=>`<button class="btn btn-outline" style="justify-content:center" onclick="navigate('${p}')">${l}</button>`).join('')}
        </div>
      </div>
    </div>
  </div>`;
}

function teacherDash(el){
  el.innerHTML=`
  <div class="stats-grid">
    ${statCard('🏫','#dbeafe','My Classes','6','3 grade levels','')}
    ${statCard('🎒','#dcfce7','My Students','198','Across 6 classes','')}
    ${statCard('📝','#fef3c7','Pending Marks','34','Due this week','dn')}
    ${statCard('📅','#ede9fe','Lessons Today','5','1 online','','')}
  </div>
  <div class="grid-2 mb20">
    <div class="card">
      <div class="card-header"><div class="card-title">📅 Today's Schedule</div><span style="font-size:12px;color:var(--text3)">Monday, Jan 27</span></div>
      <div style="padding:0 20px">
        ${[
          {time:'8:00 AM',cls:'Form 4A – Mathematics',room:'Lab A',type:'In-person'},
          {time:'9:00 AM',cls:'Form 3B – Mathematics',room:'Room 5',type:'In-person'},
          {time:'11:30 AM',cls:'Form 4B – Further Math',room:'🎥 Google Meet',type:'Online'},
          {time:'1:30 PM',cls:'Form 2A – Mathematics',room:'Room 7',type:'In-person'},
          {time:'2:30 PM',cls:'Form 2B – Mathematics',room:'Room 4',type:'In-person'},
        ].map(s=>`<div style="display:flex;align-items:center;gap:14px;padding:11px 0;border-bottom:1px solid var(--border)">
          <div style="font-size:12px;color:var(--text3);min-width:76px;font-weight:500">${s.time}</div>
          <div style="flex:1"><div style="font-size:13.5px;font-weight:600;color:var(--navy)">${s.cls}</div>
          <div style="font-size:12px;color:var(--text2)">${s.room}</div></div>
          ${badge(s.type,s.type==='Online'?'bg-purple':'bg-blue')}
        </div>`).join('')}
      </div>
    </div>
    <div class="card">
      <div class="card-header"><div class="card-title">📁 Recent Uploads</div><button class="btn btn-blue btn-sm" onclick="navigate('resources')">Manage</button></div>
      <div style="padding:0 20px">
        ${RESOURCES.slice(0,5).map(r=>`<div style="display:flex;align-items:center;gap:12px;padding:11px 0;border-bottom:1px solid var(--border)">
          <div style="font-size:22px">${r.ic}</div>
          <div style="flex:1"><div style="font-size:13px;font-weight:600;color:var(--navy)">${r.name}</div>
          <div style="font-size:11px;color:var(--text3)">${r.sub} • ${r.size}</div></div>
          <div style="font-size:11px;color:var(--text3)">${r.date}</div>
        </div>`).join('')}
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header"><div class="card-title">📝 Assignments Needing Marking</div></div>
    <div class="table-wrap"><table>
      <thead><tr><th>Assignment</th><th>Class</th><th>Submitted</th><th>Due</th><th>Action</th></tr></thead>
      <tbody>${ASSIGNMENTS.filter(a=>a.status==='pending').map(a=>`<tr>
        <td style="font-weight:600">${a.title}</td>
        <td>${badge(a.sub,'bg-blue')}</td>
        <td>${a.subs}</td>
        <td>${a.due}</td>
        <td><button class="btn btn-blue btn-sm" onclick="openModal('markAss','Mark Assignment')">Mark Now</button></td>
      </tr>`).join('')}</tbody>
    </table></div>
  </div>`;
}

function studentDash(el){
  el.innerHTML=`
  <div style="background:linear-gradient(135deg,#0f1b35,#243a6b);border-radius:20px;padding:22px 26px;color:white;margin-bottom:24px;display:flex;align-items:center;gap:20px">
    <div class="avatar" style="width:56px;height:56px;font-size:20px;font-weight:800;background:linear-gradient(135deg,#a78bfa,#4f8ef7)">AN</div>
    <div>
      <div style="font-size:18px;font-weight:800">Good morning, Amara! 👋</div>
      <div style="font-size:13px;opacity:.7;margin-top:3px">Grade 10A • Term 1, 2026</div>
      <div style="display:flex;gap:20px;margin-top:12px">
        <div><div style="font-size:11px;opacity:.6">Average</div><div style="font-size:22px;font-weight:800">87%</div></div>
        <div><div style="font-size:11px;opacity:.6">Attendance</div><div style="font-size:22px;font-weight:800">96%</div></div>
        <div><div style="font-size:11px;opacity:.6">Position</div><div style="font-size:22px;font-weight:800">4th / 32</div></div>
        <div><div style="font-size:11px;opacity:.6">Pending</div><div style="font-size:22px;font-weight:800">2 tasks</div></div>
      </div>
    </div>
  </div>
  <div style="margin-bottom:20px">
    <div style="font-size:14px;font-weight:700;color:var(--navy);margin-bottom:14px">My Subjects</div>
    <div class="grid-3">
      ${SUBJECTS.slice(0,6).map(s=>{const pct=Math.floor(Math.random()*30+60);return`
      <div class="subject-card" style="background:${s.bg};border-color:${s.tc}22" onclick="navigate('lessons')">
        <div style="font-size:26px;margin-bottom:8px">${s.ic}</div>
        <div style="font-size:14px;font-weight:700;color:${s.tc}">${s.name}</div>
        <div style="font-size:11px;color:${s.tc};opacity:.7;margin-top:2px">${s.teacher}</div>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-top:12px">
          <div style="flex:1;margin-right:10px">${pb(pct,s.tc)}</div>
          <div style="font-size:12px;font-weight:700;color:${s.tc}">${pct}%</div>
        </div>
      </div>`}).join('')}
    </div>
  </div>
  <div class="grid-2">
    <div class="card">
      <div class="card-header"><div class="card-title">📅 Today's Classes</div><button class="btn btn-outline btn-sm" onclick="navigate('timetable')">Full TT</button></div>
      <div style="padding:0 20px">
        ${[
          {time:'8:00',sub:'Mathematics',teacher:'Mr. Ochieng',room:'Lab A',live:false},
          {time:'9:00',sub:'English',   teacher:'Mrs. Kamau',  room:'Room 12',live:false},
          {time:'10:30',sub:'Physics',  teacher:'Ms. Nyambura',room:'🎥 Meet',live:true},
          {time:'11:30',sub:'History',  teacher:'Mr. Otieno',  room:'Room 8',live:false},
          {time:'1:30',sub:'Biology',   teacher:'Ms. Waweru',  room:'Lab B',live:false},
        ].map(c=>`<div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid var(--border)">
          <div style="font-size:12px;color:var(--text3);min-width:46px;font-weight:600">${c.time}</div>
          <div style="flex:1"><div style="font-size:13.5px;font-weight:600;color:var(--navy)">${c.sub}</div>
          <div style="font-size:12px;color:var(--text2)">${c.teacher}</div></div>
          ${c.live?`<button class="btn btn-green btn-xs" onclick="openModal('meet','Join Online Class')">🎥 Join</button>`:
            `<div style="font-size:12px;color:var(--text3)">${c.room}</div>`}
        </div>`).join('')}
      </div>
    </div>
    <div class="card">
      <div class="card-header"><div class="card-title">📝 Tasks Due Soon</div><button class="btn btn-outline btn-sm" onclick="navigate('assignments')">All tasks</button></div>
      <div style="padding:0 20px">
        ${ASSIGNMENTS.filter(a=>a.status!=='graded').map(a=>`<div style="padding:12px 0;border-bottom:1px solid var(--border)">
          <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:10px">
            <div><div style="font-size:13px;font-weight:600;color:var(--navy)">${a.title}</div>
            <div style="font-size:11px;color:var(--text3);margin-top:3px">${a.sub}</div></div>
            ${badge('Due '+a.due,a.status==='pending'?'bg-amber':'bg-gray')}
          </div>
          ${a.status==='pending'?`<button class="btn btn-blue btn-xs" style="margin-top:8px" onclick="openModal('submitAss','Submit Assignment')">Submit</button>`:''}
        </div>`).join('')}
      </div>
    </div>
  </div>`;
}

function parentDash(el){
  el.innerHTML=`
  <div style="background:linear-gradient(135deg,#0f1b35,#243a6b);border-radius:20px;padding:22px 26px;color:white;margin-bottom:24px;display:flex;align-items:center;gap:20px">
    <div class="avatar" style="width:56px;height:56px;font-size:20px;font-weight:800;background:linear-gradient(135deg,#a78bfa,#4f8ef7)">AN</div>
    <div>
      <div style="font-size:18px;font-weight:800">Amara Njeri</div>
      <div style="font-size:13px;opacity:.7;margin-top:3px">Grade 10A • Student ID: G10/001</div>
      <div style="display:flex;gap:20px;margin-top:12px">
        <div><div style="font-size:11px;opacity:.6">Average</div><div style="font-size:22px;font-weight:800">87%</div></div>
        <div><div style="font-size:11px;opacity:.6">Attendance</div><div style="font-size:22px;font-weight:800">96%</div></div>
        <div><div style="font-size:11px;opacity:.6">Class Position</div><div style="font-size:22px;font-weight:800">4 / 32</div></div>
      </div>
    </div>
    <div style="margin-left:auto"><button class="btn btn-outline" style="color:white;border-color:rgba(255,255,255,.3)" onclick="navigate('messages')">💬 Message Teacher</button></div>
  </div>
  <div class="grid-2">
    <div class="card">
      <div class="card-header"><div class="card-title">📊 Subject Performance</div></div>
      <div style="padding:0 20px">
        ${SUBJECTS.map(s=>{const v=Math.floor(Math.random()*28+65);return`
        <div style="padding:10px 0;border-bottom:1px solid var(--border)">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
            <div style="font-size:13px;font-weight:600;color:var(--navy)">${s.ic} ${s.name}</div>
            <div style="font-size:13px;font-weight:700;color:${v>80?'var(--green)':v>65?'var(--amber)':'var(--red)'}">${v}%</div>
          </div>
          ${pb(v,v>80?'var(--green)':v>65?'var(--amber)':'var(--red)')}
        </div>`}).join('')}
      </div>
    </div>
    <div>
      <div class="card mb20">
        <div class="card-header"><div class="card-title">📅 Attendance This Month</div></div>
        <div class="card-body">
          <div style="display:flex;gap:16px;text-align:center">
            ${[['Present','19','var(--green)'],['Absent','1','var(--red)'],['Late','1','var(--amber)']].map(([l,v,c])=>`
            <div style="flex:1;background:var(--surface3);border-radius:12px;padding:14px">
              <div style="font-size:22px;font-weight:800;color:${c}">${v}</div>
              <div style="font-size:12px;color:var(--text3);margin-top:3px">${l}</div>
            </div>`).join('')}
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header"><div class="card-title">💬 Teacher Messages</div></div>
        <div style="padding:0 20px">
          ${[
            {t:'Mr. Ochieng',m:'Amara has shown great improvement in calculus this term.',d:'Today'},
            {t:'Mrs. Kamau',m:'Please ensure the English essay is submitted by Wednesday.',d:'Yesterday'},
            {t:'Ms. Waweru',m:'Biology practical results: Amara scored 91%. Excellent!',d:'Jan 24'},
          ].map(x=>`<div style="padding:12px 0;border-bottom:1px solid var(--border)">
            <div style="font-size:12px;font-weight:600;color:var(--accent);margin-bottom:4px">${x.t}</div>
            <div style="font-size:13px;color:var(--text);line-height:1.5">${x.m}</div>
            <div style="font-size:11px;color:var(--text3);margin-top:4px">${x.d}</div>
          </div>`).join('')}
        </div>
      </div>
    </div>
  </div>`;
}

/* ═══════════════════ PAGES ═══════════════════ */
function renderTimetable(el){
  const times=Object.keys(TIMETABLE);
  el.innerHTML=`
  <div style="display:flex;align-items:center;gap:14px;margin-bottom:20px;flex-wrap:wrap">
    <select><option>Form 4A</option><option>Form 4B</option><option>Form 3A</option><option>Form 3B</option></select>
    <select><option>Term 1, 2026</option><option>Term 2, 2026</option></select>
    <div style="margin-left:auto;display:flex;gap:8px">
      <button class="btn btn-outline">🖨️ Print</button>
      <button class="btn btn-blue">⬇ Export PDF</button>
    </div>
  </div>
  <div class="card"><div class="card-body">
    <div class="tt-grid" style="margin-bottom:6px">
      <div></div>${DAYS.map(d=>`<div class="tt-header">${d}</div>`).join('')}
    </div>
    ${times.map(time=>{
      const row=TIMETABLE[time];
      const isBreak=row[0]==='BREAK'||row[0]==='LUNCH';
      if(isBreak) return `
        <div style="grid-column:1/-1;display:flex;align-items:center;gap:12px;padding:6px 8px;background:var(--surface3);border-radius:9px;margin:2px 0">
          <div style="font-size:11px;color:var(--text3);font-weight:500;min-width:72px">${time}</div>
          <div style="font-size:12px;color:var(--text3);font-weight:600">${row[0]==='BREAK'?'☕ Morning Break':'🍽️ Lunch Break'}</div>
        </div>`;
      return `<div class="tt-time" style="font-size:10.5px">${time}</div>`+row.map(sub=>{
        if(!sub) return `<div class="tt-empty"></div>`;
        return `<div class="tt-cell" style="background:${TT_BG[sub]||'#f3f4f6'}">
          <div class="tt-name" style="color:${TT_TX[sub]||'#333'}">${sub}</div>
          <div class="tt-sub" style="color:${TT_TX[sub]||'#999'}">Room A</div>
        </div>`;
      }).join('');
    }).join('')}
  </div></div>`;
}

function renderLessons(el){
  el.innerHTML=`
  <div style="display:flex;align-items:center;gap:14px;margin-bottom:20px;flex-wrap:wrap">
    <select onchange=""><option>Mathematics – Chapter 4: Quadratics</option><option>Biology – Chapter 2: Cells</option><option>English – Essay Writing</option></select>
    ${S.role==='teacher'?`<button class="btn btn-blue" onclick="openModal('newLesson','Add New Lesson')">+ Add Lesson</button>`:''}
  </div>
  <div style="display:flex;flex-direction:column;gap:12px">
    ${LESSONS.map(l=>`<div class="lesson-card">
      <div class="lesson-num" style="background:${l.status==='completed'?'var(--green)':l.status==='active'?'var(--accent)':'#d1d5db'}">${l.n}</div>
      <div style="flex:1">
        <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:14px">
          <div>
            <div style="font-size:14.5px;font-weight:700;color:var(--navy);margin-bottom:3px">${l.title}</div>
            <div style="font-size:12px;color:var(--text2)">${l.sub}</div>
            <div style="font-size:13px;color:var(--text2);margin-top:8px;line-height:1.5">${l.desc}</div>
          </div>
          ${statusBadge(l.status)}
        </div>
        <div class="lesson-meta">
          <span style="font-size:12px;color:var(--text3)">📅 ${l.due}</span>
          <span style="font-size:12px;color:var(--text3)">📎 ${l.res} resource${l.res!==1?'s':''}</span>
          ${l.status==='active'?`<button class="btn btn-blue btn-sm" onclick="navigate('resources')">View Resources</button>`:''}
          ${S.role==='teacher'?`<button class="btn btn-outline btn-sm" onclick="openModal('editLesson','Edit Lesson')">✏️ Edit</button>`:''}
          ${S.role==='teacher'&&l.status==='upcoming'?`<button class="btn btn-outline btn-sm" onclick="openModal('upload','Upload Resources')">📤 Upload</button>`:''}
        </div>
      </div>
    </div>`).join('')}
  </div>`;
}

function renderStudents(el){
  el.innerHTML=`
  <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px;flex-wrap:wrap">
    <input class="form-input" placeholder="🔍 Search by name or ID…" style="max-width:260px">
    <select><option>All Classes</option><option>10A</option><option>10B</option></select>
    <select><option>All Status</option><option>Present</option><option>Absent</option><option>Late</option></select>
    <div style="margin-left:auto;display:flex;gap:8px">
      <button class="btn btn-outline">⬇ Export CSV</button>
      <button class="btn btn-blue" onclick="openModal('addStudent','Enrol New Student')">+ Enrol Student</button>
    </div>
  </div>
  <div class="card">
    <div class="table-wrap"><table>
      <thead><tr><th>Student</th><th>Class</th><th>Attendance</th><th>Average</th><th>Status</th><th>Actions</th></tr></thead>
      <tbody>${STUDENTS.map(s=>`<tr>
        <td><div style="display:flex;align-items:center;gap:10px">${av(s.name,s.color)}
          <div><div style="font-weight:600">${s.name}</div><div style="font-size:11px;color:var(--text3)">${s.id}</div></div></div></td>
        <td>${badge('Gr.'+s.cls,'bg-blue')}</td>
        <td><div style="display:flex;align-items:center;gap:8px;min-width:120px">
          <div class="progress-bar" style="flex:1">${`<div class="progress-fill" style="background:${s.att>90?'var(--green)':s.att>80?'var(--amber)':'var(--red)'};width:${s.att}%"></div>`}</div>
          <span style="font-size:12px;font-weight:600;color:${s.att>90?'var(--green)':s.att>80?'var(--amber)':'var(--red)'}">${s.att}%</span>
        </div></td>
        <td style="font-weight:700;color:${s.avg>85?'var(--green)':s.avg>70?'var(--amber)':'var(--red)'}">${s.avg}%</td>
        <td>${statusBadge(s.status)}</td>
        <td><div style="display:flex;gap:6px">
          <button class="btn btn-outline btn-sm" onclick="openModal('viewStudent','Student Profile')">Profile</button>
          <button class="btn btn-blue btn-sm" onclick="navigate('messages')">💬</button>
        </div></td>
      </tr>`).join('')}</tbody>
    </table></div>
  </div>`;
}

function renderTeachers(el){
  el.innerHTML=`
  <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px;flex-wrap:wrap">
    <input class="form-input" placeholder="🔍 Search teachers…" style="max-width:260px">
    <div style="margin-left:auto;display:flex;gap:8px">
      <button class="btn btn-outline">⬇ Export</button>
      <button class="btn btn-blue" onclick="openModal('addTeacher','Add New Teacher')">+ Add Teacher</button>
    </div>
  </div>
  <div class="grid-2">
    ${TEACHERS.map((t,i)=>{
      const colors=['linear-gradient(135deg,#4f8ef7,#a78bfa)','linear-gradient(135deg,#14b8a6,#22c55e)',
        'linear-gradient(135deg,#f59e0b,#ef4444)','linear-gradient(135deg,#a78bfa,#ec4899)',
        'linear-gradient(135deg,#22c55e,#14b8a6)','linear-gradient(135deg,#4f8ef7,#14b8a6)'];
      return`<div class="card" style="padding:20px">
        <div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
          <div class="avatar" style="width:50px;height:50px;font-size:17px;background:${colors[i]}">${t.name.split(' ').slice(1).map(w=>w[0]).join('').slice(0,2)}</div>
          <div>
            <div style="font-weight:700;font-size:15px;color:var(--navy)">${t.name}</div>
            <div style="font-size:12px;color:var(--text3)">${t.exp} experience</div>
          </div>
          <div style="margin-left:auto">${badge('Active','bg-green')}</div>
        </div>
        <div style="font-size:13px;color:var(--text2);margin-bottom:6px">📚 <b>Subjects:</b> ${t.sub}</div>
        <div style="font-size:13px;color:var(--text2);margin-bottom:6px">🏫 <b>Classes:</b> ${t.cls}</div>
        <div style="font-size:13px;color:var(--text2);margin-bottom:14px">✉️ ${t.email}</div>
        <div style="display:flex;gap:8px">
          <button class="btn btn-outline btn-sm">View Profile</button>
          <button class="btn btn-blue btn-sm" onclick="navigate('messages')">💬 Message</button>
          ${S.role==='admin'?`<button class="btn btn-outline btn-sm" onclick="openModal('editTeacher','Edit Teacher')">✏️</button>`:''}
        </div>
      </div>`;}).join('')}
  </div>`;
}

function renderParents(el){
  el.innerHTML=`
  <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px">
    <input class="form-input" placeholder="🔍 Search parents…" style="max-width:260px">
    <button class="btn btn-blue" style="margin-left:auto" onclick="openModal('addParent','Add Parent')">+ Add Parent</button>
  </div>
  <div class="card"><div class="table-wrap"><table>
    <thead><tr><th>Parent</th><th>Child(ren)</th><th>Contact</th><th>Last Login</th><th>Actions</th></tr></thead>
    <tbody>${[
      {p:'Mrs. Grace Njeri',  ch:'Amara Njeri (10A)',     ph:'+254 712 000 001',login:'Today'},
      {p:'Mr. John Otieno',   ch:'Kevin Otieno (10A)',    ph:'+254 712 000 002',login:'Yesterday'},
      {p:'Ms. Halima Hassan', ch:'Fatuma Hassan (10A)',   ph:'+254 712 000 003',login:'Jan 25'},
      {p:'Mr. Paul Mwangi',   ch:'Brian Mwangi (10B)',    ph:'+254 712 000 004',login:'Jan 24'},
    ].map(p=>`<tr>
      <td style="font-weight:600">${p.p}</td>
      <td>${p.ch}</td>
      <td style="color:var(--text2)">${p.ph}</td>
      <td>${badge(p.login,p.login==='Today'?'bg-green':'bg-gray')}</td>
      <td><div style="display:flex;gap:6px">
        <button class="btn btn-outline btn-sm">View</button>
        <button class="btn btn-blue btn-sm" onclick="navigate('messages')">💬</button>
      </div></td>
    </tr>`).join('')}</tbody>
  </table></div></div>`;
}

function renderAttendance(el){
  const role=S.role;
  el.innerHTML=`
  <div style="display:flex;align-items:center;gap:14px;margin-bottom:20px;flex-wrap:wrap">
    ${role!=='student'&&role!=='parent'?`<select><option>Form 4A – Mathematics</option><option>Form 4B</option><option>Form 3A</option></select>`:''}
    <div style="display:flex;align-items:center;gap:6px;font-size:13px;color:var(--text2)">📅 Monday, January 27, 2026</div>
    ${role==='teacher'||role==='admin'?`<button class="btn btn-blue" onclick="saveAtt()">💾 Save Attendance</button>`:''}
    <div style="margin-left:auto;display:flex;align-items:center;gap:6px;font-size:12px;color:var(--text2)"><span class="rt-dot"></span>Real-time sync</div>
  </div>
  ${role==='teacher'||role==='admin'?`
  <div class="card mb20">
    <div class="card-header"><div class="card-title">Mark Today's Attendance</div>
      <div style="display:flex;gap:8px">
        <span style="font-size:12px;color:var(--text2);align-self:center">Quick mark all:</span>
        <button class="btn btn-green btn-sm" onclick="markAll('P')">All Present</button>
      </div>
    </div>
    <div class="table-wrap"><table>
      <thead><tr><th>Student</th><th>Status</th><th>Note</th></tr></thead>
      <tbody>${STUDENTS.map((s,i)=>`<tr>
        <td><div style="display:flex;align-items:center;gap:10px">${av(s.name,s.color,28,11)}${s.name}</div></td>
        <td><div style="display:flex;gap:6px" id="attRow${i}">
          <button onclick="setAtt(${i},'P',this)" class="btn btn-sm ${!S.attData[i]||S.attData[i]==='P'?'btn-green':'btn-outline'}">Present</button>
          <button onclick="setAtt(${i},'A',this)" class="btn btn-sm ${S.attData[i]==='A'?'btn-red':'btn-outline'}">Absent</button>
          <button onclick="setAtt(${i},'L',this)" class="btn btn-sm ${S.attData[i]==='L'?'btn-outline':'btn-outline'}" style="${S.attData[i]==='L'?'background:var(--amber);color:white;border-color:var(--amber)':''}">Late</button>
        </div></td>
        <td><input class="form-input" placeholder="Optional note…" style="font-size:12px;padding:5px 10px;max-width:200px"></td>
      </tr>`).join('')}</tbody>
    </table></div>
  </div>`:''}
  <div class="grid-2">
    <div class="card">
      <div class="card-header"><div class="card-title">📊 Monthly Summary</div></div>
      <div class="card-body">
        <div style="display:flex;gap:12px;margin-bottom:16px">
          ${[['Present','19','var(--green)','dcfce7'],['Absent','1','var(--red)','fee2e2'],['Late','1','var(--amber)','fef3c7']].map(([l,v,c,bg])=>`
          <div style="flex:1;text-align:center;background:#${bg};border-radius:12px;padding:14px">
            <div style="font-size:22px;font-weight:800;color:${c}">${v}</div>
            <div style="font-size:12px;color:${c};margin-top:3px">${l}</div>
          </div>`).join('')}
        </div>
        <div style="font-size:13px;font-weight:600;color:var(--navy);margin-bottom:8px">Overall Rate: <span style="color:var(--green)">96%</span></div>
        ${pb(96,'var(--green)')}
      </div>
    </div>
    <div class="card">
      <div class="card-header"><div class="card-title">📅 January 2026</div></div>
      <div class="card-body">
        <div class="cal-grid">
          ${['S','M','T','W','T','F','S'].map(d=>`<div class="cal-day-header">${d}</div>`).join('')}
          ${[...Array(3)].map(()=>`<div class="cal-day other-month"></div>`).join('')}
          ${Array.from({length:31},(_,i)=>{
            const d=i+1,isT=d===27;
            const cls=d<27?([2,8,14,20].includes(d)?'att-absent':[5,12].includes(d)?'att-late':'att-present'):'';
            return`<div class="cal-day ${isT?'today':cls}">${d}</div>`;
          }).join('')}
        </div>
      </div>
    </div>
  </div>`;
}

function setAtt(i,st,btn){
  S.attData[i]=st;
  const row=document.getElementById('attRow'+i);
  row.querySelectorAll('button').forEach(b=>{b.className='btn btn-sm btn-outline';b.style.cssText='';});
  if(st==='P'){btn.className='btn btn-sm btn-green';}
  else if(st==='A'){btn.className='btn btn-sm btn-red';}
  else{btn.style.background='var(--amber)';btn.style.color='white';btn.style.borderColor='var(--amber)';}
}
function markAll(st){
  STUDENTS.forEach((_,i)=>{
    S.attData[i]=st;
    const row=document.getElementById('attRow'+i);
    if(!row)return;
    row.querySelectorAll('button').forEach(b=>{b.className='btn btn-sm btn-outline';b.style.cssText='';});
    row.querySelectorAll('button')[0].className='btn btn-sm btn-green';
  });
}
function saveAtt(){
  openModal('attOk','Attendance Saved');
  document.getElementById('modalBody').innerHTML=`
    <div style="text-align:center;padding:24px">
      <div style="font-size:52px;margin-bottom:16px">✅</div>
      <div style="font-size:17px;font-weight:700;color:var(--navy);margin-bottom:8px">Attendance recorded!</div>
      <div style="font-size:13px;color:var(--text2);margin-bottom:20px">Synced in real-time to parents, students, and admin.</div>
      <div style="background:var(--surface3);border-radius:12px;padding:14px;font-size:13px;color:var(--text2);margin-bottom:20px;text-align:left">
        <div>✅ Present: ${Object.values(S.attData).filter(v=>v==='P').length + (STUDENTS.length - Object.keys(S.attData).length)}</div>
        <div>❌ Absent: ${Object.values(S.attData).filter(v=>v==='A').length}</div>
        <div>⏰ Late: ${Object.values(S.attData).filter(v=>v==='L').length}</div>
      </div>
      <button class="btn btn-blue" style="width:100%;justify-content:center;padding:12px" onclick="closeModal()">Done</button>
    </div>`;
}

function renderAnnouncements(el){
  el.innerHTML=`
  ${S.role==='admin'||S.role==='teacher'?`
  <button class="btn btn-blue mb20" onclick="openModal('newAnn','Post Announcement')">📢 Post Announcement</button>`:''}
  <div style="display:flex;flex-direction:column;gap:16px">
    ${[
      {ic:'📅',bg:'#dbeafe',ti:'End of Term Examinations',
       body:'Examinations are scheduled for February 14–21, 2026. The full timetable is on Google Classroom. All students must report by 7:30 AM on each exam day. Parents will receive individual timetables via email.',
       time:'2 hours ago',auth:'Dr. Sarah Wanjiku (Principal)',tgt:'All Students, Staff & Parents',pin:true},
      {ic:'🏆',bg:'#dcfce7',ti:'National Games Qualification!',
       body:"Congratulations to our athletics team! We've qualified for the National Schools Games in Mombasa next month. A special assembly will be held this Friday. Well done to all athletes and coaches.",
       time:'Yesterday 3:15 PM',auth:'Mr. Otieno (PE Department)',tgt:'All Students & Parents',pin:false},
      {ic:'⚠️',bg:'#fef3c7',ti:'Scheduled System Maintenance',
       body:'EduCore will be offline Saturday January 29 from 10:00 PM to 2:00 AM for upgrades. Please download any materials you need before then. We apologise for any inconvenience.',
       time:'2 days ago',auth:'ICT Department',tgt:'All Users',pin:false},
      {ic:'📚',bg:'#ede9fe',ti:'New Library Resources Available',
       body:'The school library has received new textbooks and reference materials for all KCSE subjects. Form 3 and 4 students are strongly encouraged to make use of these resources ahead of mid-term exams.',
       time:'3 days ago',auth:'Mrs. Kamau (Head of Academics)',tgt:'Form 3 & 4 Students',pin:false},
      {ic:'🎓',bg:'#ccfbf1',ti:'University Open Days – January 2026',
       body:'Several top universities have upcoming open days. Please check the school notice board or ask your class teacher for details. All Form 4 students are encouraged to attend.',
       time:'4 days ago',auth:'Career Guidance Office',tgt:'Form 4 Students & Parents',pin:false},
    ].map(a=>`<div class="card" style="padding:20px 22px;${a.pin?'border-left:4px solid var(--accent)':''}">
      ${a.pin?`<div style="font-size:11px;color:var(--accent);font-weight:700;margin-bottom:10px">📌 PINNED</div>`:''}
      <div style="display:flex;gap:14px;align-items:flex-start">
        <div style="width:44px;height:44px;border-radius:12px;background:${a.bg};display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0">${a.ic}</div>
        <div style="flex:1">
          <div style="font-size:15px;font-weight:700;color:var(--navy);margin-bottom:6px">${a.ti}</div>
          <div style="font-size:13.5px;color:var(--text2);line-height:1.6;margin-bottom:12px">${a.body}</div>
          <div style="display:flex;flex-wrap:wrap;gap:12px;font-size:12px;color:var(--text3)">
            <span>👤 ${a.auth}</span><span>🕐 ${a.time}</span><span>📢 ${a.tgt}</span>
          </div>
        </div>
      </div>
    </div>`).join('')}
  </div>`;
}

function renderMessages(el){
  el.innerHTML=`
  <div style="display:flex;height:520px;background:white;border-radius:var(--r2);border:1px solid var(--border);overflow:hidden;box-shadow:var(--shadow)">
    <div style="width:270px;border-right:1px solid var(--border);display:flex;flex-direction:column;flex-shrink:0">
      <div style="padding:12px;border-bottom:1px solid var(--border)">
        <input class="form-input" placeholder="Search messages…" style="font-size:13px">
      </div>
      <div style="flex:1;overflow-y:auto">
        ${MESSAGES_LIST.map((c,i)=>`<div style="padding:12px 14px;cursor:pointer;border-bottom:1px solid var(--border);${i===0?'background:var(--surface3);':''}" onmouseover="this.style.background='var(--surface3)'" onmouseout="this.style.background='${i===0?'var(--surface3)':'white'}'">
          <div style="display:flex;align-items:center;gap:10px">
            ${av(c.name,c.color,38,14)}
            <div style="flex:1;min-width:0">
              <div style="display:flex;justify-content:space-between;gap:6px">
                <div style="font-size:13px;font-weight:${c.unread?700:500};color:var(--navy);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${c.name}</div>
                <div style="font-size:11px;color:var(--text3);flex-shrink:0">${c.time}</div>
              </div>
              <div style="font-size:12px;color:var(--text3);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-top:2px">${c.msg}</div>
            </div>
            ${c.unread?`<div style="width:18px;height:18px;background:var(--accent);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;color:white;flex-shrink:0">${c.unread}</div>`:''}
          </div>
        </div>`).join('')}
      </div>
      <div style="padding:12px;border-top:1px solid var(--border)">
        <button class="btn btn-blue" style="width:100%;justify-content:center" onclick="openModal('newMsg','New Message')">✏️ New Message</button>
      </div>
    </div>
    <div style="flex:1;display:flex;flex-direction:column">
      <div style="padding:14px 18px;border-bottom:1px solid var(--border);display:flex;align-items:center;gap:12px;background:white">
        ${av('Mr. Ochieng','#14b8a6',40,16)}
        <div>
          <div style="font-weight:700;font-size:14px;color:var(--navy)">Mr. James Ochieng</div>
          <div style="font-size:12px;color:var(--green)">● Online now</div>
        </div>
        <div style="margin-left:auto;display:flex;gap:8px">
          <button class="btn btn-outline btn-sm">📞 Call</button>
          <button class="btn btn-green btn-sm" onclick="openModal('meet','Google Meet')">🎥 Video</button>
          <button class="btn btn-outline btn-sm">📋 Info</button>
        </div>
      </div>
      <div style="flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:12px" id="chatArea">
        ${CHAT_MSGS.map(m=>`<div style="display:flex;${m.from==='me'?'justify-content:flex-end':''}">
          ${m.from!=='me'?av('Mr. O','#14b8a6',30,11)+'&nbsp;':''}
          <div class="msg-bubble ${m.from==='me'?'msg-me':'msg-other'}">
            ${m.msg}
            <div style="font-size:11px;opacity:.55;margin-top:5px;text-align:right">${m.time}</div>
          </div>
        </div>`).join('')}
      </div>
      <div style="padding:12px 14px;border-top:1px solid var(--border);display:flex;gap:10px;background:white">
        <button class="btn btn-outline btn-sm">📎</button>
        <button class="btn btn-outline btn-sm">😊</button>
        <input class="form-input" id="chatInput" placeholder="Type a message…" style="flex:1" onkeydown="if(event.key==='Enter')sendChat()">
        <button class="btn btn-blue" onclick="sendChat()">Send ➤</button>
      </div>
    </div>
  </div>`;
}

function sendChat(){
  const inp=document.getElementById('chatInput');
  const txt=inp.value.trim(); if(!txt)return;
  const area=document.getElementById('chatArea');
  const div=document.createElement('div');
  div.style.cssText='display:flex;justify-content:flex-end';
  div.innerHTML=`<div class="msg-bubble msg-me">${txt}<div style="font-size:11px;opacity:.55;margin-top:5px;text-align:right">Just now</div></div>`;
  area.appendChild(div); inp.value=''; area.scrollTop=area.scrollHeight;
  setTimeout(()=>{
    const r=document.createElement('div');
    r.style.cssText='display:flex;';
    r.innerHTML=`<div class="avatar" style="width:30px;height:30px;font-size:11px;background:#14b8a6;margin-right:8px">J</div>
      <div class="msg-bubble msg-other">Thanks for your message! I'll get back to you soon.
        <div style="font-size:11px;opacity:.55;margin-top:5px;text-align:right">Just now</div></div>`;
    area.appendChild(r); area.scrollTop=area.scrollHeight;
  },1200);
}

function renderIntegrations(el){
  el.innerHTML=`
  <div style="font-size:14px;color:var(--text2);margin-bottom:22px">Connect EduCore to Google Workspace for seamless online learning and collaboration.</div>
  <div class="grid-2 mb24">
    ${[
      {ic:'🟢',bg:'#e8f5e9',name:'Google Meet',desc:'Host & join live video classes',status:'Connected',action:'Join / Host',color:'btn-green',fn:"openModal('meet','Google Meet')"},
      {ic:'🔵',bg:'#e8f0fe',name:'Google Classroom',desc:'Assignments, resources & grades',status:'Connected',action:'Open Classroom',color:'btn-blue',fn:"navigate('classroom')"},
      {ic:'🟡',bg:'#fff3e0',name:'Google Drive',desc:'Store & share school resources',status:'Connected',action:'Browse Drive',color:'btn-outline',fn:""},
      {ic:'🔴',bg:'#fce4ec',name:'Google Calendar',desc:'Sync events, classes & exams',status:'Connected',action:'View Calendar',color:'btn-outline',fn:""},
      {ic:'📧',bg:'#e3f2fd',name:'Gmail',desc:'Send notifications & reports',status:'Connected',action:'Open Gmail',color:'btn-outline',fn:""},
      {ic:'📊',bg:'#f3e5f5',name:'Google Sheets',desc:'Grade books & data export',status:'Connected',action:'Open Sheets',color:'btn-outline',fn:""},
    ].map(i=>`<div class="integration-card" onclick="${i.fn||''}">
      <div style="width:48px;height:48px;border-radius:12px;background:${i.bg};display:flex;align-items:center;justify-content:center;font-size:26px;flex-shrink:0">${i.ic}</div>
      <div style="flex:1">
        <div style="font-weight:700;font-size:15px;color:var(--navy)">${i.name}</div>
        <div style="font-size:12px;color:var(--text2);margin-top:2px">${i.desc}</div>
        <div style="display:flex;align-items:center;gap:4px;margin-top:5px;font-size:12px;color:var(--green);font-weight:600">✓ ${i.status}</div>
      </div>
      <button class="btn ${i.color} btn-sm" onclick="event.stopPropagation();${i.fn||''}">${i.action}</button>
    </div>`).join('')}
  </div>
  <div class="card">
    <div class="card-header"><div class="card-title">🎥 Online Classes</div>
      <button class="btn btn-blue btn-sm" onclick="openModal('newMeet','Schedule Google Meet')">+ Schedule Meet</button>
    </div>
    <div class="table-wrap"><table>
      <thead><tr><th>Class</th><th>Teacher</th><th>Date & Time</th><th>Duration</th><th>Action</th></tr></thead>
      <tbody>${ONLINE_CLASSES.map(c=>`<tr>
        <td style="font-weight:600">${c.cls}</td>
        <td style="color:var(--text2)">${c.teacher}</td>
        <td>${c.time}</td>
        <td>${c.dur}</td>
        <td>${c.status==='Live'
          ?`<button class="btn btn-green btn-sm" onclick="openModal('meet','Join Live Class')">🎥 Join Now</button>`
          :`<button class="btn btn-outline btn-sm">📅 Add to Calendar</button>`}</td>
      </tr>`).join('')}</tbody>
    </table></div>
  </div>`;
}

function renderResources(el){
  el.innerHTML=`
  ${S.role==='teacher'||S.role==='admin'?`
  <div class="upload-zone mb20" onclick="openModal('upload','Upload Resource')">
    <div style="font-size:36px;margin-bottom:10px">📤</div>
    <div style="font-size:15px;font-weight:600;color:var(--navy);margin-bottom:6px">Upload Resource for Students</div>
    <div style="font-size:13px;color:var(--text3)">Drag & drop or click to browse — PDF, Video, Word, Slides, Images</div>
    <div style="margin-top:14px;display:flex;gap:8px;justify-content:center">
      ${['PDF','DOC','PPT','Video','Image','Link'].map(t=>`${badge(t,'bg-blue')}`).join('')}
    </div>
  </div>`:''}
  <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;flex-wrap:wrap">
    <select><option>All Subjects</option>${SUBJECTS.map(s=>`<option>${s.name}</option>`).join('')}</select>
    <select><option>All Types</option><option>PDF</option><option>Video</option><option>Doc</option><option>Slides</option></select>
    <input class="form-input" placeholder="🔍 Search resources…" style="max-width:240px">
    <div style="margin-left:auto;display:flex;gap:8px">
      <button class="btn btn-outline">⬇ Export list</button>
    </div>
  </div>
  <div class="card"><div class="table-wrap"><table>
    <thead><tr><th>File</th><th>Subject</th><th>Teacher</th><th>Type</th><th>Size</th><th>Uploaded</th><th>Actions</th></tr></thead>
    <tbody>${RESOURCES.map(r=>`<tr>
      <td><div style="display:flex;align-items:center;gap:10px"><span style="font-size:22px">${r.ic}</span>
        <div style="font-weight:600;font-size:13px">${r.name}</div></div></td>
      <td>${badge(r.sub,'bg-blue')}</td>
      <td style="color:var(--text2);font-size:13px">${r.teacher}</td>
      <td>${badge(r.type,'bg-gray')}</td>
      <td style="color:var(--text3);font-size:12px">${r.size}</td>
      <td style="color:var(--text3);font-size:12px">${r.date}</td>
      <td><div style="display:flex;gap:6px">
        <button class="btn btn-outline btn-sm">👁 View</button>
        <button class="btn btn-blue btn-sm">⬇ Download</button>
        ${S.role==='teacher'||S.role==='admin'?`<button class="btn btn-outline btn-sm btn-red" style="color:var(--red)">🗑</button>`:''}
      </div></td>
    </tr>`).join('')}</tbody>
  </table></div></div>`;
}

function renderAssignments(el){
  el.innerHTML=`
  <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px;flex-wrap:wrap">
    <div class="tabs" style="margin-bottom:0">
      <button class="tab active" onclick="filterTab(this,'all')">All</button>
      <button class="tab" onclick="filterTab(this,'pending')">Pending</button>
      <button class="tab" onclick="filterTab(this,'graded')">Graded</button>
    </div>
    <div style="margin-left:auto;display:flex;gap:8px">
      ${S.role==='teacher'||S.role==='admin'?`<button class="btn btn-blue" onclick="openModal('newAss','Create Assignment')">+ New Assignment</button>`:''}
    </div>
  </div>
  <div style="display:flex;flex-direction:column;gap:12px">
    ${ASSIGNMENTS.map(a=>`<div class="card" style="padding:18px 20px">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:14px">
        <div style="flex:1">
          <div style="font-size:15px;font-weight:700;color:var(--navy);margin-bottom:4px">${a.title}</div>
          <div style="font-size:13px;color:var(--text2);margin-bottom:10px">${a.sub}</div>
          <div style="display:flex;gap:16px;flex-wrap:wrap">
            <span style="font-size:12px;color:var(--text3)">📅 Due: ${a.due}</span>
            <span style="font-size:12px;color:var(--text3)">🏆 ${a.pts} points</span>
            ${S.role!=='student'?`<span style="font-size:12px;color:var(--text3)">👥 ${a.subs} submitted</span>`:''}
          </div>
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:8px">
          ${statusBadge(a.status)}
          ${S.role==='student'&&a.status==='pending'?`<button class="btn btn-blue btn-sm" onclick="openModal('submitAss','Submit Assignment')">Submit</button>`:''}
          ${(S.role==='teacher'||S.role==='admin')&&a.status!=='upcoming'?`<button class="btn btn-outline btn-sm" onclick="openModal('markAss','Mark Assignment')">Mark</button>`:''}
        </div>
      </div>
    </div>`).join('')}
  </div>`;
}

function renderExams(el){
  el.innerHTML=`
  <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px">
    <select><option>Form 4A</option><option>Form 4B</option></select>
    <select><option>Term 1, 2026</option></select>
    ${S.role==='admin'?`<button class="btn btn-blue" style="margin-left:auto" onclick="openModal('newExam','Schedule Exam')">+ Schedule Exam</button>`:''}
  </div>
  <div class="grid-2 mb20">
    ${statCard('📋','#dbeafe','Upcoming Exams','3','Feb 14–16','')}
    ${statCard('✅','#dcfce7','Completed','2','Results uploaded','')}
    ${statCard('📊','#fef3c7','Class Average','71%','CAT 1 results','')}
    ${statCard('🏆','#ede9fe','Top Score','97%','Cynthia A.','')}
  </div>
  <div class="card mb20">
    <div class="card-header"><div class="card-title">📅 Exam Schedule</div></div>
    <div class="table-wrap"><table>
      <thead><tr><th>Exam</th><th>Subject</th><th>Date</th><th>Duration</th><th>Venue</th><th>Status</th></tr></thead>
      <tbody>${EXAMS.map(e=>`<tr>
        <td style="font-weight:600">${e.name}</td>
        <td>${badge(e.sub,'bg-blue')}</td>
        <td>${e.date}</td>
        <td>${e.dur}</td>
        <td>${e.venue}</td>
        <td>${statusBadge(e.status==='upcoming'?'upcoming':e.status==='done'?'graded':'')}</td>
      </tr>`).join('')}</tbody>
    </table></div>
  </div>
  ${EXAMS.filter(e=>e.status==='done').length?`
  <div class="card">
    <div class="card-header"><div class="card-title">📊 CAT 1 Results – Form 4A</div>
      ${S.role==='teacher'||S.role==='admin'?`<button class="btn btn-blue btn-sm" onclick="openModal('uploadMarks','Upload Marks')">Upload Marks</button>`:''}
    </div>
    <div class="table-wrap"><table>
      <thead><tr><th>Student</th>${EXAMS.filter(e=>e.status==='done').map(e=>`<th>${e.sub}</th>`).join('')}<th>Avg</th><th>Pos.</th></tr></thead>
      <tbody>${STUDENTS.slice(0,6).map((s,i)=>{
        const scores=EXAMS.filter(e=>e.status==='done').map(()=>Math.floor(Math.random()*30+60));
        const avg=Math.round(scores.reduce((a,b)=>a+b,0)/scores.length);
        return`<tr>
          <td><div style="display:flex;align-items:center;gap:8px">${av(s.name,s.color,26,10)}${s.name}</div></td>
          ${scores.map(sc=>`<td style="font-weight:600;color:${sc>80?'var(--green)':sc>65?'var(--amber)':'var(--red)'}">${sc}%</td>`).join('')}
          <td style="font-weight:700">${avg}%</td>
          <td style="color:var(--text2)">${i+1}</td>
        </tr>`;}).join('')}</tbody>
    </table></div>
  </div>`:''}`;
}

function renderGrades(el){
  el.innerHTML=`
  <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px;flex-wrap:wrap">
    ${S.role!=='student'?`<select><option>Form 4A</option><option>Form 4B</option></select>`:''}
    <select><option>Term 1, 2026</option></select>
    <div style="margin-left:auto;display:flex;gap:8px">
      <button class="btn btn-outline">📊 Generate Report</button>
      <button class="btn btn-blue">⬇ Export PDF</button>
    </div>
  </div>
  <div class="stats-grid mb24">
    ${statCard('📊','#dcfce7','Class Average','78%','↑ 3pts vs last term','up')}
    ${statCard('🏆','#dbeafe','Highest Score','97%','Cynthia A.','')}
    ${statCard('📉','#fee2e2','Lowest Score','42%','Needs support','dn')}
    ${statCard('✅','#fef3c7','Pass Rate','91%','Above 50%','')}
  </div>
  <div class="grid-2">
    <div class="card">
      <div class="card-header"><div class="card-title">📚 Subject Performance</div></div>
      <div style="padding:0 20px">
        ${SUBJECTS.map(s=>{const v=Math.floor(Math.random()*28+64);return`
        <div style="padding:11px 0;border-bottom:1px solid var(--border)">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
            <div style="font-size:13px;font-weight:600">${s.ic} ${s.name}</div>
            <div style="display:flex;align-items:center;gap:8px">
              ${badge(v>=80?'A':v>=70?'B':v>=60?'C':'D',v>=80?'bg-green':v>=70?'bg-blue':v>=60?'bg-amber':'bg-red')}
              <span style="font-size:13px;font-weight:700;color:${v>=80?'var(--green)':v>=70?'var(--accent)':'var(--amber)'}">${v}%</span>
            </div>
          </div>
          ${pb(v,v>=80?'var(--green)':v>=70?'var(--accent)':'var(--amber)')}
        </div>`}).join('')}
      </div>
    </div>
    <div class="card">
      <div class="card-header"><div class="card-title">🏆 Class Leaderboard</div></div>
      <div style="padding:0 20px">
        ${STUDENTS.sort((a,b)=>b.avg-a.avg).map((s,i)=>`
        <div style="display:flex;align-items:center;gap:12px;padding:11px 0;border-bottom:1px solid var(--border)">
          <div style="width:26px;height:26px;border-radius:50%;background:${i===0?'#f59e0b':i===1?'#94a3b8':i===2?'#cd7c2f':'var(--surface3)'};display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;color:${i<3?'white':'var(--text3)';flex-shrink:0}">${i+1}</div>
          ${av(s.name,s.color,30,11)}
          <div style="flex:1"><div style="font-size:13px;font-weight:600;color:var(--navy)">${s.name}</div>
          <div style="font-size:11px;color:var(--text3)">${s.cls}</div></div>
          <div style="font-size:14px;font-weight:800;color:${s.avg>=85?'var(--green)':s.avg>=70?'var(--accent)':'var(--amber)'}">${s.avg}%</div>
        </div>`).join('')}
      </div>
    </div>
  </div>`;
}

function renderAnalytics(el){
  el.innerHTML=`
  <div class="stats-grid mb24">
    ${statCard('📊','#dcfce7','Pass Rate','91%','↑ 3% vs last term','up')}
    ${statCard('📈','#dbeafe','School Average','74%','↑ 2pts','up')}
    ${statCard('✅','#fef3c7','Avg Attendance','91%','This term','')}
    ${statCard('📁','#ede9fe','Resources Uploaded','284','↑ 40 this week','up')}
  </div>
  <div class="grid-2 mb20">
    <div class="card">
      <div class="card-header"><div class="card-title">📊 Performance by Subject</div></div>
      <div style="padding:0 20px">
        ${SUBJECTS.map(s=>{const v=Math.floor(Math.random()*25+60);return`
        <div style="padding:10px 0;border-bottom:1px solid var(--border)">
          <div style="display:flex;justify-content:space-between;margin-bottom:6px">
            <div style="font-size:13px;font-weight:600">${s.ic} ${s.name}</div>
            <span style="font-size:13px;font-weight:700;color:${v>75?'var(--green)':v>65?'var(--amber)':'var(--red)'}">${v}%</span>
          </div>
          ${pb(v,v>75?'var(--green)':v>65?'var(--amber)':'var(--red)')}
        </div>`}).join('')}
      </div>
    </div>
    <div class="card">
      <div class="card-header"><div class="card-title">📈 Attendance Trend (Jan)</div></div>
      <div class="card-body">
        <div style="display:flex;gap:4px;align-items:flex-end;height:120px">
          ${Array.from({length:21},(_,i)=>{const v=Math.floor(Math.random()*12+84);return`
          <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:3px">
            <div style="flex:1;width:100%;background:var(--surface3);border-radius:4px;display:flex;align-items:flex-end;overflow:hidden">
              <div style="width:100%;height:${v}%;background:${v>90?'var(--accent)':'var(--amber)'};border-radius:4px"></div>
            </div>
            <div style="font-size:9px;color:var(--text3)">${i+6}</div>
          </div>`}).join('')}
        </div>
        <div style="display:flex;gap:14px;margin-top:14px;font-size:12px">
          <span style="color:var(--text3)">● <span style="color:var(--accent)">≥90%</span> Present</span>
          <span style="color:var(--text3)">● <span style="color:var(--amber)">Below</span> target</span>
        </div>
      </div>
    </div>
  </div>
  <div class="grid-2">
    <div class="card">
      <div class="card-header"><div class="card-title">📉 Grade Distribution</div></div>
      <div class="card-body">
        ${[['A  (80–100)','24','var(--green)'],['B  (70–79)','31','var(--accent)'],['C  (60–69)','22','var(--amber)'],['D  (50–59)','14','var(--purple)'],['E  (<50)','9','var(--red)']].map(([g,v,c])=>`
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px">
          <div style="width:88px;font-size:13px;color:var(--text2)">${g}</div>
          <div style="flex:1">${pb(parseInt(v),c)}</div>
          <div style="font-size:13px;font-weight:700;color:var(--navy);min-width:36px">${v}%</div>
        </div>`).join('')}
      </div>
    </div>
    <div class="card">
      <div class="card-header"><div class="card-title">🏫 Class Comparison</div></div>
      <div class="table-wrap"><table>
        <thead><tr><th>Class</th><th>Students</th><th>Avg</th><th>Att.</th><th>Rank</th></tr></thead>
        <tbody>${['4A','4B','3A','3B','2A','2B'].map((cls,i)=>{const avg=Math.floor(Math.random()*15+70),att=Math.floor(Math.random()*10+86);return`<tr>
          <td style="font-weight:600">Form ${cls}</td>
          <td>${Math.floor(Math.random()*8+28)}</td>
          <td style="font-weight:700;color:${avg>80?'var(--green)':'var(--amber)'}">${avg}%</td>
          <td>${att}%</td>
          <td>${badge('#'+(i+1),'bg-blue')}</td>
        </tr>`;}).join('')}</tbody>
      </table></div>
    </div>
  </div>`;
}

function renderMyClasses(el){
  el.innerHTML=`
  <div class="grid-2">
    ${[
      {cls:'Form 4A',sub:'Mathematics',n:34,avg:79,time:'Mon/Wed/Fri 8AM',room:'Lab A'},
      {cls:'Form 4B',sub:'Mathematics',n:32,avg:74,time:'Mon/Wed/Fri 9AM',room:'Room 5'},
      {cls:'Form 3A',sub:'Further Math',n:28,avg:83,time:'Tue/Thu 11AM',room:'Lab A'},
      {cls:'Form 3B',sub:'Mathematics',n:31,avg:71,time:'Tue/Thu 8AM',room:'Room 6'},
      {cls:'Form 2A',sub:'Mathematics',n:36,avg:76,time:'Mon/Wed 1:30PM',room:'Room 7'},
      {cls:'Form 2B',sub:'Mathematics',n:35,avg:72,time:'Tue/Thu 2:30PM',room:'Room 4'},
    ].map(c=>`<div class="card" style="padding:18px 20px">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:14px">
        <div><div style="font-size:17px;font-weight:800;color:var(--navy)">${c.cls}</div>
        <div style="font-size:13px;color:var(--text2);margin-top:2px">${c.sub}</div></div>
        ${badge(c.n+' students','bg-blue')}
      </div>
      <div style="display:flex;gap:16px;margin-bottom:14px">
        <div><div style="font-size:11px;color:var(--text3)">Class Average</div>
          <div style="font-size:20px;font-weight:800;color:${c.avg>80?'var(--green)':'var(--amber)'}">${c.avg}%</div></div>
        <div><div style="font-size:11px;color:var(--text3)">Schedule</div>
          <div style="font-size:12px;font-weight:600;color:var(--navy);margin-top:3px">${c.time}</div></div>
      </div>
      <div style="font-size:12px;color:var(--text3);margin-bottom:14px">📍 ${c.room}</div>
      <div style="display:flex;gap:6px;flex-wrap:wrap">
        <button class="btn btn-blue btn-sm" onclick="navigate('attendance')">✅ Attendance</button>
        <button class="btn btn-outline btn-sm" onclick="navigate('grades')">📊 Grades</button>
        <button class="btn btn-outline btn-sm" onclick="navigate('resources')">📁 Resources</button>
        <button class="btn btn-outline btn-sm" onclick="navigate('assignments')">📝 Assignments</button>
      </div>
    </div>`).join('')}
  </div>`;
}

function renderClassroom(el){
  el.innerHTML=`
  <div style="background:linear-gradient(135deg,#1a73e8,#4285f4);border-radius:var(--r2);padding:22px 26px;color:white;margin-bottom:24px;display:flex;align-items:center;justify-content:space-between">
    <div style="display:flex;align-items:center;gap:14px">
      <div style="font-size:38px">🖥️</div>
      <div><div style="font-size:18px;font-weight:700">Google Classroom</div>
      <div style="font-size:13px;opacity:.8;margin-top:2px">Integrated with EduCore • All assignments synced</div></div>
    </div>
    <a href="https://classroom.google.com" target="_blank" style="text-decoration:none">
      <button class="btn" style="background:white;color:#1a73e8;font-weight:700">Open Google Classroom ↗</button>
    </a>
  </div>
  <div class="grid-2">
    ${SUBJECTS.slice(0,6).map(s=>`<div class="card" style="padding:18px 20px;cursor:pointer" onclick="window.open('https://classroom.google.com','_blank')">
      <div style="height:6px;border-radius:3px;background:${s.tc};margin-bottom:14px"></div>
      <div style="font-size:16px;font-weight:700;color:var(--navy)">${s.ic} ${s.name}</div>
      <div style="font-size:12px;color:var(--text2);margin-top:3px;margin-bottom:12px">${s.teacher}</div>
      <div style="display:flex;gap:14px;font-size:12px;color:var(--text3);margin-bottom:14px">
        <span>📝 ${Math.floor(Math.random()*3+2)} assignments</span>
        <span>📎 ${Math.floor(Math.random()*5+5)} materials</span>
        <span>👥 ${Math.floor(Math.random()*8+28)} students</span>
      </div>
      <div style="display:flex;gap:8px">
        <button class="btn btn-outline btn-sm" onclick="event.stopPropagation();window.open('https://classroom.google.com','_blank')">View Class</button>
        ${S.role==='teacher'||S.role==='admin'?`<button class="btn btn-blue btn-sm" onclick="event.stopPropagation();openModal('newAss','Create Assignment')">+ Assignment</button>`:''}
      </div>
    </div>`).join('')}
  </div>`;
}

function renderClasses(el){
  el.innerHTML=`
  <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px">
    <input class="form-input" placeholder="Search classes…" style="max-width:240px">
    <select><option>All Forms</option><option>Form 1</option><option>Form 2</option><option>Form 3</option><option>Form 4</option></select>
    <button class="btn btn-blue" style="margin-left:auto" onclick="openModal('newClass','Add New Class')">+ New Class</button>
  </div>
  <div class="grid-3">
    ${['Form 1A','Form 1B','Form 2A','Form 2B','Form 3A','Form 3B','Form 4A','Form 4B','Form 4C'].map((cls,i)=>`
    <div class="card" style="padding:18px">
      <div style="font-size:18px;font-weight:800;color:var(--navy);margin-bottom:3px">${cls}</div>
      <div style="font-size:12px;color:var(--text3);margin-bottom:14px">${Math.floor(Math.random()*8+28)} students enrolled</div>
      <div style="font-size:13px;color:var(--text2);margin-bottom:6px">🧑‍🏫 ${['Mr. Otieno','Mrs. Kamau','Ms. Waweru','Mr. Kambo'][i%4]} (Class Teacher)</div>
      <div style="font-size:13px;color:var(--text2);margin-bottom:14px">📚 ${Math.floor(Math.random()*3+5)} subjects</div>
      <div style="display:flex;gap:6px">
        <button class="btn btn-outline btn-sm" onclick="navigate('students')">Students</button>
        <button class="btn btn-blue btn-sm" onclick="navigate('timetable')">Timetable</button>
      </div>
    </div>`).join('')}
  </div>`;
}

function renderSettings(el){
  el.innerHTML=`
  <div class="grid-2">
    <div>
      <div class="card mb20">
        <div class="card-header"><div class="card-title">🏫 School Information</div></div>
        <div class="card-body">
          ${['School Name','School Code','County','Email','Phone','Principal'].map((l,i)=>`
          <div class="form-group">
            <label class="form-label">${l}</label>
            <input class="form-input" value="${['Nairobi Academy','123456','Nairobi','info@nairobiacademy.ac.ke','+254 20 000 0000','Dr. Sarah Wanjiku'][i]}">
          </div>`).join('')}
          <button class="btn btn-blue">Save Changes</button>
        </div>
      </div>
    </div>
    <div>
      <div class="card mb20">
        <div class="card-header"><div class="card-title">🔔 Notification Settings</div></div>
        <div class="card-body">
          ${[['Email alerts for attendance','checked'],['SMS to parents on absence','checked'],['Push notifications','checked'],['Weekly reports',''],['Exam reminders','checked']].map(([l,c])=>`
          <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--border)">
            <div style="font-size:13.5px;color:var(--navy)">${l}</div>
            <input type="checkbox" ${c} style="width:16px;height:16px;accent-color:var(--accent)">
          </div>`).join('')}
        </div>
      </div>
      <div class="card">
        <div class="card-header"><div class="card-title">🔗 Integrations Status</div></div>
        <div class="card-body">
          ${['Google Meet','Google Classroom','Google Drive','Gmail','Google Calendar'].map(s=>`
          <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--border)">
            <div style="font-size:13px;color:var(--navy)">${s}</div>
            ${badge('Connected','bg-green')}
          </div>`).join('')}
        </div>
      </div>
    </div>
  </div>`;
}

/* ═══════════════════ MODAL CONTENT ═══════════════════ */
