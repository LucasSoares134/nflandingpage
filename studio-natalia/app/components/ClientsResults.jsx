export default function ClientsResults() {
  const clients = [
    { name: "Mariana Silva", role: "Advogada", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&h=400&auto=format&fit=crop", quote: "Minha presença nas redes se tornou inesquecível." },
    { name: "Dr. Carlos Mendes", role: "Neurocirurgião", img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=400&h=400&auto=format&fit=crop", quote: "Atraio pacientes que valorizam meu diferencial." },
    { name: "Sofia Albuquerque", role: "Mentora", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&h=400&auto=format&fit=crop", quote: "Minha imagem comunica o valor do meu ticket." },
    { name: "Ricardo Gomes", role: "CEO Tech", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=400&auto=format&fit=crop", quote: "Posicionamento visual que acompanha meu nível." },
  ];

  return (
    <section id="clientes" className="py-20 bg-[#fdfbf7]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl text-[#756a5b] mb-12 text-center">Resultados Reais</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clients.map((client, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition">
              <img src={client.img} alt={client.name} className="w-full h-64 object-cover rounded mb-4 filter sepia-[.20]" />
              <h3 className="font-serif text-lg font-bold text-gray-800">{client.name}</h3>
              <p className="text-xs text-[#756a5b] uppercase tracking-wider mb-3">{client.role}</p>
              <p className="text-gray-600 text-sm italic">"{client.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}