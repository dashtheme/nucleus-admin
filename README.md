# QuantumBoard - Modern React Dashboard Theme

A modern, responsive, and feature-rich dashboard theme built with React, TypeScript, and Vite. QuantumBoard provides a comprehensive set of components and features for building professional admin dashboards and web applications.

## 🚀 Features

- **Modern Tech Stack**
  - React 18 with TypeScript
  - Vite for lightning-fast development
  - Bootstrap 5 for responsive layouts
  - Chart.js for data visualization
  - FontAwesome icons

- **Advanced Components**
  - Responsive dashboard layouts
  - Interactive charts and graphs
  - Form handling with Formik and Yup validation
  - Data tables with sorting and filtering
  - Toast notifications
  - Custom select components

- **Developer Experience**
  - Hot Module Replacement (HMR)
  - TypeScript for type safety
  - ESLint configuration for code quality
  - Organized project structure
  - React Query for efficient data fetching

## 📦 Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd quantumboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## 🛠️ Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 🔧 Configuration

### ESLint Setup

The project includes a comprehensive ESLint configuration for React and TypeScript. To enable type-aware lint rules:

1. Configure `parserOptions` in your ESLint config:
```js
export default tseslint.config({
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

2. Use recommended configurations for enhanced type checking.

## 📚 Dependencies

### Core Dependencies
- React v18.3.1
- TypeScript
- Bootstrap v5.3.3
- Chart.js v4.4.6
- React Router DOM v7.0.1

### Form Handling
- Formik v2.4.6
- Yup v1.4.0

### UI Components
- React Select v5.8.3
- React Toastify v10.0.6
- FontAwesome Icons

### Development Tools
- Vite v5.4.10
- ESLint v9.13.0
- TypeScript ESLint

## 🎨 Customization

The theme can be customized through:
- Bootstrap variables
- Component-level styling
- Layout modifications
- Theme configuration files

## 🔒 TypeScript Support

The project includes comprehensive TypeScript support with:
- Strict type checking
- Type definitions for all components
- Interface declarations for data structures
- Type-safe routing

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
