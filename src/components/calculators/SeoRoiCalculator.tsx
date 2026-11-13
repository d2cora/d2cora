"use client";

import React, { useState, useId } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Users, ArrowRight, Shield, Percent } from "lucide-react";

interface SeoRoiCalculatorProps {
  locale?: "de" | "en";
  className?: string;
}

export function SeoRoiCalculator({ locale = "de", className = "" }: SeoRoiCalculatorProps) {
  const isDe = locale === "de";

  // State for range sliders
  const [clicks, setClicks] = useState<number>(1500);
  const [cpc, setCpc] = useState<number>(6.0);
  const [conversionRate, setConversionRate] = useState<number>(2.5);

  const clicksInputId = useId();
  const cpcInputId = useId();
  const crInputId = useId();

  // Calculations
  const seaCost = Math.round(clicks * cpc);
  const retainer = isDe ? 2500 : 3000;
  const monthlySavings = Math.max(0, seaCost - retainer);
  const annualSavings = monthlySavings * 12;
  const estimatedLeads = Math.round(clicks * (conversionRate / 100));

  // Number formatters
  const formatCurrency = (val: number) => {
    if (isDe) {
      return `${val.toLocaleString("de-DE")} €`;
    }
    return `$${val.toLocaleString("en-US")}`;
  };

  return (
    <div
      id="roi-rechner"
      className={`relative rounded-3xl border border-white/10 bg-gradient-to-b from-[#001428] via-[#000d1a] to-[#000810] p-6 sm:p-10 shadow-2xl backdrop-blur-xl ${className}`}
    >
      {/* Decorative Glow */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-500/10 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-emerald-500/10 blur-[100px]" />

      {/* Header */}
      <div className="relative mb-8 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-xs font-semibold tracking-wide text-blue-400">
          <TrendingUp className="h-3.5 w-3.5" />
          {isDe ? "INTERAKTIVER ROI-RECHNER" : "INTERACTIVE ROI CALCULATOR"}
        </div>
        <h3 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
          {isDe
            ? "SEO vs. Google Ads (SEA): Was sparen Sie monatlich?"
            : "SEO vs. Google Ads: Calculate Your Monthly Media Savings"}
        </h3>
        <p className="mt-2 text-sm text-neutral-400 sm:text-base">
          {isDe
            ? "Berechnen Sie in Echtzeit, welchen monatlichen Klick-Wert professionelles SEO gegenüber bezahlter Google-Werbung erzeugt."
            : "Estimate how much paid ad spend you can offset through sustainable high-intent organic search positions."}
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-12">
        {/* Input Sliders (7 Cols) */}
        <div className="space-y-6 lg:col-span-7">
          {/* Slider 1: Target Clicks */}
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
            <div className="flex items-center justify-between text-sm">
              <label htmlFor={clicksInputId} className="font-medium text-neutral-300">
                {isDe ? "Monatliche organische Klicks" : "Monthly Target Clicks"}
              </label>
              <span className="font-mono text-base font-bold text-blue-400">
                {clicks.toLocaleString(isDe ? "de-DE" : "en-US")}{" "}
                <span className="text-xs text-neutral-400">{isDe ? "Klicks" : "clicks"}</span>
              </span>
            </div>
            <input
              id={clicksInputId}
              type="range"
              min={500}
              max={20000}
              step={250}
              value={clicks}
              onChange={(e) => setClicks(Number(e.target.value))}
              aria-label={isDe ? "Monatliche organische Klicks" : "Monthly Target Clicks"}
              className="mt-4 h-2 w-full cursor-pointer appearance-none rounded-lg bg-neutral-800 accent-blue-500 focus:outline-none"
            />
            <div className="mt-2 flex justify-between text-[11px] text-neutral-500">
              <span>500</span>
              <span>10.000</span>
              <span>20.000</span>
            </div>
          </div>

          {/* Slider 2: Average CPC */}
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
            <div className="flex items-center justify-between text-sm">
              <label htmlFor={cpcInputId} className="font-medium text-neutral-300">
                {isDe ? "Durchschnittlicher Google Ads CPC" : "Avg. Google Ads CPC"}
              </label>
              <span className="font-mono text-base font-bold text-amber-400">
                {formatCurrency(cpc)}
                <span className="text-xs text-neutral-400"> / {isDe ? "Klick" : "click"}</span>
              </span>
            </div>
            <input
              id={cpcInputId}
              type="range"
              min={1.0}
              max={15.0}
              step={0.5}
              value={cpc}
              onChange={(e) => setCpc(Number(e.target.value))}
              aria-label={isDe ? "Durchschnittlicher Google Ads CPC" : "Avg. Google Ads CPC"}
              className="mt-4 h-2 w-full cursor-pointer appearance-none rounded-lg bg-neutral-800 accent-amber-500 focus:outline-none"
            />
            <div className="mt-2 flex justify-between text-[11px] text-neutral-500">
              <span>{isDe ? "1,00 €" : "$1.00"}</span>
              <span>{isDe ? "7,50 €" : "$7.50"}</span>
              <span>{isDe ? "15,00 €" : "$15.00"}</span>
            </div>
          </div>

          {/* Slider 3: Conversion Rate */}
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
            <div className="flex items-center justify-between text-sm">
              <label htmlFor={crInputId} className="font-medium text-neutral-300">
                {isDe ? "Conversion-Rate Ihrer Website" : "Lead Conversion Rate"}
              </label>
              <span className="font-mono text-base font-bold text-emerald-400">
                {conversionRate.toFixed(1)} %
              </span>
            </div>
            <input
              id={crInputId}
              type="range"
              min={0.5}
              max={10.0}
              step={0.1}
              value={conversionRate}
              onChange={(e) => setConversionRate(Number(e.target.value))}
              aria-label={isDe ? "Conversion-Rate Ihrer Website" : "Lead Conversion Rate"}
              className="mt-4 h-2 w-full cursor-pointer appearance-none rounded-lg bg-neutral-800 accent-emerald-500 focus:outline-none"
            />
            <div className="mt-2 flex justify-between text-[11px] text-neutral-500">
              <span>0.5 %</span>
              <span>5.0 %</span>
              <span>10.0 %</span>
            </div>
          </div>
        </div>

        {/* Calculated Output Card (5 Cols) */}
        <div className="flex flex-col justify-between rounded-2xl border border-blue-500/20 bg-gradient-to-b from-blue-950/40 via-[#001026] to-[#000c1e] p-6 lg:col-span-5">
          <div className="space-y-4">
            <div className="border-b border-white/10 pb-4">
              <div className="text-xs uppercase tracking-wider text-neutral-400">
                {isDe ? "Äquivalente Google Ads Kosten (SEA)" : "Equivalent Google Ads Cost"}
              </div>
              <div className="mt-1 font-mono text-2xl font-bold text-neutral-200">
                {formatCurrency(seaCost)}
                <span className="text-xs font-normal text-neutral-400"> / {isDe ? "Monat" : "mo"}</span>
              </div>
            </div>

            <div className="border-b border-white/10 pb-4">
              <div className="text-xs uppercase tracking-wider text-neutral-400">
                {isDe ? "D2CORA SEO Retainer Benchmark" : "D2CORA SEO Retainer Benchmark"}
              </div>
              <div className="mt-1 font-mono text-lg font-semibold text-neutral-300">
                {formatCurrency(retainer)}
                <span className="text-xs font-normal text-neutral-400"> / {isDe ? "Monat" : "mo"}</span>
              </div>
            </div>

            <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400">
                <DollarSign className="h-4 w-4" />
                {isDe ? "Ihre monatliche Werbebudget-Ersparnis" : "Monthly Media Budget Saved"}
              </div>
              <div className="mt-1 font-mono text-3xl font-extrabold text-emerald-300">
                {formatCurrency(monthlySavings)}
                <span className="text-xs font-normal text-emerald-400/80"> / {isDe ? "Monat" : "mo"}</span>
              </div>
              <div className="mt-1 text-xs text-emerald-400/80">
                {isDe
                  ? `≈ ${formatCurrency(annualSavings)} / Jahr nachhaltiger Kapitalwert`
                  : `≈ ${formatCurrency(annualSavings)} / year compounded capital value`}
              </div>
            </div>

            <div className="rounded-xl border border-white/5 bg-white/[0.03] p-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-400">
                <Users className="h-4 w-4 text-blue-400" />
                {isDe ? "Erwartete qualifizierte B2B / D2C Leads" : "Estimated Qualified Inbound Leads"}
              </div>
              <div className="mt-1 font-mono text-2xl font-bold text-white">
                ~ {estimatedLeads.toLocaleString(isDe ? "de-DE" : "en-US")}
                <span className="text-xs font-normal text-neutral-400">
                  {" "}
                  {isDe ? "Leads / Monat" : "leads / mo"}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10">
            <Link
              href={isDe ? "/contact?source=roi-rechner" : "/contact?source=roi-calculator"}
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 py-3.5 px-6 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.02] hover:shadow-blue-500/40"
            >
              <span>
                {isDe
                  ? "Kostenlose Potenzialanalyse anfordern"
                  : "Book Your Free 30-Min ROI Strategy Session"}
              </span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <div className="mt-3 flex items-center justify-center gap-2 text-center text-[11px] text-neutral-500">
              <Shield className="h-3 w-3 text-neutral-400" />
              <span>
                {isDe
                  ? "100% DSGVO-konform · Keine Mindestvertragslaufzeit"
                  : "100% GDPR Compliant · Transparent Retainers"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
