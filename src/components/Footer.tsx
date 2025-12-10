import { Phone, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">Тон Авто</h3>
            <p className="text-gray-300 leading-relaxed">
              Срочный выкуп автомобилей в Москве и Московской области. Работаем с 2016 года.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Контакты</h4>
            <div className="space-y-3">
              <a
                href="tel:+79259875454"
                className="flex items-center space-x-2 text-gray-300 hover:text-yellow-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>8 (925) 987-54-54</span>
              </a>
              <a
                href="https://wa.me/79259875454"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-yellow-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Режим работы</h4>
            <p className="text-gray-300">Круглосуточно, 24/7</p>
            <p className="text-gray-300 mt-2">Москва и Московская область</p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Тон Авто. Все права защищены.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            ИП Иванов А.С. | ИНН: 123456789012
          </p>
        </div>
      </div>
    </footer>
  );
}
