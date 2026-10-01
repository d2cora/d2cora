export type LocaleCode =
  | 'en'
  | 'hi'
  | 'bn'
  | 'mr'
  | 'ta'
  | 'te'
  | 'gu'
  | 'kn'
  | 'ml'
  | 'pa'
  | 'ur'
  | 'es'
  | 'fr'
  | 'de'
  | 'ar'
  | 'ja'
  | 'zh'
  | 'ko'
  | 'it'
  | 'pt'
  | 'ru';

export interface LanguageMeta {
  code: LocaleCode;
  name: string;
  nativeName: string;
  flag: string;
  region: 'Indian' | 'International' | 'Global';
  dir: 'ltr' | 'rtl';
  countryCode: string;
}

export const SUPPORTED_LOCALES: LanguageMeta[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🌐', region: 'Global', dir: 'ltr', countryCode: 'US' },
  // Indian Languages (10)
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳', region: 'Indian', dir: 'ltr', countryCode: 'IN' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', flag: '🇮🇳', region: 'Indian', dir: 'ltr', countryCode: 'IN' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी', flag: '🇮🇳', region: 'Indian', dir: 'ltr', countryCode: 'IN' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', flag: '🇮🇳', region: 'Indian', dir: 'ltr', countryCode: 'IN' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', flag: '🇮🇳', region: 'Indian', dir: 'ltr', countryCode: 'IN' },
  { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી', flag: '🇮🇳', region: 'Indian', dir: 'ltr', countryCode: 'IN' },
  { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ', flag: '🇮🇳', region: 'Indian', dir: 'ltr', countryCode: 'IN' },
  { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം', flag: '🇮🇳', region: 'Indian', dir: 'ltr', countryCode: 'IN' },
  { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ', flag: '🇮🇳', region: 'Indian', dir: 'ltr', countryCode: 'IN' },
  { code: 'ur', name: 'Urdu', nativeName: 'اردو', flag: '🇮🇳', region: 'Indian', dir: 'rtl', countryCode: 'IN' },
  // International Languages (10)
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸', region: 'International', dir: 'ltr', countryCode: 'ES' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷', region: 'International', dir: 'ltr', countryCode: 'FR' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪', region: 'International', dir: 'ltr', countryCode: 'DE' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇦🇪', region: 'International', dir: 'rtl', countryCode: 'AE' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵', region: 'International', dir: 'ltr', countryCode: 'JP' },
  { code: 'zh', name: 'Chinese', nativeName: '简体中文', flag: '🇨🇳', region: 'International', dir: 'ltr', countryCode: 'CN' },
  { code: 'ko', name: 'Korean', nativeName: '한국어', flag: '🇰🇷', region: 'International', dir: 'ltr', countryCode: 'KR' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹', region: 'International', dir: 'ltr', countryCode: 'IT' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português', flag: '🇧🇷', region: 'International', dir: 'ltr', countryCode: 'BR' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский', flag: '🇷🇺', region: 'International', dir: 'ltr', countryCode: 'RU' },
];

export const NON_DEFAULT_LOCALES = SUPPORTED_LOCALES.filter((l) => l.code !== 'en');

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ServiceItem {
  id: number;
  category: string;
  quote: string;
  overview: string;
  items?: string[];
  outcomes?: string;
  bestFor?: string;
}

export interface IndustryItem {
  id: number;
  name: string;
  subNiches?: string[];
}

export interface LocaleData {
  locale: LocaleCode;
  name: string;
  nativeName: string;
  flag: string;
  region: string;
  dir: 'ltr' | 'rtl';
  countryCode: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
    h1: string;
    canonical: string;
    targetCountry: string;
  };
  hero: {
    badge?: string;
    headlinePart1: string;
    headlinePart2: string;
    headlineGradient: string;
    description: string;
    ctaButton: string;
    subCta?: string;
  };
  trustSignal: {
    title: string;
    subtitle: string;
    badge: string;
    ctaButton: string;
  };
  industries: {
    title: string;
    subtitle: string;
    clusters: IndustryItem[];
  };
  vision: {
    quote: string;
    highlight: string;
  };
  graphicPortfolio: {
    title: string;
    titleHighlight: string;
    featuredBadge: string;
    caseStudyTitle: string;
    caseStudyTitleHighlight: string;
    viewAllWork: string;
    agencyType: string;
    clientName: string;
    tags: string[];
  };
  digitalCanvas: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    viewAllProjects: string;
    visitLive: string;
    siteDescriptions: Record<string, string>;
  };
  services: {
    marqueeText: string;
    viewAllServices: string;
    categories: ServiceItem[];
  };
  testimonials: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    videoLabel: string;
    videoCta: string;
  };
  growthPartner: {
    title: string;
    titleHighlight: string;
    paragraph1: string;
    paragraph2: string;
    ctaButton: string;
  };
  faq: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    items: FaqItem[];
  };
  footerCta: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    ctaButton: string;
  };
}

export function getLanguageMeta(code: string): LanguageMeta | undefined {
  return SUPPORTED_LOCALES.find((l) => l.code === code);
}

export function isSupportedLocale(code: string): code is LocaleCode {
  return SUPPORTED_LOCALES.some((l) => l.code === code);
}

export function getHreflangAlternates() {
  const alternates: Record<string, string> = {
    'x-default': 'https://www.d2cora.com',
    en: 'https://www.d2cora.com',
  };
  for (const lang of NON_DEFAULT_LOCALES) {
    alternates[lang.code] = `https://www.d2cora.com/${lang.code}`;
  }
  return alternates;
}
