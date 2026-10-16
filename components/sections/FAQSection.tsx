"use client";

import React, { useState } from "react";
import { FAQ_ITEMS } from "@/data/packages";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ChevronDown, MessageSquare } from "lucide-react";
import { getGeneralConsultationUrl } from "@/lib/whatsapp";

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>("faq-price-basis");

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-offwhite scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Pertanyaan Populer"
          title="FREQUENTLY ASKED QUESTIONS"
          description="Rangkuman hal-hal penting seputar wisata jeep Puncak Becici untuk membantu persiapan perjalanan Anda."
        />

        {/* FAQ Accordion List */}
        <div className="mt-14 space-y-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-2xl bg-white border border-sand-dark/30 overflow-hidden transition-all duration-200 shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-adventure focus-visible:outline-offset-2"
                >
                  <span className="font-display text-base sm:text-lg font-bold uppercase tracking-tight text-charcoal pr-4">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-forest text-white" : "bg-sand text-forest"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    role="region"
                    className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm text-charcoal/80 leading-relaxed border-t border-sand-dark/15 pt-4 animate-in fade-in duration-200"
                  >
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Contact Prompt */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-sand-light border border-sand-dark/30">
          <p className="text-sm text-charcoal">
            Pertanyaan Anda belum terjawab di sini? Tim kami siap memberikan penjelasan lengkap.
          </p>
          <a
            href={getGeneralConsultationUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 px-6 py-2.5 bg-forest hover:bg-forest-light text-white text-xs sm:text-sm font-display font-bold uppercase tracking-wider rounded-xl transition-all"
          >
            <MessageSquare className="w-4 h-4 text-adventure" />
            <span>Tanya Langsung via WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
