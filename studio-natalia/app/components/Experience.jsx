import { FiCamera, FiLayout, FiUserCheck, FiStar } from 'react-icons/fi';

export default function Experience() {
  const steps = [
    { icon: <FiUserCheck size={32}/>, title: "Consultoria de Imagem", desc: "Análise estratégica de arquétipos e looks." },
    { icon: <FiStar size={32}/>, title: "Produção Completa", desc: "Styling, acessórios e equipe de beleza inclusa." },
    { icon: <FiCamera size={32}/>, title: "Direção Fotográfica", desc: "Guio cada movimento para passar segurança." },
    { icon: <FiLayout size={32}/>, title: "Entrega Pronta", desc: "Galeria editada e pronta para suas redes e site." },
  ];

  return (
    <section id="experiencia" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-[#756a5b] mb-4">
          Mais do que um ensaio. <br/> Uma experiência estratégica.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {steps.map((step, idx) => (
            <div key={idx} className="p-8 border border-gray-100 rounded-xl hover:shadow-xl transition duration-300 group">
              <div className="w-16 h-16 mx-auto bg-[#fdfbf7] rounded-full flex items-center justify-center text-[#756a5b] mb-4 group-hover:bg-[#756a5b] group-hover:text-white transition">
                {step.icon}
              </div>
              <h3 className="font-serif text-xl mb-2 text-gray-800">{step.title}</h3>
              <p className="text-sm text-gray-500">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}