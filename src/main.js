import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import PrimeVue from "primevue/config";
import Dropdown from "primevue/dropdown";
import Button from "primevue/button";
import TieredMenu from "primevue/tieredmenu";
import InputNumber from "primevue/inputnumber";
import InputText from "primevue/inputtext";
import Password from "primevue/password";
import Card from "primevue/card";
import Dialog from "primevue/dialog";
import "primevue/resources/themes/saga-orange/theme.css";
import "primeicons/primeicons.css";
import "primevue/resources/primevue.min.css";

const app = createApp(App);
app.use(PrimeVue);
app.use(store);
app.use(router);
app.mount("#app");
app
  // eslint-disable-next-line vue/multi-word-component-names
  .component("Dropdown", Dropdown)
  .component("Button", Button)
  .component("InputNumber", InputNumber)
  .component("Card", Card)
  .component("TieredMenu", TieredMenu)
  .component("Dialog", Dialog)
  .component("InputText", InputText)
  .component("Password", Password);
