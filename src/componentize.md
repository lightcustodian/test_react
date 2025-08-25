Claude Code Task: Restructure React Components for Payload CMS Integration
1. Convert the current single-file React component into a properly structured component library with TypeScript interfaces and Tailwind configuration. 
2. Convert the html file in old to use react. It should be the home page for the Higher Education single file page you already have. Componentize it as well using the same method used for Higher Ed.
3. Convert the html files in branding to use react Componentize them the same as above. These should be separate. Create a new branding.html file that connects to these.

File Structure to Create:
src/
├── components/
│   ├── items/          # Atoms (Button, IconCircle, etc.)
│   ├── components/     # Molecules (Card, StatItem, etc.) 
│   ├── blocks/         # Organisms (HeroSection, ValuePropsSection, etc.)
│   ├── pages/          # Templates (HigherEducationPage, etc.)
│   └── globals/        # Global components (Header, Footer, Navigation)
├── types/
│   ├── components.ts   # Component prop interfaces
│   ├── blocks.ts       # Block data interfaces  
│   └── payload.ts      # Future Payload CMS schemas
├── styles/
│   └── globals.css     # Global styles if needed
├── utils/
│   └── cn.ts          # Tailwind className utility
├── tailwind.config.js  # Brand colors configuration
└── App.tsx            # Main app file
Requirements:

Brand Colors in Tailwind Config:
js// tailwind.config.js should include:
colors: {
  brand: {
    blue: '#125EAD',      // Primary Blue
    green: '#4BB74E',     // Primary Green
    'dark-blue': '#0D3F7A',
    'dark-green': '#3A9B3E',
    'light-blue': '#E6F2FF',
    'light-green': '#E8F5E9',
  }
}

TypeScript Interfaces:

Create interfaces for all component props
Create interfaces for block data (matching Payload CMS block structure)
Include proper typing for icons, variants, sizes, etc.


Component Structure Examples:
items/Button.tsx:

Export both component and TypeScript interface
Use Tailwind classes with brand colors
Support all current variants and props

components/Card.tsx:

Composable with items components
Multiple variants (elevated, feature, value, testimonial)
Interactive hover effects using Tailwind

blocks/HeroSection.tsx:

Accept both raw data and Payload-formatted data
Compose using smaller components
Include proper background image handling


Key Conversions:

Replace all inline brand color styles with Tailwind brand classes
Convert style props to Tailwind equivalents where possible
Keep complex gradients and animations as CSS-in-JS where needed
Maintain all current functionality and styling


Navigation Component:

Hard-code menu structure for now
Structure data in a way that can easily be replaced with Payload CMS data later
Separate navigation data from component logic


Content Management Interfaces:
For each content type, create interfaces that define what should be:

Static: Component structure, layout, interaction patterns
Editable: Text content, images, links, button labels
Configurable: Show/hide toggles, color variants, layout options

Example for HeroSection:
typescriptinterface HeroContent {
  title: string;              // Editable
  subtitle: string;           // Editable  
  backgroundImage: string;    // Editable
  stats: StatData[];          // Configurable array
  primaryCTA: CTAData;        // Editable
  secondaryCTA?: CTAData;     // Optional, Editable
  showStats: boolean;         // Configurable
}

Export Structure:

Each component should have named and default exports
Create index files for easy imports
Export all TypeScript interfaces


Maintain Current Functionality:

All hover effects and animations
Mobile responsiveness
Exact brand color usage
All interactive features (dropdowns, mobile menu, etc.)



Start with the most foundational components (items/Button, items/IconCircle) and work your way up through the component hierarchy. Ensure each component is fully typed and uses the Tailwind brand configuration.
Please begin with creating the project structure and the foundational items components, then proceed through the hierarchy systematically.

But before we start, I want to make sure that you understand what we are doing and our goals: 
1. Please explain to me what you understand about: 
	1. our goals
	2. what we want your help to achieve 
2. Do you have any questions about? 
	1. our goals
	2. what we want your help to achieve 
3. Do you need any further information before we continue?
4. Provide your response in [auto-increment]_[task_name].md