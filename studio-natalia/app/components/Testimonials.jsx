export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="font-serif text-3xl text-center text-[#756a5b] mb-12">O que os clientes dizem</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
            <p className="text-gray-600 italic mb-6">"A Natália tem um olhar clínico. Eu odiava tirar fotos, mas ela me dirigiu de uma forma que me senti uma modelo profissional."</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
              <div><p className="font-bold text-gray-800">Ana Clara</p><p className="text-sm text-gray-500">Arquiteta</p></div>
            </div>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
            <p className="text-gray-600 italic mb-6">"Investimento que se paga na primeira semana. A percepção de valor da minha consultoria mudou da água para o vinho."</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
              <div><p className="font-bold text-gray-800">Roberto Dias</p><p className="text-sm text-gray-500">Consultor Financeiro</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}