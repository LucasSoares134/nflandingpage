import { FiCheck } from 'react-icons/fi';

export default function ValueBanner() {
  const benefits = [
    "Cores fiéis e acabamento editorial de revista.",
    "Retratos pensados para posicionar sua marca.",
    "Direção completa para quem não sabe 'posar'.",
    "Conteúdo pronto para site, LinkedIn e anúncios.",
    "Atendimento VIP para empresas de todo o Brasil."
  ];

  return (
    <section className="relative w-full py-20 bg-[#2a2a2a]">
      {/* IMAGEM DE FUNDO: Câmera fotográfica */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?q=80&w=1500&auto=format&fit=crop" 
          alt="Background Camera" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-[#756a5b]/80 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <div className="text-white">
          <h2 className="font-serif text-3xl md:text-4xl mb-6 leading-snug">
            Por que fotografar com <br/> Natália Figueiredo?
          </h2>
          <ul className="space-y-4">
            {benefits.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="bg-white/20 p-1 rounded-full mt-1"><FiCheck className="text-white" /></span>
                <span className="text-lg font-light tracking-wide">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}