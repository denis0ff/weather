const font = 'sans-serif'

const black = '#000000'
const white = '#ffffff'
const error = '#c86464'
const primary = '#2a3245'
const secondary = '#787878'
const border = '#727272'
const bg = '#f5f5f5'

export default {
  font,
  fontColor: white,
  spaces: ['0', '4px', '8px', '16px', '32px', '64px', '128px'],
  fontSizes: ['12px', '14px', '16px', '20px', '24px', '32px', '40px', '56px'],
  fontWeights: [200, 400, 600],
  borderRadiuses: ['0', '5px', '10px', '20px'],
  webkitScrollBarWidth: '5px',
  defaultTransition: '100ms',
  boxShadow: `0 0 20px 5px ${black}`,
  footerBgColor: '#3f4b6194',
  weatherIconSize: '30px',
  colors: {
    primary,
    secondary,
    border,
    bg,
    black,
    white,
    error,
  },
}
