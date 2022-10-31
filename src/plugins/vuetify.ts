import { createVuetify } from "vuetify";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
// @ts-ignore
import colors from "vuetify/lib/util/colors";

export default createVuetify({
  theme: {
    defaultTheme: "dark",
    themes: {
      light: {
        dark: false,
        colors: {
          // primary: colors.red.darken1, // #E53935
          // secondary: colors.red.lighten4, // #FFCDD2
        },
      },
      dark: {
        dark: true,
        colors: {
          // primary: colors.red.darken1, // #E53935
          // secondary: colors.red.lighten4, // #FFCDD2
        },
      },
    },
  },
});
