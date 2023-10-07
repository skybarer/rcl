module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-a11y",
    "@storybook/addon-viewport",
    "@storybook/addon-themes",
    "@storybook/addon-links"
  ],
  framework: "@storybook/react",
  core: {
    "builder": "webpack5"
  }
}