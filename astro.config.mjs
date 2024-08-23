import {defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';
// Load environment variables
import dotenv from 'dotenv';
dotenv.config();


export const locales = {
	root: { label: 'English', lang: 'en' },
	de: { label: 'Deutsch', lang: 'de' },
	es: { label: 'Español', lang: 'es' },
	ja: { label: '日本語', lang: 'ja' },
	fr: { label: 'Français', lang: 'fr' },
	it: { label: 'Italiano', lang: 'it' },
	id: { label: 'Bahasa Indonesia', lang: 'id' },
	'zh-cn': { label: '简体中文', lang: 'zh-CN' },
	'pt-br': { label: 'Português do Brasil', lang: 'pt-BR' },
	'pt-pt': { label: 'Português', lang: 'pt-PT' },
	ko: { label: '한국어', lang: 'ko' },
	tr: { label: 'Türkçe', lang: 'tr' },
	ru: { label: 'Русский', lang: 'ru' },
	hi: { label: 'हिंदी', lang: 'hi' },
	da: { label: 'Dansk', lang: 'da' },
	uk: { label: 'Українська', lang: 'uk' },
};
const CONTEXT = process.env.CONTEXT || 'development';
const PREVIEW_SITE = CONTEXT !== 'production' && 'http://localhost:4321' || 'https://docs.pinz.ai/';
const PINZ_SITE = CONTEXT !== 'production' && 'https://localhost' || 'https://pinz.ai/';

export default defineConfig({
	site: PREVIEW_SITE,
	trailingSlash: 'always',
    integrations: [
		starlight({
            title: {
				en: 'pinz.ai📍docs'
			},
			sidebar: [
				{
					label: '',
					link: PINZ_SITE,
					badge: '← Return to Pinz.ai',
				},
				{
					label: 'Start Here',
					translations: {
						de: 'Beginne hier',
						es: 'Comienza aqui',
						ja: 'ここからはじめる',
						fr: 'Commencez ici',
						it: 'Inizia qui',
						id: 'Mulai dari sini',
						'zh-CN': '从这里开始',
						'pt-BR': 'Comece Aqui',
						'pt-PT': 'Comece Aqui',
						ko: '여기서부터',
						tr: 'Buradan Başlayın',
						ru: 'Первые шаги',
						hi: 'यहाँ से शुरू करे',
						uk: 'Почніть звідси'
					},
					items: [
						'sign-up',
						'sign-in',
					],
				},
				{
					label: 'Guides',
					translations: {
						de: 'Anleitungen',
						es: 'Guías',
							ja: 'ガイド',
						fr: 'Guides',
						it: 'Guide',
						id: 'Panduan',
						'zh-CN': '指南',
						'pt-BR': 'Guias',
						'pt-PT': 'Guias',
						ko: '가이드',
						tr: 'Rehber',
						ru: 'Руководства',
						hi: 'गाइड',
						uk: 'Ґайди',
					},
					autogenerate: {directory: 'guides'},
				},
				{
					label: 'Reference',
					translations: {
						de: 'Referenz',
						es: 'Referencias',
						ja: 'リファレンス',
						fr: 'Référence',
						it: 'Riferimenti',
						id: 'Referensi',
						'zh-CN': '参考',
						'pt-BR': 'Referência',
						ko: '참조',
						tr: 'Referanslar',
						ru: 'Справочник',
						hi: 'संदर्भ',
						uk: 'Довідник',
					},
					autogenerate: {directory: 'reference'},
				},
				{
					label: 'Resources',
					translations: {
						'zh-CN': '资源',
						es: 'Recursos',
						fr: 'Ressources',
						'pt-BR': 'Recursos',
						'pt-PT': 'Recursos',
						ja: 'リソース',
						ru: 'Ресурсы',
					},
					autogenerate: {directory: 'resources'},
				},
			],
			locales,
			plugins: process.env.CHECK_LINKS
				? [
					starlightLinksValidator({
						errorOnFallbackPages: false,
						errorOnInconsistentLocale: true,
					}),
				]
				: [],
			customCss: [
				'/src/styles/custom.css',
			],
			editLink: {
				baseUrl: 'https://github.com/LarryEitel/docs.pinz.ai/edit/main/src/content/docs',
			},
			social: {
				youtube: 'https://www.youtube.com/channel/UCn2NqLWFzf9KSKfDVV96OWw',
				github: 'https://github.com/LarryEitel/docs.pinz.ai',
				discord: 'https://discord.gg/TrV8Zh4b',
			},
        }),
    ],
});
