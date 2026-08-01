const config = {
  title: 'Project Docs',
  tagline: 'Secure-by-default delivery evidence',
  url: 'https://example.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  presets: [
    ['classic', {
      docs: {
        // Serve docs at the site root: the theme's navbar title links to '/',
        // and without a page there the generated site fails its own
        // onBrokenLinks: 'throw' on the very first build (issue #72, layer 3).
        routeBasePath: '/',
        sidebarPath: require.resolve('./sidebars.js')
      },
      blog: false,
      theme: {
        customCss: require.resolve('./src/css/custom.css')
      }
    }]
  ]
};

module.exports = config;
