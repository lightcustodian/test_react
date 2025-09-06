# Consulting Homepage

A modern, responsive consulting website built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Interactive Navigation**: Smart dropdown menus with cross-page navigation
- **Smooth Scrolling**: JavaScript-based smooth scrolling with visual feedback
- **Industry Solutions**: Comprehensive showcase of infrastructure solutions
- **Client Testimonials**: Social proof and credibility building
- **Cost Calculator**: Interactive ROI calculator for potential clients

## 📁 Project Structure

```
ConsultingHomepage/
├── client/                    # Main application directory
│   ├── src/
│   │   ├── components/        # Reusable UI components
│   │   │   ├── ui/           # Shadcn UI components
│   │   │   ├── Navigation.tsx # Main navigation component
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── BenefitsSection.tsx
│   │   │   ├── CalculatorSection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   ├── ResultsSection.tsx
│   │   │   └── Footer.tsx
│   │   ├── pages/            # Page components
│   │   │   ├── home.tsx      # Homepage
│   │   │   ├── solutions.tsx # Solutions page
│   │   │   ├── industries.tsx # Industries page
│   │   │   └── not-found.tsx # 404 page
│   │   ├── hooks/            # Custom React hooks
│   │   ├── lib/              # Utility functions
│   │   └── index.css         # Global styles
│   └── index.html            # HTML template
├── package.json              # Dependencies and scripts
├── tailwind.config.ts        # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite build configuration
└── vercel.json              # Vercel deployment configuration
```

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn UI** - High-quality React components
- **Lucide React** - Beautiful icons
- **Framer Motion** - Smooth animations

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone or download the project**
   ```bash
   # If using git
   git clone <repository-url>
   cd ConsultingHomepage
   
   # Or extract the zip file and navigate to the directory
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the website.

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 📱 Pages Overview

### Homepage (`/`)
- Hero section with company statistics
- Services overview
- Benefits showcase
- Interactive ROI calculator
- Client testimonials
- Results and achievements

### Solutions Page (`/solutions`)
- **Private Cloud Solutions**: Datacenter services, backup, disaster recovery
- **On-Premise Solutions**: Infrastructure modernization, servers, networking
- **Microsoft Azure**: Cloud platform services and solutions
- **AI/Automation Platform**: AI infrastructure and testing environments

### Industries Page (`/industries`)
- **Education**: K-12 and higher education solutions
- **Healthcare**: Medical infrastructure and compliance
- **Manufacturing**: Industrial automation and efficiency
- **Government**: Public sector technology solutions

## 🎨 Design Features

- **Responsive Navigation**: Collapsible mobile menu with smooth transitions
- **Smart Dropdowns**: Cross-page navigation with smooth scrolling
- **Visual Feedback**: Blue glow effects during navigation
- **Modern Gradients**: Brand-consistent color schemes
- **Interactive Elements**: Hover effects and smooth animations
- **Accessibility**: Screen reader friendly with proper ARIA labels

## 🔧 Customization

### Colors and Branding
Edit the CSS variables in `client/src/index.css`:
```css
:root {
  --primary: #your-brand-color;
  --brand-green: #your-accent-color;
}
```

### Content Updates
- **Navigation**: Edit `client/src/components/Navigation.tsx`
- **Page Content**: Update respective files in `client/src/pages/`
- **Components**: Modify files in `client/src/components/`

### Styling
- **Global Styles**: `client/src/index.css`
- **Tailwind Config**: `tailwind.config.ts`
- **Component Styles**: Inline Tailwind classes in components

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with zero configuration

### Other Platforms
The built files in the `dist` directory can be deployed to any static hosting service:
- Netlify
- AWS S3 + CloudFront
- GitHub Pages
- Firebase Hosting

## 📞 Support

For technical support or customization requests, please contact the development team.

## 📄 License

This project is proprietary software. All rights reserved.

---