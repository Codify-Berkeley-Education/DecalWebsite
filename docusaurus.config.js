// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Codify Education Program",
  tagline: "Learn Full Stack Development with Codify!",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://Codify-Berkeley-Education.github.io/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/DecalWebsite",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Codify-Berkeley-Education", // Usually your GitHub org/user name.
  projectName: "DecalWebsite", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/Codify-C-Logo.png",
      navbar: {
        title: "SDE Website",
        logo: {
          alt: "My Site Logo",
          src: "img/Codify-C-Logo.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Course Content",
          },
          { to: "Policies", label: "Course Policies", position: "left" },
          { to: "Enroll", label: "Enroll", position: "left" },
          {
            href: "https://github.com/Codify-Berkeley-Education",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Codify Discord",
                href: "https://discord.com/invite/NHnmN7ks7F",
              },
              {
                label: "Codify Instagram",
                href: "https://www.instagram.com/codifyberkeley",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Main Codify Website",
                href: "https://codifyberkeley.org/",
              },
              {
                label: "Codify GitHub",
                href: "https://github.com/Codify-Club-Berkeley",
              },
            ],
          },
        ],
        copyright: `Maintained by Codify Berkeley, Build with Docusaurus`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
