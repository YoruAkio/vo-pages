import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';
const site = 'https://vo.is-a.dev';

// https://astro.build/config
export default defineConfig({
    site,
    vite: {
        build: {
            sourcemap: true,
        },
    },
    markdown: {
        shikiConfig: {
            theme: 'css-variables',
        },
    },
    integrations: [
        mdx(),
        sitemap({
            customPages: [site + '/discord', site + '/github'],
        }),
        svelte(),
    ],
    output: 'dist',
    adapter: cloudflare(),
});
