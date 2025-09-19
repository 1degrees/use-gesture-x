/**
 * Copyright (c) 2023 - present TinyEngine Authors.
 * Copyright (c) 2023 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */

import { defineConfig } from 'vite'
import path from 'path'
import dts from 'vite-plugin-dts'
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {},
  envDir: './env',
  publicDir: false,
  plugins: [
    dts({
      insertTypesEntry: true,
      tsconfigPath: path.resolve(__dirname, './tsconfig.json'),
    }),
  ],
  build: {
    sourcemap: false,
    lib: {
      name: '@use-gesture-x/core',
      entry: [
        path.resolve(__dirname, './src/index.ts'),
      ],
      fileName: (format, entryName) => `${entryName}.${format}.js`,
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      external: ['vue']
    }
  }
})
