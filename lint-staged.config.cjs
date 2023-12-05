module.exports = {
   '*': () => 'pnpm format:fix',
   '*.svg': () => 'pnpm format:svg',
   '*.(js|jsx|ts|tsx)': () => 'pnpm validate',
};
