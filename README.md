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
- React Hook Form + Yup (for form validation)
- Tailwind CSS + DaisyUI + Sass
- Axios
- React Toastify
- Swiper.js
- Emotion CSS
- PWA support via Vite Plugin PWA

### Development Tools

- ESLint
- PostCSS
- Autoprefixer
- Workbox

---

## 📁 Folder Structure

src/
├── api/
├── auth/
├── Components/
├── data/
├── helpers/
├── Pages/
├── store/
├── Styles/
├── Ui/
├── App.jsx
├── main.jsx
└── Template.jsx


### Folder Descriptions

- `api/`: Axios requests and API service files  
- `auth/`: Authentication logic (protected routes)  
- `Components/`: Shared reusable components  
- `data/`: Static/form data  
- `helpers/`: Utility functions and logic  
- `Pages/`: Route-level components (screens)  
- `store/`: Redux Toolkit setup, slices, and sagas  
- `Styles/`: Tailwind & custom Sass styles  
- `Ui/`: UI components like buttons, modals, etc.  
- `App.jsx`: Root app component  
- `main.jsx`: Application entry point  
- `Template.jsx`: Layout wrapper  

---

## ▶️ Getting Started

1. Install dependencies:

```bash
npm install
npm run dev
