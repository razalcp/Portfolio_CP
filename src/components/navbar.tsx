"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/data";
import { CloseIcon, DownloadIcon, GitHubIcon, LinkedInIcon, MenuIcon } from "./icons";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled
          ? "border-b border-line bg-base/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
        }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <a
          href="#top"
          className="font-mono text-sm font-semibold tracking-tight text-white"
          aria-label="Back to top"
        >
          CP Razal<span className="text-accent"> Nazim</span>
          {/* razal<span className="text-accent">.cp</span> */}
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <span aria-hidden className="h-4 w-px bg-line-strong" />
          <a
            href={site.resumeUrl}
            download="Razal_Nazim_Resume.pdf"
            className="flex items-center gap-2 rounded-full border border-line-strong px-4 py-1.5 text-sm text-zinc-200 transition-colors hover:border-accent/50 hover:text-accent"
          >
            <DownloadIcon width={15} height={15} />
            Resume
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg p-2 text-zinc-300 hover:bg-white/5 md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-line bg-base/95 backdrop-blur-md md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-5 py-4 sm:px-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-3 text-sm text-zinc-300 last:border-none hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href={site.resumeUrl}
              download="Razal_CP_Resume.pdf"
              onClick={() => setOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 rounded-full border border-line-strong py-2.5 text-sm text-zinc-100"
            >
              <DownloadIcon width={15} height={15} />
              Download Resume
            </a>
            <div className="mt-4 flex items-center justify-center gap-6 pb-2">
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white"
                aria-label="GitHub profile"
              >
                <GitHubIcon width={22} height={22} />
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white"
                aria-label="LinkedIn profile"
              >
                <LinkedInIcon width={22} height={22} />
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
