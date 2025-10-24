const config = {
  // Lint and format TypeScript and React files
  '*.{ts,tsx}': ['eslint --fix', 'prettier --write'],

  // Format other files
  '*.{js,jsx,json,css,md,html}': ['prettier --write']
}

export default config
