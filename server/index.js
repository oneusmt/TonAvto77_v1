import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.post("/api/send-to-telegram", async (req, res) => {
  const { name, phone, carBrand } = req.body;

  if (!name || !phone || !carBrand) {
    return res.status(400).json({ message: "Missing fields" });
  }

  const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

  const text = `
🚗 *Новая заявка*
*Имя:* ${name}
*Телефон:* ${phone}
*Авто:* ${carBrand}
  `;

  const url = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  try {
    const tgRes = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text,
        parse_mode: "Markdown",
      }),
    });

    if (!tgRes.ok) throw new Error("Telegram error");

    res.json({ message: "ok" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
