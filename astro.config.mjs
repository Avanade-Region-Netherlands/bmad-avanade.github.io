import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://bmad-avanade.github.io',
  integrations: [
    starlight({
      title: 'BMAD Avanade',
      description: 'Overview of BMAD Avanade modules — AI-powered development methodology modules built by Avanade Netherlands.',
      logo: {
        light: './src/assets/logo-light.svg',
        dark: './src/assets/logo-dark.svg',
        replacesTitle: false,
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/Avanade-Region-Netherlands',
        },
      ],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Introduction', link: '/' },
          ],
        },
        {
          label: 'Modules',
          items: [{ autogenerate: { directory: 'modules' } }],
        },
      ],
      customCss: ['./src/styles/custom.css'],
    }),
  ],
});
