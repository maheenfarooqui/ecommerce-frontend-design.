# 🛍️ Modern E-Commerce Frontend Platform

A pixel-perfect, highly responsive, and dynamic E-Commerce frontend platform built using **React 19**, **Tailwind CSS**, and **React Router DOM**. The project features structural layout accuracy matching professional production wireframes (Figma specs), dynamic routing for product details, stateful components, and micro-interactions.

---

[![Live Demo](https://img.shields.io/badge/Demo-Live%20Preview-white?style=for-the-badge&logo=netlify&logoColor=black&labelColor=white&color=black)](https://e-commerce-frontend-design.netlify.app/)

## 🚀 Key Features

*   **Dynamic Product Discovery Engine:** Built-in semantic routing (`/products/:id`) that extracts URL parameters using `useParams` to dynamically render distinct target specifications, pricing tiers, and individual product image galleries.
*   **Figma-Locked UI Layouts:** Clean grid systems and card collections designed strictly to technical specifications (e.g., exact `270px` x `383px` locked cards with precise safe-zones and line-clamps for clean text-wrapping).
*   **Context API Architecture:** Fully integrated global state management via `CartProvider` to track cart counts and user item additions uniformly across components.
*   **Smooth Overlay Animations:** Interactive hover overlays featuring clean backdrop blurs (`backdrop-blur-[2px]`) and layout action triggers for seamless user navigation.
*   **Micro-Interactions:** Scroll-triggered dynamic components powered by modern responsive rendering tools.

---

## 🛠️ Tech Stack & Architecture

*   **Frontend Library:** React (Functional Components, Custom Hooks)
*   **Routing System:** React Router DOM (v6+)
*   **Global State Management:** React Context API (`CartContext`)
*   **Styling Engine:** Tailwind CSS (Utility-first CSS, custom aspect-ratios, custom color theme injections)
*   **Iconography:** Lucide React (Pixel-perfect clean vector elements)

---

## 📂 Project Directory Breakdown

```text
src/
├── assets/             # Raw static assets, product imagery, and branding vectors
├── components/
│   ├── common/         # Reusable structural blocks (Container, ProductGallery, RelatedProducts)
│   └── layouts/        # Global page layouts (Navbar, Footer)
├── context/            # Context API states (CartContext handling transactional updates)
├── pages/              # Application Viewports (Home, ListingPage, ProductDetailsPage, CartPage)
├── App.jsx             # Core routing manager mapping layout matrices
└── main.jsx            # Application entry portal
