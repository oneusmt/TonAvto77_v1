import LeadForm from './LeadForm';

export default function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Хотите узнать стоимость своего авто?
          </h2>
          <p className="text-xl text-gray-300">
            Оставьте заявку — перезвоним за 5 минут и назовем точную цену
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20">
          <LeadForm />
        </div>

        <div className="mt-12 text-center">
          <div className="grid sm:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">8+</div>
              <div className="text-gray-300">лет опыта</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">2500+</div>
              <div className="text-gray-300">выкупленных авто</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">30 мин</div>
              <div className="text-gray-300">средняя сделка</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
