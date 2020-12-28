module.exports = {
  '**/*.(ts|js)?(x)': (filenames) => `npm run lint ${filenames.join(' ')}`,
  'src/**/*.{js,jsx,ts,tsx,json,css,scss,md}': ['prettier --write'],
};
