"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STEPS = [
  { id: "style", title: "Tarzını Seç", options: ["Bohem", "Modern", "Klasik", "Minimalist"] },
  { id: "color", title: "Renk Paleti", options: ["Pastel Tonlar", "Canlı Renkler", "Beyaz & Yeşil", "Toprak Tonları"] },
  { id: "size", title: "Boyut", options: ["Küçük (Butik)", "Orta (Standart)", "Büyük (Gösterişli)"] }
];

export default function DesignYourOwn() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<Record<string, string>>({});
  const [isFinished, setIsFinished] = useState(false);

  const handleSelect = (option: string) => {
    const updatedSelections = { ...selections, [STEPS[currentStep].id]: option };
    setSelections(updatedSelections);
    
    // Eğer son adımdaysak bitir, değilsek bir sonrakine geç
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsFinished(true); // Final ekranına geçişi tetikler
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const whatsappMessage = `Merhaba! Kendi çiçeğimi tasarladım: 
  Tarz: ${selections.style}, 
  Renk: ${selections.color}, 
  Boyut: ${selections.size}. 
  Detayları görüşebilir miyiz?`;

  return (
    <section id="tasarla" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light tracking-tight text-floral-text mb-4">
            Kendi <span className="text-floral-primary font-normal">Çiçeğini Tasarla</span>
          </h2>
          <p className="text-floral-text/60 font-light">
            Sizin için en anlamlı olanı birlikte seçelim.
          </p>
        </div>

        <div className="bg-floral-bg/30 p-8 md:p-12 rounded-[2.5rem] border border-floral-accent/30 relative min-h-[400px] flex items-center justify-center">
          
          {/* Geri Butonu (Sadece ilk adımda değilse ve bitmediyse görünür) */}
          {!isFinished && currentStep > 0 && (
            <button 
              onClick={handleBack}
              className="absolute top-8 left-8 text-xs uppercase tracking-widest text-floral-text/40 hover:text-floral-primary transition-colors flex items-center gap-1"
            >
              <span>&larr;</span> Geri
            </button>
          )}

          <AnimatePresence mode="wait">
            {!isFinished ? (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex flex-col items-center w-full"
              >
                <span className="text-xs uppercase tracking-[0.2em] text-floral-primary font-semibold mb-2">
                  Adım {currentStep + 1} / {STEPS.length}
                </span>
                <h3 className="text-2xl font-normal text-floral-text mb-8 text-center">
                  {STEPS[currentStep].title}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                  {STEPS[currentStep].options.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleSelect(option)}
                      // Eğer önceden seçilmişse görsel olarak belli et (Geri gelindiğinde kolaylık)
                      className={`py-4 px-6 rounded-2xl border transition-all duration-300 text-sm tracking-wide font-light ${
                        selections[STEPS[currentStep].id] === option 
                        ? "border-floral-primary bg-floral-primary/5 text-floral-primary" 
                        : "border-floral-text/10 bg-white hover:border-floral-primary"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center w-full"
              >
                <div className="mb-6 inline-block p-4 bg-floral-primary/10 rounded-full text-floral-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-normal text-floral-text mb-4">Tasarımınız Hazır!</h3>
                <div className="text-sm text-floral-text/60 mb-8 space-y-1">
                  <p>Tarz: <strong>{selections.style}</strong></p>
                  <p>Renk: <strong>{selections.color}</strong></p>
                  <p>Boyut: <strong>{selections.size}</strong></p>
                </div>
                <div className="flex flex-col gap-4 max-w-xs mx-auto">
                  <a
                    href={`https://wa.me/905555555555?text=${encodeURIComponent(whatsappMessage)}`}
                    target="_blank"
                    className="bg-floral-primary text-white px-10 py-4 rounded-full text-sm font-medium hover:bg-floral-primary-hover shadow-lg shadow-floral-primary/20 transition-all"
                  >
                    WhatsApp ile Gönder
                  </a>
                  <button 
                    onClick={() => { setCurrentStep(0); setSelections({}); setIsFinished(false); }}
                    className="text-xs text-floral-text/40 underline uppercase tracking-widest hover:text-floral-primary transition-colors"
                  >
                    Baştan Başla
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}