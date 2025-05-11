# MCsak AR Solutions

A modern website for MCsak AR Solutions, showcasing augmented reality development services, portfolio, and contact information.

## Features

- Responsive design for all device sizes
- Animated UI elements using Framer Motion
- Portfolio showcase with project examples
- Contact form for client inquiries
- Service descriptions and company information

## Tech Stack

- Next.js
- React
- Tailwind CSS
- Framer Motion
- Lucide React Icons
- shadcn/ui components

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository
   \`\`\`bash
   git clone https://github.com/yourusername/mcsakar.git
   cd mcsakar
   \`\`\`

2. Install dependencies
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. Run the development server
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

- `/app` - Next.js app directory containing pages and layouts
- `/components` - Reusable React components
- `/public` - Static assets like images
- `/styles` - Global CSS styles
- `/lib` - Utility functions and helpers
- `/hooks` - Custom React hooks

## Deployment

### GitHub Pages

This project is configured for GitHub Pages deployment. When you push to the main branch, the GitHub Actions workflow will automatically build and deploy the site.

To deploy manually:

1. Build the project
   \`\`\`bash
   npm run build
   \`\`\`

2. The static files will be in the `out` directory

### Vercel

This project can be easily deployed on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Fmcsakar)

## Contact

MCsak AR Solutions
- Email: contact@mcsakar.com
- Phone: +91 6381612505
- Address: 587, Mudikondan, Nadu Agraharam, Thiruvarur District, PIN: 609502
\`\`\`

Now, let's update the app/layout.tsx file to handle the basePath correctly:
