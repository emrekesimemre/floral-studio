"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STEPS = [
  { id: "style", title: "Tarzını Seç", options: ["Bohem", "Modern", "Klasik", "Minimalist"] },
  { id: "color", title: "Renk Paleti", options: ["Pastel Tonlar", "Canlı Renkler", "Beyaz & Yeşil", "Toprak Tonları"] },
  { id: "size", title: "Boyut", options: ["Butik (Zarif)", "Standart (İdeal)", "Gösterişli (Büyük)"] }
];

export default function DesignYourOwn() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<Record<string, string>>({});
  const [isFinished, setIsFinished] = useState(false);

  const handleSelect = (option: string) => {
    const updatedSelections = { ...selections, [STEPS[currentStep].id]: option };
    setSelections(updatedSelections);
    
    // Anında geçiş yerine, kullanıcının seçtiği butonu yarım saniye görmesi için minik bir gecikme (Premium hissiyat)
    setTimeout(() => {
      if (currentStep < STEPS.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        setIsFinished(true);
      }
    }, 300);
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const whatsappMessage = `Merhaba, Saye Bloom vitrininden kendi aranjmanımı tasarladım. Detayları görüşebilir miyiz? \n\n✨ Tarz: ${selections.style}\n🎨 Renk: ${selections.color}\n📏 Boyut: ${selections.size}`;

  // İlerleme çubuğu hesaplaması
  const progressPercentage = isFinished ? 100 : ((currentStep) / STEPS.length) * 100;

  return (
    <section id="tasarla" className="py-24 md:py-32 bg-[#F9F8F6]">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Başlık Alanı */}
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-400 mb-6 font-medium block">
            Kişiselleştirme
          </span>
          <h2 className="text-4xl md:text-5xl font-extralight tracking-tighter text-zinc-900 mb-6">
            Sana Özel <span className="text-floral-primary italic font-serif">Tasarım</span>
          </h2>
          <p className="text-zinc-500 font-light text-sm md:text-base tracking-wide max-w-md mx-auto">
            Sizin için en anlamlı olanı, adım adım birlikte şekillendirelim.
          </p>
        </div>

        {/* Form Kartı - Apple Stili Havada Duran Kutu */}
        <div className="bg-white rounded-3xl md:rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-zinc-100 relative min-h-[450px] overflow-hidden flex flex-col">
          
          {/* İncecik İlerleme Çubuğu */}
          <div className="h-1 w-full bg-zinc-100 absolute top-0 left-0">
            <motion.div 
              className="h-full bg-floral-primary"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </div>

          <div className="flex-1 flex items-center justify-center p-8 md:p-16">
            
            {/* Geri Butonu */}
            {!isFinished && currentStep > 0 && (
              <button 
                onClick={handleBack}
                className="absolute top-8 left-6 md:left-10 text-[10px] uppercase tracking-[0.2em] text-zinc-400 hover:text-zinc-800 transition-colors flex items-center gap-2 group"
              >
                <span className="group-hover:-translate-x-1 transition-transform">&larr;</span> Geri
              </button>
            )}

            <AnimatePresence mode="wait">
              {!isFinished ? (
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center w-full max-w-xl"
                >
                  <span className="text-[10px] uppercase tracking-[0.3em] text-floral-primary font-medium mb-4">
                    Adım {currentStep + 1}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-light text-zinc-800 mb-10 text-center tracking-tight">
                    {STEPS[currentStep].title}
                  </h3>
                  
                  {/* Buton Grid'i - Mobilde dokunması kolay, geniş form */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 w-full">
                    {STEPS[currentStep].options.map((option) => {
                      const isSelected = selections[STEPS[currentStep].id] === option;
                      return (
                        <button
                          key={option}
                          onClick={() => handleSelect(option)}
                          className={`relative w-full py-5 px-6 rounded-2xl border transition-all duration-300 overflow-hidden group text-left flex justify-between items-center ${
                            isSelected 
                            ? "border-floral-primary bg-floral-primary/5 shadow-sm" 
                            : "border-zinc-200 bg-transparent hover:border-zinc-300 hover:bg-zinc-50"
                          }`}
                        >
                          <span className={`relative z-10 text-[13px] tracking-widest uppercase font-medium transition-colors ${isSelected ? "text-floral-primary" : "text-zinc-600"}`}>
                            {option}
                          </span>
                          
                          {/* Seçili İkonu (Sadece seçildiğinde belirir) */}
                          {isSelected && (
                            <motion.div 
                              initial={{ scale: 0 }} 
                              animate={{ scale: 1 }} 
                              className="w-2 h-2 rounded-full bg-floral-primary"
                            />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              ) : (
                /* Final Ekranı - Bilet/Özet Tasarımı */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="text-center w-full max-w-sm"
                >
                  <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-floral-primary/10 rounded-full text-floral-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-light text-zinc-900 mb-8 tracking-tight">Tasarımınız Hazır</h3>
                  
                  {/* Seçim Özeti Tablosu */}
                  <div className="bg-[#F9F8F6] rounded-2xl p-6 mb-10 text-left border border-zinc-100">
                    <div className="flex justify-between items-center border-b border-zinc-200 pb-3 mb-3">
                      <span className="text-[11px] uppercase tracking-widest text-zinc-500">Tarz</span>
                      <span className="text-[13px] font-medium text-zinc-800">{selections.style}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-zinc-200 pb-3 mb-3">
                      <span className="text-[11px] uppercase tracking-widest text-zinc-500">Renk</span>
                      <span className="text-[13px] font-medium text-zinc-800">{selections.color}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[11px] uppercase tracking-widest text-zinc-500">Boyut</span>
                      <span className="text-[13px] font-medium text-zinc-800">{selections.size}</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-5">
                    <a
                      href={`https://wa.me/905067876301?text=${encodeURIComponent(whatsappMessage)}`}
                      target="_blank"
                      className="bg-zinc-900 text-white w-full py-4 rounded-full text-[11px] uppercase tracking-widest font-medium hover:bg-zinc-800 shadow-xl shadow-zinc-900/20 transition-all text-center"
                    >
                      WhatsApp'tan Gönder
                    </a>
                    <button 
                      onClick={() => { setCurrentStep(0); setSelections({}); setIsFinished(false); }}
                      className="text-[10px] text-zinc-400 underline uppercase tracking-widest hover:text-zinc-800 transition-colors"
                    >
                      Baştan Tasarla
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}