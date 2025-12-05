# Asad's Devfolio

A modern, high-performance developer portfolio built with React, Vite, and Tailwind CSS. This project showcases my skills, projects, and experience with a focus on smooth animations and a premium user experience.

## 🚀 Features

-   **Dynamic Animations:** Powered by [GSAP](https://greensock.com/gsap/) for smooth transitions and interactive elements.
-   **Responsive Design:** Fully responsive layout using [Tailwind CSS](https://tailwindcss.com/), ensuring a great experience on all devices.
-   **Particle Background:** Interactive particle background effect for visual depth.
-   **3D Elements:** Integration of 3D elements using `@react-three/fiber` and `three.js`.
-   **Page Transitions:** Seamless page transitions managed by a custom context.
-   **Modern UI Components:** Custom-built UI components including:
    -   **Magic Bento Grid:** A dynamic grid layout for showcasing projects.
    -   **Neon Cards:** Stylish cards with glow effects.
    -   **Flowing Buttons:** Interactive buttons with hover effects.
-   **Routing:** Client-side routing with `react-router-dom`.

## 🛠️ Tech Stack

-   **Framework:** [React](https://reactjs.org/) (v19)
-   **Build Tool:** [Vite](https://vitejs.dev/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/) (v4), [Styled Components](https://styled-components.com/)
-   **Animations:** [GSAP](https://greensock.com/gsap/)
-   **Icons:** [Lucide React](https://lucide.dev/), [Ant Design Icons](https://ant.design/components/icon/)
-   **UI Library:** [Ant Design](https://ant.design/)
-   **3D Graphics:** [Three.js](https://threejs.org/), [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)

## 📂 Project Structure

```
src/
├── components/
│   └── pages/       # Main page components (Home, About, Projects, etc.)
├── context/         # React Context providers (e.g., TransitionContext)
├── css/             # Global and component-specific CSS files
├── ui/              # Reusable UI components
│   ├── animations/  # Animation components (MagicBento, ParticleBg, etc.)
│   └── cards/       # Card components (ProfileCard, NeonCard, etc.)
├── App.jsx          # Main application component with routing
└── main.jsx         # Entry point
```

## 📦 Getting Started

### Prerequisites

-   Node.js (v18 or higher recommended)
-   npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/yourusername/dev-folio-v2.git
    cd dev-folio-v2
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

### Running the Project

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Building for Production

Build the project for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 📄 License

This project is licensed under the MIT License.
