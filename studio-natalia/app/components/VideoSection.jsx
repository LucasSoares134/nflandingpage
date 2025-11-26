export default function VideoSection() {
    return (
      <section className="py-20 bg-gray-50 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl text-[#756a5b] mb-4">Entenda a profundidade do meu trabalho</h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
            Não é apenas sobre uma foto bonita. É sobre a construção estratégica da sua imagem profissional para gerar autoridade imediata.
          </p>
          
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-xl bg-gray-200">
             {/* VÍDEO NOVO ATUALIZADO */}
            <iframe 
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/OG49n5JZUBA?si=5hr-bJYGuYHXfnuv" 
              title="YouTube video player"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    );
  }