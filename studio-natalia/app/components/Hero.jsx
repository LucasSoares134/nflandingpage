'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function Hero() {
  // IMAGENS: URLs reais do Unsplash
  const images = [
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop", // Executiva
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1200&auto=format&fit=crop", // Executivo
    "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop", // Reunião Criativa
  ];

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 bg-[#fdfbf7] overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Texto Promocional */}
        <div className="space-y-6 md:pr-8">
          <span className="inline-block px-3 py-1 bg-[#756a5b]/10 text-[#756a5b] text-xs font-bold uppercase tracking-widest rounded-full">
            Retratos para Negócios
          </span>
          <h1 className="font-serif text-4xl md:text-6xl text-gray-900 leading-tight">
            O visual é a <span className="italic text-[#756a5b]">vida</span> do seu negócio.
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Retratos estratégicos que posicionam sua marca pessoal com autoridade, elegância e valor no mercado B2B.
          </p>
          <blockquote className="border-l-4 border-[#756a5b] pl-4 italic text-gray-500 font-serif text-xl my-6">
            “A forma como te veem define o espaço que você ocupa na mente dos seus clientes.”
          </blockquote>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="#contato" className="bg-[#756a5b] text-white px-8 py-4 rounded shadow-lg hover:bg-[#5e5448] transition text-center uppercase tracking-widest font-medium">
              Quero meu ensaio
            </Link>
            <Link href="#portfolio" className="border border-[#756a5b] text-[#756a5b] px-8 py-4 rounded hover:bg-[#756a5b] hover:text-white transition text-center uppercase tracking-widest font-medium">
              Ver portfólio
            </Link>
          </div>
        </div>

        {/* Carrossel Swiper */}
        <div className="relative w-full h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
          <Swiper
            modules={[Pagination, Autoplay, EffectFade]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            effect="fade"
            loop={true}
            className="w-full h-full"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <img src={src} alt={`Slide ${index}`} className="w-full h-full object-cover" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}