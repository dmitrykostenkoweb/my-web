import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueKinesis from "vue-kinesis";
import { loadFonts } from "./plugins/webfontloader";
import "./styles/main.css";

loadFonts();

createApp(App).use(vuetify).use(VueKinesis).mount("#app");
