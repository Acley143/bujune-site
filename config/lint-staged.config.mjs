const jobs = {
  '**/*.{js,ts,tsx,mjs,cjs}': ['pnpm lint:types', 'pnpm lint', 'pnpm format'],
  '*.{css,md,json,yml,yaml}': ['pnpm format'],
};

export default jobs;
