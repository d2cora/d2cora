import { LocaleCode, LocaleData } from './i18n';

// Static JSON imports for blazing fast SSR / SSG without runtime disk I/O
import enData from '@/data/locales/en.json';
import hiData from '@/data/locales/hi.json';
import bnData from '@/data/locales/bn.json';
import mrData from '@/data/locales/mr.json';
import taData from '@/data/locales/ta.json';
import teData from '@/data/locales/te.json';
import guData from '@/data/locales/gu.json';
import knData from '@/data/locales/kn.json';
import mlData from '@/data/locales/ml.json';
import paData from '@/data/locales/pa.json';
import urData from '@/data/locales/ur.json';
import esData from '@/data/locales/es.json';
import frData from '@/data/locales/fr.json';
import deData from '@/data/locales/de.json';
import arData from '@/data/locales/ar.json';
import jaData from '@/data/locales/ja.json';
import zhData from '@/data/locales/zh.json';
import koData from '@/data/locales/ko.json';
import itData from '@/data/locales/it.json';
import ptData from '@/data/locales/pt.json';
import ruData from '@/data/locales/ru.json';

const dictionaries: Record<LocaleCode, LocaleData> = {
  en: enData as unknown as LocaleData,
  hi: hiData as unknown as LocaleData,
  bn: bnData as unknown as LocaleData,
  mr: mrData as unknown as LocaleData,
  ta: taData as unknown as LocaleData,
  te: teData as unknown as LocaleData,
  gu: guData as unknown as LocaleData,
  kn: knData as unknown as LocaleData,
  ml: mlData as unknown as LocaleData,
  pa: paData as unknown as LocaleData,
  ur: urData as unknown as LocaleData,
  es: esData as unknown as LocaleData,
  fr: frData as unknown as LocaleData,
  de: deData as unknown as LocaleData,
  ar: arData as unknown as LocaleData,
  ja: jaData as unknown as LocaleData,
  zh: zhData as unknown as LocaleData,
  ko: koData as unknown as LocaleData,
  it: itData as unknown as LocaleData,
  pt: ptData as unknown as LocaleData,
  ru: ruData as unknown as LocaleData,
};

export function getLocaleData(locale: string): LocaleData {
  const loc = locale as LocaleCode;
  if (dictionaries[loc]) {
    return dictionaries[loc];
  }
  return dictionaries.en;
}

export function getAllLocaleData(): Record<LocaleCode, LocaleData> {
  return dictionaries;
}
