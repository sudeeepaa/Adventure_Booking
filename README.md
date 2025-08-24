# Adventure Tours - Next.js Website

A modern, responsive adventure tourism website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with beautiful animations
- **Multiple Pages**: Home, About, Blogs, and Booking pages
- **Email Integration**: Automated booking confirmations using Nodemailer
- **Modern UI**: Consistent styling with hover effects and smooth transitions
- **Image Optimization**: Consistent image sizes and responsive layouts
- **Form Handling**: Interactive booking form with validation

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Email**: Nodemailer
- **Images**: Next.js Image optimization
- **Development**: Turbopack for fast development

## 📁 Project Structure

```
2547252_labex10/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── send-email/          # Email API endpoint
│   │   ├── components/
│   │   │   ├── navbar.tsx           # Navigation component
│   │   │   └── UnsplashImage.tsx    # Image component with consistent sizing
│   │   ├── about/                   # About page
│   │   ├── blogs/                   # Blog listing page
│   │   ├── book/                    # Booking page with form
│   │   ├── styles/
│   │   │   └── globals.css          # Global styles and custom CSS
│   │   ├── layout.tsx               # Root layout
│   │   └── page.tsx                 # Home page
│   └── ...
├── public/                          # Static assets and images
├── package.json                     # Dependencies and scripts
└── README.md                        # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd 2547252_labex10
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Create .env.local file
   cp .env.local.example .env.local
   # Edit .env.local with your email credentials
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📧 Email Setup

The website includes automated email functionality for booking confirmations. See [EMAIL_SETUP.md](./EMAIL_SETUP.md) for detailed setup instructions.

### Quick Setup:
1. Install nodemailer: `npm install nodemailer @types/nodemailer`
2. Create `.env.local` with your Gmail credentials
3. Get Gmail app password from Google Account settings
4. Test the booking form

## 🎨 Design Features

- **Color Scheme**: Dark theme with #181d1f background and #e6e94f accents
- **Typography**: Modern, readable fonts with proper hierarchy
- **Animations**: Smooth hover effects, transitions, and micro-interactions
- **Images**: Consistent 300px height for all adventure images
- **Responsive**: Mobile-first design that works on all devices

## 📱 Pages Overview

### Home Page (`/`)
- Hero section with call-to-action
- Adventure showcases with consistent image sizing
- Company benefits and features
- Vacation inspiration section

### About Page (`/about`)
- Company mission and values
- Team information
- Company statistics
- Call-to-action section

### Blogs Page (`/blogs`)
- Featured blog post
- Blog categories and filtering
- Latest blog posts grid
- Newsletter signup

### Book Page (`/book`)
- Adventure type selection
- Interactive booking form
- Email confirmation system
- Form validation and feedback

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server

### Key Components

- **Navbar**: Responsive navigation with smooth transitions
- **UnsplashImage**: Consistent image component with hover effects
- **Booking Form**: Interactive form with email integration
- **Adventure Cards**: Selectable adventure types for booking

## 🌟 Key Features

1. **Consistent Image Sizing**: All images maintain 300px height for uniformity
2. **Email Integration**: Automated booking confirmations
3. **Responsive Design**: Works perfectly on all device sizes
4. **Modern Animations**: Smooth transitions and hover effects
5. **Form Validation**: Client-side validation with user feedback
6. **Accessibility**: Proper labels, focus states, and semantic HTML

## 🚀 Deployment

The project is ready for deployment on platforms like:
- Vercel (recommended for Next.js)
- Netlify
- Railway
- Any Node.js hosting platform

### Production Build
```bash
npm run build
npm run start
```

## 📝 Customization

### Colors
Update the color scheme in `tailwind.config.js` and component files:
- Primary: `#e6e94f` (Yellow)
- Background: `#181d1f` (Dark)
- Text: `#e6e94f` and `#ffffff`

### Images
Replace images in the `public/` folder:
- Maintain aspect ratios
- Use consistent dimensions
- Optimize for web

### Content
Update text content in component files:
- Company information
- Adventure descriptions
- Contact details

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

For support or questions:
- Check the [EMAIL_SETUP.md](./EMAIL_SETUP.md) for email configuration
- Review the component structure in the `src/app/components/` folder
- Check the console for any error messages

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
