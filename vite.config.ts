// vite.config.ts
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer'; // Correct import for bundle analysis
import { defineConfig } from 'vite';
import viteCompression from 'vite-plugin-compression';
import sitemap from 'vite-plugin-sitemap';

export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      algorithm: 'gzip', // Enable Gzip compression
      threshold: 10240, // Compress files > 10KB
    }),
    viteCompression({
      algorithm: 'brotliCompress', // Enable Brotli compression
      ext: '.br',
      threshold: 10240,
    }),
    visualizer({
      open: true, // Open bundle report in browser
      gzipSize: true, // Show compressed sizes
      brotliSize: true, // Show Brotli sizes
      filename: 'bundle-report.html', // Save report file
    }),
    sitemap({
      hostname: 'https://www.careerview.com.au',
      dynamicRoutes: [
        '/', // Home
        '/about', // About page
        '/contact', // Contact page
        '/mentors', // Mentors list
        // Dynamic mentor routes
        ...Array.from({ length: 101 }, (_, i) => `/browse-mentors/${i}`)
      ],
      outDir: 'dist',
      changefreq: 'weekly',
      priority: 0.8,
      exclude: ['/404', '/admin'], // Exclude non-public routes
    }),
  ],
  assetsInclude: ['**/*.pdf', '**/*.mp4', '**/*.webp'], // Include WebP assets
  build: {
    minify: 'terser', // Aggressive JS minification
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs
        passes: 2, // Multiple optimization passes
        pure_funcs: ['console.info', 'console.debug'], // Remove additional console methods
      },
      mangle: true, // Shorten variable names
    },
    cssMinify: 'esbuild', // Minify CSS
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'], // Core libraries
          mentors: ['./src/content/mentors.ts'], // Split large data file
          navbar: ['./src/components/navbar/Navbar.tsx'],
          footer: ['./src/components/footer/Footer.tsx'],
          savedMentors: ['./src/components/saved-mentor/index.tsx'], // Adjust if not a directory
          router: ['./src/routes/AppRouter.tsx'],
        },
      },
    },
    sourcemap: false, // Disable sourcemaps in production
  },
  server: {
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable', // 1-year cache for static assets
    },
  },
});