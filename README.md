# Z-line Ecommerce

**Z-line Ecommerce** is a complete, full-stack e-commerce web application designed to sell mobile phones and related accessories. It includes a user-friendly interface and a powerful admin panel to manage all aspects of the store.

---

## 🔧 Features

This project includes full **CRUD operations** (Create, Read, Update, Delete) across all major modules.  
Each feature is modular and structured for maintainability and scalability.

### Core Features:

- Product management (Add / Edit / Delete)
- Categories and Subcategories management
- Brand management
- Authentication (Login, Register, Forgot Password, Change Password)
- Admin/User management with role separation
- Product Reviews and Ratings
- Wishlist functionality
- User shipping addresses
- Coupons and discount system
- Cart and checkout
- Orders and order management

---

## 🚀 Tech Stack

### Frontend

- React 18
- Vite
- Redux Toolkit
- Redux Saga
- React Router DOM
- React Hook Form + Yup for form validation
- Tailwind CSS + DaisyUI + Sass
- Axios
- React Toastify
- Swiper.js
- Emotion CSS
- PWA support (Vite Plugin PWA)

### Dev Tools

- ESLint
- PostCSS
- Autoprefixer
- Workbox

---

## 📁 Folder Structure

The project is organized into a clean, modular structure for clarity and maintainability:

src/
│
├── api/ # Axios requests and API service files
├── auth/ # Authentication Protected
├── Components/ # Shared reusable components
├── data/ # Static/form data
├── helpers/ # Utility functions and helpers
├── Pages/ # Main route-level components (screens)
├── store/ # Redux store, slices, and sagas
├── Styles/ # Custom SCSS/Tailwind styles
├── Ui/ # Shared UI components (Buttons, Modals, etc.)
├── App.jsx # Root component
├── main.jsx # React entry point
└── Template.jsx # App layout template


## ▶️ Getting Started

Install dependencies:

```bash
npm install 
yarn 

npm run dev 
or
yarn dev

