/* eslint-disable @typescript-eslint/no-unused-vars */
import path from 'path';
import react from '@vitejs/plugin-react-swc';
import { defineConfig, loadEnv } from 'vite';
import { checker } from 'vite-plugin-checker';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';
import dynamicImport from 'vite-plugin-dynamic-import';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
   const env = loadEnv(mode, process.cwd(), '');

   return {
      plugins: [checker({ typescript: false }), react(), dynamicImport(), svgr(), tsconfigPaths()],
      server: {
         port: 4001,
      },
      resolve: {
         alias: {
            '@Core': path.resolve(__dirname, './src/core'),
            '@Component': path.resolve(__dirname, './src/components'),
            '@Hepler': path.resolve(__dirname, './src/heplers'),
            '@Config': path.resolve(__dirname, './src/configs'),
            '@Redux': path.resolve(__dirname, './src/redux'),
            '@Page': path.resolve(__dirname, './src/page'),
            '@Hooks': path.resolve(__dirname, './src/hooks'),
         },
      },
   };
});
