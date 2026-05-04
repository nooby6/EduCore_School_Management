/**
 * EduCore – Application Data
 * All static data, demo records, and configuration constants.
 */

// ─── User Profiles ───────────────────────────────────────────────────────────
const USERS = {
  admin:   { name: 'Dr. Sarah Wanjiku',  role: 'System Administrator',  initials: 'SW', color: '#4f8ef7' },
  teacher: { name: 'Mr. James Ochieng',  role: 'Mathematics Teacher',   initials: 'JO', color: '#14b8a6' },
  student: { name: 'Amara Njeri',        role: 'Grade 10A • Student',   initials: 'AN', color: '#a78bfa' },
  parent:  { name: 'Mrs. Grace Njeri',   role: "Amara's Parent",        initials: 'GN', color: '#f59e0b' },
};

// ─── Navigation per Role ─────────────────────────────────────────────────────
const NAV = {
  admin: [
    { s: 'Overview' },
    { id: 'dashboard',     ic: '🏠', lb: 'Dashboard' },
    { id: 'analytics',     ic: '📊', lb: 'Analytics' },
    { s: 'Academics' },
    { id: 'classes',       ic: '🏫', lb: 'Classes & Subjects' },
    { id: 'timetable',     ic: '🗓️', lb: 'Timetable' },
    { id: 'lessons',       ic: '📖', lb: 'Lessons' },
    { id: 'exams',         ic: '📋', lb: 'Exams & Results' },
    { s: 'People' },
    { id: 'students',      ic: '🎒', lb: 'Students',      badge: 3 },
    { id: 'teachers',      ic: '👩‍🏫', lb: 'Teachers' },
    { id: 'parents',       ic: '👨‍👩‍👦', lb: 'Parents' },
    { id: 'attendance',    ic: '✅', lb: 'Attendance' },
    { s: 'Communication' },
    { id: 'announcements', ic: '📢', lb: 'Announcements' },
    { id: 'messages',      ic: '💬', lb: 'Messages',      badge: 5 },
    { s: 'Integrations' },
    { id: 'integrations',  ic: '🔗', lb: 'Google Workspace' },
    { id: 'settings',      ic: '⚙️', lb: 'Settings' },
  ],
  teacher: [
    { s: 'Overview' },
    { id: 'dashboard',     ic: '🏠', lb: 'Dashboard' },
    { s: 'Teaching' },
    { id: 'myClasses',     ic: '🏫', lb: 'My Classes' },
    { id: 'timetable',     ic: '🗓️', lb: 'Timetable' },
    { id: 'lessons',       ic: '📖', lb: 'Lessons & Plans' },
    { id: 'resources',     ic: '📁', lb: 'Resources' },
    { id: 'assignments',   ic: '📝', lb: 'Assignments' },
    { id: 'exams',         ic: '📋', lb: 'Exams & Marks' },
    { s: 'Students' },
    { id: 'attendance',    ic: '✅', lb: 'Attendance' },
    { id: 'grades',        ic: '🏆', lb: 'Grades' },
    { s: 'Online' },
    { id: 'integrations',  ic: '🎥', lb: 'Online Classes' },
    { id: 'classroom',     ic: '🖥️', lb: 'Google Classroom' },
    { s: 'Other' },
    { id: 'messages',      ic: '💬', lb: 'Messages',      badge: 2 },
    { id: 'announcements', ic: '📢', lb: 'Announcements' },
  ],
  student: [
    { s: 'My School' },
    { id: 'dashboard',     ic: '🏠', lb: 'Dashboard' },
    { id: 'timetable',     ic: '🗓️', lb: 'My Timetable' },
    { s: 'Learning' },
    { id: 'lessons',       ic: '📖', lb: 'Lessons' },
    { id: 'resources',     ic: '📁', lb: 'Resources' },
    { id: 'assignments',   ic: '📝', lb: 'Assignments',   badge: 2 },
    { id: 'exams',         ic: '📋', lb: 'Exams' },
    { id: 'grades',        ic: '🏆', lb: 'My Grades' },
    { s: 'Online' },
    { id: 'integrations',  ic: '🎥', lb: 'Join Online Class' },
    { id: 'classroom',     ic: '🖥️', lb: 'Google Classroom' },
    { s: 'Other' },
    { id: 'attendance',    ic: '✅', lb: 'My Attendance' },
    { id: 'messages',      ic: '💬', lb: 'Messages',      badge: 1 },
    { id: 'announcements', ic: '📢', lb: 'Notices' },
  ],
  parent: [
    { s: 'Overview' },
    { id: 'dashboard',     ic: '🏠', lb: 'Dashboard' },
    { s: "Child's Progress" },
    { id: 'grades',        ic: '🏆', lb: 'Grades & Reports' },
    { id: 'attendance',    ic: '✅', lb: 'Attendance' },
    { id: 'timetable',     ic: '🗓️', lb: 'Timetable' },
    { id: 'assignments',   ic: '📝', lb: 'Assignments' },
    { s: 'Communication' },
    { id: 'messages',      ic: '💬', lb: 'Messages',      badge: 1 },
    { id: 'announcements', ic: '📢', lb: 'Notices' },
    { id: 'teachers',      ic: '👩‍🏫', lb: 'Teachers' },
  ],
};

