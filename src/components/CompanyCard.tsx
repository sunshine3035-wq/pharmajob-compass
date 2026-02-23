import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Company } from '@/constants/companies';

interface CompanyCardProps {
    company: Company;
}

export const CompanyCard: React.FC<CompanyCardProps> = ({ company }) => {
    return (
        <div className="bg-card rounded-xl border border-slate-200 p-6 card-hover shadow-sm">
            <div className="mb-4">
                <h3 className="text-xl font-bold text-slate-900 mb-1">{company.name}</h3>
                <p className="text-sm text-slate-500 leading-relaxed min-h-[40px]">
                    {company.description}
                </p>
            </div>

            <a
                href={company.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-secondary hover:bg-emerald-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors group"
            >
                채용사이트 가기
                <ExternalLink size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
        </div>
    );
};
