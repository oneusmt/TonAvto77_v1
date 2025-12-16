import { Clock, CheckCircle } from 'lucide-react';
import LeadForm from './LeadForm';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block bg-yellow-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold">
              Работаем более 8 лет
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Срочный выкуп автомобилей в Москве и области
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed">
              Оценка и выплата за 30 минут. Работаем 24/7
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                <span className="text-lg">Приезд оценщика бесплатно</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                <span className="text-lg">Деньги сразу наличными или на карту</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                <span className="text-lg">Выкуп любого авто за 30 минут</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact"
                className="bg-yellow-400 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Узнать стоимость авто
              </a>
              
            </div>
          </div>

          <div className="lg:block">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20">
              <h3 className="text-2xl font-bold mb-6 text-center">Оставьте заявку на оценку</h3>
              <LeadForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
