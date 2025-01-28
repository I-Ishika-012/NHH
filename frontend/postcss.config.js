import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import tailwindPostcss from '@tailwindcss/postcss';

export default {
  plugins: [
    tailwindcss,
    autoprefixer,
    tailwindPostcss, // Add this line if it's missing
  ],
};
