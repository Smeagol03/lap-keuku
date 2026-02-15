module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './components.json'
    // intentionally excluding `knowledge/` (docs/examples) to avoid generating
    // Tailwind utilities from example strings like `(<custom-property>)`
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
