import { motion } from "motion/react";
import { Package, Users, ShoppingCart, DollarSign, ArrowUpRight, ArrowDownRight } from "lucide-react";

export function Dashboard() {
  const stats = [
    { label: "إجمالي المبيعات", value: "$124,500", icon: DollarSign, trend: "+12.5%", isPositive: true },
    { label: "الطلبات الجديدة", value: "342", icon: ShoppingCart, trend: "+5.2%", isPositive: true },
    { label: "العملاء النشطين", value: "1,204", icon: Users, trend: "-2.4%", isPositive: false },
    { label: "إجمالي المنتجات", value: "85", icon: Package, trend: "+1.1%", isPositive: true },
  ];

  return (
    <div className="space-y-6" dir="rtl">
      <div>
        <h1 className="text-3xl font-black text-white tracking-tight">لوحة القيادة</h1>
        <p className="text-neutral-400 mt-2">نظرة عامة على أداء المتجر والمبيعات.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl relative overflow-hidden group hover:border-cyan-500/30 transition-colors"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-cyan-500/10 transition-all" />
              
              <div className="flex justify-between items-start relative z-10">
                <div>
                  <p className="text-neutral-400 text-sm font-medium">{stat.label}</p>
                  <h3 className="text-3xl font-black text-white mt-2">{stat.value}</h3>
                </div>
                <div className="w-12 h-12 rounded-xl bg-neutral-800 flex items-center justify-center text-cyan-400">
                  <Icon size={24} />
                </div>
              </div>

              <div className={`flex items-center gap-1 mt-4 text-sm font-medium ${stat.isPositive ? "text-emerald-400" : "text-rose-400"}`}>
                {stat.isPositive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                <span>{stat.trend}</span>
                <span className="text-neutral-500 ms-2">مقارنة بالشهر الماضي</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-white mb-6">أحدث الطلبات</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-right border-collapse">
              <thead>
                <tr className="text-neutral-400 text-sm border-b border-neutral-800">
                  <th className="pb-4 font-medium">رقم الطلب</th>
                  <th className="pb-4 font-medium">العميل</th>
                  <th className="pb-4 font-medium">التاريخ</th>
                  <th className="pb-4 font-medium">المبلغ</th>
                  <th className="pb-4 font-medium">الحالة</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[1, 2, 3, 4, 5].map((i) => (
                  <tr key={i} className="border-b border-neutral-800/50 last:border-0 hover:bg-neutral-800/30 transition-colors">
                    <td className="py-4 text-cyan-400 font-medium">#ORD-{9000 + i}</td>
                    <td className="py-4 text-white">أحمد محمد</td>
                    <td className="py-4 text-neutral-400">اليوم، 10:45 ص</td>
                    <td className="py-4 text-white font-bold">$1,299</td>
                    <td className="py-4">
                      <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-xs font-bold">مكتمل</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-white mb-6">أفضل المنتجات مبيعاً</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-4 p-3 rounded-xl hover:bg-neutral-800/50 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-neutral-800 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold text-white truncate">NVIDIA RTX 4090</h4>
                  <p className="text-xs text-neutral-400">تم بيع 45 قطعة</p>
                </div>
                <div className="text-cyan-400 font-bold">$1,599</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
