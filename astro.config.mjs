import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Pinz Docs',
			social: {
				github: 'https://github.com/LarryEitel/docs.pinz.ai',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Guide', slug: 'guides/toc' },
					],
				},
			],
		}),
	],
});
