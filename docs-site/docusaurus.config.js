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
