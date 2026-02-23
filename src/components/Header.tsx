import React from 'react';

export const Header: React.FC = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 h-16 flex items-center">
                <h1 className="text-xl font-bold text-primary tracking-tight">
                    PharmaJob <span className="text-slate-400 font-light">Compass</span>
                </h1>
            </div>
        </header>
    );
};
