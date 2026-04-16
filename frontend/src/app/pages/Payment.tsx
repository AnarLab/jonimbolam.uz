"use client";

import { useState } from "react";
import { CreditCard, Smartphone, Building2, Check, ArrowLeft } from "lucide-react";
import Link from "next/link";

export function Payment() {
  const [selectedMethod, setSelectedMethod] = useState<string>("card");
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
    amount: "",
    service: "",
    phone: "",
  });
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const paymentMethods = [
    {
      id: "card",
      name: "Bank kartasi",
      icon: <CreditCard className="w-6 h-6" />,
      description: "Visa, Mastercard, UzCard",
    },
    {
      id: "payme",
      name: "Payme",
      icon: <Smartphone className="w-6 h-6" />,
      description: "Mobil to'lov tizimi",
    },
    {
      id: "click",
      name: "Click",
      icon: <Smartphone className="w-6 h-6" />,
      description: "Mobil to'lov tizimi",
    },
    {
      id: "bank",
      name: "Bank o'tkazmasi",
      icon: <Building2 className="w-6 h-6" />,
      description: "To'g'ridan-to'g'ri bank orqali",
    },
  ];

  const services = [
    { name: "Pediatriya ko'rigi", price: "150,000" },
    { name: "Terapiya ko'rigi", price: "120,000" },
    { name: "Kardiologiya ko'rigi", price: "200,000" },
    { name: "Laboratoriya tahlillari", price: "100,000" },
    { name: "EKG tekshiruvi", price: "80,000" },
    { name: "Ultrasonografiya", price: "150,000" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate payment processing
    setTimeout(() => {
      setPaymentSuccess(true);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (paymentSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold mb-4">To'lov muvaffaqiyatli!</h2>
          <p className="text-gray-600 mb-8">
            Sizning to'lovingiz qabul qilindi. Tez orada siz bilan bog'lanamiz.
          </p>
          <div className="space-y-3">
            <Link
              href="/"
              className="block bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
            >
              Bosh sahifaga qaytish
            </Link>
            <Link
              href="/contact"
              className="block border-2 border-teal-600 text-teal-600 px-6 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors"
            >
              Qabulga yozilish
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-teal-100 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Xizmatlarga qaytish
          </Link>
          <h1 className="text-5xl font-bold mb-6">Onlayn to'lov</h1>
          <p className="text-xl text-teal-100 max-w-3xl">
            Xizmatlar uchun qulay va xavfsiz onlayn to'lov
          </p>
        </div>
      </section>

      {/* Payment Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Payment Method Selection */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">To'lov usulini tanlang</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {paymentMethods.map((method) => (
                    <button
                      key={method.id}
                      onClick={() => setSelectedMethod(method.id)}
                      className={`p-4 border-2 rounded-lg text-left transition-colors ${
                        selectedMethod === method.id
                          ? "border-teal-600 bg-teal-50"
                          : "border-gray-200 hover:border-teal-300"
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div
                          className={`${
                            selectedMethod === method.id ? "text-teal-600" : "text-gray-600"
                          }`}
                        >
                          {method.icon}
                        </div>
                        <h3 className="font-semibold">{method.name}</h3>
                      </div>
                      <p className="text-sm text-gray-600">{method.description}</p>
                    </button>
                  ))}
                </div>

                {/* Payment Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Xizmat turi *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none"
                    >
                      <option value="">Xizmatni tanlang</option>
                      {services.map((service, index) => (
                        <option key={index} value={service.name}>
                          {service.name} - {service.price} so'm
                        </option>
                      ))}
                    </select>
                  </div>

                  {selectedMethod === "card" && (
                    <>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Karta raqami *
                        </label>
                        <input
                          type="text"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleChange}
                          placeholder="0000 0000 0000 0000"
                          maxLength={19}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Karta egasining ismi *
                        </label>
                        <input
                          type="text"
                          name="cardName"
                          value={formData.cardName}
                          onChange={handleChange}
                          placeholder="JOHN DOE"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Amal qilish muddati *
                          </label>
                          <input
                            type="text"
                            name="expiryDate"
                            value={formData.expiryDate}
                            onChange={handleChange}
                            placeholder="MM/YY"
                            maxLength={5}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            CVV *
                          </label>
                          <input
                            type="text"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleChange}
                            placeholder="123"
                            maxLength={3}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none"
                          />
                        </div>
                      </div>
                    </>
                  )}

                  {(selectedMethod === "payme" || selectedMethod === "click") && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Telefon raqami *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+998 90 123 45 67"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none"
                      />
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full bg-teal-600 text-white py-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <CreditCard className="w-5 h-5" />
                    To'lovni amalga oshirish
                  </button>
                </form>
              </div>
            </div>

            {/* Summary */}
            <div>
              <div className="bg-white rounded-lg shadow-lg p-8 sticky top-24">
                <h3 className="text-xl font-bold mb-6">To'lov ma'lumotlari</h3>
                <div className="space-y-4 mb-6 pb-6 border-b">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Xizmat</span>
                    <span className="font-medium">
                      {formData.service || "Tanlanmagan"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">To'lov usuli</span>
                    <span className="font-medium">
                      {paymentMethods.find((m) => m.id === selectedMethod)?.name}
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-center text-xl font-bold mb-6">
                  <span>Jami</span>
                  <span className="text-teal-600">
                    {services.find((s) => s.name === formData.service)?.price || "0"} so'm
                  </span>
                </div>
                <div className="bg-teal-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Eslatma:</strong> To'lov xavfsiz tarzda amalga oshiriladi. Sizning
                    karta ma'lumotlaringiz shifrlangan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nima uchun onlayn to'lov?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Tez va qulay</h3>
              <p className="text-gray-600">
                Navbatsiz va bir necha daqiqada to'lovni amalga oshiring
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Xavfsiz</h3>
              <p className="text-gray-600">
                Barcha to'lovlar shifrlangan va himoyalangan
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Har qanday vaqtda</h3>
              <p className="text-gray-600">
                24/7 istalgan vaqtda to'lov qilish imkoniyati
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
