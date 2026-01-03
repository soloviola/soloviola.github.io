# Personal Website

A minimal, sleek personal website inspired by LinkedIn's profile layout, designed for GitHub Pages hosting.

## Features

- 🎨 Clean, minimal design
- 📱 Fully responsive layout
- ⚡ Fast and lightweight
- 🎯 LinkedIn-inspired structure
- ✨ Smooth animations and transitions

## Sections

- **Header**: Profile picture, name, title, and location
- **About**: Brief professional introduction
- **Experience**: Work history with detailed descriptions
- **Education**: Academic background
- **Skills**: Categorized skill tags
- **Projects**: Portfolio projects with links
- **Contact**: Social media and contact links

## Setup for GitHub Pages

1. **Fork or clone this repository**

2. **Customize the content**:
   - Edit `index.html` to update your personal information
   - Replace the placeholder profile image URL with your own image
   - Update all sections with your actual information
   - Modify contact links and social media URLs

3. **Deploy to GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select the branch (usually `main` or `master`)
   - Select the folder (usually `/root`)
   - Click "Save"
   - Your site will be available at `https://yourusername.github.io/repository-name`

## Customization

### Profile Image
Replace the placeholder image URL in `index.html`:
```html
<img src="your-image-url.jpg" alt="Profile Picture" class="profile-image">
```

### Colors
Modify the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #0073b1; /* Change to your preferred color */
    /* ... other variables */
}
```

### Adding Sections
Simply add new `.card` sections in `index.html` following the existing pattern.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

