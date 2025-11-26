export default function About() {
  return (
    <section id="sobre" className="py-20 bg-[#fdfbf7]">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* FOTO DA FOTÓGRAFA - Link Novo */}
        <div className="order-2 md:order-1 relative">
          <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#756a5b] rounded-lg z-0"></div>
          <img 
            src="https://images.unsplash.com/photo-1554048612-387768052bf7?q=80&w=800&auto=format&fit=crop" 
            alt="Natália Figueiredo" 
            className="relative z-10 w-full h-[500px] object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Texto e Assinatura */}
        <div className="order-1 md:order-2 space-y-6">
          <h2 className="font-serif text-4xl text-[#756a5b]">Sobre a Natália</h2>
          <h3 className="text-xl font-medium text-gray-800">Fotógrafa retratista especializada em posicionamento estratégico.</h3>
          
          <p className="text-gray-600 leading-relaxed">
            Minha missão não é apenas registrar seu rosto, mas revelar a <strong className="text-[#756a5b]">força</strong> e a <strong className="text-[#756a5b]">autoridade</strong> que o seu negócio representa.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Já transformei a presença digital de mais de <strong>1.000 profissionais</strong>. Entendo a linguagem do mercado <strong className="text-[#756a5b]">B2B</strong> e traduzo isso em imagens que vendem sem você precisar dizer uma palavra.
          </p>
          
          {/* ASSINATURA - Link Novo */}
          <div className="pt-4">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Signature_of_John_F._Kennedy.svg/1200px-Signature_of_John_F._Kennedy.svg.png" 
              alt="Assinatura" 
              className="h-16 opacity-70 filter brightness-0 sepia saturate-100 hue-rotate-[20deg]"
            />
          </div>
        </div>

      </div>
    </section>
  );
}