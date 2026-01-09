import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react';

export default function Contacts() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Контакты
          </h2>
          <p className="text-xl text-gray-600">
            Свяжитесь с нами любым удобным способом
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="text-center p-6 bg-gray-50 rounded-2xl">
            <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-slate-900" />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Телефон</h3>
            <a href="tel:+79259875454" className="text-lg text-gray-700 hover:text-slate-900">
              8 (925) 925-54-64
            </a>
          </div>

          <div className="text-center p-6 bg-gray-50 rounded-2xl">
            <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-slate-900" />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Max</h3>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-700 hover:text-slate-900"
            >
              8 (925) 925-54-64
            </a>
          </div>

          <div className="text-center p-6 bg-gray-50 rounded-2xl">
            <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-slate-900" />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Зона работы</h3>
            <p className="text-lg text-gray-700">Москва и МО</p>
          </div>

          <div className="text-center p-6 bg-gray-50 rounded-2xl">
            <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-slate-900" />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Режим работы</h3>
            <p className="text-lg text-gray-700">24 / 7</p>
          </div>
        </div>

        <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=37.617700%2C55.755826&z=10&l=map"
            width="100%"
            height="450"
            frameBorder="0"
            allowFullScreen
            className="w-full"
            title="Карта Москвы"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
