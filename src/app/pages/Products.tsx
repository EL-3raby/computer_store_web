import { Link } from "react-router";
import { Filter, ShoppingBag } from "lucide-react";

// Reuse the same products from Home for demonstration
const IMAGES = {
  gpu: "https://images.unsplash.com/photo-1555618568-bdf0a992c512?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMGdyYXBoaWNzJTIwY2FyZCUyMG52aWRpYXxlbnwxfHx8fDE3NzY0NzMxMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  headset: "https://images.unsplash.com/photo-1641169707717-5704974b69dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBoZWFkc2V0JTIwcmdifGVufDF8fHx8MTc3NjQ3MzEzMnww&ixlib=rb-4.1.0&q=80&w=1080",
  ram: "https://images.unsplash.com/photo-1620050503346-ba7c99ec97ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHJhbSUyMHJnYnxlbnwxfHx8fDE3NzY0NzMxMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  keyboard: "https://images.unsplash.com/photo-1649899913123-90bb33c8a66a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWNoYW5pY2FsJTIwa2V5Ym9hcmQlMjByZ2J8ZW58MXx8fHwxNzc2NDczMTMyfDA&ixlib=rb-4.1.0&q=80&w=1080",
  mouse: "https://images.unsplash.com/photo-1637555117015-a479c2d19c0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBtb3VzZSUyMGxlZHxlbnwxfHx8fDE3NzY0NzMxMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
};

const PRODUCTS = [
  { id: 1, name: "NVIDIA RTX 4090", category: "كروت الشاشة", price: "7,500 د.إ", oldPrice: "8,200 د.إ", image: IMAGES.gpu, isNew: true },
  { id: 2, name: "RGB Mechanical Pro", category: "كيبورد قيمنق", price: "550 د.إ", oldPrice: "650 د.إ", image: IMAGES.keyboard, isNew: false },
  { id: 3, name: "Corsair Vengeance 32GB", category: "رامات", price: "480 د.إ", oldPrice: null, image: IMAGES.ram, isNew: true },
  { id: 4, name: "HyperX Cloud Alpha", category: "سماعات", price: "399 د.إ", oldPrice: "499 د.إ", image: IMAGES.headset, isNew: false },
  { id: 5, name: "Logitech G Pro Wireless", category: "ماوسات", price: "450 د.إ", oldPrice: null, image: IMAGES.mouse, isNew: true },
  { id: 6, name: "AMD Radeon RX 7900 XTX", category: "كروت الشاشة", price: "4,200 د.إ", oldPrice: null, image: IMAGES.gpu, isNew: false },
  { id: 7, name: "G.Skill Trident Z5 64GB", category: "رامات", price: "850 د.إ", oldPrice: null, image: IMAGES.ram, isNew: true },
  { id: 8, name: "SteelSeries Arctis Nova", category: "سماعات", price: "899 د.إ", oldPrice: "1,100 د.إ", image: IMAGES.headset, isNew: false },
];

export function Products() {
  return (
    <div className="bg-neutral-950 min-h-screen py-12">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 border-b border-neutral-900 pb-8">
          <h1 className="text-4xl font-black text-white mb-4">جميع المنتجات</h1>
          <p className="text-neutral-400">تصفح أحدث قطع الكمبيوتر وملحقات الألعاب المتوفرة لدينا.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Filters Sidebar */}
          <div className="w-full lg:w-1/4">
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 sticky top-28">
              <div className="flex items-center gap-2 mb-6 text-white font-bold pb-4 border-b border-neutral-800">
                <Filter className="w-5 h-5 text-cyan-500" />
                <span>تصفية المنتجات</span>
              </div>
              
              <div className="mb-6">
                <h3 className="text-white font-bold mb-4">الفئات</h3>
                <div className="space-y-3">
                  {['الكل', 'كروت الشاشة', 'معالجات', 'لوحات أم', 'رامات', 'كيبورد قيمنق', 'ماوسات', 'سماعات'].map((cat, i) => (
                    <label key={i} className="flex items-center gap-3 cursor-pointer group">
                      <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${i === 0 ? 'bg-cyan-500 border-cyan-500' : 'border-neutral-600 bg-neutral-900 group-hover:border-cyan-500'}`}>
                        {i === 0 && <div className="w-2.5 h-2.5 bg-neutral-950 rounded-[2px]" />}
                      </div>
                      <span className={`text-sm ${i === 0 ? 'text-white' : 'text-neutral-400 group-hover:text-neutral-200'}`}>
                        {cat}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-white font-bold mb-4">نطاق السعر</h3>
                <input type="range" className="w-full accent-cyan-500 bg-neutral-800" min="0" max="10000" />
                <div className="flex justify-between text-neutral-500 text-sm mt-2">
                  <span>0 د.إ</span>
                  <span>10,000+ د.إ</span>
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="w-full lg:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {PRODUCTS.map((product) => (
                <div key={product.id} className="group bg-neutral-900/50 border border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-700 transition-colors flex flex-col h-full">
                  <div className="relative aspect-square overflow-hidden bg-neutral-800/50 p-6">
                    {product.isNew && (
                      <span className="absolute top-4 right-4 z-10 bg-cyan-500 text-neutral-950 text-xs font-bold px-3 py-1 rounded-full">
                        جديد
                      </span>
                    )}
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-contain filter drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-neutral-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                      <button className="w-12 h-12 rounded-full bg-cyan-500 text-neutral-950 flex items-center justify-center hover:bg-cyan-400 transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300">
                        <ShoppingBag className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <span className="text-xs text-neutral-500 font-medium mb-2">{product.category}</span>
                    <h3 className="text-white font-bold mb-4 line-clamp-2 hover:text-cyan-400 transition-colors">
                      <Link to={`/product/${product.id}`}>{product.name}</Link>
                    </h3>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-cyan-400 font-bold text-lg">{product.price}</span>
                        {product.oldPrice && (
                          <span className="text-neutral-500 text-sm line-through">{product.oldPrice}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
