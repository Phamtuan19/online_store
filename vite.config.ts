/* eslint-disable @typescript-eslint/no-unused-vars */
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { checker } from 'vite-plugin-checker';
import dynamicImport from 'vite-plugin-dynamic-import';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
   const env = loadEnv(mode, process.cwd(), '');

   return {
      plugins: [checker({ typescript: false }), react(), dynamicImport()],
      server: {
         port: 3000,
      },
      resolve: {
         alias: {
            '@Core': path.resolve(__dirname, './src/core'),
            '@Component': path.resolve(__dirname, './src/components'),
            '@Hepler': path.resolve(__dirname, './src/heplers'),
            '@Config': path.resolve(__dirname, './src/configs'),
            '@Redux': path.resolve(__dirname, './src/redux'),
            '@Page': path.resolve(__dirname, './src/page'),
         },
      },
   };
});
