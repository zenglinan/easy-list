import reactRefresh from '@vitejs/plugin-react-refresh'
import { defineConfig } from 'vite'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  alias: {
    "$config": path.resolve(__dirname, "./config"),
    "$common": path.resolve(__dirname, "./src/common/"),
    "$assets": path.resolve(__dirname, "./src/common/assets/"),
    "$constants": path.resolve(__dirname, "./src/common/constants/"),
    "$components": path.resolve(__dirname, "./src/components/"),
  }
});