// ─── Subjects ────────────────────────────────────────────────────────────────
const SUBJECTS = [
  { name: 'Mathematics',   ic: '📐', bg: '#dbeafe', tc: '#1e40af', teacher: 'Mr. Ochieng',    room: 'Lab A'    },
  { name: 'Biology',       ic: '🧬', bg: '#dcfce7', tc: '#166534', teacher: 'Ms. Waweru',     room: 'Lab B'    },
  { name: 'English',       ic: '📚', bg: '#ede9fe', tc: '#5b21b6', teacher: 'Mrs. Kamau',     room: 'Room 12'  },
  { name: 'Chemistry',     ic: '⚗️',  bg: '#fef3c7', tc: '#92400e', teacher: 'Dr. Mutua',      room: 'Lab C'    },
  { name: 'History',       ic: '🏛️',  bg: '#fee2e2', tc: '#991b1b', teacher: 'Mr. Otieno',     room: 'Room 8'   },
  { name: 'Physics',       ic: '⚡', bg: '#e0f2fe', tc: '#0369a1', teacher: 'Ms. Nyambura',   room: 'Lab D'    },
  { name: 'Computer Sc.',  ic: '💻', bg: '#f0fdf4', tc: '#166534', teacher: 'Mr. Kambo',      room: 'ICT Lab'  },
];

// ─── Students ─────────────────────────────────────────────────────────────────
const STUDENTS = [
  { name: 'Amara Njeri',     id: 'G10/001', cls: '10A', att: 96, avg: 87, status: 'present', color: '#a78bfa' },
  { name: 'Kevin Otieno',    id: 'G10/002', cls: '10A', att: 88, avg: 79, status: 'present', color: '#4f8ef7' },
  { name: 'Fatuma Hassan',   id: 'G10/003', cls: '10A', att: 72, avg: 65, status: 'absent',  color: '#f59e0b' },
  { name: 'Brian Mwangi',    id: 'G10/004', cls: '10B', att: 94, avg: 91, status: 'late',    color: '#14b8a6' },
  { name: 'Cynthia Achieng', id: 'G10/005', cls: '10B', att: 99, avg: 95, status: 'present', color: '#22c55e' },
  { name: 'Daniel Kipchoge', id: 'G10/006', cls: '10A', att: 85, avg: 74, status: 'present', color: '#ef4444' },
  { name: 'Wanjiru Ngugi',   id: 'G10/007', cls: '10B', att: 91, avg: 82, status: 'present', color: '#ec4899' },
  { name: 'Peter Kamau',     id: 'G10/008', cls: '10A', att: 78, avg: 70, status: 'absent',  color: '#8b5cf6' },
];

// ─── Teachers ─────────────────────────────────────────────────────────────────
const TEACHERS = [
  { name: 'Mr. James Ochieng',  sub: 'Mathematics, Further Math', cls: '4A,4B,3A,3B', exp: '8 yrs',  email: 'j.ochieng@school.ac.ke',  phone: '+254 712 345 678' },
  { name: 'Ms. Agnes Waweru',   sub: 'Biology',                   cls: '4A,4B,2A',    exp: '5 yrs',  email: 'a.waweru@school.ac.ke',   phone: '+254 723 456 789' },
  { name: 'Mrs. Esther Kamau',  sub: 'English Language',          cls: '3A,4A,4B',    exp: '12 yrs', email: 'e.kamau@school.ac.ke',    phone: '+254 734 567 890' },
  { name: 'Dr. Paul Mutua',     sub: 'Chemistry',                 cls: '3A,3B,4A',    exp: '10 yrs', email: 'p.mutua@school.ac.ke',    phone: '+254 745 678 901' },
  { name: 'Mr. Ben Otieno',     sub: 'History & CRE',             cls: '2A,3B,4B',    exp: '6 yrs',  email: 'b.otieno@school.ac.ke',   phone: '+254 756 789 012' },
  { name: 'Ms. June Nyambura',  sub: 'Physics',                   cls: '3A,4A,4B',    exp: '4 yrs',  email: 'j.nyambura@school.ac.ke', phone: '+254 767 890 123' },
];

