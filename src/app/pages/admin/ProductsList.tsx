import { useState } from "react";
import { Plus, Search, Edit2, Trash2, Filter } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

export function ProductsList() {
  const [searchTerm, setSearchTerm] = useState("");

  const mockProducts = [
    { id: 1, name: "NVIDIA GeForce RTX 4090", category: "كروت الشاشة", price: 1599, stock: 12, status: "active" },
    { id: 2, name: "AMD Ryzen 9 7950X", category: "المعالجات", price: 699, stock: 45, status: "active" },
    { id: 3, name: "ASUS ROG Swift OLED", category: "شاشات", price: 999, stock: 0, status: "out_of_stock" },
    { id: 4, name: "Corsair Vengeance RGB 32GB", category: "الرامات", price: 149, stock: 120, status: "active" },
    { id: 5, name: "Samsung 990 PRO 2TB", category: "التخزين", price: 189, stock: 8, status: "low_stock" },
  ];

  return (
    <div className="space-y-6" dir="rtl">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black text-white tracking-tight">إدارة المنتجات</h1>
          <p className="text-neutral-400 mt-2">قم بإضافة، تعديل أو حذف منتجات المتجر.</p>
        </div>
        <button className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]">
          <Plus size={20} />
          <span>إضافة منتج جديد</span>
        </button>
      </div>

      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 shadow-xl">
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 w-5 h-5" />
            <input
              type="text"
              placeholder="ابحث عن منتج..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-neutral-950 border border-neutral-800 text-white rounded-xl py-3 pr-12 pl-4 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
            />
          </div>
          <button className="flex items-center gap-2 bg-neutral-950 border border-neutral-800 hover:border-neutral-600 text-white px-6 py-3 rounded-xl transition-all">
            <Filter size={20} />
            <span>تصفية</span>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-right border-collapse">
            <thead>
              <tr className="text-neutral-400 text-sm border-b border-neutral-800">
                <th className="pb-4 font-medium px-4">المنتج</th>
                <th className="pb-4 font-medium px-4">القسم</th>
                <th className="pb-4 font-medium px-4">السعر</th>
                <th className="pb-4 font-medium px-4">المخزون</th>
                <th className="pb-4 font-medium px-4">الحالة</th>
                <th className="pb-4 font-medium px-4">الإجراءات</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {mockProducts.map((product, i) => (
                <motion.tr 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  key={product.id} 
                  className="border-b border-neutral-800/50 last:border-0 hover:bg-neutral-800/30 transition-colors"
                >
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-neutral-800 overflow-hidden flex-shrink-0 border border-neutral-700">
                        {/* Placeholder for product image */}
                      </div>
                      <span className="font-bold text-white">{product.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-neutral-400">{product.category}</td>
                  <td className="py-4 px-4 font-bold text-white">${product.price}</td>
                  <td className="py-4 px-4 text-neutral-300">{product.stock} قطعة</td>
                  <td className="py-4 px-4">
                    {product.status === 'active' && <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full text-xs font-bold">نشط</span>}
                    {product.status === 'out_of_stock' && <span className="px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 rounded-full text-xs font-bold">نفذت الكمية</span>}
                    {product.status === 'low_stock' && <span className="px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-full text-xs font-bold">مخزون منخفض</span>}
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-neutral-400 hover:text-cyan-400 hover:bg-cyan-400/10 rounded-lg transition-colors" title="تعديل">
                        <Edit2 size={18} />
                      </button>
                      <button className="p-2 text-neutral-400 hover:text-rose-400 hover:bg-rose-400/10 rounded-lg transition-colors" title="حذف">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
