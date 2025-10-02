import { createApp } from "vue";
import App from "./App.vue";
import { setupStore } from "./store";
import { setupRouter } from "./router";
import "bootstrap/dist/js/bootstrap";
import "@/assets/css/sb-admin-2.min.css";

function bootstrap() {
  const app = createApp(App);
  setupStore(app);
  setupRouter(app);
  app.mount("#app");
}

bootstrap();
