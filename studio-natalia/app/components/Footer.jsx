import { FiInstagram, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex justify-center gap-6 mb-8">
            <FiInstagram size={24} className="hover:text-[#756a5b] cursor-pointer"/>
            <FiLinkedin size={24} className="hover:text-[#756a5b] cursor-pointer"/>
            <FiMail size={24} className="hover:text-[#756a5b] cursor-pointer"/>
        </div>
        <p className="text-gray-500 text-xs">© 2024 Natália Figueiredo Fotografia. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}