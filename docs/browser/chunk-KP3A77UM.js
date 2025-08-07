import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from "./chunk-Z6AWMSNE.js";
import "./chunk-MWOOTSI3.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtext
} from "./chunk-L2C4MEM5.js";

// src/app/admin/admin.component.ts
var _c0 = () => ({ exact: true });
var AdminComponent = class _AdminComponent {
  static \u0275fac = function AdminComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminComponent, selectors: [["app-admin"]], decls: 10, vars: 4, consts: [[1, "info_container", "moving_container"], [1, "nav", "nav-tabs"], [1, "nav-item"], ["routerLink", "/admin/date-search", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/admin/email-search", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], [1, "mt-3"]], template: function AdminComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "ul", 1)(2, "li", 2)(3, "a", 3);
      \u0275\u0275text(4, " Date ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "li", 2)(6, "a", 4);
      \u0275\u0275text(7, " Email ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "div", 5);
      \u0275\u0275element(9, "router-outlet");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(2, _c0));
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(3, _c0));
    }
  }, dependencies: [RouterLink, RouterLinkActive, RouterOutlet], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminComponent, [{
    type: Component,
    args: [{
      selector: "app-admin",
      imports: [RouterLink, RouterLinkActive, RouterOutlet],
      template: `
  <div class="info_container moving_container">
  <ul class="nav nav-tabs">
    <li class="nav-item">
      <a class="nav-link" routerLink="/admin/date-search" routerLinkActive="active"
        [routerLinkActiveOptions]="{ exact: true }">
        Date
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" routerLink="/admin/email-search" routerLinkActive="active"
        [routerLinkActiveOptions]="{ exact: true }">
        Email
      </a>
    </li>
  </ul>

  <!-- Tab content area -->
  <div class="mt-3">
    <router-outlet></router-outlet>
  </div>
</div>`
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminComponent, { className: "AdminComponent", filePath: "src/app/admin/admin.component.ts", lineNumber: 30 });
})();
export {
  AdminComponent
};
//# sourceMappingURL=chunk-KP3A77UM.js.map
