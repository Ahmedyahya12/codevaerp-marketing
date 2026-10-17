
import { MessageCircle, ArrowUpLeft } from "lucide-react";
import { whatsappUrl } from "@/data/content";
import Reveal from "./Reveal";

export default function Footer() {
  return (
    <>
      <section className="bg-[#FFF1E3] py-20">
        <div className="section-wrap">
          <Reveal>
            <div className="flex flex-col items-center justify-between gap-8 rounded-[30px] border border-orange-200 bg-white/70 p-10 text-center shadow-xl shadow-orange-100/40 lg:flex-row lg:text-right">
              <div>
                <h2 className="text-3xl font-black md:text-4xl">
                  ابدأ اليوم بإدارة أكثر تنظيمًا
                </h2>
                <p className="mt-4 leading-8 text-slate-600">
                  اكتشف كيف يساعدك CodevaERP على تنظيم تجارتك.
                </p>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="orange-btn shrink-0"
              >
                <MessageCircle size={20} />
                اطلب عرضًا تجريبيًا
                <ArrowUpLeft size={18} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="bg-[#092C4C] py-14 text-white">
        <div className="section-wrap grid gap-10 md:grid-cols-3">
          <div>
            <a href="#home" dir="ltr" className="inline-block text-3xl font-black">
              Codeva<span className="text-[#FE9F43]">ERP</span>
            </a>
            <p className="mt-5 max-w-sm leading-8 text-slate-300">
              حلول رقمية لإدارة المتاجر والمؤسسات الصغيرة والمتوسطة.
            </p>
          </div>

          <div>
            <h3 className="mb-5 font-bold">روابط سريعة</h3>
            <div className="flex flex-col gap-3 text-sm text-slate-300">
              <a href="#features">المميزات</a>
              <a href="#credit">الدفتر الذكي</a>
              <a href="#steps">كيف يعمل؟</a>
              <a href="#faq">الأسئلة الشائعة</a>
            </div>
          </div>

          <div>
            <h3 className="mb-5 font-bold">تواصل معنا</h3>
            <p className="text-slate-300">Codeva Solution</p>
            <p dir="ltr" className="mt-3 text-right text-slate-300">
              +222 37559840
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-[#FE9F43]"
            >
              <MessageCircle size={18} />
              تواصل عبر واتساب
            </a>
          </div>
        </div>

        
<div className="section-wrap mt-12 border-t border-white/10 pt-7 text-center text-xs text-slate-400">
  © 2026 CodevaERP — Codeva Solution. جميع الحقوق محفوظة.
</div>
      </footer>
    </>
  );
}
