import { lazy, Suspense } from 'react';

const Home = lazy(() => import('../pages/Home.jsx'));
const Projects = lazy(() => import('../pages/Projects.jsx'));
const Contact = lazy(() => import('../pages/Contact.jsx'));
const Experience = lazy(() => import('../pages/Experience.jsx'));
const About = lazy(() => import('../pages/About.jsx'));
const NotFound = lazy(() => import('../pages/NotFound.jsx'));



export {
    Home,
    Projects,
    Contact,
    Experience,
    About,
    NotFound
};
