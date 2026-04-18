import { Link } from "react-router";
import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Col */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-neutral-950 font-black text-xl shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                ع
              </div>
              <span className="text-2xl font-black tracking-tight text-white ms-2">
                عادل <span className="text-cyan-400">أبو سلطان</span>
              </span>
            </Link>
            <p className="text-neutral-400 leading-relaxed text-sm">
              الوجهة الأولى للاعبين والمحترفين. نوفر لك أفضل قطع الكمبيوتر وملحقات الألعاب من أشهر الماركات العالمية لضمان تجربة لا تضا��ى.
            </p>
            <div className="flex gap-4">
              <SocialLink icon={<Facebook size={18} />} href="#" />
              <SocialLink icon={<Twitter size={18} />} href="#" />
              <SocialLink icon={<Instagram size={18} />} href="#" />
              <SocialLink icon={<Youtube size={18} />} href="#" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold text-lg mb-2">روابط سريعة</h4>
            <FooterLink to="/about">من نحن</FooterLink>
            <FooterLink to="/products">المنتجات</FooterLink>
            <FooterLink to="/build-pc">تجميعات بي سي</FooterLink>
            <FooterLink to="/blog">المدونة</FooterLink>
            <FooterLink to="/contact">اتصل بنا</FooterLink>
          </div>

          {/* Categories */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold text-lg mb-2">التصنيفات</h4>
            <FooterLink to="/category/components">قطع الجهاز الداخلية</FooterLink>
            <FooterLink to="/category/peripherals">ملحقات الألعاب</FooterLink>
            <FooterLink to="/category/monitors">شاشات احترافية</FooterLink>
            <FooterLink to="/category/laptops">لابتوبات جيمنج</FooterLink>
            <FooterLink to="/category/network">شبكات وراوترات</FooterLink>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold text-lg mb-2">تواصل معنا</h4>
            <div className="flex items-center gap-3 text-neutral-400">
              <MapPin size={18} className="text-cyan-500" />
              <span>شارع التكنولوجيا، المنطقة الحرة، دبي</span>
            </div>
            <div className="flex items-center gap-3 text-neutral-400">
              <Phone size={18} className="text-cyan-500" />
              <span dir="ltr">+971 50 123 4567</span>
            </div>
            <div className="flex items-center gap-3 text-neutral-400">
              <Mail size={18} className="text-cyan-500" />
              <span>support@adelabusultan.com</span>
            </div>
          </div>

        </div>

        <div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 text-sm">
            © {new Date().getFullYear()} عادل أبو سلطان. جميع الحقوق محفوظة.
          </p>
          <div className="flex gap-4 text-sm text-neutral-500">
            <Link to="/privacy" className="hover:text-cyan-400 transition-colors">سياسة الخصوصية</Link>
            <Link to="/terms" className="hover:text-cyan-400 transition-colors">الشروط والأحكام</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ icon, href }: { icon: React.ReactNode, href: string }) {
  return (
    <a 
      href={href}
      className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-cyan-500 hover:text-neutral-950 hover:border-cyan-500 transition-all duration-300"
    >
      {icon}
    </a>
  );
}

function FooterLink({ to, children }: { to: string, children: React.ReactNode }) {
  return (
    <Link 
      to={to} 
      className="text-neutral-400 hover:text-cyan-400 hover:translate-x-1 transition-all duration-300 w-fit"
    >
      {children}
    </Link>
  );
}