// ─── Timetable ────────────────────────────────────────────────────────────────
const TIMETABLE = {
  '8:00–9:00':   ['Math',  'English',  'Biology',   'Physics',  'Math'     ],
  '9:00–10:00':  ['English','Biology', 'Math',      '',         'Chemistry'],
  '10:00–10:30': ['BREAK', 'BREAK',    'BREAK',     'BREAK',    'BREAK'    ],
  '10:30–11:30': ['Physics','Chemistry','English',  'Math',     'Biology'  ],
  '11:30–12:30': ['History','Math',    'Chemistry', 'English',  'Physics'  ],
  '12:30–1:30':  ['LUNCH', 'LUNCH',    'LUNCH',     'LUNCH',    'LUNCH'    ],
  '1:30–2:30':   ['Biology','English', 'History',   'Chemistry','History'  ],
  '2:30–3:30':   ['Chemistry','History','Physics',  'Biology',  'English'  ],
};

const TT_BG = {
  Math: '#dbeafe', English: '#ede9fe', Biology: '#dcfce7',
  Chemistry: '#fef3c7', Physics: '#e0f2fe', History: '#fee2e2',
  BREAK: '#f3f4f6', LUNCH: '#f3f4f6',
};
const TT_TX = {
  Math: '#1e40af', English: '#5b21b6', Biology: '#166534',
  Chemistry: '#92400e', Physics: '#0369a1', History: '#991b1b',
  BREAK: '#6b7280', LUNCH: '#6b7280',
};
const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

// ─── Lessons ──────────────────────────────────────────────────────────────────
const LESSONS = [
  { n: 1, title: 'Introduction to Quadratic Equations', sub: 'Mathematics • Ch.4', status: 'completed', res: 3, due: 'Jan 20', desc: 'Overview of quadratic expressions, standard form ax²+bx+c=0, and identification of coefficients.' },
  { n: 2, title: 'Solving by Factorisation',            sub: 'Mathematics • Ch.4', status: 'completed', res: 2, due: 'Jan 22', desc: 'Factor method for solving quadratics. Product-sum approach and grouping technique.' },
  { n: 3, title: 'Completing the Square',               sub: 'Mathematics • Ch.4', status: 'active',    res: 4, due: 'Jan 27', desc: 'Deriving vertex form by adding and subtracting the square of half the coefficient of x.' },
  { n: 4, title: 'The Quadratic Formula',               sub: 'Mathematics • Ch.4', status: 'upcoming',  res: 0, due: 'Jan 29', desc: 'Derivation of x=(-b±√(b²-4ac))/2a and systematic application.' },
  { n: 5, title: 'Discriminant & Nature of Roots',      sub: 'Mathematics • Ch.4', status: 'upcoming',  res: 0, due: 'Feb 3',  desc: 'b²-4ac determines two real, one real, or complex roots.' },
  { n: 6, title: 'Word Problems & Applications',        sub: 'Mathematics • Ch.4', status: 'upcoming',  res: 0, due: 'Feb 7',  desc: 'Modelling real-world scenarios with quadratic equations.' },
];

// ─── Resources ────────────────────────────────────────────────────────────────
const RESOURCES = [
  { name: 'Chapter 4 Notes.pdf',       type: 'PDF',    size: '2.4 MB', sub: 'Mathematics', date: 'Jan 24', ic: '📄', teacher: 'Mr. Ochieng'   },
  { name: 'Quadratic Practice Qs.docx',type: 'Doc',    size: '890 KB', sub: 'Mathematics', date: 'Jan 23', ic: '📝', teacher: 'Mr. Ochieng'   },
  { name: 'Graphing Quadratics.mp4',   type: 'Video',  size: '45 MB',  sub: 'Mathematics', date: 'Jan 22', ic: '🎥', teacher: 'Mr. Ochieng'   },
  { name: 'Biology Cell Diagrams.pdf', type: 'PDF',    size: '5.1 MB', sub: 'Biology',     date: 'Jan 21', ic: '📄', teacher: 'Ms. Waweru'    },
  { name: 'English Grammar Guide.pdf', type: 'PDF',    size: '1.2 MB', sub: 'English',     date: 'Jan 20', ic: '📄', teacher: 'Mrs. Kamau'    },
  { name: 'Chemistry Bonding.pptx',    type: 'Slides', size: '3.8 MB', sub: 'Chemistry',   date: 'Jan 18', ic: '📊', teacher: 'Dr. Mutua'     },
  { name: 'Physics Kinematics.pdf',    type: 'PDF',    size: '2.1 MB', sub: 'Physics',     date: 'Jan 17', ic: '📄', teacher: 'Ms. Nyambura'  },
];

