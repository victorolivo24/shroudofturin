"use client";
/* eslint-disable @next/next/no-img-element */

import { useRef } from "react";
import { cn } from "@/lib/utils";

/** Image that opens full-screen on click. Native <dialog> gives Esc-to-close and focus trapping. */
export function ZoomImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  return (
    <>
      <button
        type="button"
        onClick={() => dialog.current?.showModal()}
        className="group relative block w-full cursor-zoom-in overflow-hidden rounded-2xl border border-sand-200/15"
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={cn("w-full object-cover transition duration-300 group-hover:scale-[1.02]", className)}
        />
        <span className="absolute bottom-2 right-2 rounded-full bg-black/70 px-2 py-0.5 text-[10px] uppercase tracking-widest text-sand-100 opacity-0 transition group-hover:opacity-100">
          Enlarge
        </span>
      </button>
      <dialog
        ref={dialog}
        onClick={() => dialog.current?.close()}
        className="m-auto max-h-[92vh] max-w-[92vw] overflow-hidden rounded-2xl border border-sand-200/20 bg-black p-0 backdrop:bg-black/85"
      >
        <img src={src} alt={alt} className="max-h-[92vh] w-auto max-w-[92vw] object-contain" />
        <button
          type="button"
          autoFocus
          className="absolute right-3 top-3 rounded-full border border-sand-200/30 bg-black/70 px-3 py-1 text-xs uppercase tracking-[0.2em] text-sand-50"
        >
          Close
        </button>
      </dialog>
    </>
  );
}
