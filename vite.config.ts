import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    fs: {
      allow: ['..']
    }
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  publicDir: 'public',
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
      },
      external: ['/sitemap.xml', '/robots.txt', '/ai-content.html'],
      output: {
        assetFileNames: (assetInfo) => {
          // Keep static files at root level without hash
          if (assetInfo.name === 'sitemap.xml' || assetInfo.name === 'robots.txt' || assetInfo.name === 'ai-content.html') {
            return '[name][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        }
      }
    },
    assetsDir: 'assets',
    copyPublicDir: true,
  },
  preview: {
    port: 8080,
    host: "::",
  },
}));
