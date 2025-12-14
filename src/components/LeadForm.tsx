import { useState } from 'react';
import { Send } from 'lucide-react';

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    carBrand: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
    const res = await fetch("/api/send-to-telegram", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
    });


      if (!res.ok) throw new Error("Ошибка");

      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', phone: '', carBrand: '' });
      }, 3000);
    } catch (error) {
      alert("Ошибка отправки!");
    }

    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="text-green-400 text-xl font-semibold mb-2">
          Заявка отправлена!
        </div>
        <p className="text-gray-300">
          Мы свяжемся с вами в ближайшее время
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          name="name"
          placeholder="Ваше имя"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
        />
      </div>

      <div>
        <input
          type="tel"
          name="phone"
          placeholder="Телефон"
          required
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
        />
      </div>

      <div>
        <input
          type="text"
          name="carBrand"
          placeholder="Марка и модель авто"
          required
          value={formData.carBrand}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-yellow-400 text-slate-900 px-6 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
      >
        <span>{isSubmitting ? 'Отправка...' : 'Отправить заявку'}</span>
        <Send className="w-5 h-5" />
      </button>

      <p className="text-xs text-gray-400 text-center">
        Нажимая кнопку, вы соглашаетесь на обработку персональных данных
      </p>
    </form>
  );
}
