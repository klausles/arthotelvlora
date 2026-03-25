"use client";

import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations("contact");

  return (
    <div className="pt-24 sm:pt-28 pb-16 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{t("title")}</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">{t("subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-dark-lighter rounded-2xl p-6 sm:p-8 border border-white/5">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const data = new FormData(form);
                const name = data.get("name");
                const email = data.get("email");
                const checkIn = data.get("checkIn");
                const checkOut = data.get("checkOut");
                const message = data.get("message");
                const whatsappMsg = encodeURIComponent(
                  `Hi! I'm ${name} (${email}).\nCheck-in: ${checkIn}\nCheck-out: ${checkOut}\n\n${message}`
                );
                window.open(`https://wa.me/35569XXXXXXX?text=${whatsappMsg}`, "_blank");
              }}
              className="space-y-5"
            >
              <div>
                <label htmlFor="name" className="block text-sm text-white/60 mb-1.5">
                  {t("form.name")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder={t("form.namePlaceholder")}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-white/60 mb-1.5">
                  {t("form.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder={t("form.emailPlaceholder")}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="checkIn" className="block text-sm text-white/60 mb-1.5">
                    {t("form.checkIn")}
                  </label>
                  <input
                    type="date"
                    id="checkIn"
                    name="checkIn"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors [color-scheme:dark]"
                  />
                </div>
                <div>
                  <label htmlFor="checkOut" className="block text-sm text-white/60 mb-1.5">
                    {t("form.checkOut")}
                  </label>
                  <input
                    type="date"
                    id="checkOut"
                    name="checkOut"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors [color-scheme:dark]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-white/60 mb-1.5">
                  {t("form.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder={t("form.messagePlaceholder")}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gold text-dark py-3.5 rounded-full font-bold text-lg hover:bg-gold-dark transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {t("form.send")} via WhatsApp
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Hotel Information */}
            <div className="bg-dark-lighter rounded-2xl p-6 sm:p-8 border border-white/5">
              <h2 className="text-xl font-bold mb-6 text-gold">{t("info.title")}</h2>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-gold text-lg shrink-0">📍</span>
                  <div>
                    <p className="font-medium">Art Hotel Vlora</p>
                    <p className="text-white/50 text-sm">{t("info.address")}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-gold text-lg shrink-0">📞</span>
                  <div>
                    <a href="tel:+35569XXXXXXX" className="hover:text-gold transition-colors">
                      {t("info.phone")}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-gold text-lg shrink-0">✉️</span>
                  <div>
                    <a href="mailto:info@arthotelvlora.com" className="hover:text-gold transition-colors">
                      {t("info.email")}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-[#25D366] text-lg shrink-0">💬</span>
                  <div>
                    <a
                      href={`https://wa.me/35569XXXXXXX?text=${encodeURIComponent("Hi! I'd like to book a room at Art Hotel Vlora")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#25D366] font-bold hover:underline"
                    >
                      {t("info.whatsapp")}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Reception Hours */}
            <div className="bg-dark-lighter rounded-2xl p-6 sm:p-8 border border-white/5">
              <h2 className="text-xl font-bold mb-4 text-gold">{t("hours.title")}</h2>
              <p className="text-white/50">{t("hours.description")}</p>
            </div>

            {/* WhatsApp Promo */}
            <div className="bg-gold/10 border border-gold/20 rounded-2xl p-6 sm:p-8 text-center">
              <div className="text-3xl mb-3">💬</div>
              <h3 className="text-xl font-bold mb-2">WhatsApp Direct</h3>
              <p className="text-white/60 text-sm mb-4">
                Book directly via WhatsApp and enjoy an exclusive 10% discount on your stay.
              </p>
              <a
                href={`https://wa.me/35569XXXXXXX?text=${encodeURIComponent("Hi! I'd like to book a room at Art Hotel Vlora")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-bold hover:bg-[#20BD5A] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {t("info.whatsapp")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
