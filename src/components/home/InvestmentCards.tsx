import { MapPin } from "lucide-react";

export interface InvestmentCardData {
  id: number;
  image: string;
  location: string;
  title: string;
  yield: string;
  price: string;
  roi: string;
}

interface InvestmentCardProps {
  property: InvestmentCardData;
}

function InvestmentCard({ property }: InvestmentCardProps) {
  return (
    <article className="w-[280px] shrink-0 rounded-xl border border-white/10 bg-[#0d0f12] p-2 text-white xs:w-[310px] sm:w-[323px]">
      <div className="h-[170px] overflow-hidden rounded-lg xs:h-[190px] sm:h-[210px]">
        <img
          src={property.image}
          alt={property.title}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="p-3 sm:p-4">
        <div className="mb-1.5 flex items-center gap-1 text-xs text-[#4e9ddd] sm:text-sm">
          <MapPin size={14} className="shrink-0" />
          <span className="truncate">{property.location}</span>
        </div>

        <h3 className="mb-3 line-clamp-1 text-base font-semibold sm:mb-4 sm:text-lg">
          {property.title}
        </h3>

        <div className="mb-4 grid grid-cols-3 gap-1 text-center sm:mb-6">
          <div>
            <p className="text-[10px] text-gray-400 sm:text-xs">Yield</p>
            <p className="mt-0.5 text-xs font-medium sm:text-sm">{property.yield}</p>
          </div>

          <div>
            <p className="text-[10px] text-gray-400 sm:text-xs">
              Price of fraction
            </p>
            <p className="mt-0.5 text-xs font-medium sm:text-sm">{property.price}</p>
          </div>

          <div>
            <p className="text-[10px] text-gray-400 sm:text-xs">
              Return of Investment
            </p>
            <p className="mt-0.5 text-xs font-medium sm:text-sm">{property.roi}</p>
          </div>
        </div>

        <button className="w-full rounded-full bg-[#ffb817] py-2.5 text-xs font-medium text-black transition hover:scale-[1.02] sm:py-3 sm:text-sm">
          Get More Details
        </button>
      </div>
    </article>
  );
}

export default InvestmentCard;