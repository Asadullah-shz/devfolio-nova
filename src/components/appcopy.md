import React from 'react';
import Home from './components/pages/Home.jsx';
import Projects from './components/pages/project.jsx';
import Contact from './components/pages/contact.jsx';
import Experience from './components/pages/experience.jsx';
import About from './components/pages/about.jsx';
import NotFound from './components/pages/404.jsx';
import { MoveLeft } from 'lucide-react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Divider, Dropdown, Space, theme } from "antd";
import Preloader from './ui/mainloader.jsx';
import { TransitionProvider, useTransition } from './context/TransitionContext.jsx';

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
    const contentStyle = {
        backgroundColor: token.colorBgElevated,
        borderRadius: token.borderRadiusLG,
        boxShadow: token.boxShadowSecondary,
    };
    const menuStyle = {
        boxShadow: "none",
    };

    return (
        <div className=''>
            <Preloader />
            <div className="overflow-x-hidden containerz">
                <nav className="flex items-center justify-between  flex-wrap p-7  text-white align-center">
                    <TransitionLink
                        to="/"
                        className="items-center text-lg pl-5 "
                    >
                        <h2 className="font-audiowide text-4xl pl-5 ">   <MoveLeft /></h2>
                    </TransitionLink>
                    <li className="flex space-x-8  items-center text-neutral-500 font-medium">
                        <ul>
                            <TransitionLink to="">Home</TransitionLink>
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
                            <Dropdown
                                className=""
                                // menu={{ items }}
                                // popupRender={(menu) => (
                                //     <div style={contentStyle}>
                                //         {React.cloneElement(menu, { style: menuStyle })}
                                //         <Divider style={{ margin: 0 }} />
                                //     </div>
                                // )}
                            >
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

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>

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