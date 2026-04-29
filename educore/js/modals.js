function buildModal(type){
  const B=document.getElementById('modalBody');
  const formBtn=(label,color='btn-blue')=>`<button class="btn ${color}" style="width:100%;justify-content:center;padding:13px;margin-top:4px" onclick="closeModal()">${label}</button>`;

  const forms={
    newAnn:`
      <div class="form-group"><label class="form-label">Title</label><input class="form-input" placeholder="Announcement title"></div>
      <div class="form-group"><label class="form-label">Message</label><textarea class="form-input" rows="4" placeholder="Write your announcement…"></textarea></div>
      <div class="form-group"><label class="form-label">Target Audience</label>
        <select class="form-input"><option>All Students, Staff & Parents</option><option>Students only</option><option>Parents only</option><option>Staff only</option><option>Specific Class</option></select></div>
      <div class="form-group"><label class="form-label">Priority</label>
        <select class="form-input"><option>Normal</option><option>📌 Pinned</option><option>🚨 Urgent</option></select></div>
      ${formBtn('📢 Post Announcement')}`,

    newLesson:`
      <div class="form-group"><label class="form-label">Lesson Title</label><input class="form-input" placeholder="e.g. Introduction to Calculus"></div>
      <div class="form-group"><label class="form-label">Subject</label>
        <select class="form-input">${SUBJECTS.map(s=>`<option>${s.name}</option>`).join('')}</select></div>
      <div class="form-group"><label class="form-label">Chapter / Topic</label><input class="form-input" placeholder="e.g. Chapter 5: Differentiation"></div>
      <div class="form-group"><label class="form-label">Description / Objectives</label><textarea class="form-input" rows="3" placeholder="What students will learn…"></textarea></div>
      <div class="form-group"><label class="form-label">Scheduled Date</label><input type="date" class="form-input"></div>
      ${formBtn('+ Add Lesson')}`,

    upload:`
      <div style="border:2px dashed var(--border);border-radius:12px;padding:32px;text-align:center;margin-bottom:16px;cursor:pointer;transition:.2s" onmouseover="this.style.borderColor='var(--accent)'" onmouseout="this.style.borderColor='var(--border)'">
        <div style="font-size:32px;margin-bottom:10px">📁</div>
        <div style="font-size:14px;font-weight:600;color:var(--navy)">Drop files here or click to browse</div>
        <div style="font-size:12px;color:var(--text3);margin-top:5px">PDF, Word, PowerPoint, Video, Images — max 100MB</div>
        <input type="file" style="display:none">
      </div>
      <div class="form-group"><label class="form-label">Subject</label>
        <select class="form-input">${SUBJECTS.map(s=>`<option>${s.name}</option>`).join('')}</select></div>
      <div class="form-group"><label class="form-label">Lesson</label>
        <select class="form-input">${LESSONS.map(l=>`<option>${l.title}</option>`).join('')}</select></div>
      <div class="form-group"><label class="form-label">Description</label><input class="form-input" placeholder="Brief description of this resource…"></div>
      <div class="form-group"><label class="form-label">Visible to</label>
        <select class="form-input"><option>All my students</option><option>Form 4A only</option><option>Form 4B only</option><option>All Forms</option></select></div>
      ${formBtn('📤 Upload Resource')}`,

    newMeet:`
      <div class="form-group"><label class="form-label">Class</label>
        <select class="form-input"><option>Form 4B – Further Math</option><option>Form 3A – Biology</option><option>Form 4A – Chemistry</option></select></div>
      <div class="form-group"><label class="form-label">Topic / Description</label><input class="form-input" placeholder="e.g. Revision – Quadratic Equations"></div>
      <div class="form-group"><label class="form-label">Date</label><input type="date" class="form-input"></div>
      <div class="form-group"><label class="form-label">Start Time</label><input type="time" class="form-input"></div>
      <div class="form-group"><label class="form-label">Duration</label>
        <select class="form-input"><option>30 minutes</option><option>45 minutes</option><option>60 minutes</option><option>90 minutes</option></select></div>
      <div class="form-group"><label class="form-label">Notify students via</label>
        <select class="form-input"><option>EduCore + Email</option><option>EduCore only</option><option>Email only</option></select></div>
      ${formBtn('🎥 Schedule Google Meet','btn-green')}`,

    meet:`
      <div style="text-align:center;padding:10px">
        <div style="font-size:48px;margin-bottom:14px">🎥</div>
        <div style="font-size:16px;font-weight:700;color:var(--navy);margin-bottom:6px">Form 4B – Further Math</div>
        <div style="font-size:13px;color:var(--text2);margin-bottom:4px">Mr. James Ochieng</div>
        <span style="background:#dcfce7;color:#166534;font-size:12px;font-weight:700;padding:3px 12px;border-radius:20px">🔴 LIVE NOW</span>
        <div style="background:var(--surface3);border-radius:12px;padding:16px;margin:16px 0;text-align:left;font-size:13px;color:var(--text2)">
          <div>📅 Today, Monday January 27, 2026</div>
          <div style="margin-top:6px">⏱ Duration: 60 minutes</div>
          <div style="margin-top:10px;font-size:14px;color:var(--navy);font-weight:600">Meeting code: <span style="color:var(--accent);font-size:16px">abc-defg-hij</span></div>
        </div>
        <a href="https://meet.google.com" target="_blank" style="text-decoration:none;display:block">
          <button class="btn btn-green" style="width:100%;justify-content:center;padding:14px;font-size:15px">🎥 Join Google Meet Now ↗</button>
        </a>
        <button class="btn btn-outline" style="width:100%;justify-content:center;margin-top:10px" onclick="closeModal()">Cancel</button>
      </div>`,

    addStudent:`
      <div class="grid-2" style="gap:12px">
        <div class="form-group"><label class="form-label">First Name</label><input class="form-input" placeholder="First name"></div>
        <div class="form-group"><label class="form-label">Last Name</label><input class="form-input" placeholder="Last name"></div>
      </div>
      <div class="form-group"><label class="form-label">Admission Number</label><input class="form-input" placeholder="e.g. G10/009"></div>
      <div class="form-group"><label class="form-label">Date of Birth</label><input type="date" class="form-input"></div>
      <div class="form-group"><label class="form-label">Class</label>
        <select class="form-input"><option>Form 4A</option><option>Form 4B</option><option>Form 3A</option><option>Form 3B</option></select></div>
      <div class="form-group"><label class="form-label">Parent/Guardian Name</label><input class="form-input" placeholder="Full name"></div>
      <div class="form-group"><label class="form-label">Parent/Guardian Phone</label><input class="form-input" placeholder="+254 7XX XXX XXX"></div>
      <div class="form-group"><label class="form-label">Parent/Guardian Email</label><input class="form-input" placeholder="parent@email.com"></div>
      ${formBtn('Enrol Student')}`,

    addTeacher:`
      <div class="form-group"><label class="form-label">Full Name</label><input class="form-input" placeholder="e.g. Mr. John Doe"></div>
      <div class="form-group"><label class="form-label">Email Address</label><input class="form-input" placeholder="teacher@school.ac.ke"></div>
      <div class="form-group"><label class="form-label">Phone Number</label><input class="form-input" placeholder="+254 7XX XXX XXX"></div>
      <div class="form-group"><label class="form-label">Subjects</label><input class="form-input" placeholder="e.g. Mathematics, Further Math"></div>
      <div class="form-group"><label class="form-label">Classes Assigned</label><input class="form-input" placeholder="e.g. 4A, 4B, 3A"></div>
      <div class="form-group"><label class="form-label">Qualification</label><input class="form-input" placeholder="e.g. BSc Mathematics, PGDE"></div>
      ${formBtn('Add Teacher')}`,

    newAss:`
      <div class="form-group"><label class="form-label">Title</label><input class="form-input" placeholder="Assignment title"></div>
      <div class="form-group"><label class="form-label">Subject</label>
        <select class="form-input">${SUBJECTS.map(s=>`<option>${s.name}</option>`).join('')}</select></div>
      <div class="form-group"><label class="form-label">Class(es)</label>
        <select class="form-input" multiple style="height:90px"><option>Form 4A</option><option>Form 4B</option><option>Form 3A</option></select></div>
      <div class="form-group"><label class="form-label">Instructions</label><textarea class="form-input" rows="3" placeholder="What students need to do…"></textarea></div>
      <div class="grid-2" style="gap:12px">
        <div class="form-group"><label class="form-label">Due Date</label><input type="date" class="form-input"></div>
        <div class="form-group"><label class="form-label">Max Points</label><input type="number" class="form-input" placeholder="50"></div>
      </div>
      <div class="form-group"><label class="form-label">Attach Resources</label>
        <select class="form-input"><option>None</option>${RESOURCES.map(r=>`<option>${r.name}</option>`).join('')}</select></div>
      ${formBtn('Create Assignment')}`,

    submitAss:`
      <div class="form-group"><label class="form-label">Assignment</label>
        <div style="background:var(--surface3);border-radius:9px;padding:12px;font-size:13px;color:var(--navy);font-weight:600">Quadratic Equations – Exercise 4C</div>
      </div>
      <div style="border:2px dashed var(--border);border-radius:12px;padding:28px;text-align:center;margin-bottom:14px;cursor:pointer;transition:.2s" onmouseover="this.style.borderColor='var(--accent)'" onmouseout="this.style.borderColor='var(--border)'">
        <div style="font-size:28px;margin-bottom:8px">📎</div>
        <div style="font-size:13px;font-weight:600;color:var(--navy)">Upload your work</div>
        <div style="font-size:12px;color:var(--text3);margin-top:4px">PDF, Word, Images — max 20MB</div>
      </div>
      <div class="form-group"><label class="form-label">Comment (optional)</label><textarea class="form-input" rows="2" placeholder="Any notes for your teacher…"></textarea></div>
      ${formBtn('Submit Assignment','btn-green')}`,

    markAss:`
      <div style="font-size:13px;font-weight:600;color:var(--navy);margin-bottom:14px">Marking: Quadratic Equations – Exercise 4C</div>
      <div class="table-wrap"><table>
        <thead><tr><th>Student</th><th>Submitted</th><th>Score /${ASSIGNMENTS[0].pts}</th></tr></thead>
        <tbody>${STUDENTS.slice(0,5).map(s=>`<tr>
          <td>${s.name}</td>
          <td>${badge('Submitted','bg-green')}</td>
          <td><input type="number" class="form-input" style="width:80px;padding:5px 8px" placeholder="0" max="${ASSIGNMENTS[0].pts}"></td>
        </tr>`).join('')}</tbody>
      </table></div>
      <div style="margin-top:14px">${formBtn('Save Marks')}</div>`,

    newExam:`
      <div class="form-group"><label class="form-label">Exam Name</label><input class="form-input" placeholder="e.g. Form 4A Mid-Term"></div>
      <div class="form-group"><label class="form-label">Subject</label>
        <select class="form-input">${SUBJECTS.map(s=>`<option>${s.name}</option>`).join('')}</select></div>
      <div class="form-group"><label class="form-label">Class(es)</label>
        <select class="form-input"><option>Form 4A</option><option>Form 4B</option><option>All Form 4</option></select></div>
      <div class="grid-2" style="gap:12px">
        <div class="form-group"><label class="form-label">Date</label><input type="date" class="form-input"></div>
        <div class="form-group"><label class="form-label">Start Time</label><input type="time" class="form-input"></div>
      </div>
      <div class="grid-2" style="gap:12px">
        <div class="form-group"><label class="form-label">Duration</label>
          <select class="form-input"><option>1 hour</option><option>1.5 hours</option><option>2 hours</option><option>2.5 hours</option><option>3 hours</option></select></div>
        <div class="form-group"><label class="form-label">Venue</label><input class="form-input" placeholder="e.g. Exam Hall 1"></div>
      </div>
      ${formBtn('Schedule Exam')}`,

    uploadMarks:`
      <div class="form-group"><label class="form-label">Exam</label>
        <select class="form-input"><option>Form 4A – CAT 1 Mathematics</option><option>Form 4A – CAT 1 Chemistry</option></select></div>
      <div style="border:2px dashed var(--border);border-radius:12px;padding:28px;text-align:center;margin-bottom:14px;cursor:pointer">
        <div style="font-size:28px;margin-bottom:8px">📊</div>
        <div style="font-size:13px;font-weight:600;color:var(--navy)">Upload marks spreadsheet (.xlsx / .csv)</div>
      </div>
      <div style="background:#fef3c7;border-radius:9px;padding:12px;font-size:13px;color:#92400e;margin-bottom:14px">
        ⚠️ Column format: Student ID, Score, Out of. Parents will be notified automatically once uploaded.
      </div>
      ${formBtn('Upload Marks')}`,

    newClass:`
      <div class="form-group"><label class="form-label">Class Name</label><input class="form-input" placeholder="e.g. Form 4C"></div>
      <div class="form-group"><label class="form-label">Form / Year</label>
        <select class="form-input"><option>Form 1</option><option>Form 2</option><option>Form 3</option><option>Form 4</option></select></div>
      <div class="form-group"><label class="form-label">Class Teacher</label>
        <select class="form-input">${TEACHERS.map(t=>`<option>${t.name}</option>`).join('')}</select></div>
      <div class="form-group"><label class="form-label">Maximum Students</label><input type="number" class="form-input" placeholder="40"></div>
      ${formBtn('Create Class')}`,

    newMsg:`
      <div class="form-group"><label class="form-label">To</label>
        <select class="form-input"><option>Mr. James Ochieng</option>${TEACHERS.slice(1).map(t=>`<option>${t.name}</option>`).join('')}<option>School Admin</option></select></div>
      <div class="form-group"><label class="form-label">Subject</label><input class="form-input" placeholder="Message subject"></div>
      <div class="form-group"><label class="form-label">Message</label><textarea class="form-input" rows="4" placeholder="Type your message…"></textarea></div>
      ${formBtn('Send Message')}`,

    profile:`
      <div style="text-align:center;margin-bottom:20px">
        <div class="avatar" style="width:70px;height:70px;font-size:24px;font-weight:800;background:linear-gradient(135deg,${S.user?.color||'#4f8ef7'},${S.user?.color+'88'||'#4f8ef788'});margin:0 auto 12px">${S.user?.initials||'?'}</div>
        <div style="font-size:17px;font-weight:700;color:var(--navy)">${S.user?.name}</div>
        <div style="font-size:13px;color:var(--text2);margin-top:3px">${S.user?.role}</div>
        ${badge('Active Account','bg-green')}
      </div>
      <div class="form-group"><label class="form-label">Full Name</label><input class="form-input" value="${S.user?.name}"></div>
      <div class="form-group"><label class="form-label">Email</label><input class="form-input" value="${(S.user?.name||'').split(' ').join('.').toLowerCase()}@school.ac.ke"></div>
      <div class="form-group"><label class="form-label">Phone</label><input class="form-input" value="+254 712 000 000"></div>
      <div class="form-group"><label class="form-label">Password</label><input type="password" class="form-input" placeholder="Change password…"></div>
      ${formBtn('Save Changes')}`,

    notif:`
      ${[
        {ic:'📅',bg:'#dbeafe',msg:'End of term exams scheduled – check timetable',time:'2h'},
        {ic:'✅',bg:'#dcfce7',msg:'Attendance marked for Form 4A – 94% present',time:'3h'},
        {ic:'📝',bg:'#fef3c7',msg:'Fatuma Hassan has not submitted the assignment',time:'5h'},
        {ic:'🎥',bg:'#ede9fe',msg:'Google Meet class starts in 30 minutes',time:'11h'},
        {ic:'🏆',bg:'#dcfce7',msg:'CAT 1 results have been uploaded',time:'1d'},
      ].map(n=>`<div style="display:flex;gap:12px;padding:12px 0;border-bottom:1px solid var(--border)">
        <div style="width:36px;height:36px;border-radius:9px;background:${n.bg};display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0">${n.ic}</div>
        <div style="flex:1"><div style="font-size:13px;color:var(--navy);line-height:1.4">${n.msg}</div>
        <div style="font-size:11px;color:var(--text3);margin-top:3px">${n.time} ago</div></div>
      </div>`).join('')}
      <button class="btn btn-outline" style="width:100%;justify-content:center;margin-top:12px" onclick="closeModal()">Mark all as read</button>`,

    search:`
      <input class="form-input" placeholder="🔍 Search students, teachers, classes, resources…" style="margin-bottom:16px" autofocus>
      <div style="font-size:12px;color:var(--text3);margin-bottom:10px;font-weight:600">RECENT SEARCHES</div>
      ${['Form 4A','Amara Njeri','Mathematics resources','Attendance report'].map(t=>`
      <div style="padding:10px;border-radius:8px;font-size:13px;color:var(--text2);cursor:pointer;display:flex;align-items:center;gap:10px" onmouseover="this.style.background='var(--surface3)'" onmouseout="this.style.background=''">
        🕐 ${t}
      </div>`).join('')}`,

    viewStudent:`
      <div style="text-align:center;margin-bottom:20px">
        <div class="avatar" style="width:60px;height:60px;font-size:20px;font-weight:800;background:#a78bfa;margin:0 auto 12px">A</div>
        <div style="font-size:16px;font-weight:700;color:var(--navy)">Amara Njeri</div>
        <div style="font-size:13px;color:var(--text2)">G10/001 • Form 10A</div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:16px">
        ${[['Attendance','96%','var(--green)'],['Average','87%','var(--accent)'],['Position','4/32','var(--navy)'],['Status','Present','var(--green)']].map(([l,v,c])=>`
        <div style="background:var(--surface3);border-radius:10px;padding:12px;text-align:center">
          <div style="font-size:11px;color:var(--text3)">${l}</div>
          <div style="font-size:18px;font-weight:800;color:${c};margin-top:4px">${v}</div>
        </div>`).join('')}
      </div>
      <div style="display:flex;gap:8px">
        <button class="btn btn-blue" style="flex:1;justify-content:center" onclick="closeModal();navigate('messages')">💬 Message</button>
        <button class="btn btn-outline" style="flex:1;justify-content:center" onclick="closeModal();navigate('grades')">📊 Full Report</button>
      </div>`,

    editLesson:`
      <div class="form-group"><label class="form-label">Lesson Title</label><input class="form-input" value="Completing the Square"></div>
      <div class="form-group"><label class="form-label">Description</label><textarea class="form-input" rows="3">Deriving vertex form by adding and subtracting the square of half the coefficient of x.</textarea></div>
      <div class="form-group"><label class="form-label">Scheduled Date</label><input type="date" class="form-input" value="2026-01-27"></div>
      <div class="form-group"><label class="form-label">Status</label>
        <select class="form-input"><option>Active</option><option>Completed</option><option>Upcoming</option></select></div>
      ${formBtn('Save Changes')}`,
  };

  B.innerHTML = forms[type] || `<div style="text-align:center;padding:20px;color:var(--text2)">Loading…</div>`;
}

/* ═══════════════════ UTILITY RENDERERS ═══════════════════ */
function statCard(ic,bg,label,val,change,changeType){
  return`<div class="stat-card">
    <div class="stat-icon" style="background:${bg}">${ic}</div>
    <div><div class="stat-label">${label}</div><div class="stat-value">${val}</div></div>
    <div class="stat-change ${changeType}">${change}</div>
  </div>`;
}
function annItem(ic,bg,title,desc,time){
  return`<div class="ann-item">
    <div class="ann-icon" style="background:${bg}">${ic}</div>
    <div><div style="font-size:13.5px;font-weight:600;color:var(--navy)">${title}</div>
    <div style="font-size:12px;color:var(--text2);margin-top:3px;line-height:1.4">${desc}</div>
    <div style="font-size:11px;color:var(--text3);margin-top:5px">${time}</div></div>
  </div>`;
}
function filterTab(btn){
  btn.closest('.tabs').querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
  btn.classList.add('active');
}

/* ═══════════════════ BOOT ═══════════════════ */
document.addEventListener('keydown',e=>{ if(e.key==='Escape') closeModal(); });
