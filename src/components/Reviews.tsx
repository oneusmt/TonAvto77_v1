import { Star, User } from 'lucide-react';

const reviews = [
  {
    name: 'Алексей М.',
    car: 'Toyota Camry 2015',
    text: 'Продал машину после ДТП. Приехали быстро, оценили адекватно. Деньги получил в тот же день. Очень доволен!',
    rating: 5,
  },
  {
    name: 'Мария К.',
    car: 'Hyundai Solaris 2018',
    text: 'Нужно было срочно продать авто. Позвонила утром, к обеду уже все оформили. Цена устроила, спасибо большое!',
    rating: 5,
  },
  {
    name: 'Дмитрий П.',
    car: 'BMW X5 2012',
    text: 'Машина была в кредите. Ребята помогли закрыть кредит и оформить сделку. Всё прошло легко и быстро.',
    rating: 5,
  },
  {
    name: 'Ольга С.',
    car: 'Volkswagen Polo 2016',
    text: 'Первый раз продавала авто через выкуп. Очень переживала, но все прошло отлично. Оценщик все подробно объяснил.',
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Отзывы наших клиентов
          </h2>
          <p className="text-xl text-gray-600">
            Нам доверяют сотни автовладельцев в Москве
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className="bg-slate-900 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <User className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">{review.name}</div>
                  <div className="text-sm text-gray-600">{review.car}</div>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
