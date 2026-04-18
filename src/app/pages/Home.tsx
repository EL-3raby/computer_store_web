import { motion } from "motion/react";
import { ArrowLeft, ShieldCheck, Zap, Truck, Headphones, ChevronLeft, ShoppingBag } from "lucide-react";
import { Link } from "react-router";

// Unsplash Images
const IMAGES = {
  hero: "https://images.unsplash.com/photo-1707312900236-12d6fefd2bbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwcGMlMjBnYW1pbmclMjBzZXR1cHxlbnwxfHx8fDE3NzY0NzMxMzJ8MA&ixlib=rb-4.1.0&q=80&w=1920",
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
];

export function Home() {
  return (
    <div className="bg-neutral-950 overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-32">
        <div className="absolute inset-0 w-full h-full">
          <img src={IMAGES.hero} alt="Gaming Setup" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/80 via-transparent to-neutral-950/80"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 lg:px-8 flex flex-col items-center text-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-medium mb-8 backdrop-blur-sm"
          >
            <Zap className="w-4 h-4" />
            <span>تشكيلة الجيل الجديد متوفرة الآن</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-6"
          >
            ارتقِ بتجربة <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              اللعب والأداء
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-12"
          >
            استكشف أقوى تجميعات وقطع الكمبيوتر وملحقات القيمنق من أشهر الماركات العالمية لبناء محطتك الاحترافية.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <button className="w-full sm:w-auto px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-neutral-950 font-bold rounded-xl flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]">
              <span>تسوق الآن</span>
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 hover:border-neutral-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all">
              <span>تصفح التجميعات</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="border-y border-neutral-900 bg-neutral-950/50 backdrop-blur-sm py-8 relative z-20 -mt-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard icon={<Truck />} title="شحن سريع" subtitle="توصيل لجميع مناطق الخليج" />
            <FeatureCard icon={<ShieldCheck />} title="ضمان شامل" subtitle="حتى سنتين على القطع" />
            <FeatureCard icon={<Zap />} title="أداء مضمون" subtitle="قطع أصلية 100%" />
            <FeatureCard icon={<Headphones />} title="دعم فني" subtitle="مساعدة متواصلة 24/7" />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">تسوق حسب الفئة</h2>
              <p className="text-neutral-400 text-lg">كل ما تحتاجه لإعداد بيئة لعب متكاملة</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <CategoryCard title="كروت الشاشة" image={IMAGES.gpu} span="col-span-1 md:col-span-2 lg:col-span-2" />
            <CategoryCard title="ملحقات (كيبورد وماوس)" image={IMAGES.keyboard} span="col-span-1" />
            <CategoryCard title="سماعات وميكروفونات" image={IMAGES.headset} span="col-span-1" />
            <CategoryCard title="رامات وذواكر" image={IMAGES.ram} span="col-span-1" />
            <CategoryCard title="ماوسات قيمنق" image={IMAGES.mouse} span="col-span-1 md:col-span-2 lg:col-span-3" />
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-24 bg-neutral-900/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">الأكثر مبيعاً</h2>
              <p className="text-neutral-400 text-lg">القطع المفضلة لدى مجتمع اللاعبين</p>
            </div>
            <Link to="/products" className="hidden sm:flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors group">
              <span>عرض الكل</span>
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <Link to="/products" className="mt-8 flex sm:hidden items-center justify-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium w-full p-4 border border-neutral-800 rounded-xl">
            <span>عرض كل المنتجات</span>
          </Link>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-900 to-indigo-900 border border-indigo-500/30 p-12 lg:p-20">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
              <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full -top-32 -left-32 mix-blend-screen"></div>
              <div className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full -bottom-32 -right-32 mix-blend-screen"></div>
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="max-w-2xl text-center lg:text-right">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                  تريد بناء <span className="text-cyan-400">كمبيوتر أحلامك؟</span>
                </h2>
                <p className="text-xl text-blue-100/80 mb-8 leading-relaxed">
                  استخدم أداة تجميع الكمبيوتر الخاصة بنا للتأكد من توافق القطع والحصول على أفضل أداء مكن لميزانيتك.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                  <button className="px-8 py-4 bg-white text-blue-900 font-bold rounded-xl hover:bg-neutral-100 transition-colors w-full sm:w-auto">
                    ابدأ التجميع الآن
                  </button>
                  <button className="px-8 py-4 bg-transparent border-2 border-white/20 text-white font-bold rounded-xl hover:bg-white/10 transition-colors w-full sm:w-auto">
                    تحدث مع خبير
                  </button>
                </div>
              </div>

              <div className="hidden lg:block relative">
                 <img src={IMAGES.gpu} alt="PC Build" className="w-96 rounded-2xl shadow-2xl rotate-[-5deg] hover:rotate-0 transition-all duration-500 border border-white/10" />
                 <img src={IMAGES.ram} alt="PC Build" className="w-64 rounded-xl shadow-2xl absolute -bottom-10 -right-10 rotate-[10deg] hover:rotate-0 transition-all duration-500 border border-white/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

// Subcomponents

function FeatureCard({ icon, title, subtitle }: { icon: React.ReactNode, title: string, subtitle: string }) {
  return (
    <div className="flex flex-col items-center sm:flex-row sm:items-start text-center sm:text-right gap-4 p-4">
      <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-cyan-400 flex-shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="text-white font-bold mb-1">{title}</h4>
        <p className="text-neutral-500 text-sm">{subtitle}</p>
      </div>
    </div>
  );
}

function CategoryCard({ title, image, span }: { title: string, image: string, span: string }) {
  return (
    <Link to="/category" className={`group relative rounded-2xl overflow-hidden aspect-[4/3] md:aspect-auto ${span} md:min-h-[300px]`}>
      <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
      <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform">
        <h3 className="text-2xl font-black text-white mb-2">{title}</h3>
        <span className="text-cyan-400 font-medium inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          تسوق الآن <ChevronLeft className="w-4 h-4" />
        </span>
      </div>
    </Link>
  );
}

function ProductCard({ product }: { product: any }) {
  return (
    <div className="group bg-neutral-900/50 border border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-700 transition-colors flex flex-col h-full">
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
  );
}
