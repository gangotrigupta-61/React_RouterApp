
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

## 🧩 Quick Examples

- Read a route param inside `User`:

```jsx
import { useParams } from 'react-router-dom';

export default function User(){
  const { userid } = useParams();
  return <div>User ID: {userid}</div>;
}
```

- Use loader data inside `Github`:

```jsx
import { useLoaderData } from 'react-router-dom';

export default function Github(){
  const data = useLoaderData();
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
```

## ✅ Notes & Tips

- Useful hooks: `useParams()`, `useLocation()`, `useNavigate()`, `useLoaderData()`.
- Consider `errorElement` on routes for friendly error UI, and use lazy imports for large route bundles.

---

Want further tweaks (more emojis, badges, or a CONTRIBUTING section)? I can quickly add those.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
