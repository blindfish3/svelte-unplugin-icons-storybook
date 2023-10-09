import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

import Icons from 'unplugin-icons/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders';


export default defineConfig({
	plugins: [
		Icons({
			compiler: 'svelte',
			customCollections: {
				'lib-icons': FileSystemIconLoader('./static/icons/'),
			},
		}),
		sveltekit()
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
