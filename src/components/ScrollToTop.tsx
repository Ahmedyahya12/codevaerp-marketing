
"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const update = () => setVisible(window.scrollY > 400);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          aria-label="العودة إلى أعلى الصفحة"
          initial={reduced ? false : { opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.7 }}
          transition={{ duration: 0.2 }}
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: reduced ? "instant" : "smooth",
            })
          }
          className="fixed bottom-6 left-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#FE9F43] text-[#092C4C] shadow-lg hover:shadow-xl"
        >
          <ArrowUp size={22} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
