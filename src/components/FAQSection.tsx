import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { FAQ_LIST } from '../data/portfolioData';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-01');

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="relative bg-black text-white py-20 sm:py-28 border-b border-white/10">
      <div className="px-4 sm:px-8 md:px-12 max-w-7xl mx-auto">
        {/* Section Header (Matching Reference sec_060 & sec_070) */}
        <div className="pb-8 border-b border-white/10 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-red-500 mb-2 flex items-center gap-2">
              <span className="w-4 h-[1.5px] bg-red-600 inline-block" />
              <span>[06] — FAQ</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl text-white uppercase tracking-tight">
              THE QUESTIONS
            </h2>
          </div>
          <div className="font-mono text-xs text-zinc-400 max-w-sm">
            Everything you need to know about working together, from AI prompt architectures to commercial delivery rights.
          </div>
        </div>

        {/* Accordions */}
        <div className="divide-y divide-white/10 border-y border-white/10">
          {FAQ_LIST.map((item, idx) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`transition-colors ${
                  isOpen ? 'bg-zinc-950' : 'bg-transparent hover:bg-zinc-950/40'
                }`}
              >
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full py-6 sm:py-7 flex items-center justify-between text-left group"
                >
                  <div className="flex items-center gap-4 sm:gap-6 pr-4">
                    <span className="font-mono text-xs text-zinc-500 group-hover:text-red-500 transition-colors">
                      [{String(idx + 1).padStart(3, '0')}]
                    </span>
                    <h3 className="font-display font-bold text-lg sm:text-2xl text-zinc-200 group-hover:text-white transition-colors">
                      {item.question}
                    </h3>
                  </div>

                  <div
                    className={`w-9 h-9 rounded-sm flex items-center justify-center border flex-shrink-0 transition-all ${
                      isOpen
                        ? 'bg-red-600 text-white border-red-500'
                        : 'bg-zinc-900 text-zinc-400 border-white/10 group-hover:border-red-600 group-hover:text-white'
                    }`}
                  >
                    {isOpen ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="pb-8 pt-2 px-2 sm:px-12 animate-in fade-in duration-200">
                    <p className="font-mono text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-4xl">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
