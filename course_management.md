# Course Management Guide

## 📚 Adding and Updating Courses

This guide explains how to manage courses in your Smart Online Academy website.

---

## 1. Where Course Data Lives

All course data is stored in `assets/js/script.js` in the `courses` array.

Open this file with any text editor (VS Code, Notepad++, etc.)

## 2. Course Data Structure

Each course is an object with this structure:

```javascript
{
  id: 1,                              // Unique identifier
  title_en: "Course Title",           // English title
  title_pt: "Título do Curso",        // Portuguese title
  description_en: "Description...",   // English description
  description_pt: "Descrição...",     // Portuguese description
  category: "digital",                // Category: digital, finance, creative, personal, technical
  language: "en",                     // Course language: en or pt
  price: "$49.99",                    // Price (format as string)
  rating: 4.8,                        // Rating out of 5
  reviews: 1250,                      // Number of reviews
  image: "https://...",               // Course image URL
  instructor: "John Smith",           // Instructor name
  level: "Beginner",                  // Level: Beginner, Intermediate, Advanced
  duration: "6 weeks",                // Course duration
  students: 5420,                     // Number of enrolled students
  hotmart_link: "https://hotmart...", // Hotmart checkout link
  modules: [                          // Course modules
    "Module 1 Title",
    "Module 2 Title",
    "Module 3 Title"
  ]
}
```

---

## 3. Adding a New Course

### Step-by-Step:

1. **Open** `assets/js/script.js`

2. **Find** the `const courses = [` line (around line 150)

3. **Add** this new course entry at the END of the courses array (before the closing `]`):

```javascript
{
  id: 7,
  title_en: "Your New Course",
  title_pt: "Seu Novo Curso",
  description_en: "Learn the complete strategy to master this skill",
  description_pt: "Aprenda a estratégia completa para dominar esta habilidade",
  category: "digital",
  language: "en",
  price: "$39.99",
  rating: 4.9,
  reviews: 450,
  image: "https://your-image-url.com/course.jpg",
  instructor: "Expert Instructor Name",
  level: "Intermediate",
  duration: "8 weeks",
  students: 3200,
  hotmart_link: "https://hotmart.com/product/your-product-id",
  modules: [
    "Module 1: Introduction",
    "Module 2: Core Concepts",
    "Module 3: Hands-on Projects",
    "Module 4: Advanced Topics",
    "Module 5: Final Project"
  ]
},
```

4. **Important**: Make sure the last existing course entry BEFORE your new one has a comma, and your new entry has a comma after the closing `}`

### Example:

```javascript
const courses = [
  {
    id: 1,
    // ... existing course data ...
    modules: [...]
  },  // ← This comma is REQUIRED
  {
    id: 2,
    // ... another existing course ...
  },  // ← This comma is REQUIRED
  {
    id: 7,
    // ... YOUR NEW COURSE ...
  }   // ← NO comma after the last entry
]; // ← Closing bracket
```

5. **Save** the file (Ctrl+S or Cmd+S)

6. **Refresh** your browser to see the new course appear

---

## 4. Updating Existing Courses

To modify an existing course:

1. Open `assets/js/script.js`
2. Find the course by ID (usually the first property)
3. Edit the properties you want to change:
   - `title_en/pt` - Course name
   - `description_en/pt` - Course description
   - `price` - Course price
   - `rating/reviews` - Add reviews/ratings
   - `students` - Update enrollment count
   - `hotmart_link` - Update the Hotmart link
   - `modules` - Add or remove course modules

4. Save and refresh to see changes

---

## 5. Managing Course Categories

### Available Categories:
- `digital` - Digital Skills
- `finance` - Finance & Business
- `creative` - Creative Skills
- `personal` - Personal Development
- `technical` - Technical Skills

Use these exact values in the `category` field.

### To Add New Category:

1. In HTML files, add option to select dropdown:
```html
<option value="newcategory">New Category Name</option>
```

2. Update category display in `script.js` line ~350 (in `loadCategoriesPage` function):
```javascript
{ id: 'newcategory', icon: '🎯', name: 'New Category', count: 10 }
```

---

## 6. Managing Course Images

### Image Best Practices:

1. **Size**: Use images around 600x400 pixels (for course grid)
2. **Format**: JPG or PNG
3. **Quality**: 72-96 DPI for web
4. **File Size**: Compress to < 100KB each
5. **Hosting**: Use external URL or upload to your server

### Finding Free Images:
- Unsplash.com
- Pexels.com
- Pixabay.com
- Freepik.com (free plan available)

### Update Image URLs:

Find this line in a course:
```javascript
image: "https://via.placeholder.com/400x250/6366f1/ffffff?text=Course"
```

Replace with:
```javascript
image: "https://example.com/course-image.jpg"
```

---

## 7. Hotmart Product Link Setup

### Get Your Hotmart Link:

1. Go to **Hotmart.com**
2. Create or login to account
3. Go to **Products**
4. Create new product or select existing
5. Copy your **product checkout link**
6. Should look like: `https://hotmart.com/product/abc123xyz`

### Update in Website:

