# Dera Baba Bhuman Shah Ji – Website (React + Vite)

## Run
```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build -> dist/
npm run preview
```

## Folder structure
```
public/images/            all site images (logo, photos, aarti images)
src/
  main.jsx                entry, router + global styles
  App.jsx                 all routes (same URLs as the old site)
  data/                   ALL CONTENT lives here — edit text without touching UI
    site.js               name, phone, email, address, social links, next event, nav menu
    about.js              About Dera, history, 12 successors, social services
    trust.js              Charitable Trust intro + objectives
    teachings.js          Teachings of Baba Bhuman Shah Ji
    founders.js           Sri Chand Ji, Baba Bhuman Shah Ji, Baba Brahm Dass Ji biographies
    blog.js               4 blog posts (Aartis, Prayer, Festivals)
  components/
    layout/               Header, Footer, Layout
    common/               reusable UI: PageHero, Breadcrumb, InfoPanel, FounderCards,
                          Countdown, ContactForm, MapEmbed, Faq, ShareButtons, PostCard, Icon...
  pages/                  Home, AboutDera, AboutTrust, Teachings, FounderPage,
                          Media, Blog, BlogPost, Contact, NotFound
  hooks/useTitle.js       sets the browser tab title per page
  styles/                 variables, base, layout, components, pages (plain CSS)
```

## Notes
- Contact form has no backend: it opens the visitor's email app addressed to bhumanshah@gmail.com.
  Connect Formspree/EmailJS/your API in `src/components/common/ContactForm.jsx` if needed.
- Countdown date: change `nextEvent` in `src/data/site.js`.
- `vercel.json` / `public/_redirects` make deep links work on Vercel / Netlify.
