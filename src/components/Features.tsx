
import { ArrowUpLeft, BookOpen } from "lucide-react";
import { features } from "@/data/content";
import Reveal from "./Reveal";

export default function Features() {
  return (
    <section id="features" className="bg-white py-24">
      <div className="section-wrap">
        <Reveal>
          <div className="mb-14 text-center">
            <p className="font-bold text-orange-500">مميزات CodevaERP</p>
            <h2 className="section-title mt-3">
              كل أدوات تجارتك في مكان واحد
            </h2>
            <p className="mt-4 text-slate-500">
              من أول عملية بيع إلى متابعة الديون والتقارير
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Reveal key={feature.title} delay={(index % 4) * 0.07}>
                <article className="premium-card group h-full p-7">
                  <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${
                    feature.color === "orange"
                      ? "bg-orange-100 text-orange-500"
                      : feature.color === "green"
                      ? "bg-emerald-100 text-emerald-600"
                      : "bg-blue-100 text-blue-600"
                  }`}>
                    <Icon size={27} />
                  </div>
                  <h3 className="mb-3 text-lg font-extrabold">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-7 text-slate-500">
                    {feature.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-6">
          <a href="#credit"
            className="group relative flex flex-col items-start justify-between gap-7 overflow-hidden rounded-3xl bg-[#FFF1E2] p-9 md:flex-row md:items-center">
            <div className="absolute -left-12 -top-16 h-48 w-48 rounded-full bg-orange-200/60 blur-2xl" />
            <div className="relative">
              <div className="mb-4 flex items-center gap-3">
                <BookOpen className="text-orange-500" />
                <span className="text-sm font-bold text-orange-600">
                  ميزة مميزة
                </span>
              </div>
              <h3 className="text-2xl font-black">
                الدفتر الذكي: وداعًا لفوضى ديون الزبائن
              </h3>
              <p className="mt-3 max-w-xl leading-8 text-slate-600">
                تابع المبالغ المتبقية والدفعات ووعود السداد
                بطريقة أكثر وضوحًا وتنظيمًا.
              </p>
            </div>
            <span className="relative flex items-center gap-2 font-bold text-orange-600">
              اكتشف المزيد
              <ArrowUpLeft className="transition group-hover:-translate-x-1 group-hover:-translate-y-1" />
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
