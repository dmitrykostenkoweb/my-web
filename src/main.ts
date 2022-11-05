import { createApp } from "vue";
import App from "./App.vue";
import router from "@/routes";
import vuetify from "./plugins/vuetify";
import VueKinesis from "vue-kinesis";
import { loadFonts } from "./plugins/webfontloader";
import "./styles/main.css";

loadFonts();

createApp(App)
  .use(router)
  .use(vuetify)
  .use(VueKinesis)
  .use(CursorFx)
  .mount("#app");
