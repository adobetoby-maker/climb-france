interface GearProduct {
  name: string
  brand: string
  category: string
  description: string
  whyFrance: string
  url: string
  priceRange: string
}

interface Props {
  product: GearProduct
}

export default function GearProductCard({ product }: Props) {
  return (
    <div className="bg-[#12122A] border border-gray-700 rounded-xl p-6 flex flex-col hover:border-[#D4185A]/50 transition-colors">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <span className="text-xs font-bold text-[#D4185A] uppercase tracking-widest">{product.category}</span>
          <h3 className="text-white font-bold text-lg mt-1 leading-tight">{product.name}</h3>
          <p className="text-gray-500 text-sm">{product.brand}</p>
        </div>
        <span className="shrink-0 text-[#17A589] font-bold text-sm bg-[#17A589]/10 px-3 py-1 rounded-lg whitespace-nowrap">
          {product.priceRange}
        </span>
      </div>

      <p className="text-gray-300 text-sm leading-relaxed mb-3">{product.description}</p>

      <div className="bg-[#1A1A2E] border border-[#D4185A]/20 rounded-lg px-4 py-3 mb-5">
        <p className="text-xs font-bold text-[#D4185A] uppercase tracking-wider mb-1">Why for France</p>
        <p className="text-gray-300 text-sm leading-relaxed">{product.whyFrance}</p>
      </div>

      <div className="mt-auto">
        <a
          href={product.url}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="block w-full text-center bg-[#D4185A] text-white font-bold px-5 py-3 rounded-xl hover:bg-[#D4185A]/90 transition-colors text-sm cursor-pointer"
        >
          Search on Amazon →
        </a>
      </div>
    </div>
  )
}
