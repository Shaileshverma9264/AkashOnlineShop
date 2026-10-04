# आकाश ऑनलाइन — React Project

A proper component-based React app (Vite + React 18) for the Aakash Online shop website —
more advanced and dynamic than a single HTML file: real components, context-based state,
persisted preferences, live status, and an appointment-booking flow.

## Run it

```bash
npm install
npm run dev        # local dev server with hot reload
npm run build       # production build → dist/
npm run preview     # preview the production build
```

Needs Node.js 18+ installed.

## Project structure

```
src/
├── main.jsx                 → app entry point
├── App.jsx                  → assembles all sections
├── index.css                → all styles (CSS variables for theming)
├── hooks.js                 → useScrollSpy, useCountUp, useInView, useIsOpenNow
├── context/
│   └── AppContext.jsx       → language, theme, toast, WhatsApp helper (shared app state)
├── data/
│   └── content.js           → all text, services, FAQs, docs list, downloads, testimonials
└── components/
    ├── Marquee.jsx
    ├── Navbar.jsx            → scroll-spy active links, mobile menu
    ├── Hero.jsx               → live open/closed badge
    ├── Services.jsx
    ├── About.jsx
    ├── Stats.jsx              → animated count-up numbers
    ├── DocumentChecker.jsx
    ├── FAQ.jsx                → live search filter
    ├── DownloadsAndPay.jsx
    ├── Testimonials.jsx       → auto-rotating + manual carousel
    ├── Contact.jsx            → WhatsApp query textarea
    ├── BookingModal.jsx       → appointment booking → generates a token → sends via WhatsApp
    ├── WhatsAppFloat.jsx
    ├── Toast.jsx
    └── Footer.jsx
public/
└── downloads/                → the 4 sample PDF forms served as static files
```

## What's new / more dynamic than the single-file version

- **Real component architecture** — each section is its own file, easy to edit or reorder
- **Shared app context** — language & theme live in one place and persist in `localStorage`
- **Appointment Booking modal** — pick a service, date & time → get a random token number →
  send the full booking as a pre-filled WhatsApp message
- **WhatsApp query box** — whatever the visitor types is sent as the WhatsApp message when they
  tap "Send on WhatsApp"; the floating chat icon still sends a default greeting
- **Live open/closed badge** — checks the real time every minute (Mon–Sat 9–8, Sun 10–2)
- **FAQ search** — filters questions as you type
- **Auto-rotating testimonials carousel** — also has manual prev/next and dot navigation
- **Toast notifications** — small confirmation message after sending a query or booking
- **Scroll-spy navbar** — the nav link for the section currently in view is highlighted

## Common customisations

| What to change | Where |
|---|---|
| WhatsApp number | `WHATSAPP_NUMBER` at the top of `src/data/content.js` |
| All text (Hindi/English) | `STR` object in `src/data/content.js` |
| Services, FAQs, documents, downloads, testimonials | the matching object in `src/data/content.js` |
| Colours / fonts | CSS variables at the top of `src/index.css` |
| Shop open hours | `useIsOpenNow` in `src/hooks.js` |
| Downloadable PDFs | replace files in `public/downloads/`, update paths in `content.js` |
| UPI QR code | swap the placeholder `.qr-img` div in `DownloadsAndPay.jsx` for a real `<img>` |

## Deploying

`npm run build` produces a static `dist/` folder — upload it to Netlify, Vercel, GitHub Pages,
or any static host / cPanel `public_html`. No server or database needed.
