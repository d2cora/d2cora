import { NextRequest, NextResponse } from 'next/server';
import { isSupportedLocale } from '@/lib/i18n';
import { getLocaleData } from '@/lib/locales';

export const revalidate = 86400; // Cache for 24 hours

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ lang: string }> }
) {
  const { lang } = await params;

  if (!isSupportedLocale(lang)) {
    return NextResponse.json(
      {
        error: 'Unsupported language',
        supportedLanguages: [
          'en', 'hi', 'bn', 'mr', 'ta', 'te', 'gu', 'kn', 'ml', 'pa', 'ur',
          'es', 'fr', 'de', 'ar', 'ja', 'zh', 'ko', 'it', 'pt', 'ru'
        ]
      },
      { status: 404 }
    );
  }

  const localeData = getLocaleData(lang);

  return NextResponse.json(localeData, {
    status: 200,
    headers: {
      'Cache-Control': 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=3600',
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
}
