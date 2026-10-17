
"use client";

import { useState } from "react";
import { Menu, X, ExternalLink } from "lucide-react";

const appUrl = "https://codevaerp-frontend.vercel.app/";

const links = [
  { title: "الرئيسية", href: "#home" },
  { title: "المميزات", href: "#features" },
  { title: "الدفتر الذكي", href: "#credit" },
  { title: "كيف يعمل؟", href: "#steps" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="glass fixed inset-x-0 top-0 z-50 border-b border-slate-200">
      <nav className="section-wrap flex h-20 items-center justify-between">
        <a href="#home" dir="ltr" className="text-2xl font-black text-[#092C4C]">
          Codeva<span className="text-[#FE9F43]">ERP</span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-bold text-[#092C4C] transition hover:text-orange-500"
            >
              {link.title}
            </a>
          ))}
        </div>

        <a
          href={appUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="orange-btn hidden text-sm lg:inline-flex"
        >
          الدخول إلى النظام
          <ExternalLink size={16} />
        </a>

        <button
          type="button"
          aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="rounded-lg border border-slate-200 p-2 text-[#092C4C] lg:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-100 bg-white px-6 py-5 lg:hidden">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-bold text-[#092C4C]"
              >
                {link.title}
              </a>
            ))}
            <a
              href={appUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="orange-btn"
              onClick={() => setOpen(false)}
            >
              الدخول إلى النظام
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