// ─── Assignments ──────────────────────────────────────────────────────────────
const ASSIGNMENTS = [
  { title: 'Quadratic Equations – Ex 4C',      sub: 'Mathematics', due: 'Jan 28', status: 'pending',  subs: '24/32', pts: 50 },
  { title: 'Essay: Technology in Modern Kenya', sub: 'English',     due: 'Jan 30', status: 'pending',  subs: '18/32', pts: 40 },
  { title: 'Cell Respiration Notes Summary',    sub: 'Biology',     due: 'Feb 2',  status: 'upcoming', subs: '0/32',  pts: 30 },
  { title: 'Ionic Bonding Worksheet',           sub: 'Chemistry',   due: 'Jan 22', status: 'graded',   subs: '30/32', pts: 25 },
  { title: 'Kinematics Problem Set',            sub: 'Physics',     due: 'Jan 15', status: 'graded',   subs: '32/32', pts: 60 },
];

// ─── Exams ────────────────────────────────────────────────────────────────────
const EXAMS = [
  { name: 'Form 4A Mid-Term', sub: 'Mathematics', date: 'Feb 14', dur: '2h 30m', status: 'upcoming', venue: 'Exam Hall 1' },
  { name: 'Form 4A Mid-Term', sub: 'English',     date: 'Feb 15', dur: '2h',     status: 'upcoming', venue: 'Exam Hall 2' },
  { name: 'Form 4A Mid-Term', sub: 'Biology',     date: 'Feb 16', dur: '2h',     status: 'upcoming', venue: 'Lab B'       },
  { name: 'Form 4A CAT 1',    sub: 'Mathematics', date: 'Jan 20', dur: '1h',     status: 'done',     venue: 'Classroom',  avg: 74 },
  { name: 'Form 4A CAT 1',    sub: 'Chemistry',   date: 'Jan 18', dur: '1h',     status: 'done',     venue: 'Lab C',      avg: 68 },
];

// ─── Online Classes ───────────────────────────────────────────────────────────
const ONLINE_CLASSES = [
  { cls: 'Form 4B – Further Math',  teacher: 'Mr. Ochieng',  time: 'Today, 11:30 AM',   dur: '60 min', status: 'Live'      },
  { cls: 'Form 3A – Biology',       teacher: 'Ms. Waweru',   time: 'Today, 2:30 PM',    dur: '45 min', status: 'Scheduled' },
  { cls: 'Form 4A – Chemistry',     teacher: 'Dr. Mutua',    time: 'Tue, 9:00 AM',      dur: '60 min', status: 'Scheduled' },
  { cls: 'Form 2B – English',       teacher: 'Mrs. Kamau',   time: 'Wed, 8:00 AM',      dur: '45 min', status: 'Scheduled' },
  { cls: 'Form 3B – Physics',       teacher: 'Ms. Nyambura', time: 'Wed, 11:30 AM',     dur: '60 min', status: 'Scheduled' },
];

// ─── Messages ─────────────────────────────────────────────────────────────────
const MESSAGES_LIST = [
  { name: 'Mr. James Ochieng', msg: 'Please review the new notes I uploaded...',  time: '2m',  unread: 2, color: '#14b8a6' },
  { name: 'Mrs. Esther Kamau', msg: 'Essay deadline reminder – Wednesday',        time: '1h',  unread: 0, color: '#a78bfa' },
  { name: 'Dr. Paul Mutua',    msg: 'Good job on the chemistry test!',             time: '3h',  unread: 1, color: '#f59e0b' },
  { name: 'School Admin',      msg: 'End of term schedule update',                 time: '1d',  unread: 0, color: '#4f8ef7' },
  { name: 'Ms. Agnes Waweru',  msg: 'Biology practical tomorrow at 2 PM',          time: '2d',  unread: 0, color: '#22c55e' },
  { name: 'Ms. June Nyambura', msg: 'Physics assignment solutions attached',        time: '3d',  unread: 0, color: '#ec4899' },
];

