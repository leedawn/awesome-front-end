import RenderButton from "./RenderButton";
import SFCButton from "./SFCButton.vue";
import JsxButton from "./JsxButton";
import SButton from "./button";
import { App } from "vue";

export { RenderButton, SFCButton, JsxButton, SButton };

export default {
  install(app: App): void {
    app.component(RenderButton.name, RenderButton);
    app.component(SFCButton.name, SFCButton);
    app.component(JsxButton.name, JsxButton);
    app.component(SButton.name, SButton);
  },
};
