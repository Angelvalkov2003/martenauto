"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

// Full-bleed photo break between sections, faded into the page at top and bottom.
export default function CarBand() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <div
      ref={ref}
      className="relative h-[46vh] min-h-[280px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,#000_25%,#000_75%,transparent)] sm:h-[60vh]"
    >
      <motion.div style={{ y }} className="absolute inset-[-10%_0]">
        <Image
          src="/cars/peugeot-508.webp"
          alt="Peugeot 508"
          fill
          sizes="100vw"
          className="object-cover object-[50%_70%]"
        />
      </motion.div>
      <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/30 to-ink/70" />

      <div className="relative mx-auto flex h-full max-w-7xl items-center px-5 sm:px-8">
        <p className="max-w-md font-display text-3xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-5xl">
          Вашият следващ автомобил – от Европа до вратата ви.
        </p>
      </div>
    </div>
  );
}
