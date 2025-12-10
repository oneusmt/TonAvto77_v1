import { Clock, DollarSign, Shield, Car, Zap, Award } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: 'Работаем 24/7',
    description: 'Круглосуточная поддержка и выкуп в любое удобное время',
  },
  {
    icon: DollarSign,
    title: 'Деньги сразу',
    description: 'Выплата наличными или переводом на карту в день сделки',
  },
  {
    icon: Zap,
    title: 'Выкуп за 30 минут',
    description: 'Быстрая оценка и оформление документов без очередей',
  },
  {
    icon: Car,
    title: 'Любой автомобиль',
    description: 'Выкупаем авто в любом состоянии: битые, кредитные, не на ходу',
  },
  {
    icon: Shield,
    title: 'Юридическая чистота',
    description: 'Все документы оформляем правильно, гарантируем безопасность сделки',
  },
  {
    icon: Award,
    title: 'Высокие цены',
    description: 'Предлагаем максимальную стоимость после объективной оценки',
  },
];

export default function Benefits() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-gray-600">
            Более 8 лет опыта и тысячи довольных клиентов
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-100 group hover:-translate-y-1"
              >
                <div className="bg-yellow-400 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-slate-900" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
