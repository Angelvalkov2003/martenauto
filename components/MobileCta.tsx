"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Phone } from "lucide-react";
import { site } from "@/lib/site";
import { ViberIcon } from "./BrandIcons";

// Phone-only bar pinned to the bottom once the visitor scrolls past the hero.
export default function MobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-white/[0.08] bg-ink/90 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-xl lg:hidden"
        >
          <div className="flex gap-2.5">
            <a
              href={site.phoneHref}
              className="flex flex-1 items-center justify-center gap-2 rounded-full bg-emerald-500 py-3.5 text-sm font-semibold text-white"
            >
              <Phone className="size-4" strokeWidth={2.4} />
              Искам оферта
            </a>
            <a
              href={site.links.viber}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#7360f2] py-3.5 text-sm font-semibold text-white"
            >
              <ViberIcon className="size-4" />
              Горещи оферти
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
