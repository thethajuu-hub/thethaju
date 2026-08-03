"use client";

export default function DeviceMockup({
  url,
  title,
  className,
}: {
  url: string;
  title: string;
  className?: string;
}) {
  return (
    <div className={`relative ${className ?? ""}`}>
      {/* Laptop */}
      <div className="relative mx-auto w-[86%]">
        <div className="rounded-t-xl border border-line border-b-0 bg-[#0d0d0d] p-2 pb-0">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-lg bg-black">
            <iframe
              src={url}
              title={`${title} — desktop`}
              loading="lazy"
              tabIndex={-1}
              className="pointer-events-none absolute left-0 top-0 h-[240%] w-[240%] origin-top-left scale-[0.4167] border-0"
            />
          </div>
        </div>
        {/* Laptop base */}
        <div className="h-2.5 rounded-b-md border border-line bg-gradient-to-b from-[#161616] to-[#0a0a0a]">
          <div className="mx-auto h-1 w-14 rounded-b-md bg-black/40" />
        </div>
      </div>

      {/* Phone — overlapping bottom-right */}
      <div className="absolute -bottom-4 right-0 w-[22%] min-w-[64px] max-w-[110px] sm:right-2">
        <div className="rounded-[1.1rem] border border-line bg-[#0d0d0d] p-1 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8)]">
          <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[0.85rem] bg-black">
            <iframe
              src={url}
              title={`${title} — mobile`}
              loading="lazy"
              tabIndex={-1}
              className="pointer-events-none absolute left-0 top-0 h-[500%] w-[500%] origin-top-left scale-[0.2] border-0"
            />
            <div className="absolute left-1/2 top-1 h-1 w-6 -translate-x-1/2 rounded-full bg-black/60" />
          </div>
        </div>
      </div>
    </div>
  );
}
