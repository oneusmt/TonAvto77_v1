import { Phone } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-yellow-400">Тон Авто</div>
            <div className="hidden sm:block text-sm text-gray-300">| Выкуп авто с 2016 года</div>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="tel:+79252545464"
              className="flex items-center space-x-2 hover:text-yellow-400 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="font-semibold text-lg">8 (925) 254-54-64</span>
            </a>
            <a
              href="#contact"
              className="hidden md:block bg-yellow-400 text-slate-900 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-all"
            >
              Оставить заявку
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
