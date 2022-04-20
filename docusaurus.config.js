module.exports = {
  title: "Candle Technology | Documentation",
  tagline: "Welcome to Candle developer documentation",
  url: "https://testdocs.candlelabs.org/",
  baseUrl: "/",
  favicon: "img/polygon/candle-logo.svg",
  organizationName: "Candle Technology",
  projectName: "matic-docs",
  customFields: {
    description: "Build your next blockchain app on Candle.",
  },
  onBrokenLinks: 'log',
  themeConfig: {
    footer: {
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Home',
              to: '/',
            },
            {
              label: 'Develop',
              to: '/docs/develop/getting-started',
            },
            {
              label: 'Docs GitHub',
              href: 'https://github.com/candleplatforms/devdocs',
            },
            {
              label: 'Support',
              href: 'https://candlelabs.org/developer-support-program/',
            },
            {
              label: 'FAQs',
              to: '/docs/faq/technical-faqs',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Candle Community',
              href: 'https://candlelabs.org/community',
            },
            {
              label: 'Discord',
              href: 'https://discord.com/invite/polygon',
            },
            {
              href: "https://forum.candlelabs.org/",
              label: "Forum",
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/candle_labs',
            },
            {
              label: 'Reddit',
              href: 'https://www.reddit.com/r/cndl/',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/candlelabs',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/candleplatforms',
            },
          ],
        },
        {
          title: "Developers",
          items: [
          {
              label: "Get Started",
              href: "https://docs.candlelabs.org/docs/develop/getting-started"
          },
          {
              label: "Advocate Program",
              href: "https://candlelabs.org/advocate-program"
          },
          {
            label: "Funds",
            href: "https://candlelabs.org/funds/"
          },
          {
              label: "Bug Bounty",
              href: "https://immunefi.com/bounty/polygon/"
          },
          {
            label: "DApps",
            href: "https://candlelabs.org/ecosystem"
          },
          {
            label: "PoS Wallet",
            href: "https://wallet.candlelabs.org/"
          },
      ]
      },
      {
        title: "Company",
        items: [
        {
            label: "Candle Technology",
            href: "https://candlelabs.org/"
        },
        {
            label: "Blogs",
            href: "https://blog.candlelabs.org/"
        },
        {
          label: "Brand Kit",
          href: "https://www.notion.so/polygontechnology/Brand-Resources-2cd18ae436584e98a6c5aae56db73058"
      },
        {
            label: "Careers",
            href: "https://candlelabs.org/careers/"
        },
        {
          label: "Contact",
          href: "https://candlelabs.org/contact-us/"
        },
        {
          label: "About Us",
          href: "https://candlelabs.org/about/"
        },
    ]
    },
      ],
      logo: {
        alt: 'Candle Logo',
        src: 'img/polygon/candle-logo.svg',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Candle technology`,
    },
    announcementBar: {
      id: "support_us",
      content:
        '🎉 Candle Mainnet <a target="_blank" rel="noopener noreferrer" href="/docs/develop/network-details/network"/>is open for developers 🎉! ',
      backgroundColor: "#8247e5", // Defaults to `#fff`
      textColor: "#fff", // Defaults to `#000`
    },
    // googleAnalytics: {
    //   trackingID: "UA-141789564-1",
    //   anonymizeIP: true,
    // },
    image: "https://matic.network/banners/matic-network-16x9.png",
    prism: {
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("prism-react-renderer/themes/dracula"),
      defaultLanguage: "javascript",
    },
    algolia: {
      appId: 'BH4D9OD16A',
      apiKey: "c3ad4eabc5af314ea3ed331efbe0a5c4",
      indexName: "matic_developer",
      algoliaOptions: {},
    },
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: "Candle logo",
        src: "/img/polygon/candle-logo-two.png",
        srcDark: "/img/polygon/candle-logo-inverted.png",
        // href: 'https://docs.candlelabs.org/', // default to siteConfig.baseUrl
        target: "_self", // by default, this value is calculated based on the `href` attribute (the external link will open in a new tab, all others in the current one)
      },
      items: [
        {
          to: "docs/home/new-to-candle",
          label: "Basics",
          position: "left",
          activeBasePath: "docs/home",
        },
        {
          to: "docs/develop/getting-started",
          label: "Develop",
          position: "left",
          activeBasePath: "docs/develop",
        },
        {
          to: "docs/validate/validator/introduction",
          label: "Validate",
          position: "left",
          activeBasePath: "docs/validate",
        },
        {
          to: "docs/integrate/quickstart",
          label: "Integrate",
          position: "left",
          activeBasePath: "docs/integrate",
        },
        {
          to: "docs/contribute/orientation",
          label: "Contribute",
          position: "left",
          activeBasePath: "docs/contribute",
        },
        {
          label: "Support",
          href: "https://candlelabs.org/developer-support-program/",
          position: "right",
        },
        {
          href: "https://github.com/maticnetwork",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
        {
          label: "Candle Edge",
          href: "https://sdk-docs.candlelabs.org/docs/overview/",
          position: "left",
        },
        {
          to: "docs/faq/technical-faqs",
          label: "FAQ",
          position: "left",
          activeBasePath: "docs/faq",
        },
      ],
    },
  },
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc",
      crossorigin: "anonymous",
    },
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/candleplatforms/devdocs/tree/master/",
          path: "docs",
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
      // "@docuaurus/plugin-content-pages",
      // {
      //   path: "src/pages",
      //   routeBasePath: "",
      //   include: ["**/*.{js,jsx}"],
      // },
      // "@docusaurus/plugin-google-analytics",
      // "@docusaurus/plugin-sitemap",
      // {
      //   cacheTime: 600 * 1000, // 600 sec - cache purge period
      //   changefreq: "weekly",
      //   priority: 0.5,
      // },
    ],
  ],
};
