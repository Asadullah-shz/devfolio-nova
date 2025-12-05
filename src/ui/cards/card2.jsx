import React from 'react';

const NeonCard = (props) => {
 
    const {
        className = '',
        teamMembers = [],
        logoText = 'LOGO',
        badgeText = '/00', 
        title = 'Neon Frame Studio',
        subtitle = 'UI/UX Design & Creative Systems',
        description = 'We craft stunning interfaces built on **clarity**, **performance**, and **emotion**. Tailored visuals that connect brands with bold identities.',
    } = props;



    return (
        <div className={`flex items-center justify-center p-8 ${className}`}>
            <div
                className="relative w-full max-w-sm md:max-w-md p-6 sm:p-8 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 ease-in-out hover:scale-[1.02] transform animate-pulse-subtle group" // Added 'group' class for better glow
                style={{
                    background: '#252528ff',
                    backdropFilter: 'blur(15px)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    boxShadow: '0 0 20px rgba(159, 158, 160, 0.3)',
                }}
            >
                <div
                    className="absolute inset-0 z-0 opacity-50 transition-opacity duration-300 group-hover:opacity-75"
                    style={{
                        background:
                            'radial-gradient(circle at 60% 110%, rgba(44, 44, 45, 0.5) 0%, rgba(0, 0, 0, 0) 70%)',
                        transform: 'scale(1.5)',
                        filter: 'blur(60px)',
                    }}
                ></div>

                <div className="relative z-10 text-white">
                    <div className="flex justify-between items-start mb-6">
                        <div className="flex -space-x-2">
                            {teamMembers.map((src, index) => (
                                <img
                                    key={index}
                                    className="w-8 h-8 rounded-full border-2 border-gray-900 object-cover transform hover:scale-110 transition-transform duration-300"
                                    src={src}
                                    alt={`Team Member ${index + 1}`}
                                    style={{
                                        boxShadow: '0 0 5px rgba(25, 172, 235, 0.6)',
                                    }}
                                />
                            ))}
                        </div>
                        <div className="text-sm font-bold tracking-widest transition duration-300 hover:text-blue-300">
                            {logoText}
                            <div className="flex space-x-1 mt-1">
                                <div className="w-2 h-0.5 bg-blue-400"></div>
                                <div className="w-2 h-0.5 bg-blue-400 opacity-50"></div>
                                <div className="w-2 h-0.5 bg-blue-400 opacity-20"></div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <p className="text-sm text-blue-400 opacity-70 mb-1 font-mono">{badgeText}</p>
                        <h1 className="text-3xl font-bold mb-1 tracking-tight">{title}</h1>
                        <p className="text-sm text-gray-400 tracking-wider">{subtitle}</p>
                    </div>

                    <p 
                        className="text-xl text-gray-200 leading-relaxed mb-10"
                        dangerouslySetInnerHTML={{ __html: description }}
                    />
                    <div className="flex justify-between items-center text-blue-400 font-semibold"></div>
                </div>
            </div>
        </div>
    );
};

export default NeonCard;