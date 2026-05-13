import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import Image from "next/image";

const rooms = [
  {
    id: 1,
    type: "standardDouble",
    price: 55,
    guests: 2,
    image: "/images/hotel/pro-room-3.jpg",
    amenities: ["wifi", "ac", "tv", "bathroom", "safe"],
  },
  {
    id: 2,
    type: "standardDouble",
    price: 55,
    guests: 2,
    image: "/images/hotel/room-1.jpg",
    amenities: ["wifi", "ac", "tv", "bathroom", "safe"],
  },
  {
    id: 3,
    type: "standardDouble",
    price: 55,
    guests: 2,
    image: "/images/hotel/room-3.jpg",
    amenities: ["wifi", "ac", "tv", "bathroom", "safe"],
  },
  {
    id: 4,
    type: "standardTwin",
    price: 55,
    guests: 2,
    image: "/images/hotel/pro-room-1.jpg",
    amenities: ["wifi", "ac", "tv", "bathroom", "safe"],
  },
  {
    id: 5,
    type: "standardTwin",
    price: 55,
    guests: 2,
    image: "/images/hotel/room-7.jpg",
    amenities: ["wifi", "ac", "tv", "bathroom", "safe"],
  },
  {
    id: 6,
    type: "deluxeDouble",
    price: 75,
    guests: 2,
    image: "/images/hotel/pro-room-3.jpg",
    amenities: ["wifi", "ac", "tv", "minibar", "balcony", "seaView", "bathroom", "safe"],
  },
  {
    id: 7,
    type: "deluxeDouble",
    price: 75,
    guests: 2,
    image: "/images/hotel/pro-room-1.jpg",
    amenities: ["wifi", "ac", "tv", "minibar", "balcony", "seaView", "bathroom", "safe"],
  },
  {
    id: 8,
    type: "deluxeTriple",
    price: 90,
    guests: 3,
    image: "/images/hotel/pro-room-2.jpg",
    amenities: ["wifi", "ac", "tv", "minibar", "balcony", "seaView", "bathroom", "safe"],
  },
  {
    id: 9,
    type: "deluxeTriple",
    price: 90,
    guests: 3,
    image: "/images/hotel/pro-room-4.jpg",
    amenities: ["wifi", "ac", "tv", "minibar", "balcony", "seaView", "bathroom", "safe"],
  },
  {
    id: 10,
    type: "deluxeFamily",
    price: 110,
    guests: 4,
    image: "/images/hotel/pro-room-2.jpg",
    amenities: ["wifi", "ac", "tv", "minibar", "balcony", "seaView", "bathroom", "safe"],
  },
];

const amenityIcons: Record<string, string> = {
  wifi: "📶",
  ac: "❄️",
  tv: "📺",
  minibar: "🍷",
  balcony: "🌅",
  seaView: "🌊",
  safe: "🔐",
  bathroom: "🚿",
};

export default async function RoomsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <RoomsContent />;
}

function RoomsContent() {
  const t = useTranslations("rooms");

  return (
    <div className="pt-24 sm:pt-28 pb-16 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{t("title")}</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">{t("subtitle")}</p>
        </div>

        {/* Room Grid */}
        <div className="space-y-8">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="bg-dark-lighter rounded-2xl overflow-hidden border border-white/5 hover:border-gold/20 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image */}
                <div className="relative h-64 lg:h-auto lg:min-h-[320px]">
                  <Image
                    src={room.image}
                    alt={`${t(`types.${room.type}.name`)} - Room ${room.id}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-gold text-dark text-sm font-bold px-3 py-1 rounded-full">
                    Room {room.id}
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between mb-3">
                      <h2 className="text-2xl font-bold">
                        {t(`types.${room.type}.name`)}
                      </h2>
                      <div className="text-right">
                        <span className="text-gold text-2xl font-bold">€{room.price}</span>
                        <span className="text-white/40 text-sm"> {t("perNight")}</span>
                      </div>
                    </div>
                    <p className="text-white/50 leading-relaxed mb-6">
                      {t(`types.${room.type}.description`)}
                    </p>

                    {/* Amenities */}
                    <div className="flex flex-wrap gap-3 mb-6">
                      {room.amenities.map((amenity) => (
                        <span
                          key={amenity}
                          className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full text-xs text-white/60"
                        >
                          <span>{amenityIcons[amenity]}</span>
                          {t(`amenities.${amenity}`)}
                        </span>
                      ))}
                    </div>

                    <p className="text-white/40 text-sm mb-6">
                      {room.guests} {t("guests")}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={`https://wa.me/355696094960?text=${encodeURIComponent(`Hi! I'd like to book Room ${room.id} (${room.type}) at Art Hotel Vlora`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gold text-dark text-center px-6 py-3 rounded-full font-bold hover:bg-gold-dark transition-colors inline-flex items-center justify-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      {t("bookWhatsapp")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
