import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CompanyCard } from '@/components/CompanyCard';
import { COMPANIES } from '@/constants/companies';
import { ShieldCheck } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-32 pb-20">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 mb-20 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <ShieldCheck size={16} />
            10년 차 제약회사 QA/QC 현직자 큐레이션
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            대한민국 <span className="text-primary font-black">Top 20</span> 제약회사,<br className="hidden md:block" />
            채용 공고를 한곳에서.
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-500 leading-relaxed">
            기업에 대한 조사는 취업을 위한 첫걸음입니다.<br />
            기업 채용 사이트를 항상 가까이 하세요. 모든 취준생의 성공을 응원합니다.
          </p>
        </section>

        {/* Company Grid Section */}
        <section className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {COMPANIES.map((company) => (
              <CompanyCard key={company.id} company={company} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
