import { motion } from "motion/react";
import { Construction } from "lucide-react";

export function ComingSoon({ title, description }: { title: string, description: string }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4" dir="rtl">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="w-24 h-24 bg-neutral-900 border border-neutral-800 rounded-3xl flex items-center justify-center mb-8 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 blur-xl" />
        <Construction size={40} className="text-cyan-400 relative z-10" />
      </motion.div>
      <motion.h1 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="text-3xl font-black text-white mb-4 tracking-tight"
      >
        {title}
      </motion.h1>
      <motion.p 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-neutral-400 max-w-md mx-auto leading-relaxed"
      >
        {description}
      </motion.p>
    </div>
  );
}
