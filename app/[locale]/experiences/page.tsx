import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

const activities = [
  { key: "quad", icon: "M9 17a2 2 0 11-4 0 2 2 0 014 0zm10 0a2 2 0 11-4 0 2 2 0 014 0zM13 6V4L8 2v2L3 6v5h2v4l4-2 4 2v-4h2V6h-2z" },
  { key: "boat", icon: "M3 17h1l3-3h10l3 3h1v2H3v-2zm2-5l2-6h10l2 6H5zm4-4h6" },
  { key: "car", icon: "M16 6l2 4h1a2 2 0 012 2v3a1 1 0 01-1 1h-1a2 2 0 11-4 0H9a2 2 0 11-4 0H4a1 1 0 01-1-1v-3a2 2 0 012-2h1l2-4h8z" },
  { key: "tours", icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" },
  { key: "scooter", icon: "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" },
  { key: "diving", icon: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" },
];

export default async function ExperiencesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ExperiencesContent />;
}

function ExperiencesContent() {
  const t = useTranslations("experiences");

  return (
    <div className="pt-24 sm:pt-28 pb-16 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{t("title")}</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">{t("subtitle")}</p>
        </div>

        {/* Partner Discount Banner */}
        <div className="bg-gold/10 border border-gold/20 rounded-2xl p-8 mb-14 text-center">
          <h2 className="text-2xl font-bold mb-3 text-gold">Exclusive Guest Discounts</h2>
          <p className="text-white/60 max-w-xl mx-auto">
            As our guest, you enjoy special partner rates on all activities and dining.
            Just ask at reception or message us on WhatsApp to arrange anything.
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {activities.map((activity) => (
            <div
              key={activity.key}
              className="bg-dark-lighter rounded-2xl p-6 border border-white/5 hover:border-gold/20 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={activity.icon} />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">{t(`items.${activity.key}.name`)}</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-4">
                {t(`items.${activity.key}.description`)}
              </p>
              <a
                href={`https://wa.me/35569XXXXXXX?text=${encodeURIComponent(`Hi! I'm interested in ${t(`items.${activity.key}.name`)} at Art Hotel Vlora`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold text-sm font-bold hover:underline inline-flex items-center gap-2"
              >
                {t("cta")} &rarr;
              </a>
            </div>
          ))}
        </div>

        {/* Fine Dining Section */}
        <div className="bg-dark-lighter rounded-2xl overflow-hidden border border-white/5">
          <div className="p-8 sm:p-12">
            <div className="max-w-2xl">
              <div className="text-gold text-sm font-bold uppercase tracking-widest mb-3">
                Partner Restaurants
              </div>
              <h2 className="text-3xl font-bold mb-4">{t("dining.title")}</h2>
              <p className="text-white/50 leading-relaxed mb-6">
                {t("dining.description")}
              </p>
              <div className="space-y-3 text-white/40 text-sm mb-8">
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                  Seafood restaurants on the promenade
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                  Traditional Albanian cuisine
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                  Rooftop bars and lounges
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                  Exclusive guest pricing
                </div>
              </div>
              <a
                href={`https://wa.me/35569XXXXXXX?text=${encodeURIComponent("Hi! I'd like to make a restaurant reservation through Art Hotel Vlora")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gold text-dark px-6 py-3 rounded-full font-bold hover:bg-gold-dark transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Reserve a Table
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
