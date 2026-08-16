import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type PosterProps = {
  image: string;
  title: string;
  subtitle?: string;
  tag?: string;
  className?: string;
  wide?: boolean;
};

export function Poster({ image, title, subtitle, tag, className, wide }: PosterProps) {
  return (
    <article
      className={cn(
        "poster group relative shrink-0 snap-start overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_rgba(27,36,48,0.08)] transition-[transform,box-shadow] duration-300 hover:z-10 hover:scale-[1.04] hover:shadow-[0_20px_40px_rgba(27,36,48,0.14)] active:scale-[0.96]",
        wide ? "w-[min(86vw,420px)]" : "w-[210px] sm:w-[240px]",
        className
      )}
    >
      <div className={cn("relative overflow-hidden", wide ? "h-[200px]" : "h-[160px]")}>
        <img
          src={image}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="p-4">
        {tag && (
          <span className="mb-2 inline-block rounded-full bg-[#0D9488]/12 px-2.5 py-0.5 text-[10px] font-semibold tracking-wide text-[#0D9488] uppercase">
            {tag}
          </span>
        )}
        <h3 className="text-base font-semibold leading-snug text-[#1B2430] sm:text-lg">{title}</h3>
        {subtitle && <p className="mt-1 line-clamp-2 text-xs text-[#5C6B7A] sm:text-sm">{subtitle}</p>}
      </div>
    </article>
  );
}

export function Row({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="relative z-10 py-6 sm:py-8">
      <h2 className="mb-4 px-5 text-2xl font-bold tracking-tight text-[#1B2430] sm:px-10 sm:text-3xl">{title}</h2>
      <div className="row-scroll flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:px-10">
        {children}
      </div>
    </section>
  );
}