In course object, update:
```javascript
hotmart_link: "https://hotmart.com/product/abc123xyz"
```

### Multiple Hotmart Links:

If same course is in multiple currencies/variations:
```javascript
hotmart_link_en: "https://hotmart.com/product/english-version",
hotmart_link_pt: "https://hotmart.com/product/portuguese-version"
```

Then update script.js links accordingly.

---

## 8. Dynamic vs Static Courses

### Current System (Dynamic):
- Courses managed in `script.js`
- Single source of truth
- Easy to update all languages

### To Add Static Courses:
Add directly in HTML and repeat on each page where needed.

---

## 9. Course Filtering

Filtering already works automatically! Just make sure:

1. **Category** matches one of: `digital`, `finance`, `creative`, `personal`, `technical`
2. **Language** is either `en` or `pt`
3. Category count is updated in `loadCategoriesPage()` function

---

## 10. Adding Course Reviews/Testimonials

Reviews come from the `testimonials` array in `script.js` (around line 280).

To add testimonial:

```javascript
{
  name: "Student Name",
  role: "Their Title",
  text_en: "Their review in English",
  text_pt: "Seu comentário em português",
  rating: 5,
  avatar: "SN" // First letters of name
}
```

---

## 11. Blog Posts

Blog posts are in the `blogPosts` array in `script.js` (around line 260).

To add new blog post:

```javascript
{
  id: 4,
  title_en: "Blog Post Title",
  title_pt: "Título do Post do Blog",
  excerpt_en: "Short excerpt...",
  excerpt_pt: "Trecho curto...",
  author: "Author Name",
  date: "2025-05-10",
  image: "https://example.com/blog-image.jpg",
  category: "finance"
}
```

---

## 12. Managing Instructor Information

### Current System:
Instructor details are in `course.html` with hardcoded HTML.

### To Update:
1. Open `course.html`
2. Find "Meet Your Instructor" section
3. Update HTML with new instructor name, bio, image

### To Automate:
Add `instructor_bio` and `instructor_image` to course object:

```javascript
instructor: "John Smith",
instructor_bio: "With 10+ years of experience...",
instructor_image: "https://...",
instructor_title: "Lead Instructor"
```

Then update `script.js` to display dynamically.

---

## 13. Common Mistakes to Avoid

❌ **Missing commas**
```javascript
{
  title_en: "Course",
  title_pt: "Curso"  // ← Missing comma here!
  description_en: "..."
}
```

✅ **Correct format**
```javascript
{
  title_en: "Course",
  title_pt: "Curso", // ← Comma added
  description_en: "..."
}
```

❌ **Wrong category**
```javascript
category: "Marketing" // ❌ Not recognized
```

✅ **Correct category**
```javascript
category: "digital" // ✅ Correct
```

❌ **Broken URL**
```javascript
image: "http://example.com/image.jpg" // May not load
```

✅ **Secure URL**
```javascript
image: "https://example.com/image.jpg" // ✅ Secure
```

---

## 14. Useful Commands

### Test Locally
1. Open `index.html` in browser
2. Press F12 to open DevTools
3. Check Console tab for errors

### Debug Course Data
In browser console (F12 > Console), type:
```javascript
console.log(courses); // See all courses
console.log(courses[0]); // See first course
```

---

## 15. Performance Tips

- Keep course descriptions under 200 characters
- Use optimized images (< 100KB)
- Limit modules to 10-15 per course
- Keep course data under 5MB total
- Test page load time regularly

---

## 16. Backup Before Changes

Before editing `script.js`:
1. Right-click file
2. Copy
3. Save as `script.js.backup`

This way you can restore if needed.

---

## 17. Exporting Course Data

To backup all courses:
1. Open `script.js`
2. Copy the entire `const courses = [...]` array
3. Save to separate file
4. Can be re-imported later

---

## 18. Bulk Updates

To change multiple courses:
1. Open `script.js` in VS Code
2. Use Find and Replace (Ctrl+H)
3. Find: `rating: 4.8`
4. Replace with: `rating: 4.9`
5. Click "Replace All"

---

## 19. Testing New Courses

After adding course:
1. Refresh page
2. Check home page "Featured" section
3. Check "Courses" page
4. Filter by category - should appear
5. Click course - should load details
6. Check "Buy Now" - Hotmart link should open

---

## 20. Common Questions

**Q: Can I add unlimited courses?**
A: Yes, but performance may slow with 500+

**Q: Can I sell courses in different currencies?**
A: Yes, use different Hotmart links for each

**Q: Can I add custom fields?**
A: Yes, just add them to course object and use in script.js

**Q: Can I schedule course release dates?**
A: Not in current system, but can be added with more code

**Q: Can I track student progress?**
A: Not currently, requires backend system

---

## 📞 Need Help?

If you encounter errors:
1. Check browser console (F12 > Console)
2. Read error message carefully
3. Check for missing commas
4. Verify all URLs are correct
5. Test with simpler data first

---

**Good luck managing your courses! 🚀**

For detailed customization, see README.md
For quick start, see QUICK_START.md
