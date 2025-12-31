import { MoveLeft, Menu, X } from 'lucide-react';
import { Suspense, useState } from 'react';
import Preloader from '../animations/mainloader.jsx';
import { useTransition } from '../../context/TransitionContext.jsx';
import { Route, Routes } from 'react-router-dom';
import { Dropdown, Space, theme } from "antd";
import { Home, Projects, Contact, Experience, About, NotFound } from '../imports.js';

const { useToken } = theme;

const items = [];

const PageLoader = () => (
    <div className="flex items-center justify-center min-h-screen bg-[#0f0f10ff]">
        <div className="p-3 animate-spin drop-shadow-2xl bg-gradient-to-bl from-pink-400 via-purple-400 to-indigo-600 w-16 h-16 aspect-square rounded-full">
            <div className="rounded-full h-full w-full bg-slate-100 dark:bg-zinc-900" />
        </div>
    </div>
);

const TransitionLink = ({ to, children, className, onClick }) => {
    const { navigateWithTransition } = useTransition();

    return (
        <a
            href={to}
            onClick={(e) => {
                e.preventDefault();
                if (onClick) onClick(e);
                navigateWithTransition(to);
            }}
            className={className}
        >
            {children}
        </a>
    );
};

const MainLayout = () => {
    const { token } = useToken();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    return (
        <div className=''>
            <Preloader />
            <div className="overflow-x-hidden containerz">
                <nav className="flex items-center justify-between flex-wrap p-7 text-white align-center relative z-40">
                    <TransitionLink
                        to="/"
                        className="items-center text-lg pl-5 z-50"
                    >
                        <h2 className="font-audiowide text-4xl pl-5"><MoveLeft /></h2>
                    </TransitionLink>


                    <div className="hidden lg:flex space-x-8 items-center text-neutral-500 font-medium">
                        <TransitionLink to="/">Home</TransitionLink>
                        <TransitionLink to="/about">About</TransitionLink>
                        <TransitionLink to="/projects">Projects</TransitionLink>
                        <TransitionLink to="/experience">Experience</TransitionLink>
                        <TransitionLink to="/contact">Contact</TransitionLink>

                        <div className="pl-9">
                            <Dropdown menu={{ items }}>
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space className="hover:underline cursor-pointer"></Space>
                                </a>
                            </Dropdown>
                        </div>

                        <button className="border border-gray-600 text-white px-6 py-2 rounded-sm hover:bg-white/10 transition-colors">
                            <a href="mailto:asadshzdev@gmail.com">Hello@asad</a>
                        </button>
                    </div>


                    <div className="lg:hidden flex items-center z-50">
                        <button onClick={toggleMobileMenu} className="text-white p-2">
                            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>


                    {isMobileMenuOpen && (
                        <div className="fixed inset-0 bg-[#0f0f10] z-40 flex flex-col items-center justify-center space-y-8 text-2xl text-neutral-400 font-medium lg:hidden">
                            <TransitionLink to="/" className="hover:text-white" onClick={() => { closeMobileMenu(); }}>Home</TransitionLink>
                            <TransitionLink to="/about" className="hover:text-white" onClick={() => { closeMobileMenu(); }}>About</TransitionLink>
                            <TransitionLink to="/projects" className="hover:text-white" onClick={() => { closeMobileMenu(); }}>Projects</TransitionLink>
                            <TransitionLink to="/experience" className="hover:text-white" onClick={() => { closeMobileMenu(); }}>Experience</TransitionLink>
                            <TransitionLink to="/contact" className="hover:text-white" onClick={() => { closeMobileMenu(); }}>Contact</TransitionLink>

                            <div className="pt-8">
                                <button className="border border-gray-600 text-white px-8 py-3 rounded-sm hover:bg-white/10 transition-colors">
                                    <a href="mailto:asadshzdev@gmail.com">Hello@asad</a>
                                </button>
                            </div>
                        </div>
                    )}
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

export default MainLayout;
