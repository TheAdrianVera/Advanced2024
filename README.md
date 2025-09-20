# Advanced Healthcare Services, LLC - Website

A modern, responsive website for Advanced Healthcare Services, LLC, a home healthcare company serving Springfield, Illinois and surrounding areas.

## 🌐 Live Website

**Production URL:** [https://ahsllc.org](https://ahsllc.org)

## 📋 About

Advanced Healthcare Services, LLC provides skilled healthcare services to patients in private homes, assisted living facilities, and long-term care facilities throughout central Illinois. This website serves as their digital presence, featuring information about services, coverage areas, team members, and career opportunities.

## ✨ Features

- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, professional design with Tailwind CSS
- **SEO Optimized** - Meta tags, structured data, and Google Analytics integration
- **Contact Forms** - Referral forms and feedback collection
- **Career Portal** - Job listings and application system
- **Service Information** - Detailed service offerings and coverage areas
- **Team Showcase** - Staff profiles and testimonials

## 🛠️ Tech Stack

- **Frontend Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM
- **Analytics:** Google Analytics 4 + Facebook Pixel
- **Email Service:** EmailJS
- **Deployment:** Vercel

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── logos/          # Logo components
│   ├── pagecomponents/ # Page-specific components
│   └── pagesections/   # Section components
├── pages/              # Main page components
├── data/               # Static data (benefits, jobs)
├── assets/             # Images, fonts, and static assets
└── scripts/            # Utility scripts (job scraping)
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd Advanced2024
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run scrape` - Scrape job listings

## 📄 Pages

- **Home** - Main landing page with services overview
- **About** - Company information, team, and testimonials
- **Services** - Detailed service offerings
- **Careers** - Job listings and application portal
- **Community** - Community involvement and events
- **Contact** - Contact information and forms

## 🎨 Design System

The website uses a consistent design system with:
- Custom Arial font family variations
- Professional color scheme
- Responsive grid layouts
- Consistent spacing and typography
- Accessible UI components

## 📊 Analytics & Tracking

- Google Analytics 4 for visitor tracking
- Facebook Pixel for social media analytics
- Custom event tracking for form submissions
- Page view tracking across all routes

## 🔧 Configuration

### Environment Variables

Create a `.env` file for any sensitive configuration:

```env
# EmailJS configuration
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

# Analytics
VITE_GA_MEASUREMENT_ID=your_ga_id
VITE_FACEBOOK_PIXEL_ID=your_pixel_id
```

## 🚀 Deployment

The website is deployed on Vercel with automatic deployments from the main branch. The build process:

1. TypeScript compilation
2. Vite build optimization
3. Static asset processing
4. CDN distribution

## 📞 Contact

For questions about this website or Advanced Healthcare Services, LLC:

- **Website:** [https://ahsllc.org](https://ahsllc.org)
- **Email:** Contact through the website contact form
- **Location:** Springfield, Illinois

---

*Built with ❤️ for Advanced Healthcare Services, LLC*
