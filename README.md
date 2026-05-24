# Navora AI - Creative Agency Website

A modern, high-performance AI agency website built with Next.js 16, TypeScript, Tailwind CSS 4, and advanced animations using Framer Motion and GSAP.

## 🚀 Features

- **Modern UI/UX**: Sleek dark theme with purple accents and glassmorphism effects
- **Advanced Animations**: 
  - Framer Motion for smooth scroll animations
  - GSAP ScrollTrigger for cinematic footer reveal
  - Vertical cut text reveal effects
  - Magnetic button interactions
  - Sparkle particle effects
- **Responsive Design**: Fully responsive across all devices
- **Performance Optimized**: 
  - Smooth scrolling behavior
  - Content visibility optimization
  - Skeleton loading states
  - Font smoothing and antialiasing
- **Interactive Components**:
  - Dynamic pricing section with monthly/yearly toggle
  - Cinematic footer with marquee and magnetic buttons
  - Timeline scroll animations
  - Interactive navigation with mobile menu
- **Shadcn UI Components**: Pre-built UI components with consistent styling
- **TypeScript**: Full type safety throughout the application

## 🛠️ Tech Stack

### Core Framework
- **Next.js 16.2.6** - React framework with App Router
- **React 19.2.4** - UI library
- **TypeScript 5** - Type safety

### Styling
- **Tailwind CSS 4** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **CSS Variables** - Theme customization

### Animations
- **Framer Motion** - Production-ready motion library for React
- **GSAP 3.15.0** - Professional-grade animation library
- **GSAP ScrollTrigger** - Scroll-based animations

### UI Components
- **Shadcn UI** - Reusable component library
- **Lucide React** - Icon library
- **clsx & tailwind-merge** - Utility class management

### 3D Graphics
- **Spline** - 3D design tool (@splinetool/react-spline)

## 📁 Project Structure

```
ai-agency-website/
├── public/                 # Static assets
│   └── navora-logo.webp  # Logo image
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── globals.css  # Global styles
│   │   ├── layout.tsx   # Root layout
│   │   └── page.tsx     # Home page
│   ├── components/      # React components
│   │   ├── layout/      # Layout components
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/    # Page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── WhyChoose.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Process.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Work.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── FAQ.tsx
│   │   │   └── CTA.tsx
│   │   └── ui/          # UI components
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── ConnectModal.tsx
│   │       ├── SectionHeader.tsx
│   │       ├── sparkles.tsx
│   │       ├── timeline-animation.tsx
│   │       ├── vertical-cut-reveal.tsx
│   │       ├── pricing-section-4.tsx
│   │       └── motion-footer.tsx
│   ├── context/         # React context
│   │   └── ConnectModalContext.tsx
│   ├── hooks/           # Custom hooks
│   ├── lib/             # Utility functions
│   │   ├── site.ts      # Site configuration
│   │   └── utils.ts     # Utility functions
│   └── styles/          # Additional styles
├── package.json         # Dependencies
├── tsconfig.json        # TypeScript config
├── tailwind.config.js   # Tailwind config
└── next.config.ts       # Next.js config
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ai-agency-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Site Configuration

Edit `src/lib/site.ts` to customize:
- Site name and tagline
- Navigation links
- Service descriptions
- Pricing plans
- FAQ content
- Testimonials
- Contact information

### Theme Colors

Modify CSS variables in `src/app/globals.css`:
```css
:root {
  --background: #000000;
  --foreground: #f5f5f5;
  --primary: #000000;
  --secondary: #8961b7;
  /* ... more colors */
}
```

### Logo

Replace the logo in `public/navora-logo.webp` with your own logo. Update the path in `src/components/layout/Header.tsx` if using a different filename.

## 📄 Page Sections

The home page includes the following sections in order:

1. **Header** - Navigation with logo and mobile menu
2. **Hero** - Main hero section with 3D graphics
3. **Why Choose** - Key statistics and benefits
4. **Services** - Service offerings with details
5. **Process** - Working process steps
6. **Experience** - Experience showcase
7. **Work** - Portfolio/work examples
8. **Testimonials** - Client testimonials
9. **Pricing** - Pricing plans with toggle (NEW)
10. **FAQ** - Frequently asked questions
11. **CTA** - Call-to-action section
12. **Cinematic Footer** - Animated footer with marquee (NEW)

## 🎯 Key Components

### Pricing Section (`pricing-section-4.tsx`)
- Three pricing tiers (Starter, Business, Enterprise)
- Monthly/yearly toggle with smooth animation
- Animated cards with hover effects
- Timeline scroll animations
- Sparkle particle effects

### Cinematic Footer (`motion-footer.tsx`)
- GSAP ScrollTrigger animations
- Magnetic button interactions
- Scrolling marquee text
- Giant background text with parallax
- Aurora glow effects
- Responsive design

### Animation Components
- **Sparkles** - Particle effects
- **Timeline Animation** - Scroll-triggered animations
- **Vertical Cut Reveal** - Text reveal animations

## 🔧 Configuration Files

### Next.js Config (`next.config.ts`)
- Next.js configuration
- Image optimization settings
- Webpack configuration

### TypeScript Config (`tsconfig.json`)
- TypeScript compiler options
- Path aliases
- Strict mode enabled

### Tailwind Config (`tailwind.config.js`)
- Tailwind CSS configuration
- Custom theme extensions
- Plugin configuration

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Commit and push
5. Open a pull request

## 📄 License

This project is proprietary and confidential.

## 👥 Author

**Pawan Kumar**

## 🙏 Acknowledgments

- Shadcn UI for component library
- Framer Motion for animations
- GSAP for advanced animations
- Tailwind CSS for styling
- Next.js team for the framework

## 📞 Support

For support, email hello@navora.ai

---

Built with ❤️ by Navora AI
