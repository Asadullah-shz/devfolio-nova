import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [phase, setPhase] = useState(null); 
    const location = useLocation();


    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500); 
        return () => clearTimeout(timer);
    }, []);


    useEffect(() => {
        if (!isLoading) {
            
            setPhase('closing');

            
            const openTimer = setTimeout(() => {
                setPhase('opening');
            }, 450);

           
            const resetTimer = setTimeout(() => {
                setPhase(null);
            }, 900);

            return () => {
                clearTimeout(openTimer);
                clearTimeout(resetTimer);
            };
        }
    }, [location, isLoading]);

    if (!isLoading && phase === null) return null;

    
    const getShutterHeight = () => {
        if (isLoading) return 'h-[40vh]';
        if (phase === 'closing') return 'h-[50vh]';
        return 'h-0';
    };

    return (
        <div className="fixed inset-0 z-50 pointer-events-none bg-[#131315]">
           
            <div
                className={`absolute top-0 left-0 w-full bg-[#131315] transition-all duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] ${getShutterHeight()} border-b  flex items-end justify-center overflow-hidden`}
            >
               
                <div className="w-full h-full opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
            </div>

           
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center z-50">
                    <div className="relative flex flex-col items-center gap-4">
                        <div className="p-3 animate-spin drop-shadow-2xl bg-gradient-to-bl from-pink-400 via-purple-400 to-indigo-600 md:w-32 md:h-32 h-32 w-32 aspect-square rounded-full flex justify-center items-center">
                            <div className="rounded-full h-full w-full bg-slate-100 dark:bg-zinc-900 background-blur-md" />
                        </div>
                        <div className="text-cyan-500 text-md font-bold tracking-[0.2em] animate-pulse">
                            LOADING
                        </div>
                    </div>
                </div>
            )}

            {/* Bottom Shutter */}
            <div
                className={`absolute bottom-0 left-0 w-full bg-[#131315] transition-all duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] ${getShutterHeight()} border-t   flex items-start justify-center overflow-hidden`}
            >
                <div className="w-full h-full opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
            </div>
        </div>
    );
};

export default Preloader;