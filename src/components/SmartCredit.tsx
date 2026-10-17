
"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { CheckCircle2, RotateCcw, BookOpen } from "lucide-react";
import Reveal from "./Reveal";

const total = 5000;
const initialPaid = 2000;
const format = (n: number) => n.toLocaleString("fr-FR");

export default function SmartCredit() {
  const [paid, setPaid] = useState(initialPaid);
  const reduced = useReducedMotion();
  const remaining = total - paid;

  return (
    <section id="credit" className="relative overflow-hidden bg-[#092C4C] py-28 text-white">
      <div className="absolute -top-36 left-0 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />

      <div className="section-wrap relative grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-2 text-sm font-bold text-orange-300">
            <BookOpen size={17} />
            الدفتر الذكي للديون
          </span>

          <h2 className="mt-7 text-4xl leading-[1.5] font-black md:text-5xl">
            دفتر ديونك القديم
            <br />
            أصبح <span className="text-[#FE9F43]">أكثر تنظيمًا</span>
          </h2>

          <p className="mt-6 max-w-lg leading-9 text-slate-300">
            سجّل ديون الزبائن، وتابع ما دفعوه وما بقي عليهم،
            وراجع وعود الدفع والتأخير من مكان واحد.
          </p>

          <div className="mt-8 space-y-4">
            {[
              "معرفة رصيد كل زبون",
              "تسجيل الدفعات الجزئية",
              "متابعة مواعيد ووعود السداد",
              "مراجعة سجل التعاملات السابقة",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 className="text-[#FE9F43]" size={20} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <motion.div
            whileHover={reduced ? undefined : { rotateY: -3, rotateX: 2 }}
            transition={{ duration: 0.35 }}
            className="rounded-[28px] border border-white/15 bg-white/10 p-4 shadow-2xl sm:p-6"
            style={{ perspective: 1000 }}
          >
            <div className="rounded-2xl bg-white p-6 text-[#092C4C] sm:p-8">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-black">دفتر الزبون</h3>
                <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-600">
                  تجربة تفاعلية
                </span>
              </div>

              <p className="mt-7 text-sm text-slate-500">إجمالي الدين</p>
              <p className="mt-1 text-4xl font-black" dir="ltr">
                {format(total)} MRU
              </p>

              <div
                role="progressbar"
                aria-label="نسبة الدين المسدد"
                aria-valuenow={paid}
                aria-valuemin={0}
                aria-valuemax={total}
                className="mt-7 h-3 overflow-hidden rounded-full bg-slate-100"
              >
                <motion.div
                  initial={false}
                  animate={{ width: `${(paid / total) * 100}%` }}
                  transition={{ duration: reduced ? 0 : 0.5 }}
                  className="h-full rounded-full bg-[#FE9F43]"
                />
              </div>

              <div className="mt-7 grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-emerald-50 p-4">
                  <p className="text-sm text-slate-500">المبلغ المدفوع</p>
                  <p className="mt-2 text-xl font-black text-emerald-600">
                    {format(paid)} MRU
                  </p>
                </div>
                <div className="rounded-xl bg-orange-50 p-4">
                  <p className="text-sm text-slate-500">المبلغ المتبقي</p>
                  <p className="mt-2 text-xl font-black text-orange-600">
                    {format(remaining)} MRU
                  </p>
                </div>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <button
                  type="button"
                  disabled={remaining === 0}
                  onClick={() => setPaid((p) => Math.min(total, p + 500))}
                  className="orange-btn disabled:cursor-not-allowed disabled:opacity-50"
                >
                  تسجيل دفعة 500 MRU
                </button>
                <button
                  type="button"
                  onClick={() => setPaid(initialPaid)}
                  className="flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-bold hover:bg-slate-50"
                >
                  <RotateCcw size={16} />
                  إعادة
                </button>
              </div>

              <p className="mt-5 text-xs leading-6 text-slate-400">
                مثال توضيحي ببيانات افتراضية. لا يتم حفظ أي عملية.
              </p>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
