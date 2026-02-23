import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-white border-t border-slate-200 py-12 mt-20">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <p className="text-slate-500 text-sm">
                    Made by 10년 차 QA/QC 선배. 모든 취준생의 합격을 기원합니다.
                </p>
                <p className="text-slate-400 text-xs mt-2">
                    &copy; {new Date().getFullYear()} PharmaJob Compass. All rights reserved.
                </p>
            </div>
        </footer>
    );
};
