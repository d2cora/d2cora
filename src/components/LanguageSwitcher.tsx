"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Globe, Check, ChevronDown, X } from "lucide-react";
import { SUPPORTED_LOCALES, LanguageMeta } from "@/lib/i18n";

export function LanguageSwitcher({
  variant = "navbar",
  isDark = true,
}: {
  variant?: "navbar" | "footer" | "floating";
  isDark?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  // Determine current active language from pathname
  const currentLangCode = pathname?.split("/")[1] || "en";
  const activeLang =
    SUPPORTED_LOCALES.find((l) => l.code === currentLangCode) ||
    SUPPORTED_LOCALES[0];

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleSelectLanguage = (lang: LanguageMeta) => {
    setIsOpen(false);
    if (lang.code === "en") {
      router.push("/");
    } else {
      router.push(`/${lang.code}`);
    }
  };

  const indianLanguages = SUPPORTED_LOCALES.filter((l) => l.region === "Indian");
  const internationalLanguages = SUPPORTED_LOCALES.filter(
    (l) => l.region === "International"
  );
  const english = SUPPORTED_LOCALES.find((l) => l.code === "en")!;

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Change Language"
        aria-expanded={isOpen}
        className={`group inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium transition-all duration-200 ${
          variant === "footer"
            ? "border-gray-200 bg-gray-50 text-gray-800 hover:bg-gray-100"
            : isDark
            ? "border-white/20 bg-white/10 text-white hover:bg-white/20"
            : "border-black/20 bg-black/5 text-black hover:bg-black/10"
        }`}
      >
        <span className="text-sm">{activeLang.flag}</span>
        <span className="font-semibold">{activeLang.nativeName}</span>
        <ChevronDown
          className={`h-3 w-3 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Popover Menu */}
      {isOpen && (
        <div
          className={`absolute right-0 z-50 w-[340px] max-w-[90vw] rounded-2xl border border-white/15 bg-neutral-950/95 p-3 text-white shadow-2xl backdrop-blur-2xl ring-1 ring-black ring-opacity-5 animate-in fade-in zoom-in-95 duration-150 ${
            variant === "footer"
              ? "bottom-full mb-2 origin-bottom-right"
              : "mt-2 origin-top-right"
          }`}
          style={{ maxHeight: "480px", overflowY: "auto" }}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-2 px-2">
            <div className="flex items-center gap-1.5">
              <Globe className="h-4 w-4 text-blue-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-300">
                Select Language
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-neutral-400 hover:text-white p-1"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Global / English */}
          <div className="pt-2">
            <button
              onClick={() => handleSelectLanguage(english)}
              className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-xs transition-colors ${
                activeLang.code === "en"
                  ? "bg-blue-600/30 text-blue-300 font-bold border border-blue-500/40"
                  : "text-neutral-200 hover:bg-white/10"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-base">{english.flag}</span>
                <div>
                  <span className="font-semibold">{english.nativeName}</span>
                  <span className="ml-1 text-[10px] text-neutral-400">
                    ({english.name} - Default)
                  </span>
                </div>
              </div>
              {activeLang.code === "en" && <Check className="h-3.5 w-3.5 text-blue-400" />}
            </button>
          </div>

          {/* Indian Regional Languages */}
          <div className="mt-3">
            <div className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-orange-400/90 flex items-center gap-1">
              <span>🇮🇳</span> Indian Languages ({indianLanguages.length})
            </div>
            <div className="grid grid-cols-2 gap-1 pt-1">
              {indianLanguages.map((lang) => {
                const isSelected = activeLang.code === lang.code;
                return (
                  <button
                    key={lang.code}
                    onClick={() => handleSelectLanguage(lang)}
                    className={`flex items-center justify-between rounded-lg px-2.5 py-1.5 text-left text-xs transition-colors ${
                      isSelected
                        ? "bg-orange-500/20 text-orange-300 font-bold border border-orange-500/40"
                        : "text-neutral-200 hover:bg-white/10"
                    }`}
                  >
                    <div className="flex items-center gap-1.5 truncate">
                      <span className="text-xs shrink-0">{lang.flag}</span>
                      <span className="truncate">{lang.nativeName}</span>
                    </div>
                    {isSelected && <Check className="h-3 w-3 text-orange-400 shrink-0 ml-1" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* International Languages */}
          <div className="mt-3 border-t border-white/10 pt-2">
            <div className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-400/90 flex items-center gap-1">
              <span>🌍</span> International ({internationalLanguages.length})
            </div>
            <div className="grid grid-cols-2 gap-1 pt-1">
              {internationalLanguages.map((lang) => {
                const isSelected = activeLang.code === lang.code;
                return (
                  <button
                    key={lang.code}
                    onClick={() => handleSelectLanguage(lang)}
                    className={`flex items-center justify-between rounded-lg px-2.5 py-1.5 text-left text-xs transition-colors ${
                      isSelected
                        ? "bg-blue-500/20 text-blue-300 font-bold border border-blue-500/40"
                        : "text-neutral-200 hover:bg-white/10"
                    }`}
                  >
                    <div className="flex items-center gap-1.5 truncate">
                      <span className="text-xs shrink-0">{lang.flag}</span>
                      <span className="truncate">{lang.nativeName}</span>
                    </div>
                    {isSelected && <Check className="h-3 w-3 text-blue-400 shrink-0 ml-1" />}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
