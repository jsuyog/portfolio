# 📋 PORTFOLIO V2 - STEP BY STEP GUIDE

## **STEP 1: DOWNLOAD** (1 minute)

1. Click on **portfolio2.zip** link above
2. File downloads to your **Downloads** folder
3. File size: **16 KB**

✅ **Done!**

---

## **STEP 2: EXTRACT** (1 minute)

### **Windows:**
1. Right-click `portfolio2.zip`
2. Select **"Extract All"**
3. Click **"Extract"**
4. A folder named `portfolio2` appears

### **Mac:**
1. Double-click `portfolio2.zip`
2. Folder automatically extracts
3. A folder named `portfolio2` appears

### **Linux:**
1. Right-click `portfolio2.zip`
2. Select **"Extract Here"**
3. A folder named `portfolio2` appears

✅ **You now have a portfolio2 folder!**

---

## **STEP 3: OPEN TERMINAL IN FOLDER**

### **Windows:**
1. Open the `portfolio2` folder
2. Hold **Shift** + Right-click inside folder
3. Click **"Open PowerShell window here"**

### **Mac:**
1. Open the `portfolio2` folder
2. Right-click → **"Open in Terminal"**

### **Linux:**
1. Right-click inside `portfolio2` folder
2. Click **"Open Terminal Here"**

✅ **Terminal is now in portfolio2 folder!**

---

## **STEP 4: INSTALL DEPENDENCIES** (2 minutes)

In your terminal, type:
```bash
npm install
```

**What happens:**
- Downloads all packages
- Creates `node_modules` folder
- Takes 1-2 minutes
- Wait for it to finish

✅ **Dependencies installed!**

---

## **STEP 5: START DEVELOPMENT SERVER** (1 minute)

In your terminal, type:
```bash
npm run dev
```

**What happens:**
- Builds your portfolio
- Starts a server
- Browser opens automatically
- Or go to: **http://localhost:3000**

✅ **Your portfolio is running!** 🎉

---

## **STEP 6: CUSTOMIZE HERO SECTION** (2 minutes)

### **File to open:** `src/components/Hero.jsx`

In your code editor (VS Code):
1. Open portfolio2 folder
2. Navigate to: `src` → `components` → `Hero.jsx`
3. Find this section (around line 7):

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

4. Change to your info:

```javascript
<h1>
  Your Title <br />
  <span className="highlight">& Your Subtitle</span>
</h1>
<p>
  Your description here. Make it compelling and unique to you.
</p>
```

5. **Save** (Ctrl+S or Cmd+S)
6. **Check browser** - changes appear instantly! ✨

✅ **Hero section customized!**

---

## **STEP 7: UPDATE HIGHLIGHT CARDS** (3 minutes)

### **File to open:** `src/components/Highlight.jsx`

Find the highlights array (around line 7):

```javascript
const highlights = [
  {
    id: 1,
    number: '4+',
    title: 'Portfolio Projects',
    description: 'Built production-ready applications from concept to deployment'
  },
  {
    id: 2,
    number: '3+',
    title: 'Years Experience',
    description: 'Cloud SRE and DevOps engineering at scale'
  },
  // ... more cards
];
```

**Change each card to your achievements:**

```javascript
const highlights = [
  {
    id: 1,
    number: '50+',              // Change this number
    title: 'Successful Projects', // Change this title
    description: 'Your description'
  },
  {
    id: 2,
    number: '5+',
    title: 'Years Experience',
    description: 'Your experience'
  },
  // ... do this for all 4 cards
];
```

**Save and check browser!** ✨

✅ **Highlight cards updated!**

---

## **STEP 8: UPDATE ABOUT SECTION** (5 minutes)

### **File to open:** `src/components/About.jsx`

Find the paragraphs (around line 15):

```javascript
<div className="about-content">
  <p>
    I'm a Cloud SRE Engineer with a passion for building scalable, reliable infrastructure...
  </p>
  <p>
    My expertise spans the entire DevOps lifecycle...
  </p>
  // More paragraphs...
</div>
```

**Replace with your bio (3-4 paragraphs):**

```javascript
<div className="about-content">
  <p>
    First paragraph about yourself. Who you are, what you do.
  </p>
  <p>
    Second paragraph. Your background and experience.
  </p>
  <p>
    Third paragraph. Your passions and interests.
  </p>
  <p>
    Fourth paragraph. What drives you.
  </p>
</div>
```

**Update skills tags** (around line 35):

```javascript
<div className="skills-tags">
  <span className="skill-tag">AWS</span>
  <span className="skill-tag">Kubernetes</span>
  // Change all these to YOUR skills
</div>
```

**Save and check browser!** ✨

✅ **About section done!**

---

## **STEP 9: UPDATE EXPERIENCE TIMELINE** (5 minutes)

### **File to open:** `src/components/Experience.jsx`

Find the experiences array (around line 7):

```javascript
const experiences = [
  {
    id: 1,
    role: 'Cloud SRE Engineer',
    company: 'HDFC Bank',
    period: '2021 - Present',
    description: 'Managing production applications...',
    highlights: ['Kubernetes Management', 'AWS Infrastructure', '...']
  },
  // ... more experiences
];
```

**Update with YOUR experience (3+ jobs):**

```javascript
const experiences = [
  {
    id: 1,
    role: 'Your Job Title',
    company: 'Your Company Name',
    period: '2022 - Present',
    description: 'What you did at this job. Describe your responsibilities and achievements.',
    highlights: ['Achievement 1', 'Achievement 2', 'Achievement 3']
  },
  {
    id: 2,
    role: 'Previous Job Title',
    company: 'Previous Company',
    period: '2021 - 2022',
    description: 'What you did here...',
    highlights: ['Achievement 1', 'Achievement 2']
  },
  // Add more if you have more jobs
];
```

