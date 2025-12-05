import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TransitionContext = createContext();

export const TransitionProvider = ({ children }) => {
    const navigate = useNavigate();
    const [phase, setPhase] = useState('idle'); 

    const navigateWithTransition = (path) => {
        if (phase !== 'idle') return; 
        setPhase('closing');

        setTimeout(() => {
            navigate(path);

            setPhase('opening');
            setTimeout(() => {
                setPhase('idle');
            }, 400);
        }, 400);
    };

    return (
        <TransitionContext.Provider value={{ phase, navigateWithTransition }}>
            {children}
        </TransitionContext.Provider>
    );
};

export const useTransition = () => useContext(TransitionContext);
