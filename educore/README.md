# 🎓 EduCore – School Management System

A fully-featured, browser-based school management platform with four user roles, real-time attendance, Google Workspace integration, and a complete teaching & learning portal.

---

## ✨ Features

| Feature | Details |
|---|---|
| 🔐 **Multi-role Login** | Admin, Teacher, Student, Parent |
| 🏠 **Role Dashboards** | Tailored views per user type |
| 🏫 **Class Management** | Create and manage classes & subjects |
| 🗓️ **Timetable** | Full weekly schedule per class |
| 📖 **Lessons** | Plan, assign, and track lesson progress |
| 📁 **Resources** | Teachers upload PDFs, videos, slides per lesson |
| 📝 **Assignments** | Create, submit, and mark assignments |
| 📋 **Exams & Results** | Schedule exams, upload and view marks |
| ✅ **Attendance** | Real-time marking with parent sync |
| 🏆 **Grades** | Subject performance, leaderboard, reports |
| 📊 **Analytics** | School-wide stats, charts, grade distribution |
| 💬 **Messaging** | In-app chat between all user types |
| 📢 **Announcements** | School-wide or targeted notices |
| 🎥 **Google Meet** | Schedule and join live online classes |
| 🖥️ **Google Classroom** | Deep-linked Classroom integration |
| 🔗 **Google Workspace** | Meet, Classroom, Drive, Calendar, Gmail |
| ⚙️ **Settings** | School info, notifications, integration status |

---

## 🚀 Quick Start (VS Code + Live Server)

### Prerequisites
- [Visual Studio Code](https://code.visualstudio.com/)
- [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) *(recommended)*

### Steps

1. **Open the project folder in VS Code**
   ```
   File → Open Folder → select the `educore` folder
   ```

2. **Install recommended extensions** *(one-time)*
   - VS Code will prompt: *"Do you want to install the recommended extensions?"*
   - Click **Install All**

3. **Launch with Live Server**
   - Right-click `index.html` in the Explorer
   - Select **"Open with Live Server"**
   - Your browser opens at `http://127.0.0.1:5500`

4. **Or just open directly** *(no server needed)*
   ```
   Double-click index.html  →  opens in your default browser
   ```

---

## 🔑 Demo Login Accounts

Click any **Quick Demo** button on the login screen, or use these credentials:

| Role | What you can do |
|---|---|
| 🛡️ **Admin** | Full system access — manage students, teachers, classes, analytics, settings |
| 📚 **Teacher** | Mark attendance, upload resources, create assignments, host Google Meet |
| 🎒 **Student** | View lessons, submit assignments, join online classes, check grades |
| 👨‍👩‍👦 **Parent** | Monitor child's grades, attendance, messages from teachers |

---

## 📁 Project Structure

```
educore/
├── index.html          ← Main entry point (open this)
├── css/
│   └── styles.css      ← All styles and design tokens
├── js/
│   ├── data.js         ← All app data (students, subjects, lessons…)
│   ├── app.js          ← Core logic (auth, navigation, helpers)
│   ├── pages.js        ← All page renderers (dashboard, attendance…)
│   ├── modals.js       ← All modal/dialog content builders
│   └── main.js         ← Bootstrap entry point
├── assets/             ← Images, icons (add your own here)
├── .vscode/
│   ├── settings.json   ← Editor settings
│   └── extensions.json ← Recommended extensions
└── README.md           ← This file
```

---

## 🛠 Customisation Guide

### Change School Name
Edit `js/data.js` → find `'Nairobi Academy'` and replace throughout.

### Add a New Student
Edit the `STUDENTS` array in `js/data.js`:
```js
{ name: 'Jane Doe', id: 'G10/009', cls: '10A', att: 95, avg: 88, status: 'present', color: '#4f8ef7' },
```

### Add a New Subject
Edit the `SUBJECTS` array in `js/data.js`:
```js
{ name: 'Geography', ic: '🌍', bg: '#f0fdf4', tc: '#166534', teacher: 'Mr. Kiprop', room: 'Room 3' },
```

### Add a New Teacher
Edit the `TEACHERS` array in `js/data.js`.

### Modify Timetable
Edit the `TIMETABLE` object in `js/data.js`.

### Change Colour Theme
Edit CSS variables at the top of `css/styles.css`:
```css
:root {
  --accent: #4f8ef7;   /* primary blue */
  --navy:   #0f1b35;   /* sidebar background */
  --green:  #22c55e;   /* success colour */
  /* ... */
}
```

---

## 🌐 Google Workspace Integration

The Google Meet and Google Classroom buttons link to live Google services.  
To connect your real school accounts, replace the placeholder URLs in `js/modals.js` 
with your actual Google Workspace domain meeting links and Classroom URLs.

---

## 📦 Tech Stack

- **HTML5** – semantic markup
- **CSS3** – custom properties, flexbox, grid, animations
- **Vanilla JavaScript** – no frameworks, no build tools required
- **Google Fonts** – Plus Jakarta Sans + Instrument Serif

No npm, no bundler, no backend required. Just open and run.

---

## 📄 Licence

MIT — free for school, personal, and commercial use.

---

*Built with EduCore v2.1 · Term 1 2026*
