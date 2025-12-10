import { Phone, Search, FileCheck, Wallet, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Phone,
    title: 'Оставляете заявку',
    description: 'Звоните нам или заполняете форму на сайте',
  },
  {
    icon: Search,
    title: 'Проводим оценку',
    description: 'Оцениваем ваш автомобиль по фото или при осмотре',
  },
  {
    icon: FileCheck,
    title: 'Оформляем документы',
    description: 'Заполняем договор купли-продажи и все необходимые бумаги',
  },
  {
    icon: Wallet,
    title: 'Выплачиваем деньги',
    description: 'Сразу передаем вам деньги наличными или на карту',
  },
];

export default function Process() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Как проходит выкуп
          </h2>
          <p className="text-xl text-gray-600">
            Простой и прозрачный процесс в 4 шага
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="bg-gradient-to-br from-slate-900 to-slate-700 w-20 h-20 rounded-full flex items-center justify-center shadow-lg">
                      <Icon className="w-10 h-10 text-yellow-400" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-yellow-400 text-slate-900 w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg">
                      {index + 1}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-4 text-gray-300">
                    <ArrowRight className="w-8 h-8" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-slate-900 text-white p-8 rounded-2xl inline-block">
            <p className="text-2xl font-bold mb-2">
              Весь процесс занимает всего 30 минут!
            </p>
            <p className="text-gray-300">
              От звонка до получения денег
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
