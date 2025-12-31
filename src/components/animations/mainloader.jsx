import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [phase, setPhase] = useState(null);
    const [progress, setProgress] = useState(0);
    const location = useLocation();

    useEffect(() => {
        if (isLoading) {
            const interval = setInterval(() => {
                setProgress((prev) => {
                    if (prev >= 100) {
                        clearInterval(interval);
                        return 100;
                    }
                    const inc = prev < 80 ? Math.random() * 12 : Math.random() * 4;
                    return Math.min(prev + inc, 100);
                });
            }, 70);
            return () => clearInterval(interval);
        }
    }, [isLoading]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
            setProgress(100);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!isLoading) {
            setPhase('closing');
            const openTimer = setTimeout(() => {
                setPhase('opening');
            }, 400);
            const resetTimer = setTimeout(() => {
                setPhase(null);
            }, 1600);
            return () => {
                clearTimeout(openTimer);
                clearTimeout(resetTimer);
            };
        }
    }, [location, isLoading]);

    if (!isLoading && phase === null) return null;

    return (
        <div className={`fixed inset-0 z-[9999] pointer-events-none flex items-center justify-center overflow-hidden transition-all duration-1000 ${phase === 'opening' ? 'opacity-0 scale-125' : 'opacity-100 scale-100'}`}>

            <div className="absolute inset-0 bg-[#020202] z-0">
                <div className="absolute inset-0 opacity-40">
                    <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_30%_30%,rgba(120,120,120,0.4)_0%,transparent_50%),radial-gradient(circle_at_70%_70%,rgba(150,150,150,0.3)_0%,transparent_50%)] animate-[spin_15s_linear_infinite]"></div>
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 contrast-150 brightness-50"></div>
                </div>

                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -inset-[100%] opacity-30 animate-[aurora_20s_linear_infinite] bg-[linear-gradient(45deg,#2b2b2b_0%,#3a3a3a_25%,#4a4a4a_50%,#3a3a3a_75%,#2b2b2b_100%)] blur-[100px]"></div>
                </div>
            </div>


            <div className={`relative flex flex-col items-center transition-all duration-700 ${!isLoading ? 'scale-0 opacity-0 blur-2xl' : 'scale-100 opacity-100 blur-0'}`}>

                <div className="relative w-64 h-64 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gray-500/20 rounded-full blur-[60px] animate-pulse"></div>
                    <div className="absolute inset-[-20px] border border-white/10 rounded-full rotate-[30deg] animate-[spin_8s_linear_infinite]">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-400 rounded-full shadow-[0_0_15px_rgba(150,150,150,1)]"></div>
                    </div>
                    <div className="absolute inset-[-40px] border border-white/5 rounded-full rotate-[-45deg] animate-[spin_12s_linear_infinite_reverse]">
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-gray-300 rounded-full shadow-[0_0_15px_rgba(120,120,120,1)]"></div>
                    </div>


                    <div className="relative w-40 h-40 bg-gradient-to-br from-gray-600 via-gray-500 to-gray-400 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] animate-[morph_6s_ease-in-out_infinite] shadow-[0_0_50px_rgba(100,100,100,0.5)] overflow-hidden">
                        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                        <div className="absolute inset-0 flex items-center justify-center font-audiowide text-4xl text-white bg-gray-900/70 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                            {Math.round(progress)}
                        </div>

                        <div className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent,rgba(245, 8, 8, 0.2),transparent)] animate-[spin_3s_linear_infinite]"></div>
                    </div>
                </div>


                <div className="mt-12 text-center space-y-2">
                    <h2 className="text-white text-sm tracking-[0.8em] font-light uppercase opacity-80 animate-pulse">
                        Synchronizing
                    </h2>
                    <div className="flex items-center justify-center gap-1">
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="w-1 h-1 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: `${i * 0.2}s` }}></div>
                        ))}
                    </div>
                </div>
            </div>


            {phase === 'closing' && (
                <div className="absolute inset-0 bg-[#020202] z-50 animate-[reveal_0.5s_ease-in-out_forwards]"></div>
            )}


            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes morph {
                    0%, 100% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; transform: scale(1); }
                    33% { border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%; transform: scale(1.05) rotate(5deg); }
                    66% { border-radius: 30% 70% 70% 30% / 50% 40% 30% 60%; transform: scale(0.95) rotate(-5deg); }
                }
                @keyframes aurora {
                    0% { transform: translate(-10%, -10%) rotate(0deg); }
                    100% { transform: translate(10%, 10%) rotate(360deg); }
                }
                @keyframes reveal {
                    0% { clip-path: circle(0% at 50% 50%); }
                    100% { clip-path: circle(150% at 50% 50%); }
                }
            `}} />
        </div>
    );
};

export default Preloader;