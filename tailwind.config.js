const windmill = require('@windmill/react-ui/config')
module.exports = windmill({
  purge: [],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'main-bg': "url('/src/Mainpage/images/background.jpg')",
       })
    },
  },
  variants: {},
  plugins: [],
})