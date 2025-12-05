import { MoveLeft } from 'lucide-react';
import { Suspense } from 'react';
import Preloader from './ui/animations/mainloader.jsx';
import { TransitionProvider, useTransition } from './context/TransitionContext.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Divider, Dropdown, Space, theme } from "antd";
import { Home, Projects, Contact, Experience, About, NotFound } from './components/imports.js';



const { useToken } = theme;

const items = [
    {
        key: "1",
        label: (
            <a target="_blank" rel="noopener noreferrer" href="">
                English
            </a>
        ),
    },
    {
        key: "2",
        label: (
            <a target="_blank" rel="noopener noreferrer" href="">
                French
            </a>
        ),
        disabled: false,
    },
    {
        key: "3",
        label: (
            <a target="_blank" rel="noopener noreferrer" href="">
                Spanish
            </a>
        ),
        disabled: false,
    },
];


const PageLoader = () => (
    <div className="flex items-center justify-center min-h-screen bg-[#0f0f10ff]">
        <div className="p-3 animate-spin drop-shadow-2xl bg-gradient-to-bl from-pink-400 via-purple-400 to-indigo-600 w-16 h-16 aspect-square rounded-full">
            <div className="rounded-full h-full w-full bg-slate-100 dark:bg-zinc-900" />
        </div>
    </div>
);

const TransitionLink = ({ to, children, className }) => {
    const { navigateWithTransition } = useTransition();

    return (
        <a
            href={to}
            onClick={(e) => {
                e.preventDefault();
                navigateWithTransition(to);
            }}
            className={className}
        >
            {children}
        </a>
    );
};

const AppContent = () => {
    const { token } = useToken();

    return (
        <div className=''>
            <Preloader />
            <div className="overflow-x-hidden containerz">
                <nav className="flex items-center justify-between flex-wrap p-7 text-white align-center">
                    <TransitionLink
                        to="/"
                        className="items-center text-lg pl-5"
                    >
                        <h2 className="font-audiowide text-4xl pl-5"><MoveLeft /></h2>
                    </TransitionLink>
                    <li className="flex space-x-8 items-center text-neutral-500 font-medium">
                        <ul>
                            <TransitionLink to="/">Home</TransitionLink>
                        </ul>
                        <ul>
                            <TransitionLink to="/about">About</TransitionLink>
                        </ul>
                        <ul>
                            <TransitionLink to="/projects">Projects</TransitionLink>
                        </ul>
                        <ul>
                            <TransitionLink to="/experience">Experience</TransitionLink>
                        </ul>
                        <ul>
                            <TransitionLink to="/contact">Contact</TransitionLink>
                        </ul>
                        <div className="pl-9">
                            <Dropdown>
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space className="hover:underline cursor-pointer">EN</Space>
                                </a>
                            </Dropdown>
                        </div>

                        <button className="border border-gray-600 text-white px-6 py-2 rounded-sm hover:bg-white/10 transition-colors">
                            <a href="mailto:asadshzdev@gmail.com">Hello@asad</a>
                        </button>
                    </li>
                </nav>

                <Suspense fallback={<PageLoader />}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/experience" element={<Experience />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/about" element={<About />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Suspense>
                
            </div>
        </div>
    );
};

const App = () => {
    return (
        <Router>
            <TransitionProvider>
                <AppContent />
            </TransitionProvider>
        </Router>
    )
}

export default App