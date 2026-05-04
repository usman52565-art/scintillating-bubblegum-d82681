# Smart Online Academy - Quick Start Guide

## 🚀 Get Started in 5 Minutes

### Step 1: Open the Website
1. Extract all files to a folder
2. Double-click on `index.html` to open in your browser
3. The website should load immediately

### Step 2: Test Features

#### Language Switching
- Click the "EN" / "PT" button in top right
- All content switches to Portuguese instantly
- Your preference is saved automatically

#### Dark/Light Mode
- Click the moon/sun icon in top right
- The entire site switches to dark mode
- Toggle back anytime with smooth transitions

#### Navigation
- Click menu items to navigate pages
- All links work and pages load correctly
- Mobile menu (hamburger) works on small screens

#### Explore Courses
- Click "Courses" to see all available courses
- Use filters to search by category or language
- Click "Learn More" or "Buy Now" on any course

#### Course Details
- Click any course to see full details
- View course modules in expandable accordion
- See instructor info and student reviews

#### Contact Form
- Go to "Contact" page
- Fill out form and submit
- See success message

### Step 3: Customize for Your Needs

#### Update Company Name
Open each HTML file and replace "Smart Online Academy" with your company name:
```html
<a href="index.html" class="nav-brand">Your Company Name</a>
```

#### Update Contact Information
In `index.html`:
- Email: support@smartonlineacademy.com → your email
- Phone: +1234567890 → your phone
- WhatsApp: +1234567890 → your WhatsApp number

#### Update Hotmart Links
In `assets/js/script.js`, find the `courses` array and update:
```javascript
hotmart_link: "https://hotmart.com/product/your-product-id"
```

#### Change Brand Colors
In `assets/css/style.css`, modify the `:root` section:
```css
:root {
  --primary: #6366f1;      /* Change this to your color */
  --secondary: #8b5cf6;
  --accent: #ec4899;
}
```

### Step 4: Replace Images

Replace placeholder images with real ones:

1. **Course Images**: Find in `script.js`:
```javascript
image: "https://via.placeholder.com/400x250/6366f1/ffffff?text=Course+Name"
```
Replace with real image URL

2. **Instructor Photos**: In `course.html`:
```html
<img src="https://via.placeholder.com/300x300/6366f1/ffffff?text=Instructor">
```
Replace with real photo URL

3. **Blog Images**: In `blog.html`:
```html
<img src="https://via.placeholder.com/600x400/6366f1/ffffff?text=Blog+Post">
```
Replace with real image

### Step 5: Deploy to Web

#### Option A: Using GitHub Pages (Free)
1. Create GitHub account
2. Create new repository
3. Upload all files
4. Enable Pages in settings
5. Your site is live in minutes!

#### Option B: Using a Web Host
1. Buy domain and hosting
2. Use FTP to upload files
3. Set up SSL certificate
4. Configure domain DNS
5. Your site is ready!

#### Option C: Using Static Site Hosts
- Netlify (highly recommended)
- Vercel
- Firebase Hosting
- AWS S3

## 📋 File Organization

```
Smart Online Academy/
├── index.html              # Main page - start here
├── courses.html            # All courses
├── course.html             # Individual course details
├── categories.html         # Course categories
├── about.html              # About company
├── blog.html               # Blog posts
├── sitemap.xml             # For search engines
├── robots.txt              # For search engines
├── README.md               # Full documentation
├── QUICK_START.md          # This file
│
└── assets/
    ├── css/
    │   └── style.css       # All styling (2000+ lines)
    ├── js/
    │   └── script.js       # All functionality (1500+ lines)
    └── images/             # Put your images here
```

## 🎨 Design Customization

### Colors
The entire color scheme is controlled by CSS variables in `style.css`:

```css
--primary: #6366f1;        /* Main color - change this */
--primary-dark: #4f46e5;   /* Darker shade */
--secondary: #8b5cf6;      /* Secondary color */
--accent: #ec4899;         /* Highlight color */
--background: #ffffff;     /* Light mode background */
--dark-bg: #0f172a;        /* Dark mode background */
```

Change the primary color to match your brand instantly!

### Typography
```css
--font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

Add Google Fonts:
1. Import in style.css: `@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');`
2. Update --font-sans: `--font-sans: 'Poppins', sans-serif;`

### Spacing
All margins/padding use variables - change them once, everything updates:
```css
--spacing-lg: 2rem;   /* Change this to adjust all spacing */
```

## 🔍 SEO Quick Setup

### 1. Meta Tags (in each HTML file head)
```html
<meta name="description" content="Your description here (max 160 chars)">
<meta name="keywords" content="keyword1, keyword2, keyword3">
<title>Your Page Title Here</title>
```

### 2. Google Search Console
1. Go to google.com/webmasters/
2. Add your website
3. Upload sitemap.xml (already created)
4. Submit for indexing

### 3. Google Analytics
1. Create account at google.com/analytics/
2. Copy tracking code
3. Paste before closing `</head>` tag in index.html

## 📱 Testing Checklist

Before going live, test:

- [ ] All pages load correctly
- [ ] Language switching works
- [ ] Dark mode works
- [ ] All links work
- [ ] Forms work
- [ ] Mobile view looks good
- [ ] Images load properly
- [ ] Hotmart links open correctly
- [ ] Page loads fast (< 3 seconds)
- [ ] No console errors (F12 → Console)

## ⚙️ Browser Compatibility

Works great on:
- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile Safari (iPhone)
- ✅ Chrome Mobile (Android)

## 🐛 Common Issues & Solutions

### Issue: Images show as broken
**Solution**: Replace placeholder URLs with real image links

### Issue: Language doesn't switch
**Solution**: Check browser console (F12) for errors

### Issue: Dark mode doesn't work
**Solution**: Clear browser cache and refresh

### Issue: Forms don't submit
**Solution**: Check that form elements have correct data attributes

### Issue: Page is slow
**Solution**: Compress images and minimize CSS/JS

## 💡 Tips & Tricks

1. **Backup Before Changes**: Save copies before editing files
2. **Use Browser DevTools**: F12 to debug issues
3. **Test on Mobile**: Use browser's mobile view
4. **Browser Extensions**: Install "Web Developer" for easy testing
5. **Color Picker**: Use browser DevTools color picker to test colors
6. **Responsiveness**: Test on multiple screen sizes

## 📞 Need Help?

1. **JavaScript Issues**: Open F12 → Console tab to see errors
2. **Styling Issues**: Check Elements tab in DevTools
3. **Performance**: Use PageSpeed Insights from Google
4. **SEO Check**: Use MozBar or SEMrush tools

## 🎓 Next Steps

1. ✅ Get the website running locally
2. ✅ Customize colors and content
3. ✅ Replace placeholder images
4. ✅ Update contact information
5. ✅ Add your Hotmart links
6. ✅ Test everything thoroughly
7. ✅ Deploy to web hosting
8. ✅ Submit to Google Search Console
9. ✅ Set up analytics
10. ✅ Start marketing!

## 📚 Resources

- **Customize Guide**: See README.md for detailed customization
- **SEO Guide**: See README.md SEO section
- **Hotmart Integration**: Hotmart.com documentation
- **CSS Guide**: MDN Web Docs (mdn.org)
- **JavaScript Guide**: JavaScript.info

---

**You're all set! 🎉**

Start by opening `index.html` in your browser and explore all the features.

Good luck with Smart Online Academy!
