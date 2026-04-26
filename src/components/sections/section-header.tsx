"use client";
import { cn } from "@/lib/utils"
import Link from "next/link"
import { BoxReveal } from "../reveal-animations"
import { ReactNode, useEffect, useState } from "react"

export const SectionHeader = ({ id, title, desc, className }: { id: string, title: string | ReactNode, desc?: string, className?: string }) => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById(id);
      if (element) {
        const rect = element.getBoundingClientRect();
        const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight));
        // Dim the text as we scroll past it (starts dimming after 30% scroll)
        const newOpacity = scrollProgress < 0.3 ? 1 : Math.max(0.15, 1 - (scrollProgress - 0.3) * 1.5);
        setOpacity(newOpacity);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [id]);

  return (
    <div className={cn("top-[70px] sticky mb-96 transition-opacity duration-300", className)} style={{ opacity }}>
      <Link href={`#${id}`}>
        <BoxReveal width="100%">
          <h2
            className={cn(
              "text-4xl text-center md:text-7xl font-bold",
              "text-foreground"
            )}
          >
            {title}
          </h2>
        </BoxReveal>
      </Link>
      <p className="mx-auto line-clamp-4 max-w-3xl font-normal text-base text-center text-muted-foreground">
        {desc}
      </p>
    </div>
  )
}
