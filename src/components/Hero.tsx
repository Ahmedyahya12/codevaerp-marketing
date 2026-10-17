
"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ExternalLink, MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/data/content";

const appUrl = "https://codevaerp-frontend.vercel.app/";

export default function Hero() {
  const reduced = useReducedMotion();

  return (
    <section id="home" className="hero-bg pt-32 pb-16">
      <div className="section-wrap grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-xs font-bold text-orange-600">
            نظام إدارة تجارية مصمم للسوق الموريتاني
          </span>

          <h1 className="mt-7 text-4xl leading-[1.45] font-black text-[#092C4C] md:text-5xl">
            تجارتك منظمة.
            <br />
            <span className="text-[#FE9F43]">
              قراراتك أوضح.
            </span>
          </h1>

          <p className="mt-5 max-w-lg text-base leading-9 text-slate-600">
            إدارة المبيعات والمخزون والمشتريات
            وديون الزبائن والمحاسبة بسهولة
            من منصة واحدة.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={appUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="orange-btn"
            >
              <ExternalLink size={18} />
              الدخول إلى النظام
            </a>

            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 font-bold text-[#092C4C] transition hover:border-orange-300"
            >
              اكتشف المميزات
              <ArrowLeft size={17} />
            </a>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-orange-600 hover:underline"
          >
            <MessageCircle size={17} />
            اطلب عرضًا تجريبيًا عبر واتساب
          </a>
        </motion.div>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_25px_65px_rgba(9,44,76,.09)]"
        >
          <div className="mb-5 flex items-center justify-between">
            <span className="font-black text-[#092C4C]">
              لوحة التحكم
            </span>
            <span className="rounded-full bg-orange-50 px-3 py-1 text-xs text-orange-600">
              معاينة توضيحية
            </span>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {[
              ["18,250", "المبيعات"],
              ["520", "المنتجات"],
              ["124", "العملاء"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-xl bg-slate-50 p-4 text-center">
                <p className="text-lg font-black text-[#092C4C]">
                  {value}
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  {label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-xl bg-slate-50 p-4">
            <p className="mb-4 text-sm font-bold text-[#092C4C]">
              نظرة على المبيعات
            </p>

            <svg
              viewBox="0 0 400 130"
              role="img"
              aria-label="رسم بياني توضيحي للمبيعات"
              className="h-auto w-full"
            >
              {[30, 65, 100].map((y) => (
                <line key={y} x1="0" x2="400" y1={y} y2={y}
                  stroke="#E2E8F0" strokeDasharray="4 5" />
              ))}
              <path
                d="M0 108 C40 95 55 65 90 78 S145 90 180 50 S235 70 280 30 S345 50 400 12"
                stroke="#FE9F43"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M0 120 C45 115 75 95 110 100 S175 80 220 85 S300 58 345 65 S380 45 400 40"
                stroke="#60A5FA"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <p className="mt-4 text-center text-xs text-slate-400">
            بيانات افتراضية لأغراض العرض
          </p>
        </motion.div>
      </div>
    </section>
  );
}
