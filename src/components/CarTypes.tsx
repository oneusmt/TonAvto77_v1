import { Car, Truck, AlertTriangle, CreditCard, Lock, Ban } from 'lucide-react';

const carTypes = [
  {
    icon: Car,
    title: 'Легковые автомобили',
    description: 'Выкупаем легковые авто любых марок и моделей',
  },
  {
    icon: Truck,
    title: 'Коммерческий транспорт',
    description: 'Микроавтобусы, грузовики, фургоны',
  },
  {
    icon: AlertTriangle,
    title: 'Битые и после ДТП',
    description: 'Авто с любыми повреждениями, не на ходу',
  },
  {
    icon: CreditCard,
    title: 'В кредите или залоге',
    description: 'Поможем закрыть кредит и оформить сделку',
  },
  {
    icon: Lock,
    title: 'С ограничениями',
    description: 'Ограничения на регистрационные действия',
  },
  {
    icon: Ban,
    title: 'С любым пробегом',
    description: 'От новых до авто с большим пробегом',
  },
];

export default function CarTypes() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Какие автомобили выкупаем
          </h2>
          <p className="text-xl text-gray-300">
            Мы работаем с любыми автомобилями
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {carTypes.map((type, index) => {
            const Icon = type.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all group hover:-translate-y-1"
              >
                <div className="bg-yellow-400 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-slate-900" />
                </div>
                <h3 className="text-xl font-bold mb-3">{type.title}</h3>
                <p className="text-gray-300 leading-relaxed">{type.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-yellow-400 text-slate-900 p-8 rounded-2xl inline-block max-w-3xl">
            <p className="text-2xl font-bold mb-2">
              Не уверены, подойдет ли ваш автомобиль?
            </p>
            <p className="text-lg mb-6">
              Позвоните нам, и мы бесплатно проконсультируем вас!
            </p>
            <a
              href="tel:+79259875454"
              className="bg-slate-900 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block hover:bg-slate-800 transition-all shadow-lg"
            >
              8 (925) 254-54-64
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
