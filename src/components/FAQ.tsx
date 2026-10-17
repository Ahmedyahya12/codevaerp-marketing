
import { faqs } from "@/data/content";
import Reveal from "./Reveal";

export default function FAQ() {
  return (
    <section id="faq" className="bg-white py-24">
      <div className="section-wrap max-w-4xl">
        <Reveal>
          <div className="mb-12 text-center">
            <p className="font-bold text-orange-500">لديك سؤال؟</p>
            <h2 className="section-title mt-3">الأسئلة الشائعة</h2>
          </div>
        </Reveal>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <Reveal key={faq.q}>
              <details className="group rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 open:bg-white open:shadow-lg">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <span className="text-2xl text-orange-500 transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-5 leading-8 text-slate-600">
                  {faq.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
