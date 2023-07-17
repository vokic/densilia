import { createCustomElement } from "@angular/elements";
import { createApplication } from "@angular/platform-browser"
import { MenuComponent } from "./app/menu/menu.component";

(async () =>{
  
  const app = await createApplication({
    providers: [],
  });

  const inputElement = createCustomElement(MenuComponent, {injector: app.injector,});
  customElements.define('menu-component', inputElement)
})();