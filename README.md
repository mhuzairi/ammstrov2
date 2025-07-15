# AMMSTRO Aviation Website

A modern, responsive website for AMMSTRO - an aviation maintenance software company. Built with React, featuring beautiful geometric background effects, orange gradient branding, and smooth animations.

![AMMSTRO Website Preview](./preview.png)

## 🚀 Live Demo

Visit the live website: [AMMSTRO Aviation](https://ammstro.com)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Development](#development)
- [Building for Production](#building-for-production)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

### Design & User Experience
- **Modern Dark Theme**: Professional dark background with orange gradient accents
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Geometric Background Effects**: Animated geometric patterns throughout different sections
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Interactive Elements**: Hover effects, animated buttons, and dynamic content

### Branding & Visual Identity
- **AMMSTRO Logo Integration**: Custom logo prominently displayed
- **Orange Gradient Theme**: Consistent with business card branding
- **Professional Typography**: Clean, readable fonts with proper hierarchy
- **Aviation-Focused Content**: Tailored messaging for aviation industry

### Technical Features
- **React 18**: Latest React with hooks and modern patterns
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Framer Motion**: Advanced animations and page transitions
- **Lucide Icons**: Beautiful, consistent icon set
- **Vite**: Fast build tool and development server
- **TypeScript Ready**: Easy migration to TypeScript if needed

### Sections & Content
- **Hero Section**: Compelling headline with call-to-action
- **Product Showcase**: AI-powered maintenance tools demonstration
- **How It Works**: Step-by-step process explanation
- **Features Grid**: Comprehensive feature listing
- **Pricing Plans**: Three-tier pricing structure
- **FAQ Section**: Common questions and answers
- **Contact Information**: Easy ways to get in touch

## 🛠 Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Custom components with shadcn/ui patterns
- **Package Manager**: pnpm (recommended) or npm

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 18 or higher)
- **pnpm** (recommended) or **npm**
- **Git** for version control

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ammstro-website.git
   cd ammstro-website
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173` to see the website

## 📦 Installation

### Detailed Installation Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/ammstro-website.git
   cd ammstro-website
   ```

2. **Install Node.js Dependencies**
   ```bash
   # Using pnpm (recommended for faster installs)
   pnpm install
   
   # Or using npm
   npm install
   
   # Or using yarn
   yarn install
   ```

3. **Verify Installation**
   ```bash
   pnpm dev
   ```
   The development server should start on `http://localhost:5173`

### Environment Setup

Create a `.env.local` file in the root directory if you need environment variables:

```env
# Example environment variables
VITE_API_URL=https://api.ammstro.com
VITE_CONTACT_EMAIL=contact@ammstro.com
```

## 🔧 Development

### Development Commands

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Lint code
pnpm lint

# Format code
pnpm format
```

### Development Workflow

1. **Start the development server**: `pnpm dev`
2. **Make your changes** in the `src/` directory
3. **Test your changes** in the browser (hot reload enabled)
4. **Build for production** when ready: `pnpm build`

### Key Development Files

- `src/App.jsx` - Main application component
- `src/App.css` - Custom styles and geometric effects
- `src/assets/` - Images, logos, and static assets
- `src/components/ui/` - Reusable UI components
- `index.html` - HTML template
- `vite.config.js` - Vite configuration

## 🏗 Building for Production

### Build Process

1. **Create production build**
   ```bash
   pnpm build
   ```

2. **Preview the build locally**
   ```bash
   pnpm preview
   ```

3. **Build output**
   The built files will be in the `dist/` directory, ready for deployment.

### Build Optimization

The build process includes:
- **Code splitting** for optimal loading
- **Asset optimization** (images, CSS, JS)
- **Tree shaking** to remove unused code
- **Minification** for smaller file sizes
- **Source maps** for debugging (optional)

## 🌐 Deployment

### Deployment Options

#### 1. Vercel (Recommended)

Vercel provides the easiest deployment for React applications:

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow the prompts** to configure your deployment

**Alternative: GitHub Integration**
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Automatic deployments on every push

#### 2. Netlify

1. **Build the project**
   ```bash
   pnpm build
   ```

2. **Deploy to Netlify**
   - Drag and drop the `dist/` folder to Netlify
   - Or connect your GitHub repository for automatic deployments

3. **Configure build settings**
   - Build command: `pnpm build`
   - Publish directory: `dist`

#### 3. GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add deployment script** to `package.json`
   ```json
   {
     "scripts": {
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Build and deploy**
   ```bash
   pnpm build
   pnpm deploy
   ```

#### 4. Traditional Web Hosting

1. **Build the project**
   ```bash
   pnpm build
   ```

2. **Upload the `dist/` folder** to your web server
3. **Configure your web server** to serve the `index.html` file for all routes

### Domain Configuration

After deployment, you may want to:
1. **Configure a custom domain**
2. **Set up SSL certificates** (usually automatic with modern hosting)
3. **Configure redirects** if needed

## 📁 Project Structure

```
ammstro-website/
├── public/                 # Static assets
│   ├── favicon.ico
│   └── ...
├── src/                    # Source code
│   ├── assets/            # Images, logos, fonts
│   │   └── ammstro-logo.png
│   ├── components/        # Reusable components
│   │   └── ui/           # UI components
│   ├── App.jsx           # Main application
│   ├── App.css           # Custom styles
│   └── main.jsx          # Application entry point
├── dist/                  # Production build (generated)
├── node_modules/          # Dependencies
├── .gitignore            # Git ignore rules
├── index.html            # HTML template
├── package.json          # Project configuration
├── pnpm-lock.yaml        # Dependency lock file
├── README.md             # This file
├── tailwind.config.js    # Tailwind configuration
└── vite.config.js        # Vite configuration
```

### Key Directories

- **`src/`**: All source code and components
- **`src/assets/`**: Static assets like images and logos
- **`src/components/ui/`**: Reusable UI components
- **`public/`**: Static files served directly
- **`dist/`**: Production build output

## 🎨 Customization

### Branding Customization

#### Logo Replacement
Replace `src/assets/ammstro-logo.png` with your own logo:
```jsx
// In App.jsx
<img src={yourLogo} alt="Your Company Logo" className="w-10 h-10" />
```

#### Color Scheme
Modify the color scheme in `src/App.css`:
```css
/* Change orange gradients to your brand colors */
.text-gradient-orange {
  background: linear-gradient(135deg, #your-color-1, #your-color-2);
}
```

#### Content Updates
Update company information in `src/App.jsx`:
- Company name and tagline
- Product descriptions
- Pricing plans
- Contact information

### Geometric Effects Customization

The geometric background effects can be customized in `src/App.css`:

```css
/* Modify geometric patterns */
.geometric-bg::before {
  background-size: 60px 60px; /* Change pattern size */
  animation-duration: 20s;    /* Change animation speed */
}
```

### Adding New Sections

1. **Create a new section** in `src/App.jsx`
2. **Add navigation link** to the nav items array
3. **Style the section** with appropriate classes
4. **Add geometric background** if desired

## 🤝 Contributing

We welcome contributions to improve the AMMSTRO website!

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
4. **Test thoroughly**
5. **Commit your changes**
   ```bash
   git commit -m "Add your feature description"
   ```
6. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```
7. **Create a Pull Request**

### Development Guidelines

- Follow the existing code style
- Test your changes on multiple devices
- Ensure accessibility standards are met
- Update documentation if needed
- Add comments for complex logic

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:

- **Email**: contact@ammstro.com
- **Website**: https://ammstro.com
- **GitHub Issues**: [Create an issue](https://github.com/yourusername/ammstro-website/issues)

## 🙏 Acknowledgments

- **Design Inspiration**: Modern aviation and technology websites
- **Icons**: [Lucide Icons](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Build Tool**: [Vite](https://vitejs.dev/)

---

**Built with ❤️ for the aviation industry**

*Last updated: July 2025*