const CHAT_MSGS = [
  { from: 'other', msg: "Hello! I wanted to let you know that your performance on the last assignment was excellent — 87%. Very well done, keep it up!", time: '10:22 AM' },
  { from: 'me',    msg: "Thank you sir! I worked really hard on it. Could I ask about the next topic?", time: '10:24 AM' },
  { from: 'other', msg: "Of course! We're moving to the Quadratic Formula next lesson. Please review the notes I uploaded. Also don't forget: Google Meet class tomorrow at 11:30 AM.", time: '10:26 AM' },
  { from: 'me',    msg: "Sure, I'll be there. Should I bring the textbook?", time: '10:28 AM' },
  { from: 'other', msg: "Yes, Chapter 4. I've also uploaded extra practice problems to the Resources section — they cover all exam-style questions.", time: '10:30 AM' },
  { from: 'me',    msg: "Perfect, thank you Mr. Ochieng! I'll go through them this evening.", time: '10:32 AM' },
];

// ─── Additional Demo Datasets ───────────────────────────────────────────────
const PARENTS = [
  { p: 'Mrs. Grace Njeri',  ch: 'Amara Njeri (10A)',     ph: '+254 712 000 001', login: 'Today' },
  { p: 'Mr. John Otieno',   ch: 'Kevin Otieno (10A)',    ph: '+254 712 000 002', login: 'Yesterday' },
  { p: 'Ms. Halima Hassan', ch: 'Fatuma Hassan (10A)',   ph: '+254 712 000 003', login: 'Jan 25' },
  { p: 'Mr. Paul Mwangi',   ch: 'Brian Mwangi (10B)',    ph: '+254 712 000 004', login: 'Jan 24' },
  { p: 'Mrs. Lydia Achieng', ch: 'Cynthia Achieng (10B)', ph: '+254 712 000 005', login: 'Jan 24' },
  { p: 'Mr. Simon Kipchoge', ch: 'Daniel Kipchoge (10A)', ph: '+254 712 000 006', login: 'Jan 23' },
];

const TEACHER_TODAY_SCHEDULE = [
  { time: '8:00 AM', cls: 'Form 4A - Mathematics', room: 'Lab A', type: 'In-person' },
  { time: '9:00 AM', cls: 'Form 3B - Mathematics', room: 'Room 5', type: 'In-person' },
  { time: '11:30 AM', cls: 'Form 4B - Further Math', room: 'Google Meet', type: 'Online' },
  { time: '1:30 PM', cls: 'Form 2A - Mathematics', room: 'Room 7', type: 'In-person' },
  { time: '2:30 PM', cls: 'Form 2B - Mathematics', room: 'Room 4', type: 'In-person' },
];

const STUDENT_TODAY_CLASSES = [
  { time: '8:00', sub: 'Mathematics', teacher: 'Mr. Ochieng', room: 'Lab A', live: false },
  { time: '9:00', sub: 'English', teacher: 'Mrs. Kamau', room: 'Room 12', live: false },
  { time: '10:30', sub: 'Physics', teacher: 'Ms. Nyambura', room: 'Google Meet', live: true },
  { time: '11:30', sub: 'History', teacher: 'Mr. Otieno', room: 'Room 8', live: false },
  { time: '1:30', sub: 'Biology', teacher: 'Ms. Waweru', room: 'Lab B', live: false },
];

const SUBJECT_PROGRESS = {
  student: {
    Mathematics: 88,
    Biology: 84,
    English: 82,
    Chemistry: 76,
    History: 79,
    Physics: 81,
    'Computer Sc.': 90,
  },
  parent: {
    Mathematics: 88,
    Biology: 84,
    English: 82,
    Chemistry: 76,
    History: 79,
    Physics: 81,
    'Computer Sc.': 90,
  },
  grades: {
    Mathematics: 81,
    Biology: 77,
    English: 74,
    Chemistry: 72,
    History: 69,
    Physics: 75,
    'Computer Sc.': 86,
  },
  analytics: {
    Mathematics: 78,
    Biology: 73,
    English: 76,
    Chemistry: 71,
    History: 68,
    Physics: 74,
    'Computer Sc.': 82,
  },
};

const PARENT_TEACHER_MESSAGES = [
  { t: 'Mr. Ochieng', m: 'Amara has shown great improvement in calculus this term.', d: 'Today' },
  { t: 'Mrs. Kamau', m: 'Please ensure the English essay is submitted by Wednesday.', d: 'Yesterday' },
  { t: 'Ms. Waweru', m: 'Biology practical results: Amara scored 91%. Excellent!', d: 'Jan 24' },
];

const ANNOUNCEMENTS = [
  {
    ic: 'Calendar',
    bg: '#dbeafe',
    ti: 'End of Term Examinations',
    body: 'Examinations are scheduled for February 14-21, 2026. The full timetable is on Google Classroom. All students must report by 7:30 AM on each exam day. Parents will receive individual timetables via email.',
    time: '2 hours ago',
    auth: 'Dr. Sarah Wanjiku (Principal)',
    tgt: 'All Students, Staff & Parents',
    pin: true,
  },
  {
    ic: 'Trophy',
    bg: '#dcfce7',
    ti: 'National Games Qualification!',
    body: "Congratulations to our athletics team! We have qualified for the National Schools Games in Mombasa next month. A special assembly will be held this Friday. Well done to all athletes and coaches.",
    time: 'Yesterday 3:15 PM',
    auth: 'Mr. Otieno (PE Department)',
    tgt: 'All Students & Parents',
    pin: false,
  },
  {
    ic: 'TriangleAlert',
    bg: '#fef3c7',
    ti: 'Scheduled System Maintenance',
    body: 'EduCore will be offline Saturday January 29 from 10:00 PM to 2:00 AM for upgrades. Please download any materials you need before then. We apologize for any inconvenience.',
    time: '2 days ago',
    auth: 'ICT Department',
    tgt: 'All Users',
    pin: false,
  },
  {
    ic: 'BookOpen',
    bg: '#ede9fe',
    ti: 'New Library Resources Available',
    body: 'The school library has received new textbooks and reference materials for all KCSE subjects. Form 3 and Form 4 students are strongly encouraged to make use of these resources ahead of mid-term exams.',
    time: '3 days ago',
    auth: 'Mrs. Kamau (Head of Academics)',
    tgt: 'Form 3 & Form 4 Students',
    pin: false,
  },
  {
    ic: 'GraduationCap',
    bg: '#ccfbf1',
    ti: 'University Open Days - January 2026',
    body: 'Several top universities have upcoming open days. Please check the school notice board or ask your class teacher for details. All Form 4 students are encouraged to attend.',
    time: '4 days ago',
    auth: 'Career Guidance Office',
    tgt: 'Form 4 Students & Parents',
    pin: false,
  },
];

const EXAM_RESULT_ROWS = [
  { studentId: 'G10/005', Chemistry: 92, Mathematics: 95 },
  { studentId: 'G10/004', Chemistry: 88, Mathematics: 91 },
  { studentId: 'G10/001', Chemistry: 82, Mathematics: 87 },
  { studentId: 'G10/007', Chemistry: 80, Mathematics: 84 },
  { studentId: 'G10/002', Chemistry: 76, Mathematics: 79 },
  { studentId: 'G10/006', Chemistry: 72, Mathematics: 74 },
];

const ANALYTICS_ATTENDANCE_TREND = [89, 91, 90, 92, 88, 94, 93, 91, 90, 89, 92, 93, 94, 90, 88, 91, 93, 92, 90, 89, 91];

const CLASS_COMPARISON = [
  { cls: '4A', students: 34, avg: 82, att: 94, rank: 1 },
  { cls: '4B', students: 32, avg: 79, att: 92, rank: 2 },
  { cls: '3A', students: 31, avg: 77, att: 91, rank: 3 },
  { cls: '3B', students: 30, avg: 74, att: 89, rank: 4 },
  { cls: '2A', students: 36, avg: 72, att: 88, rank: 5 },
  { cls: '2B', students: 35, avg: 70, att: 87, rank: 6 },
];

// ─── Page Titles ──────────────────────────────────────────────────────────────
const PAGE_TITLES = {
  dashboard:     'Dashboard',
  analytics:     'Analytics & Reports',
  classes:       'Classes & Subjects',
  timetable:     'Timetable',
  lessons:       'Lessons',
  exams:         'Exams & Results',
  students:      'Students',
  teachers:      'Teachers',
  parents:       'Parents',
  attendance:    'Attendance',
  announcements: 'Announcements',
  messages:      'Messages',
  integrations:  'Google Workspace',
  settings:      'System Settings',
  myClasses:     'My Classes',
  resources:     'Resources',
  assignments:   'Assignments',
  grades:        'Grades',
  classroom:     'Google Classroom',
};
