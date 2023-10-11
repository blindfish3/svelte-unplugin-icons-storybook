import type { StorybookConfig } from '@storybook/sveltekit';
import { mergeConfig } from 'vite';
import Icons from 'unplugin-icons/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders';

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx|svelte)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-svelte-csf',
	],
	framework: {
		name: '@storybook/sveltekit',
		options: {}
	},
	docs: {
		autodocs: 'tag'
	},
	async viteFinal(config) {
		return mergeConfig(config, {
			plugins: [
				Icons({
					compiler: 'svelte',
					customCollections: {
						'lib-icons': FileSystemIconLoader('./static/icons/'),
					},
				}),
			],
		});
	}
};
export default config;
