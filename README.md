# Adventure Tours — Next.js (TypeScript + Tailwind)

A modern, responsive adventure tourism website built with Next.js, TypeScript, and Tailwind CSS — focused on clean UI, accessibility, and an easy booking flow with email confirmations.

---

## 🚀 Highlights

* Mobile-first, responsive layout with smooth micro-interactions
* Interactive booking form with client-side validation and automated email confirmations
* Consistent, optimized images and a reusable `UnsplashImage` component
* Simple, maintainable code structure using the App Router (Next.js) and TypeScript

---

## 💻 Tech Stack

* **Framework:** Next.js (App Router) + React + TypeScript
* **Styling:** Tailwind CSS
* **Email:** Nodemailer (development) — use a transactional email provider for production
* **Image handling:** Next.js `<Image />` optimization and a reusable image component
* **Dev tooling:** npm (or yarn). Turbopack is supported for faster dev builds if available in your environment.

---

## 📁 Project Structure (excerpt)

```
2547252_labex10/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── send-email/          # Email API endpoint (serverless function)
│   │   ├── components/
│   │   │   ├── navbar.tsx           # Navigation component
│   │   │   └── UnsplashImage.tsx    # Image component with consistent sizing
│   │   ├── about/                   # About page
│   │   ├── blogs/                   # Blog listing page
│   │   ├── book/                    # Booking page with form
│   │   ├── styles/
│   │   │   └── globals.css          # Global styles and Tailwind imports
│   │   ├── layout.tsx               # Root layout
│   │   └── page.tsx                 # Home page
├── public/                          # Static assets and images
├── package.json                     # Dependencies and scripts
└── README.md                        # This file
```

---

## 🔧 Prerequisites

* Node.js 18 or newer
* npm (or yarn)
* (Optional) A transactional email provider account for production (SendGrid, Mailgun, etc.)

---

## 🛠️ Local Development — Quickstart

1. **Clone the repository**

```bash
git clone https://github.com/sudeeepaa/Adventure_Booking.git
cd 2547252_labex10
```

2. **Install dependencies**

```bash
npm install
# or
# yarn
```

3. **Create environment file**

```bash
cp .env.local.example .env.local
# Edit .env.local with your values (see example below)
```

**Example `.env.local`**

```env
# Example environment variables (do NOT commit secrets)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-email-app-password
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

4. **Run the dev server**

```bash
npm run dev
# or
# yarn dev
```

5. Open your browser at `http://localhost:3000`.

---

## 📧 Email / Booking Confirmation

The repository includes a simple server-side API that sends booking confirmation emails using Nodemailer. This is convenient for development but **not recommended** for high-volume production use.

**Quick setup:**

1. Install nodemailer if not already installed:

```bash
npm install nodemailer @types/nodemailer
```

2. Add the SMTP credentials to `.env.local` (see example above). For Gmail, enable 2‑factor auth and create an App Password — *do not use your main account password*.

3. Open `src/app/api/send-email/` to review and adapt the email template and logic.

**Production recommendation:**
Use a transactional email provider (SendGrid, Mailgun, Postmark, etc.) or a dedicated SMTP relay. These services handle deliverability, throttling, and reputation.

---

## 🎨 Design & UX Notes

* **Color palette:** Dark background with bright accent (example: dark `#181d1f` with yellow accents)
* **Typography:** Clear hierarchy and readable font sizes
* **Images:** All adventure cards use a consistent visual height for a tidy grid — adjust the `UnsplashImage` component as needed
* **Accessibility:** Use semantic HTML, focus states on interactive elements, and proper form labels

---

## 📄 Pages Overview

* **Home** `/` — Hero, featured adventures, benefits, and CTAs
* **About** `/about` — Mission, team, and company stats
* **Blogs** `/blogs` — Blog listing, categories, and featured posts
* **Book** `/book` — Adventure selection, interactive booking form, and confirmation flow

---

## ⚙️ Scripts

* `npm run dev` — Start dev server
* `npm run build` — Build for production
* `npm run start` — Start production server (after `build`)

---

## 🚀 Deployment

Recommended platforms:

* **Vercel** (first-class support for Next.js)
* Netlify, Railway, or any Node.js host

**Deployment notes:**

* Add the same environment variables to your hosting provider's settings (do not push `.env.local` to git).
* For production email, prefer an API-based transactional provider or a production-grade SMTP relay.

---

## 🔧 Customization

* **Colors & fonts:** Update `tailwind.config.js` and global CSS
* **Images:** Replace the `public/` assets; keep aspect ratios consistent
* **Content:** Update page components in `src/app/*`

---

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/your-change`)
3. Commit your changes and push
4. Open a Pull Request and describe the changes

---

## 📄 License

This project is open source and available under the MIT License. See `LICENSE` for details.

---

## 🆘 Support

If you run into issues:

* Check the browser console and terminal for errors
* Verify environment variables are set correctly
* Inspect the API endpoint in `src/app/api/send-email/`

If you'd like, I can also:

* Shorten this README to a one‑page quickstart
* Add badges (build, license, npm) and a screenshot section
* Add sample Vercel/GitHub Actions deployment config

---

*Built with care — happy hacking!*
