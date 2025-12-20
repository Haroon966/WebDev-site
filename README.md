# Web Developer Portfolio

A professional, SEO-optimized portfolio website built with Next.js, designed to showcase web development skills, services, and the development process.

## Features

- ✅ **SEO Optimized**: Built with Next.js for excellent SEO performance
- ✅ **Static Export**: Can be deployed to any static hosting service (Netlify, Vercel, GitHub Pages, etc.)
- ✅ **Responsive Design**: Fully responsive and mobile-friendly
- ✅ **Modern UI/UX**: Beautiful, modern design with smooth animations
- ✅ **Fast Performance**: Optimized for speed and performance
- ✅ **Semantic HTML**: Proper HTML structure for better SEO
- ✅ **Structured Data**: Schema.org markup for rich snippets

## Development Process Showcase

The website includes a detailed section explaining the complete web development process:

1. **Data Gathering & Research**
2. **Strategic Planning**
3. **Designing**
4. **Development**
5. **SEO Implementation**
6. **Testing & Quality Assurance**
7. **Hosting & Deployment**
8. **Launch & Maintenance**

## Tech Stack

- **Framework**: Next.js 14 (with static export)
- **Language**: TypeScript
- **Styling**: CSS3 (Custom CSS with CSS Variables)
- **Deployment**: Static hosting compatible

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

To build a static export of the website:

```bash
npm run build
```

The static files will be in the `out` directory, ready to be deployed to any static hosting service.

## Deployment

This website can be deployed to any static hosting service:

### Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `out`

### Vercel
1. Import your repository to Vercel
2. Vercel will automatically detect Next.js and configure it

### GitHub Pages
1. Build the project: `npm run build`
2. Upload the `out` folder contents to your GitHub Pages repository

### Other Static Hosting
Simply upload the contents of the `out` folder after building.

## SEO Configuration

Before deploying, update the following for better SEO:

1. **Update URLs** in `pages/index.tsx`:
   - Replace `https://yourwebsite.com` with your actual domain
   - Update social media links

2. **Update contact information** in `components/Contact.tsx`:
   - Add your email
   - Add your phone number
   - Update location if needed

3. **Update social links** in `components/Footer.tsx`:
   - Add your GitHub, LinkedIn, Twitter profiles

4. **Update sitemap.xml** in `public/sitemap.xml`:
   - Replace `https://yourwebsite.com` with your actual domain

5. **Update robots.txt** in `public/robots.txt`:
   - Replace `https://yourwebsite.com` with your actual domain

## Customization

### Portfolio Projects
Edit the `portfolioItems` array in `components/Portfolio.tsx` to add your own projects.

### Services
Modify the `services` array in `components/Services.tsx` to customize your services.

### Skills
Update the `skills` array in `components/About.tsx` to reflect your skills.

### Colors
Modify CSS variables in `styles/globals.css` to change the color scheme:
```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  /* ... */
}
```

## License

This project is open source and available under the MIT License.