**Save and check browser!** ✨

✅ **Experience section updated!**

---

## **STEP 10: UPDATE CONTACT LINKS** (3 minutes)

### **File to open:** `src/components/Connect.jsx`

Find the contact links (around line 30):

```javascript
<a href="mailto:your-email@example.com" className="connect-link">
  <span>Email</span>
  <span className="link-value">your-email@example.com</span>
</a>
```

**Update with YOUR information:**

```javascript
// Email
<a href="mailto:your-real-email@gmail.com" className="connect-link">
  <span>Email</span>
  <span className="link-value">your-real-email@gmail.com</span>
</a>

// LinkedIn
<a href="https://linkedin.com/in/your-linkedin-username" target="_blank" rel="noopener noreferrer" className="connect-link">
  <span>LinkedIn</span>
  <span className="link-value">View Profile</span>
</a>

// GitHub
<a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer" className="connect-link">
  <span>GitHub</span>
  <span className="link-value">@your-github</span>
</a>

// Twitter
<a href="https://twitter.com/your-twitter-handle" target="_blank" rel="noopener noreferrer" className="connect-link">
  <span>Twitter</span>
  <span className="link-value">@your-twitter</span>
</a>
```

**Save and check browser!** ✨

✅ **Contact links updated!**

---

## **STEP 11: ADD YOUR RESUME PDF** (1 minute)

### **What you need:**
- Your resume as a PDF file
- Name it: `resume.pdf`

### **How to add it:**

1. Find your resume PDF on your computer
2. Copy it
3. Open portfolio2 folder
4. Create a new folder inside called `public` (if it doesn't exist)
5. Paste your resume.pdf inside the `public` folder

**Result:** `portfolio2/public/resume.pdf`

✅ **Resume file added!**

---

## **STEP 12: TEST ON MOBILE** (2 minutes)

1. Keep portfolio running (npm run dev)
2. Open browser with portfolio
3. Press **F12** (or Cmd+Option+I on Mac)
4. Click **device icon** in top left of DevTools
5. Select **iPhone SE** or other phones
6. Test all sections
7. Rotate screen - check landscape too
8. Click all buttons and links

**Everything should work perfectly!** ✨

✅ **Mobile testing complete!**

---

## **STEP 13: BUILD FOR DEPLOYMENT** (1 minute)

1. In terminal, press **Ctrl+C** to stop dev server
2. Run:

```bash
npm run build
```

**What happens:**
- Creates a `dist` folder
- Ready to deploy!
- Takes 10-20 seconds

✅ **Build complete!**

---

## **STEP 14: DEPLOY TO NETLIFY** (5 minutes)

### **Step 1: Create Netlify Account**
1. Go to https://app.netlify.com/
2. Click **"Sign up"**
3. Use email or GitHub
4. Verify your email

### **Step 2: Deploy**
1. Go to https://app.netlify.com/
2. Click **"Add new site"** → **"Deploy manually"**
3. Drag and drop your **`dist`** folder
4. Wait for upload (5-10 seconds)
5. Your site is LIVE! 🎉

### **Step 3: Get Your URL**
- You get a free URL like: `your-site-name.netlify.app`
- Click the link to visit your live portfolio!

✅ **Your portfolio is on the internet!** 🌐

---

## **STEP 15: SHARE YOUR PORTFOLIO** (5 minutes)

Now share your live portfolio:

1. **LinkedIn Profile**
   - Add URL to your website section
   - Post about it

2. **GitHub Profile**
   - Add to bio
   - Add to README

3. **Resume/CV**
   - Add portfolio URL
   - Include in email signature

4. **Social Media**
   - Share on Twitter
   - Share on LinkedIn
   - Tell your network!

5. **Job Applications**
   - Include portfolio link
   - Shows employers your work

✅ **Sharing complete!** 🚀

---

## **✅ FINAL CHECKLIST**

- [ ] Downloaded portfolio2.zip
- [ ] Extracted folder
- [ ] Ran npm install
- [ ] Ran npm run dev
- [ ] Updated Hero section (title & description)
- [ ] Updated Highlight cards (4 achievements)
- [ ] Updated About section (bio & skills)
- [ ] Updated Experience (jobs & timeline)
- [ ] Updated Contact links (email & socials)
- [ ] Added resume PDF to public/ folder
- [ ] Tested on mobile (F12)
- [ ] Ran npm run build
- [ ] Deployed to Netlify
- [ ] Got live URL
- [ ] Shared with network

---

## **🎉 CONGRATULATIONS!**

Your professional portfolio is now:
- ✅ Customized with your information
- ✅ Tested on all devices
- ✅ Live on the internet
- ✅ Shared with your network

**You now have a professional portfolio that will help you:**
- Impress potential employers
- Showcase your experience
- Get discovered online
- Land amazing opportunities

---

## **📞 TROUBLESHOOTING**

### **npm install fails**
```bash
# Delete and reinstall
rm -rf node_modules package-lock.json
npm install
```

### **Changes don't show in browser**
1. Save the file (Ctrl+S)
2. Refresh browser (Ctrl+R)
3. Hard refresh (Ctrl+Shift+R)

### **Port 3000 already in use**
```bash
npm run dev -- --port 3001
```

### **Resume download not working**
- Make sure you have `resume.pdf` in `portfolio2/public/` folder
- Restart dev server

---

## **🎯 TOTAL TIME**

- Download & Extract: 2 min
- Install: 2 min
- Customize: 20 min
- Test: 2 min
- Deploy: 5 min
- Share: 5 min

**TOTAL: ~36 minutes to have a live portfolio!** ⏱️

---

**You're all set! Your portfolio is going to be amazing!** 🌟

**Next step: Download portfolio2.zip and follow these steps!**
