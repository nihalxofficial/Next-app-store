# 📱 Next.js App Store

> A modern, responsive app store web application built with Next.js 15 and the App Router. Users can browse apps by category, search for specific apps, view detailed app pages, and manage their personal installed apps list — with smooth loading states and skeleton screens throughout.

🌐 **Live Site:** [next-app-store-tau.vercel.app](https://next-app-store-tau.vercel.app/)

---

## 📌 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Pages & Routes](#pages--routes)
- [Components Breakdown](#components-breakdown)
- [How Core Features Work](#how-core-features-work)
  - [App Listing & Data Fetching](#app-listing--data-fetching)
  - [Skeleton Loading UI](#skeleton-loading-ui)
  - [Category Tabs](#category-tabs)
  - [Search Functionality](#search-functionality)
  - [Install & Uninstall](#install--uninstall)
  - [Toast Notifications](#toast-notifications)
  - [Next.js Image Optimization](#nextjs-image-optimization)
- [Styling System](#styling-system)
- [Deployment](#deployment)

---

## Overview

Next.js App Store is a full-featured application where users can:

- Browse a curated list of apps organized by category
- Search for apps by name in real time
- Switch between category tabs to filter the app listing
- View individual app detail pages via dynamic routing
- **Install** apps and track them in a personal installed list
- **Uninstall** apps to remove them from the installed list
- View all installed apps in a dedicated **Installed Apps** section
- Experience smooth **skeleton loading screens** while data is being fetched

Built with the **Next.js App Router**, this project takes full advantage of Next.js features like server/client component separation, dynamic routes, optimized image handling, and file-based routing.

---

## Features

- ✅ Responsive design for mobile, tablet, and desktop
- ✅ Skeleton loading screens while data fetches
- ✅ App cards with optimized icon, name, rating, and download count
- ✅ Dynamic route pages for each individual app (`/apps/[id]`)
- ✅ Install apps with duplicate-prevention logic
- ✅ Uninstall apps directly from the installed list
- ✅ Toast alerts for every user interaction (success, warning)
- ✅ Active tab highlighting in the navbar with `usePathname`
- ✅ Remote image optimization via Next.js `<Image>` component
- ✅ Custom 404 Not Found page

---

## Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 15 (App Router)** | File-based routing, server/client components, image optimization |
| **React 19** | Component-based UI, `useState`, `useEffect`, `useContext` |
| **Tailwind CSS** | Utility-first styling and responsive layout |
| **React Toastify** | Non-intrusive popup notifications for user feedback |
| **React Icons** | Scalable SVG icon library |
| **Vercel** | Deployment and hosting |

---

## Project Structure

```
app-store/
├── public/                        # Static assets
├── app/
│   ├── layout.jsx                 # Root layout (Navbar, Footer, ToastContainer, Context Provider)
│   ├── page.jsx                   # Home page (Banner, Stats, TrendingApps)
│   ├── apps/
│   │   ├── page.jsx               # All apps listing page
│   │   └── [id]/
│   │       └── page.jsx           # Individual app detail page (dynamic route)
│   ├── installed/
│   │   └── page.jsx               # Installed apps page
│   └── not-found.jsx              # Custom 404 page
├── components/
│   ├── Navbar.jsx                 # Top navigation bar
│   ├── MyNavLink.jsx              # Active-aware nav link using usePathname
│   ├── Footer.jsx                 # Page footer
│   ├── Banner.jsx                 # Hero section on home page
│   ├── Stats.jsx                  # Stats/highlights section
│   ├── TrendingApps.jsx           # Featured apps grid on home page
│   ├── AppCard.jsx                # Individual app card (used in grids)
│   ├── InstallCard.jsx            # App card variant for installed apps list
│   └── Skeleton.jsx               # Loading placeholder card
├── context/
│   └── InstalledAppsContext.jsx   # Global context for installed apps state
├── hooks/
│   └── useApps.js                 # Custom hook: fetches apps, manages loading state
└── package.json
```

---

## Pages & Routes

Next.js App Router handles all routing via the file system. No router config needed.

| Path | Page | Description |
|---|---|---|
| `/` | `app/page.jsx` | Home — Banner, Stats, and Trending Apps grid |
| `/apps` | `app/apps/page.jsx` | Full app listing with search and category filter |
| `/apps/[id]` | `app/apps/[id]/page.jsx` | Individual app detail page (dynamic route) |
| `/installed` | `app/installed/page.jsx` | User's installed apps list |
| `*` | `app/not-found.jsx` | Custom 404 page |

### How Routing Works

```jsx
// app/layout.jsx (simplified)
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <InstalledAppsProvider>
          <Navbar />
          {children}
          <Footer />
          <ToastContainer />
        </InstalledAppsProvider>
      </body>
    </html>
  );
}
```

- The `layout.jsx` wraps every page with shared UI (Navbar, Footer) and global context.
- Dynamic routes like `/apps/[id]` are handled via folder naming — `[id]` maps to the `params.id` prop automatically.
- The `not-found.jsx` file is automatically used by Next.js for unmatched routes.

---

## Components Breakdown

### `Navbar.jsx`
- Renders the site logo and navigation links
- Uses `MyNavLink` for active-state-aware links
- Responsive layout for mobile and desktop

### `MyNavLink.jsx`
- A wrapper around Next.js `<Link>` that uses `usePathname()` to detect the current route
- Highlights the nav link when the current path matches or starts with the link's target (handles nested routes like `/apps/3`)

```jsx
"use client"
const isActive = pathName === to || pathName.startsWith(to + '/')
```

### `TrendingApps.jsx`
- Fetches apps via the `useApps` custom hook
- Shows a **skeleton grid** while loading, then renders `<AppCard>` components
- Slices to display only the top 8 apps

### `AppCard.jsx`
- Receives a single `app` object as a prop
- Displays: optimized app icon, name, rating, downloads, and size
- Contains an **"Install"** button that updates global context and triggers a toast

### `InstallCard.jsx`
- Used in the Installed Apps page
- Shows app info with an **"Uninstall"** button
- Reads from and writes to `InstalledAppsContext`

### `Skeleton.jsx`
- A pulsing placeholder card that mimics the shape of `AppCard`
- Rendered in a grid while `loading` is `true` in `useApps`

---

## How Core Features Work

### App Listing & Data Fetching

App data is fetched from a local `data.json` file using `useEffect` inside a custom hook. This simulates a real API call and allows the loading state to be managed cleanly.

```js
// hooks/useApps.js
const useApps = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data.json")
      .then(res => res.json())
      .then(data => {
        setApps(data);
        setLoading(false);
      });
  }, []);

  return { apps, loading };
};
```

---

### Skeleton Loading UI

While `loading` is `true`, a grid of `<Skeleton />` placeholder cards is shown in place of the actual app cards. This gives instant visual feedback and prevents layout shift.

```jsx
{loading ? (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {Array.from({ length: 8 }).map((_, index) => (
      <Skeleton key={index} />
    ))}
  </div>
) : (
  <div className="grid ...">
    {apps.map((app, index) => <AppCard key={index} app={app} />)}
  </div>
)}
```

---

### Install & Uninstall

State is managed globally via React Context so the installed apps list persists across pages without prop drilling.

```jsx
// context/InstalledAppsContext.jsx
const [installApps, setInstallApps] = useState([]);

const handleInstall = (app) => {
  const alreadyInstalled = installApps.find(a => a.id === app.id);
  if (alreadyInstalled) {
    toast.warning("App is already installed!");
    return;
  }
  setInstallApps([...installApps, app]);
  toast.success(`${app.title} installed successfully! 🎉`);
};

const handleUninstall = (currentApp) => {
  setInstallApps(installApps.filter(app => app.id !== currentApp.id));
  toast.warning(`${currentApp.title} is uninstalled!`);
};
```

---

### Toast Notifications

`react-toastify` is configured globally in the root layout and handles all user feedback.

```jsx
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// In layout.jsx
<ToastContainer position="top-right" autoClose={2000} />
```

---

### Next.js Image Optimization

All app icons are rendered using Next.js's `<Image>` component instead of a plain `<img>` tag. This enables automatic lazy loading, format conversion (WebP), and responsive sizing. Remote images are configured in `next.config.js`.

```jsx
import Image from 'next/image';

<Image
  src={app.image}
  alt={app.title}
  width={80}
  height={80}
  className="object-contain"
/>
```

```js
// next.config.js
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "your-image-host.com" }
    ]
  }
};
```

---

## Styling System

### Tailwind CSS
All layout, spacing, typography, and color are handled with Tailwind utility classes directly in JSX. Gradients, animations, and hover effects are all composed with utilities:

```jsx
<div className="bg-gradient-to-br from-purple-50 via-white to-blue-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
```

### React Icons
Icons are imported from specific icon packs within `react-icons`:

```jsx
import { FaStar } from "react-icons/fa";
import { PiDownloadSimpleBold } from "react-icons/pi";
```

---

## Deployment

The project is deployed on **Vercel** with automatic builds from a Git repository.

**Build command:** `next build`  
**Framework preset:** Next.js (auto-detected by Vercel)

Since Next.js App Router handles routing natively on the server, no additional redirect configuration is needed — unlike a plain React SPA on Netlify.

---

## Getting Started Locally

```bash
# 1. Clone the repository
git clone https://github.com/your-username/next-app-store.git
cd next-app-store

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev

# 4. Open in browser
# http://localhost:3000
```

**Build for production:**

```bash
npm run build
npm run start
```

---

## Author

**Nihal** — [@nihalxofficial](https://github.com/nihalxofficial)

---

> Built with ❤️ using Next.js, Tailwind CSS, and a passion for clean UI 📲
