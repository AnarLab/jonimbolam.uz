"use client";

import { useEffect, useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { apiGet, apiPost } from "../../lib/api";

export function Contact() {
  const [settings, setSettings] = useState<{
    contact_hero_title?: string
    contact_hero_subtitle?: string
    phone_primary: string
    phone_secondary: string
    email_primary: string
    email_secondary: string
    address_line1: string
    address_line2: string
    working_hours_line1: string
    working_hours_line2: string
    working_hours_line3: string
    emergency_title?: string
    emergency_subtitle?: string
    emergency_phone?: string
  } | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  useEffect(() => {
    let cancelled = false;
    void (async () => {
      try {
        const s = await apiGet<{
          contact_hero_title?: string
          contact_hero_subtitle?: string
          phone_primary: string
          phone_secondary: string
          email_primary: string
          email_secondary: string
          address_line1: string
          address_line2: string
          working_hours_line1: string
          working_hours_line2: string
          working_hours_line3: string
          emergency_title?: string
          emergency_subtitle?: string
          emergency_phone?: string
        }>("/api/pages/settings/");
        if (!cancelled) setSettings(s);
      } catch {
        // keep hardcoded fallback
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const extra = [
        formData.service ? `Xizmat: ${formData.service}` : "",
        formData.date ? `Sana: ${formData.date}` : "",
      ]
        .filter(Boolean)
        .join("\n");

      await apiPost<{ ok: boolean }>("/api/forms/contact/", {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        message: [extra, formData.message].filter(Boolean).join("\n\n"),
      });

      setStatus("success");
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        date: "",
        message: "",
      });
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">{settings?.contact_hero_title || "Biz bilan bog'laning"}</h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            {settings?.contact_hero_subtitle ||
              "Savollaringiz bormi yoki qabulga yozilmoqchimisiz? Biz yordam berishga tayyormiz!"}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Aloqa ma'lumotlari</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Telefon</h3>
                    <p className="text-gray-600">{settings?.phone_primary || "+998 90 123 45 67"}</p>
                    <p className="text-gray-600">{settings?.phone_secondary || "+998 71 123 45 67"}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">{settings?.email_primary || "info@jonimbolam.uz"}</p>
                    <p className="text-gray-600">{settings?.email_secondary || "reception@jonimbolam.uz"}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Manzil</h3>
                    <p className="text-gray-600">
                      {settings?.address_line1 || "O'zbekiston Respublikasi, Toshkent shahri"}
                      <br />
                      {settings?.address_line2 || "Amir Temur ko'chasi, 108-uy"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Ish vaqti</h3>
                    <p className="text-gray-600">
                      {settings?.working_hours_line1 || "Dushanba - Juma: 08:00 - 20:00"}
                    </p>
                    <p className="text-gray-600">{settings?.working_hours_line2 || "Shanba: 09:00 - 18:00"}</p>
                    <p className="text-gray-600">{settings?.working_hours_line3 || "Yakshanba: 09:00 - 15:00"}</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8">
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin className="w-12 h-12 mx-auto mb-2" />
                    <p>Xarita</p>
                    <p className="text-sm">Amir Temur ko'chasi, 108</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Appointment Form */}
            <div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6">Qabulga yozilish</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {status === "success" ? (
                    <div className="rounded-lg bg-emerald-50 text-emerald-700 px-4 py-3">
                      Rahmat! Tez orada siz bilan bog'lanamiz.
                    </div>
                  ) : null}
                  {status === "error" ? (
                    <div className="rounded-lg bg-red-50 text-red-700 px-4 py-3">
                      Xatolik yuz berdi. Iltimos, keyinroq qayta urinib ko'ring.
                    </div>
                  ) : null}

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      To'liq ismingiz *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none"
                      placeholder="Ismingizni kiriting"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon raqami *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none"
                      placeholder="+998 90 123 45 67"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none"
                      placeholder="email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Xizmat turi *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none"
                    >
                      <option value="">Xizmatni tanlang</option>
                      <option value="pediatriya">Pediatriya</option>
                      <option value="terapiya">Terapiya</option>
                      <option value="kardiologiya">Kardiologiya</option>
                      <option value="laboratoriya">Laboratoriya</option>
                      <option value="endokrinologiya">Endokrinologiya</option>
                      <option value="oftalmologiya">Oftalmologiya</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Kerakli sana *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Qo'shimcha ma'lumot
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none resize-none"
                      placeholder="Shikoyatlaringiz yoki savollaringizni yozing"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    <Send className="w-5 h-5" />
                    {status === "submitting" ? "Yuborilmoqda..." : "Yuborish"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{settings?.emergency_title || "Shoshilinch yordam kerakmi?"}</h2>
          <p className="text-xl mb-6">{settings?.emergency_subtitle || "24/7 tez tibbiy yordam xizmati"}</p>
          <a
            href={`tel:${(settings?.emergency_phone || "+998901234567").replace(/\s+/g, "")}`}
            className="inline-flex items-center gap-2 bg-white text-red-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red-50 transition-colors"
          >
            <Phone className="w-6 h-6" />
            {settings?.emergency_phone || "+998 90 123 45 67"}
          </a>
        </div>
      </section>
    </div>
  );
}
