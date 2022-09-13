import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import {
  ArcoResolver,
} from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        ArcoResolver(),
      ],
    })
  ],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          'arcoblue-1': '#4D3800',
          'arcoblue-2': '#785E07',
          'arcoblue-3': '#A38614',
          'arcoblue-4': '#CFB325',
          'arcoblue-5': '#FAE13C',
          'arcoblue-6': '#CFB325',
          'arcoblue-7': '#FCF374',
          'arcoblue-8': '#FDFA9D',
          'arcoblue-9': '#FEFEC6',
          'arcoblue-10': '#FEFFF0',
        },
        javascriptEnabled: true
      }
    }
  }
})