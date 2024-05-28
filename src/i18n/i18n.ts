import { BlankTranslation } from "@/i18n/translations/blank";
import { EnTranslation } from "@/i18n/translations/en";
import { UaTranslation } from "@/i18n/translations/ua";
import { createI18n, useI18n } from "vue-i18n";

type MessageSchema = typeof BlankTranslation;

export function useI18nLocal() {
    return useI18n<[MessageSchema], 'en' | 'ua'>(
        {
            inheritLocale: true,
            messages: {
                en: EnTranslation,
                ua: UaTranslation,
            },
        }
    );
}

export function i18nCallable() {
    return createI18n<[MessageSchema], 'en' | 'ua'>({
        locale: localStorage.getItem("locale") || 'ua',
        fallbackLocale: 'en',
        messages: {
            en: EnTranslation,
            ua: UaTranslation,
        },
        allowComposition: true,
        legacy: false,
        globalInjection: true,
    });
}

export const i18n = i18nCallable();
