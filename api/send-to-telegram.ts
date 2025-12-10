export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests allowed' });
  }

  const { name, phone, carBrand } = req.body;

  const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

  const text = `
🚗 *Новая заявка*

*Имя:* ${name}
*Телефон:* ${phone}
*Авто:* ${carBrand}
  `;

  const url = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text,
      parse_mode: "Markdown",
    }),
  });

  if (!response.ok) {
    return res.status(500).json({ message: "Ошибка отправки" });
  }

  return res.status(200).json({ message: "Success" });
}
