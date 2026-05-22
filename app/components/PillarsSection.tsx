"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { HERO } from "../lib/content";

export function PillarsSection() {
  return (
    <section
      className="relative bg-background py-20 lg:py-28"
      aria-label="Trzy filary współpracy"
    >
      <div className="container-content">
        <ul className="grid gap-10 md:grid-cols-3">
          {HERO.pillars.map((pillar, i) => (
            <motion.li
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex items-start gap-4"
            >
              <div className="flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center">
                <Image
                  src={pillar.icon}
                  alt=""
                  width={56}
                  height={56}
                  className="w-full h-full"
                  unoptimized
                />
              </div>
              <div>
                <h2 className="font-bold text-lg lg:text-xl">{pillar.title}</h2>
                <p className="text-muted-strong text-[15px] mt-1 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
