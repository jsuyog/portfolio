# 🎯 Portfolio V2 - New Design Guide

## ✨ What's New in This Design

Your new portfolio is based on the design you loved from https://www.wallofportfolios.in/portfolios/deepen-vora/

### **Features:**
✅ **Resume Download Button** - Easy resume access  
✅ **Highlight Section** - Showcase key metrics & achievements  
✅ **Clean Navigation** - Home, About, Experience, Let's Connect, Resume  
✅ **Timeline Experience** - Visual career progression  
✅ **Skills Section** - Interactive skill tags  
✅ **Contact Methods** - All ways to reach you  
✅ **Professional Design** - Modern, clean, elegant  
✅ **Fully Responsive** - Perfect on all devices  

---

## 📊 Portfolio Sections

### 1. **Home (Hero)**
- Your title and introduction
- Two action buttons (Explore Work, Let's Connect)
- Gradient background

### 2. **Highlight**
- 4 key achievements cards
- Numbers, titles, descriptions
- Hover effects with animations

### 3. **About**
- Detailed biography (multiple paragraphs)
- Skills tags on the right side
- Sticky skills section on desktop

### 4. **Experience**
- Timeline layout with visual markers
- 3 experience entries with:
  - Job title
  - Company name
  - Duration
  - Description
  - Key highlights

### 5. **Let's Connect**
- Call-to-action section
- Contact methods:
  - Email
  - LinkedIn
  - GitHub
  - Twitter
- Each with icons and links

### 6. **Resume**
- PDF preview placeholder
- Download button
- Resume metadata

---

## 🚀 Quick Setup

### Step 1: Download
- Download `portfolio2.zip` from outputs
- Extract the folder

### Step 2: Install & Run
```bash
cd portfolio2
npm install
npm run dev
```

Your portfolio opens at `http://localhost:3000`

### Step 3: Customize (See sections below)

---

## 📝 Customization Guide

### **Update Hero Title**
**File:** `src/components/Hero.jsx`

Find and change:
```javascript
<h1>
  Cloud SRE Engineer <br />
  <span className="highlight">& Full Stack Developer</span>
</h1>
<p>
  Building scalable infrastructure and reliable cloud systems. 
  3+ years of hands-on experience with AWS, GCP, and Azure at production scale.
</p>
```

To your info:
```javascript
<h1>
  Your Title <br />
  <span className="highlight">& Your Subtitle</span>
</h1>
<p>
  Your description here...
</p>
```

---

### **Update Highlight Cards**
**File:** `src/components/Highlight.jsx`

Find the `highlights` array and edit:
```javascript
const highlights = [
  {
    id: 1,
    number: '4+',
    title: 'Portfolio Projects',
    description: 'Your description'
  },
  // Edit these...
];
```

**Example:**
```javascript
{
  id: 1,
  number: '50+',
  title: 'Successful Projects',
  description: 'Delivered across various domains'
}
```

---

### **Update About Section**
**File:** `src/components/About.jsx`

Change the paragraphs in the `About` function:
```javascript
<p>
  First paragraph about yourself...
</p>
<p>
  Second paragraph...
</p>
```

Update the skills tags:
```javascript
<div className="skills-tags">
  <span className="skill-tag">Your Skill 1</span>
  <span className="skill-tag">Your Skill 2</span>
  // Add more...
</div>
```

---

### **Update Experience Timeline**
**File:** `src/components/Experience.jsx`

Edit the `experiences` array:
```javascript
const experiences = [
  {
    id: 1,
    role: 'Your Role',
    company: 'Your Company',
    period: '2023 - Present',
    description: 'What you did...',
    highlights: ['Achievement 1', 'Achievement 2']
  },
  // Add more experiences...
];
```

---

### **Update Connect Section**
**File:** `src/components/Connect.jsx`

Change email and social links:
```javascript
<a href="mailto:your-email@example.com" className="connect-link">
  <span className="link-icon">✉️</span>
  <span>Email</span>
  <span className="link-value">your-email@example.com</span>
</a>
```

Update all 4 links (Email, LinkedIn, GitHub, Twitter)

---

### **Add Resume PDF**
**File:** `src/components/Resume.jsx`

Replace the resume file path:
```javascript
link.href = '/resume.pdf'; // Change this to your resume file
```

**Steps:**
1. Get your resume PDF
2. Place it in `public/` folder
3. Name it `resume.pdf`
4. The download button will work automatically!

---

## 🎨 Change Colors (Optional)

**File:** `src/App.css`

Edit CSS variables at the top:
```css
:root {
  --primary-color: #0a0e27;      /* Dark blue */
  --accent-color: #6366f1;       /* Indigo */
  --accent-light: #e0e7ff;       /* Light indigo */
  --bg-gray: #f8f9fa;            /* Light gray background */
  --text-dark: #0a0e27;          /* Dark text */
  --text-light: #666666;         /* Gray text */
  --text-muted: #999999;         /* Muted text */
}
```

**Example - Change to blue theme:**
```css
--primary-color: #0066ff;
--accent-color: #0066ff;
--accent-light: #e0e7ff;
```

---

## 📱 Testing on Mobile

1. Run `npm run dev`
2. Press `F12` to open DevTools
3. Click device icon → select iPhone/iPad
4. Check all sections work perfectly

---

## 🚀 Deploy to Netlify

### Step 1: Build
```bash
npm run build
```

### Step 2: Deploy
1. Go to https://app.netlify.com/
2. Click "Add new site" → "Deploy manually"
3. Drag `dist` folder
4. Done! 🎉

---

## 📋 File Structure

```
portfolio2/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx/.css
│   │   ├── Hero.jsx/.css
│   │   ├── Highlight.jsx/.css
│   │   ├── About.jsx/.css
│   │   ├── Experience.jsx/.css
│   │   ├── Connect.jsx/.css
│   │   └── Resume.jsx/.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── .gitignore
```

---

## ✅ Before Deploying

- [ ] Updated Hero title & description
- [ ] Updated all Highlight cards
- [ ] Updated About section & skills
- [ ] Updated all Experience entries
- [ ] Updated Connect section with real links
- [ ] Added resume PDF to `public/resume.pdf`
- [ ] Changed email to your actual email
- [ ] Updated LinkedIn, GitHub, Twitter links
- [ ] Tested on mobile
- [ ] No errors in console (F12)

---

## 💡 Tips

1. **Navigation auto-highlights** - Current section shows in nav
2. **Sticky skills section** - On desktop, scrolls with you in About
3. **Timeline animations** - Experience items have hover effects
4. **Responsive design** - Works perfect on all devices
5. **Fast loading** - Optimized for performance

---

## 🔗 Important Links

- Download: `portfolio2.zip`
- Local: `http://localhost:3000`
- Deploy: `https://netlify.com/`
- Resume: Place in `public/resume.pdf`

---

## 🎯 Your Customization Checklist

### Content Changes (MUST DO):
- [ ] Hero title
- [ ] Hero description  
- [ ] Highlight cards (4 items)
- [ ] About paragraphs
- [ ] About skills tags
- [ ] Experience entries (3+)
- [ ] Connect links (email, LinkedIn, GitHub, Twitter)
- [ ] Resume PDF file

### Optional Changes:
- [ ] Change colors in App.css
- [ ] Add more experience entries
- [ ] Add more skills tags
- [ ] Adjust navigation links

---

## 📞 Troubleshooting

**Port 3000 in use?**
```bash
npm run dev -- --port 3001
```

**Changes not showing?**
- Save file
- Refresh browser (Ctrl+R)

**Build errors?**
```bash
rm -rf node_modules
npm install
npm run build
```

---

**You're all set! This design is professional, modern, and ready to impress!** 🌟

Download `portfolio2.zip` and get started now!
