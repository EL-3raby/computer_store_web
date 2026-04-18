import { Link } from "react-router";
import { AlertCircle } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center px-4 text-center selection:bg-cyan-500 selection:text-neutral-950">
      <div className="w-24 h-24 bg-neutral-900 rounded-full flex items-center justify-center mb-8 border border-neutral-800">
        <AlertCircle className="w-12 h-12 text-cyan-500" />
      </div>
      <h1 className="text-6xl font-black text-white mb-4">404</h1>
      <h2 className="text-2xl font-bold text-neutral-300 mb-6">الصفحة غير موجودة</h2>
      <p className="text-neutral-500 max-w-md mb-8">
        عذراً، الصفحة التي تبحث عنها غير متوفرة حالياً، أو قيد التطوير. يرجى العودة للرئيسية وتصفح منتجاتنا المميزة.
      </p>
      <Link 
        to="/" 
        className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-neutral-950 font-bold rounded-xl transition-colors shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]"
      >
        العودة للرئيسية
      </Link>
    </div>
  );
}
