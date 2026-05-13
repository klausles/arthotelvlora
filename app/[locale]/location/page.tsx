import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

export default async function LocationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <LocationContent />;
}

function LocationContent() {
  const t = useTranslations("location");

  return (
    <div className="pt-24 sm:pt-28 pb-16 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{t("title")}</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">{t("subtitle")}</p>
        </div>

        {/* Map */}
        <div className="rounded-2xl overflow-hidden border border-white/10 mb-14 h-[400px] sm:h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.5!2d19.4908!3d40.4685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135a3d3a8a5f8b7d%3A0x1!2sRruga+Sadik+Zotaj%2C+Vlor%C3%AB!5e0!3m2!1sen!2sal!4v1!5m2!1sen!2sal"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Art Hotel Vlora Location"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* How to Get Here */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gold">{t("howToGetHere")}</h2>

            <div className="space-y-6">
              <div className="bg-dark-lighter rounded-xl p-6 border border-white/5">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <span className="text-gold">✈️</span> {t("fromAirport")}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {t("fromAirportDesc")}
                </p>
              </div>

              <div className="bg-dark-lighter rounded-xl p-6 border border-white/5">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <span className="text-gold">🚌</span> {t("fromBus")}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {t("fromBusDesc")}
                </p>
              </div>
            </div>
          </div>

          {/* Nearby Attractions */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gold">{t("nearby")}</h2>

            <div className="space-y-4">
              {(["beach", "promenade", "oldTown", "museum", "karaburun"] as const).map(
                (attraction) => (
                  <div
                    key={attraction}
                    className="flex items-center gap-4 bg-dark-lighter rounded-xl p-4 border border-white/5"
                  >
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                      {attraction === "beach" && "🏖️"}
                      {attraction === "promenade" && "🚶"}
                      {attraction === "oldTown" && "🏛️"}
                      {attraction === "museum" && "🏛️"}
                      {attraction === "karaburun" && "⛵"}
                    </div>
                    <span className="text-white/70 text-sm">
                      {t(`attractions.${attraction}`)}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Address Card */}
        <div className="mt-14 bg-gold/10 border border-gold/20 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold mb-2">Art Hotel Vlora</h3>
          <p className="text-white/60 mb-4">{t("address")}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
            <a href="tel:+355696094960" className="text-gold hover:underline">
              +355 69 609 4960
            </a>
            <span className="hidden sm:inline text-white/20">|</span>
            <a href="mailto:info@arthotelvlora.com" className="text-gold hover:underline">
              info@arthotelvlora.com
            </a>
            <span className="hidden sm:inline text-white/20">|</span>
            <a
              href={`https://wa.me/355696094960?text=${encodeURIComponent("Hi! I'd like to book a room at Art Hotel Vlora")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#25D366] font-bold hover:underline"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
