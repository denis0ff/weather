import { resolve } from 'path'

export const webpack = {
  alias: {
    '@components': resolve(__dirname, 'src/components'),
    '@pages': resolve(__dirname, 'src/pages'),
    '@constants': resolve(__dirname, 'src/constants'),
    '@utils': resolve(__dirname, 'src/utils'),
    '@App': resolve(__dirname, 'src/App'),
    '@theme': resolve(__dirname, 'src/theme'),
    '@interfaces': resolve(__dirname, 'src/interfaces'),
    '@reducers': resolve(__dirname, 'src/reducers'),
    '@store': resolve(__dirname, 'src/store'),
    '@hooks': resolve(__dirname, 'src/hooks'),
    '@assets': resolve(__dirname, 'src/assets'),
  },
}
