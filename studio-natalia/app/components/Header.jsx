'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Clientes', href: '#clientes' },
    { name: 'Depoimentos', href: '#depoimentos' },
  ];

  return (
    <header className="w-full z-50 fixed top-0 left-0 transition-all duration-300">
      {/* Top Bar - Faixa Marrom */}
      <div className="bg-[#756a5b] text-white text-xs md:text-sm py-2 px-4 text-center flex justify-between items-center">
        <p className="w-full text-center md:text-left font-medium tracking-wide">
          Retratos estratégicos para posicionar sua marca com autoridade.
        </p>
        <Link 
          href="#contato" 
          className="hidden md:inline-block bg-white/10 hover:bg-white/20 px-3 py-1 rounded transition text-xs uppercase tracking-wider"
        >
          Fale com a fotógrafa
        </Link>
      </div>

      {/* Main Header - Menu Principal */}
      <div className={`w-full transition-all duration-300 ${isScrolled ? 'bg-[#fdfbf7]/95 backdrop-blur-md shadow-md py-2' : 'bg-[#fdfbf7] py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          
          {/* LOGO da Cliente (Texto por enquanto) */}
          <Link href="/" className="font-serif text-2xl md:text-3xl font-bold text-[#756a5b] tracking-tight hover:opacity-80 transition">
            Natália Figueiredo
          </Link>

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-gray-600 hover:text-[#756a5b] font-medium text-sm uppercase tracking-widest transition">
                {link.name}
              </Link>
            ))}
            <Link href="#contato" className="bg-[#756a5b] text-white px-5 py-2 rounded-sm text-sm uppercase tracking-widest hover:bg-[#5e5448] transition shadow-lg">
              Contato
            </Link>
          </nav>

          {/* Botão Mobile */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-[#756a5b] text-2xl">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Menu Mobile (Abre ao clicar) */}
      {isOpen && (
        <div className="md:hidden bg-[#fdfbf7] border-t border-gray-100 absolute w-full h-screen flex flex-col items-center py-10 space-y-6 shadow-xl">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-xl font-serif text-[#756a5b]">
              {link.name}
            </Link>
          ))}
          <Link href="#contato" onClick={() => setIsOpen(false)} className="bg-[#756a5b] text-white px-8 py-3 rounded text-lg uppercase tracking-widest">
            Contato
          </Link>
        </div>
      )}
    </header>
  );
}