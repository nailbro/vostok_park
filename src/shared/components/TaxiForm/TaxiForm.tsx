"use client";
import { useState } from "react";
import styles from "./form.module.scss";
import { useLanguage } from "@/features/context/LanguageContext";

export default function TaxiForm() {
  const { lang } = useLanguage();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    direction: "",
    agree: false,
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [requestId, setRequestId] = useState<string | null>(null);

  const validateName = (name: string) => /^[А-Яа-яЁё\sA-Za-z]{2,}$/.test(name.trim());
  const validatePhone = (phone: string) => /^\+996\d{9}$/.test(phone.trim());

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("");
    setRequestId(null);

    if (!validateName(form.name)) {
      setStatus("⚠️ Введите корректное ФИО (только буквы и пробелы)");
      return;
    }

    if (!validatePhone(form.phone)) {
      setStatus("⚠️ Номер телефона должен начинаться с +996 и содержать 9 цифр после кода");
      return;
    }

    if (!form.direction) {
      setStatus("⚠️ Выберите направление");
      return;
    }

    if (!form.agree) {
      setStatus("⚠️ Подтвердите согласие с условиями");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/sendForm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.ok) {
        setStatus("✅ Заявка успешно отправлена!");
        setRequestId(data.id);
        setForm({ name: "", phone: "", direction: "", agree: false });
      } else {
        setStatus(`❌ Ошибка: ${data.error || "Не удалось отправить"}`);
      }
    } catch {
      setStatus("⚠️ Ошибка соединения с сервером");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.section}>
      <div className={styles.content}>
        <div className={styles.left}>
          <h2 className={styles.title}>
            {lang === "ru" ? "Стань водителем такси в Кыргызстане" : "Кыргызстанда такси айдоочусу бол"}
          </h2>
          <p className={styles.subtitle}>
            {lang === "ru"
              ? "*обязательные поля для заполнения"
              : "*толукталуучу милдеттүү талаалар"}
          </p>

          <form onSubmit={handleSubmit} className={styles.form}>
            <label className={styles.label}>
              {lang === "ru" ? "*ФИО" : "*АТЫ ЖӨНҮ"}
              <input
                type="text"
                placeholder={
                  lang === "ru"
                    ? "Введите вашу фамилию, имя и отчество"
                    : "Фамилияңызды, атыңызды киргизиңиз"
                }
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className={styles.input}
              />
            </label>

            <div className={styles.row}>
              <label className={styles.label}>
                {lang === "ru" ? "*Номер телефона" : "*Телефон номери"}
                <input
                  type="tel"
                  placeholder="+996(500)500-500"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  required
                  className={styles.input}
                />
              </label>

              <label className={styles.label}>
                {lang === "ru" ? "*Выберите направление" : "*Багытты тандаңыз"}
                <select
                  value={form.direction}
                  onChange={(e) => setForm({ ...form, direction: e.target.value })}
                  required
                  className={styles.select}
                >
                  <option value="">
                    {lang === "ru" ? "Такси или доставка" : "Такси же жеткирүү"}
                  </option>
                  <option value="Такси">Такси</option>
                  <option value="Доставка">
                    {lang === "ru" ? "Доставка" : "Жеткирүү"}
                  </option>
                </select>
              </label>
            </div>

            <label className={styles.checkbox}>
              <input
                type="checkbox"
                checked={form.agree}
                onChange={(e) => setForm({ ...form, agree: e.target.checked })}
              />
              <span>
                {lang === "ru" ? "Я соглашаюсь с" : "Пайдалануу шарттарына"}{" "}
                <a href="#" className={styles.link}>
                  {lang === "ru"
                    ? "условиями использования"
                    : "мен макулмун"}
                </a>
              </span>
            </label>

            <button type="submit" className={styles.button} disabled={loading}>
              {loading
                ? "Отправка..."
                : lang === "ru"
                ? "Отправить заявку"
                : "Өтүнмөнү жиберүү"}
            </button>

            {status && <p className={styles.status}>{status}</p>}
            {requestId && (
              <p className={styles.idText}>
                📦 Номер вашей заявки: <b>{requestId}</b>
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
