import RenderButton from "./RenderButton";
import SFCButton from "./SFCButton.vue";
import JsxButton from "./JsxButton";
import { App } from "vue";

export { RenderButton, SFCButton, JsxButton };

export default {
  install(app: App): void {
    app.component(RenderButton.name, RenderButton);
    app.component(SFCButton.name, SFCButton);
    app.component(JsxButton.name, JsxButton);
  },
};
