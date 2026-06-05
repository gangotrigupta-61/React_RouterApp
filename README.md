
# 🚀 Router App

A small, opinionated React + Vite demo that showcases routing patterns with `react-router-dom` (v6). It includes nested layouts, dynamic routes, and a route loader example.

## ✨ Overview

- **Purpose:** Teach core routing concepts and show a tidy project structure for small apps.
- **App behavior:** A shared `Header` / `Footer` wrap the views; routes render into an `Outlet` provided by the `Layout` component.

## 🧰 Tech Stack

- **Framework:** React
- **Bundler / Dev Server:** Vite
- **Routing:** `react-router-dom` (v6)
- **Language:** JavaScript (JSX)

## 🎨 Tailwind CSS

- This project includes Tailwind CSS for utility-first styling. The Vite plugin and `tailwindcss` dependency are already in `package.json`.


## 🧭 Key Features

- **Nested Layout:** Persistent site chrome (`Header` + `Footer`) while child routes render inside `Outlet`.
- **Declarative Routes:** Route tree declared with `createBrowserRouter` + `createRoutesFromElements`.
- **Dynamic Route Params:** `user/:userid` shows how to read URL params.
- **Data Loader:** `github` route runs `githubinfoloader` before rendering so the page receives data via `useLoaderData()`.

## 🔗 Router Integration (how it works)

- Router setup lives in [src/main.jsx](src/main.jsx):
  - `createBrowserRouter(...)` creates the router using browser history.
  - `createRoutesFromElements(...)` turns JSX `<Route>` elements into a route config.
  - `RouterProvider` mounts the router at the app root.
- `Layout` ([src/Layout.jsx](src/Layout.jsx)) is mounted at `/` and renders child routes into an `Outlet`.
- Dynamic routes use `:param` syntax (example: `user/:userid`). Access params with `useParams()`.
- Loaders are attached to route definitions and provide data before rendering; access via `useLoaderData()`.

## 📁 Relevant Files

- Router: [src/main.jsx](src/main.jsx)
- Layout: [src/Layout.jsx](src/Layout.jsx)
- Components: [src/components](src/components)
  - Home — [src/components/Home/Home.jsx](src/components/Home/Home.jsx)
  - About — [src/components/About/About.jsx](src/components/About/About.jsx)
  - Contact — [src/components/Contact/Contact.jsx](src/components/Contact/Contact.jsx)
  - User — [src/components/User/User.jsx](src/components/User/User.jsx)
  - Github — [src/components/Github/Github.jsx](src/components/Github/Github.jsx)

## ▶️ How to Run

Install dependencies:

```bash
npm install
```

Start dev server:

```bash
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).
