
import { PackagePlus, ShoppingCart, ChartNoAxesCombined } from "lucide-react";
import Reveal from "./Reveal";

const steps = [
  {
    title: "أضف منتجاتك",
    description: "سجّل المنتجات والأسعار والكميات الموجودة لديك.",
    icon: PackagePlus,
  },
  {
    title: "ابدأ البيع",
    description: "سجّل المبيعات والمشتريات والدفعات بسهولة.",
    icon: ShoppingCart,
  },
  {
    title: "تابع نشاطك",
    description: "راجع التقارير والمخزون وديون الزبائن.",
    icon: ChartNoAxesCombined,
  },
];

export default function HowItWorks() {
  return (
    <section id="steps" className="grid-pattern py-24">
      <div className="section-wrap">
        <Reveal>
          <div className="mb-14 text-center">
            <p className="font-bold text-orange-500">خطوات بسيطة</p>
            <h2 className="section-title mt-3">كيف يعمل النظام؟</h2>
            <p className="mt-4 text-slate-500">
              ابدأ بتنظيم تجارتك في ثلاث خطوات
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.title} delay={index * 0.1}>
                <div className="premium-card relative h-full p-9 text-center">
                  <span className="absolute left-6 top-5 text-xl font-black text-orange-400">
                    0{index + 1}
                  </span>
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-orange-50 text-orange-500">
                    <Icon size={36} />
                  </div>
                  <h3 className="mb-4 text-xl font-black">{step.title}</h3>
                  <p className="leading-8 text-slate-500">{step.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
